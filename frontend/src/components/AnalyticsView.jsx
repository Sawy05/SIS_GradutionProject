import React from "react";
import { 
  BarChart2, 
  TrendingUp, 
  AlertTriangle, 
  Clock, 
  CheckCircle, 
  BookMarked, 
  ShieldAlert 
} from "lucide-react";

export default function AnalyticsView({ analytics }) {
  if (!analytics) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px", color: "#64748b" }}>
        Loading academic analytics...
      </div>
    );
  }

  const {
    student_profile,
    academic_metrics,
    semester_trends = [],
    grade_distribution = {},
    activity_metrics = {},
    risk_assessment = {},
    top_achievements = [],
    areas_needing_improvement = []
  } = analytics;

  const maxGradeCount = Math.max(1, ...Object.values(grade_distribution));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Analytics Summary Banner */}
      <div className="sis-card" style={{ background: "linear-gradient(135deg, #1e293b, #0f172a)", color: "#ffffff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase", fontWeight: "700" }}>
              Cumulative Performance
            </div>
            <div style={{ fontSize: "28px", fontWeight: "900", color: "#60a5fa" }}>
              {academic_metrics?.cumulative_gpa?.toFixed(2) || "3.00"}
              <span style={{ fontSize: "14px", color: "#94a3b8", fontWeight: "500" }}> / 4.00</span>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "12px", color: "#cbd5e1" }}>Completion Rate</div>
            <div style={{ fontSize: "18px", fontWeight: "800", color: "#34d399" }}>
              {academic_metrics?.completion_rate_pct || 90}%
            </div>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
          marginTop: "8px",
          paddingTop: "12px",
          borderTop: "1px solid #334155",
          fontSize: "11px"
        }}>
          <div>
            <span style={{ color: "#94a3b8" }}>Total Attempted:</span>
            <div style={{ fontWeight: "700", color: "#f8fafc" }}>{academic_metrics?.total_credits_attempted} hrs</div>
          </div>
          <div>
            <span style={{ color: "#94a3b8" }}>Earned Credits:</span>
            <div style={{ fontWeight: "700", color: "#34d399" }}>{academic_metrics?.total_credits_passed} hrs</div>
          </div>
          <div>
            <span style={{ color: "#94a3b8" }}>Numeric Avg:</span>
            <div style={{ fontWeight: "700", color: "#f8fafc" }}>{academic_metrics?.overall_numeric_avg}%</div>
          </div>
        </div>
      </div>

      {/* Early-Warning Risk Assessment */}
      <div className="sis-card">
        <div className="sis-card-header">
          <span className="sis-card-title">
            <ShieldAlert size={16} color={risk_assessment?.risk_color === "red" ? "#e11d48" : "#2563eb"} />
            Early Warning & Risk Assessment
          </span>
          <span className={`badge ${
            risk_assessment?.risk_color === "red" ? "badge-rose" :
            risk_assessment?.risk_color === "yellow" ? "badge-amber" : "badge-emerald"
          }`}>
            {risk_assessment?.risk_level || "Good Standing"}
          </span>
        </div>

        {risk_assessment?.flags?.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {risk_assessment.flags.map((flag, idx) => (
              <div key={idx} style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                fontSize: "12px",
                color: "#be123c",
                background: "#fff1f2",
                padding: "6px 10px",
                borderRadius: "8px"
              }}>
                <AlertTriangle size={14} />
                <span>{flag}</span>
              </div>
            ))}
          </div>
        )}

        <div>
          <div style={{ fontSize: "11px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", marginBottom: "6px" }}>
            Advisor Action Plan:
          </div>
          <ul style={{ paddingLeft: "18px", fontSize: "12px", color: "#334155", lineHeight: "1.4" }}>
            {risk_assessment?.recommended_interventions?.map((rec, idx) => (
              <li key={idx} style={{ marginBottom: "4px" }}>{rec}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Semester GPA Progression Trend */}
      <div className="sis-card">
        <div className="sis-card-header">
          <span className="sis-card-title">
            <TrendingUp size={16} color="#2563eb" /> Semester GPA Trajectory
          </span>
        </div>

        {semester_trends.length === 0 ? (
          <div style={{ fontSize: "12px", color: "#94a3b8" }}>No historical semester trends recorded.</div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {semester_trends.map((sem, idx) => {
              const semGpa = Number(sem.semester_gpa || 0);
              const barWidth = Math.min(100, (semGpa / 4.0) * 100);
              return (
                <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "600" }}>
                    <span>{sem.semester}</span>
                    <span style={{ color: "#2563eb" }}>{semGpa.toFixed(2)} GPA ({sem.credits_passed} cr)</span>
                  </div>
                  <div style={{
                    width: "100%",
                    height: "8px",
                    background: "#f1f5f9",
                    borderRadius: "999px",
                    overflow: "hidden"
                  }}>
                    <div style={{
                      width: `${barWidth}%`,
                      height: "100%",
                      background: semGpa >= 3.0 ? "#2563eb" : (semGpa >= 2.0 ? "#f59e0b" : "#e11d48"),
                      borderRadius: "999px"
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Grade Distribution Histogram */}
      <div className="sis-card">
        <div className="sis-card-header">
          <span className="sis-card-title">
            <BarChart2 size={16} color="#7c3aed" /> Grade Distribution
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "110px", paddingTop: "20px" }}>
          {Object.entries(grade_distribution).map(([letter, count]) => {
            const heightPct = Math.round((count / maxGradeCount) * 80);
            return (
              <div key={letter} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span style={{ fontSize: "10px", fontWeight: "700", color: "#475569" }}>{count}</span>
                <div style={{
                  width: "100%",
                  height: `${Math.max(6, heightPct)}%`,
                  background: letter.startsWith("A") ? "#3b82f6" : letter.startsWith("B") ? "#8b5cf6" : letter.startsWith("C") ? "#f59e0b" : "#f43f5e",
                  borderRadius: "4px 4px 0 0"
                }} />
                <span style={{ fontSize: "10px", fontWeight: "600", color: "#64748b" }}>{letter}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Engagement & Activity Metrics */}
      <div className="sis-card">
        <div className="sis-card-header">
          <span className="sis-card-title">
            <Clock size={16} color="#059669" /> Learning & Engagement Habits
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
          <div style={{ background: "#f8fafc", padding: "10px", borderRadius: "10px" }}>
            <div style={{ fontSize: "11px", color: "#64748b" }}>Attendance Rate</div>
            <div style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a", marginTop: "2px" }}>
              {activity_metrics?.average_attendance_pct}%
            </div>
          </div>
          <div style={{ background: "#f8fafc", padding: "10px", borderRadius: "10px" }}>
            <div style={{ fontSize: "11px", color: "#64748b" }}>Study Hours / Week</div>
            <div style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a", marginTop: "2px" }}>
              {activity_metrics?.study_hours_per_week} hrs
            </div>
          </div>
          <div style={{ background: "#f8fafc", padding: "10px", borderRadius: "10px" }}>
            <div style={{ fontSize: "11px", color: "#64748b" }}>LMS Logins / Week</div>
            <div style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a", marginTop: "2px" }}>
              {activity_metrics?.lms_logins_per_week} logins
            </div>
          </div>
          <div style={{ background: "#f8fafc", padding: "10px", borderRadius: "10px" }}>
            <div style={{ fontSize: "11px", color: "#64748b" }}>Peak Study Time</div>
            <div style={{ fontSize: "14px", fontWeight: "800", color: "#2563eb", marginTop: "2px" }}>
              {activity_metrics?.preferred_study_period}
            </div>
          </div>
        </div>
      </div>

      {/* Top Achievements & Repeat Needs */}
      <div className="sis-card">
        <div className="sis-card-header">
          <span className="sis-card-title">
            <BookMarked size={16} color="#2563eb" /> Course Mastery Spotlight
          </span>
        </div>

        <div>
          <div style={{ fontSize: "11px", fontWeight: "700", color: "#059669", textTransform: "uppercase", marginBottom: "4px" }}>
            Top Performing Subjects:
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {top_achievements.map((c, idx) => (
              <div key={idx} style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", background: "#f8fafc", padding: "6px 8px", borderRadius: "6px" }}>
                <span><strong>{c.course_id}</strong> - {c.course_name}</span>
                <span style={{ fontWeight: "700", color: "#059669" }}>{c.letter} ({c.score}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
