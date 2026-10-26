import sys
import os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fastapi.testclient import TestClient
import main

client = TestClient(main.app)

print("=== 1. TEST GROUPS FILTERING ===")
for d, y, g in [("8", 1, 1), ("9", 2, 2), ("10", 1, 1), ("11", 3, 1)]:
    res = client.get(f"/api/courses/timetables/groups?department_id={d}&year_level={y}&group_id={g}")
    assert res.status_code == 200, f"Failed for dept {d}"
    data = res.json()
    sessions = data.get("sessions", [])
    summary = data.get("summary", {})
    print(f"Dept {d} (Year {y}, Group {g}): {len(sessions)} sessions, {summary.get('total_credits')} credits, active days: {summary.get('active_days')}")

print("\n=== 2. TEST AI-RECOMMENDED SPECIALIZED TIMETABLE ===")
r_rec = client.get("/api/courses/timetables/recommended-specialized?student_id=FCDS20260001")
assert r_rec.status_code == 200
data_rec = r_rec.json()
print("Specialization Track:", data_rec.get("specialization_track"))
options = data_rec.get("recommended_options", [])
assert len(options) == 2, "Must have 2 options"
for opt in options:
    print(f"Option: {opt['option_id']} | {opt['title']}")
    print(f"  Courses: {opt['total_courses']}, Credits: {opt['total_credits']}, Match Score: {opt['average_match_score']}%, Days: {opt['active_days']}")
    badge_titles = [b['title'] for b in opt['badges']]
    print(f"  Optimization Badges ({len(opt['badges'])}): {badge_titles}")
    assert len(opt['badges']) == 4, "Must have 4 optimization badges"
    # Verify zero slot conflicts
    slots = [s['slot_id'] for s in opt['sessions']]
    assert len(slots) == len(set(slots)), f"Conflict found in {opt['option_id']}: {slots}"
    print("  Slot conflict check: ZERO collisions PASS!")

print("\n=== 3. TEST PERSONAL TIMETABLE INITIAL STATE ===")
r_pers = client.get("/api/courses/timetables/personal?student_id=FCDS20260001")
assert r_pers.status_code == 200
pers_data = r_pers.json()
print(f"Initial confirmed sessions: {len(pers_data['sessions'])} ({pers_data['summary']['total_credits']} credits)")

print("\n=== 4. TEST APPLY RECOMMENDATION & TRANSACTION SYNC ===")
opt1 = options[0]
r_apply = client.post("/api/courses/timetables/apply-recommendation", json={
    "student_id": "FCDS20260001",
    "option_id": opt1["option_id"],
    "section_ids": opt1["section_ids"]
})
assert r_apply.status_code == 200
print("Apply Result:", r_apply.json().get("message"))

r_pers2 = client.get("/api/courses/timetables/personal?student_id=FCDS20260001")
assert r_pers2.status_code == 200
pers2_data = r_pers2.json()
print(f"Updated confirmed sessions: {len(pers2_data['sessions'])} ({pers2_data['summary']['total_credits']} credits)")
assert len(pers2_data['sessions']) == len(opt1['section_ids'])

print("\n=== 5. TEST CONFLICT PREVENTION VALIDATION ===")
# Try applying with duplicate slot sections
sec1 = opt1["section_ids"][0]
r_conflict = client.post("/api/courses/timetables/apply-recommendation", json={
    "student_id": "FCDS20260001",
    "option_id": "conflict-test",
    "section_ids": [sec1, sec1]  # duplicate section with same slot
})
print("Conflict test response status:", r_conflict.status_code, "| Detail:", r_conflict.json().get("detail"))
assert r_conflict.status_code == 400

print("\n>>> ALL TIMETABLE BACKEND ENDPOINTS AND CONSTRAINTS FULLY VERIFIED! <<<")
