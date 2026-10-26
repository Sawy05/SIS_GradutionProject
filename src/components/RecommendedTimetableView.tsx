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
  Check, 
  ArrowRight,
  AlertCircle
} from "lucide-react";
import { Student, RecommendedSpecializedResponse, RecommendedScheduleOption, TimetableSession } from "../types";

interface RecommendedTimetableViewProps {
  student: Student | null;
  onScheduleApplied: () => void;
}

export default function RecommendedTimetableView({ student, onScheduleApplied }: RecommendedTimetableViewProps) {
  const [data, setData] = useState<RecommendedSpecializedResponse | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState("opt-morning-track");
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [applyResult, setApplyResult] = useState<string | null>(null);

  const studentId = student?.student_id || "FCDS20260001";

  useEffect(() => {
    loadRecommended(studentId);
  }, [studentId]);

  const loadRecommended = async (id: string) => {
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

  const handleApply = async (option: RecommendedScheduleOption) => {
    setApplying(true);
    setApplyResult(null);
    try {
      const res = await applyRecommendedTimetable(
        studentId, 
        option.option_id, 
        option.section_ids
      );
      setApplyResult(res.message);
      if (onScheduleApplied) {
        setTimeout(() => {
          onScheduleApplied();
        }, 1200);
      }
    } catch (err: any) {
      setApplyResult(`Failed to apply: ${err.message}`);
    } finally {
      setApplying(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px", color: "#64748b" }}>
        Analyzing schedule matrices & optimizing conflict-free tracks...
      </div>
    );
  }

  const options = data?.recommended_options || [];
  const activeOption = options.find((o) => o.option_id === selectedOptionId) || options[0];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* AI Recommendation Header Card */}
      <div className="sis-card" style={{
        background: "linear-gradient(135deg, #1e1b4b, #312e81, #4338ca)",
        color: "#ffffff",
        padding: "16px"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#a5b4fc", textTransform: "uppercase", fontWeight: "700" }}>
              <Sparkles size={13} />
              <span>AI Timetable Optimizer</span>
            </div>
            <div style={{ fontSize: "18px", fontWeight: "800", marginTop: "4px" }}>
              Tailored Specialized Tracks
            </div>
            <div style={{ fontSize: "12px", color: "#c7d2fe", marginTop: "2px" }}>
              Designed for {data?.student_profile?.student_name} ({data?.student_profile?.department_name})
            </div>
          </div>
        </div>

        {/* Feature Badges */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "8px",
          marginTop: "12px",
          paddingTop: "10px",
          borderTop: "1px solid rgba(255, 255, 255, 0.15)",
          fontSize: "11px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#c7d2fe" }}>
            <Zap size={14} color="#34d399" />
            <span>Gap-Optimized Periods</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#c7d2fe" }}>
            <Scale size={14} color="#60a5fa" />
            <span>Balanced Daily Workload</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#c7d2fe" }}>
            <Target size={14} color="#c084fc" />
            <span>Major Syllabus Alignment</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#c7d2fe" }}>
            <ShieldCheck size={14} color="#34d399" />
            <span>100% Collision-Free</span>
          </div>
        </div>
      </div>

      {/* Option Selector Pills */}
      <div style={{ display: "flex", gap: "8px" }}>
        {options.map((opt) => {
          const isSelected = selectedOptionId === opt.option_id;
          return (
            <button
              key={opt.option_id}
              onClick={() => setSelectedOptionId(opt.option_id)}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "12px",
                border: isSelected ? "2px solid #4338ca" : "1px solid #e2e8f0",
                background: isSelected ? "#eef2ff" : "#ffffff",
                textAlign: "left",
                cursor: "pointer",
                transition: "all 0.15s"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", color: isSelected ? "#3730a3" : "#0f172a" }}>
                  {opt.title.includes("Morning") ? "Morning Focus" : "Balanced Mid-Day"}
                </span>
                <span style={{
                  fontSize: "10px",
                  fontWeight: "800",
                  padding: "2px 6px",
                  borderRadius: "10px",
                  background: isSelected ? "#4338ca" : "#f1f5f9",
                  color: isSelected ? "#ffffff" : "#64748b"
                }}>
                  {opt.average_match_score}% Fit
                </span>
              </div>
              <div style={{ fontSize: "10px", color: "#64748b", marginTop: "4px" }}>
                {opt.total_courses} courses • {opt.total_credits} cr • {opt.active_days} days
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Option Detail & Sessions */}
      {activeOption && (
        <div className="sis-card" style={{ padding: "14px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: "14px", fontWeight: "800", color: "#0f172a" }}>
                {activeOption.title}
              </div>
              <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                {activeOption.subtitle}
              </div>
            </div>

            <button
              onClick={() => handleApply(activeOption)}
              disabled={applying}
              style={{
                background: "linear-gradient(135deg, #10b981, #059669)",
                color: "#ffffff",
                border: "none",
                borderRadius: "10px",
                padding: "8px 14px",
                fontSize: "11px",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                boxShadow: "0 2px 6px rgba(16,185,129,0.3)"
              }}
            >
              <Check size={13} />
              <span>{applying ? "Applying..." : "Enroll This Schedule"}</span>
            </button>
          </div>

          {applyResult && (
            <div style={{
              background: "#ecfdf5",
              border: "1px solid #a7f3d0",
              color: "#065f46",
              borderRadius: "8px",
              padding: "8px 10px",
              fontSize: "11px",
              fontWeight: "600"
            }}>
              {applyResult}
            </div>
          )}

          {/* Section Sessions List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
            {activeOption.sessions.map((s: TimetableSession) => (
              <div
                key={s.session_id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px 10px",
                  borderRadius: "8px",
                  background: "#f8fafc",
                  border: "1px solid #f1f5f9"
                }}
              >
                <div>
                  <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", color: "#0f172a" }}>{s.course_id}</span>
                    <span className="badge badge-blue" style={{ fontSize: "9px", padding: "1px 5px" }}>{s.session_type}</span>
                    <span style={{ fontSize: "10px", color: "#64748b" }}>Sec {s.section_number}</span>
                  </div>
                  <div style={{ fontSize: "11px", color: "#334155", fontWeight: "600", marginTop: "2px" }}>
                    {s.course_name}
                  </div>
                  <div style={{ fontSize: "10px", color: "#64748b", marginTop: "2px" }}>
                    {s.day_of_week} • {s.start_time} - {s.end_time} • {s.room_number}
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <span style={{
                    fontSize: "11px",
                    fontWeight: "800",
                    color: "#059669",
                    background: "#ecfdf5",
                    padding: "2px 6px",
                    borderRadius: "6px"
                  }}>
                    {s.match_percentage}% Match
                  </span>
                  <div style={{ fontSize: "10px", color: "#64748b", marginTop: "4px" }}>
                    {s.instructor_name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
