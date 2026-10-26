import React from "react";
import { Sparkles, Wifi, Battery, ChevronDown, User } from "lucide-react";
import { Student } from "../types";

interface HeaderProps {
  student: Student | null;
  onOpenSwitcher: () => void;
}

export default function Header({ student, onOpenSwitcher }: HeaderProps) {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      {/* Mobile Top Status Bar */}
      <div className="status-bar">
        <span>{currentTime}</span>
        <div className="status-bar-notch" />
        <div className="status-bar-icons">
          <Wifi size={13} />
          <Battery size={14} />
        </div>
      </div>

      {/* Main App Bar */}
      <header className="app-header">
        <div className="brand-group">
          <div className="brand-logo-badge">
            <Sparkles size={20} />
          </div>
          <div>
            <div className="brand-title">Uni Assist SIS</div>
            <div className="brand-subtitle">Smart Academic SIS</div>
          </div>
        </div>

        {/* Student Switcher Button */}
        <button className="student-selector-pill" onClick={onOpenSwitcher} title="Switch active student">
          <div className="student-avatar-circle">
            {student?.student_name ? student.student_name.charAt(0) : <User size={13} />}
          </div>
          <span className="student-selector-name">
            {student?.student_name || "Select Student"}
          </span>
          <ChevronDown size={14} color="#64748b" />
        </button>
      </header>
    </>
  );
}
