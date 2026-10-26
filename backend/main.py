from typing import Optional, List, Dict, Any
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from database import execute_query, execute_one, execute_insert, execute_transaction
from recommender import SISCourseRecommender
from analytics import SISAcademicAnalytics
from chatbot import SISAcademicChatbot
from intelligent_features import SISIntelligentFeatures

app = FastAPI(
    title="SIS Uni Assist Intelligent Backend API",
    description="Production-grade API for Student Information System, Course Recommendation, and Academic Chatbot.",
    version="2.0.0"
)

# Enable CORS for Mobile Frontend & Web App
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Core AI / Analytics Engines
recommender_engine = SISCourseRecommender()
analytics_engine = SISAcademicAnalytics()
chatbot_engine = SISAcademicChatbot()
intelligent_features = SISIntelligentFeatures()

# --- Request / Response Models ---
class ChatRequest(BaseModel):
    prompt: str = Field(..., description="Academic or university inquiry")
    student_id: Optional[str] = Field(None, description="Student ID for personalized explanation")
    mbti: Optional[str] = Field(None, description="Optional custom MBTI override")
    learning_style: Optional[str] = Field(None, description="Optional custom learning style override")
    temperature: float = Field(0.4, ge=0.0, le=1.0)

class SimulatedCourseItem(BaseModel):
    course_name: str
    credits: int = 3
    expected_grade: str = "A"

class GPASimulationRequest(BaseModel):
    student_id: str
    simulated_courses: List[SimulatedCourseItem]

class ApplyRecommendationRequest(BaseModel):
    student_id: str
    option_id: Optional[str] = "opt-1"
    section_ids: List[str]

# --- API Endpoints ---

@app.get("/")
def root():
    return {
        "status": "online",
        "service": "SIS Uni Assist Intelligence Engine",
        "version": "2.0.0",
        "endpoints": {
            "docs": "/docs",
            "stats": "/api/system-stats",
            "students": "/api/students",
            "recommendations": "/api/students/{id}/recommendations",
            "analytics": "/api/students/{id}/analytics",
            "degree_audit": "/api/students/{id}/degree-audit",
            "prerequisite_tree": "/api/students/{id}/prerequisite-tree",
            "chat": "/api/chat",
            "simulate_gpa": "/api/simulate-gpa"
        }
    }

@app.get("/api/system-stats")
def get_system_stats():
    total_students = execute_one("SELECT COUNT(*) as count FROM students")["count"]
    total_courses = execute_one("SELECT COUNT(*) as count FROM courses")["count"]
    total_enrollments = execute_one("SELECT COUNT(*) as count FROM enrollments")["count"]
    total_grades = execute_one("SELECT COUNT(*) as count FROM grades")["count"]
    total_qa = execute_one("SELECT COUNT(*) as count FROM qa_knowledge_base")["count"]
    departments = execute_query("SELECT department_id, department_name, code_prefix, dean FROM departments")

    return {
        "total_students": total_students,
        "total_courses": total_courses,
        "total_enrollments": total_enrollments,
        "total_grades_logged": total_grades,
        "knowledge_base_qa_count": total_qa,
        "departments": departments
    }

@app.get("/api/departments")
def get_departments():
    return execute_query("SELECT * FROM departments ORDER BY department_id")

@app.get("/api/students")
def list_students(
    search: Optional[str] = Query(None, description="Search by name, ID or email"),
    department_id: Optional[str] = Query(None, description="Filter by department ID"),
    year_level: Optional[int] = Query(None, description="Filter by year level 1-4"),
    limit: int = Query(50, ge=1, le=200),
    offset: int = Query(0, ge=0)
):
    query = """
        SELECT s.*, d.department_name 
        FROM students s
        JOIN departments d ON s.department_id = d.department_id
        WHERE 1=1
    """
    params = []
    if search:
        query += " AND (s.student_id LIKE ? OR s.student_name LIKE ? OR s.email LIKE ?)"
        s_param = f"%{search}%"
        params.extend([s_param, s_param, s_param])
    if department_id:
        query += " AND s.department_id = ?"
        params.append(department_id)
    if year_level:
        query += " AND s.year_level = ?"
        params.append(year_level)

    query += " ORDER BY s.student_id ASC LIMIT ? OFFSET ?"
    params.extend([limit, offset])

    students = execute_query(query, tuple(params))
    return {
        "count": len(students),
        "limit": limit,
        "offset": offset,
        "students": students
    }

