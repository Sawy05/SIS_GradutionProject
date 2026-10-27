import sqlite3
from pathlib import Path

def seed_timetable_sessions(db_path: Path):
    print(f"Seeding master timetable sessions in {db_path}...")
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    # 1. Add solver_status and objective_score columns if not present
    cur.execute("PRAGMA table_info(published_timetables)")
    existing_cols = {c[1] for c in cur.fetchall()}
    if "solver_status" not in existing_cols:
        cur.execute("ALTER TABLE published_timetables ADD COLUMN solver_status TEXT DEFAULT 'OPTIMAL'")
    if "objective_score" not in existing_cols:
        cur.execute("ALTER TABLE published_timetables ADD COLUMN objective_score REAL DEFAULT 98.5")

    # Insert or replace active published timetable
    cur.execute("""
        INSERT OR REPLACE INTO published_timetables 
        (timetable_id, semester, academic_year, status, solver_status, objective_score, published_at)
        VALUES ('TT-2026-FALL', 'Fall 2026', '2026/2027', 'Published', 'OPTIMAL', 98.5, '2026-09-01 10:00:00')
    """)

    # 2. Fetch all rooms and time slots
    rooms = [r["room_id"] for r in cur.execute("SELECT room_id FROM classrooms ORDER BY capacity DESC").fetchall()]
    slots = [s["slot_id"] for s in cur.execute("SELECT slot_id, day_of_week, period FROM time_slots ORDER BY day_of_week, period").fetchall()]
    
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
    ordered_slots = []
    for period in [1, 2, 3, 4]:
        for day in days:
            slot_id = f"{day[:3].upper()}-P{period}"
            if slot_id in slots:
                ordered_slots.append(slot_id)

    # 3. Fetch all groups: distinct (department_id, year_level, section_number)
    groups = cur.execute("""
        SELECT c.department_id, c.year_level, cs.section_number, cs.section_id, cs.course_id, c.course_name
        FROM course_sections cs
        JOIN courses c ON cs.course_id = c.course_id
        ORDER BY c.department_id, c.year_level, cs.section_number, cs.course_id
    """).fetchall()

    grouped_sections = {}
    for g in groups:
        key = (g["department_id"], g["year_level"], g["section_number"])
        grouped_sections.setdefault(key, []).append(g)

    cur.execute("DELETE FROM timetable_sessions WHERE timetable_id = 'TT-2026-FALL'")

    sessions_to_insert = []
    sess_idx = 1
    
    for (dept_id, yr_level, sec_num), sec_list in grouped_sections.items():
        base_offset = ((int(dept_id) * 3) + (yr_level * 2) + sec_num) % len(ordered_slots)
        
        for i, sec in enumerate(sec_list):
            slot_id = ordered_slots[(base_offset + (i * 2)) % len(ordered_slots)]
            
            cname = sec["course_name"].lower()
            if "lab" in cname or "programming" in cname or "data" in cname or "systems" in cname:
                room_pool = [r for r in rooms if "LAB" in r] or rooms
                session_type = "Lab" if "lab" in cname else "Lecture"
            else:
                room_pool = [r for r in rooms if "LH" in r or "CR" in r] or rooms
                session_type = "Lecture"
            
            assigned_room = room_pool[(sess_idx + i) % len(room_pool)]
            
            session_id = f"SESS-{sec['section_id']}"
            sessions_to_insert.append((
                session_id,
                'TT-2026-FALL',
                sec['section_id'],
                assigned_room,
                slot_id,
                session_type
            ))
            sess_idx += 1

    cur.executemany("""
        INSERT INTO timetable_sessions (session_id, timetable_id, section_id, room_id, slot_id, session_type)
        VALUES (?, ?, ?, ?, ?, ?)
    """, sessions_to_insert)

    conn.commit()
    print(f"Successfully seeded {len(sessions_to_insert)} timetable sessions for TT-2026-FALL in {db_path}!")
    conn.close()

if __name__ == "__main__":
    targets = [
        Path(r"C:\Users\ahmed\PycharmProjects\pythonProject1\AntiGrav\Gradution Project\Updates Phase 1.1\backend\data\sis_database.db"),
        Path(r"C:\Users\ahmed\.gemini\antigravity\scratch\sis_mobile_system\Updates\backend\data\sis_database.db")
    ]
    for p in targets:
        if p.exists():
            seed_timetable_sessions(p)
