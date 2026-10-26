import React from "react";
import { 
  Award, 
  TrendingUp, 
  AlertTriangle, 
  BookOpen, 
  Compass, 
  MessageSquare, 
  Calculator, 
  GitBranch, 
  CheckCircle2, 
  Clock 
} from "lucide-react";

export default function HomeView({ student, analytics, degreeAudit, onNavigate }) {
  if (!student) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px", color: "#64748b" }}>
        Loading student profile...
      </div>
    );
  }

  const gpa = Number(student.gpa || 0);
  const earnedCredits = degreeAudit?.graduation_summary?.earned_credits || 30;
  const totalCredits = degreeAudit?.graduation_summary?.total_required_credits || 120;
  const completionPct = Math.round((earnedCredits / totalCredits) * 100);

  const getStandingBadge = (standing) => {
    switch (standing) {
      case "Dean's List":
        return <span className="badge badge-emerald"><Award size={12} /> Dean's List</span>;
      case "Good Standing":
        return <span className="badge badge-blue"><CheckCircle2 size={12} /> Good Standing</span>;
      case "Academic Warning":
        return <span className="badge badge-amber"><AlertTriangle size={12} /> Warning</span>;
      case "Academic Probation":
        return <span className="badge badge-rose"><AlertTriangle size={12} /> Probation</span>;
      default:
        return <span className="badge badge-blue">{standing}</span>;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Hero Student Profile Card */}
      <div className="hero-profile-card">
        <div className="hero-top-row">
          <div>
            <div className="hero-name">{student.student_name}</div>
            <div className="hero-dept">{student.department_name} • Year {student.year_level}</div>
            <div style={{ fontSize: "11px", color: "#93c5fd", marginTop: "2px" }}>
              ID: {student.student_id} | {student.email}
            </div>
          </div>
          <div>{getStandingBadge(student.academic_standing)}</div>
        </div>

        {/* Quick Stats Grid */}
        <div className="hero-stats-grid">
          <div className="hero-stat-box">
            <span className="hero-stat-val">{gpa.toFixed(2)}</span>
            <span className="hero-stat-lbl">CGPA</span>
          </div>
          <div className="hero-stat-box">
            <span className="hero-stat-val">{earnedCredits}/{totalCredits}</span>
            <span className="hero-stat-lbl">Credits</span>
          </div>
          <div className="hero-stat-box">
            <span className="hero-stat-val">{student.mbti}</span>
            <span className="hero-stat-lbl">{student.learning_style}</span>
          </div>
        </div>
      </div>

      {/* Early Warning Alert Banner (if applicable) */}
      {gpa < 2.0 && (
        <div style={{
          background: "#fff1f2",
          border: "1px solid #fecdd3",
          borderRadius: "14px",
          padding: "12px 14px",
          display: "flex",
          gap: "10px",
          alignItems: "flex-start"
        }}>
          <AlertTriangle size={20} color="#e11d48" style={{ flexShrink: 0, marginTop: "2px" }} />
          <div>
            <div style={{ fontSize: "13px", fontWeight: "700", color: "#9f1239" }}>
              Academic Early Warning Notice
            </div>
            <div style={{ fontSize: "12px", color: "#be123c", marginTop: "2px", lineHeight: "1.3" }}>
              Cumulative GPA is below 2.00. Recommended to consult with department advisor and utilize course repeat policies to recover quality grade points.
            </div>
          </div>
        </div>
      )}

      {/* Degree Completion Progress Card */}
      <div className="sis-card">
        <div className="sis-card-header">
          <span className="sis-card-title">
            <TrendingUp size={16} color="#2563eb" /> Degree Pathway Progress
          </span>
          <span style={{ fontSize: "12px", fontWeight: "700", color: "#2563eb" }}>
            {completionPct}%
          </span>
        </div>
        <div style={{
          width: "100%",
          height: "8px",
          background: "#e2e8f0",
          borderRadius: "999px",
          overflow: "hidden"
        }}>
          <div style={{
            width: `${Math.min(100, completionPct)}%`,
            height: "100%",
            background: "linear-gradient(90deg, #2563eb, #8b5cf6)",
            borderRadius: "999px"
          }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#64748b" }}>
          <span>{earnedCredits} Credits Completed</span>
          <span>{totalCredits - earnedCredits} Credits Remaining</span>
        </div>
      </div>

      {/* Quick Action Chips */}
      <div>
        <div style={{ fontSize: "13px", fontWeight: "700", color: "#334155", marginBottom: "8px" }}>
          Intelligent Academic Tools
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
          <button 
            className="sis-card"
            style={{ padding: "12px", textAlign: "left", cursor: "pointer" }}
            onClick={() => onNavigate("recommender")}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#2563eb", fontWeight: "700", fontSize: "13px" }}>
              <Compass size={18} /> Recommended
            </div>
            <div style={{ fontSize: "11px", color: "#64748b", marginTop: "4px" }}>
              AI course matches with prerequisite verification
            </div>
          </button>

          <button 
            className="sis-card"
            style={{ padding: "12px", textAlign: "left", cursor: "pointer" }}
            onClick={() => onNavigate("chat")}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#8b5cf6", fontWeight: "700", fontSize: "13px" }}>
              <MessageSquare size={18} /> AI Tutor
            </div>
            <div style={{ fontSize: "11px", color: "#64748b", marginTop: "4px" }}>
              Personalized {student.learning_style} explanations
            </div>
          </button>

          <button 
            className="sis-card"
            style={{ padding: "12px", textAlign: "left", cursor: "pointer" }}
            onClick={() => onNavigate("roadmap")}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#059669", fontWeight: "700", fontSize: "13px" }}>
              <GitBranch size={18} /> Prereq Tree
            </div>
            <div style={{ fontSize: "11px", color: "#64748b", marginTop: "4px" }}>
              Visual curriculum DAG & unlocked courses
            </div>
          </button>

          <button 
            className="sis-card"
            style={{ padding: "12px", textAlign: "left", cursor: "pointer" }}
            onClick={() => onNavigate("simulator")}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#d97706", fontWeight: "700", fontSize: "13px" }}>
              <Calculator size={18} /> GPA Simulator
            </div>
            <div style={{ fontSize: "11px", color: "#64748b", marginTop: "4px" }}>
              What-If grade calculations & forecasting
            </div>
          </button>
        </div>
      </div>

      {/* Advising & Mentorship Card */}
      <div className="sis-card">
        <div className="sis-card-header">
          <span className="sis-card-title">
            <BookOpen size={16} color="#0f172a" /> Department Academic Advising
          </span>
        </div>
        <div style={{ fontSize: "12px", color: "#475569", lineHeight: "1.4" }}>
          {student.advising_notes || "Eligible for standard semester registration."}
        </div>
        <div style={{
          background: "#f8fafc",
          padding: "8px 10px",
          borderRadius: "8px",
          fontSize: "11px",
          color: "#64748b",
          display: "flex",
          justifyContent: "space-between"
        }}>
          <span><strong>Dean:</strong> {student.dean || "Department Chair"}</span>
          <span><strong>Term:</strong> Fall 2026</span>
        </div>
      </div>
    </div>
  );
}
