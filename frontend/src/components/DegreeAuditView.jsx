import React, { useState, useEffect } from "react";
import { 
  GitBranch, 
  CheckCircle2, 
  Lock, 
  Clock, 
  Award, 
  Layers, 
  Check, 
  ArrowRight 
} from "lucide-react";
import { fetchPrerequisiteTree } from "../api";

export default function DegreeAuditView({ student, degreeAudit }) {
  const [treeData, setTreeData] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    if (student?.student_id) {
      fetchPrerequisiteTree(student.student_id)
        .then((data) => setTreeData(data))
        .catch((err) => console.warn("Tree load error:", err));
    }
  }, [student?.student_id]);

  if (!degreeAudit) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px", color: "#64748b" }}>
        Loading degree audit...
      </div>
    );
  }

  const { graduation_summary, major_core_progress, year_level_breakdown = {} } = degreeAudit;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Degree Audit Summary Banner */}
      <div className="sis-card" style={{ background: "linear-gradient(135deg, #047857, #10b981)", color: "#ffffff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: "11px", color: "#d1fae5", textTransform: "uppercase", fontWeight: "700" }}>
              Graduation Degree Audit
            </div>
            <div style={{ fontSize: "22px", fontWeight: "800", marginTop: "2px" }}>
              {graduation_summary?.earned_credits} / {graduation_summary?.total_required_credits} Credits
            </div>
            <div style={{ fontSize: "12px", color: "#ecfdf5", marginTop: "2px" }}>
              {graduation_summary?.remaining_credits} credits remaining (~{graduation_summary?.estimated_semesters_remaining} terms)
            </div>
          </div>
          <span className="badge badge-emerald" style={{ background: "#ffffff", color: "#065f46" }}>
            {graduation_summary?.status || "On Track"}
          </span>
        </div>

        {/* Progress Bar */}
        <div style={{ marginTop: "10px" }}>
          <div style={{
            width: "100%",
            height: "10px",
            background: "rgba(255,255,255,0.25)",
            borderRadius: "999px",
            overflow: "hidden"
          }}>
            <div style={{
              width: `${Math.min(100, graduation_summary?.overall_completion_pct || 0)}%`,
              height: "100%",
              background: "#ffffff",
              borderRadius: "999px"
            }} />
          </div>
          <div style={{ textAlign: "right", fontSize: "11px", color: "#ecfdf5", marginTop: "4px" }}>
            {graduation_summary?.overall_completion_pct}% of total degree completed
          </div>
        </div>
      </div>

      {/* Year-Level Requirement Breakdown */}
      <div className="sis-card">
        <div className="sis-card-header">
          <span className="sis-card-title">
            <Layers size={16} color="#2563eb" /> Academic Year Milestones
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {Object.entries(year_level_breakdown).map(([yearLabel, info]) => (
            <div key={yearLabel} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "600" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  {info.is_completed ? (
                    <CheckCircle2 size={14} color="#10b981" />
                  ) : (
                    <Clock size={14} color="#64748b" />
                  )}
                  {yearLabel} Curriculum
                </span>
                <span style={{ color: info.is_completed ? "#10b981" : "#2563eb" }}>
                  {info.earned_credits} / {info.total_required_credits} cr ({info.completion_pct}%)
                </span>
              </div>
              <div style={{
                width: "100%",
                height: "6px",
                background: "#f1f5f9",
                borderRadius: "999px",
                overflow: "hidden"
              }}>
                <div style={{
                  width: `${Math.min(100, info.completion_pct)}%`,
                  height: "100%",
                  background: info.is_completed ? "#10b981" : "#3b82f6",
                  borderRadius: "999px"
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Prerequisite Tree DAG Visualizer */}
      <div className="sis-card">
        <div className="sis-card-header">
          <span className="sis-card-title">
            <GitBranch size={16} color="#7c3aed" /> Prerequisite DAG Roadmap
          </span>
          <span style={{ fontSize: "11px", color: "#64748b" }}>
            Tap course to view path
          </span>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", fontSize: "10px", fontWeight: "600" }}>
          <span className="badge badge-emerald"><Check size={10} /> Completed</span>
          <span className="badge badge-blue"><Clock size={10} /> In Progress</span>
          <span className="badge badge-purple"><Award size={10} /> Unlocked</span>
          <span className="badge" style={{ background: "#f1f5f9", color: "#64748b" }}><Lock size={10} /> Locked</span>
        </div>

        {/* Tree Nodes List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxHeight: "320px", overflowY: "auto", paddingRight: "4px" }}>
          {treeData?.nodes?.map((node) => {
            const isSelected = selectedNode?.id === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node)}
                style={{
                  background: isSelected ? "#eff6ff" : "#ffffff",
                  border: isSelected ? "1.5px solid #2563eb" : "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "10px 12px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "all 0.2s"
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontWeight: "800", fontSize: "13px", color: "#0f172a" }}>{node.id}</span>
                    <span style={{ fontSize: "11px", color: "#64748b" }}>• Year {node.year_level} ({node.credits} cr)</span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#334155", marginTop: "2px" }}>
                    {node.label}
                  </div>
                  {node.prerequisite && (
                    <div style={{ fontSize: "10px", color: "#64748b", marginTop: "2px" }}>
                      Prerequisite: <strong>{node.prerequisite}</strong>
                    </div>
                  )}
                </div>

                <div>
                  {node.status === "completed" && (
                    <span className="badge badge-emerald">
                      Passed ({node.grade_info?.letter_grade || "A"})
                    </span>
                  )}
                  {node.status === "in_progress" && (
                    <span className="badge badge-blue">Enrolled</span>
                  )}
                  {node.status === "eligible" && (
                    <span className="badge badge-purple">Unlocked</span>
                  )}
                  {node.status === "locked" && (
                    <span className="badge" style={{ background: "#f1f5f9", color: "#94a3b8" }}>
                      <Lock size={11} /> Locked
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Node Details Box */}
        {selectedNode && (
          <div style={{
            background: "#f8fafc",
            border: "1px solid #cbd5e1",
            borderRadius: "10px",
            padding: "10px",
            fontSize: "12px"
          }}>
            <div style={{ fontWeight: "700", color: "#0f172a" }}>
              {selectedNode.id} - {selectedNode.label}
            </div>
            <div style={{ color: "#475569", marginTop: "4px" }}>
              Status: <strong>{selectedNode.status.toUpperCase()}</strong> | Credits: <strong>{selectedNode.credits}</strong>
            </div>
            {selectedNode.prerequisite ? (
              <div style={{ color: "#2563eb", marginTop: "2px" }}>
                Unlocks after passing: <strong>{selectedNode.prerequisite}</strong>
              </div>
            ) : (
              <div style={{ color: "#059669", marginTop: "2px" }}>
                No prerequisite bottlenecks. Foundational course.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
