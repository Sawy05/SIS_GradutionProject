# AI Development Prompt — Uni Assist Smart Timetable Optimizer

## 1. Project Overview
I am developing a senior graduation project called Uni Assist, a university assistance platform. One of its main features is a Smart Timetable Optimizer that automatically generates valid university timetables and provides personalized schedules for students and instructors.

Act as a senior software engineer, AI/optimization specialist, and full-stack developer. Your responsibility is to help me develop this feature into a complete, reliable, and well-integrated system suitable for a Computer Science graduation project.

The system must optimize university scheduling, prevent timetable conflicts, support student course registration, and provide personalized timetable views based on authenticated user accounts.

Important: Before modifying or generating code, inspect my existing project structure, source code, database, authentication system, user interfaces, and existing features. Do not assume that the application uses a particular framework or database until you have inspected the project.

## 2. Main Project Objectives
The Smart Timetable Optimizer must accomplish the following objectives:
1. Automatically generate a university-wide master timetable.
2. Assign courses to suitable days, time slots, rooms, and instructors.
3. Prevent conflicts involving students, instructors, and classrooms.
4. Ensure classroom capacity is sufficient for course enrollment.
5. Minimize students’ long gaps between classes whenever possible.
6. Support personalized student timetables.
7. Support personalized instructor timetables.
8. Validate students’ selected courses before confirming registration.
9. Recommend compatible course sections when alternatives exist.
10. Integrate with the existing Uni Assist application without breaking its current features.

## 3. Timetable Optimization Engine
Use Python and Google OR-Tools CP-SAT as the primary optimization technology.

The optimization engine should:
- Load course information, student registrations, instructors, rooms, room capacities, available time slots, and scheduling constraints.
- Generate possible scheduling assignments for each course.
- Assign each course session to a valid day, time, room, and instructor.
- Produce a valid master timetable while satisfying all hard constraints.
- Optimize soft constraints to improve timetable quality.
- Save or export the resulting timetable so the application can use it.

### Hard constraints
These rules must never be violated in a valid timetable:
- A room cannot host two classes simultaneously.
- An instructor cannot teach two classes simultaneously.
- A student cannot attend two registered classes simultaneously.
- A room must have sufficient capacity for the students enrolled in a course.
- Every scheduled course must have a valid time slot, room, and instructor.
- Course duration and required session frequency must be respected.
- Instructor availability and other official university restrictions must be respected when that information is available.
- If the problem cannot be solved, the system must report that no feasible schedule was found rather than silently producing an invalid timetable.

### Soft constraints
When feasible, the optimizer should:
- Minimize long gaps between a student’s classes.
- Reduce unnecessarily long student days.
- Distribute classes across the week in a balanced way.
- Balance instructors’ teaching loads.
- Respect preferred teaching times and room assignments when such preferences are available.

Use configurable weights for soft constraints so the university can adjust scheduling priorities.

## 4. Master Timetable Generation
The first major feature is an administrative scheduling process.
The system should:
1. Load the required university data.
2. Validate the input data and identify missing or inconsistent information.
3. Construct the optimization model.
4. Run the OR-Tools CP-SAT solver.
5. Validate the generated schedule independently.
6. Display the master timetable in a readable table or calendar.
7. Save the approved timetable in the application’s database or established storage system.
8. Export the timetable to CSV when required.

The master timetable should include:
- Day
- Start time and end time
- Course ID and course name
- Instructor
- Classroom
- Enrollment count

Administrators should be able to review the results before publishing them.

## 5. Personalized Student Timetable
Create a student timetable feature that uses the existing authentication system.
The system should:
1. Identify the authenticated student using a trusted student ID.
2. Retrieve that student’s confirmed course registrations.
3. Match the registered courses against the published master timetable.
4. Display only the sessions relevant to that student.
5. Present the schedule in a weekly calendar and a clear timetable view.

Students must not be able to access another student’s private timetable simply by changing an ID in a request.
The timetable should display course names, days, times, rooms, and instructors where available.

## 6. Personalized Instructor Timetable
Create an instructor dashboard that uses the authenticated instructor’s ID.
The system should:
1. Retrieve the instructor’s assigned courses.
2. Filter the published master timetable by those assignments.
3. Display the instructor’s weekly teaching schedule.
4. Show course information, classroom locations, teaching hours, and session counts.
5. Ensure that instructors can only access the information permitted by their roles.

The instructor dashboard should use the same published master timetable rather than creating an independent schedule.

## 7. Student Course Registration and Conflict Checking
Implement a course-registration feature that allows students to select courses or sections.
Before confirming registration, the system should:
- Check whether the selected courses have overlapping sessions.
- Validate prerequisite and registration rules when those data are available.
- Check section availability and enrollment limits.
- Identify conflicting course selections.
- Recommend compatible sections if multiple sections are offered.
- Save valid registrations and update enrollment counts correctly.

