import React, { useState, useEffect } from "react";
import { 
  fetchPersonalTimetable 
} from "../api";
import { 
  User, 
  Calendar, 
  Clock, 
  MapPin, 
  UserCheck, 
  Sparkles, 
  CheckCircle2, 
  Printer, 
  Download,
  AlertCircle
} from "lucide-react";

export default function PersonalTimetableView({ student, onExploreRecommended }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const studentId = student?.student_id || "FCDS20260001";

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  const periods = [
    { period: 1, label: "Period 1", time: "08:30 – 10:30" },
    { period: 2, label: "Period 2", time: "10:45 – 12:45" },
    { period: 3, label: "Period 3", time: "13:00 – 15:00" },
    { period: 4, label: "Period 4", time: "15:15 – 17:15" },
  ];

  useEffect(() => {
    loadPersonal(studentId);
  }, [studentId]);

  const loadPersonal = async (id) => {
    setLoading(true);
    try {
      const res = await fetchPersonalTimetable(id);
      setData(res);
    } catch (err) {
      console.error("Error loading personal timetable:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleExportCSV = () => {
    if (!data || !data.sessions) return;
    const headers = [
      "Day",
      "Period",
      "Time Slot",
      "Course Code",
      "Course Name",
      "Session Type",
      "Credits",
      "Section",
      "Room",
      "Building",
      "Instructor"
    ];
    const rows = data.sessions.map((s) => [
      `"${s.day_of_week}"`,
      `"Period ${s.period}"`,
      `"${s.start_time} - ${s.end_time}"`,
      `"${s.course_id}"`,
      `"${s.course_name.replace(/"/g, '""')}"`,
      `"${s.session_type}"`,
      s.credits,
      `"Group ${s.section_number}"`,
      `"${s.room_number}"`,
      `"${s.building}"`,
      `"${s.instructor_name || 'Staff'}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `UniAssist_Personal_Timetable_${studentId}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px", color: "#64748b", fontSize: "12px" }}>
        Loading your confirmed personal timetable...
      </div>
    );
  }

  const sessions = data?.sessions || [];
  const summary = data?.summary || {
    total_registered_courses: sessions.length,
    total_credits: sessions.reduce((a, b) => a + (b.credits || 0), 0),
    days_per_week: new Set(sessions.map(s => s.day_of_week)).size,
    lectures: sessions.filter(s => s.session_type === "Lecture").length,
    labs: sessions.filter(s => s.session_type === "Lab").length
  };

  // Build grid slot map
  const slotMap = {};
  daysOfWeek.forEach(d => {
    slotMap[d] = {};
  });
  sessions.forEach(s => {
    if (slotMap[s.day_of_week]) {
      slotMap[s.day_of_week][s.period] = s;
    }
  });

  return (
    <div className="personal-timetable-container" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {/* Top Header Card */}
      <div className="sis-card" style={{ background: "#ffffff" }}>
        <div className="sis-card-header">
          <div className="sis-card-title">
            <User size={18} color="#2563eb" />
            <span>My Registered Schedule</span>
          </div>
          <div style={{ display: "flex", gap: "6px" }}>
            <button
              onClick={handleExportCSV}
              className="viewport-toggle-btn"
              style={{ background: "#f8fafc", color: "#1e293b", border: "1px solid #cbd5e1", padding: "5px 10px", cursor: "pointer" }}
            >
              <Download size={13} color="#2563eb" />
              <span>CSV</span>
            </button>
            <button
              onClick={() => window.print()}
              className="viewport-toggle-btn"
              style={{ background: "#f8fafc", color: "#1e293b", border: "1px solid #cbd5e1", padding: "5px 10px", cursor: "pointer" }}
            >
              <Printer size={13} color="#475569" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Registered Summary Strip */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "8px"
        }}>
          <div style={{ background: "#eff6ff", padding: "10px", borderRadius: "12px", border: "1px solid #dbeafe", textAlign: "center" }}>
            <div style={{ fontSize: "16px", fontWeight: "800", color: "#2563eb" }}>{summary.total_registered_courses}</div>
            <div style={{ fontSize: "10px", color: "#64748b", fontWeight: "600", textTransform: "uppercase" }}>Registered</div>
          </div>
          <div style={{ background: "#f5f3ff", padding: "10px", borderRadius: "12px", border: "1px solid #ede9fe", textAlign: "center" }}>
            <div style={{ fontSize: "16px", fontWeight: "800", color: "#7c3aed" }}>{summary.total_credits}</div>
            <div style={{ fontSize: "10px", color: "#64748b", fontWeight: "600", textTransform: "uppercase" }}>Credits</div>
          </div>
          <div style={{ background: "#ecfdf5", padding: "10px", borderRadius: "12px", border: "1px solid #d1fae5", textAlign: "center" }}>
            <div style={{ fontSize: "16px", fontWeight: "800", color: "#059669" }}>{summary.days_per_week}d / wk</div>
            <div style={{ fontSize: "10px", color: "#64748b", fontWeight: "600", textTransform: "uppercase" }}>Days</div>
          </div>
          <div style={{ background: "#fffbeb", padding: "10px", borderRadius: "12px", border: "1px solid #fef3c7", textAlign: "center" }}>
            <div style={{ fontSize: "16px", fontWeight: "800", color: "#d97706" }}>{summary.lectures}L / {summary.labs}Lab</div>
            <div style={{ fontSize: "10px", color: "#64748b", fontWeight: "600", textTransform: "uppercase" }}>Split</div>
          </div>
        </div>

        {/* Callout to Explore AI-Recommended */}
        <div style={{
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: "12px",
          padding: "10px 14px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#166534", fontWeight: "600" }}>
            <CheckCircle2 size={16} color="#16a34a" />
            <span>Looking to resolve conflicts or optimize gaps?</span>
          </div>
          {onExploreRecommended && (
            <button
              onClick={onExploreRecommended}
              style={{
                fontSize: "11px",
                fontWeight: "700",
                background: "#16a34a",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                padding: "6px 12px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}
            >
              <Sparkles size={12} />
              <span>AI Optimize</span>
            </button>
          )}
        </div>
      </div>

      {/* Grid Timetable */}
      {sessions.length === 0 ? (
        <div className="sis-card" style={{ padding: "30px", textAlign: "center", border: "1px dashed #cbd5e1" }}>
          <Calendar size={32} color="#94a3b8" style={{ margin: "0 auto 8px" }} />
          <div style={{ fontSize: "14px", fontWeight: "700", color: "#475569" }}>No Active Timetable Sessions Found</div>
          <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "4px" }}>
            You haven't registered any course sections for Fall 2026 yet.
          </div>
          {onExploreRecommended && (
            <button
              onClick={onExploreRecommended}
              style={{
                marginTop: "12px",
                padding: "8px 16px",
                borderRadius: "10px",
                background: "#2563eb",
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: "700",
                border: "none",
                cursor: "pointer"
              }}
            >
              View Recommended Schedule
            </button>
          )}
        </div>
      ) : (
        <div className="timetable-grid-wrapper" style={{ overflowX: "auto", borderRadius: "14px", border: "1px solid #e2e8f0", background: "#ffffff" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "480px", fontSize: "11px" }}>
            <thead>
              <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                <th style={{ padding: "8px 10px", textAlign: "left", width: "70px", color: "#64748b", fontWeight: "700" }}>Day</th>
                {periods.map(p => (
                  <th key={p.period} style={{ padding: "8px 6px", textAlign: "center", color: "#475569", fontWeight: "700" }}>
                    <div>P{p.period}</div>
                    <div style={{ fontSize: "9px", color: "#94a3b8", fontWeight: "500" }}>{p.time}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {daysOfWeek.map(day => (
                <tr key={day} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "10px 8px", fontWeight: "700", color: "#1e293b", background: "#fbfcfe", verticalAlign: "top" }}>
                    {day}
                  </td>
                  {periods.map(p => {
                    const session = slotMap[day]?.[p.period];
                    if (!session) {
                      return (
                        <td key={p.period} style={{ padding: "6px", verticalAlign: "middle", textAlign: "center" }}>
                          <div style={{ height: "64px", border: "1px dashed #e2e8f0", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#cbd5e1", fontSize: "10px" }}>
                            —
                          </div>
                        </td>
                      );
                    }
                    const isLab = session.session_type === "Lab";
                    return (
                      <td key={p.period} style={{ padding: "5px", verticalAlign: "top" }}>
                        <div style={{
                          background: isLab ? "#f5f3ff" : "#eff6ff",
                          border: `1px solid ${isLab ? "#ddd6fe" : "#bfdbfe"}`,
                          borderRadius: "8px",
                          padding: "6px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "3px",
                          height: "100%",
                          minHeight: "72px"
                        }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontWeight: "800", color: isLab ? "#6d28d9" : "#1d4ed8", fontSize: "10px" }}>
                              {session.course_id}
                            </span>
                            <span style={{
                              fontSize: "8px",
                              fontWeight: "700",
                              padding: "1px 4px",
                              borderRadius: "4px",
                              background: isLab ? "#7c3aed" : "#2563eb",
                              color: "#ffffff"
                            }}>
                              {session.session_type}
                            </span>
                          </div>
                          <div style={{ fontWeight: "600", color: "#0f172a", fontSize: "10px", lineHeight: "1.2", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                            {session.course_name}
                          </div>
                          <div style={{ fontSize: "9px", color: "#64748b", display: "flex", alignItems: "center", gap: "2px", marginTop: "auto" }}>
                            <MapPin size={9} />
                            <span>{session.room_number}</span>
                          </div>
                          <div style={{ fontSize: "9px", color: "#475569", display: "flex", alignItems: "center", gap: "2px" }}>
                            <UserCheck size={9} />
                            <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                              {session.instructor_name}
                            </span>
                          </div>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
