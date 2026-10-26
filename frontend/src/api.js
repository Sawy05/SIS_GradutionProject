const API_BASE = "http://127.0.0.1:8000";

export async function fetchSystemStats() {
  try {
    const res = await fetch(`${API_BASE}/api/system-stats`);
    if (!res.ok) throw new Error("Backend offline");
    return await res.json();
  } catch (err) {
    console.warn("Using offline stats fallback:", err.message);
    return {
      total_students: 5000,
      total_courses: 158,
      total_enrollments: 30000,
      total_grades_logged: 30000,
      knowledge_base_qa_count: 407,
      departments: [
        { department_id: "8", department_name: "Computer Science" },
        { department_id: "9", department_name: "Cybersecurity & Network Systems" },
        { department_id: "10", department_name: "Data Science & Artificial Intelligence" },
        { department_id: "11", department_name: "Software Engineering & Information Systems" }
      ]
    };
  }
}

export async function fetchStudents(search = "", departmentId = "", limit = 40) {
  try {
    let url = `${API_BASE}/api/students?limit=${limit}`;
    if (search) url += `&search=${encodeURIComponent(search)}`;
    if (departmentId) url += `&department_id=${encodeURIComponent(departmentId)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to load students");
    return await res.json();
  } catch (err) {
    console.warn("Using offline student list fallback:", err.message);
    return {
      students: [
        { student_id: "FCDS20260001", student_name: "Adam Ibrahim Shehata El-Naggar", department_name: "Data Science & Artificial Intelligence", department_id: "10", year_level: 1, gpa: 3.05, academic_standing: "Good Standing", mbti: "ENFJ", learning_style: "Auditory" },
        { student_id: "FCDS20250001", student_name: "Fatma Adel Abdel-Hamid El-Sayed", department_name: "Data Science & Artificial Intelligence", department_id: "10", year_level: 2, gpa: 2.93, academic_standing: "Good Standing", mbti: "ENFP", learning_style: "Reading/Writing" },
        { student_id: "FCDS20240001", student_name: "Reem Tarek Kamal El-Kady", department_name: "Data Science & Artificial Intelligence", department_id: "10", year_level: 3, gpa: 3.38, academic_standing: "Good Standing", mbti: "INTJ", learning_style: "Visual" },
        { student_id: "FCDS20230001", student_name: "Ziad Hossam Helmy El-Sayed", department_name: "Data Science & Artificial Intelligence", department_id: "10", year_level: 4, gpa: 3.71, academic_standing: "Dean's List", mbti: "INTP", learning_style: "Kinesthetic" }
      ]
    };
  }
}

export async function fetchStudentDetail(studentId) {
  const res = await fetch(`${API_BASE}/api/students/${studentId}`);
  if (!res.ok) throw new Error("Could not load student profile");
  return await res.json();
}

export async function fetchRecommendations(studentId, topN = 6) {
  const res = await fetch(`${API_BASE}/api/students/${studentId}/recommendations?top_n=${topN}`);
  if (!res.ok) throw new Error("Could not load course recommendations");
  return await res.json();
}

export async function fetchAnalytics(studentId) {
  const res = await fetch(`${API_BASE}/api/students/${studentId}/analytics`);
  if (!res.ok) throw new Error("Could not load academic analytics");
  return await res.json();
}

export async function fetchDegreeAudit(studentId) {
  const res = await fetch(`${API_BASE}/api/students/${studentId}/degree-audit`);
  if (!res.ok) throw new Error("Could not load degree audit");
  return await res.json();
}

export async function fetchPrerequisiteTree(studentId) {
  const res = await fetch(`${API_BASE}/api/students/${studentId}/prerequisite-tree`);
  if (!res.ok) throw new Error("Could not load prerequisite tree");
  return await res.json();
}

export async function sendChatMessage(prompt, studentId, mbti, learningStyle, temperature = 0.4) {
  const res = await fetch(`${API_BASE}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt,
      student_id: studentId,
      mbti: mbti || undefined,
      learning_style: learningStyle || undefined,
      temperature
    })
  });
  if (!res.ok) throw new Error("Chat service unavailable");
  return await res.json();
}

