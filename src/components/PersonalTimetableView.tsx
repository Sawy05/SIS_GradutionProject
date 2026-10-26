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
  Printer, 
  Download
} from "lucide-react";
import { Student, PersonalTimetableResponse, TimetableSession } from "../types";

interface PersonalTimetableViewProps {
  student: Student | null;
  onExploreRecommended: () => void;
}

export default function PersonalTimetableView({ student, onExploreRecommended }: PersonalTimetableViewProps) {
  const [data, setData] = useState<PersonalTimetableResponse | null>(null);
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

  const loadPersonal = async (id: string) => {
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
    link.setAttribute("download", `personal_timetable_${studentId}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px", color: "#64748b" }}>
        Loading personal timetable...
      </div>
    );
  }

  const sessions = data?.sessions || [];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {/* Student Banner */}
      <div className="sis-card" style={{
        background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
        color: "#ffffff",
        padding: "16px"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: "11px", color: "#93c5fd", textTransform: "uppercase", fontWeight: "700" }}>
              My Active Enrolled Schedule
            </div>
            <div style={{ fontSize: "18px", fontWeight: "800", marginTop: "2px" }}>
              {data?.student?.student_name || student?.student_name}
            </div>
            <div style={{ fontSize: "12px", color: "#dbeafe", marginTop: "2px" }}>
              {data?.student?.department_name} • Year {data?.student?.year_level}
            </div>
          </div>
          <button
            onClick={onExploreRecommended}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "11px",
              fontWeight: "700",
              border: "1px solid rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              gap: "5px"
            }}
          >
            <Sparkles size={12} />
            <span>AI Optimize</span>
          </button>
        </div>

        {/* Quick Summary Chips */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
          marginTop: "12px",
          paddingTop: "10px",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          fontSize: "11px"
        }}>
          <div>
            <span style={{ color: "#bfdbfe" }}>Courses:</span>
            <div style={{ fontWeight: "800", fontSize: "14px" }}>{data?.summary?.total_registered_courses}</div>
          </div>
          <div>
            <span style={{ color: "#bfdbfe" }}>Weekly Credits:</span>
            <div style={{ fontWeight: "800", fontSize: "14px" }}>{data?.summary?.total_credits} hrs</div>
          </div>
          <div>
            <span style={{ color: "#bfdbfe" }}>Active Days:</span>
            <div style={{ fontWeight: "800", fontSize: "14px" }}>{data?.summary?.days_per_week} days/wk</div>
          </div>
        </div>
      </div>

      {/* Action Toolbar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "13px", fontWeight: "700", color: "#334155" }}>
          Weekly Timetable Matrix
        </span>
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

      {/* Grid Timetable Matrix */}
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
                  const session = sessions.find((s: TimetableSession) => s.day_of_week === day && s.period === p.period);
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
    </div>
  );
}