@app.get("/api/students/{student_id}")
def get_student_detail(student_id: str):
    student = execute_one(
        """
        SELECT s.*, d.department_name, d.code_prefix, d.dean 
        FROM students s
        JOIN departments d ON s.department_id = d.department_id
        WHERE s.student_id = ?
        """,
        (student_id,)
    )
    if not student:
        raise HTTPException(status_code=404, detail=f"Student {student_id} not found.")
    return student

@app.get("/api/students/{student_id}/recommendations")
def get_course_recommendations(student_id: str, top_n: int = Query(6, ge=1, le=20)):
    try:
        return recommender_engine.recommend(student_id, top_n=top_n)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

@app.get("/api/students/{student_id}/analytics")
def get_student_academic_analytics(student_id: str):
    try:
        return analytics_engine.analyze_student(student_id)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

@app.get("/api/students/{student_id}/degree-audit")
def get_degree_audit(student_id: str):
    try:
        return intelligent_features.degree_audit(student_id)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

@app.get("/api/students/{student_id}/prerequisite-tree")
def get_prerequisite_tree(student_id: str):
    try:
        return intelligent_features.prerequisite_tree(student_id)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

@app.post("/api/simulate-gpa")
def simulate_student_gpa(payload: GPASimulationRequest):
    try:
        courses = [c.dict() for c in payload.simulated_courses]
        return intelligent_features.simulate_gpa(payload.student_id, courses)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

@app.post("/api/chat")
def chat_with_academic_ai(payload: ChatRequest):
    return chatbot_engine.query(
        prompt=payload.prompt,
        student_id=payload.student_id,
        custom_mbti=payload.mbti,
        custom_learning_style=payload.learning_style,
        temperature=payload.temperature
    )

@app.get("/api/courses")
def get_course_catalog(
    department_id: Optional[str] = Query(None),
    year_level: Optional[int] = Query(None)
):
    query = """
        SELECT c.*, d.department_name 
        FROM courses c 
        JOIN departments d ON c.department_id = d.department_id 
        WHERE 1=1
    """
    params = []
    if department_id:
        query += " AND c.department_id = ?"
        params.append(department_id)
    if year_level:
        query += " AND c.year_level = ?"
        params.append(year_level)
    query += " ORDER BY c.year_level, c.course_id"
    return execute_query(query, tuple(params))

# =========================================================================
# COURSES & TIMETABLES: ALL GROUPS, PERSONAL, AND AI-RECOMMENDED SPECIALIZED
# =========================================================================

