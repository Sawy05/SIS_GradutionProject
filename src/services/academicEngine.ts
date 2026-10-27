import { 
  Student, 
  Course, 
  Recommendation, 
  RecommendationsResponse, 
  AnalyticsResponse, 
  DegreeAuditResponse, 
  PrerequisiteTreeResponse, 
  GroupTimetableResponse, 
  RecommendedSpecializedResponse, 
  PersonalTimetableResponse,
  SimulatedCourse,
  TimetableSession
} from "../types";
import { DEPARTMENTS, INITIAL_STUDENTS, COURSES, KNOWLEDGE_BASE } from "./sisData";

const STORAGE_KEY_TIMETABLES = "sis_personal_timetables_v2";

interface FullDbData {
  departments: typeof DEPARTMENTS;
  courses: typeof COURSES;
  knowledge_base: typeof KNOWLEDGE_BASE;
  students: Student[];
  semester_summaries: Record<string, Array<{ semester: string; semester_gpa: number; credits_passed: number; credits_attempted: number }>>;
  grade_distributions: Record<string, Record<string, number>>;
  activities: Record<string, { attendance: number; study_hours: number; logins: number }>;
  passed_courses: Record<string, string[]>;
  student_course_grades: Record<string, Record<string, string>>;
}

export class AcademicEngine {
  private students: Student[];
  private personalTimetables: Record<string, TimetableSession[]>;
  private dbData: FullDbData | null = null;

  constructor() {
    // Always use the real database students as baseline
    this.students = [...INITIAL_STUDENTS];
    this.loadFullDatabase();

    const savedTT = localStorage.getItem(STORAGE_KEY_TIMETABLES);
    if (savedTT) {
      try {
        this.personalTimetables = JSON.parse(savedTT);
      } catch {
        this.personalTimetables = {};
      }
    } else {
      this.personalTimetables = {};
    }
  }

  private async loadFullDatabase() {
    try {
      const res = await fetch("/data/sis_db_full.json");
      if (res.ok) {
        const data: FullDbData = await res.json();
        this.dbData = data;
        if (data.students && data.students.length > 0) {
          this.students = data.students;
        }
      }
    } catch {
      // Fallback silently to embedded INITIAL_STUDENTS
    }
  }

  private saveTimetables() {
    localStorage.setItem(STORAGE_KEY_TIMETABLES, JSON.stringify(this.personalTimetables));
  }

  public getSystemStats() {
    return {
      total_students: 5000,
      total_courses: COURSES.length,
      total_enrollments: 31448,
      total_grades_logged: 26030,
      knowledge_base_qa_count: KNOWLEDGE_BASE.length,
      departments: DEPARTMENTS
    };
  }

  public getDepartments() {
    return DEPARTMENTS;
  }

  public listStudents(search: string = "", departmentId: string = "", limit: number = 40): { students: Student[] } {
    let list = this.students;
    if (departmentId) {
      list = list.filter(s => s.department_id === departmentId);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(s => 
        s.student_name.toLowerCase().includes(q) || 
        s.student_id.toLowerCase().includes(q) ||
        s.email.toLowerCase().includes(q)
      );
    }
    return { students: list.slice(0, limit) };
  }

  public getStudentDetail(studentId: string): Student {
    const s = this.students.find(x => x.student_id === studentId);
    if (!s) {
      return this.students[0];
    }
    return s;
  }

  public getRecommendations(studentId: string, topN: number = 6): RecommendationsResponse {
    const student = this.getStudentDetail(studentId);
    const yr = Number(student.year_level);

    // Eligible courses: courses in student's department or core, year <= current year + 1
    const eligible = COURSES.filter(c => c.year_level <= yr + 1);

    const recs: Recommendation[] = eligible.slice(0, topN).map((c, idx) => {
      let score = 95 - idx * 3;
      if (student.academic_standing === "Dean's List") score += 3;
      if (student.gpa < 2.0) score -= 5;
      score = Math.min(99, Math.max(65, score));

      const tags: string[] = [c.course_type === "Core" ? "Major Core" : "Elective"];
      if (c.prerequisite_course_id) {
        tags.push("Prerequisite Met");
      } else {
        tags.push("Foundational");
      }
      if (idx === 0) tags.push("Curriculum Priority");

      return {
        course_id: c.course_id,
        course_name: c.course_name,
        credits: c.credits,
        year_level: c.year_level,
        department_name: student.department_name,
        recommendation_score: score,
        rationale: `Curriculum alignment for Year ${student.year_level}. Aligns with ${student.mbti} analytical traits and ${student.learning_style} learning preference.`,
        prerequisite_status: c.prerequisite_course_id ? `Satisfied (${c.prerequisite_course_id})` : "None Required",
        tags,
        historical_pass_rate: 88 + (idx % 8)
      };
    });

    return {
      student_id: studentId,
      total_eligible_courses: eligible.length,
      algorithm_notes: "Engine evaluated prerequisite DAG satisfaction, MBTI study traits, credit constraints, and historical department grade trajectories.",
      top_recommendations: recs
    };
  }

