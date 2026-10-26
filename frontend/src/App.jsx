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
import { Smartphone, Monitor, CheckCircle, AlertCircle } from "lucide-react";
import "./App.css";

export default function App() {
  const [studentId, setStudentId] = useState("FCDS20260001");
  const [student, setStudent] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [degreeAudit, setDegreeAudit] = useState(null);
  const [activeTab, setActiveTab] = useState("home");
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const [isExpandedView, setIsExpandedView] = useState(false);
  const [backendOnline, setBackendOnline] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStudentData(studentId);
  }, [studentId]);

  const loadStudentData = async (id) => {
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
      setBackendOnline(true);
    } catch (err) {
      console.warn("Could not load backend data, checking fallback:", err);
      setBackendOnline(false);
      // Fallback mock student to prevent any blank screen
      setStudent({
        student_id: id,
        student_name: "Adam Ibrahim Shehata El-Naggar",
        department_name: "Data Science & Artificial Intelligence",
        department_id: "10",
        year_level: 1,
        gpa: 3.05,
        academic_standing: "Good Standing",
        mbti: "ENFJ",
        learning_style: "Auditory",
        advising_notes: "Eligible for standard semester registration."
      });
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
          {backendOnline ? (
            <>
              <CheckCircle size={13} color="#10b981" />
              <span style={{ color: "#34d399", fontWeight: "600" }}>FastAPI Backend (8000) Online</span>
            </>
          ) : (
            <>
              <AlertCircle size={13} color="#f59e0b" />
              <span style={{ color: "#fbbf24", fontWeight: "600" }}>Offline Mode (Fallback Data)</span>
            </>
          )}
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