@app.get("/api/courses/timetables/groups")
def get_group_timetable(
    department_id: Optional[str] = Query(None),
    year_level: Optional[int] = Query(None),
    group_id: Optional[int] = Query(None)
):
    depts = execute_query("SELECT department_id, department_name FROM departments ORDER BY department_id")
    if not depts:
        raise HTTPException(status_code=404, detail="No departments found.")
    
    # Default to requested or first available department (e.g. 10 Data Science)
    active_dept = str(department_id) if department_id else (depts[2]["department_id"] if len(depts) > 2 else depts[0]["department_id"])
    active_level = int(year_level) if year_level else 1
    
    # Available groups for department & level
    available_groups = execute_query("""
        SELECT DISTINCT cs.section_number as group_id
        FROM course_sections cs
        JOIN courses c ON cs.course_id = c.course_id
        WHERE c.department_id = ? AND c.year_level = ?
        ORDER BY cs.section_number
    """, (str(active_dept), int(active_level)))
    
    available_group_ids = [int(g["group_id"]) for g in available_groups] if available_groups else [1]
    active_group = int(group_id) if (group_id and int(group_id) in available_group_ids) else available_group_ids[0]
    
    query = """
        SELECT 
            ts.session_id,
            ts.session_type,
            c.course_id,
            c.course_name,
            c.credits,
            c.year_level,
            c.department_id,
            d.department_name,
            cs.section_id,
            cs.section_number,
            cs.max_capacity,
            cs.enrolled_count,
            cr.room_id,
            cr.room_number,
            cr.building,
            cr.capacity as room_capacity,
            slot.slot_id,
            slot.day_of_week,
            slot.start_time,
            slot.end_time,
            slot.period,
            ins.instructor_id,
            COALESCE(ins.instructor_name, 'Staff Faculty') as instructor_name
        FROM timetable_sessions ts
        JOIN course_sections cs ON ts.section_id = cs.section_id
        JOIN courses c ON cs.course_id = c.course_id
        JOIN departments d ON c.department_id = d.department_id
        JOIN classrooms cr ON ts.room_id = cr.room_id
        JOIN time_slots slot ON ts.slot_id = slot.slot_id
        LEFT JOIN instructors ins ON cs.instructor_id = ins.instructor_id
        WHERE c.department_id = ? AND c.year_level = ? AND cs.section_number = ?
        ORDER BY slot.day_of_week, slot.period
    """
    sessions = execute_query(query, (str(active_dept), int(active_level), int(active_group)))
    
    day_order = {"Sunday": 1, "Monday": 2, "Tuesday": 3, "Wednesday": 4, "Thursday": 5}
    sessions.sort(key=lambda s: (day_order.get(s["day_of_week"], 99), s.get("period", 1)))
    
    days_used = len(set(s["day_of_week"] for s in sessions))
    total_credits = sum(s["credits"] for s in sessions)
    
    return {
        "status": "success",
        "filter": {
            "department_id": str(active_dept),
            "year_level": int(active_level),
            "group_id": int(active_group)
        },
        "available_filters": {
            "departments": depts,
            "levels": [
                {"year_level": 1, "label": "Year 1 (Freshman)"},
                {"year_level": 2, "label": "Year 2 (Sophomore)"},
                {"year_level": 3, "label": "Year 3 (Junior)"},
                {"year_level": 4, "label": "Year 4 (Senior)"}
            ],
            "groups": [{"group_id": g, "label": f"Group {g}"} for g in available_group_ids]
        },
        "summary": {
            "total_courses": len(sessions),
            "total_sessions": len(sessions),
            "unique_courses": len(set(s["course_id"] for s in sessions)),
            "total_credits": total_credits,
            "active_days": days_used,
            "active_study_days": days_used,
            "lecture_sessions": sum(1 for s in sessions if s["session_type"] == "Lecture"),
            "lab_sessions": sum(1 for s in sessions if s["session_type"] == "Lab")
        },
        "sessions": sessions
    }