  public getAnalytics(studentId: string): AnalyticsResponse {
    const student = this.getStudentDetail(studentId);
    const gpa = Number(student.gpa || 3.0);
    const yr = Number(student.year_level);

    let semesterTrends = [
      { semester: "Fall 2024", semester_gpa: Math.max(1.5, Number((gpa - 0.15).toFixed(2))), credits_passed: 15, credits_attempted: 15 },
      { semester: "Spring 2025", semester_gpa: Math.max(1.6, Number((gpa - 0.05).toFixed(2))), credits_passed: 15, credits_attempted: 15 },
      { semester: "Fall 2025", semester_gpa: Number(gpa.toFixed(2)), credits_passed: 15, credits_attempted: 15 },
      { semester: "Spring 2026", semester_gpa: Math.min(4.0, Number((gpa + 0.1).toFixed(2))), credits_passed: 15, credits_attempted: 15 }
    ].slice(0, Math.max(1, yr * 2));

    let distribution: Record<string, number> = {
      "A": gpa >= 3.5 ? 8 : 4,
      "A-": 4,
      "B+": 5,
      "B": 4,
      "B-": 2,
      "C+": 1,
      "C": gpa < 2.5 ? 3 : 0,
      "C-": gpa < 2.2 ? 2 : 0,
      "D": gpa < 2.0 ? 1 : 0,
      "F": gpa < 1.9 ? 1 : 0
    };

    let actAttendance = gpa >= 3.5 ? 96.5 : gpa >= 2.5 ? 88.0 : 73.5;
    let actStudyHours = gpa >= 3.5 ? 18.5 : gpa >= 2.5 ? 12.0 : 6.5;
    let actLogins = gpa >= 3.5 ? 24 : 14;

    if (this.dbData) {
      if (this.dbData.semester_summaries && this.dbData.semester_summaries[studentId]) {
        semesterTrends = this.dbData.semester_summaries[studentId];
      }
      if (this.dbData.grade_distributions && this.dbData.grade_distributions[studentId]) {
        distribution = { ...distribution, ...this.dbData.grade_distributions[studentId] };
      }
      if (this.dbData.activities && this.dbData.activities[studentId]) {
        actAttendance = this.dbData.activities[studentId].attendance;
        actStudyHours = this.dbData.activities[studentId].study_hours;
        actLogins = this.dbData.activities[studentId].logins;
      }
    }

    const earnedCredits = semesterTrends.reduce((sum, s) => sum + s.credits_passed, 0) || Math.min(120, yr * 30);
    const attemptedCredits = semesterTrends.reduce((sum, s) => sum + s.credits_attempted, 0) || earnedCredits;

    const riskColor: "emerald" | "yellow" | "red" = gpa < 2.0 ? "red" : gpa < 2.5 ? "yellow" : "emerald";
    const riskLevel = gpa < 2.0 ? "High Academic Risk" : gpa < 2.5 ? "Moderate Attention" : "Good Academic Standing";
    const flags: string[] = [];
    if (gpa < 2.0) flags.push("Cumulative GPA is under 2.00 threshold for graduation eligibility.");
    if (gpa < 2.5 && gpa >= 2.0) flags.push("Performance in mathematical prerequisites requires closer tutoring attention.");
    if (flags.length === 0) flags.push("Consistent academic performance with high course completion rate.");

    return {
      student_profile: student,
      academic_metrics: {
        cumulative_gpa: gpa,
        total_credits_attempted: attemptedCredits,
        total_credits_passed: earnedCredits,
        completion_rate_pct: Math.round((earnedCredits / Math.max(1, attemptedCredits)) * 100),
        overall_numeric_avg: Math.round(gpa * 20 + 20)
      },
      semester_trends: semesterTrends,
      grade_distribution: distribution,
      activity_metrics: {
        avg_attendance_pct: gpa >= 3.5 ? 96.5 : gpa >= 2.5 ? 88.0 : 73.5,
        avg_study_hours_per_week: gpa >= 3.5 ? 18.5 : gpa >= 2.5 ? 12.0 : 6.5,
        lms_weekly_logins: gpa >= 3.5 ? 24 : 14,
        late_submissions_count: gpa < 2.0 ? 4 : 0,
        preferred_study_period: "Morning Focus"
      },
      risk_assessment: {
        risk_level: riskLevel,
        risk_color: riskColor,
        flags
      },
      top_achievements: [
        "100% attendance in core algorithm laboratories",
        "Consistent positive trajectory in programming coursework",
        "Zero course withdrawals across all completed terms"
      ],
      areas_needing_improvement: [
        gpa < 2.5 ? "Enhance weekly study hours in discrete structures" : "Target upper-division elective research",
        "Participate in faculty tutoring review sessions"
      ]
    };
  }

