from typing import List, Dict, Any, Optional
from database import execute_query, execute_one

class SISCourseRecommender:
    """
    Intelligent, explainable course recommendation engine for Student Information System (SIS).
    Evaluates curriculum alignment, prerequisite DAGs, student GPA standing, workload constraints,
    and historical departmental grade trends.
    """

    def recommend(self, student_id: str, top_n: int = 6) -> Dict[str, Any]:
        student = execute_one(
            "SELECT s.*, d.department_name, d.code_prefix FROM students s "
            "JOIN departments d ON s.department_id = d.department_id WHERE s.student_id = ?",
            (student_id,)
        )
        if not student:
            raise ValueError(f"Student '{student_id}' does not exist in the Student Information System.")

        student_dept = student["department_id"]
        student_level = int(student["year_level"])
        student_gpa = float(student["gpa"])
        standing = student["academic_standing"]

        # 1. Fetch currently enrolled courses (Fall 2026 or active)
        current_enrollments = execute_query(
            "SELECT course_id FROM enrollments WHERE student_id = ? AND enrollment_status IN ('Enrolled', 'In Progress')",
            (student_id,)
        )
        already_enrolled = {row["course_id"] for row in current_enrollments}

        # 2. Fetch completed/passed and failed courses
        grades_history = execute_query(
            "SELECT course_id, numeric_grade, letter_grade, grade_points FROM grades WHERE student_id = ?",
            (student_id,)
        )
        passed_courses = {
            g["course_id"] for g in grades_history if g["numeric_grade"] is not None and g["numeric_grade"] >= 60.0
        }
        failed_courses = {
            g["course_id"] for g in grades_history if g["numeric_grade"] is not None and g["numeric_grade"] < 60.0
        }

        # Department performance metric
        dept_grades = [g["numeric_grade"] for g in grades_history if g["course_id"].startswith(student["code_prefix"])]
        dept_avg = sum(dept_grades) / len(dept_grades) if dept_grades else None

        # 3. Retrieve all courses
        all_courses = execute_query(
            "SELECT c.*, d.department_name FROM courses c "
            "JOIN departments d ON c.department_id = d.department_id"
        )

        recommendations = []

        for course in all_courses:
            cid = str(course["course_id"])
            cdept = str(course["department_id"])
            clevel = int(course["year_level"])
            credits = int(course["credits"])
            prereq = course["prerequisite_course_id"]

            # Strict SIM Program Isolation:
            # Only SIM students (department_id == '11') can register for or be recommended SIM courses.
            is_sim_course = (cdept == "11" or cid.startswith("417") or "SIM" in cid.upper())
            is_sim_student = (str(student_dept) == "11")
            if is_sim_course and not is_sim_student:
                continue
            if is_sim_student and not is_sim_course:
                continue

            # Skip if currently taking it
            if cid in already_enrolled:
                continue

            # If already passed with grade >= C, don't recommend retake
            if cid in passed_courses:
                continue

            # Prerequisite enforcement
            if prereq and prereq not in passed_courses:
                continue

            # Year level check: allow current year and below; allow 1 level above only for honors students (GPA >= 3.6)
            max_allowed_level = student_level + (1 if student_gpa >= 3.6 else 0)
            if clevel > max_allowed_level:
                continue

            score = 0
            reasons = []
            tags = []

            # Retake failed course priority
            if cid in failed_courses:
                score += 45
                reasons.append("Retake recommended to recover quality grade points and fulfill graduation requirements")
                tags.append("Retake Priority")

            # Department alignment
            if cdept == student_dept:
                score += 50
                reasons.append(f"Core major requirement for {student['department_name']}")
                tags.append("Major Core")
            else:
                score += 20
                reasons.append(f"Approved interdisciplinary elective in {course['department_name']}")
                tags.append("Elective")

            # Year level matching
            if clevel == student_level:
                score += 25
                reasons.append(f"Standard curriculum track for Year {student_level}")
            elif clevel < student_level:
                score += 15
                reasons.append("Fulfills uncompleted foundational coursework from previous year")
            else:
                score += 10
                reasons.append("Accelerated advanced study permitted for high academic standing")
                tags.append("Accelerated")

            # Prerequisite completion credit
            if prereq:
                score += 15
                reasons.append(f"Direct progression after passing prerequisite {prereq}")
            else:
                score += 10
                reasons.append("No prerequisite bottlenecks required")

            # Workload & Credit balancing
            if credits <= 3:
                score += 10
                reasons.append(f"Standard {credits}-credit hour load helps balance semester schedule")
            else:
                # 4-credit course: favorable if GPA is good, penalty if student is on warning
                if student_gpa < 2.0:
                    score -= 10
                    reasons.append(f"Demanding {credits}-credit lab course; caution advised for students under academic warning")
                else:
                    score += 5
                    reasons.append(f"Comprehensive {credits}-credit intensive lecture and lab component")

            # Department aptitude bonus
            if dept_avg is not None and dept_avg >= 78.0:
                score += 10
                reasons.append(f"Strong historical mastery in departmental courses (avg: {dept_avg:.1f}%)")

            # Normalize match percentage (max score is around 125)
            match_pct = min(99, max(50, int((score / 125.0) * 100)))

            recommendations.append({
                "course_id": cid,
                "course_name": course["course_name"],
                "department_id": cdept,
                "department_name": course["department_name"],
                "year_level": clevel,
                "credits": credits,
                "prerequisite": prereq or "None",
                "score": score,
                "match_percentage": match_pct,
                "reasons": reasons,
                "tags": tags,
                "description": course["description"]
            })

        # Sort by highest score, then course_id
        recommendations.sort(key=lambda x: (-x["score"], x["course_id"]))

        return {
            "student": {
                "student_id": student["student_id"],
                "student_name": student["student_name"],
                "email": student["email"],
                "department_id": student["department_id"],
                "department_name": student["department_name"],
                "year_level": student_level,
                "gpa": student_gpa,
                "academic_standing": standing,
                "mbti": student["mbti"],
                "learning_style": student["learning_style"],
                "advising_notes": student["advising_notes"]
            },
            "total_eligible_courses": len(recommendations),
            "top_recommendations": recommendations[:top_n],
            "algorithm_notes": (
                "Recommendations calculated using multi-attribute constraint satisfaction: "
                "prerequisite verification, degree pathway alignment, workload balancing, "
                "and historical departmental competency."
            )
        }
