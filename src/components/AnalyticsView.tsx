import React from "react";
import { 
  BarChart2, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  BookMarked, 
  ShieldAlert 
} from "lucide-react";
import { AnalyticsResponse } from "../types";

interface AnalyticsViewProps {
  analytics: AnalyticsResponse | null;
}

export default function AnalyticsView({ analytics }: AnalyticsViewProps) {
  if (!analytics) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px", color: "#64748b" }}>
        Loading academic analytics...
      </div>
    );
  }

  const {
    academic_metrics,
    semester_trends = [],
    grade_distribution = {},
    activity_metrics,
    risk_assessment
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

        {risk_assessment?.flags && risk_assessment.flags.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {risk_assessment.flags.map((flag, idx) => (
              <div key={idx} style={{
                display: "flex",
                gap: "8px",
                fontSize: "12px",
                color: risk_assessment.risk_color === "red" ? "#9f1239" : "#334155",
                background: risk_assessment.risk_color === "red" ? "#fff1f2" : "#f8fafc",
                padding: "8px 10px",
                borderRadius: "8px"
              }}>
                <span>•</span>
                <span>{flag}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Semester GPA Trajectory Trend */}
      <div className="sis-card">
        <div className="sis-card-header">
          <span className="sis-card-title">
            <TrendingUp size={16} color="#2563eb" /> Semester GPA Trajectory
          </span>
          <span className="badge badge-blue">Historical</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {semester_trends.map((st, idx) => {
            const barPct = Math.round((Number(st.semester_gpa) / 4.0) * 100);
            return (
              <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                  <span style={{ fontWeight: "600", color: "#334155" }}>{st.semester}</span>
                  <span style={{ fontWeight: "700", color: "#2563eb" }}>{Number(st.semester_gpa).toFixed(2)} / 4.00</span>
                </div>
                <div style={{
                  width: "100%",
                  height: "8px",
                  background: "#f1f5f9",
                  borderRadius: "999px",
                  overflow: "hidden"
                }}>
                  <div style={{
                    width: `${barPct}%`,
                    height: "100%",
                    background: "linear-gradient(90deg, #3b82f6, #2563eb)",
                    borderRadius: "999px"
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grade Distribution Breakdown */}
      <div className="sis-card">
        <div className="sis-card-header">
          <span className="sis-card-title">
            <BarChart2 size={16} color="#7c3aed" /> Grade Distribution Breakdown
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", height: "110px", gap: "6px", paddingTop: "20px" }}>
          {Object.entries(grade_distribution).map(([letter, count]) => {
            const heightPct = Math.round((Number(count) / maxGradeCount) * 100);
            const isF = letter === "F";
            const isA = letter.startsWith("A");
            return (
              <div key={letter} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span style={{ fontSize: "10px", fontWeight: "700", color: isF ? "#e11d48" : "#64748b" }}>
                  {count}
                </span>
                <div style={{
                  width: "100%",
                  height: `${Math.max(6, heightPct)}%`,
                  background: isF ? "#f43f5e" : isA ? "#10b981" : "#3b82f6",
                  borderRadius: "4px 4px 0 0",
                  transition: "height 0.3s ease"
                }} />
                <span style={{ fontSize: "11px", fontWeight: "600", color: "#1e293b" }}>{letter}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Engagement & LMS Activity Metrics */}
      <div className="sis-card">
        <div className="sis-card-header">
          <span className="sis-card-title">
            <Clock size={16} color="#059669" /> Engagement & LMS Metrics
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
          <div style={{ background: "#f8fafc", padding: "10px", borderRadius: "10px" }}>
            <div style={{ fontSize: "11px", color: "#64748b" }}>Avg Attendance</div>
            <div style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a" }}>
              {activity_metrics?.avg_attendance_pct}%
            </div>
          </div>
          <div style={{ background: "#f8fafc", padding: "10px", borderRadius: "10px" }}>
            <div style={{ fontSize: "11px", color: "#64748b" }}>Weekly Study Time</div>
            <div style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a" }}>
              {activity_metrics?.avg_study_hours_per_week} hrs
            </div>
          </div>
          <div style={{ background: "#f8fafc", padding: "10px", borderRadius: "10px" }}>
            <div style={{ fontSize: "11px", color: "#64748b" }}>Weekly LMS Logins</div>
            <div style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a" }}>
              {activity_metrics?.lms_weekly_logins}
            </div>
          </div>
          <div style={{ background: "#f8fafc", padding: "10px", borderRadius: "10px" }}>
            <div style={{ fontSize: "11px", color: "#64748b" }}>Preferred Window</div>
            <div style={{ fontSize: "13px", fontWeight: "700", color: "#2563eb", marginTop: "4px" }}>
              {activity_metrics?.preferred_study_period}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