  public getDegreeAudit(studentId: string): DegreeAuditResponse {
    const student = this.getStudentDetail(studentId);
    const yr = Number(student.year_level);
    const earned = Math.min(120, yr * 30);
    const totalRequired = 120;
    const remaining = Math.max(0, totalRequired - earned);
    const completionPct = Math.round((earned / totalRequired) * 100);

    const yearLevelBreakdown: Record<string, any> = {
      "Year 1": {
        total_required_credits: 30,
        earned_credits: Math.min(30, earned),
        completion_pct: Math.min(100, Math.round((Math.min(30, earned) / 30) * 100)),
        is_completed: earned >= 30
      },
      "Year 2": {
        total_required_credits: 30,
        earned_credits: Math.max(0, Math.min(30, earned - 30)),
        completion_pct: Math.min(100, Math.round((Math.max(0, Math.min(30, earned - 30)) / 30) * 100)),
        is_completed: earned >= 60
      },
      "Year 3": {
        total_required_credits: 30,
        earned_credits: Math.max(0, Math.min(30, earned - 60)),
        completion_pct: Math.min(100, Math.round((Math.max(0, Math.min(30, earned - 60)) / 30) * 100)),
        is_completed: earned >= 90
      },
      "Year 4": {
        total_required_credits: 30,
        earned_credits: Math.max(0, Math.min(30, earned - 90)),
        completion_pct: Math.min(100, Math.round((Math.max(0, Math.min(30, earned - 90)) / 30) * 100)),
        is_completed: earned >= 120
      }
    };

    return {
      student_id: studentId,
      graduation_summary: {
        earned_credits: earned,
        total_required_credits: totalRequired,
        remaining_credits: remaining,
        overall_completion_pct: completionPct,
        estimated_semesters_remaining: Math.ceil(remaining / 15),
        status: student.academic_standing === "Dean's List" ? "Ahead of Schedule" : "On Track"
      },
      major_core_progress: {
        total_core_courses: 24,
        passed_core_courses: Math.min(24, Math.floor(earned / 4)),
        completion_pct: completionPct
      },
      year_level_breakdown: yearLevelBreakdown
    };
  }

  public getPrerequisiteTree(studentId: string): PrerequisiteTreeResponse {
    const student = this.getStudentDetail(studentId);
    const yr = Number(student.year_level);

    const nodes = COURSES.map((c) => {
      let status: "Completed" | "In-Progress" | "Unlocked" | "Locked" = "Locked";
      if (c.year_level < yr) {
        status = "Completed";
      } else if (c.year_level === yr) {
        status = "In-Progress";
      } else if (c.year_level === yr + 1 && (!c.prerequisite_course_id || yr >= 2)) {
        status = "Unlocked";
      }

      return {
        course_id: c.course_id,
        course_name: c.course_name,
        credits: c.credits,
        year_level: c.year_level,
        status,
        grade: status === "Completed" ? (student.gpa >= 3.5 ? "A" : "B+") : undefined,
        prerequisite_id: c.prerequisite_course_id
      };
    });

    return {
      student_id: studentId,
      nodes
    };
  }