Important design principle: Once a university-wide timetable has been published, do not move a lecture solely to accommodate one student. Instead, find a compatible combination of courses or sections. Regenerate the master timetable only through an authorized scheduling process.

## 8. Application Architecture and Integration
Inspect the existing Uni Assist architecture before choosing how to integrate the optimizer.
The intended logical architecture is:
- User interface: Administrative scheduling interface, student dashboard, and instructor dashboard.
- Application logic: Authentication, authorization, registration, timetable retrieval, and validation.
- Optimization engine: Python, Google OR-Tools CP-SAT, hard constraints, and soft objectives.
- Data layer: Courses, registrations, students, instructors, classrooms, time slots, and published timetables.

Use the existing frameworks, database, authentication mechanisms, and coding conventions whenever practical.
If the optimizer runs as a separate Python service, define a clear interface between that service and the existing application. Validate all inputs and outputs.
Do not duplicate existing functionality unnecessarily. Do not replace the entire application or introduce a new framework without a clear technical reason.

## 9. Data and Database Requirements
Inspect the current database and reuse existing tables or models wherever appropriate.
Ensure the system has access to the necessary entities:
- Students
- Instructors
- Courses
- Course sections
- Course registrations
- Classrooms and capacities
- Instructor availability
- Time slots
- Timetable sessions
- Published timetable versions

Define appropriate relationships, primary keys, foreign keys, and validation rules.
Use transactions where necessary to prevent inconsistent registration or timetable data.
Do not invent official university information. If real data is unavailable, create clearly labeled sample data for development and testing.
The initial prototype uses Fall 2026 data, 18 active courses, two-hour weekly sessions, and Sunday–Thursday scheduling. It uses fictional instructor and room assignments. Keep these assumptions configurable and replace sample data with official data when available.

## 10. Validation and Testing
Create independent tests for the optimizer and application integration.
At a minimum, test the following scenarios:
1. Instructor collision: no instructor has overlapping classes.
2. Student collision: no student has overlapping registered courses.
3. Room collision: no classroom hosts overlapping classes.
4. Room capacity: every assigned room accommodates the enrollment.
5. Student dashboard: only the authenticated student’s registered sessions appear.
6. Instructor dashboard: only the authenticated instructor’s assigned sessions appear.
7. Registration validation: conflicting choices are rejected or a compatible alternative is offered.
8. Unsatisfiable scheduling: the system reports infeasibility clearly.
9. Missing data: invalid courses, unavailable rooms, or missing instructor assignments are handled safely.
10. Regression testing: existing Uni Assist features, including its chatbot and recommender, continue to work.

Include unit tests, integration tests, and representative end-to-end tests.
Do not consider a timetable valid merely because the solver returns a result. Independently verify the hard constraints before publication.

## 11. Implementation Roadmap
Develop the feature incrementally in this order:
- Phase 1 — Inspect the existing application
- Phase 2 — Complete the master timetable optimizer
- Phase 3 — Validate and improve schedule quality
- Phase 4 — Build personalized dashboards
- Phase 5 — Integrate course registration
- Phase 6 — Complete integration and testing

## 12. How You Should Work
Follow these development rules throughout the project:
- Start by inspecting the existing codebase before making changes.
- Explain the current architecture and identify what is already implemented.
- Clearly distinguish implemented features from planned features.
- Avoid rewriting working code without a good reason.
- Provide complete, runnable code for the files that need changes.
- Identify the exact file paths for every addition or modification.
- Explain dependencies, installation commands, environment variables, database changes, and how to run the application.
- Explain important technical decisions in beginner-friendly language.
- Do not claim a feature is implemented or tested unless it actually is.
- Never invent database schemas, API endpoints, credentials, or existing functions.
- Protect authentication, authorization, and student data.
- Ask focused questions only when essential information is missing.
- After each phase, run or specify relevant tests and report the results honestly.
- Maintain clear documentation so another developer can understand and continue the project.

## 13. Expected Final Deliverable
The final result should be a working Smart Timetable Optimizer integrated with Uni Assist, including:
- A reliable university-wide timetable generation engine.
- Hard-constraint validation and soft-constraint optimization.
- Administrative timetable review and publication.
- Personalized student timetables.
- Personalized instructor timetables.
- Course-registration conflict checking.
- Compatible section recommendations when alternatives exist.
- Database integration and appropriate access controls.
- CSV export and readable timetable views.
- Automated tests and setup documentation.
- A clear demonstration workflow suitable for a Computer Science graduation-project presentation.
