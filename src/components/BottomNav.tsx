import React from "react";
import { Home, BarChart2, Compass, MessageSquare, GitBranch, Calculator } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

export default function BottomNav({ activeTab, onSelectTab }: BottomNavProps) {
  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "analytics", label: "Analytics", icon: BarChart2 },
    { id: "recommender", label: "Courses", icon: Compass },
    { id: "chat", label: "AI Tutor", icon: MessageSquare },
    { id: "roadmap", label: "Roadmap", icon: GitBranch },
    { id: "simulator", label: "GPA Calc", icon: Calculator },
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => {
        const IconComponent = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            className={`nav-tab-item ${isActive ? "active" : ""}`}
            onClick={() => onSelectTab(tab.id)}
          >
            <div className="tab-icon-wrapper">
              <IconComponent size={19} />
            </div>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
