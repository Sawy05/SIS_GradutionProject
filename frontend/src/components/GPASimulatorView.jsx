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

export default function GPASimulatorView({ student, analytics }) {
  const [courses, setCourses] = useState([
    { course_name: "Advanced Algorithm Design", credits: 3, expected_grade: "A" },
    { course_name: "Distributed Systems & Cloud", credits: 4, expected_grade: "B+" },
    { course_name: "Machine Learning Elective", credits: 3, expected_grade: "A-" },
    { course_name: "Technical Communication", credits: 2, expected_grade: "A" }
  ]);

  const [simulationResult, setSimulationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const gradePoints = {
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
  const gpaDelta = (projectedCumulativeGPA - currentGPA).toFixed(2);

  const addCourseRow = () => {
    setCourses([...courses, { course_name: `Planned Elective ${courses.length + 1}`, credits: 3, expected_grade: "B+" }]);
  };

  const removeCourseRow = (idx) => {
    setCourses(courses.filter((_, i) => i !== idx));
  };

  const updateCourse = (idx, field, value) => {
    const updated = [...courses];
    updated[idx][field] = value;
    setCourses(updated);
  };

  const applyPreset = (grade) => {
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
              background: gpaDelta >= 0 ? "rgba(16, 185, 129, 0.25)" : "rgba(239, 68, 68, 0.25)",
              color: "#ffffff",
              padding: "4px 10px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "700"
            }}>
              <TrendingUp size={13} /> {gpaDelta >= 0 ? `+${gpaDelta}` : gpaDelta}
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
          borderTop: "1px solid rgba(255,255,255,0.2)",
          fontSize: "11px",
          color: "#e0e7ff"
        }}>
          <div>
            <div>Current GPA</div>
            <div style={{ fontWeight: "700", color: "#ffffff" }}>{currentGPA.toFixed(2)}</div>
          </div>
          <div>
            <div>Simulated Credits</div>
            <div style={{ fontWeight: "700", color: "#ffffff" }}>{simCredits} credits</div>
          </div>
          <div>
            <div>Total Earned</div>
            <div style={{ fontWeight: "700", color: "#ffffff" }}>{projectedTotalCredits} cr</div>
          </div>
        </div>
      </div>

      {/* Preset Quick Actions */}
      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
        <span style={{ fontSize: "11px", fontWeight: "700", color: "#64748b" }}>Quick Presets:</span>
        <button
          onClick={() => applyPreset("A")}
          style={{ background: "#ecfdf5", color: "#065f46", padding: "4px 8px", borderRadius: "8px", fontSize: "11px", fontWeight: "600" }}
        >
          All A's
        </button>
        <button
          onClick={() => applyPreset("B+")}
          style={{ background: "#eff6ff", color: "#1e40af", padding: "4px 8px", borderRadius: "8px", fontSize: "11px", fontWeight: "600" }}
        >
          All B+'s
        </button>
        <button
          onClick={() => applyPreset("C")}
          style={{ background: "#fffbeb", color: "#92400e", padding: "4px 8px", borderRadius: "8px", fontSize: "11px", fontWeight: "600" }}
        >
          Baseline C's
        </button>
      </div>

      {/* Courses Schedule Simulator Table */}
      <div className="sis-card">
        <div className="sis-card-header">
          <span className="sis-card-title">
            <Calculator size={16} color="#6366f1" /> Planned Upcoming Courses
          </span>
          <button
            onClick={addCourseRow}
            style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#6366f1", fontWeight: "700" }}
          >
            <Plus size={14} /> Add Course
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {courses.map((course, idx) => (
            <div
              key={idx}
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <input
                  type="text"
                  value={course.course_name}
                  onChange={(e) => updateCourse(idx, "course_name", e.target.value)}
                  style={{ flex: 1, fontWeight: "600", fontSize: "13px", border: "none", background: "transparent", padding: 0 }}
                  placeholder="Course Title"
                />
                <button onClick={() => removeCourseRow(idx)} style={{ color: "#94a3b8" }}>
                  <Trash2 size={14} />
                </button>
              </div>

              <div style={{ display: "flex", gap: "8px" }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: "10px", color: "#64748b", fontWeight: "700" }}>CREDITS</label>
                  <select
                    value={course.credits}
                    onChange={(e) => updateCourse(idx, "credits", Number(e.target.value))}
                    style={{ width: "100%", padding: "4px 6px", fontSize: "12px" }}
                  >
                    <option value={1}>1 Credit</option>
                    <option value={2}>2 Credits</option>
                    <option value={3}>3 Credits</option>
                    <option value={4}>4 Credits</option>
                  </select>
                </div>

                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: "10px", color: "#64748b", fontWeight: "700" }}>EXPECTED GRADE</label>
                  <select
                    value={course.expected_grade}
                    onChange={(e) => updateCourse(idx, "expected_grade", e.target.value)}
                    style={{ width: "100%", padding: "4px 6px", fontSize: "12px" }}
                  >
                    {Object.keys(gradePoints).map((g) => (
                      <option key={g} value={g}>{g} ({gradePoints[g].toFixed(1)})</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advice Note */}
      <div style={{ background: "#f8fafc", padding: "10px 12px", borderRadius: "10px", fontSize: "11px", color: "#64748b" }}>
        <strong>Academic Tip:</strong> Retaking earlier failed courses can replace 'F' (0.0) with 'A' (4.0), providing an accelerated boost to your overall standing.
      </div>
    </div>
  );
}
