import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import HomeView from "./components/HomeView";
import AnalyticsView from "./components/AnalyticsView";
import RecommenderView from "./components/RecommenderView";
import ChatbotView from "./components/ChatbotView";
import DegreeAuditView from "./components/DegreeAuditView";
import GPASimulatorView from "./components/GPASimulatorView";
import StudentSwitcherModal from "./components/StudentSwitcherModal";
import { 
  fetchStudentDetail, 
  fetchAnalytics, 
  fetchRecommendations, 
  fetchDegreeAudit 
} from "./api";
import { Student, AnalyticsResponse, RecommendationsResponse, DegreeAuditResponse } from "./types";
import { Smartphone, Monitor, CheckCircle } from "lucide-react";
import "./App.css";

export default function App() {
  const [studentId, setStudentId] = useState("FCDS20260001");
  const [student, setStudent] = useState<Student | null>(null);
  const [analytics, setAnalytics] = useState<AnalyticsResponse | null>(null);
  const [recommendations, setRecommendations] = useState<RecommendationsResponse | null>(null);
  const [degreeAudit, setDegreeAudit] = useState<DegreeAuditResponse | null>(null);
  const [activeTab, setActiveTab] = useState("home");
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const [isExpandedView, setIsExpandedView] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStudentData(studentId);
  }, [studentId]);

  const loadStudentData = async (id: string) => {
    setLoading(true);
    try {
      const [sData, aData, rData, dData] = await Promise.all([
        fetchStudentDetail(id),
        fetchAnalytics(id),
        fetchRecommendations(id, 6),
        fetchDegreeAudit(id)
      ]);
      setStudent(sData);
      setAnalytics(aData);
      setRecommendations(rData);
      setDegreeAudit(dData);
    } catch (err) {
      console.warn("Could not load student data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-wrapper">
      {/* Viewport & Environment Controls */}
      <div className="viewport-controls">
        <button
          className="viewport-toggle-btn"
          onClick={() => setIsExpandedView(!isExpandedView)}
        >
          {isExpandedView ? <Smartphone size={14} /> : <Monitor size={14} />}
          <span>{isExpandedView ? "Mobile Shell (390px)" : "Desktop/Tablet View"}</span>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px" }}>
          <CheckCircle size={13} color="#10b981" />
          <span style={{ color: "#34d399", fontWeight: "600" }}>SIS Academic Engine Online</span>
        </div>
      </div>

      {/* Main Mobile App Frame */}
      <div className={`mobile-shell ${isExpandedView ? "expanded-view" : ""}`}>
        {/* Top Native Phone Bar & App Header */}
        <Header student={student} onOpenSwitcher={() => setIsSwitcherOpen(true)} />

        {/* Scrollable Screen Body */}
        <main className="main-scroll-view">
          {activeTab === "home" && (
            <HomeView
              student={student}
              analytics={analytics}
              degreeAudit={degreeAudit}
              onNavigate={(tab) => setActiveTab(tab)}
            />
          )}

          {activeTab === "analytics" && (
            <AnalyticsView analytics={analytics} />
          )}

          {activeTab === "recommender" && (
            <RecommenderView
              recommendations={recommendations}
              student={student}
            />
          )}

          {activeTab === "chat" && (
            <ChatbotView student={student} />
          )}

          {activeTab === "roadmap" && (
            <DegreeAuditView
              student={student}
              degreeAudit={degreeAudit}
            />
          )}

          {activeTab === "simulator" && (
            <GPASimulatorView
              student={student}
              analytics={analytics}
            />
          )}
        </main>

        {/* Bottom Tab Navigation Bar */}
        <BottomNav
          activeTab={activeTab}
          onSelectTab={(tabId) => setActiveTab(tabId)}
        />

        {/* Student Switcher Modal Drawer */}
        <StudentSwitcherModal
          isOpen={isSwitcherOpen}
          onClose={() => setIsSwitcherOpen(false)}
          currentStudentId={studentId}
          onSelectStudent={(newId) => setStudentId(newId)}
        />
      </div>
    </div>
  );
}