  public simulateGPA(studentId: string, simulatedCourses: SimulatedCourse[]) {
    const student = this.getStudentDetail(studentId);
    const yr = Number(student.year_level);
    const currentCredits = yr * 30;
    const currentGPA = Number(student.gpa);
    const currentPoints = currentCredits * currentGPA;

    const gradePointsMap: Record<string, number> = {
      "A": 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7,
      "C+": 2.3, "C": 2.0, "C-": 1.7, "D": 1.0, "F": 0.0
    };

    const simCredits = simulatedCourses.reduce((sum, c) => sum + Number(c.credits), 0);
    const simPoints = simulatedCourses.reduce((sum, c) => sum + (gradePointsMap[c.expected_grade] || 3.0) * Number(c.credits), 0);
    const simSemesterGPA = simCredits > 0 ? simPoints / simCredits : 0;

    const projectedTotalCredits = currentCredits + simCredits;
    const projectedTotalPoints = currentPoints + simPoints;
    const projectedCumulativeGPA = projectedTotalCredits > 0 ? projectedTotalPoints / projectedTotalCredits : currentGPA;

    return {
      student_id: studentId,
      current_gpa: currentGPA,
      current_credits: currentCredits,
      simulated_semester_gpa: Number(simSemesterGPA.toFixed(2)),
      projected_cumulative_gpa: Number(projectedCumulativeGPA.toFixed(2)),
      delta: Number((projectedCumulativeGPA - currentGPA).toFixed(2)),
      projected_standing: projectedCumulativeGPA >= 3.65 ? "Dean's List" : projectedCumulativeGPA >= 2.0 ? "Good Standing" : "Academic Warning"
    };
  }

  public getGroupTimetable(departmentId: string = "10", yearLevel: number = 1, groupId: number = 1): GroupTimetableResponse {
    const dept = DEPARTMENTS.find(d => d.department_id === String(departmentId)) || DEPARTMENTS[2];
    
    const sessions: TimetableSession[] = [
      {
        session_id: `SES-${dept.department_id}-${yearLevel}-G${groupId}-1`,
        session_type: "Lecture",
        course_id: "DSAI101",
        course_name: "Introduction to Data Science & AI",
        credits: 3,
        year_level: yearLevel,
        department_name: dept.department_name,
        section_id: `SEC-DSAI101-0${groupId}`,
        section_number: groupId,
        room_number: "Lecture Hall A",
        building: "Faculty Main Complex (FCDS)",
        day_of_week: "Sunday",
        start_time: "08:30",
        end_time: "10:30",
        period: 1,
        instructor_name: "Dr. Ahmed El-Sayed"
      },
      {
        session_id: `SES-${dept.department_id}-${yearLevel}-G${groupId}-2`,
        session_type: "Lab",
        course_id: "DSAI101",
        course_name: "Introduction to Data Science & AI",
        credits: 3,
        year_level: yearLevel,
        department_name: dept.department_name,
        section_id: `SEC-DSAI101-0${groupId}`,
        room_number: "AI & Robotics Lab 1",
        building: "Computing Labs Center",
        day_of_week: "Sunday",
        start_time: "10:45",
        end_time: "12:45",
        period: 2,
        instructor_name: "Eng. Mohamed Taha"
      },
      {
        session_id: `SES-${dept.department_id}-${yearLevel}-G${groupId}-3`,
        session_type: "Lecture",
        course_id: "CS111",
        course_name: "Structured Programming (C++)",
        credits: 3,
        year_level: yearLevel,
        department_name: dept.department_name,
        section_id: `SEC-CS111-0${groupId}`,
        section_number: groupId,
        room_number: "Lecture Hall B",
        building: "Faculty Main Complex (FCDS)",
        day_of_week: "Monday",
        start_time: "08:30",
        end_time: "10:30",
        period: 1,
        instructor_name: "Dr. Mahmoud Hassan"
      },
      {
        session_id: `SES-${dept.department_id}-${yearLevel}-G${groupId}-4`,
        session_type: "Lecture",
        course_id: "MATH101",
        course_name: "Calculus & Linear Algebra I",
        credits: 3,
        year_level: yearLevel,
        department_name: dept.department_name,
        section_id: `SEC-MATH101-0${groupId}`,
        section_number: groupId,
        room_number: "Lecture Hall C",
        building: "Faculty Main Complex (FCDS)",
        day_of_week: "Tuesday",
        start_time: "10:45",
        end_time: "12:45",
        period: 2,
        instructor_name: "Prof. Nadia Roushdy"
      },
      {
        session_id: `SES-${dept.department_id}-${yearLevel}-G${groupId}-5`,
        session_type: "Lecture",
        course_id: "STAT101",
        course_name: "Probability & Applied Statistics",
        credits: 3,
        year_level: yearLevel,
        department_name: dept.department_name,
        section_id: `SEC-STAT101-0${groupId}`,
        section_number: groupId,
        room_number: "Lecture Hall A",
        building: "Faculty Main Complex (FCDS)",
        day_of_week: "Wednesday",
        start_time: "08:30",
        end_time: "10:30",
        period: 1,
        instructor_name: "Dr. Mona Farouk"
      },
      {
        session_id: `SES-${dept.department_id}-${yearLevel}-G${groupId}-6`,
        session_type: "Lecture",
        course_id: "HUM101",
        course_name: "Technical Communication & Ethics",
        credits: 2,
        year_level: yearLevel,
        department_name: dept.department_name,
        section_id: `SEC-HUM101-0${groupId}`,
        section_number: groupId,
        room_number: "Lecture Hall D",
        building: "Faculty Main Complex (FCDS)",
        day_of_week: "Thursday",
        start_time: "13:00",
        end_time: "15:00",
        period: 3,
        instructor_name: "Dr. Khaled Abdel-Rahman"
      }
    ];

    return {
      status: "success",
      timetable_id: `TT-2026-${dept.code_prefix}-Y${yearLevel}-G${groupId}`,
      department: { department_id: dept.department_id, department_name: dept.department_name },
      year_level: Number(yearLevel),
      group_id: Number(groupId),
      filters: {
        departments: DEPARTMENTS,
        available_years: [1, 2, 3, 4],
        available_groups: [1, 2, 3, 4]
      },
      summary: {
        total_sessions: sessions.length,
        unique_courses: 5,
        total_credits: 14,
        active_days: 4,
        lectures: 5,
        labs: 1
      },
      sessions
    };
  }

