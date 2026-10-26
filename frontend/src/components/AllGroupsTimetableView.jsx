import React, { useState, useEffect } from "react";
import { 
  fetchGroupTimetable 
} from "../api";
import { 
  Calendar, 
  Users, 
  Download, 
  Printer, 
  Clock, 
  MapPin, 
  UserCheck, 
  BookOpen, 
  LayoutGrid, 
  ListFilter,
  CheckCircle,
  Filter
} from "lucide-react";

export default function AllGroupsTimetableView() {
  const [departmentId, setDepartmentId] = useState("10");
  const [yearLevel, setYearLevel] = useState(1);
  const [groupId, setGroupId] = useState(1);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  const periods = [
    { period: 1, label: "Period 1", time: "08:30 – 10:30" },
    { period: 2, label: "Period 2", time: "10:45 – 12:45" },
    { period: 3, label: "Period 3", time: "13:00 – 15:00" },
    { period: 4, label: "Period 4", time: "15:15 – 17:15" },
  ];

  useEffect(() => {
    loadTimetable(departmentId, yearLevel, groupId);
  }, [departmentId, yearLevel, groupId]);

  const loadTimetable = async (dept, yr, grp) => {
    setLoading(true);
    try {
      const res = await fetchGroupTimetable(dept, yr, grp);
      setData(res);
    } catch (err) {
      console.error("Error loading group timetable:", err);
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
      "Classroom / Lab",
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
    link.setAttribute("download", `UniAssist_Timetable_Dept${departmentId}_Year${yearLevel}_Group${groupId}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  const departmentsList = data?.filters?.departments || [
    { department_id: "8", department_name: "Computer Science", code_prefix: "CS" },
    { department_id: "9", department_name: "Cybersecurity & Network Systems", code_prefix: "CYS" },
    { department_id: "10", department_name: "Data Science & Artificial Intelligence", code_prefix: "DSAI" },
    { department_id: "11", department_name: "Software Engineering & Information Systems", code_prefix: "SEIS" }
  ];

  const sessions = data?.sessions || [];
  const summary = data?.summary || {
    total_sessions: sessions.length,
    unique_courses: new Set(sessions.map(s => s.course_id)).size,
    total_credits: sessions.reduce((acc, s) => acc + (s.credits || 0), 0),
    active_days: new Set(sessions.map(s => s.day_of_week)).size,
    lectures: sessions.filter(s => s.session_type === "Lecture").length,
    labs: sessions.filter(s => s.session_type === "Lab").length
  };

  // Build grid slot index: map[day][period] = session
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
    <div className="all-groups-timetable-container" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {/* Top Selector Card */}
      <div className="sis-card" style={{ background: "#ffffff" }}>
        <div className="sis-card-header">
          <div className="sis-card-title">
            <Users size={18} color="#2563eb" />
            <span>Master Cohort & Group Timetable</span>
          </div>
          <div style={{ display: "flex", gap: "6px" }}>
            <button
              onClick={handleExportCSV}
              title="Export CSV"
              className="viewport-toggle-btn"
              style={{ background: "#f8fafc", color: "#1e293b", border: "1px solid #cbd5e1", padding: "5px 10px", cursor: "pointer" }}
            >
              <Download size={13} color="#2563eb" />
              <span>CSV</span>
            </button>
            <button
              onClick={handlePrint}
              title="Print Timetable"
              className="viewport-toggle-btn"
              style={{ background: "#f8fafc", color: "#1e293b", border: "1px solid #cbd5e1", padding: "5px 10px", cursor: "pointer" }}
            >
              <Printer size={13} color="#475569" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Department Dropdown */}
          <div>
            <label style={{ fontSize: "11px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", marginBottom: "4px", display: "block" }}>
              Department / Academic Program:
            </label>
            <select
              value={departmentId}
              onChange={(e) => setDepartmentId(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "10px",
                border: "1px solid #cbd5e1",
                background: "#f8fafc",
                fontSize: "12px",
                fontWeight: "600",
                color: "#1e293b",
                outline: "none"
              }}
            >
              {departmentsList.map((dept) => (
                <option key={dept.department_id} value={dept.department_id}>
                  {dept.department_name} ({dept.code_prefix || `Dept ${dept.department_id}`})
                </option>
              ))}
            </select>
          </div>

          {/* Academic Level & Group Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {/* Academic Level */}
            <div>
              <label style={{ fontSize: "11px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", marginBottom: "4px", display: "block" }}>
                Academic Level:
              </label>
              <div style={{ display: "flex", gap: "4px" }}>
                {[1, 2, 3, 4].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setYearLevel(yr)}
                    style={{
                      flex: 1,
                      padding: "6px 0",
                      borderRadius: "8px",
                      fontSize: "11px",
                      fontWeight: "700",
                      border: "none",
                      background: yearLevel === yr ? "#2563eb" : "#f1f5f9",
                      color: yearLevel === yr ? "#ffffff" : "#475569",
                      cursor: "pointer",
                      transition: "all 0.15s"
                    }}
                  >
                    Y{yr}
                  </button>
                ))}
              </div>
            </div>

            {/* Section Group */}
            <div>
              <label style={{ fontSize: "11px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", marginBottom: "4px", display: "block" }}>
                Section Group:
              </label>
              <div style={{ display: "flex", gap: "4px" }}>
                {[1, 2, 3, 4].map((grp) => (
                  <button
                    key={grp}
                    onClick={() => setGroupId(grp)}
                    style={{
                      flex: 1,
                      padding: "6px 0",
                      borderRadius: "8px",
                      fontSize: "11px",
                      fontWeight: "700",
                      border: "none",
                      background: groupId === grp ? "#8b5cf6" : "#f1f5f9",
                      color: groupId === grp ? "#ffffff" : "#475569",
                      cursor: "pointer",
                      transition: "all 0.15s"
                    }}
                  >
                    G{grp}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cohort Summary Metrics Strip */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "8px"
      }}>
        <div style={{ background: "#ffffff", padding: "10px", borderRadius: "12px", border: "1px solid #e2e8f0", textAlign: "center" }}>
          <div style={{ fontSize: "16px", fontWeight: "800", color: "#2563eb" }}>{summary.total_sessions}</div>
          <div style={{ fontSize: "10px", color: "#64748b", fontWeight: "600", textTransform: "uppercase" }}>Sessions</div>
        </div>
        <div style={{ background: "#ffffff", padding: "10px", borderRadius: "12px", border: "1px solid #e2e8f0", textAlign: "center" }}>
          <div style={{ fontSize: "16px", fontWeight: "800", color: "#7c3aed" }}>{summary.unique_courses}</div>
          <div style={{ fontSize: "10px", color: "#64748b", fontWeight: "600", textTransform: "uppercase" }}>Courses</div>
        </div>
        <div style={{ background: "#ffffff", padding: "10px", borderRadius: "12px", border: "1px solid #e2e8f0", textAlign: "center" }}>
          <div style={{ fontSize: "16px", fontWeight: "800", color: "#059669" }}>{summary.total_credits}</div>
          <div style={{ fontSize: "10px", color: "#64748b", fontWeight: "600", textTransform: "uppercase" }}>Credits</div>
        </div>
        <div style={{ background: "#ffffff", padding: "10px", borderRadius: "12px", border: "1px solid #e2e8f0", textAlign: "center" }}>
          <div style={{ fontSize: "16px", fontWeight: "800", color: "#d97706" }}>{summary.active_days}d / wk</div>
          <div style={{ fontSize: "10px", color: "#64748b", fontWeight: "600", textTransform: "uppercase" }}>Days</div>
        </div>
      </div>

      {/* View Switcher Pill */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "12px", fontWeight: "700", color: "#334155", display: "flex", alignItems: "center", gap: "6px" }}>
          <Calendar size={14} color="#2563eb" />
          <span>Weekly Schedule (Sunday – Thursday)</span>
        </div>
        <div style={{ display: "flex", background: "#e2e8f0", padding: "2px", borderRadius: "8px" }}>
          <button
            onClick={() => setViewMode("grid")}
            style={{
              padding: "4px 8px",
              borderRadius: "6px",
              border: "none",
              fontSize: "11px",
              fontWeight: "600",
              cursor: "pointer",
              background: viewMode === "grid" ? "#ffffff" : "transparent",
              color: viewMode === "grid" ? "#1e293b" : "#64748b"
            }}
          >
            <LayoutGrid size={12} style={{ display: "inline", marginRight: "4px" }} />
            Grid
          </button>
          <button
            onClick={() => setViewMode("list")}
            style={{
              padding: "4px 8px",
              borderRadius: "6px",
              border: "none",
              fontSize: "11px",
              fontWeight: "600",
              cursor: "pointer",
              background: viewMode === "list" ? "#ffffff" : "transparent",
              color: viewMode === "list" ? "#1e293b" : "#64748b"
            }}
          >
            <ListFilter size={12} style={{ display: "inline", marginRight: "4px" }} />
            List
          </button>
        </div>
      </div>

      {/* Schedule Content */}
      {loading ? (
        <div style={{ textAlign: "center", padding: "30px", color: "#64748b", fontSize: "12px" }}>
          Loading timetable sessions...
        </div>
      ) : sessions.length === 0 ? (
        <div style={{ background: "#ffffff", padding: "30px 20px", borderRadius: "16px", textAlign: "center", border: "1px dashed #cbd5e1" }}>
          <Calendar size={28} color="#94a3b8" style={{ margin: "0 auto 8px" }} />
          <div style={{ fontSize: "13px", fontWeight: "700", color: "#475569" }}>No Sessions Scheduled for This Group</div>
          <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "4px" }}>
            Try selecting Group 1 or another academic year.
          </div>
        </div>
      ) : viewMode === "grid" ? (
        /* GRID VIEW */
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
      ) : (
        /* LIST VIEW */
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {daysOfWeek.map(day => {
            const daySessions = sessions.filter(s => s.day_of_week === day);
            if (daySessions.length === 0) return null;
            return (
              <div key={day} className="sis-card" style={{ padding: "12px" }}>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#1e293b", borderBottom: "1px solid #f1f5f9", paddingBottom: "6px", display: "flex", justifyContent: "space-between" }}>
                  <span>{day}</span>
                  <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "600" }}>{daySessions.length} sessions</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
                  {daySessions.map(s => {
                    const isLab = s.session_type === "Lab";
                    return (
                      <div key={s.session_id} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "8px 10px",
                        background: isLab ? "#fbfcfe" : "#f8fafc",
                        border: `1px solid ${isLab ? "#e9d5ff" : "#e2e8f0"}`,
                        borderRadius: "10px"
                      }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <span style={{ fontWeight: "800", color: isLab ? "#7c3aed" : "#2563eb", fontSize: "11px" }}>
                              {s.course_id}
                            </span>
                            <span style={{ fontSize: "9px", fontWeight: "700", padding: "1px 5px", borderRadius: "4px", background: isLab ? "#f3e8ff" : "#dbeafe", color: isLab ? "#7c3aed" : "#1d4ed8" }}>
                              {s.session_type}
                            </span>
                            <span style={{ fontSize: "10px", color: "#64748b" }}>
                              P{s.period} ({s.start_time}–{s.end_time})
                            </span>
                          </div>
                          <div style={{ fontSize: "12px", fontWeight: "700", color: "#0f172a" }}>
                            {s.course_name}
                          </div>
                          <div style={{ fontSize: "10px", color: "#64748b", display: "flex", gap: "10px" }}>
                            <span>📍 {s.room_number} ({s.building})</span>
                            <span>👤 {s.instructor_name}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