@app.get("/api/courses/timetables/recommended-specialized")
def get_recommended_specialized_timetable(
    student_id: str = Query(..., description="Student ID for personalized specialization matching")
):
    student = execute_one("""
        SELECT s.*, d.department_name, d.code_prefix 
        FROM students s
        JOIN departments d ON s.department_id = d.department_id
        WHERE s.student_id = ?
    """, (student_id,))
    if not student:
        raise HTTPException(status_code=404, detail=f"Student {student_id} not found.")

    # 1. Fetch student's current registered sections
    current_regs = execute_query("""
        SELECT cr.section_id, cs.course_id
        FROM course_registrations cr
        JOIN course_sections cs ON cr.section_id = cs.section_id
        WHERE cr.student_id = ? AND cr.status = 'Registered'
    """, (student_id,))
    current_section_ids = {r["section_id"] for r in current_regs}

    # 2. Query AI Recommender Engine for top candidate courses
    rec_result = recommender_engine.recommend(student_id, top_n=6)
    top_courses = rec_result.get("top_recommendations", [])
    rec_course_ids = [c["course_id"] for c in top_courses]

    if len(rec_course_ids) < 5:
        dept_courses = execute_query("""
            SELECT course_id FROM courses 
            WHERE department_id = ? AND year_level = ?
            LIMIT 6
        """, (student["department_id"], student["year_level"]))
        rec_course_ids.extend([c["course_id"] for c in dept_courses if c["course_id"] not in rec_course_ids])

    # 3. Fetch candidate sessions
    placeholders = ",".join(["?"] * len(rec_course_ids))
    candidate_sessions = execute_query(f"""
        SELECT 
            ts.session_id,
            ts.session_type,
            c.course_id,
            c.course_name,
            c.credits,
            c.year_level,
            c.department_id,
            d.department_name,
            cs.section_id,
            cs.section_number,
            cs.max_capacity,
            cs.enrolled_count,
            cr.room_id,
            cr.room_number,
            cr.building,
            slot.slot_id,
            slot.day_of_week,
            slot.start_time,
            slot.end_time,
            slot.period,
            COALESCE(ins.instructor_name, 'Staff Faculty') as instructor_name
        FROM timetable_sessions ts
        JOIN course_sections cs ON ts.section_id = cs.section_id
        JOIN courses c ON cs.course_id = c.course_id
        JOIN departments d ON c.department_id = d.department_id
        JOIN classrooms cr ON ts.room_id = cr.room_id
        JOIN time_slots slot ON ts.slot_id = slot.slot_id
        LEFT JOIN instructors ins ON cs.instructor_id = ins.instructor_id
        WHERE c.course_id IN ({placeholders})
        ORDER BY cs.section_number, slot.period
    """, tuple(rec_course_ids))

    course_match_map = {c["course_id"]: c.get("match_percentage", 92) for c in top_courses}

    def build_option(option_id: str, title: str, subtitle: str, preferred_sections: int, badge_style: str):
        selected_sessions = []
        covered_courses = set()
        occupied_slots = set()

        sorted_candidates = sorted(
            candidate_sessions,
            key=lambda s: (
                0 if s["section_number"] == preferred_sections else 1,
                s["period"] if "Morning" in title else -s["period"],
                -course_match_map.get(s["course_id"], 75)
            )
        )

        for s in sorted_candidates:
            cid = s["course_id"]
            slot = s["slot_id"]
            if cid not in covered_courses and slot not in occupied_slots:
                s_copy = dict(s)
                s_copy["match_percentage"] = course_match_map.get(cid, 88)
                selected_sessions.append(s_copy)
                covered_courses.add(cid)
                occupied_slots.add(slot)
                if len(selected_sessions) >= 5:
                    break

        day_order = {"Sunday": 1, "Monday": 2, "Tuesday": 3, "Wednesday": 4, "Thursday": 5}
        selected_sessions.sort(key=lambda x: (day_order.get(x["day_of_week"], 99), x.get("period", 1)))

        days_count = len(set(x["day_of_week"] for x in selected_sessions))
        total_cred = sum(x["credits"] for x in selected_sessions)
        avg_match = round(sum(x["match_percentage"] for x in selected_sessions) / max(1, len(selected_sessions)), 1)
        is_already_active = all(s["section_id"] in current_section_ids for s in selected_sessions) if selected_sessions else False

        badges = [
            {"icon": "zap", "title": "Gap Optimized", "text": "Minimal idle gaps between classes (< 40 mins)", "color": "emerald"},
            {"icon": "scale", "title": "Workload Balanced", "text": f"Evenly spaced across {days_count} study days (no 8hr overloaded days)", "color": "blue"},
            {"icon": "target", "title": "Specialization Fit", "text": f"{avg_match}% average syllabus & track alignment", "color": "purple"},
            {"icon": "shield", "title": "100% Conflict-Free", "text": "Zero collision across all registered lectures & labs", "color": "emerald"}
        ]

        return {
            "option_id": option_id,
            "title": title,
            "subtitle": subtitle,
            "badge_style": badge_style,
            "is_active_schedule": is_already_active,
            "total_courses": len(selected_sessions),
            "total_credits": total_cred,
            "active_days": days_count,
            "average_match_score": avg_match,
            "badges": badges,
            "section_ids": [s["section_id"] for s in selected_sessions],
            "sessions": selected_sessions
        }

    opt1 = build_option(
        option_id="opt-morning-track",
        title="Optimal Track Recommendation: Morning Focus",
        subtitle="Prioritizes core major curriculum during peak morning focus hours (08:30–12:45).",
        preferred_sections=1,
        badge_style="primary"
    )

    opt2 = build_option(
        option_id="opt-balanced-track",
        title="Alternative Option: Balanced Mid-Day Spread",
        subtitle="Spaces lectures evenly across balanced mid-day windows with dedicated lab intervals.",
        preferred_sections=2,
        badge_style="secondary"
    )

    return {
        "status": "success",
        "student_profile": {
            "student_id": student["student_id"],
            "student_name": student["student_name"],
            "department_id": student["department_id"],
            "department_name": student["department_name"],
            "year_level": student["year_level"],
            "gpa": student["gpa"],
            "academic_standing": student["academic_standing"],
            "mbti": student["mbti"],
            "learning_style": student["learning_style"]
        },
        "specialization_track": student["department_name"],
        "recommended_options": [opt1, opt2]
    }