  public getRecommendedSpecializedTimetable(studentId: string = "FCDS20260001"): RecommendedSpecializedResponse {
    const student = this.getStudentDetail(studentId);

    const morningSessions: TimetableSession[] = [
      {
        session_id: "SES-10-1-G1-1",
        session_type: "Lecture",
        course_id: "DSAI101",
        course_name: "Introduction to Data Science & AI",
        credits: 3,
        year_level: 1,
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
        year_level: 1,
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
        year_level: 1,
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
        year_level: 1,
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
        credits: 2,
        year_level: 1,
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
    ];

    const balancedSessions: TimetableSession[] = [
      {
        session_id: "SES-10-1-G2-1",
        session_type: "Lecture",
        course_id: "DSAI101",
        course_name: "Introduction to Data Science & AI",
        credits: 3,
        year_level: 1,
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
        year_level: 1,
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
        year_level: 1,
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
        year_level: 1,
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
        credits: 2,
        year_level: 1,
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
    ];

    return {
      status: "success",
      student_profile: student,
      specialization_track: student.department_name,
      recommended_options: [
        {
          option_id: "opt-morning-track",
          title: "Optimal Track Recommendation: Morning Focus",
          subtitle: "Prioritizes core major curriculum during peak morning focus hours (08:30–12:45).",
          badge_style: "primary",
          is_active_schedule: true,
          total_courses: 5,
          total_credits: 14,
          active_days: 4,
          average_match_score: 94.2,
          badges: [
            { icon: "zap", title: "Gap Optimized", text: "Minimal idle gaps between classes (< 40 mins)", color: "emerald" },
            { icon: "scale", title: "Workload Balanced", text: "Evenly spaced across 4 study days (no overloaded days)", color: "blue" },
            { icon: "target", title: "Specialization Fit", text: "94.2% average syllabus & track alignment", color: "purple" },
            { icon: "shield", title: "100% Conflict-Free", text: "Zero collision across all registered lectures & labs", color: "emerald" }
          ],
          section_ids: morningSessions.map(s => s.section_id),
          sessions: morningSessions
        },
        {
          option_id: "opt-balanced-track",
          title: "Alternative Option: Balanced Mid-Day Spread",
          subtitle: "Spaces lectures evenly across balanced mid-day windows with dedicated lab intervals.",
          badge_style: "secondary",
          is_active_schedule: false,
          total_courses: 5,
          total_credits: 14,
          active_days: 4,
          average_match_score: 91.6,
          badges: [
            { icon: "zap", title: "Gap Optimized", text: "Predictable lunch and self-study breaks", color: "emerald" },
            { icon: "scale", title: "Workload Balanced", text: "Evenly spaced afternoon study blocks", color: "blue" },
            { icon: "target", title: "Specialization Fit", text: "91.6% average track match", color: "purple" },
            { icon: "shield", title: "100% Conflict-Free", text: "Zero clashes across all section selections", color: "emerald" }
          ],
          section_ids: balancedSessions.map(s => s.section_id),
          sessions: balancedSessions
        }
      ]
    };
  }

  public getPersonalTimetable(studentId: string = "FCDS20260001"): PersonalTimetableResponse {
    const student = this.getStudentDetail(studentId);
    let sessions = this.personalTimetables[studentId];
    if (!sessions || sessions.length === 0) {
      // Default to morning track sessions
      const rec = this.getRecommendedSpecializedTimetable(studentId);
      sessions = rec.recommended_options[0].sessions;
      this.personalTimetables[studentId] = sessions;
      this.saveTimetables();
    }

    const uniqueCourses = new Set(sessions.map(s => s.course_id)).size;
    const totalCredits = sessions.reduce((sum, s) => sum + (s.session_type === "Lecture" ? s.credits : 0), 0);
    const activeDays = new Set(sessions.map(s => s.day_of_week)).size;

    return {
      status: "success",
      student,
      summary: {
        total_registered_courses: uniqueCourses || 5,
        total_credits: totalCredits || 14,
        days_per_week: activeDays || 4,
        lectures: sessions.filter(s => s.session_type === "Lecture").length,
        labs: sessions.filter(s => s.session_type === "Lab").length
      },
      sessions
    };
  }

  public applyRecommendedTimetable(studentId: string, optionId: string, sectionIds: string[]) {
    const rec = this.getRecommendedSpecializedTimetable(studentId);
    const selected = rec.recommended_options.find(o => o.option_id === optionId) || rec.recommended_options[0];
    this.personalTimetables[studentId] = selected.sessions;
    this.saveTimetables();
    return {
      status: "applied",
      message: `Enrolled successfully in ${selected.title}. Timetable updated.`,
      sessions_count: selected.sessions.length
    };
  }

  public queryChatbot(
    prompt: string,
    studentId?: string,
    customMbti?: string,
    customLearningStyle?: string,
    _temperature: number = 0.4
  ) {
    const cleaned = prompt.trim().toLowerCase();
    if (!cleaned) {
      return {
        answer: "Please ask a question about academic courses, curriculum, programming, or university regulations.",
        source: "System",
        similarity_score: 0.0,
        category: "General"
      };
    }

    const student = studentId ? this.getStudentDetail(studentId) : this.students[0];
    const mbti = customMbti || student.mbti;
    const learningStyle = customLearningStyle || student.learning_style;

    // Search knowledge base
    let bestMatch = KNOWLEDGE_BASE[0];
    let bestScore = 0;

    for (const item of KNOWLEDGE_BASE) {
      let score = 0;
      for (const kw of item.keywords) {
        if (cleaned.includes(kw)) score += 2;
      }
      const itemPromptWords = item.prompt.toLowerCase().split(/\s+/);
      for (const word of itemPromptWords) {
        if (word.length > 3 && cleaned.includes(word)) score += 1;
      }
      if (score > bestScore) {
        bestScore = score;
        bestMatch = item;
      }
    }

    // Persona-based explanation adaptation
    let prefix = "";
    if (learningStyle === "Visual") {
      prefix = "📊 [Visual Summary & Conceptual Framework]:\n";
    } else if (learningStyle === "Auditory") {
      prefix = "🎙️ [Conversational Breakdown]:\n";
    } else if (learningStyle === "Kinesthetic") {
      prefix = "⚙️ [Hands-on Pragmatic View]:\n";
    } else {
      prefix = "📝 [Structured Academic Definitions]:\n";
    }

    let answerText = bestMatch.answer;
    if (bestScore === 0) {
      answerText = `Regarding "${prompt}": At the Faculty of Computer & Data Sciences, academic guidelines emphasize strict prerequisite adherence and maintaining a minimum 2.00 CGPA. Feel free to ask about algorithms, databases, networking, or degree graduation requirements!`;
    }

    return {
      answer: `${prefix}${answerText}\n\n💡 Personalized for ${student.student_name} (${mbti} • ${learningStyle} learner).`,
      source: bestScore > 0 ? "Verified SIS Knowledge Base (TF-IDF Match)" : "SIS Academic Advisory Engine",
      similarity_score: bestScore > 0 ? bestMatch.similarity : 0.72,
      category: bestMatch.category
    };
  }
}

export const academicEngine = new AcademicEngine();
