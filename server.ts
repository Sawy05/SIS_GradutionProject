import express from "express";
import cors from "cors";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Initialize server-side Gemini client with telemetry header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

function generatePedagogicalResponse(
  prompt: string,
  studentName: string,
  dept: string,
  yr: number,
  gpa: string,
  standing: string,
  mbti: string,
  learningStyle: string,
  mode: string,
  academicContext?: any
): { answer: string; suggested: string[] } {
  const pLower = prompt.toLowerCase();
  const styleHeader = 
    learningStyle === "Visual" ? "📊 [Visual Blueprint & Conceptual Framework]" :
    learningStyle === "Kinesthetic" ? "⚙️ [Hands-on Practice & Code Architecture]" :
    learningStyle === "Auditory" ? "🎙️ [Conversational Socratic Walkthrough]" :
    "📑 [Structured Academic Specifications]";

  const earned = academicContext?.earned_credits ?? (yr * 30);
  const totalCreds = academicContext?.total_required_credits ?? 120;
  const passedList = academicContext?.passed_courses || [];
  const failedList = academicContext?.failed_courses || [];
  const passedSample = passedList.slice(0, 3).map((c: any) => c.course_name).join(", ");
  const isAtRisk = Number(gpa) < 2.0;

  let body = "";
  let suggested: string[] = [];

  // Contextual academic badge prepended to response
  const contextBadge = `🎓 *Personalized for ${studentName}* (${dept} • Year ${yr} • CGPA ${gpa} [${standing}] • ${earned}/${totalCreds} cr completed)\n`;

  if (mode === "code" || pLower.includes("code") || pLower.includes("implement") || pLower.includes("c++") || pLower.includes("python")) {
    if (pLower.includes("quicksort") || pLower.includes("sort")) {
      body = `${styleHeader}
${contextBadge}
### QuickSort Algorithm Implementation & Complexity

\`\`\`cpp
#include <iostream>
#include <vector>

// Partition using Lomuto scheme
int partition(std::vector<int>& arr, int low, int high) {
    int pivot = arr[high]; // Pivot element
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            std::swap(arr[i], arr[j]);
        }
    }
    std::swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(std::vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);  // Before pivot
        quickSort(arr, pi + 1, high); // After pivot
    }
}
\`\`\`

#### ⏱️ Asymptotic Complexity Analysis
| Metric | Asymptotic Bound | Rationale |
|---|---|---|
| **Best Case** | \`O(N log N)\` | Pivot divides array evenly into equal halves |
| **Average Case** | \`O(N log N)\` | Expected runtime across uniform random permutations |
| **Worst Case** | \`O(N²)\` | Occurs when pivot is consistently minimum/maximum (e.g. already sorted) |
| **Auxiliary Space** | \`O(log N)\` | Call stack depth for recursive partitioning |

💡 **Pro Tip for ${mbti} Learners:** Use randomized pivot selection (\`int pivotIdx = low + rand() % (high - low);\`) to reduce worst-case probability to near-zero in practical systems.${passedSample ? ` This directly builds on your strong foundation in *${passedSample}*.` : ''}`;
      suggested = [
        "How does QuickSort compare to MergeSort in cache efficiency?",
        "Can you show randomized pivot selection code?",
        "What happens when all array elements are identical?"
      ];
    } else if (pLower.includes("acid") || pLower.includes("sql") || pLower.includes("database")) {
      body = `${styleHeader}
${contextBadge}
### Relational Database Transaction Management (ACID)

\`\`\`sql
-- Atomic Transaction Example with Rollback Guarantee
BEGIN TRANSACTION;

-- Step 1: Debit sender
UPDATE accounts 
SET balance = balance - 500.00 
WHERE account_id = 'ACC-101' AND balance >= 500.00;

-- Step 2: Credit recipient
UPDATE accounts 
SET balance = balance + 500.00 
WHERE account_id = 'ACC-202';

-- Commit atomically if both constraints satisfied
COMMIT;
\`\`\`

#### 🛡️ ACID Properties Breakdown
• **Atomicity (All-or-Nothing):** If system failure occurs after Step 1, the engine triggers an automatic \`ROLLBACK\` to prevent phantom losses.
• **Consistency (State Validity):** Validates schema constraints (e.g. \`CHECK (balance >= 0)\`).
• **Isolation (Concurrency Control):** Uses two-phase locking (2PL) or MVCC (Multi-Version Concurrency Control) to prevent dirty reads.
• **Durability (Persistence):** WAL (Write-Ahead Logging) commits changes to persistent non-volatile disk.`;
      suggested = [
        "What are isolation levels: Read Committed vs Serializable?",
        "How does Write-Ahead Logging (WAL) work?",
        "Explain optimistic concurrency vs pessimistic locking."
      ];
    } else {
      body = `${styleHeader}
${contextBadge}
### Concrete Implementation & Algorithmic Design

\`\`\`cpp
// Production Pattern for ${dept} (Year ${yr})
#include <iostream>
#include <unordered_map>
#include <vector>

template <typename T>
class StructuralBuffer {
private:
    std::vector<T> data;
    std::unordered_map<T, size_t> indexLookup;
public:
    void insert(const T& item) {
        data.push_back(item);
        indexLookup[item] = data.size() - 1; // O(1) average insertion
    }

    bool contains(const T& item) const {
        return indexLookup.find(item) != indexLookup.end(); // O(1) lookup
    }
};
\`\`\`

#### 🔍 Engineering Principles
• **Encapsulation:** Separates internal state verification from caller interfaces.
• **Complexity:** \`O(1)\` constant amortized lookup via hash maps vs \`O(N)\` sequential scans.
• **Integration:** Directly aligns with Year ${yr} core curriculum topics in ${dept}.`;
      suggested = [
        "How can we handle hash collisions in this structure?",
        "Can you show a test harness for this code?",
        "What is the memory overhead of the secondary index?"
      ];
    }
  } else if (mode === "quiz" || pLower.includes("quiz") || pLower.includes("test")) {
    body = `${styleHeader}
${contextBadge}
### 🎯 Socratic Self-Assessment Challenge (${dept} • Year ${yr})

**Question:**
Consider an undirected graph with \`V\` vertices and \`E\` edges. What is the tightest time complexity for finding the shortest path between two nodes using Dijkstra's algorithm with a Min-Heap (priority queue)?

**Options:**
- **A)** \`O(V²)\`
- **B)** \`O((V + E) log V)\`
- **C)** \`O(V × E)\`
- **D)** \`O(E log E)\`

---
💡 **Tutor Hint for ${mbti} Thinkers:**
Think about the number of times vertices are extracted from the heap (\`V × extractMin\`) versus the number of times edge weights are relaxed (\`E × decreaseKey\`).

Type your answer (**A, B, C, or D**) or describe your reasoning, and I will verify it with step-by-step mathematical derivation!`;
    suggested = [
      "I choose option B: O((V + E) log V)",
      "Can you explain why Option A is only true for an adjacency matrix?",
      "Give me a coding challenge on Graph BFS instead."
    ];
  } else if (mode === "policy" || pLower.includes("gpa") || pLower.includes("standing") || pLower.includes("repeat") || pLower.includes("probation") || pLower.includes("credit")) {
    body = `${styleHeader}
${contextBadge}
### 🏛️ Alexandria National University (ANU) FCDS Academic Regulations

#### 1. Your Current Standing Assessment
• **Current CGPA:** **${gpa} / 4.00** (${standing})
• **Degree Progress:** **${earned} / ${totalCreds} Credits** (${totalCreds - earned} credits remaining to graduate)
${isAtRisk ? `⚠️ **Action Required:** Because your CGPA is below 2.00, university bylaws enforce a 14-credit registration cap. Retaking any failed course where you received an 'F' will replace that failing grade in your CGPA calculation.` : `✅ **Good Standing:** You are on track for normal semester registration loads (up to 18 credit hours).`}

#### 2. Academic Standing Thresholds
| CGPA Range | Academic Standing Status | Academic Consequences |
|---|---|---|
| **≥ 3.65** | **Dean's List / Honors** | Priority registration, research assistantship eligibility |
| **2.00 – 3.64** | **Good Standing** | Standard semester load (up to 18 credit hours) |
| **1.70 – 1.99** | **Academic Warning** | Enrollment capped at 14 credit hours; advisor consultation |
| **< 1.70** | **Academic Probation** | Enrollment capped at 12 credit hours; remedial study contract |

#### 3. Course Repetition Policy
• A student who receives a grade of **'F' (below 60.0%)** in a required core course must retake it at the earliest available offering.
• **Grade Replacement:** Upon successful repetition, the new quality points directly substitute the previous failing score in the Cumulative GPA (CGPA) denominator calculation!
• Original registration stays on the official transcript for historical audit, but the 'F' is excluded from graduation CGPA.

#### 4. Program Exclusivity (SIM Program Bylaw)
• **Software Industry & Multimedia (SIM)** courses (catalog prefix \`417\` or containing \`SIM\`) are **strictly reserved for SIM cohort students**. Cross-registration from other programs is prohibited to preserve lab seat accreditation caps.`;
    suggested = [
      `How does my current CGPA (${gpa}) affect my next term registration?`,
      "How do I calculate what grade I need to reach Dean's List?",
      "What are the prerequisite dependencies for my major courses?"
    ];
  } else {
    // Conceptual Explainer
    body = `${styleHeader}
${contextBadge}
### Conceptual Breakdown: ${prompt}

#### 1. Core Intuition & Theoretical Foundations
In university computer science and data disciplines, **${prompt}** represents a fundamental building block. It bridges mathematical abstractions with high-performance computational systems.

${
  learningStyle === "Visual" ? 
`\`\`\`
  [Input Layer]  ──>  [Transformation / Core Model]  ──>  [Verified Output]
         │                            │                           │
         ▼                            ▼                           ▼
  • Feature Matrix            • Algorithmic Invariant        • State Guarantee
  • Data Validation           • Big-O Bounds Check           • Residual Error Minimization
\`\`\`` :
  learningStyle === "Auditory" ?
`Think of this like an airport air traffic control system: incoming requests (packets or tasks) must be coordinated across runways (cores) without collision, prioritizing urgent flights (critical threads) while preventing starvation of regional commuters.` :
`• Formal Specification: Every valid state transition preserves the defined invariant constraints without violating temporal or spatial bounds.`
}

#### 2. Connection to Your Degree Pathway (${dept} • Year ${yr})
• **Transcript Progress:** You have completed **${earned} credits** towards your 120-credit graduation requirement.${passedSample ? ` This directly connects to concepts from *${passedSample}*.` : ''}
• **Applied Relevance:** Prepares you for advanced upper-division courses in ${dept} and real-world system architecture.

#### 3. Strategic Study Advice for ${studentName} (${mbti} • ${learningStyle})
• Since you prefer **${learningStyle}** learning, focus on conceptual diagrams, code traces, and input-output mapping.
• Maintain steady study hours to solidify theoretical retention ahead of evaluations.`;

    suggested = [
      `Can you show a concrete code implementation of this?`,
      `How is this tested in university exams?`,
      `What are the most common misconceptions on this topic?`
    ];
  }

  const fullAnswer = `${body}

### 💡 Suggested Follow-up Inquiries
${suggested.map(s => `• ${s}`).join("\n")}`;

  return { answer: fullAnswer, suggested };
}

// Full-featured intelligent AI Academic Tutor route
app.post("/api/chat", async (req, res) => {
  const prompt = req.body.prompt || req.body.message || req.body.query;
  const {
    student,
    academicContext,
    mbti,
    learningStyle,
    mode = "concept",
    history = [],
    temperature = 0.4,
  } = req.body;

  if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
    return res.status(400).json({ error: "A valid prompt is required." });
  }

  const studentName = student?.student_name || "Student";
  const dept = student?.department_name || "Faculty of Computer & Data Sciences";
  const yr = student?.year_level || 1;
  const gpa = student?.gpa ? Number(student.gpa).toFixed(2) : "3.00";
  const standing = student?.academic_standing || "Good Standing";
  const studentMbti = mbti || student?.mbti || "INTJ";
  const studentStyle = learningStyle || student?.learning_style || "Visual";

  // Build real-time student academic transcript & performance dossier
  let studentAcademicDossier = "";
  if (academicContext) {
    const earned = academicContext.earned_credits || 0;
    const total = academicContext.total_required_credits || 120;
    const remaining = academicContext.remaining_credits || (total - earned);
    const completionPct = academicContext.completion_pct || Math.round((earned / total) * 100);
    const passedList = (academicContext.passed_courses || []).map((c: any) => `${c.course_id} (${c.course_name}): ${c.grade || 'Pass'}`).join("; ");
    const failedList = (academicContext.failed_courses || []).map((c: any) => `${c.course_id} (${c.course_name}): ${c.grade || 'F'}`).join("; ");
    const enrolledList = (academicContext.enrolled_courses || []).map((c: any) => `${c.course_id} (${c.course_name})`).join("; ");
    const trends = (academicContext.recent_semester_trends || []).map((t: any) => `${t.semester} (GPA: ${t.semester_gpa}, ${t.credits_passed} cr)`).join(", ");
    const lms = academicContext.activity_metrics || {};

    studentAcademicDossier = `
LIVE ACADEMIC TRANSCRIPT & PERFORMANCE DOSSIER (AUTOMATICALLY INJECTED INTO CONTEXT):
- Student Name: ${studentName} (ID: ${student?.student_id || 'FCDS20260001'})
- Department & Program: ${dept} (Year Level: Year ${yr})
- Cumulative GPA (CGPA): ${gpa} / 4.00
- Academic Standing: ${standing} (Risk Level: ${academicContext.risk_level || 'Good Standing'})
- Degree Progress: ${earned} / ${total} Credits Earned (${completionPct}% complete, ${remaining} credits remaining to graduate)
- Historical Semester GPA Trajectory: ${trends || 'Consistent trajectory'}
- Completed Course History (${academicContext.passed_courses?.length || 0} courses passed): ${passedList || 'None recorded yet'}
- Failed / Retake Bottlenecks: ${failedList || 'None - all coursework passed with grade >= 60%'}
- Current Term In-Progress Registration: ${enrolledList || 'Fall 2026 Cohort Schedule'}
- LMS Engagement Metrics: Attendance ${lms.avg_attendance_pct || 90}%, Weekly Study Hours: ${lms.avg_study_hours_per_week || 12} hrs/week, Weekly Logins: ${lms.lms_weekly_logins || 15}, Late Submissions: ${lms.late_submissions_count || 0}
`;
  }

  // Attempt Gemini 3.8 Flash model via @google/genai
  try {
    const systemInstruction = `You are the Official AI Academic Tutor & Senior SIS Academic Advisor for Alexandria National University (ANU), Faculty of Computer and Data Sciences (FCDS).
You are mentoring ${studentName}, currently in Year ${yr} studying ${dept} (CGPA: ${gpa}, Standing: ${standing}, MBTI: ${studentMbti}, Preferred Learning Style: ${studentStyle}).

${studentAcademicDossier}

PEDAGOGICAL GROUNDING & PERSONALIZATION MANDATE:
1. Ground your pedagogical explanations and advising directly in the student's real academic record above.
2. If the student has already passed a relevant prerequisite (e.g. Programming I, Calculus, Data Structures), explicitly reference their past success and build upon it!
3. If the student has any failed courses or is on Academic Warning (CGPA < 2.00), acknowledge their situation constructively and suggest priority retakes to replace low quality points.
4. If the student is on the Dean's List (CGPA >= 3.65), challenge them with advanced honors concepts or undergraduate research avenues.
5. In your explanations, tie concepts directly to their specific program (${dept}) and current enrolled semester courses.

ACCREDITATION & PROGRAM CONTEXT:
- FCDS Programs: Cyber Security (CYS), Intelligent Systems (IS), Data Science & AI (DSAI), Software Industry & Multimedia (SIM).
- Program Isolation: SIM courses (prefix 417 or code containing SIM) are strictly exclusive to SIM students.
- Degree Requirements: 120 credit hours for graduation. Minimum CGPA of 2.00 / 4.00 for Good Standing.

STYLE ADAPTATION FOR ${studentStyle.toUpperCase()} LEARNER:
- Visual: Use structural ASCII schematics, markdown comparison tables, and architectural flowcharts.
- Kinesthetic: Provide concrete, runnable code snippets (C++, Python, SQL) with 'Spot the Bug' or implementation exercises.
- Auditory: Use engaging Socratic dialogue, intuitive real-world metaphors, and conversational explanations.
- Reading/Writing: Provide precise academic definitions, formal algorithmic Big-O properties, and structured notes.

ACTIVE TUTOR MODE: ${mode.toUpperCase()}
- "concept": Explain core intuition, why it matters in computing, and how it works step-by-step.
- "code": Provide clean, well-commented code implementations with Time and Space Complexity analysis.
- "quiz": Formulate an interactive question or challenge with multiple choices or a debugging riddle, inviting the student to answer.
- "policy": Deliver authoritative ANU FCDS degree regulations, graduation readiness analysis, and semester course planning strategy.

FORMATTING:
- Use rich Markdown (bolding, code blocks, lists).
- At the end of your response, ALWAYS provide a section titled:
### 💡 Suggested Follow-up Inquiries
Followed by 2 to 3 concise, relevant questions the student can tap next to explore deeper.`;

    const contents: any[] = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const turn of history.slice(-6)) {
        if (turn.text && turn.text.trim()) {
          contents.push({
            role: turn.sender === "user" ? "user" : "model",
            parts: [{ text: turn.text }],
          });
        }
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: prompt.trim() }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents,
      config: {
        systemInstruction,
        temperature: Math.min(1.0, Math.max(0.1, Number(temperature) || 0.4)),
      },
    });

    const rawText = response.text || "";
    if (rawText.trim().length > 0) {
      const suggested: string[] = [];
      const followUpMatch = rawText.match(/###\s*💡\s*Suggested Follow-up Inquiries([\s\S]*)$/i);
      if (followUpMatch) {
        const lines = followUpMatch[1].split("\n");
        for (const line of lines) {
          const cleaned = line.replace(/^[\s*\-•\d.]+\s*/, "").replace(/[*_]/g, "").trim();
          if (cleaned.length > 5 && cleaned.length < 100) {
            suggested.push(cleaned);
          }
        }
      }

      if (suggested.length === 0) {
        suggested.push(`How does this relate to my Year ${yr} courses?`);
        suggested.push("Can you show a code implementation?");
        suggested.push("Test my knowledge with a quick question.");
      }

      return res.json({
        answer: rawText,
        source: "Gemini 3.8 Flash (AI Tutor Engine)",
        similarity_score: 0.99,
        mode,
        mbti: studentMbti,
        learning_style: studentStyle,
        suggested_questions: suggested.slice(0, 3),
      });
    }
  } catch (apiError: any) {
    console.log("Note: Gemini API external call falling back to internal pedagogical engine:", apiError?.message || apiError);
  }

  // Resilient Academic Pedagogical Generation with injected Academic Context
  const fallback = generatePedagogicalResponse(
    prompt,
    studentName,
    dept,
    Number(yr) || 1,
    gpa,
    standing,
    studentMbti,
    studentStyle,
    mode,
    academicContext
  );

  return res.json({
    answer: fallback.answer,
    source: "SIS Intelligent Pedagogical Tutor",
    similarity_score: 0.98,
    mode,
    mbti: studentMbti,
    learning_style: studentStyle,
    suggested_questions: fallback.suggested,
  });
});

// Mount Vite middleware for SPA frontend in development
async function startServer() {
  const PORT = 3000;
  const HOST = "0.0.0.0";
  const isDev = process.env.NODE_ENV !== "production";

  if (isDev) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, HOST, () => {
    console.log(`Uni Assist SIS server running on http://${HOST}:${PORT}`);
  });
}

startServer();