export async function simulateGPA(studentId, simulatedCourses) {
  const res = await fetch(`${API_BASE}/api/simulate-gpa`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      student_id: studentId,
      simulated_courses: simulatedCourses
    })
  });
  if (!res.ok) throw new Error("Simulation failed");
  return await res.json();
}

export async function fetchGroupTimetable(departmentId = "10", yearLevel = 1, groupId = 1) {
  try {
    let url = `${API_BASE}/api/courses/timetables/groups?department_id=${encodeURIComponent(departmentId)}&year_level=${encodeURIComponent(yearLevel)}&group_id=${encodeURIComponent(groupId)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to load group timetable");
    return await res.json();
  } catch (err) {
    console.warn("Using offline group timetable fallback:", err.message);
    return {
      status: "fallback",
      timetable_id: "TT-2026-FALL",
      department: { department_id: String(departmentId), department_name: "Data Science & Artificial Intelligence" },
      year_level: Number(yearLevel),
      group_id: Number(groupId),
      filters: {
        departments: [
          { department_id: "8", department_name: "Computer Science", code_prefix: "CS" },
          { department_id: "9", department_name: "Cybersecurity & Network Systems", code_prefix: "CYS" },
          { department_id: "10", department_name: "Data Science & Artificial Intelligence", code_prefix: "DSAI" },
          { department_id: "11", department_name: "Software Engineering & Information Systems", code_prefix: "SEIS" }
        ],
        available_years: [1, 2, 3, 4],
        available_groups: [1, 2, 3, 4]
      },
      summary: {
        total_sessions: 6,
        unique_courses: 5,
        total_credits: 16,
        active_days: 4,
        lectures: 4,
        labs: 2
      },
      sessions: [
        {
          session_id: "SES-10-1-G1-1",
          session_type: "Lecture",
          course_id: "DSAI101",
          course_name: "Introduction to Data Science & AI",
          credits: 3,
          year_level: 1,
          department_name: "Data Science & Artificial Intelligence",
          section_id: "SEC-DSAI101-01",
          section_number: 1,
          room_id: "HALL-A",
          room_number: "Lecture Hall A",
          building: "Faculty Main Complex (FCDS)",
          slot_id: "SUN-P1",
          day_of_week: "Sunday",
          start_time: "08:30",
          end_time: "10:30",
          period: 1,
          instructor_name: "Dr. Ahmed El-Sayed"
        },
        {
          session_id: "SES-10-1-G1-2",
          session_type: "Lab",
          course_id: "DSAI101",
          course_name: "Introduction to Data Science & AI",
          credits: 3,
          year_level: 1,
          department_name: "Data Science & Artificial Intelligence",
          section_id: "SEC-DSAI101-01",
          room_id: "LAB-AI-1",
          room_number: "AI & Robotics Lab 1",
          building: "Computing Labs Center",
          slot_id: "SUN-P2",
          day_of_week: "Sunday",
          start_time: "10:45",
          end_time: "12:45",
          period: 2,
          instructor_name: "Eng. Mohamed Taha"
        },
        {
          session_id: "SES-10-1-G1-3",
          session_type: "Lecture",
          course_id: "CS111",
          course_name: "Structured Programming (C++)",
          credits: 3,
          year_level: 1,
          department_name: "Data Science & Artificial Intelligence",
          section_id: "SEC-CS111-01",
          section_number: 1,
          room_id: "HALL-B",
          room_number: "Lecture Hall B",
          building: "Faculty Main Complex (FCDS)",
          slot_id: "MON-P1",
          day_of_week: "Monday",
          start_time: "08:30",
          end_time: "10:30",
          period: 1,
          instructor_name: "Dr. Mahmoud Hassan"
        },
        {
          session_id: "SES-10-1-G1-4",
          session_type: "Lecture",
          course_id: "MATH101",
          course_name: "Calculus & Linear Algebra I",
          credits: 3,
          year_level: 1,
          department_name: "Data Science & Artificial Intelligence",
          section_id: "SEC-MATH101-01",
          section_number: 1,
          room_id: "HALL-C",
          room_number: "Lecture Hall C",
          building: "Faculty Main Complex (FCDS)",
          slot_id: "TUE-P2",
          day_of_week: "Tuesday",
          start_time: "10:45",
          end_time: "12:45",
          period: 2,
          instructor_name: "Prof. Nadia Roushdy"
        },
        {
          session_id: "SES-10-1-G1-5",
          session_type: "Lecture",
          course_id: "STAT101",
          course_name: "Probability & Applied Statistics",
          credits: 3,
          year_level: 1,
          department_name: "Data Science & Artificial Intelligence",
          section_id: "SEC-STAT101-01",
          section_number: 1,
          room_id: "HALL-A",
          room_number: "Lecture Hall A",
          building: "Faculty Main Complex (FCDS)",
          slot_id: "WED-P1",
          day_of_week: "Wednesday",
          start_time: "08:30",
          end_time: "10:30",
          period: 1,
          instructor_name: "Dr. Mona Farouk"
        },
        {
          session_id: "SES-10-1-G1-6",
          session_type: "Lecture",
          course_id: "HUM101",
          course_name: "Technical Communication & Ethics",
          credits: 2,
          year_level: 1,
          department_name: "Data Science & Artificial Intelligence",
          section_id: "SEC-HUM101-01",
          section_number: 1,
          room_id: "HALL-D",
          room_number: "Lecture Hall D",
          building: "Faculty Main Complex (FCDS)",
          slot_id: "THU-P3",
          day_of_week: "Thursday",
          start_time: "13:00",
          end_time: "15:00",
          period: 3,
          instructor_name: "Dr. Khaled Abdel-Rahman"
        }
      ]
    };
  }
}

export async function fetchRecommendedSpecializedTimetable(studentId = "FCDS20260001") {
  try {
    const res = await fetch(`${API_BASE}/api/courses/timetables/recommended-specialized?student_id=${encodeURIComponent(studentId)}`);
    if (!res.ok) throw new Error("Failed to load recommended specialized timetable");
    return await res.json();
  } catch (err) {
    console.warn("Using offline recommended timetable fallback:", err.message);
    return {
      status: "fallback",
      student_profile: {
        student_id: studentId,
        student_name: "Adam Ibrahim Shehata El-Naggar",
        department_id: "10",
        department_name: "Data Science & Artificial Intelligence",
        year_level: 1,
        gpa: 3.05,
        academic_standing: "Good Standing"
      },
      specialization_track: "Data Science & Artificial Intelligence",
      recommended_options: [
        {
          option_id: "opt-morning-track",
          title: "Optimal Track Recommendation: Morning Focus",
          subtitle: "Prioritizes core major curriculum during peak morning focus hours (08:30–12:45).",
          badge_style: "primary",
          is_active_schedule: true,
          total_courses: 5,
          total_credits: 15,
          active_days: 4,
          average_match_score: 94.2,
          badges: [
            { icon: "zap", title: "Gap Optimized", text: "Minimal idle gaps between classes (< 40 mins)", color: "emerald" },
            { icon: "scale", title: "Workload Balanced", text: "Evenly spaced across 4 study days (no 8hr overloaded days)", color: "blue" },
            { icon: "target", title: "Specialization Fit", text: "94.2% average syllabus & track alignment", color: "purple" },
            { icon: "shield", title: "100% Conflict-Free", text: "Zero collision across all registered lectures & labs", color: "emerald" }
          ],
          section_ids: ["SEC-DSAI101-01", "SEC-CS111-01", "SEC-MATH101-01", "SEC-STAT101-01", "SEC-HUM101-01"],
          sessions: [
            {
              session_id: "SES-10-1-G1-1",
              session_type: "Lecture",
              course_id: "DSAI101",
              course_name: "Introduction to Data Science & AI",
              credits: 3,
              match_percentage: 98,
              section_id: "SEC-DSAI101-01",
              section_number: 1,
              room_number: "Lecture Hall A",
              building: "Faculty Main Complex (FCDS)",
              day_of_week: "Sunday",
              start_time: "08:30",
              end_time: "10:30",
              period: 1,
              instructor_name: "Dr. Ahmed El-Sayed"
            },
            {
              session_id: "SES-10-1-G1-3",
              session_type: "Lecture",
              course_id: "CS111",
              course_name: "Structured Programming (C++)",
              credits: 3,
              match_percentage: 95,
              section_id: "SEC-CS111-01",
              section_number: 1,
              room_number: "Lecture Hall B",
              building: "Faculty Main Complex (FCDS)",
              day_of_week: "Monday",
              start_time: "08:30",
              end_time: "10:30",
              period: 1,
              instructor_name: "Dr. Mahmoud Hassan"
            },
            {
              session_id: "SES-10-1-G1-4",
              session_type: "Lecture",
              course_id: "MATH101",
              course_name: "Calculus & Linear Algebra I",
              credits: 3,
              match_percentage: 92,
              section_id: "SEC-MATH101-01",
              section_number: 1,
              room_number: "Lecture Hall C",
              building: "Faculty Main Complex (FCDS)",
              day_of_week: "Tuesday",
              start_time: "10:45",
              end_time: "12:45",
              period: 2,
              instructor_name: "Prof. Nadia Roushdy"
            },
            {
              session_id: "SES-10-1-G1-5",
              session_type: "Lecture",
              course_id: "STAT101",
              course_name: "Probability & Applied Statistics",
              credits: 3,
              match_percentage: 94,
              section_id: "SEC-STAT101-01",
              section_number: 1,
              room_number: "Lecture Hall A",
              building: "Faculty Main Complex (FCDS)",
              day_of_week: "Wednesday",
              start_time: "08:30",
              end_time: "10:30",
              period: 1,
              instructor_name: "Dr. Mona Farouk"
            },
            {
              session_id: "SES-10-1-G1-6",
              session_type: "Lecture",
              course_id: "HUM101",
              course_name: "Technical Communication & Ethics",
              credits: 3,
              match_percentage: 92,
              section_id: "SEC-HUM101-01",
              section_number: 1,
              room_number: "Lecture Hall D",
              building: "Faculty Main Complex (FCDS)",
              day_of_week: "Thursday",
              start_time: "10:45",
              end_time: "12:45",
              period: 2,
              instructor_name: "Dr. Khaled Abdel-Rahman"
            }
          ]
        },
        {
          option_id: "opt-balanced-track",
          title: "Alternative Option: Balanced Mid-Day Spread",
          subtitle: "Spaces lectures evenly across balanced mid-day windows with dedicated lab intervals.",
          badge_style: "secondary",
          is_active_schedule: false,
          total_courses: 5,
          total_credits: 15,
          active_days: 4,
          average_match_score: 91.6,
          badges: [
            { icon: "zap", title: "Gap Optimized", text: "Predictable lunch and self-study breaks", color: "emerald" },
            { icon: "scale", title: "Workload Balanced", text: "Evenly spaced afternoon study blocks", color: "blue" },
            { icon: "target", title: "Specialization Fit", text: "91.6% average track match", color: "purple" },
            { icon: "shield", title: "100% Conflict-Free", text: "Zero clashes across all section selections", color: "emerald" }
          ],
          section_ids: ["SEC-DSAI101-02", "SEC-CS111-02", "SEC-MATH101-02", "SEC-STAT101-02", "SEC-HUM101-02"],
          sessions: [
            {
              session_id: "SES-10-1-G2-1",
              session_type: "Lecture",
              course_id: "DSAI101",
              course_name: "Introduction to Data Science & AI",
              credits: 3,
              match_percentage: 95,
              section_id: "SEC-DSAI101-02",
              section_number: 2,
              room_number: "Lecture Hall B",
              building: "Faculty Main Complex (FCDS)",
              day_of_week: "Sunday",
              start_time: "10:45",
              end_time: "12:45",
              period: 2,
              instructor_name: "Dr. Ahmed El-Sayed"
            },
            {
              session_id: "SES-10-1-G2-3",
              session_type: "Lecture",
              course_id: "CS111",
              course_name: "Structured Programming (C++)",
              credits: 3,
              match_percentage: 92,
              section_id: "SEC-CS111-02",
              section_number: 2,
              room_number: "Lecture Hall C",
              building: "Faculty Main Complex (FCDS)",
              day_of_week: "Monday",
              start_time: "10:45",
              end_time: "12:45",
              period: 2,
              instructor_name: "Dr. Mahmoud Hassan"
            },
            {
              session_id: "SES-10-1-G2-4",
              session_type: "Lecture",
              course_id: "MATH101",
              course_name: "Calculus & Linear Algebra I",
              credits: 3,
              match_percentage: 90,
              section_id: "SEC-MATH101-02",
              section_number: 2,
              room_number: "Lecture Hall D",
              building: "Faculty Main Complex (FCDS)",
              day_of_week: "Tuesday",
              start_time: "13:00",
              end_time: "15:00",
              period: 3,
              instructor_name: "Prof. Nadia Roushdy"
            },
            {
              session_id: "SES-10-1-G2-5",
              session_type: "Lecture",
              course_id: "STAT101",
              course_name: "Probability & Applied Statistics",
              credits: 3,
              match_percentage: 91,
              section_id: "SEC-STAT101-02",
              section_number: 2,
              room_number: "Lecture Hall B",
              building: "Faculty Main Complex (FCDS)",
              day_of_week: "Wednesday",
              start_time: "10:45",
              end_time: "12:45",
              period: 2,
              instructor_name: "Dr. Mona Farouk"
            },
            {
              session_id: "SES-10-1-G2-6",
              session_type: "Lecture",
              course_id: "HUM101",
              course_name: "Technical Communication & Ethics",
              credits: 3,
              match_percentage: 90,
              section_id: "SEC-HUM101-02",
              section_number: 2,
              room_number: "Lecture Hall A",
              building: "Faculty Main Complex (FCDS)",
              day_of_week: "Thursday",
              start_time: "13:00",
              end_time: "15:00",
              period: 3,
              instructor_name: "Dr. Khaled Abdel-Rahman"
            }
          ]
        }
      ]
    };
  }
}

export async function fetchPersonalTimetable(studentId = "FCDS20260001") {
  try {
    const res = await fetch(`${API_BASE}/api/courses/timetables/personal?student_id=${encodeURIComponent(studentId)}`);
    if (!res.ok) throw new Error("Failed to load personal timetable");
    return await res.json();
  } catch (err) {
    console.warn("Using offline personal timetable fallback:", err.message);
    return {
      status: "fallback",
      student: {
        student_id: studentId,
        student_name: "Adam Ibrahim Shehata El-Naggar",
        department_name: "Data Science & Artificial Intelligence",
        year_level: 1,
        gpa: 3.05,
        academic_standing: "Good Standing"
      },
      summary: {
        total_registered_courses: 5,
        total_credits: 15,
        days_per_week: 4,
        lectures: 4,
        labs: 1
      },
      sessions: []
    };
  }
}

export async function applyRecommendedTimetable(studentId, optionId, sectionIds) {
  const res = await fetch(`${API_BASE}/api/courses/timetables/apply-recommendation`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      student_id: studentId,
      option_id: optionId,
      section_ids: sectionIds
    })
  });
  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.detail || "Failed to apply timetable");
  }
  return await res.json();
}
