import React, { useState } from "react";
import { 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Plus, 
  Check, 
  BookOpen, 
  Layers, 
  Info,
  Calendar,
  ArrowRight
} from "lucide-react";
import TimetableModuleView from "./TimetableModuleView";

export default function RecommenderView({ recommendations, student }) {
  const [section, setSection] = useState("recommendations"); // "recommendations" | "timetable"
  const [filter, setFilter] = useState("all");
  const [plannedCourses, setPlannedCourses] = useState(new Set());

  if (!recommendations && section === "recommendations") {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px", color: "#64748b" }}>
        Loading course recommendations...
      </div>
    );
  }

  const { top_recommendations = [], total_eligible_courses = 0, algorithm_notes = "" } = recommendations || {};

  const togglePlanCourse = (courseId) => {
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

  const filtered = top_recommendations.filter((c) => {
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
          <span>Timetable Optimizer</span>
        </button>
      </div>

      {/* If Timetable Section is Active */}
      {section === "timetable" ? (
        <TimetableModuleView student={student} />
      ) : (
        /* If Course Recommendations Section is Active */
        <>
          {/* Header Banner */}
          <div className="sis-card" style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)", color: "#ffffff" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Sparkles size={20} />
              </div>
              <div>
                <div style={{ fontSize: "15px", fontWeight: "800" }}>AI Course Recommender</div>
                <div style={{ fontSize: "11px", color: "#bfdbfe" }}>
                  {total_eligible_courses} verified eligible courses matched for {student?.department_name}
                </div>
              </div>
            </div>

            {/* Filter Pills */}
            <div style={{ display: "flex", gap: "6px", marginTop: "10px" }}>
              <button
                onClick={() => setFilter("all")}
                style={{
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: "600",
                  background: filter === "all" ? "#ffffff" : "rgba(255,255,255,0.15)",
                  color: filter === "all" ? "#1d4ed8" : "#ffffff",
                  cursor: "pointer"
                }}
              >
                All Matches ({top_recommendations.length})
              </button>
              <button
                onClick={() => setFilter("core")}
                style={{
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: "600",
                  background: filter === "core" ? "#ffffff" : "rgba(255,255,255,0.15)",
                  color: filter === "core" ? "#1d4ed8" : "#ffffff",
                  cursor: "pointer"
                }}
              >
                Major Core
              </button>
              <button
                onClick={() => setFilter("elective")}
                style={{
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: "600",
                  background: filter === "elective" ? "#ffffff" : "rgba(255,255,255,0.15)",
                  color: filter === "elective" ? "#1d4ed8" : "#ffffff",
                  cursor: "pointer"
                }}
              >
                Electives
              </button>
            </div>
          </div>

          {/* Planned Summary (if any planned) */}
          {plannedCourses.size > 0 && (
            <div style={{
              background: "#ecfdf5",
              border: "1px solid #a7f3d0",
              borderRadius: "12px",
              padding: "10px 14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#065f46", fontWeight: "700" }}>
                <CheckCircle2 size={16} /> {plannedCourses.size} courses added to your proposed plan
              </div>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <button 
                  onClick={() => setSection("timetable")}
                  style={{
                    fontSize: "11px",
                    color: "#ffffff",
                    background: "#059669",
                    fontWeight: "700",
                    border: "none",
                    borderRadius: "6px",
                    padding: "4px 8px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px"
                  }}
                >
                  <span>View Timetable</span>
                  <ArrowRight size={11} />
                </button>
                <button 
                  style={{ fontSize: "11px", color: "#047857", fontWeight: "700", textDecoration: "underline", background: "none", border: "none", cursor: "pointer" }}
                  onClick={() => setPlannedCourses(new Set())}
                >
                  Clear
                </button>
              </div>
            </div>
          )}

          {/* Recommended Courses List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {filtered.map((course) => {
              const isPlanned = plannedCourses.has(course.course_id);
              return (
                <div key={course.course_id} className="course-rec-card">
                  <div className="rec-score-meter">
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span className="badge badge-blue">Year {course.year_level}</span>
                      <span className="badge badge-purple">{course.credits} Credits</span>
                      {course.tags?.map((t) => (
                        <span key={t} className="badge badge-emerald">{t}</span>
                      ))}
                    </div>
                    <div className="rec-score-pill">
                      <Sparkles size={12} /> {course.match_percentage}% Match
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "800", color: "#0f172a" }}>
                      {course.course_id}: {course.course_name}
                    </div>
                    <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                      {course.department_name}
                    </div>
                  </div>

                  <div style={{ fontSize: "12px", color: "#475569", lineHeight: "1.35" }}>
                    {course.description}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", color: "#64748b" }}>
                    <Layers size={13} />
                    <span>
                      <strong>Prerequisite:</strong> {course.prerequisite === "None" ? "None (Open Enrollment)" : `Requires ${course.prerequisite} (Passed)`}
                    </span>
                  </div>

                  {/* Explainability Box */}
                  <div className="rec-reason-box">
                    <strong>Why Recommended:</strong> {course.reasons?.join("; ") || "Direct fit for curriculum track."}
                  </div>

                  {/* Schedule Add Button */}
                  <button
                    onClick={() => togglePlanCourse(course.course_id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      padding: "8px 12px",
                      borderRadius: "10px",
                      fontSize: "12px",
                      fontWeight: "700",
                      background: isPlanned ? "#10b981" : "#eff6ff",
                      color: isPlanned ? "#ffffff" : "#2563eb",
                      border: isPlanned ? "none" : "1px solid #bfdbfe",
                      transition: "all 0.2s",
                      cursor: "pointer"
                    }}
                  >
                    {isPlanned ? (
                      <>
                        <Check size={14} /> Course Added to Proposed Schedule
                      </>
                    ) : (
                      <>
                        <Plus size={14} /> Add to Proposed Schedule
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Algorithm Transparency Footer */}
          <div style={{
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            padding: "10px 12px",
            fontSize: "11px",
            color: "#64748b",
            display: "flex",
            gap: "8px"
          }}>
            <Info size={16} color="#3b82f6" style={{ flexShrink: 0, marginTop: "1px" }} />
            <span>{algorithm_notes}</span>
          </div>
        </>
      )}
    </div>
  );
}
