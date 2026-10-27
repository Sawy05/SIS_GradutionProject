import React, { useState, useEffect, useMemo } from "react";
import { 
  Search, 
  X, 
  User, 
  Check, 
  Award, 
  AlertTriangle, 
  CheckCircle2, 
  GraduationCap, 
  Filter,
  Users
} from "lucide-react";
import { fetchStudents } from "../api";
import { Student } from "../types";

interface StudentSwitcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStudentId: string;
  onSelectStudent: (newId: string) => void;
}

type YearFilter = "all" | 1 | 2 | 3 | 4;
type StandingFilter = "all" | "honors" | "warning" | "good";

export default function StudentSwitcherModal({ 
  isOpen, 
  onClose, 
  currentStudentId, 
  onSelectStudent 
}: StudentSwitcherModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState<YearFilter>("all");
  const [standingFilter, setStandingFilter] = useState<StandingFilter>("all");
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const [counts, setCounts] = useState<{
    yearCounts: Record<number, number>;
    honorsCount: number;
    warningCount: number;
    goodCount: number;
    totalCount: number;
  }>({
    yearCounts: { 1: 0, 2: 0, 3: 0, 4: 0 },
    honorsCount: 0,
    warningCount: 0,
    goodCount: 0,
    totalCount: 0
  });

  useEffect(() => {
    if (isOpen) {
      loadStudents();
    }
  }, [isOpen, searchTerm, yearFilter, standingFilter]);

  const loadStudents = async () => {
    setLoading(true);
    try {
      const data = await fetchStudents(
        searchTerm, 
        "", 
        120, 
        yearFilter, 
        standingFilter
      );
      setStudents(data.students || []);
      setCounts({
        yearCounts: data.yearCounts || { 1: 0, 2: 0, 3: 0, 4: 0 },
        honorsCount: data.honorsCount || 0,
        warningCount: data.warningCount || 0,
        goodCount: data.goodCount || 0,
        totalCount: data.totalCount || 0
      });
    } catch (err) {
      console.warn("Could not load students:", err);
    } finally {
      setLoading(false);
    }
  };

  // Group students by year level for organized display
  const groupedByYear = useMemo(() => {
    const groups: Record<number, Student[]> = { 1: [], 2: [], 3: [], 4: [] };
    for (const s of students) {
      const yr = Number(s.year_level);
      if (groups[yr]) {
        groups[yr].push(s);
      }
    }
    return groups;
  }, [students]);

  if (!isOpen) return null;

  const yearLabels: Record<number, { title: string; subtitle: string; color: string }> = {
    1: { title: "Year 1", subtitle: "Freshman Cohort", color: "#3b82f6" },
    2: { title: "Year 2", subtitle: "Sophomore Cohort", color: "#6366f1" },
    3: { title: "Year 3", subtitle: "Junior Cohort", color: "#8b5cf6" },
    4: { title: "Year 4", subtitle: "Senior Cohort", color: "#059669" }
  };

  const renderStudentCard = (s: Student) => {
    const isSelected = s.student_id === currentStudentId;
    const gpaVal = Number(s.gpa || 0);
    const isHonors = gpaVal >= 3.65;
    const isWarning = gpaVal < 2.0;

    return (
      <div
        key={s.student_id}
        onClick={() => {
          onSelectStudent(s.student_id);
          onClose();
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 12px",
          borderRadius: "12px",
          border: isSelected ? "2px solid #2563eb" : "1px solid #e2e8f0",
          background: isSelected ? "#eff6ff" : "#ffffff",
          cursor: "pointer",
          transition: "all 0.15s",
          boxShadow: isSelected ? "0 2px 8px rgba(37,99,235,0.12)" : "0 1px 2px rgba(0,0,0,0.02)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, minWidth: 0 }}>
          <div style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: isSelected ? "#2563eb" : isHonors ? "#ecfdf5" : isWarning ? "#fff1f2" : "#f1f5f9",
            color: isSelected ? "#ffffff" : isHonors ? "#059669" : isWarning ? "#e11d48" : "#475569",
            border: isHonors ? "1px solid #a7f3d0" : isWarning ? "1px solid #fecdd3" : "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "800",
            fontSize: "13px",
            flexShrink: 0
          }}>
            {s.student_name ? s.student_name.charAt(0) : <User size={13} />}
          </div>

          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a" }}>
                {s.student_name}
              </span>
              {/* Academic Standing Badge */}
              {isHonors && (
                <span style={{
                  fontSize: "10px",
                  fontWeight: "700",
                  color: "#047857",
                  background: "#d1fae5",
                  padding: "1px 6px",
                  borderRadius: "999px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "3px"
                }}>
                  <Award size={10} /> 3.65+ Honors
                </span>
              )}
              {isWarning && (
                <span style={{
                  fontSize: "10px",
                  fontWeight: "700",
                  color: "#be123c",
                  background: "#ffe4e6",
                  padding: "1px 6px",
                  borderRadius: "999px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "3px"
                }}>
                  <AlertTriangle size={10} /> Warning (&lt;2.0)
                </span>
              )}
            </div>

            <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{
                background: "#f1f5f9",
                color: "#334155",
                padding: "1px 5px",
                borderRadius: "4px",
                fontWeight: "600",
                fontSize: "10px"
              }}>
                Year {s.year_level}
              </span>
              <span>•</span>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {s.department_name}
              </span>
              <span>•</span>
              <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#94a3b8" }}>
                {s.student_id}
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0, paddingLeft: "8px" }}>
          <div style={{ textAlign: "right" }}>
            <div style={{
              fontSize: "13px",
              fontWeight: "900",
              color: isHonors ? "#059669" : isWarning ? "#e11d48" : "#2563eb"
            }}>
              {gpaVal.toFixed(2)}
            </div>
            <div style={{ fontSize: "10px", color: "#94a3b8" }}>
              {s.mbti} • {s.learning_style}
            </div>
          </div>
          {isSelected && <Check size={18} color="#2563eb" />}
        </div>
      </div>
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: "17px", fontWeight: "800", color: "#0f172a", display: "flex", alignItems: "center", gap: "6px" }}>
              <GraduationCap size={18} color="#2563eb" />
              <span>Switch Active Student</span>
            </div>
            <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
              Divided across All 4 Years • 3.65+ Honors &amp; Academic Warning
            </div>
          </div>
          <button 
            onClick={onClose} 
            style={{ 
              background: "#f1f5f9", 
              border: "none", 
              borderRadius: "50%", 
              width: "28px", 
              height: "28px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              color: "#64748b", 
              cursor: "pointer" 
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Search Input */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "8px", 
          background: "#f8fafc", 
          border: "1px solid #e2e8f0", 
          borderRadius: "10px", 
          padding: "8px 12px" 
        }}>
          <Search size={15} color="#64748b" />
          <input
            type="text"
            placeholder="Search by student name or ID (e.g. FCDS20260001)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ border: "none", background: "transparent", padding: 0, width: "100%", fontSize: "12px", outline: "none" }}
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm("")} style={{ border: "none", background: "none", color: "#94a3b8", cursor: "pointer", padding: 0 }}>
              <X size={13} />
            </button>
          )}
        </div>

        {/* 1. Academic Year Division Tabs (Divide All 4 Years) */}
        <div>
          <div style={{ fontSize: "10px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", marginBottom: "4px" }}>
            Academic Cohort (All 4 Years)
          </div>
          <div style={{
            display: "flex",
            background: "#f1f5f9",
            padding: "3px",
            borderRadius: "10px",
            gap: "2px"
          }}>
            {[
              { id: "all", label: "All 4 Years" },
              { id: 1, label: "Year 1" },
              { id: 2, label: "Year 2" },
              { id: 3, label: "Year 3" },
              { id: 4, label: "Year 4" }
            ].map((y) => {
              const isActive = yearFilter === y.id;
              const count = y.id === "all" ? counts.totalCount : counts.yearCounts[y.id as number] || 0;
              return (
                <button
                  key={String(y.id)}
                  onClick={() => setYearFilter(y.id as YearFilter)}
                  style={{
                    flex: 1,
                    padding: "6px 2px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "11px",
                    fontWeight: isActive ? "800" : "600",
                    cursor: "pointer",
                    background: isActive ? "#ffffff" : "transparent",
                    color: isActive ? "#2563eb" : "#475569",
                    boxShadow: isActive ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1px",
                    transition: "all 0.12s"
                  }}
                >
                  <span>{y.label}</span>
                  <span style={{ fontSize: "9px", color: isActive ? "#2563eb" : "#94a3b8", fontWeight: "500" }}>
                    {count > 0 ? count : ""}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Standing & Performance Filters (3.65+ Honors and Academic Warning) */}
        <div>
          <div style={{ fontSize: "10px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", marginBottom: "4px" }}>
            Standing &amp; GPA Categories
          </div>
          <div style={{ display: "flex", gap: "4px", overflowX: "auto", paddingBottom: "2px" }}>
            {[
              { id: "all", label: "All Standings", icon: Users, color: "#475569", count: counts.totalCount },
              { id: "honors", label: "3.65+ Honors", icon: Award, color: "#059669", count: counts.honorsCount },
              { id: "warning", label: "Academic Warning (<2.0)", icon: AlertTriangle, color: "#e11d48", count: counts.warningCount },
              { id: "good", label: "Good Standing (2.0–3.64)", icon: CheckCircle2, color: "#2563eb", count: counts.goodCount }
            ].map((st) => {
              const isActive = standingFilter === st.id;
              const Icon = st.icon;
              return (
                <button
                  key={st.id}
                  onClick={() => setStandingFilter(st.id as StandingFilter)}
                  style={{
                    padding: "5px 9px",
                    borderRadius: "14px",
                    fontSize: "11px",
                    fontWeight: "700",
                    border: isActive ? `1px solid ${st.color}` : "1px solid #e2e8f0",
                    background: isActive ? st.color : "#ffffff",
                    color: isActive ? "#ffffff" : "#475569",
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    cursor: "pointer",
                    boxShadow: isActive ? "0 2px 6px rgba(0,0,0,0.08)" : "none",
                    transition: "all 0.15s"
                  }}
                >
                  <Icon size={12} color={isActive ? "#ffffff" : st.color} />
                  <span>{st.label}</span>
                  {st.count !== undefined && st.count > 0 && (
                    <span style={{
                      fontSize: "9px",
                      padding: "1px 5px",
                      borderRadius: "10px",
                      background: isActive ? "rgba(255,255,255,0.25)" : "#f1f5f9",
                      color: isActive ? "#ffffff" : "#64748b"
                    }}>
                      {st.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Student List Grouped by Year or Filtered */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxHeight: "360px", overflowY: "auto", paddingRight: "2px" }}>
          {loading ? (
            <div style={{ textAlign: "center", padding: "30px 10px", color: "#64748b", fontSize: "12px" }}>
              Loading student profiles...
            </div>
          ) : students.length === 0 ? (
            <div style={{ textAlign: "center", padding: "30px 10px", color: "#64748b", fontSize: "12px" }}>
              No students found matching the selected year and standing filters.
            </div>
          ) : yearFilter === "all" ? (
            // Divide into distinct Year sections when "All 4 Years" is selected
            ([1, 2, 3, 4] as const).map((yr) => {
              const cohortStudents = groupedByYear[yr] || [];
              if (cohortStudents.length === 0) return null;
              const meta = yearLabels[yr];

              return (
                <div key={yr} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "#f8fafc",
                    padding: "4px 10px",
                    borderRadius: "8px",
                    borderLeft: `3px solid ${meta.color}`
                  }}>
                    <div style={{ fontSize: "11px", fontWeight: "800", color: "#1e293b", display: "flex", alignItems: "center", gap: "6px" }}>
                      <span>{meta.title}</span>
                      <span style={{ color: "#64748b", fontWeight: "500", fontSize: "10px" }}>• {meta.subtitle}</span>
                    </div>
                    <span style={{ fontSize: "10px", fontWeight: "700", color: meta.color, background: "#ffffff", padding: "1px 6px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                      {cohortStudents.length} Profiles
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {cohortStudents.map(renderStudentCard)}
                  </div>
                </div>
              );
            })
          ) : (
            // Specific single year filtered list
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {students.map(renderStudentCard)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
