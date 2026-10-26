import React, { useState } from "react";
import PersonalTimetableView from "./PersonalTimetableView";
import AllGroupsTimetableView from "./AllGroupsTimetableView";
import RecommendedTimetableView from "./RecommendedTimetableView";
import { User, Users, Sparkles, Calendar } from "lucide-react";

export default function TimetableModuleView({ student }) {
  const [activeSubTab, setActiveSubTab] = useState("all-groups"); // Default to all-groups or personal or recommended

  return (
    <div className="timetable-module-container" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {/* Timetable Sub-Navigation Bar */}
      <div style={{
        display: "flex",
        background: "#e2e8f0",
        padding: "4px",
        borderRadius: "14px",
        gap: "4px"
      }}>
        <button
          onClick={() => setActiveSubTab("personal")}
          style={{
            flex: 1,
            padding: "8px 6px",
            borderRadius: "10px",
            border: "none",
            fontSize: "11px",
            fontWeight: "700",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            background: activeSubTab === "personal" ? "#ffffff" : "transparent",
            color: activeSubTab === "personal" ? "#2563eb" : "#475569",
            boxShadow: activeSubTab === "personal" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
            transition: "all 0.15s"
          }}
        >
          <User size={13} />
          <span>My Timetable</span>
        </button>

        <button
          onClick={() => setActiveSubTab("all-groups")}
          style={{
            flex: 1,
            padding: "8px 6px",
            borderRadius: "10px",
            border: "none",
            fontSize: "11px",
            fontWeight: "700",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            background: activeSubTab === "all-groups" ? "#ffffff" : "transparent",
            color: activeSubTab === "all-groups" ? "#2563eb" : "#475569",
            boxShadow: activeSubTab === "all-groups" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
            transition: "all 0.15s"
          }}
        >
          <Users size={13} />
          <span>All Groups</span>
        </button>

        <button
          onClick={() => setActiveSubTab("recommended")}
          style={{
            flex: 1,
            padding: "8px 6px",
            borderRadius: "10px",
            border: "none",
            fontSize: "11px",
            fontWeight: "700",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            background: activeSubTab === "recommended" ? "linear-gradient(135deg, #2563eb, #7c3aed)" : "transparent",
            color: activeSubTab === "recommended" ? "#ffffff" : "#475569",
            boxShadow: activeSubTab === "recommended" ? "0 2px 6px rgba(37,99,235,0.25)" : "none",
            transition: "all 0.15s"
          }}
        >
          <Sparkles size={13} />
          <span>AI-Recommended ✨</span>
        </button>
      </div>

      {/* Render Active Timetable Sub-View */}
      {activeSubTab === "personal" && (
        <PersonalTimetableView 
          student={student} 
          onExploreRecommended={() => setActiveSubTab("recommended")} 
        />
      )}

      {activeSubTab === "all-groups" && (
        <AllGroupsTimetableView />
      )}

      {activeSubTab === "recommended" && (
        <RecommendedTimetableView 
          student={student} 
          onScheduleApplied={() => setActiveSubTab("personal")} 
        />
      )}
    </div>
  );
}
