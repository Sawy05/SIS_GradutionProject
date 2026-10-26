import React, { useState } from "react";
import { 
  Calculator, 
  TrendingUp, 
  Plus, 
  Trash2, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import { simulateGPA } from "../api";
import { Student, AnalyticsResponse, SimulatedCourse } from "../types";

interface GPASimulatorViewProps {
  student: Student | null;
  analytics: AnalyticsResponse | null;
}

export default function GPASimulatorView({ student, analytics }: GPASimulatorViewProps) {
  const [courses, setCourses] = useState<SimulatedCourse[]>([
    { course_name: "Advanced Algorithm Design", credits: 3, expected_grade: "A" },
    { course_name: "Distributed Systems & Cloud", credits: 4, expected_grade: "B+" },
    { course_name: "Machine Learning Elective", credits: 3, expected_grade: "A-" },
    { course_name: "Technical Communication", credits: 2, expected_grade: "A" }
  ]);

  const gradePoints: Record<string, number> = {
    "A": 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7,
    "C+": 2.3, "C": 2.0, "C-": 1.7, "D": 1.0, "F": 0.0
  };

  // Local real-time calculation
  const currentCredits = analytics?.academic_metrics?.total_credits_passed || 30;
  const currentGPA = student?.gpa || 3.0;
  const currentPoints = currentCredits * currentGPA;

  const simCredits = courses.reduce((acc, c) => acc + Number(c.credits), 0);
  const simPoints = courses.reduce((acc, c) => acc + (gradePoints[c.expected_grade] || 3.0) * Number(c.credits), 0);
  const simSemesterGPA = simCredits > 0 ? (simPoints / simCredits).toFixed(2) : "0.00";

  const projectedTotalCredits = currentCredits + simCredits;
  const projectedTotalPoints = currentPoints + simPoints;
  const projectedCumulativeGPA = (projectedTotalPoints / Math.max(1, projectedTotalCredits)).toFixed(2);
  const gpaDelta = (Number(projectedCumulativeGPA) - currentGPA).toFixed(2);

  const addCourseRow = () => {
    setCourses([...courses, { course_name: `Planned Elective ${courses.length + 1}`, credits: 3, expected_grade: "B+" }]);
  };

  const removeCourseRow = (idx: number) => {
    setCourses(courses.filter((_, i) => i !== idx));
  };

  const updateCourse = (idx: number, field: keyof SimulatedCourse, value: any) => {
    const updated = [...courses];
    updated[idx] = { ...updated[idx], [field]: value };
    setCourses(updated);
  };

  const applyPreset = (grade: string) => {
    setCourses(courses.map((c) => ({ ...c, expected_grade: grade })));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Simulation Result Hero */}
      <div className="sis-card" style={{ background: "linear-gradient(135deg, #4338ca, #6366f1)", color: "#ffffff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: "11px", color: "#c7d2fe", textTransform: "uppercase", fontWeight: "700" }}>
              Projected Cumulative GPA
            </div>
            <div style={{ fontSize: "32px", fontWeight: "900", marginTop: "2px" }}>
              {projectedCumulativeGPA}
              <span style={{ fontSize: "14px", color: "#c7d2fe", fontWeight: "500" }}> / 4.00</span>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              background: Number(gpaDelta) >= 0 ? "rgba(16, 185, 129, 0.25)" : "rgba(239, 68, 68, 0.25)",
              color: "#ffffff",
              padding: "4px 10px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "700"
            }}>
              <TrendingUp size={13} /> {Number(gpaDelta) >= 0 ? `+${gpaDelta}` : gpaDelta}
            </span>
            <div style={{ fontSize: "11px", color: "#e0e7ff", marginTop: "4px" }}>
              Term GPA: <strong>{simSemesterGPA}</strong>
            </div>
          </div>
        </div>

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
            <span style={{ color: "#c7d2fe" }}>Current CGPA:</span>
            <div style={{ fontWeight: "700" }}>{currentGPA.toFixed(2)}</div>
          </div>
          <div>
            <span style={{ color: "#c7d2fe" }}>Simulated Credits:</span>
            <div style={{ fontWeight: "700" }}>+{simCredits} hrs</div>
          </div>
          <div>
            <span style={{ color: "#c7d2fe" }}>New Standing:</span>
            <div style={{ fontWeight: "700", color: Number(projectedCumulativeGPA) >= 3.65 ? "#34d399" : "#ffffff" }}>
              {Number(projectedCumulativeGPA) >= 3.65 ? "Dean's List" : Number(projectedCumulativeGPA) >= 2.0 ? "Good Standing" : "Warning"}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Target Presets */}
      <div className="sis-card" style={{ padding: "12px" }}>
        <div style={{ fontSize: "12px", fontWeight: "700", color: "#475569", marginBottom: "6px" }}>
          Target Grade Scenarios
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          {["A", "A-", "B+", "B", "C+"].map((grade) => (
            <button
              key={grade}
              onClick={() => applyPreset(grade)}
              style={{
                flex: 1,
                padding: "6px",
                borderRadius: "8px",
                background: "#f1f5f9",
                fontSize: "12px",
                fontWeight: "700",
                color: "#1e293b",
                transition: "all 0.15s"
              }}
            >
              All {grade}
            </button>
          ))}
        </div>
      </div>

      {/* Planned Course Simulator Table */}
      <div className="sis-card">
        <div className="sis-card-header">
          <span className="sis-card-title">
            <Calculator size={16} color="#4f46e5" /> Planned Term Courses
          </span>
          <button
            onClick={addCourseRow}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              color: "#2563eb",
              fontSize: "12px",
              fontWeight: "700"
            }}
          >
            <Plus size={14} /> Add Course
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {courses.map((course, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#f8fafc",
                padding: "10px",
                borderRadius: "12px",
                border: "1px solid #e2e8f0"
              }}
            >
              <input
                type="text"
                value={course.course_name}
                onChange={(e) => updateCourse(idx, "course_name", e.target.value)}
                style={{ flex: 1, padding: "6px 8px", fontSize: "12px" }}
              />
              <select
                value={course.credits}
                onChange={(e) => updateCourse(idx, "credits", Number(e.target.value))}
                style={{ width: "65px", padding: "6px", fontSize: "12px" }}
              >
                <option value={1}>1 cr</option>
                <option value={2}>2 cr</option>
                <option value={3}>3 cr</option>
                <option value={4}>4 cr</option>
              </select>
              <select
                value={course.expected_grade}
                onChange={(e) => updateCourse(idx, "expected_grade", e.target.value)}
                style={{ width: "68px", padding: "6px", fontSize: "12px", fontWeight: "700" }}
              >
                {Object.keys(gradePoints).map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              <button
                onClick={() => removeCourseRow(idx)}
                style={{ color: "#ef4444", padding: "4px" }}
                title="Remove course"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
