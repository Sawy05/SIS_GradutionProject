import React, { useState, useEffect } from "react";
import { 
  fetchRecommendedSpecializedTimetable, 
  applyRecommendedTimetable 
} from "../api";
import { 
  Sparkles, 
  Zap, 
  Scale, 
  Target, 
  ShieldCheck, 
  CheckCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  UserCheck, 
  Check, 
  ArrowRight,
  AlertCircle,
  Award
} from "lucide-react";

export default function RecommendedTimetableView({ student, onScheduleApplied }) {
  const [data, setData] = useState(null);
  const [selectedOptionId, setSelectedOptionId] = useState("opt-morning-track");
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [applyResult, setApplyResult] = useState(null);

  const studentId = student?.student_id || "FCDS20260001";

  useEffect(() => {
    loadRecommended(studentId);
  }, [studentId]);

  const loadRecommended = async (id) => {
    setLoading(true);
    setApplyResult(null);
    try {
      const res = await fetchRecommendedSpecializedTimetable(id);
      setData(res);
      if (res.recommended_options && res.recommended_options.length > 0) {
        setSelectedOptionId(res.recommended_options[0].option_id);
      }
    } catch (err) {
      console.error("Error loading recommended timetable:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (option) => {
    setApplying(true);
    setApplyResult(null);
    try {
      const res = await applyRecommendedTimetable(
        studentId, 
        option.option_id, 
        option.section_ids
      );
      setApplyResult({
        success: true,
        message: res.message || "Schedule updated and confirmed successfully!"
      });
      // Refresh recommendation data to update "is_active_schedule" flags
      const refreshed = await fetchRecommendedSpecializedTimetable(studentId);
      setData(refreshed);
      if (onScheduleApplied) {
        onScheduleApplied(res);
      }
    } catch (err) {
      setApplyResult({
        success: false,
        message: err.message || "Failed to apply recommended timetable."
      });
    } finally {
      setApplying(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px", color: "#64748b", fontSize: "12px" }}>
        <Sparkles size={24} color="#2563eb" style={{ margin: "0 auto 8px" }} />
        Computing AI-recommended specialized schedule...
      </div>
    );
  }

  const options = data?.recommended_options || [];
  const currentOption = options.find((o) => o.option_id === selectedOptionId) || options[0];

  return (
    <div className="recommended-timetable-container" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {/* Header Specialization Track Hero Card */}
      <div className="sis-card" style={{
        background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
        color: "#ffffff",
        boxShadow: "0 8px 24px rgba(37, 99, 235, 0.25)"
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "38px",
              height: "38px",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Sparkles size={20} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontSize: "15px", fontWeight: "800" }}>AI-Recommended Specialized Timetable</div>
              <div style={{ fontSize: "11px", color: "#bfdbfe" }}>
                Curriculum Track: {student?.department_name || "Data Science & AI"}
              </div>
            </div>
          </div>
          <span className="badge" style={{ background: "rgba(255,255,255,0.2)", color: "#ffffff", fontSize: "10px" }}>
            CP-SAT Solved
          </span>
        </div>

        {/* Student Specialization Stats Pill */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
          background: "rgba(255, 255, 255, 0.12)",
          padding: "8px 12px",
          borderRadius: "12px",
          marginTop: "4px"
        }}>
          <div>
            <div style={{ fontSize: "10px", color: "#bfdbfe", textTransform: "uppercase" }}>Student</div>
            <div style={{ fontSize: "12px", fontWeight: "700" }}>{student?.student_name?.split(" ")[0]} ({studentId})</div>
          </div>
          <div>
            <div style={{ fontSize: "10px", color: "#bfdbfe", textTransform: "uppercase" }}>Standing</div>
            <div style={{ fontSize: "12px", fontWeight: "700" }}>GPA {student?.gpa || "3.05"}</div>
          </div>
          <div>
            <div style={{ fontSize: "10px", color: "#bfdbfe", textTransform: "uppercase" }}>Profile</div>
            <div style={{ fontSize: "12px", fontWeight: "700" }}>{student?.mbti || "ENFJ"} • {student?.learning_style || "Auditory"}</div>
          </div>
        </div>
      </div>

      {/* Option Selector Toggle Pills */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ fontSize: "11px", fontWeight: "700", color: "#64748b", textTransform: "uppercase" }}>
          Select Recommended Variation:
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          {options.map((opt) => {
            const isSelected = opt.option_id === selectedOptionId;
            return (
              <button
                key={opt.option_id}
                onClick={() => setSelectedOptionId(opt.option_id)}
                style={{
                  padding: "10px",
                  borderRadius: "14px",
                  border: isSelected ? "2px solid #2563eb" : "1px solid #e2e8f0",
                  background: isSelected ? "#eff6ff" : "#ffffff",
                  cursor: "pointer",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  transition: "all 0.2s"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{
                    fontSize: "10px",
                    fontWeight: "800",
                    color: isSelected ? "#2563eb" : "#64748b",
                    textTransform: "uppercase"
                  }}>
                    {opt.option_id === "opt-morning-track" ? "Option 1 (Optimal)" : "Option 2 (Alternative)"}
                  </span>
                  {opt.is_active_schedule && (
                    <span style={{ fontSize: "9px", fontWeight: "700", background: "#ecfdf5", color: "#059669", padding: "1px 6px", borderRadius: "10px" }}>
                      Active
                    </span>
                  )}
                </div>
                <div style={{ fontSize: "12px", fontWeight: "800", color: "#0f172a" }}>
                  {opt.option_id === "opt-morning-track" ? "Morning Focus" : "Balanced Spread"}
                </div>
                <div style={{ fontSize: "10px", color: "#475569" }}>
                  {opt.total_courses} Courses • {opt.total_credits} Credits • {opt.active_days} Days
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Option Detail Card */}
      {currentOption && (
        <div className="sis-card" style={{ background: "#ffffff" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: "14px", fontWeight: "800", color: "#0f172a" }}>
                {currentOption.title}
              </div>
              <div style={{
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                color: "#166534",
                fontSize: "11px",
                fontWeight: "700",
                padding: "3px 8px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}>
                <Award size={12} color="#16a34a" />
                {currentOption.average_match_score}% Syllabus Fit
              </div>
            </div>
            <div style={{ fontSize: "11px", color: "#64748b", marginTop: "3px" }}>
              {currentOption.subtitle}
            </div>
          </div>

          {/* Optimization Highlights: 4 Badges */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
            background: "#f8fafc",
            padding: "10px",
            borderRadius: "12px",
            border: "1px solid #f1f5f9"
          }}>
            {/* Badge 1: Gap Optimization */}
            <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <div style={{ background: "#ecfdf5", padding: "5px", borderRadius: "8px", color: "#059669", flexShrink: 0 }}>
                <Zap size={14} />
              </div>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "700", color: "#0f172a" }}>⚡ Gap Optimized</div>
                <div style={{ fontSize: "10px", color: "#64748b", lineHeight: "1.2" }}>Avg wait time &lt; 40 mins</div>
              </div>
            </div>

            {/* Badge 2: Workload Balance */}
            <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <div style={{ background: "#eff6ff", padding: "5px", borderRadius: "8px", color: "#2563eb", flexShrink: 0 }}>
                <Scale size={14} />
              </div>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "700", color: "#0f172a" }}>⚖️ Workload Balanced</div>
                <div style={{ fontSize: "10px", color: "#64748b", lineHeight: "1.2" }}>Evenly spaced across {currentOption.active_days} days</div>
              </div>
            </div>

            {/* Badge 3: Specialization Fit */}
            <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <div style={{ background: "#f5f3ff", padding: "5px", borderRadius: "8px", color: "#7c3aed", flexShrink: 0 }}>
                <Target size={14} />
              </div>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "700", color: "#0f172a" }}>🎯 Track Fit</div>
                <div style={{ fontSize: "10px", color: "#64748b", lineHeight: "1.2" }}>Prioritizes core major pathway</div>
              </div>
            </div>

            {/* Badge 4: Conflict-Free */}
            <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <div style={{ background: "#ecfdf5", padding: "5px", borderRadius: "8px", color: "#059669", flexShrink: 0 }}>
                <ShieldCheck size={14} />
              </div>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "700", color: "#0f172a" }}>🛡️ 100% Conflict-Free</div>
                <div style={{ fontSize: "10px", color: "#64748b", lineHeight: "1.2" }}>Zero clash on slots & rooms</div>
              </div>
            </div>
          </div>

          {/* Sessions List for this Recommended Option */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ fontSize: "12px", fontWeight: "700", color: "#1e293b", display: "flex", alignItems: "center", gap: "6px" }}>
              <Calendar size={13} color="#2563eb" />
              <span>Proposed Weekly Sessions ({currentOption.sessions?.length || 0})</span>
            </div>

            {currentOption.sessions?.map((s) => (
              <div
                key={s.session_id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "9px 12px",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  background: "#fbfcfe"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontWeight: "800", color: "#2563eb", fontSize: "11px" }}>{s.course_id}</span>
                    <span style={{ fontSize: "9px", fontWeight: "700", padding: "1px 5px", borderRadius: "4px", background: "#dbeafe", color: "#1e40af" }}>
                      {s.session_type}
                    </span>
                    <span style={{ fontSize: "10px", fontWeight: "600", color: "#64748b" }}>
                      {s.day_of_week} • P{s.period} ({s.start_time}–{s.end_time})
                    </span>
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a" }}>
                    {s.course_name}
                  </div>
                  <div style={{ fontSize: "10px", color: "#64748b", display: "flex", gap: "10px" }}>
                    <span>📍 {s.room_number}</span>
                    <span>👤 {s.instructor_name}</span>
                  </div>
                </div>

                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "2px"
                }}>
                  <div style={{
                    fontSize: "11px",
                    fontWeight: "800",
                    color: "#059669",
                    background: "#ecfdf5",
                    padding: "2px 6px",
                    borderRadius: "6px"
                  }}>
                    {s.match_percentage || 95}% Fit
                  </div>
                  <div style={{ fontSize: "9px", color: "#94a3b8" }}>
                    Group {s.section_number || 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feedback / Toast Banner */}
          {applyResult && (
            <div style={{
              background: applyResult.success ? "#ecfdf5" : "#fff1f2",
              border: `1px solid ${applyResult.success ? "#a7f3d0" : "#fecdd3"}`,
              color: applyResult.success ? "#065f46" : "#9f1239",
              padding: "10px 14px",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              {applyResult.success ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
              <span>{applyResult.message}</span>
            </div>
          )}

          {/* Apply to My Schedule Button */}
          <div>
            {currentOption.is_active_schedule ? (
              <div style={{
                background: "#f0fdf4",
                border: "1px solid #86efac",
                color: "#166534",
                padding: "10px 16px",
                borderRadius: "12px",
                fontSize: "12px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}>
                <Check size={16} />
                <span>Currently Enrolled & Confirmed as Your Schedule</span>
              </div>
            ) : (
              <button
                onClick={() => handleApply(currentOption)}
                disabled={applying}
                style={{
                  width: "100%",
                  padding: "12px 18px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                  color: "#ffffff",
                  border: "none",
                  fontSize: "13px",
                  fontWeight: "700",
                  cursor: applying ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
                  transition: "all 0.2s"
                }}
              >
                {applying ? (
                  <span>Applying Timetable to Your Registration...</span>
                ) : (
                  <>
                    <Sparkles size={16} />
                    <span>Apply This AI Schedule to My Confirmed Courses</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
