import React, { useState, useRef, useEffect } from "react";
import { 
  Send, 
  Sparkles, 
  Sliders, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check, 
  BookOpen, 
  Code2, 
  Target, 
  GraduationCap, 
  Trash2, 
  RotateCcw,
  Zap,
  HelpCircle,
  Cpu,
  ChevronDown,
  ChevronUp,
  Award,
  AlertTriangle,
  BookCheck,
  CheckCircle2
} from "lucide-react";
import { sendChatMessage, fetchStudentAcademicContext } from "../api";
import { Student, ChatMessage, StudentAcademicContext } from "../types";

interface ChatbotViewProps {
  student: Student | null;
}

type TutorMode = "concept" | "code" | "quiz" | "policy";

export default function ChatbotView({ student }: ChatbotViewProps) {
  const [academicContext, setAcademicContext] = useState<StudentAcademicContext | null>(null);
  const [showDossier, setShowDossier] = useState(false);
  const [mode, setMode] = useState<TutorMode>("concept");
  const [customStyle, setCustomStyle] = useState(student?.learning_style || "Visual");
  const temperature = 0.4;
  const [showSettings, setShowSettings] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [speakingIdx, setSpeakingIdx] = useState<number | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [activeTopicTab, setActiveTopicTab] = useState<string>("CS Core");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load student academic context whenever student changes
  useEffect(() => {
    if (student?.student_id) {
      fetchStudentAcademicContext(student.student_id).then((ctx) => {
        setAcademicContext(ctx);
        setCustomStyle(student.learning_style || "Visual");
      });
    }
  }, [student?.student_id]);

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Initialize or re-initialize welcome message with live academic data
  useEffect(() => {
    const studentName = student?.student_name || "Student";
    const dept = student?.department_name || "Faculty of Computer & Data Sciences";
    const yr = student?.year_level || 1;
    const gpa = student?.gpa ? Number(student.gpa).toFixed(2) : "3.05";
    const standing = student?.academic_standing || "Good Standing";
    const earned = academicContext?.earned_credits || (Number(yr) * 30);
    const passedCount = academicContext?.passed_courses?.length || 0;
    const failedCount = academicContext?.failed_courses?.length || 0;

    setMessages([
      {
        sender: "ai",
        text: `Hello ${studentName}! I am your AI Academic Tutor & Senior SIS Advisor for ${dept}.
        
🎓 **Live Academic Context Window Active**:
• **Program:** ${dept} • Year ${yr}
• **Academic Status:** CGPA **${gpa} / 4.00** (${standing})
• **Degree Benchmark:** **${earned} / 120 credits completed** (${passedCount} passed courses on record)
${failedCount > 0 ? `• ⚠️ **Notice:** ${failedCount} course requires retake. I will prioritize grade recovery in our advising.` : `• ✅ **Transcript:** Clean prerequisite record with 0 failed bottleneck courses.`}
• **Cognitive Profile:** ${student?.mbti || "INTJ"} • ${customStyle} Learner

Your performance history is automatically injected into every inquiry. How can I assist your studies today?`,
        source: "Gemini 3.8 Flash (Tutor Engine)",
        similarity: 0.99,
        category: "Advising",
        suggestedQuestions: [
          `How does my ${gpa} CGPA impact my next term registration?`,
          "Explain QuickSort and its time complexity",
          "What are ACID properties in database systems?"
        ]
      }
    ]);
  }, [student?.student_id, academicContext?.earned_credits]);

  const topicTrays: Record<string, string[]> = {
    "CS Core": [
      "Explain QuickSort vs MergeSort with time complexity",
      "How do Hash Tables resolve collisions?",
      "What is the difference between TCP and UDP?"
    ],
    "Databases & AI": [
      "What are ACID properties in database management?",
      "How does backpropagation work in deep neural networks?",
      "Explain SQL JOIN vs Subquery optimization"
    ],
    "Academic Policy": [
      "What is the policy for repeating a failed course?",
      "What is the minimum CGPA to avoid academic probation?",
      "Can non-SIM students take SIM courses?"
    ]
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSend = async (promptToSend?: string) => {
    const text = promptToSend || input;
    if (!text.trim() || loading) return;

    const userMessage: ChatMessage = { 
      sender: "user", 
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    if (!promptToSend) setInput("");
    setLoading(true);

    try {
      const historyTurns = updatedMessages.map(m => ({ sender: m.sender, text: m.text }));
      const data = await sendChatMessage(
        text,
        student?.student_id,
        student?.mbti,
        customStyle,
        temperature,
        mode,
        historyTurns
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.answer,
          source: data.source,
          similarity: data.similarity_score,
          category: data.category,
          suggestedQuestions: data.suggested_questions,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `Apologies, I encountered a temporary connection issue. Please try again. (Details: ${err.message})`,
          source: "System Fallback"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSpeak = (text: string, idx: number) => {
    if (!("speechSynthesis" in window)) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }

    if (speakingIdx === idx) {
      window.speechSynthesis.cancel();
      setSpeakingIdx(null);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = text
      .replace(/###\s*💡\s*Suggested Follow-up Inquiries[\s\S]*$/i, "")
      .replace(/[#*`_~]/g, "")
      .replace(/\[.*?\]\(.*?\)/g, "");

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onend = () => setSpeakingIdx(null);
    utterance.onerror = () => setSpeakingIdx(null);

    setSpeakingIdx(idx);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const handleClearChat = () => {
    if (confirm("Reset conversation with your AI Academic Tutor?")) {
      window.speechSynthesis?.cancel();
      setSpeakingIdx(null);
      setMessages([
        {
          sender: "ai",
          text: `Conversation reset. Your academic dossier for ${student?.department_name} is active. Ask me any question or explore degree pathways!`,
          source: "Gemini 3.8 Flash (Tutor Engine)",
          suggestedQuestions: [
            "Explain Dynamic Programming with an example",
            "How do I simulate a higher GPA next semester?",
            "What are the prerequisites for Machine Learning?"
          ]
        }
      ]);
    }
  };

  const renderMessageContent = (content: string) => {
    const mainBody = content.replace(/###\s*💡\s*Suggested Follow-up Inquiries[\s\S]*$/i, "").trim();

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", lineHeight: "1.5" }}>
        {mainBody.split("\n\n").map((paragraph, pIdx) => {
          if (paragraph.startsWith("```")) {
            const lines = paragraph.split("\n");
            const lang = lines[0].replace("```", "").trim() || "code";
            const codeContent = lines.slice(1, -1).join("\n") || paragraph.replace(/```/g, "");
            return (
              <div key={pIdx} style={{
                background: "#0f172a",
                color: "#e2e8f0",
                borderRadius: "8px",
                padding: "10px 12px",
                fontFamily: "monospace",
                fontSize: "12px",
                overflowX: "auto",
                position: "relative",
                border: "1px solid #1e293b"
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#94a3b8",
                  fontSize: "10px",
                  borderBottom: "1px solid #334155",
                  paddingBottom: "4px",
                  marginBottom: "6px"
                }}>
                  <span>{lang.toUpperCase()}</span>
                  <span>PREVIEW</span>
                </div>
                <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{codeContent}</pre>
              </div>
            );
          }

          if (paragraph.startsWith("•") || paragraph.startsWith("- ") || paragraph.startsWith("1.")) {
            return (
              <div key={pIdx} style={{ paddingLeft: "4px" }}>
                {paragraph.split("\n").map((line, lIdx) => (
                  <div key={lIdx} style={{ marginTop: "3px" }}>
                    {formatInlineText(line)}
                  </div>
                ))}
              </div>
            );
          }

          return (
            <div key={pIdx}>
              {formatInlineText(paragraph)}
            </div>
          );
        })}
      </div>
    );
  };

  const formatInlineText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\`.*?\`)/g);
    return parts.map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={idx} style={{ color: "#0f172a", fontWeight: "700" }}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={idx} style={{
            background: "#f1f5f9",
            color: "#0f172a",
            padding: "1px 5px",
            borderRadius: "4px",
            fontFamily: "monospace",
            fontSize: "12px",
            border: "1px solid #e2e8f0"
          }}>
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  const earnedCredits = academicContext?.earned_credits ?? (Number(student?.year_level || 1) * 30);
  const totalCredits = academicContext?.total_required_credits ?? 120;
  const passedCoursesCount = academicContext?.passed_courses?.length ?? 0;
  const failedCoursesCount = academicContext?.failed_courses?.length ?? 0;

  return (
    <div className="chat-container">
      {/* Live Injected Academic Performance Dossier Card */}
      <div style={{
        background: "linear-gradient(135deg, #1e293b, #0f172a)",
        borderRadius: "14px",
        padding: "10px 14px",
        color: "#ffffff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#10b981",
              boxShadow: "0 0 8px #10b981"
            }} />
            <div>
              <div style={{ fontSize: "11px", fontWeight: "700", color: "#60a5fa", display: "flex", alignItems: "center", gap: "4px" }}>
                <span>Live Academic Context Injected</span>
              </div>
              <div style={{ fontSize: "11px", color: "#cbd5e1" }}>
                CGPA <strong>{student?.gpa ? Number(student.gpa).toFixed(2) : "3.00"}</strong> • {earnedCredits}/{totalCredits} cr • {passedCoursesCount} passed
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowDossier(!showDossier)}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "8px",
              color: "#ffffff",
              padding: "4px 8px",
              fontSize: "10px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              cursor: "pointer"
            }}
          >
            <span>{showDossier ? "Hide Dossier" : "View Context"}</span>
            {showDossier ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
        </div>

        {/* Expandable Dossier Breakdown */}
        {showDossier && academicContext && (
          <div style={{
            marginTop: "10px",
            paddingTop: "10px",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            fontSize: "11px"
          }}>
            {/* Quick Metrics Bar */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>
              <div style={{ background: "rgba(255,255,255,0.06)", padding: "6px 8px", borderRadius: "6px" }}>
                <span style={{ color: "#94a3b8", fontSize: "10px" }}>Degree Progress:</span>
                <div style={{ fontWeight: "700", color: "#34d399" }}>{academicContext.completion_pct}%</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.06)", padding: "6px 8px", borderRadius: "6px" }}>
                <span style={{ color: "#94a3b8", fontSize: "10px" }}>Standing:</span>
                <div style={{ fontWeight: "700", color: "#60a5fa" }}>{academicContext.academic_standing}</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.06)", padding: "6px 8px", borderRadius: "6px" }}>
                <span style={{ color: "#94a3b8", fontSize: "10px" }}>Attendance:</span>
                <div style={{ fontWeight: "700", color: "#f8fafc" }}>{academicContext.activity_metrics.avg_attendance_pct}%</div>
              </div>
            </div>

            {/* Completed Course History */}
            <div>
              <span style={{ color: "#94a3b8", fontWeight: "600" }}>Verified Passed Courses ({academicContext.passed_courses.length}):</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "4px", maxHeight: "75px", overflowY: "auto" }}>
                {academicContext.passed_courses.map((c) => (
                  <span
                    key={c.course_id}
                    style={{
                      background: "rgba(16, 185, 129, 0.2)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      color: "#a7f3d0",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontSize: "10px"
                    }}
                  >
                    {c.course_id} ({c.grade || "Pass"})
                  </span>
                ))}
              </div>
            </div>

            {/* Failed / Retake Bottlenecks */}
            {academicContext.failed_courses.length > 0 ? (
              <div style={{ background: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.3)", borderRadius: "6px", padding: "6px 8px" }}>
                <span style={{ color: "#fca5a5", fontWeight: "700" }}>⚠️ Attention - Retake Bottlenecks:</span>
                <div style={{ color: "#fecdd3", fontSize: "10px", marginTop: "2px" }}>
                  {academicContext.failed_courses.map(c => `${c.course_id}: ${c.course_name} (Grade: ${c.grade})`).join(", ")}
                </div>
              </div>
            ) : (
              <div style={{ color: "#34d399", fontSize: "10px", display: "flex", alignItems: "center", gap: "4px" }}>
                <CheckCircle2 size={12} />
                <span>Zero failed courses on record. All prerequisite sequences fulfilled!</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Tutor Mode Selector Bar */}
      <div style={{
        display: "flex",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "14px",
        padding: "4px",
        gap: "4px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.03)"
      }}>
        {[
          { id: "concept", label: "Concept", icon: BookOpen },
          { id: "code", label: "Code & Big-O", icon: Code2 },
          { id: "quiz", label: "Practice Quiz", icon: Target },
          { id: "policy", label: "Degree Rules", icon: GraduationCap },
        ].map((m) => {
          const Icon = m.icon;
          const isActive = mode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setMode(m.id as TutorMode)}
              style={{
                flex: 1,
                padding: "6px 4px",
                borderRadius: "10px",
                border: "none",
                fontSize: "11px",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
                background: isActive ? "linear-gradient(135deg, #2563eb, #1d4ed8)" : "transparent",
                color: isActive ? "#ffffff" : "#475569",
                transition: "all 0.15s"
              }}
            >
              <Icon size={13} />
              <span>{m.label}</span>
            </button>
          );
        })}
      </div>

      {/* Persona Customizer Banner */}
      <div className="sis-card" style={{ padding: "10px 14px", background: "#f8fafc" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="badge badge-purple" style={{ fontSize: "10px" }}>{student?.mbti || "INTJ"} Persona</span>
            <span className="badge badge-blue" style={{ fontSize: "10px" }}>{customStyle} Learner</span>
            <span className="badge badge-emerald" style={{ fontSize: "10px" }}>Mode: {mode.toUpperCase()}</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              onClick={() => setShowSettings(!showSettings)}
              style={{ color: "#64748b", display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", fontWeight: "600" }}
              title="Configure tutoring parameters"
            >
              <Sliders size={13} />
              <span>{showSettings ? "Hide" : "Tune"}</span>
            </button>
            <button
              onClick={handleClearChat}
              style={{ color: "#94a3b8", padding: "2px" }}
              title="Reset conversation"
            >
              <Trash2 size={13} />
            </button>
          </div>
        </div>

        {/* Collapsible Tuning Controls */}
        {showSettings && (
          <div style={{ marginTop: "10px", paddingTop: "8px", borderTop: "1px solid #e2e8f0", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "600" }}>Learning Style:</span>
              <div style={{ display: "flex", gap: "4px" }}>
                {["Visual", "Auditory", "Kinesthetic", "Reading/Writing"].map((style) => (
                  <button
                    key={style}
                    onClick={() => setCustomStyle(style)}
                    style={{
                      padding: "3px 8px",
                      borderRadius: "6px",
                      fontSize: "10px",
                      fontWeight: "700",
                      background: customStyle === style ? "#2563eb" : "#e2e8f0",
                      color: customStyle === style ? "#ffffff" : "#475569"
                    }}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>

      {/* Topical Curriculum Quick Tray */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ display: "flex", gap: "6px", borderBottom: "1px solid #e2e8f0", paddingBottom: "4px" }}>
          {Object.keys(topicTrays).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTopicTab(tab)}
              style={{
                fontSize: "11px",
                fontWeight: activeTopicTab === tab ? "700" : "500",
                color: activeTopicTab === tab ? "#2563eb" : "#64748b",
                borderBottom: activeTopicTab === tab ? "2px solid #2563eb" : "none",
                paddingBottom: "2px"
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "2px" }}>
          {topicTrays[activeTopicTab].map((qp, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(qp)}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "14px",
                padding: "5px 10px",
                fontSize: "11px",
                color: "#334155",
                whiteSpace: "nowrap",
                boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}
            >
              <Zap size={11} color="#2563eb" />
              <span>{qp}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="chat-messages-area">
        {messages.map((m, idx) => {
          const isUser = m.sender === "user";
          return (
            <div
              key={idx}
              className={`chat-bubble ${isUser ? "chat-bubble-user" : "chat-bubble-ai"}`}
              style={{ position: "relative" }}
            >
              {!isUser && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <div className="chat-source-tag" style={{ margin: 0 }}>
                    <Sparkles size={11} />
                    <span>{m.source || "Gemini 3.8 Flash (Tutor Engine)"}</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <button
                      onClick={() => handleSpeak(m.text, idx)}
                      style={{
                        padding: "3px 6px",
                        borderRadius: "6px",
                        background: speakingIdx === idx ? "#fee2e2" : "#f1f5f9",
                        color: speakingIdx === idx ? "#ef4444" : "#475569",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                        fontSize: "10px",
                        fontWeight: "600"
                      }}
                      title={speakingIdx === idx ? "Stop audio read-aloud" : "Read explanation aloud"}
                    >
                      {speakingIdx === idx ? <VolumeX size={12} /> : <Volume2 size={12} />}
                      <span>{speakingIdx === idx ? "Stop" : "Listen"}</span>
                    </button>

                    <button
                      onClick={() => handleCopy(m.text, idx)}
                      style={{
                        padding: "3px 6px",
                        borderRadius: "6px",
                        background: copiedIdx === idx ? "#ecfdf5" : "#f1f5f9",
                        color: copiedIdx === idx ? "#059669" : "#475569",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                        fontSize: "10px",
                        fontWeight: "600"
                      }}
                      title="Copy explanation"
                    >
                      {copiedIdx === idx ? <Check size={12} /> : <Copy size={12} />}
                      <span>{copiedIdx === idx ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Rendered Markdown Body */}
              {renderMessageContent(m.text)}

              {/* Interactive Follow-up Question Chips */}
              {!isUser && m.suggestedQuestions && m.suggestedQuestions.length > 0 && (
                <div style={{
                  marginTop: "12px",
                  paddingTop: "10px",
                  borderTop: "1px solid #f1f5f9",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px"
                }}>
                  <div style={{ fontSize: "10px", fontWeight: "700", color: "#64748b", textTransform: "uppercase" }}>
                    💡 Suggested Follow-up Questions:
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {m.suggestedQuestions.map((sq, sqIdx) => (
                      <button
                        key={sqIdx}
                        onClick={() => handleSend(sq)}
                        style={{
                          textAlign: "left",
                          background: "#f8fafc",
                          border: "1px solid #e2e8f0",
                          borderRadius: "8px",
                          padding: "6px 10px",
                          fontSize: "11px",
                          color: "#1e40af",
                          fontWeight: "500",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          transition: "all 0.15s"
                        }}
                      >
                        <HelpCircle size={12} color="#3b82f6" />
                        <span>{sq}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {m.timestamp && (
                <div style={{
                  fontSize: "9px",
                  color: isUser ? "rgba(255,255,255,0.7)" : "#94a3b8",
                  textAlign: "right",
                  marginTop: "6px"
                }}>
                  {m.timestamp}
                </div>
              )}
            </div>
          );
        })}

        {loading && (
          <div className="chat-bubble chat-bubble-ai" style={{ color: "#64748b", display: "flex", alignItems: "center", gap: "8px" }}>
            <Cpu size={16} className="animate-spin" color="#2563eb" />
            <span>AI Tutor is analyzing your academic transcript & formulating response...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Message Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="chat-input-row"
      >
        <input
          type="text"
          className="chat-input"
          placeholder={
            mode === "concept" ? "Ask about algorithms, databases, or computing concepts..." :
            mode === "code" ? "Ask for code examples, debugging, or Big-O analysis..." :
            mode === "quiz" ? "Request a practice problem or ask for an exam-style quiz..." :
            "Ask about CGPA, repeating courses, or ANU FCDS degree rules..."
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="chat-send-btn" disabled={loading} title="Send question">
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
