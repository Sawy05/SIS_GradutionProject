import React, { useState, useRef, useEffect } from "react";
import { 
  Send, 
  Sparkles, 
  Sliders, 
  Bot, 
  User 
} from "lucide-react";
import { sendChatMessage } from "../api";
import { Student, ChatMessage } from "../types";

interface ChatbotViewProps {
  student: Student | null;
}

export default function ChatbotView({ student }: ChatbotViewProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
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
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  const handleSend = async (promptToSend?: string) => {
    const text = promptToSend || input;
    if (!text.trim() || loading) return;

    const userMessage: ChatMessage = { sender: "user", text };
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
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `Apologies, I encountered an issue connecting to the academic advisor engine. (Error: ${err.message})`,
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

        <div style={{ display: "flex", gap: "6px", marginTop: "8px", overflowX: "auto" }}>
          {["Visual", "Auditory", "Kinesthetic", "Reading/Writing"].map((style) => (
            <button
              key={style}
              onClick={() => setCustomStyle(style)}
              style={{
                padding: "4px 8px",
                borderRadius: "6px",
                fontSize: "11px",
                fontWeight: "600",
                background: customStyle === style ? "#2563eb" : "#e2e8f0",
                color: customStyle === style ? "#ffffff" : "#475569",
                whiteSpace: "nowrap"
              }}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Question Chips */}
      <div style={{ display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "4px" }}>
        {quickPrompts.map((qp, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(qp)}
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "14px",
              padding: "6px 10px",
              fontSize: "11px",
              color: "#334155",
              whiteSpace: "nowrap",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
            }}
          >
            {qp}
          </button>
        ))}
      </div>

      {/* Chat Messages Area */}
      <div className="chat-messages-area">
        {messages.map((m, idx) => {
          const isUser = m.sender === "user";
          return (
            <div
              key={idx}
              className={`chat-bubble ${isUser ? "chat-bubble-user" : "chat-bubble-ai"}`}
            >
              {!isUser && (
                <div className="chat-source-tag">
                  <Sparkles size={11} /> {m.source || "Academic Engine"}
                  {m.similarity && ` (${Math.round(m.similarity * 100)}% match)`}
                </div>
              )}
              <div style={{ whiteSpace: "pre-line" }}>{m.text}</div>
            </div>
          );
        })}
        {loading && (
          <div className="chat-bubble chat-bubble-ai" style={{ color: "#64748b" }}>
            Formulating pedagogical response...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input Box */}
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
          placeholder="Ask about data structures, algorithms, or policies..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="chat-send-btn" disabled={loading}>
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
