from typing import Dict, Any, List
from database import execute_query, execute_one

class SISIntelligentFeatures:
    """
    Advanced intelligent academic features:
    1. Automated Degree Audit & Graduation Readiness Assessment
    2. Interactive What-If GPA Simulator
    3. Prerequisite DAG Curriculum Visualizer
    """

    TOTAL_GRADUATION_CREDITS = 120

    def degree_audit(self, student_id: str) -> Dict[str, Any]:
        student = execute_one(
            "SELECT s.*, d.department_name, d.code_prefix FROM students s "
            "JOIN departments d ON s.department_id = d.department_id WHERE s.student_id = ?",
            (student_id,)
        )
        if not student:
            raise ValueError(f"Student '{student_id}' not found.")

        # Completed courses with passing grade
        grades = execute_query(
            "SELECT g.course_id, g.numeric_grade, g.letter_grade, g.credits, c.course_name, c.year_level, c.department_id "
            "FROM grades g JOIN courses c ON g.course_id = c.course_id "
            "WHERE g.student_id = ? AND g.numeric_grade >= 60.0",
            (student_id,)
        )
        passed_course_ids = {g["course_id"] for g in grades}
        total_earned_credits = sum(g["credits"] for g in grades)

        # Department courses
        dept_courses = execute_query(
            "SELECT * FROM courses WHERE department_id = ? ORDER BY year_level, course_id",
            (student["department_id"],)
        )
        dept_total_credits = sum(c["credits"] for c in dept_courses)
        dept_earned_credits = sum(g["credits"] for g in grades if g["course_id"].startswith(student["code_prefix"]))

        # Year-level progress breakdown
        year_breakdown = {}
        for yr in [1, 2, 3, 4]:
            yr_courses = [c for c in dept_courses if c["year_level"] == yr]
            yr_total_cred = sum(c["credits"] for c in yr_courses)
            yr_earned_cred = sum(g["credits"] for g in grades if g["year_level"] == yr and g["course_id"].startswith(student["code_prefix"]))
            year_breakdown[f"Year {yr}"] = {
                "total_required_credits": yr_total_cred,
                "earned_credits": yr_earned_cred,
                "completion_pct": round((yr_earned_cred / max(1, yr_total_cred)) * 100, 1),
                "is_completed": yr_earned_cred >= yr_total_cred
            }

        remaining_credits = max(0, self.TOTAL_GRADUATION_CREDITS - total_earned_credits)
        completion_pct = round((total_earned_credits / self.TOTAL_GRADUATION_CREDITS) * 100, 1)

        # Expected completion estimate
        semesters_needed = (remaining_credits + 14) // 15
        current_level = int(student["year_level"])

        if current_level == 4 and remaining_credits <= 30:
            status = "On Track for Graduation"
            status_color = "emerald"
        elif current_level == 3 and remaining_credits <= 60:
            status = "On Track"
            status_color = "blue"
        elif current_level == 2 and remaining_credits <= 90:
            status = "On Track"
            status_color = "blue"
        elif current_level == 1:
            status = "Freshman Foundations Phase"
            status_color = "indigo"
        else:
            status = "Behind Degree Benchmark (Advising Needed)"
            status_color = "amber"

        return {
            "student_id": student["student_id"],
            "student_name": student["student_name"],
            "department_name": student["department_name"],
            "current_year_level": current_level,
            "cumulative_gpa": float(student["gpa"]),
            "graduation_summary": {
                "total_required_credits": self.TOTAL_GRADUATION_CREDITS,
                "earned_credits": total_earned_credits,
                "remaining_credits": remaining_credits,
                "overall_completion_pct": completion_pct,
                "estimated_semesters_remaining": semesters_needed,
                "status": status,
                "status_color": status_color
            },
            "major_core_progress": {
                "department_required_credits": dept_total_credits,
                "department_earned_credits": dept_earned_credits,
                "department_completion_pct": round((dept_earned_credits / max(1, dept_total_credits)) * 100, 1)
            },
            "year_level_breakdown": year_breakdown
        }

    def simulate_gpa(
        self,
        student_id: str,
        simulated_courses: List[Dict[str, Any]]
    ) -> Dict[str, Any]:
        """
        Calculates projected new cumulative GPA given simulated upcoming courses.
        simulated_courses is list of: {"course_name": str, "credits": int, "expected_grade": str}
        """
        student = execute_one("SELECT * FROM students WHERE student_id = ?", (student_id,))
        if not student:
            raise ValueError(f"Student '{student_id}' not found.")

        # Historical grades
        grades = execute_query(
            "SELECT credits, grade_points, numeric_grade FROM grades WHERE student_id = ?",
            (student_id,)
        )

        current_credits = sum(g["credits"] for g in grades)
        current_quality_points = sum(g["credits"] * g["grade_points"] for g in grades)
        current_gpa = round(current_quality_points / max(1, current_credits), 2)

        grade_scale = {
            "A": 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7,
            "C+": 2.3, "C": 2.0, "C-": 1.7, "D": 1.0, "F": 0.0
        }

        sim_credits = 0
        sim_points = 0.0
        validated_items = []

        for item in simulated_courses:
            cname = item.get("course_name", "Elective")
            credits = int(item.get("credits", 3))
            expected = item.get("expected_grade", "A").upper()
            pts = grade_scale.get(expected, 3.0)

            sim_credits += credits
            sim_points += (pts * credits)

            validated_items.append({
                "course_name": cname,
                "credits": credits,
                "expected_grade": expected,
                "grade_points": pts
            })

        sim_semester_gpa = round(sim_points / max(1, sim_credits), 2) if sim_credits > 0 else 0.0
        projected_total_credits = current_credits + sim_credits
        projected_total_points = current_quality_points + sim_points
        projected_gpa = round(projected_total_points / max(1, projected_total_credits), 2)
        gpa_delta = round(projected_gpa - current_gpa, 2)

        return {
            "current": {
                "credits_completed": current_credits,
                "cumulative_gpa": current_gpa,
                "academic_standing": student["academic_standing"]
            },
            "simulated_semester": {
                "courses": validated_items,
                "semester_credits": sim_credits,
                "projected_semester_gpa": sim_semester_gpa
            },
            "projected_outcome": {
                "projected_total_credits": projected_total_credits,
                "projected_cumulative_gpa": projected_gpa,
                "gpa_delta": gpa_delta,
                "trajectory": "Improving" if gpa_delta > 0 else ("Declining" if gpa_delta < 0 else "Neutral")
            }
        }

    def prerequisite_tree(self, student_id: str) -> Dict[str, Any]:
        """
        Constructs node and edge graph for the student's curriculum,
        annotating each course with its status: 'completed', 'enrolled', 'eligible', or 'locked'.
        """
        student = execute_one(
            "SELECT s.*, d.department_name FROM students s "
            "JOIN departments d ON s.department_id = d.department_id WHERE s.student_id = ?",
            (student_id,)
        )
        if not student:
            raise ValueError(f"Student '{student_id}' not found.")

        # Grades history
        grades = execute_query(
            "SELECT course_id, numeric_grade, letter_grade FROM grades WHERE student_id = ?",
            (student_id,)
        )
        passed_dict = {
            g["course_id"]: {"numeric_grade": g["numeric_grade"], "letter_grade": g["letter_grade"]}
            for g in grades if g["numeric_grade"] >= 60.0
        }

        # Enrolled
        enrolled = execute_query(
            "SELECT course_id FROM enrollments WHERE student_id = ? AND enrollment_status IN ('Enrolled', 'In Progress')",
            (student_id,)
        )
        enrolled_set = {e["course_id"] for e in enrolled}

        # Department courses
        courses = execute_query(
            "SELECT * FROM courses WHERE department_id = ? ORDER BY year_level, course_id",
            (student["department_id"],)
        )

        nodes = []
        edges = []

        for c in courses:
            cid = c["course_id"]
            prereq = c["prerequisite_course_id"]

            if cid in passed_dict:
                status = "completed"
                grade_info = passed_dict[cid]
            elif cid in enrolled_set:
                status = "in_progress"
                grade_info = None
            elif not prereq or prereq in passed_dict:
                status = "eligible"
                grade_info = None
            else:
                status = "locked"
                grade_info = None

            nodes.append({
                "id": cid,
                "label": c["course_name"],
                "year_level": c["year_level"],
                "credits": c["credits"],
                "prerequisite": prereq,
                "status": status,
                "grade_info": grade_info
            })

            if prereq:
                edges.append({
                    "from": prereq,
                    "to": cid,
                    "fulfilled": prereq in passed_dict
                })

        return {
            "department_id": student["department_id"],
            "department_name": student["department_name"],
            "nodes": nodes,
            "edges": edges,
            "summary": {
                "total_curriculum_courses": len(nodes),
                "completed": sum(1 for n in nodes if n["status"] == "completed"),
                "in_progress": sum(1 for n in nodes if n["status"] == "in_progress"),
                "eligible": sum(1 for n in nodes if n["status"] == "eligible"),
                "locked": sum(1 for n in nodes if n["status"] == "locked")
            }
        }
