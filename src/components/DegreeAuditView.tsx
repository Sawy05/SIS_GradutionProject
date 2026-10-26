import React, { useState, useEffect } from "react";
import { 
  GitBranch, 
  CheckCircle2, 
  Lock, 
  Clock, 
  Layers 
} from "lucide-react";
import { fetchPrerequisiteTree } from "../api";
import { Student, DegreeAuditResponse, PrerequisiteTreeResponse, TreeNode } from "../types";

interface DegreeAuditViewProps {
  student: Student | null;
  degreeAudit: DegreeAuditResponse | null;
}

export default function DegreeAuditView({ student, degreeAudit }: DegreeAuditViewProps) {
  const [treeData, setTreeData] = useState<PrerequisiteTreeResponse | null>(null);
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);

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

  const { graduation_summary, year_level_breakdown = {} } = degreeAudit;

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

      {/* Interactive Prerequisite Tree DAG */}
      <div className="sis-card">
        <div className="sis-card-header">
          <span className="sis-card-title">
            <GitBranch size={16} color="#7c3aed" /> Prerequisite Chain & Curriculum DAG
          </span>
          <span className="badge badge-purple">Directed Graph</span>
        </div>

        <div style={{ fontSize: "12px", color: "#64748b" }}>
          Click any course node below to inspect prerequisite constraints and unlocking requirements.
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", fontSize: "11px" }}>
          <span className="badge badge-emerald"><CheckCircle2 size={11} /> Completed</span>
          <span className="badge badge-blue"><Clock size={11} /> In Progress</span>
          <span className="badge badge-purple"><GitBranch size={11} /> Unlocked</span>
          <span className="badge" style={{ background: "#f1f5f9", color: "#64748b" }}><Lock size={11} /> Locked</span>
        </div>

        {/* Course DAG Nodes Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
          {treeData?.nodes?.map((node) => {
            const isSelected = selectedNode?.course_id === node.course_id;
            return (
              <div
                key={node.course_id}
                onClick={() => setSelectedNode(node)}
                style={{
                  border: isSelected ? "2px solid #2563eb" : "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "10px",
                  cursor: "pointer",
                  background: isSelected ? "#eff6ff" : "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  transition: "all 0.15s"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "12px", fontWeight: "800", color: "#0f172a" }}>
                    {node.course_id}
                  </span>
                  <span style={{
                    fontSize: "10px",
                    fontWeight: "700",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    background:
                      node.status === "Completed" ? "#ecfdf5" :
                      node.status === "In-Progress" ? "#eff6ff" :
                      node.status === "Unlocked" ? "#f5f3ff" : "#f1f5f9",
                    color:
                      node.status === "Completed" ? "#059669" :
                      node.status === "In-Progress" ? "#2563eb" :
                      node.status === "Unlocked" ? "#7c3aed" : "#64748b"
                  }}>
                    {node.status}
                  </span>
                </div>
                <div style={{ fontSize: "11px", color: "#334155", fontWeight: "500", lineHeight: "1.3" }}>
                  {node.course_name}
                </div>
                <div style={{ fontSize: "10px", color: "#64748b", marginTop: "2px" }}>
                  Yr {node.year_level} • {node.credits} cr
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Course Inspector Box */}
        {selectedNode && (
          <div style={{
            background: "#f8fafc",
            border: "1px solid #cbd5e1",
            borderRadius: "12px",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "6px"
          }}>
            <div style={{ fontSize: "13px", fontWeight: "800", color: "#0f172a" }}>
              {selectedNode.course_id}: {selectedNode.course_name}
            </div>
            <div style={{ fontSize: "12px", color: "#475569" }}>
              <strong>Status:</strong> {selectedNode.status}
              {selectedNode.grade && ` (Grade: ${selectedNode.grade})`}
            </div>
            <div style={{ fontSize: "12px", color: "#475569" }}>
              <strong>Prerequisite:</strong> {selectedNode.prerequisite_id ? selectedNode.prerequisite_id : "None (Foundational Entry)"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
