import React, { useState, useEffect } from "react";
import { Search, X, User, Check, Award, AlertTriangle } from "lucide-react";
import { fetchStudents } from "../api";

export default function StudentSwitcherModal({ isOpen, onClose, currentStudentId, onSelectStudent }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    if (isOpen) {
      loadStudents();
    }
  }, [isOpen, searchTerm]);

  const loadStudents = async () => {
    setLoading(true);
    try {
      const data = await fetchStudents(searchTerm, "", 60);
      setStudents(data.students || []);
    } catch (err) {
      console.warn("Could not load students:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const filtered = students.filter((s) => {
    if (filterType === "freshman") return Number(s.year_level) === 1;
    if (filterType === "senior") return Number(s.year_level) === 4;
    if (filterType === "honors") return Number(s.gpa) >= 3.65;
    if (filterType === "at-risk") return Number(s.gpa) < 2.0;
    return true;
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a" }}>Switch Active Student</div>
            <div style={{ fontSize: "11px", color: "#64748b" }}>Select from 5,000+ student profiles in the database</div>
          </div>
          <button onClick={onClose} style={{ color: "#64748b", padding: "4px" }}>
            <X size={20} />
          </button>
        </div>

        {/* Search input */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#f1f5f9", borderRadius: "10px", padding: "8px 12px" }}>
          <Search size={16} color="#64748b" />
          <input
            type="text"
            placeholder="Search by student name or ID (e.g. FCDS20260001)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ border: "none", background: "transparent", padding: 0, width: "100%", fontSize: "13px" }}
          />
        </div>

        {/* Quick Filter Chips */}
        <div style={{ display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "2px" }}>
          {[
            { id: "all", label: "All Profiles" },
            { id: "freshman", label: "Freshman (Yr 1)" },
            { id: "senior", label: "Senior (Yr 4)" },
            { id: "honors", label: "Honors (≥ 3.65)" },
            { id: "at-risk", label: "At-Risk (< 2.0)" }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id)}
              style={{
                padding: "4px 10px",
                borderRadius: "14px",
                fontSize: "11px",
                fontWeight: "600",
                background: filterType === f.id ? "#2563eb" : "#f1f5f9",
                color: filterType === f.id ? "#ffffff" : "#475569",
                whiteSpace: "nowrap"
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Student List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", overflowY: "auto", maxHeight: "360px" }}>
          {loading ? (
            <div style={{ textAlign: "center", padding: "20px", color: "#64748b", fontSize: "12px" }}>
              Loading student roster...
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "20px", color: "#64748b", fontSize: "12px" }}>
              No students found matching your criteria.
            </div>
          ) : (
            filtered.map((s) => {
              const isSelected = s.student_id === currentStudentId;
              const gpa = Number(s.gpa || 0);
              return (
                <div
                  key={s.student_id}
                  onClick={() => {
                    onSelectStudent(s.student_id);
                    onClose();
                  }}
                  style={{
                    background: isSelected ? "#eff6ff" : "#ffffff",
                    border: isSelected ? "1.5px solid #2563eb" : "1px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "10px 12px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: isSelected ? "#2563eb" : "#e2e8f0",
                      color: isSelected ? "#ffffff" : "#475569",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "700",
                      fontSize: "12px"
                    }}>
                      {s.student_name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a" }}>
                        {s.student_name}
                      </div>
                      <div style={{ fontSize: "11px", color: "#64748b" }}>
                        {s.student_id} • Year {s.year_level} • {s.department_name?.split("&")[0] || s.department_name}
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <div style={{
                      fontSize: "12px",
                      fontWeight: "800",
                      color: gpa >= 3.65 ? "#059669" : gpa < 2.0 ? "#e11d48" : "#2563eb"
                    }}>
                      {gpa.toFixed(2)} GPA
                    </div>
                    <span style={{ fontSize: "10px", color: "#64748b" }}>
                      {s.mbti} • {s.learning_style}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