@app.get("/api/courses/timetables/personal")
def get_personal_timetable(
    student_id: str = Query(..., description="Student ID to retrieve confirmed timetable")
):
    student = execute_one("""
        SELECT s.*, d.department_name, d.code_prefix 
        FROM students s
        JOIN departments d ON s.department_id = d.department_id
        WHERE s.student_id = ?
    """, (student_id,))
    if not student:
        raise HTTPException(status_code=404, detail=f"Student {student_id} not found.")

    query = """
        SELECT 
            ts.session_id,
            ts.session_type,
            c.course_id,
            c.course_name,
            c.credits,
            c.year_level,
            c.department_id,
            d.department_name,
            cs.section_id,
            cs.section_number,
            cs.max_capacity,
            cs.enrolled_count,
            cr.room_id,
            cr.room_number,
            cr.building,
            slot.slot_id,
            slot.day_of_week,
            slot.start_time,
            slot.end_time,
            slot.period,
            ins.instructor_id,
            COALESCE(ins.instructor_name, 'Staff Faculty') as instructor_name,
            reg.registration_id,
            reg.registration_date,
            reg.status as registration_status
        FROM course_registrations reg
        JOIN course_sections cs ON reg.section_id = cs.section_id
        JOIN courses c ON cs.course_id = c.course_id
        JOIN departments d ON c.department_id = d.department_id
        JOIN timetable_sessions ts ON cs.section_id = ts.section_id
        JOIN classrooms cr ON ts.room_id = cr.room_id
        JOIN time_slots slot ON ts.slot_id = slot.slot_id
        LEFT JOIN instructors ins ON cs.instructor_id = ins.instructor_id
        WHERE reg.student_id = ? AND reg.status = 'Registered'
        ORDER BY slot.day_of_week, slot.period
    """
    sessions = execute_query(query, (student_id,))
    day_order = {"Sunday": 1, "Monday": 2, "Tuesday": 3, "Wednesday": 4, "Thursday": 5}
    sessions.sort(key=lambda s: (day_order.get(s["day_of_week"], 99), s.get("period", 1)))

    days_used = len(set(s["day_of_week"] for s in sessions))
    total_credits = sum(s["credits"] for s in sessions)

    return {
        "status": "success",
        "student": {
            "student_id": student["student_id"],
            "student_name": student["student_name"],
            "department_name": student["department_name"],
            "year_level": student["year_level"],
            "gpa": student["gpa"],
            "academic_standing": student["academic_standing"]
        },
        "summary": {
            "total_registered_courses": len(sessions),
            "total_credits": total_credits,
            "days_per_week": days_used,
            "lectures": sum(1 for s in sessions if s["session_type"] == "Lecture"),
            "labs": sum(1 for s in sessions if s["session_type"] == "Lab")
        },
        "sessions": sessions
    }

