# Uni Assist SIS — Smart Academic Management System

An enterprise-grade, mobile-first Student Information System (SIS), Explainable Course Recommender, Academic Analytics Engine, Timetable Matrix, and AI-Powered Educational Chatbot rewritten as a modern React application.

---

## 🌟 Key Features

1. **Student Profile & Cohort Switching**:
   - Access and switch between student profiles across 4 academic departments (Cyber Security, Intelligent Systems, Data Science & AI, Software Industry).
   - Real-time display of CGPA, earned vs total degree credits, academic standing badges (*Dean's List*, *Good Standing*, *Academic Warning*), MBTI personality traits, and preferred learning styles.

2. **Intelligent Course Recommender**:
   - Analyzes curriculum progression, prerequisite DAG satisfaction, student year level, and historical passing rates.
   - Generates match scores (e.g., 95%+) and pedagogical rationale.
   - Interactive course planning and registration cart.

3. **Academic Analytics & Early Warning System**:
   - Semester GPA historical trajectory trends.
   - Detailed letter grade distribution histograms (A+ through F).
   - Early warning risk detection for students with CGPA below 2.00.
   - LMS engagement tracking: attendance percentage, weekly study hours, and portal logins.

4. **Graduation Degree Audit & Curriculum DAG**:
   - 120-credit graduation requirement tracking and milestone progress per academic year.
   - Interactive Prerequisite Chain Directed Acyclic Graph (DAG) visualizer showing completed, in-progress, unlocked, and locked courses.

5. **Interactive What-If GPA Simulator**:
   - Real-time simulation of future term courses with customizable credits and expected letter grades.
   - Immediate forecasting of projected cumulative GPA, term GPA, and updated academic standing.

6. **Comprehensive Timetable & Schedule Management**:
   - **All Groups Timetable**: Master matrix schedule filterable by Department, Year Level, and Student Group across standard academic time slots (Periods 1 to 4).
   - **My Timetable**: Active enrolled schedule with weekly workload metrics, CSV export, and print formatting.
   - **AI-Recommended Specialized Timetable**: AI-optimized schedule tracks (e.g. *Morning Focus* vs *Balanced Mid-Day Spread*) with gap optimization, workload balancing, 100% collision-free guarantee, and one-click enrollment.

7. **AI Academic Tutor & SIS Advisor**:
   - Verified knowledge base answering questions across Data Structures, Algorithms, Databases, Computer Networks, Deep Learning, and University Regulations.
   - Adaptive explanations customized according to the active student's MBTI profile and preferred learning style (*Visual*, *Auditory*, *Kinesthetic*, *Reading/Writing*).

---

## 🚀 Development & Build

```bash
# Start dev server on port 3000
npm run dev

# Compile production build
npm run build

# Run type checks
npm run lint
```
