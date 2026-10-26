from typing import Dict, Any, List
from database import execute_query, execute_one

class SISAcademicAnalytics:
    """
    In-depth academic analytics and early-warning intelligence engine.
    Analyzes historical grade trajectories, semester GPAs, LMS engagement,
    and attendance correlations.
    """

    def analyze_student(self, student_id: str) -> Dict[str, Any]:
        student = execute_one(
            "SELECT s.*, d.department_name, d.dean FROM students s "
            "JOIN departments d ON s.department_id = d.department_id WHERE s.student_id = ?",
            (student_id,)
        )
        if not student:
            raise ValueError(f"Student '{student_id}' not found.")

        # 1. Fetch semester summary trends
        summaries = execute_query(
            "SELECT * FROM semester_summary WHERE student_id = ? ORDER BY summary_id ASC",
            (student_id,)
        )

        semester_order = {
            "Fall 2023": 1, "Spring 2024": 2, "Fall 2024": 3,
            "Spring 2025": 4, "Fall 2025": 5, "Spring 2026": 6, "Fall 2026": 7
        }
        summaries.sort(key=lambda x: semester_order.get(x["semester"], 99))

        # 2. Fetch all grades with course details
        grades = execute_query(
            "SELECT g.*, c.course_name, c.department_id as course_dept FROM grades g "
            "JOIN courses c ON g.course_id = c.course_id WHERE g.student_id = ?",
            (student_id,)
        )

        # 3. Fetch activity records
        activities = execute_query(
            "SELECT a.*, c.course_name FROM student_activity a "
            "JOIN courses c ON a.course_id = c.course_id WHERE a.student_id = ?",
            (student_id,)
        )

        # Calculate overall aggregates
        total_credits_attempted = sum(g["credits"] for g in grades)
        total_credits_passed = sum(g["credits"] for g in grades if g["numeric_grade"] >= 60.0)
        overall_avg_numeric = round(sum(g["numeric_grade"] for g in grades) / len(grades), 2) if grades else 0.0

        # Grade distribution histogram
        distribution = {"A": 0, "A-": 0, "B+": 0, "B": 0, "B-": 0, "C+": 0, "C": 0, "C-": 0, "D": 0, "F": 0}
        for g in grades:
            l = g["letter_grade"]
            if l in distribution:
                distribution[l] += 1

        # Activity aggregates
        avg_attendance = round(sum(a["attendance_pct"] for a in activities) / len(activities), 1) if activities else 85.0
        avg_study_hrs = round(sum(a["study_hours_per_week"] for a in activities) / len(activities), 1) if activities else 10.0
        total_late = sum(a["late_submissions"] for a in activities)
        avg_lms = round(sum(a["lms_login_frequency_per_week"] for a in activities) / len(activities), 1) if activities else 12.0

        preferred_periods = [a["preferred_study_period"] for a in activities]
        most_common_period = max(set(preferred_periods), key=preferred_periods.count) if preferred_periods else "Evening"

        # Early Warning / Academic Risk Assessment
        risk_score = 0
        risk_flags = []
        interventions = []

        cgpa = float(student["gpa"])
        if cgpa < 2.0:
            risk_score += 40
            risk_flags.append(f"Cumulative GPA ({cgpa:.2f}) is below Academic Good Standing minimum (2.00)")
            interventions.append("Schedule mandatory intervention with department academic advisor")
            interventions.append("Limit upcoming semester registration to 12 credit hours max")
        elif cgpa < 2.5:
            risk_score += 15
            risk_flags.append(f"Cumulative GPA ({cgpa:.2f}) is in vulnerable range (< 2.50)")

        if avg_attendance < 75.0:
            risk_score += 30
            risk_flags.append(f"Average class attendance ({avg_attendance:.1f}%) is below 75% threshold")
            interventions.append("Attendance recovery plan: verify medical or transportation conflicts")

        if total_late >= 4:
            risk_score += 15
            risk_flags.append(f"High frequency of late assignment submissions ({total_late} assignments)")
            interventions.append("Recommend time-management workshop and academic coaching")

        failed_count = sum(1 for g in grades if g["numeric_grade"] < 60.0)
        if failed_count > 0:
            risk_score += (failed_count * 10)
            risk_flags.append(f"{failed_count} failed course(s) on transcript requiring repeat")
            interventions.append("Prioritize retaking prerequisite bottlenecks in the earliest available term")

        if risk_score >= 40:
            risk_level = "High / At-Risk"
            risk_color = "red"
        elif risk_score >= 20:
            risk_level = "Moderate"
            risk_color = "yellow"
        else:
            risk_level = "Low / Good Standing"
            risk_color = "green"

        if not interventions:
            interventions.append("Maintain current study routines and consider undergraduate honors or research electives")

        # Strengths & Weaknesses
        sorted_grades = sorted(grades, key=lambda x: x["numeric_grade"], reverse=True)
        top_courses = [
            {"course_id": g["course_id"], "course_name": g["course_name"], "score": g["numeric_grade"], "letter": g["letter_grade"]}
            for g in sorted_grades[:4]
        ]
        struggling_courses = [
            {"course_id": g["course_id"], "course_name": g["course_name"], "score": g["numeric_grade"], "letter": g["letter_grade"]}
            for g in sorted_grades[-3:] if g["numeric_grade"] < 70.0
        ]

        return {
            "student_profile": {
                "student_id": student["student_id"],
                "student_name": student["student_name"],
                "email": student["email"],
                "department_id": student["department_id"],
                "department_name": student["department_name"],
                "year_level": student["year_level"],
                "gpa": cgpa,
                "academic_standing": student["academic_standing"],
                "mbti": student["mbti"],
                "learning_style": student["learning_style"],
                "dean": student["dean"]
            },
            "academic_metrics": {
                "cumulative_gpa": cgpa,
                "overall_numeric_avg": overall_avg_numeric,
                "total_credits_attempted": total_credits_attempted,
                "total_credits_passed": total_credits_passed,
                "completion_rate_pct": round((total_credits_passed / max(1, total_credits_attempted)) * 100, 1),
                "total_courses_taken": len(grades),
                "failed_courses_count": failed_count
            },
            "semester_trends": [
                {
                    "semester": s["semester"],
                    "semester_gpa": s["semester_gpa"],
                    "semester_average": s["semester_average"],
                    "credits_attempted": s["credits_attempted"],
                    "credits_passed": s["credits_passed"],
                    "courses_completed": s["courses_completed"],
                    "failed_courses": s["failed_courses"]
                }
                for s in summaries
            ],
            "grade_distribution": distribution,
            "activity_metrics": {
                "average_attendance_pct": avg_attendance,
                "study_hours_per_week": avg_study_hrs,
                "total_late_submissions": total_late,
                "lms_logins_per_week": avg_lms,
                "preferred_study_period": most_common_period
            },
            "risk_assessment": {
                "risk_level": risk_level,
                "risk_score": risk_score,
                "risk_color": risk_color,
                "flags": risk_flags,
                "recommended_interventions": interventions
            },
            "top_achievements": top_courses,
            "areas_needing_improvement": struggling_courses
        }
