import { academicEngine } from "./services/academicEngine";
import { SimulatedCourse } from "./types";

export async function fetchSystemStats() {
  return academicEngine.getSystemStats();
}

export async function fetchStudents(search: string = "", departmentId: string = "", limit: number = 40) {
  return academicEngine.listStudents(search, departmentId, limit);
}

export async function fetchStudentDetail(studentId: string) {
  return academicEngine.getStudentDetail(studentId);
}

export async function fetchRecommendations(studentId: string, topN: number = 6) {
  return academicEngine.getRecommendations(studentId, topN);
}

export async function fetchAnalytics(studentId: string) {
  return academicEngine.getAnalytics(studentId);
}

export async function fetchDegreeAudit(studentId: string) {
  return academicEngine.getDegreeAudit(studentId);
}

export async function fetchPrerequisiteTree(studentId: string) {
  return academicEngine.getPrerequisiteTree(studentId);
}

export async function sendChatMessage(
  prompt: string, 
  studentId?: string, 
  mbti?: string, 
  learningStyle?: string, 
  temperature: number = 0.4
) {
  return academicEngine.queryChatbot(prompt, studentId, mbti, learningStyle, temperature);
}

export async function simulateGPA(studentId: string, simulatedCourses: SimulatedCourse[]) {
  return academicEngine.simulateGPA(studentId, simulatedCourses);
}

export async function fetchGroupTimetable(departmentId: string = "10", yearLevel: number = 1, groupId: number = 1) {
  return academicEngine.getGroupTimetable(departmentId, yearLevel, groupId);
}

export async function fetchRecommendedSpecializedTimetable(studentId: string = "FCDS20260001") {
  return academicEngine.getRecommendedSpecializedTimetable(studentId);
}

export async function fetchPersonalTimetable(studentId: string = "FCDS20260001") {
  return academicEngine.getPersonalTimetable(studentId);
}

export async function applyRecommendedTimetable(studentId: string, optionId: string, sectionIds: string[]) {
  return academicEngine.applyRecommendedTimetable(studentId, optionId, sectionIds);
}
