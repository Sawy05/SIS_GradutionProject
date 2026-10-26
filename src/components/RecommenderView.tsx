import React, { useState } from "react";
import { 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Plus, 
  Check, 
  Calendar 
} from "lucide-react";
import TimetableModuleView from "./TimetableModuleView";
import { Student, RecommendationsResponse, Recommendation } from "../types";

interface RecommenderViewProps {
  recommendations: RecommendationsResponse | null;
  student: Student | null;
}

export default function RecommenderView({ recommendations, student }: RecommenderViewProps) {
  const [section, setSection] = useState<"recommendations" | "timetable">("recommendations");
  const [filter, setFilter] = useState("all");
  const [plannedCourses, setPlannedCourses] = useState<Set<string>>(new Set());

  if (!recommendations && section === "recommendations") {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px", color: "#64748b" }}>
        Loading course recommendations...
      </div>
    );
  }

  const { top_recommendations = [], total_eligible_courses = 0, algorithm_notes = "" } = recommendations || {};

  const togglePlanCourse = (courseId: string) => {
    setPlannedCourses((prev) => {
      const next = new Set(prev);
      if (next.has(courseId)) {
        next.delete(courseId);
      } else {
        next.add(courseId);
      }
      return next;
    });
  };

  const filtered = top_recommendations.filter((c: Recommendation) => {
    if (filter === "core") return c.tags?.includes("Major Core");
    if (filter === "elective") return c.tags?.includes("Elective");
    return true;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Primary Section Switcher: Recommendations vs Timetable */}
      <div style={{
        display: "flex",
        background: "#e2e8f0",
        padding: "4px",
        borderRadius: "14px",
        gap: "6px"
      }}>
        <button
          onClick={() => setSection("recommendations")}
          style={{
            flex: 1,
            padding: "8px 10px",
            borderRadius: "10px",
            border: "none",
            fontSize: "12px",
            fontWeight: "700",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            background: section === "recommendations" ? "#ffffff" : "transparent",
            color: section === "recommendations" ? "#2563eb" : "#475569",
            boxShadow: section === "recommendations" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
            transition: "all 0.15s"
          }}
        >
          <Compass size={14} />
          <span>Course Recommendations</span>
        </button>

        <button
          onClick={() => setSection("timetable")}
          style={{
            flex: 1,
            padding: "8px 10px",
            borderRadius: "10px",
            border: "none",
            fontSize: "12px",
            fontWeight: "700",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            background: section === "timetable" ? "#ffffff" : "transparent",
            color: section === "timetable" ? "#2563eb" : "#475569",
            boxShadow: section === "timetable" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
            transition: "all 0.15s"
          }}
        >
          <Calendar size={14} />
          <span>Timetable & Schedules</span>
        </button>
      </div>

      {/* Conditionally Render Timetable or Recommendations */}
      {section === "timetable" ? (
        <TimetableModuleView student={student} />
      ) : (
        <>
          {/* Recommender Banner */}
          <div className="sis-card" style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", color: "#ffffff" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: "11px", color: "#bfdbfe", textTransform: "uppercase", fontWeight: "700" }}>
                  Intelligent Course Recommender
                </div>
                <div style={{ fontSize: "20px", fontWeight: "800", marginTop: "2px" }}>
                  {total_eligible_courses} Eligible Courses Analyzed
                </div>
                <div style={{ fontSize: "12px", color: "#dbeafe", marginTop: "2px" }}>
                  Customized for {student?.department_name} (Year {student?.year_level})
                </div>
              </div>
              <span className="badge badge-emerald" style={{ background: "#ffffff", color: "#1d4ed8" }}>
                <Sparkles size={12} /> AI Scored
              </span>
            </div>

            <div style={{ fontSize: "11px", color: "#dbeafe", lineHeight: "1.4", marginTop: "6px" }}>
              {algorithm_notes}
            </div>
          </div>

          {/* Filter Pills */}
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", color: "#64748b" }}>Filter:</span>
            {["all", "core", "elective"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "4px 10px",
                  borderRadius: "14px",
                  fontSize: "11px",
                  fontWeight: "600",
                  background: filter === f ? "#2563eb" : "#e2e8f0",
                  color: filter === f ? "#ffffff" : "#475569",
                  textTransform: "capitalize"
                }}
              >
                {f === "all" ? "All Courses" : f}
              </button>
            ))}
          </div>

          {/* Recommended Course Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {filtered.map((course: Recommendation) => {
              const isPlanned = plannedCourses.has(course.course_id);
              return (
                <div key={course.course_id} className="course-rec-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ fontSize: "14px", fontWeight: "800", color: "#0f172a" }}>
                          {course.course_id}
                        </span>
                        <span className="badge badge-blue">Yr {course.year_level}</span>
                        <span style={{ fontSize: "11px", color: "#64748b" }}>{course.credits} cr</span>
                      </div>
                      <div style={{ fontSize: "13px", fontWeight: "700", color: "#1e293b", marginTop: "2px" }}>
                        {course.course_name}
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <div className="rec-score-pill">
                        <Sparkles size={11} /> {course.recommendation_score}%
                      </div>
                      <button
                        onClick={() => togglePlanCourse(course.course_id)}
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "8px",
                          background: isPlanned ? "#10b981" : "#f1f5f9",
                          color: isPlanned ? "#ffffff" : "#0f172a",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.2s"
                        }}
                        title={isPlanned ? "Planned in cart" : "Add to registration cart"}
                      >
                        {isPlanned ? <Check size={16} /> : <Plus size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Rationale Box */}
                  <div className="rec-reason-box">
                    {course.rationale}
                  </div>

                  {/* Meta Tags */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11px" }}>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      {course.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="badge badge-purple" style={{ fontSize: "10px" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span style={{ color: "#64748b" }}>
                      Prereq: <strong>{course.prerequisite_status}</strong>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
