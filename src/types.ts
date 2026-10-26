export interface Student {
  student_id: string;
  student_name: string;
  email: string;
  department_id: string;
  department_name: string;
  year_level: number;
  gpa: number;
  academic_standing: string;
  mbti: string;
  learning_style: string;
  advising_notes?: string;
  dean?: string;
}

export interface Department {
  department_id: string;
  department_name: string;
  code_prefix: string;
  dean: string;
  description?: string;
}

export interface Course {
  course_id: string;
  course_name: string;
  department_id: string;
  year_level: number;
  credits: number;
  prerequisite_course_id?: string;
  description: string;
  course_type: string;
  is_required: number;
}

export interface Recommendation {
  course_id: string;
  course_name: string;
  credits: number;
  year_level: number;
  department_name: string;
  recommendation_score: number;
  rationale: string;
  prerequisite_status: string;
  tags: string[];
  historical_pass_rate?: number;
}

export interface RecommendationsResponse {
  student_id: string;
  total_eligible_courses: number;
  algorithm_notes: string;
  top_recommendations: Recommendation[];
}

export interface AcademicMetrics {
  cumulative_gpa: number;
  total_credits_attempted: number;
  total_credits_passed: number;
  completion_rate_pct: number;
  overall_numeric_avg: number;
}

export interface SemesterTrend {
  summary_id?: number;
  semester: string;
  semester_gpa: number;
  credits_passed: number;
  credits_attempted: number;
}

export interface ActivityMetrics {
  avg_attendance_pct: number;
  avg_study_hours_per_week: number;
  lms_weekly_logins: number;
  late_submissions_count: number;
  preferred_study_period: string;
}

export interface RiskAssessment {
  risk_level: string;
  risk_color: "emerald" | "yellow" | "red";
  flags: string[];
}

export interface AnalyticsResponse {
  student_profile: Student;
  academic_metrics: AcademicMetrics;
  semester_trends: SemesterTrend[];
  grade_distribution: Record<string, number>;
  activity_metrics: ActivityMetrics;
  risk_assessment: RiskAssessment;
  top_achievements: string[];
  areas_needing_improvement: string[];
}

export interface GraduationSummary {
  earned_credits: number;
  total_required_credits: number;
  remaining_credits: number;
  overall_completion_pct: number;
  estimated_semesters_remaining: number;
  status: string;
}

export interface YearLevelMilestone {
  total_required_credits: number;
  earned_credits: number;
  completion_pct: number;
  is_completed: boolean;
}

export interface DegreeAuditResponse {
  student_id: string;
  graduation_summary: GraduationSummary;
  major_core_progress: {
    total_core_courses: number;
    passed_core_courses: number;
    completion_pct: number;
  };
  year_level_breakdown: Record<string, YearLevelMilestone>;
}

export interface TreeNode {
  course_id: string;
  course_name: string;
  credits: number;
  year_level: number;
  status: "Completed" | "In-Progress" | "Unlocked" | "Locked";
  grade?: string;
  prerequisite_id?: string;
}

export interface PrerequisiteTreeResponse {
  student_id: string;
  nodes: TreeNode[];
}

export interface TimetableSession {
  session_id: string;
  session_type: "Lecture" | "Lab" | "Tutorial";
  course_id: string;
  course_name: string;
  credits: number;
  year_level: number;
  department_name?: string;
  section_id: string;
  section_number?: number;
  room_id?: string;
  room_number: string;
  building: string;
  slot_id?: string;
  day_of_week: string;
  start_time: string;
  end_time: string;
  period: number;
  instructor_name: string;
  match_percentage?: number;
}

export interface GroupTimetableResponse {
  status: string;
  timetable_id: string;
  department: { department_id: string; department_name: string };
  year_level: number;
  group_id: number;
  filters: {
    departments: Department[];
    available_years: number[];
    available_groups: number[];
  };
  summary: {
    total_sessions: number;
    unique_courses: number;
    total_credits: number;
    active_days: number;
    lectures: number;
    labs: number;
  };
  sessions: TimetableSession[];
}

export interface RecommendedScheduleOption {
  option_id: string;
  title: string;
  subtitle: string;
  badge_style: string;
  is_active_schedule: boolean;
  total_courses: number;
  total_credits: number;
  active_days: number;
  average_match_score: number;
  badges: Array<{
    icon: string;
    title: string;
    text: string;
    color: string;
  }>;
  section_ids: string[];
  sessions: TimetableSession[];
}

export interface RecommendedSpecializedResponse {
  status: string;
  student_profile: Student;
  specialization_track: string;
  recommended_options: RecommendedScheduleOption[];
}

export interface PersonalTimetableResponse {
  status: string;
  student: Student;
  summary: {
    total_registered_courses: number;
    total_credits: number;
    days_per_week: number;
    lectures: number;
    labs: number;
  };
  sessions: TimetableSession[];
}

export interface ChatMessage {
  sender: "user" | "ai";
  text: string;
  source?: string;
  similarity?: number | null;
  category?: string;
}

export interface SimulatedCourse {
  course_name: string;
  credits: number;
  expected_grade: string;
}