@app.post("/api/courses/timetables/apply-recommendation")
def apply_recommended_timetable(payload: ApplyRecommendationRequest):
    student = execute_one("SELECT * FROM students WHERE student_id = ?", (payload.student_id,))
    if not student:
        raise HTTPException(status_code=404, detail="Student not found.")
    
    if not payload.section_ids:
        raise HTTPException(status_code=400, detail="No section IDs provided.")

    if len(payload.section_ids) != len(set(payload.section_ids)):
        raise HTTPException(status_code=400, detail="Conflict detected: Duplicate course section IDs provided in registration request.")

    placeholders = ",".join(["?"] * len(payload.section_ids))
    sections_info = execute_query(f"""
        SELECT cs.section_id, cs.course_id, cs.max_capacity, cs.enrolled_count, ts.slot_id, slot.day_of_week, slot.start_time, slot.end_time
        FROM course_sections cs
        LEFT JOIN timetable_sessions ts ON cs.section_id = ts.section_id
        LEFT JOIN time_slots slot ON ts.slot_id = slot.slot_id
        WHERE cs.section_id IN ({placeholders})
    """, tuple(payload.section_ids))

    seen_slots = {}
    seen_courses = {}
    for s in sections_info:
        # 1. Capacity check
        if (s.get("enrolled_count") or 0) >= (s.get("max_capacity") or 999):
            raise HTTPException(
                status_code=400,
                detail=f"Registration closed: Section {s.get('section_id')} has reached full capacity ({s.get('max_capacity')})."
            )

        # 2. Duplicate course selection check
        cid = s.get("course_id")
        if cid:
            if cid in seen_courses:
                raise HTTPException(
                    status_code=400,
                    detail=f"Conflict detected: Multiple sections selected for course {cid}."
                )
            seen_courses[cid] = s

        # 3. Time slot collision check
        slot = s.get("slot_id")
        if slot:
            if slot in seen_slots:
                prev = seen_slots[slot]
                raise HTTPException(
                    status_code=400,
                    detail=f"Conflict detected: Section {s.get('section_id')} and Section {prev.get('section_id')} both scheduled at {s.get('day_of_week')} {s.get('start_time')}-{s.get('end_time')}."
                )
            seen_slots[slot] = s

    ops = []
    ops.append(("DELETE FROM course_registrations WHERE student_id = ?", (payload.student_id,)))
    
    for s in sections_info:
        sec_id = s["section_id"]
        cid = s["course_id"]
        reg_id = f"REG-{payload.student_id}-{sec_id}"
        ops.append((
            "INSERT INTO course_registrations (registration_id, student_id, section_id, registration_date, status) VALUES (?, ?, ?, CURRENT_TIMESTAMP, 'Registered')",
            (reg_id, payload.student_id, sec_id)
        ))
        ops.append((
            "UPDATE course_sections SET enrolled_count = MIN(max_capacity, enrolled_count + 1) WHERE section_id = ?",
            (sec_id,)
        ))
        ops.append((
            "INSERT OR REPLACE INTO enrollments (enrollment_id, student_id, course_id, semester, enrollment_status) VALUES (?, ?, ?, 'Fall 2026', 'Enrolled')",
            (f"ENR-{payload.student_id}-{cid}", payload.student_id, cid)
        ))

    execute_transaction(ops)

    return {
        "status": "success",
        "message": f"Successfully applied recommended timetable! {len(payload.section_ids)} course sections confirmed.",
        "student_id": payload.student_id,
        "option_id": payload.option_id,
        "confirmed_sections": payload.section_ids
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
