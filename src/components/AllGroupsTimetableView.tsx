import React, { useState, useEffect } from "react";
import { 
  fetchGroupTimetable 
} from "../api";
import { 
  Calendar, 
  Users, 
  Download, 
  Printer, 
  LayoutGrid, 
  ListFilter
} from "lucide-react";
import { GroupTimetableResponse, TimetableSession } from "../types";

export default function AllGroupsTimetableView() {
  const [departmentId, setDepartmentId] = useState("10");
  const [yearLevel, setYearLevel] = useState(1);
  const [groupId, setGroupId] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [data, setData] = useState<GroupTimetableResponse | null>(null);
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

  const loadTimetable = async (dept: string, yr: number, grp: number) => {
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
      "Day", "Period", "Time Slot", "Course Code", "Course Name", 
      "Session Type", "Credits", "Section", "Room", "Building", "Instructor"
    ];
    const rows = data.sessions.map((s: TimetableSession) => [
      `"${s.day_of_week}"`,
      s.period,
      `"${s.start_time} - ${s.end_time}"`,
      `"${s.course_id}"`,
      `"${s.course_name}"`,
      `"${s.session_type}"`,
      s.credits,
      `"${s.section_id}"`,
      `"${s.room_number}"`,
      `"${s.building}"`,
      `"${s.instructor_name}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `timetable_dept_${departmentId}_Y${yearLevel}_G${groupId}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {/* Filter Header Card */}
      <div className="sis-card" style={{ padding: "14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: "700", fontSize: "14px", color: "#0f172a" }}>
            <Calendar size={16} color="#2563eb" />
            <span>Master Cohort Timetables</span>
          </div>

          <div style={{ display: "flex", gap: "4px", background: "#f1f5f9", padding: "2px", borderRadius: "8px" }}>
            <button
              onClick={() => setViewMode("grid")}
              style={{
                padding: "4px 8px",
                borderRadius: "6px",
                border: "none",
                background: viewMode === "grid" ? "#ffffff" : "transparent",
                color: viewMode === "grid" ? "#2563eb" : "#64748b",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "11px",
                fontWeight: "600"
              }}
            >
              <LayoutGrid size={13} /> Grid
            </button>
            <button
              onClick={() => setViewMode("list")}
              style={{
                padding: "4px 8px",
                borderRadius: "6px",
                border: "none",
                background: viewMode === "list" ? "#ffffff" : "transparent",
                color: viewMode === "list" ? "#2563eb" : "#64748b",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "11px",
                fontWeight: "600"
              }}
            >
              <ListFilter size={13} /> List
            </button>
          </div>
        </div>

        {/* Dropdowns Filter Bar */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "8px",
          marginTop: "10px"
        }}>
          <div>
            <label style={{ fontSize: "10px", color: "#64748b", fontWeight: "600" }}>DEPARTMENT</label>
            <select
              value={departmentId}
              onChange={(e) => setDepartmentId(e.target.value)}
              style={{ width: "100%", marginTop: "2px", fontSize: "11px", padding: "6px 8px" }}
            >
              <option value="8">Cyber Security</option>
              <option value="9">Intelligent Systems</option>
              <option value="10">Data Science & AI</option>
              <option value="11">Software Industry (SIM)</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: "10px", color: "#64748b", fontWeight: "600" }}>YEAR LEVEL</label>
            <select
              value={yearLevel}
              onChange={(e) => setYearLevel(Number(e.target.value))}
              style={{ width: "100%", marginTop: "2px", fontSize: "11px", padding: "6px 8px" }}
            >
              {[1, 2, 3, 4].map(y => (
                <option key={y} value={y}>Year {y}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ fontSize: "10px", color: "#64748b", fontWeight: "600" }}>STUDENT GROUP</label>
            <select
              value={groupId}
              onChange={(e) => setGroupId(Number(e.target.value))}
              style={{ width: "100%", marginTop: "2px", fontSize: "11px", padding: "6px 8px" }}
            >
              {[1, 2, 3, 4].map(g => (
                <option key={g} value={g}>Group {g}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "12px", color: "#64748b" }}>
          Showing <strong>{data?.sessions?.length || 0} scheduled sessions</strong>
        </div>

        <div style={{ display: "flex", gap: "6px" }}>
          <button
            onClick={handleExportCSV}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "6px 10px",
              background: "#ffffff",
              border: "1px solid #cbd5e1",
              borderRadius: "8px",
              fontSize: "11px",
              fontWeight: "600",
              color: "#334155"
            }}
          >
            <Download size={13} /> Export CSV
          </button>
          <button
            onClick={handlePrint}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "6px 10px",
              background: "#ffffff",
              border: "1px solid #cbd5e1",
              borderRadius: "8px",
              fontSize: "11px",
              fontWeight: "600",
              color: "#334155"
            }}
          >
            <Printer size={13} /> Print
          </button>
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: "center", padding: "30px", color: "#64748b" }}>
          Loading timetable grid...
        </div>
      ) : viewMode === "grid" ? (
        /* Matrix Grid View */
        <div className="timetable-grid-wrapper" style={{
          background: "#ffffff",
          borderRadius: "14px",
          border: "1px solid #e2e8f0",
          overflowX: "auto"
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "550px", fontSize: "11px" }}>
            <thead>
              <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                <th style={{ padding: "10px", textAlign: "left", width: "90px", color: "#475569", fontWeight: "700" }}>
                  Day / Period
                </th>
                {periods.map(p => (
                  <th key={p.period} style={{ padding: "10px 8px", textAlign: "center", color: "#475569", fontWeight: "700" }}>
                    <div>{p.label}</div>
                    <div style={{ fontSize: "10px", color: "#94a3b8", fontWeight: "500" }}>{p.time}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {daysOfWeek.map(day => (
                <tr key={day} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "10px", fontWeight: "700", color: "#1e293b", background: "#fafafa" }}>
                    {day}
                  </td>
                  {periods.map(p => {
                    const session = data?.sessions?.find(s => s.day_of_week === day && s.period === p.period);
                    return (
                      <td key={p.period} style={{ padding: "6px", verticalAlign: "top", height: "80px" }}>
                        {session ? (
                          <div style={{
                            background: session.session_type === "Lab" ? "#f5f3ff" : "#eff6ff",
                            border: `1px solid ${session.session_type === "Lab" ? "#ddd6fe" : "#bfdbfe"}`,
                            borderRadius: "8px",
                            padding: "6px 8px",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                          }}>
                            <div>
                              <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: "10px",
                                fontWeight: "700",
                                color: session.session_type === "Lab" ? "#6d28d9" : "#1d4ed8"
                              }}>
                                <span>{session.course_id}</span>
                                <span style={{
                                  padding: "1px 4px",
                                  borderRadius: "4px",
                                  background: session.session_type === "Lab" ? "#ede9fe" : "#dbeafe",
                                  fontSize: "9px"
                                }}>
                                  {session.session_type}
                                </span>
                              </div>
                              <div style={{ fontSize: "11px", fontWeight: "700", color: "#0f172a", marginTop: "2px", lineHeight: "1.2" }}>
                                {session.course_name}
                              </div>
                            </div>
                            <div style={{ fontSize: "10px", color: "#64748b", marginTop: "4px" }}>
                              <div>{session.room_number}</div>
                              <div style={{ color: "#475569", fontWeight: "500" }}>{session.instructor_name}</div>
                            </div>
                          </div>
                        ) : (
                          <div style={{
                            height: "100%",
                            borderRadius: "6px",
                            border: "1px dashed #f1f5f9",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#cbd5e1",
                            fontSize: "10px"
                          }}>
                            —
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* List View */
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {data?.sessions?.map((s) => (
            <div key={s.session_id} className="sis-card" style={{ padding: "12px", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  <span style={{ fontWeight: "800", color: "#0f172a" }}>{s.course_id}</span>
                  <span className={`badge ${s.session_type === "Lab" ? "badge-purple" : "badge-blue"}`}>
                    {s.session_type}
                  </span>
                  <span style={{ fontSize: "11px", color: "#64748b" }}>Sec {s.section_number}</span>
                </div>
                <div style={{ fontSize: "12px", color: "#334155", fontWeight: "600", marginTop: "2px" }}>
                  {s.course_name}
                </div>
                <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                  {s.day_of_week} • {s.start_time} - {s.end_time} • {s.room_number}
                </div>
              </div>
              <div style={{ textAlign: "right", fontSize: "11px", color: "#475569" }}>
                <strong>{s.instructor_name}</strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
