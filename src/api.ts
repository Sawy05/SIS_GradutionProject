import { academicEngine } from "./services/academicEngine";
import { SimulatedCourse } from "./types";

export async function fetchSystemStats() {
  return academicEngine.getSystemStats();
}

export async function fetchStudents(
  search: string = "", 
  departmentId: string = "", 
  limit: number = 80,
  yearLevel?: number | "all",
  standingFilter?: string
) {
  return academicEngine.listStudents(search, departmentId, limit, yearLevel, standingFilter);
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

export async function fetchStudentAcademicContext(studentId: string) {
  return academicEngine.getStudentAcademicContext(studentId);
}

export async function sendChatMessage(
  prompt: string, 
  studentId?: string, 
  mbti?: string, 
  learningStyle?: string, 
  temperature: number = 0.4,
  mode: string = "concept",
  history: Array<{ sender: "user" | "ai"; text: string }> = []
) {
  const student = studentId ? academicEngine.getStudentDetail(studentId) : null;
  const academicContext = studentId ? academicEngine.getStudentAcademicContext(studentId) : null;

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt,
        studentId,
        student,
        academicContext,
        mbti,
        learningStyle,
        mode,
        history,
        temperature
      })
    });

    if (res.ok) {
      const data = await res.json();
      return {
        answer: data.answer,
        source: data.source || "Gemini 3.8 Flash (AI Tutor Engine)",
        similarity_score: data.similarity_score || 0.99,
        category: data.category || "Academic Tutoring",
        suggested_questions: data.suggested_questions || []
      };
    }
  } catch (err) {
    console.warn("Server /api/chat unavailable, using local academic engine:", err);
  }

  // Graceful fallback to local academic knowledge base
  const fallback = academicEngine.queryChatbot(prompt, studentId, mbti, learningStyle, temperature);
  return {
    ...fallback,
    suggested_questions: [
      "Can you explain the time complexity?",
      "How does this relate to my program requirements?",
      "Test my understanding with a practice question."
    ]
  };
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
