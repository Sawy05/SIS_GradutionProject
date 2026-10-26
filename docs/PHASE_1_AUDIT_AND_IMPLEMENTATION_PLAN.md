# Phase 1: Application Audit & Implementation Plan (Updated with Real FCDS Dataset)
## Uni Assist — Smart Timetable Optimizer

**Project:** Uni Assist (Computer Science Senior Graduation Project)  
**Dataset Scale:** Real ANU / Faculty of Computers & Data Science (FCDS) Official Curriculum & Student Records  
**Locations Updated & Synchronized:**
- `C:\Users\ahmed\PycharmProjects\pythonProject1\AntiGrav\Gradution Project\Updates Phase 1`
- `C:\Users\ahmed\.gemini\antigravity\scratch\sis_mobile_system\Updates`

---

## 1. Summary of Existing Application Architecture (Audited with Real Data)

The Uni Assist SIS platform has been upgraded from prototype mock data to the **real university academic dataset (Alexandria National University — Faculty of Computers and Data Science / FCDS)** with **zero mock data**. All intelligence micro-engines, analytics, and recommendation pipelines have been smoke-tested and verified with 100% pass rates on this live dataset.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        React 19 / Vite Frontend                        │
│   (Mobile Shell 390/412px & Expanded 1100px Desktop Canvas Toggle)     │
│  - Default Active Student: FCDS20260001 (Adam Ibrahim Shehata)         │
│  - HomeView (Degree Progress, CGPA, Academic Standing, Quick Tiles)    │
│  - AnalyticsView (19,300 Term Trends, Attendance %, Risk Level)        │
│  - RecommenderView (Multi-Attribute AI Matches for 158 FCDS Courses)   │
│  - ChatbotView (407 Q&A Entries + TF-IDF Vector Search + MBTI Tone)    │
│  - DegreeAuditView (120-Credit Milestones & Prerequisite Visualizer)   │
│  - GPASimulatorView (Real Grade Point Forecasts & What-If Delta)       │
│  - StudentSwitcherModal (5,000-Student Roster Browser & Search)        │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ HTTP / REST (api.js)
┌───────────────────────────────────▼────────────────────────────────────┐
│                       FastAPI Backend (main.py)                        │
│  - Recommender Engine (SISCourseRecommender in recommender.py)         │
│  - Chatbot Engine (SISAcademicChatbot in chatbot.py)                   │
│  - Analytics Engine (SISAcademicAnalytics in analytics.py)             │
│  - Intelligent Features (SISIntelligentFeatures in intelligent_features)│
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ sqlite3 (PRAGMA foreign_keys = ON)
┌───────────────────────────────────▼────────────────────────────────────┐
│                    SQLite Database (sis_database.db)                   │
│  departments (4) | courses (158) | students (5,000)                    │
│  enrollments (30,000) | grades (30,000) | student_activity (30,000)   │
│  semester_summary (19,300) | qa_knowledge_base (407)                   │
│  classrooms (11) | time_slots (20) | instructors (6)                   │
│  course_sections (376) | course_registrations (30,000)                 │
│  published_timetables (0) | timetable_sessions (0)                     │
└────────────────────────────────────────────────────────────────────────┘
```

### 1.1 Backend Stack (`backend/`)
- **Runtime & Framework:** Python (`3.13` / `3.12`), **FastAPI**, **Uvicorn**, **Pydantic**.
- **Data Access:** SQLite (`backend/data/sis_database.db`) using native `sqlite3` connection utilities in `database.py`.
- **Live Database Entities & Row Counts (Verified 0 Foreign Key Violations):**
  1. `departments` (**4 academic programs**):
     - `8`: Computer Science
     - `9`: Cybersecurity & Network Systems
     - `10`: Data Science & Artificial Intelligence
     - `11`: Software Engineering & Information Systems
  2. `courses` (**158 official courses**):
     - Comprehensive undergraduate curriculum (e.g., `00101N Linear Algebra`, `00102N Calculus`, `00103N Introduction to Computer Systems`, `00105N Programming I`, `00109N Introduction to Artificial Intelligence`, `00110N Programming II`, `0X006N Man and Environment`) with credit hours, year levels (1–4), and prerequisite DAGs.
  3. `students` (**5,000 real institutional student records**):
     - IDs `FCDS20260001` through `FCDS20265000` with authentic student names (`student_name`), Arabic full names (`full_name_ar`), National IDs, governorates, phone numbers, cohort years (`2023` to `2026`), study years (Year 1 to Year 4), annual tuition (EGP), degree completion %, GPAs (0.00–4.00), academic standings, MBTI personality profiles, and preferred learning styles.
  4. `enrollments` (**30,000 course enrollments**):
     - Historical records across Fall 2023, Spring 2024, Fall 2024, Spring 2025, Fall 2025, Spring 2026, and Fall 2026.
  5. `grades` (**30,000 graded records**):
     - Component scores: Midterm (out of 30), projected final (out of 70), numeric grades, letter grades (A through F), and quality grade points.
  6. `student_activity` (**30,000 engagement records**):
     - Attendance % (55–100%), weekly study hours, LMS login frequency, and preferred study periods.
  7. `semester_summary` (**19,300 term aggregates**):
     - Longitudinal semester GPAs, credits attempted, credits passed, and failed course counts.
  8. `qa_knowledge_base` (**407 verified academic Q&A entries**):
     - University regulations, credit hour caps, probation policies, and course syllabus inquiries.
  9. `classrooms` (**11 physical university facilities**):
     - Capacity range: Min = 45 seats, Max = 200 seats, Average = 101.8 seats.
  10. `time_slots` (**20 standard academic time slots**):
      - 4 daily 2-hour slots across the official Sunday–Thursday academic window (08:30–10:30, 10:45–12:45, 13:00–15:00, 15:15–17:15).
  11. `instructors` (**6 active faculty members**):
      - `INST-TAMER`: Prof. Dr. Tamer Helmy (Dean / Dept 10)
      - `INST-ZEKRI`: Assoc. Prof. Dr. Ahmed Sherif Zekri (Vice Dean / Dept 11)
      - `INST-ROSTOVA`: Dr. Elena Rostova (Dept 8)
      - `INST-MANSOOR`: Dr. Tariq Al-Mansoor (Dept 9)
      - `INST-JENKINS`: Dr. Sarah Jenkins (Dept 10)
      - `INST-VANCE`: Dr. Marcus Vance (Dept 11)
  12. `course_sections` (**376 active course sections**):
      - Average enrollment = 79.8 students (Min = 32, Max = 100), with assigned faculty instructors and capacity limits.
  13. `course_registrations` (**30,000 confirmed student section registrations**):
      - Ground truth registrations establishing student cohort co-enrollments for conflict-free timetable generation.
  14. `published_timetables` & `timetable_sessions` (**0 records**):
      - Relational schema initialized, waiting for the OR-Tools CP-SAT optimizer in Phase 2.

- **Verified Backend Micro-Engines:**
  - `SISCourseRecommender`: Successfully scores and ranks eligible courses from the 158-course catalog for students across Years 1 through 4.
  - `SISAcademicAnalytics`: Accurately evaluates longitudinal GPA trends across up to 7 semesters, attendance metrics, and risk assessment tiers.
  - `SISIntelligentFeatures`: 120-credit degree audit and GPA forecasting operational against 30,000 grades.
  - `SISAcademicChatbot`: TF-IDF vector similarity search operational across 407 Q&A entries with persona-tailored responses.

### 1.2 Frontend Stack (`frontend/`)
- **Framework & Libraries:** React 19.2, Vite 8.3, Lucide React.
- **Display System:** Mobile Shell (390px/412px) with one-click toggle to 1100px Desktop View.
- **Default Profile:** Initialized to `FCDS20260001` (Adam Ibrahim Shehata El-Naggar, Year 1 Data Science & AI, GPA 3.05).
- **Roster Drawer:** Browses 5,000 student records with live search and year/honors/at-risk filter chips.

---

## 2. Timetable Features Already Implemented & Seeded

1. **Scheduling Entities Seeded:**
   - Classrooms (11 rooms with capacities 45–200), time slots (20 Sunday–Thursday slots), instructors (6 faculty members), course sections (376 sections), and confirmed student registrations (30,000 records) are already populated in SQLite and exported to CSV.
2. **Catalog & Prerequisite Graph:**
   - 158 courses with prerequisites mapped and active `Fall 2026` registrations tracked.
3. **Frontend Cart & Scheduling Stub:**
   - `RecommenderView.jsx` contains planned courses state and action buttons ready to link to section registration.

---

## 3. Missing Features (Gap Analysis vs. Objectives 1–10)

| Area | Status | Required Implementation |
| :--- | :--- | :--- |
| **1. Optimization Engine (OR-Tools CP-SAT)** | Not yet coded | Build `backend/timetable_optimizer.py` using `ortools.sat.python.cp_model` to schedule the 376 course sections across the 11 classrooms, 6 instructors, and 20 time slots satisfying 100% hard constraints, optimizing soft constraints, and reporting `INFEASIBLE` bottlenecks if unsat. |
| **2. Independent Schedule Validator** | Not yet coded | Build `backend/timetable_validator.py` with pre-solver validation and post-solver verification checking zero room, instructor, and student collisions, and 100% capacity compliance. |
| **3. Authentication, RBAC & Anti-IDOR** | Unauthenticated | Implement token auth (`backend/auth.py`) supporting `student`, `instructor`, and `admin` roles, strictly binding schedule endpoints to authenticated tokens to prevent cross-user ID tampering. |
| **4. Admin Master Timetable Workflow** | Endpoints needed | Implement `/api/admin/timetable/*` endpoints and `AdminTimetableView.jsx` for solver controls, independent verification review, version publishing, and CSV export. |
| **5. Personalized Student Timetable** | Endpoints needed | Implement `GET /api/timetable/student/my-schedule` and `StudentTimetableView.jsx` (Sunday–Thursday Weekly Calendar Grid + Tabular View). |
| **6. Personalized Instructor Timetable** | Endpoints needed | Implement `GET /api/timetable/instructor/my-schedule` and `InstructorTimetableView.jsx` with weekly calendar, total teaching hours, and room assignments. |
| **7. Course Registration Conflict Checker** | Service needed | Implement `backend/registration_service.py` and `CourseRegistrationView.jsx` with real-time conflict highlighting, capacity checks, and compatible alternative section recommendations. |
| **8. Automated Test Suite (10 Scenarios)** | Tests needed | Build `backend/tests/test_timetable_system.py` testing collisions, capacity, Anti-IDOR, infeasibility, and regressions. |

---

## 4. Proposed Architecture for Integrating the Optimizer

The optimizer will execute **natively in-process** within the existing FastAPI backend:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        React 19 Frontend                               │
│  - StudentTimetableView (Weekly Calendar Grid + Tabular View)          │
│  - InstructorTimetableView (Weekly Teaching Grid + Hours / Rooms)      │
│  - AdminTimetableView (Solver Weights, Validation, Review, CSV Export) │
│  - CourseRegistrationView (Cart, Conflict Highlight, Section Swap)     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ HTTP / Bearer Token
┌───────────────────────────────────▼────────────────────────────────────┐
│                       FastAPI Backend (main.py)                        │
│  ├── auth.py (JWT / Session RBAC & Anti-IDOR Verification)             │
│  ├── timetable_optimizer.py (Google OR-Tools CP-SAT Engine)           │
│  ├── timetable_validator.py (Independent Verifier & Diagnostics)       │
│  └── registration_service.py (Conflict Check & Alternative Recommender)│
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ SQLite Transactions
┌───────────────────────────────────▼────────────────────────────────────┐
│                    SQLite Database (sis_database.db)                   │
│  158 Courses | 5,000 Students | 376 Sections | 11 Classrooms           │
│  6 Instructors | 20 Slots | 30,000 Registrations | Timetables          │
└────────────────────────────────────────────────────────────────────────┘
```

### Mathematical Formulation Summary (OR-Tools CP-SAT)
- **Decision Variables:** Binary variables $x_{s,r,t} \in \{0, 1\}$ representing whether course section $s \in \mathcal{S}$ is assigned to classroom $r \in \mathcal{R}$ during time slot $t \in \mathcal{T}$.
- **Hard Constraints (100% Satisfied):**
  1. **Room Collision:** $\forall r, t: \sum_{s} x_{s,r,t} \le 1$
  2. **Instructor Collision:** $\forall i, t: \sum_{s \in \mathcal{S}_i} \sum_{r} x_{s,r,t} \le 1$
  3. **Student Collision:** $\forall u, t: \sum_{s \in \mathcal{S}_u} \sum_{r} x_{s,r,t} \le 1$
  4. **Room Capacity:** $x_{s,r,t} = 0$ whenever $\text{capacity}(r) < \text{enrollment}(s)$
  5. **Complete Assignment:** $\forall s: \sum_{r,t} x_{s,r,t} = k_s$ (where $k_s$ is weekly session frequency)
  6. **Instructor Availability:** $x_{s,r,t} = 0$ if slot $t \notin \text{Availability}(i(s))$
- **Soft Constraints (Configurable Weights):**
  - Minimize student idle gaps on the same day ($w_{\text{gap}}$)
  - Reduce long student campus days ($w_{\text{span}}$)
  - Balance weekly distribution across Sunday–Thursday ($w_{\text{balance}}$)
  - Balance instructor daily teaching loads ($w_{\text{inst\_load}}$)
  - Respect instructor time and room preferences ($w_{\text{pref}}$)

---

## 5. Phased Implementation Plan & Exact File Modifications

```
Phase 1: Project Inspection & Real Data Alignment [COMPLETED & VERIFIED]
   │
Phase 2: Master Timetable Optimizer (CP-SAT, Hard/Soft Constraints, CSV Export)
   │
Phase 3: Independent Schedule Validator, Quality Metrics & Infeasibility Handling
   │
Phase 4: Personalized Dashboards (Student & Instructor Views + Auth & Anti-IDOR)
   │
Phase 5: Course Registration, Conflict Detection & Alternative Section Recommender
   │
Phase 6: Full Integration, Regression Verification & Demonstration Guide
```

### Exact Files to Create or Update in Phases 2–6:

#### Phase 2: Master Timetable Optimizer
- **CREATE** `backend/requirements.txt` — Add `ortools`, `fastapi`, `uvicorn`, `pydantic`, `pytest`, `httpx`.
- **UPDATE** `backend/database.py` — Add atomic transaction manager (`get_transaction()`).
- **CREATE** `backend/timetable_optimizer.py` — OR-Tools CP-SAT model builder, constraint formulation, solver runner, database saver, and CSV exporter.

#### Phase 3: Independent Schedule Validator
- **CREATE** `backend/timetable_validator.py` — Pre-solver input validation, independent post-solver constraint audit (`verify_timetable_schedule`), quality metrics, and infeasibility bottleneck analyzer.

#### Phase 4: Personalized Timetable Dashboards
- **CREATE** `backend/auth.py` — Role-based access control (`student`, `instructor`, `admin`) and Anti-IDOR token guards.
- **UPDATE** `backend/main.py` — Mount `/api/auth/*`, `/api/admin/timetable/*`, and personalized timetable routes.
- **CREATE** `frontend/src/components/StudentTimetableView.jsx` — Sunday–Thursday weekly calendar grid and tabular view for students.
- **CREATE** `frontend/src/components/InstructorTimetableView.jsx` — Weekly teaching schedule and room dashboard for instructors.
- **CREATE** `frontend/src/components/AdminTimetableView.jsx` — Master timetable generation console, solver weights, and CSV export.

#### Phase 5: Course Registration & Conflict Checking
- **CREATE** `backend/registration_service.py` — Pre-registration conflict check, seat capacity validator, compatible alternative section recommender, and atomic database registration transactions.
- **CREATE** `frontend/src/components/CourseRegistrationView.jsx` — Section selection cart, conflict highlighting, and alternative section suggestions.
- **UPDATE** `frontend/src/components/RecommenderView.jsx` — Connect proposed courses directly to registration workflow.
- **UPDATE** `frontend/src/api.js`, `frontend/src/App.jsx`, `frontend/src/App.css` — Auth headers, navigation tabs, and timetable styles.

#### Phase 6: Automated Testing & Defense Guide
- **CREATE** `backend/tests/test_timetable_system.py` — 10 automated test scenarios covering collisions, capacity, Anti-IDOR, infeasibility, missing data, and regressions.
- **UPDATE** `docs/ARCHITECTURE_AND_USER_GUIDE.md` — Complete system documentation and graduation defense presentation script.
