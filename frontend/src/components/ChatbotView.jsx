import React, { useState, useRef, useEffect } from "react";
import { 
  Send, 
  Sparkles, 
  Database, 
  Sliders, 
  Bot, 
  User, 
  Lightbulb, 
  CheckCircle2, 
  RotateCcw 
} from "lucide-react";
import { sendChatMessage } from "../api";

export default function ChatbotView({ student }) {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: `Hello ${student?.student_name || "Student"}! I am your AI Academic Tutor & SIS Advisor. I customize my explanations according to your ${student?.mbti || "INTJ"} profile and ${student?.learning_style || "Visual"} learning style. Feel free to ask about algorithms, programming, data structures, or university degree policies!`,
      source: "SIS Intelligent Academic Engine",
      similarity: null,
      category: "Advising"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState(0.4);
  const [customStyle, setCustomStyle] = useState(student?.learning_style || "Visual");
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "Explain QuickSort algorithm and its time complexity.",
    "What are ACID properties in database management systems?",
    "What is the university policy on minimum CGPA for academic good standing?",
    "What is the difference between TCP and UDP?",
    "How does backpropagation work in deep learning neural networks?",
    "What is the policy for repeating a failed course?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (promptToSend) => {
    const text = promptToSend || input;
    if (!text.trim() || loading) return;

    const userMessage = { sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    if (!promptToSend) setInput("");
    setLoading(true);

    try {
      const data = await sendChatMessage(
        text,
        student?.student_id,
        student?.mbti,
        customStyle,
        temperature
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.answer,
          source: data.source,
          similarity: data.similarity_score,
          category: data.category
        }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `Apologies, I encountered an issue connecting to the academic advisor engine. Please ensure the backend is running. (Error: ${err.message})`,
          source: "System Fallback"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      {/* Persona Customizer Controls */}
      <div className="sis-card" style={{ padding: "12px", background: "#f8fafc" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="badge badge-purple">{student?.mbti || "INTJ"} Strategic</span>
            <span className="badge badge-blue">{customStyle} Learner</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#64748b" }}>
            <Sliders size={12} />
            <span>Temp: {temperature}</span>
          </div>
        </div>

        {/* Learning Style Selector Buttons */}
        <div style={{ display: "flex", gap: "4px", marginTop: "8px" }}>
          {["Visual", "Kinesthetic", "Auditory", "Reading/Writing"].map((style) => (
            <button
              key={style}
              onClick={() => setCustomStyle(style)}
              style={{
                flex: 1,
                padding: "3px 6px",
                borderRadius: "6px",
                fontSize: "10px",
                fontWeight: "600",
                background: customStyle === style ? "#2563eb" : "#e2e8f0",
                color: customStyle === style ? "#ffffff" : "#475569"
              }}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Prompt Chips */}
      <div style={{
        display: "flex",
        gap: "6px",
        overflowX: "auto",
        paddingBottom: "4px",
        whiteSpace: "nowrap"
      }}>
        {quickPrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(p)}
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "4px 10px",
              fontSize: "11px",
              color: "#334155",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              flexShrink: 0
            }}
          >
            <Lightbulb size={12} color="#f59e0b" />
            <span>{p.length > 28 ? p.substring(0, 28) + "..." : p}</span>
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div className="chat-messages-area">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`chat-bubble ${m.sender === "user" ? "chat-bubble-user" : "chat-bubble-ai"}`}
          >
            {m.sender === "ai" && (
              <div className="chat-source-tag">
                {m.source?.includes("Verified") ? <Database size={11} /> : <Bot size={11} />}
                <span>{m.source}</span>
                {m.similarity !== null && m.similarity > 0 && (
                  <span style={{ color: "#059669" }}>• {Math.round(m.similarity * 100)}% match</span>
                )}
              </div>
            )}
            <div style={{ whiteSpace: "pre-wrap" }}>{m.text}</div>
          </div>
        ))}

        {loading && (
          <div className="chat-bubble chat-bubble-ai" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Sparkles size={14} color="#2563eb" className="animate-spin" />
            <span style={{ fontSize: "12px", color: "#64748b" }}>Generating customized explanation...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="chat-input-row">
        <input
          type="text"
          className="chat-input"
          placeholder={`Ask about curriculum, CS, or SIS policies...`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="chat-send-btn" onClick={() => handleSend()} disabled={loading}>
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
