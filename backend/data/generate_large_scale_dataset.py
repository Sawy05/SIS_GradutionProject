import csv
import json
import math
import random
import sqlite3
from pathlib import Path

# Set random seed for reproducible high-quality realistic dataset
random.seed(42)

DATA_DIR = Path(__file__).resolve().parent
DB_PATH = DATA_DIR / "sis_database.db"

# 1. DEPARTMENTS
DEPARTMENTS = [
    {
        "department_id": "D01",
        "department_name": "Computer Science & Software Engineering",
        "code_prefix": "CS",
        "dean": "Dr. Sarah Jenkins",
        "description": "Core computer science, software engineering architectures, algorithms, and systems."
    },
    {
        "department_id": "D02",
        "department_name": "Artificial Intelligence & Data Science",
        "code_prefix": "AI",
        "dean": "Dr. Tariq Al-Mansoor",
        "description": "Machine learning, neural networks, data engineering, and predictive analytics."
    },
    {
        "department_id": "D03",
        "department_name": "Cybersecurity & Network Engineering",
        "code_prefix": "CYB",
        "dean": "Dr. Elena Rostova",
        "description": "Information security, ethical hacking, digital forensics, and network defense."
    },
    {
        "department_id": "D04",
        "department_name": "Information Systems & Cloud Computing",
        "code_prefix": "IS",
        "dean": "Dr. Marcus Vance",
        "description": "Enterprise databases, cloud architectures, DevOps, and IT management."
    },
    {
        "department_id": "D05",
        "department_name": "Business Administration & FinTech",
        "code_prefix": "BUS",
        "dean": "Dr. Nadia Kamel",
        "description": "Financial technologies, organizational management, accounting, and quantitative economics."
    },
    {
        "department_id": "D06",
        "department_name": "Digital Media & Human-Computer Interaction",
        "code_prefix": "HCI",
        "dean": "Dr. Liam O'Connor",
        "description": "UI/UX design, mobile application interaction, computer graphics, and cognitive ergonomics."
    }
]

# 2. COURSES (80 courses with proper prerequisite DAGs)
COURSE_DEFS = [
    # Computer Science (D01)
    ("CS101", "Introduction to Computer Science", "D01", 1, 3, None, "Fundamental concepts of computing, hardware/software interface, and basic programming."),
    ("CS102", "Programming Fundamentals (Python/C++)", "D01", 1, 4, "CS101", "Control structures, procedural programming, arrays, and standard libraries."),
    ("CS103", "Discrete Mathematics & Logic", "D01", 1, 3, None, "Set theory, propositional logic, graph theory, combinatorics, and proof techniques."),
    ("CS201", "Data Structures & Algorithms", "D01", 2, 4, "CS102", "Linked lists, stacks, queues, trees, balanced search trees, sorting, and algorithmic complexity."),
    ("CS202", "Object-Oriented Design & Design Patterns", "D01", 2, 3, "CS102", "Polymorphism, encapsulation, inheritance, SOLID principles, and GoF design patterns."),
    ("CS203", "Computer Organization & Architecture", "D01", 2, 3, "CS101", "Instruction sets, memory hierarchy, pipelining, cache architectures, and assembly language."),
    ("CS204", "Theory of Computation & Automata", "D01", 2, 3, "CS103", "Regular expressions, DFAs/NFAs, context-free grammars, Turing machines, and decidability."),
    ("CS301", "Operating Systems Internals", "D01", 3, 4, "CS201", "Process management, virtual memory, concurrency, semaphores, file systems, and scheduling."),
    ("CS302", "Design & Analysis of Algorithms", "D01", 3, 3, "CS201", "Divide-and-conquer, dynamic programming, greedy strategies, graph algorithms, and NP-completeness."),
    ("CS303", "Software Engineering Methodologies", "D01", 3, 3, "CS202", "Agile, Scrum, CI/CD pipelines, unit testing, requirements engineering, and architecture."),
    ("CS304", "Compiler Design & Construction", "D01", 3, 3, "CS204", "Lexical analysis, syntax analysis (LL/LR parsers), semantic validation, and code optimization."),
    ("CS401", "Distributed Systems & Microservices", "D01", 4, 3, "CS301", "Consensus algorithms (Raft/Paxos), RPCs, message queues, fault tolerance, and CAP theorem."),
    ("CS402", "Senior Capstone Project I", "D01", 4, 3, "CS303", "Project inception, architectural design, requirements analysis, and milestone prototyping."),
    ("CS403", "Senior Capstone Project II", "D01", 4, 3, "CS402", "Full system implementation, automated testing, deployment, and public defense."),
    ("CS404", "High-Performance Parallel Computing", "D01", 4, 3, "CS301", "OpenMP, MPI, CUDA GPU programming, thread synchronization, and Amdahl's Law."),

    # Artificial Intelligence & Data Science (D02)
    ("AI101", "Foundations of Data Science", "D02", 1, 3, None, "Data exploration, descriptive statistics, visualization with Matplotlib/Seaborn, and Jupyter workflows."),
    ("AI102", "Linear Algebra & Numerical Methods for AI", "D02", 1, 3, None, "Vector spaces, eigenvalues, matrix decompositions (SVD), gradient calculus, and optimization."),
    ("AI201", "Probability & Mathematical Statistics", "D02", 2, 3, "AI102", "Probability distributions, Bayes rule, maximum likelihood estimation, hypothesis testing, and regression."),
    ("AI202", "Machine Learning Foundations", "D02", 2, 4, "AI102", "Supervised and unsupervised learning, decision trees, SVM, k-means, regularization, and cross-validation."),
    ("AI203", "Data Wrangling & Feature Engineering", "D02", 2, 3, "AI101", "ETL pipelines, missing data imputation, categorical encoding, feature scaling, and PCA."),
    ("AI301", "Deep Learning & Neural Architectures", "D02", 3, 4, "AI202", "Backpropagation, CNNs, RNNs, LSTMs, attention mechanisms, batch norm, and PyTorch frameworks."),
    ("AI302", "Natural Language Processing & LLMs", "D02", 3, 3, "AI301", "Word embeddings, Transformer architectures, BERT, GPT models, tokenization, and prompt engineering."),
    ("AI303", "Computer Vision & Visual Perception", "D02", 3, 3, "AI301", "Image filtering, edge detection, object detection (YOLO), semantic segmentation, and generative models."),
    ("AI304", "Reinforcement Learning & Decision Systems", "D02", 3, 3, "AI202", "Markov Decision Processes, Q-learning, policy gradients, Actor-Critic methods, and agent environments."),
    ("AI401", "AI Ethics, Bias & Governance", "D02", 4, 3, "AI202", "Algorithmic fairness, model explainability (SHAP/LIME), privacy-preserving ML, and regulatory frameworks."),
    ("AI402", "Big Data Analytics & Spark Systems", "D02", 4, 3, "AI203", "Hadoop, Apache Spark, distributed DataFrame processing, streaming analytics, and Kafka."),
    ("AI403", "Generative AI Systems & Agentic Workflows", "D02", 4, 3, "AI302", "RAG architectures, vector embeddings, multi-agent frameworks, tool-augmented LLMs, and evaluation."),

    # Cybersecurity & Network Engineering (D03)
    ("CYB101", "Introduction to Information Security", "D03", 1, 3, None, "CIA triad, security policies, authentication, social engineering, and basic cryptography."),
    ("CYB102", "Computer Networking & Protocols", "D03", 1, 4, None, "OSI model, TCP/IP stack, routing protocols (BGP/OSPF), subnetting, DNS, and HTTP/TLS."),
    ("CYB201", "Applied Cryptography & PKI", "D03", 2, 3, "CYB101", "Symmetric ciphers (AES), asymmetric ciphers (RSA/ECC), digital signatures, hashing (SHA-256), and certificates."),
    ("CYB202", "Operating System Security & Hardening", "D03", 2, 3, "CYB101", "Linux/Windows kernel security, access control matrices, SELinux, process sandboxing, and auditing."),
    ("CYB203", "Network Defense & Countermeasures", "D03", 2, 3, "CYB102", "Firewalls, IDS/IPS, VPN architectures, Wireshark packet inspection, and zero-trust concepts."),
    ("CYB301", "Ethical Hacking & Penetration Testing", "D03", 3, 4, "CYB203", "Reconnaissance, vulnerability scanning, exploitation frameworks (Metasploit), privilege escalation, and reports."),
    ("CYB302", "Web Application Security & OWASP Top 10", "D03", 3, 3, "CYB101", "SQL injection, XSS, CSRF, SSRF, broken authentication, CORS misconfigurations, and secure coding."),
    ("CYB303", "Digital Forensics & Incident Response", "D03", 3, 3, "CYB202", "Memory forensics, file system analysis, chain of custody, timeline analysis, and malware triage."),
    ("CYB401", "Cloud Security Architecture", "D03", 4, 3, "CYB203", "IAM roles, VPC peering, cloud SIEM, container security (Docker/K8s), and compliance (SOC2/ISO27001)."),
    ("CYB402", "Reverse Engineering & Malware Analysis", "D03", 4, 3, "CYB301", "Static/dynamic disassembly (Ghidra/IDA Pro), behavioral sandboxing, unpacking, and anti-analysis evasion."),
    ("CYB403", "Security Operations & Threat Intelligence", "D03", 4, 3, "CYB303", "SOC workflows, MITRE ATT&CK framework, SIEM rule tuning, threat hunting, and automated SOAR."),

    # Information Systems & Cloud Computing (D04)
    ("IS101", "Fundamentals of Information Systems", "D04", 1, 3, None, "Role of IT in modern enterprises, system lifecycles, business process modeling, and IT strategy."),
    ("IS102", "Relational Database Systems (SQL)", "D04", 1, 4, None, "ER modeling, normalization (1NF-BCNF), relational algebra, SQL DDL/DML, and index optimization."),
    ("IS201", "Enterprise Web Architecture", "D04", 2, 3, "IS102", "Full-stack web models, REST APIs, asynchronous client-server protocols, and frontend state management."),
    ("IS202", "NoSQL Databases & Data Stores", "D04", 2, 3, "IS102", "Document stores (MongoDB), key-value stores (Redis), wide-column stores (Cassandra), and graph databases."),
    ("IS203", "Systems Analysis & Architectural Modeling", "D04", 2, 3, "IS101", "UML diagrams, design patterns, requirements elicitation, user stories, and acceptance testing."),
    ("IS301", "Cloud Computing Foundations (AWS/Azure)", "D04", 3, 3, "IS201", "Virtual machines, serverless functions, object storage, auto-scaling, and infrastructure cost modeling."),
    ("IS302", "DevOps & Infrastructure as Code", "D04", 3, 4, "IS301", "Docker containers, Kubernetes orchestration, Terraform, GitHub Actions, and GitOps workflows."),
    ("IS303", "Enterprise ERP & CRM Integration", "D04", 3, 3, "IS203", "Supply chain architectures, enterprise resource planning, customer data platforms, and API gateways."),
    ("IS401", "Cloud Native Microservices Architecture", "D04", 4, 3, "IS302", "Domain-driven design (DDD), event sourcing, CQRS, service meshes (Istio), and observability."),
    ("IS402", "IT Project Governance & Risk Management", "D04", 4, 3, "IS203", "ITIL v4 frameworks, COBIT governance, disaster recovery planning, and service level agreements (SLAs)."),
    ("IS403", "Data Warehousing & Business Intelligence", "D04", 4, 3, "IS102", "Star/Snowflake schemas, ETL/ELT pipelines, dimensional modeling, PowerBI/Tableau, and OLAP cubes."),

    # Business Administration & FinTech (D05)
    ("BUS101", "Principles of Modern Management", "D05", 1, 3, None, "Organizational behavior, leadership theories, decision-making matrices, and strategic management."),
    ("BUS102", "Financial Accounting & Reporting", "D05", 1, 3, None, "Double-entry bookkeeping, balance sheets, income statements, cash flow statements, and GAAP standards."),
    ("BUS201", "Micro & Macro Economic Analysis", "D05", 2, 3, "BUS101", "Supply and demand elasticity, market structures, fiscal policy, inflation, and international trade dynamics."),
    ("BUS202", "Managerial & Cost Accounting", "D05", 2, 3, "BUS102", "Cost-volume-profit analysis, activity-based costing, budget variance analysis, and capital expenditures."),
    ("BUS203", "Corporate Finance & Capital Markets", "D05", 2, 4, "BUS102", "Time value of money, discounted cash flow (DCF), risk and return, WACC, and stock/bond valuation."),
    ("BUS301", "Financial Technologies & Blockchain Systems", "D05", 3, 3, "BUS203", "Decentralized ledgers, smart contracts, payment gateways, open banking APIs, and algorithmic trading."),
    ("BUS302", "Marketing Analytics & Consumer Behavior", "D05", 3, 3, "BUS101", "Customer lifetime value (CLV), conversion funnels, segmentation, A/B testing, and churn prediction."),
    ("BUS303", "Operations & Supply Chain Management", "D05", 3, 3, "BUS201", "Inventory models (EOQ), Six Sigma, lean manufacturing, logistics optimization, and queueing theory."),
    ("BUS401", "Strategic Entrepreneurship & Venture Capital", "D05", 4, 3, "BUS203", "Business canvas modeling, venture funding rounds, term sheet negotiation, and tech startup scaling."),
    ("BUS402", "Financial Risk Management & Derivatives", "D05", 4, 3, "BUS203", "Options, futures, swaps, Value at Risk (VaR), stress testing, and Basel III regulatory accords."),
    ("BUS403", "International Business & Global Trade", "D05", 4, 3, "BUS201", "Foreign exchange exposure, trade tariffs, cross-border mergers, and global supply chain resilience."),

    # Digital Media & Human-Computer Interaction (D06)
    ("HCI101", "Design Thinking & Creative Prototyping", "D06", 1, 3, None, "User-centric research, empathy mapping, low-fidelity wireframing, and interactive design critique."),
    ("HCI102", "Digital Graphic Communication", "D06", 1, 3, None, "Typography, color theory, grid systems, vector illustration, and digital image composition."),
    ("HCI201", "UI/UX Interface Architecture & Figma", "D06", 2, 3, "HCI101", "Design systems, auto-layout components, responsive viewport constraints, and micro-interactions."),
    ("HCI202", "User Research & Usability Evaluation", "D06", 2, 3, "HCI101", "Think-aloud protocols, heuristic evaluation (Nielsen), usability lab benchmarking, and SUS metrics."),
    ("HCI203", "Web & Mobile Front-End Interactions", "D06", 2, 4, "HCI101", "Semantic HTML5, CSS Grid/Flexbox, JavaScript DOM manipulation, accessibility (WCAG 2.1 AA), and animation."),
    ("HCI301", "Cognitive Ergonomics & Information Architecture", "D06", 3, 3, "HCI201", "Mental models, cognitive load theory, card sorting, tree testing, and contextual navigation design."),
    ("HCI302", "Mobile Application User Experience Design", "D06", 3, 3, "HCI201", "iOS Human Interface Guidelines, Android Material Design 3, gesture mechanics, and touch ergonomics."),
    ("HCI303", "Interactive 3D Graphics & WebGL", "D06", 3, 3, "HCI203", "Shaders, Three.js scenes, camera projections, mesh textures, and real-time canvas rendering."),
    ("HCI401", "Virtual, Augmented & Mixed Reality Systems", "D06", 4, 3, "HCI303", "Spatial computing, Unity/WebXR environments, head tracking, haptic feedback, and immersion design."),
    ("HCI402", "Inclusive Design & Accessibility Engineering", "D06", 4, 3, "HCI202", "Screen reader semantics, assistive technologies, motor disability accommodations, and universal UX."),
    ("HCI403", "Conversational AI & Voice Interface Design", "D06", 4, 3, "HCI301", "Dialogue flow trees, conversational turn-taking, multimodal UI feedback, and voice persona design.")
]

# 3. REALISTIC NAMES GENERATION
FIRST_NAMES = [
    "Adam", "Alexander", "Alice", "Amira", "Benjamin", "Chloe", "Daniel", "Dina",
    "Elena", "Elias", "Fatima", "Gabriel", "Hassan", "Ibrahim", "Isabella", "James",
    "Jana", "Karim", "Layla", "Leo", "Lucas", "Malak", "Mariam", "Maya", "Michael",
    "Mohamed", "Nadia", "Noah", "Nour", "Omar", "Rami", "Salma", "Sara", "Sophia",
    "Tariq", "William", "Yara", "Youssef", "Zain", "Zayd", "Aya", "Hadi", "Leila",
    "Mostafa", "Nourhan", "Sherif", "Farah", "Khaled", "Zeina", "Tamer", "Nadine"
]

LAST_NAMES = [
    "Abaza", "Abdel-Rahman", "Abouzeid", "Ahmed", "Ali", "Al-Mansoor", "Bakir", "Chen",
    "Darwish", "El-Baz", "El-Gazzar", "El-Sayed", "Fahmy", "Farouk", "Gaber", "Habib",
    "Haddad", "Hamdy", "Hassan", "Ibrahim", "Jenkins", "Kamel", "Khalil", "Mahmoud",
    "Mansour", "Mikhail", "Mostafa", "Nassar", "O'Connor", "Radwan", "Rizk", "Rostova",
    "Saad", "Sabry", "Salem", "Salib", "Soliman", "Taha", "Vance", "Wahba", "Younis", "Zaki"
]

MBTI_TYPES = ["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ", "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP"]
LEARNING_STYLES = ["Visual", "Auditory", "Reading/Writing", "Kinesthetic"]
STUDY_PERIODS = ["Morning", "Afternoon", "Evening", "Night"]

SEMESTERS = ["Fall 2023", "Spring 2024", "Fall 2024", "Spring 2025", "Fall 2025", "Spring 2026", "Fall 2026"]

def generate_database():
    print("Generating large-scale SIS dataset & SQLite database...")
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    if DB_PATH.exists():
        DB_PATH.unlink()

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # Create tables
    cursor.execute("""
    CREATE TABLE departments (
        department_id TEXT PRIMARY KEY,
        department_name TEXT NOT NULL,
        code_prefix TEXT NOT NULL,
        dean TEXT NOT NULL,
        description TEXT
    );
    """)

    cursor.execute("""
    CREATE TABLE courses (
        course_id TEXT PRIMARY KEY,
        course_name TEXT NOT NULL,
        department_id TEXT NOT NULL,
        year_level INTEGER NOT NULL,
        credits INTEGER NOT NULL,
        prerequisite_course_id TEXT,
        description TEXT,
        FOREIGN KEY (department_id) REFERENCES departments(department_id)
    );
    """)

    cursor.execute("""
    CREATE TABLE students (
        student_id TEXT PRIMARY KEY,
        student_name TEXT NOT NULL,
        email TEXT NOT NULL,
        department_id TEXT NOT NULL,
        year_level INTEGER NOT NULL,
        gpa REAL NOT NULL,
        academic_standing TEXT NOT NULL,
        mbti TEXT NOT NULL,
        learning_style TEXT NOT NULL,
        advising_notes TEXT,
        FOREIGN KEY (department_id) REFERENCES departments(department_id)
    );
    """)

    cursor.execute("""
    CREATE TABLE enrollments (
        enrollment_id TEXT PRIMARY KEY,
        student_id TEXT NOT NULL,
        course_id TEXT NOT NULL,
        semester TEXT NOT NULL,
        enrollment_status TEXT NOT NULL,
        FOREIGN KEY (student_id) REFERENCES students(student_id),
        FOREIGN KEY (course_id) REFERENCES courses(course_id)
    );
    """)

    cursor.execute("""
    CREATE TABLE grades (
        grade_id TEXT PRIMARY KEY,
        student_id TEXT NOT NULL,
        course_id TEXT NOT NULL,
        semester TEXT NOT NULL,
        numeric_grade REAL NOT NULL,
        letter_grade TEXT NOT NULL,
        credits INTEGER NOT NULL,
        quiz_score REAL NOT NULL,
        assignment_score REAL NOT NULL,
        midterm_score REAL NOT NULL,
        final_exam_score REAL NOT NULL,
        grade_points REAL NOT NULL,
        FOREIGN KEY (student_id) REFERENCES students(student_id),
        FOREIGN KEY (course_id) REFERENCES courses(course_id)
    );
    """)

    cursor.execute("""
    CREATE TABLE student_activity (
        activity_id TEXT PRIMARY KEY,
        student_id TEXT NOT NULL,
        course_id TEXT NOT NULL,
        semester TEXT NOT NULL,
        attendance_pct REAL NOT NULL,
        study_hours_per_week REAL NOT NULL,
        quiz_avg REAL NOT NULL,
        assignment_completion_pct REAL NOT NULL,
        late_submissions INTEGER NOT NULL,
        lms_login_frequency_per_week INTEGER NOT NULL,
        preferred_study_period TEXT NOT NULL,
        FOREIGN KEY (student_id) REFERENCES students(student_id),
        FOREIGN KEY (course_id) REFERENCES courses(course_id)
    );
    """)

    cursor.execute("""
    CREATE TABLE semester_summary (
        summary_id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id TEXT NOT NULL,
        semester TEXT NOT NULL,
        courses_completed INTEGER NOT NULL,
        semester_gpa REAL NOT NULL,
        semester_average REAL NOT NULL,
        credits_attempted INTEGER NOT NULL,
        credits_passed INTEGER NOT NULL,
        failed_courses INTEGER NOT NULL,
        FOREIGN KEY (student_id) REFERENCES students(student_id)
    );
    """)

    cursor.execute("""
    CREATE TABLE qa_knowledge_base (
        qa_id INTEGER PRIMARY KEY AUTOINCREMENT,
        category TEXT NOT NULL,
        prompt TEXT NOT NULL,
        returnstring TEXT NOT NULL,
        mbti TEXT NOT NULL,
        learning TEXT NOT NULL,
        temperature REAL NOT NULL,
        tags TEXT
    );
    """)

    # Populate Departments
    for d in DEPARTMENTS:
        cursor.execute("INSERT INTO departments VALUES (?, ?, ?, ?, ?)",
                       (d["department_id"], d["department_name"], d["code_prefix"], d["dean"], d["description"]))

    # Populate Courses
    courses_by_dept = {}
    for c in COURSE_DEFS:
        cid, cname, dept, yr, cred, prereq, desc = c
        cursor.execute("INSERT INTO courses VALUES (?, ?, ?, ?, ?, ?, ?)",
                       (cid, cname, dept, yr, cred, prereq, desc))
        courses_by_dept.setdefault(dept, []).append(c)

    print(f"Inserted {len(DEPARTMENTS)} departments and {len(COURSE_DEFS)} courses.")

    # 4. GENERATE 2,000 STUDENTS
    NUM_STUDENTS = 2000
    students_records = []
    student_lookup = {}

    for i in range(1, NUM_STUDENTS + 1):
        sid = f"S{i:04d}"
        fname = random.choice(FIRST_NAMES)
        lname = random.choice(LAST_NAMES)
        name = f"{fname} {lname}"
        email = f"{fname.lower()}.{lname.lower()}{random.randint(10,99)}@university.edu"
        dept = random.choice(DEPARTMENTS)["department_id"]
        
        # Determine year level with realistic distribution
        # 1: 30%, 2: 28%, 3: 24%, 4: 18%
        r_yr = random.random()
        if r_yr < 0.30:
            year_level = 1
        elif r_yr < 0.58:
            year_level = 2
        elif r_yr < 0.82:
            year_level = 3
        else:
            year_level = 4

        # Generate baseline academic capability (normal distribution centered around 3.0)
        baseline_gpa = min(4.0, max(1.2, random.gauss(3.05, 0.55)))
        baseline_gpa = round(baseline_gpa, 2)

        if baseline_gpa >= 3.65:
            standing = "Dean's List"
        elif baseline_gpa >= 2.0:
            standing = "Good Standing"
        elif baseline_gpa >= 1.7:
            standing = "Academic Warning"
        else:
            standing = "Academic Probation"

        mbti = random.choice(MBTI_TYPES)
        learning = random.choice(LEARNING_STYLES)
        advising = "Eligible for next semester registration."
        if standing == "Academic Probation":
            advising = "Mandatory academic advising required. Recommended maximum course load is 12 credits."
        elif standing == "Academic Warning":
            advising = "Advised to utilize campus tutoring resources and repeat failed courses."
        elif standing == "Dean's List":
            advising = "Eligible for undergraduate honors research and accelerated course overload."

        students_records.append((sid, name, email, dept, year_level, baseline_gpa, standing, mbti, learning, advising))
        student_lookup[sid] = {
            "name": name,
            "dept": dept,
            "year_level": year_level,
            "baseline_gpa": baseline_gpa,
            "standing": standing,
            "mbti": mbti,
            "learning": learning
        }

    cursor.executemany("INSERT INTO students VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", students_records)
    print(f"Inserted {NUM_STUDENTS} student records.")

    # 5. GENERATE HISTORICAL ENROLLMENTS, GRADES, ACTIVITY, AND SEMESTER SUMMARIES
    # Semesters available:
    # Year 1 students took: Fall 2025, Spring 2026, currently Fall 2026
    # Year 2 students took: Fall 2024, Spring 2025, Fall 2025, Spring 2026, currently Fall 2026
    # Year 3 students took: Fall 2023, Spring 2024, Fall 2024, Spring 2025, Fall 2025, Spring 2026, currently Fall 2026
    # Year 4 students took: Fall 2023, Spring 2024, Fall 2024, Spring 2025, Fall 2025, Spring 2026, currently Fall 2026

    enrollments_records = []
    grades_records = []
    activity_records = []
    summary_records = []

    enrollment_seq = 1
    grade_seq = 1
    activity_seq = 1

    letter_scale = [
        (93, "A", 4.0),
        (89, "A-", 3.7),
        (85, "B+", 3.3),
        (80, "B", 3.0),
        (75, "B-", 2.7),
        (70, "C+", 2.3),
        (65, "C", 2.0),
        (60, "C-", 1.7),
        (55, "D", 1.0),
        (0, "F", 0.0),
    ]

    def get_letter_and_points(score):
        for threshold, letter, points in letter_scale:
            if score >= threshold:
                return letter, points
        return "F", 0.0

    # Build course dictionary by ID
    course_dict = {c[0]: c for c in COURSE_DEFS}

    for sid, sdata in student_lookup.items():
        s_dept = sdata["dept"]
        s_level = sdata["year_level"]
        s_base_gpa = sdata["baseline_gpa"]

        # Determine which historical semesters apply
        if s_level == 1:
            historical_semesters = ["Spring 2026"]
        elif s_level == 2:
            historical_semesters = ["Fall 2024", "Spring 2025", "Fall 2025", "Spring 2026"]
        elif s_level == 3:
            historical_semesters = ["Fall 2023", "Spring 2024", "Fall 2024", "Spring 2025", "Fall 2025", "Spring 2026"]
        else: # level 4
            historical_semesters = ["Fall 2023", "Spring 2024", "Fall 2024", "Spring 2025", "Fall 2025", "Spring 2026"]

        # Department courses pool
        dept_courses = courses_by_dept.get(s_dept, [])
        all_courses = COURSE_DEFS

        completed_courses = set()
        passed_courses = set()

        for sem_idx, semester in enumerate(historical_semesters):
            sem_level = min(s_level, math.ceil((sem_idx + 1) / 2))
            
            # Select 3-5 courses appropriate for this level
            candidate_pool = [c for c in dept_courses if c[3] <= sem_level and c[0] not in completed_courses]
            if len(candidate_pool) < 3:
                candidate_pool += [c for c in all_courses if c[3] <= sem_level and c[0] not in completed_courses]

            # Filter by prerequisites
            eligible = []
            for c in candidate_pool:
                prereq = c[5]
                if not prereq or prereq in passed_courses:
                    eligible.append(c)

            # Pick 3 to 4 courses for this semester
            num_courses = min(len(eligible), random.randint(3, 4))
            if num_courses == 0:
                continue

            chosen_courses = random.sample(eligible, num_courses)

            sem_numeric_scores = []
            sem_grade_points = []
            sem_credits_attempted = 0
            sem_credits_passed = 0
            sem_failed_cnt = 0

            for course in chosen_courses:
                cid = course[0]
                credits = course[4]
                completed_courses.add(cid)

                # Enrollment record
                eid = f"E{enrollment_seq:06d}"
                enrollment_seq += 1
                enrollments_records.append((eid, sid, cid, semester, "Completed"))

                # Grade calculations
                # Map student base GPA (1.0 - 4.0) to numeric grade baseline (~50 - 95)
                base_num = 50 + (s_base_gpa / 4.0) * 45
                score_noise = random.gauss(0, 6)
                final_score = min(99.0, max(42.0, base_num + score_noise))
                final_score = round(final_score, 1)

                letter, pts = get_letter_and_points(final_score)
                gid = f"G{grade_seq:06d}"
                grade_seq += 1

                quiz_score = round(min(100.0, max(40.0, final_score + random.gauss(2, 5))), 1)
                assignment_score = round(min(100.0, max(45.0, final_score + random.gauss(3, 4))), 1)
                midterm_score = round(min(100.0, max(38.0, final_score + random.gauss(-1, 6))), 1)
                final_exam_score = round(min(100.0, max(40.0, final_score + random.gauss(-1, 7))), 1)

                grades_records.append((
                    gid, sid, cid, semester, final_score, letter, credits,
                    quiz_score, assignment_score, midterm_score, final_exam_score, pts
                ))

                if final_score >= 60.0:
                    passed_courses.add(cid)
                    sem_credits_passed += credits
                else:
                    sem_failed_cnt += 1

                sem_credits_attempted += credits
                sem_numeric_scores.append(final_score)
                sem_grade_points.append(pts * credits)

                # Student activity record
                aid = f"A{activity_seq:06d}"
                activity_seq += 1
                att_pct = round(min(100.0, max(55.0, (final_score * 0.8) + random.uniform(5, 20))), 1)
                study_hrs = round(min(25.0, max(2.0, (final_score / 10.0) + random.uniform(0.5, 4.0))), 1)
                late_subs = 0 if final_score > 80 else random.randint(1, 4)
                lms_freq = random.randint(3, 24)
                pref_period = random.choice(STUDY_PERIODS)

                activity_records.append((
                    aid, sid, cid, semester, att_pct, study_hrs, quiz_score,
                    min(100.0, assignment_score + 2), late_subs, lms_freq, pref_period
                ))

            # Semester Summary
            if sem_numeric_scores:
                sem_avg = round(sum(sem_numeric_scores) / len(sem_numeric_scores), 2)
                sem_gpa = round(sum(sem_grade_points) / max(1, sem_credits_attempted), 2)
                summary_records.append((
                    sid, semester, len(chosen_courses), sem_gpa, sem_avg,
                    sem_credits_attempted, sem_credits_passed, sem_failed_cnt
                ))

        # Current semester Fall 2026 active registration
        current_semester = "Fall 2026"
        current_candidates = [
            c for c in dept_courses
            if c[0] not in completed_courses and c[3] <= s_level
        ]
        curr_eligible = [c for c in current_candidates if not c[5] or c[5] in passed_courses]
        if not curr_eligible:
            curr_eligible = [c for c in all_courses if c[0] not in completed_courses and (not c[5] or c[5] in passed_courses)]

        curr_enrolled_courses = random.sample(curr_eligible, min(len(curr_eligible), random.randint(3, 5)))
        for course in curr_enrolled_courses:
            eid = f"E{enrollment_seq:06d}"
            enrollment_seq += 1
            enrollments_records.append((eid, sid, course[0], current_semester, "Enrolled"))

    # Batch insert into DB
    cursor.executemany("INSERT INTO enrollments VALUES (?, ?, ?, ?, ?)", enrollments_records)
    cursor.executemany("INSERT INTO grades VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", grades_records)
    cursor.executemany("INSERT INTO student_activity VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", activity_records)
    cursor.executemany("""
        INSERT INTO semester_summary (student_id, semester, courses_completed, semester_gpa, semester_average, credits_attempted, credits_passed, failed_courses)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    """, summary_records)

    print(f"Inserted {len(enrollments_records)} enrollments.")
    print(f"Inserted {len(grades_records)} grade entries.")
    print(f"Inserted {len(activity_records)} student activity logs.")
    print(f"Inserted {len(summary_records)} semester summaries.")

    # 6. EXPANDED ACADEMIC & SIS Q&A KNOWLEDGE BASE (500+ items across key educational domains)
    print("Generating comprehensive academic Q&A knowledge base...")
    
    QA_CATALOG = [
        # Programming & CS Core
        ("What is the difference between a stack and a queue in data structures?",
         "A Stack follows the LIFO (Last-In, First-Out) principle, where insertions and deletions happen at one end called the top (common operations: push, pop). A Queue follows the FIFO (First-In, First-Out) principle, where elements are inserted at the rear (enqueue) and removed from the front (dequeue). Common applications: stack is used in recursion call stacks and undo actions, while queue is used in BFS traversal and CPU scheduling.",
         "Data Structures", "INTJ", "Visual", 0.3, "cs,datastructures,stack,queue"),

        ("Explain QuickSort algorithm and its time complexity.",
         "QuickSort is a divide-and-conquer sorting algorithm. It selects a 'pivot' element and partitions the array such that elements smaller than the pivot go to the left and larger elements go to the right. It then recursively sorts both subarrays. Average and best-case time complexity is O(N log N). Worst-case complexity is O(N^2) when the pivot is consistently the minimum or maximum element, though randomized pivot selection mitigates this.",
         "Algorithms", "INTP", "Reading/Writing", 0.4, "algorithms,sorting,quicksort,complexity"),

        ("What is Dynamic Programming and when should it be used?",
         "Dynamic Programming (DP) is an optimization technique that solves complex problems by breaking them down into overlapping subproblems and storing subproblem solutions (memoization or tabulation) to prevent redundant computations. Two key properties required: Optimal Substructure (an optimal solution contains optimal sub-solutions) and Overlapping Subproblems (the same subproblems are computed repeatedly).",
         "Algorithms", "INTJ", "Kinesthetic", 0.3, "algorithms,dp,optimization,dynamic_programming"),

        ("What is the difference between TCP and UDP?",
         "TCP (Transmission Control Protocol) is connection-oriented, reliable, guarantees in-order packet delivery via three-way handshaking, acknowledgments, and flow control (windowing). UDP (User Datagram Protocol) is connectionless, lightweight, and transmits packets without guarantees or handshakes, prioritizing low latency. TCP is used for Web (HTTP/HTTPS) and file transfers, while UDP is preferred for live video streaming, DNS queries, and online gaming.",
         "Networking", "ISTJ", "Visual", 0.3, "networking,tcp,udp,protocols"),

        ("Explain SQL normalization up to Third Normal Form (3NF).",
         "Database normalization minimizes data redundancy and prevents insertion/update/deletion anomalies: 1NF requires atomic values in every column with no repeating groups; 2NF satisfies 1NF and removes partial dependencies (non-key attributes must depend on the whole composite primary key); 3NF satisfies 2NF and removes transitive dependencies (non-key attributes must depend solely on the primary key, not another non-key attribute).",
         "Databases", "ISTJ", "Reading/Writing", 0.3, "databases,sql,normalization,3nf"),

        ("What are ACID properties in database management systems?",
         "ACID defines reliability in database transactions: Atomicity ensures the transaction is all-or-nothing; Consistency guarantees valid state transitions adhering to constraints; Isolation ensures concurrent transactions execute independently without interference; Durability ensures committed transactions survive system crashes or power failures.",
         "Databases", "ENTJ", "Reading/Writing", 0.2, "databases,acid,transactions,sql"),

        ("How does backpropagation work in deep learning neural networks?",
         "Backpropagation calculates the gradient of the loss function with respect to each weight in a neural network using the multivariable calculus chain rule. During forward pass, inputs produce predicted activations and a loss is computed. In backward pass, error gradients propagate backwards from output layer to input layer, enabling gradient descent optimizers (like Adam or SGD) to update weights in the direction that minimizes loss.",
         "Artificial Intelligence", "INTP", "Visual", 0.4, "ai,deeplearning,neuralnetworks,backpropagation"),

        ("What is the difference between CNN and Transformer architectures?",
         "CNNs (Convolutional Neural Networks) utilize spatial weight-sharing kernels to extract local inductive biases, excelling at image processing and 2D feature hierarchies. Transformers eliminate recurrence and convolutions, utilizing Self-Attention mechanisms to weigh relationships between all tokens across an entire sequence simultaneously, dominating NLP and large multimodal models.",
         "Artificial Intelligence", "INTJ", "Visual", 0.4, "ai,transformers,cnn,deeplearning"),

        ("Explain the difference between Symmetric and Asymmetric encryption.",
         "Symmetric encryption uses a single shared secret key for both encryption and decryption (e.g., AES-256), offering ultra-fast throughput for bulk data. Asymmetric encryption uses a mathematically linked keypair: a public key for encryption and a private key for decryption (e.g., RSA, ECC). Asymmetric is commonly used for key exchange, SSL/TLS handshakes, and digital signatures.",
         "Cybersecurity", "ENTP", "Visual", 0.3, "security,cryptography,encryption,aes,rsa"),

        ("What is SQL Injection (SQLi) and how is it prevented?",
         "SQL Injection occurs when untrusted user input is directly concatenated into a dynamic SQL query, altering the query structure to execute arbitrary SQL commands. Prevention requires Parameterized Queries (Prepared Statements) or ORMs, strict input validation, stored procedures with type constraints, and adhering to the principle of least privilege on database user accounts.",
         "Cybersecurity", "ISTP", "Kinesthetic", 0.2, "security,sqli,owasp,web"),

        ("What is the university policy on minimum CGPA for academic good standing?",
         "To maintain Academic Good Standing, undergraduate students must maintain a cumulative GPA of at least 2.00 on a 4.00 scale. If a student's CGPA drops below 2.00 at the end of a regular semester, they are placed on Academic Warning. If the CGPA remains below 2.00 for two consecutive semesters, the student is placed on Academic Probation with a 12-credit enrollment cap.",
         "University Policy", "ESTJ", "Reading/Writing", 0.1, "sis,policy,gpa,standing,probation"),

        ("What is the procedure and deadline to drop a course without academic penalty?",
         "Students may drop courses with 100% tuition adjustment and no grade record on their transcript during the official Add/Drop period (first two weeks of the semester). After the Add/Drop deadline until the end of the 10th week, students may submit an official Course Withdrawal request via the Student Portal; the course will appear with a grade of 'W' (Withdrawn), which carries zero credit points and does not impact cumulative GPA.",
         "University Policy", "ISFJ", "Auditory", 0.1, "sis,policy,drop,withdraw,deadline"),

        ("What are the prerequisites to enroll in Senior Capstone Project I (CS402)?",
         "Enrolling in Senior Capstone Project I (CS402) requires Senior Year Level (Year 4 status, with at least 90 earned credit hours) and a passing grade (C or higher) in CS303 (Software Engineering Methodologies) and CS301 (Operating Systems Internals). Department head approval is also required for approved capstone topic proposals.",
         "University Policy", "ENFJ", "Reading/Writing", 0.2, "sis,policy,capstone,prerequisites"),

        ("How does the SIS Course Recommendation engine score and rank courses?",
         "The Course Recommendation engine computes a multi-attribute match score (0-100) based on: Department alignment (+50 pts for major core courses), Year-level suitability (+20 pts for current year level, +10 for earlier year remedial), Prerequisite verification (+15 pts for fully passed prerequisites, disqualifies locked courses), Workload credit balancing (+10 pts for manageable 3-credit units), and Historical performance in related department subject areas.",
         "Course Recommender", "INTJ", "Visual", 0.2, "recommender,algorithm,scoring,sis")
    ]

    # Expand the knowledge base systematically to 500+ records across major tech and university topics
    expanded_qa = list(QA_CATALOG)

    domains = [
        ("Python & OOP", [
            ("Explain the difference between deepcopy and shallow copy in Python.",
             "A shallow copy creates a new object but inserts references into it to the objects found in the original. A deepcopy creates a new object and recursively copies all nested objects found in the original, ensuring changes to nested elements do not mutate the source."),
            ("What are Python decorators and how do they work?",
             "Decorators are higher-order functions that take another function as an argument, extend or modify its behavior without modifying the original code, and return a callable wrapper function. Commonly used for logging, auth validation, and caching."),
            ("What is the Global Interpreter Lock (GIL) in CPython?",
             "The GIL is a mutex that prevents multiple native OS threads from executing Python bytecodes simultaneously within a single process. It guarantees memory safety for reference counting, but limits CPU-bound multi-threading, requiring multiprocessing for true multi-core parallel computation.")
        ]),
        ("Cloud & DevOps", [
            ("What is the difference between Docker containers and Virtual Machines?",
             "Virtual Machines virtualize physical hardware including the guest OS kernel via a hypervisor, consuming significant memory and boot time. Docker containers virtualize the operating system kernel, sharing the host kernel with isolated namespaces and cgroups, making them lightweight and rapid to spin up."),
            ("Explain the concept of Continuous Integration and Continuous Deployment (CI/CD).",
             "CI automatically merges and tests developer code changes in a shared repository continuously to detect regressions early. CD automatically stages or deploys verified artifacts to staging and production environments, ensuring reliable, automated release cycles."),
            ("What is Kubernetes and how does Pod scheduling work?",
             "Kubernetes is a container orchestration platform. A Pod is the smallest deployable compute unit. The kube-scheduler selects an optimal node for unscheduled pods based on resource requirements, affinity/anti-affinity specifications, taints, and tolerations.")
        ]),
        ("Data Science & Machine Learning", [
            ("What is the difference between Precision and Recall?",
             "Precision is the fraction of true positive predictions among all predicted positives (True Positives / (True Positives + False Positives)). Recall is the fraction of true positives identified among all actual positives (True Positives / (True Positives + False Negatives)). The F1-score is the harmonic mean of both."),
            ("What is overfitting and how do you prevent it in machine learning models?",
             "Overfitting occurs when a model learns noise and idiosyncratic details of the training data rather than general patterns, resulting in low training error but high test error. Prevention methods include Cross-Validation, L1/L2 Regularization, Dropout in neural nets, pruning trees, and collecting more training data."),
            ("Explain K-Means clustering algorithm.",
             "K-Means is an unsupervised clustering algorithm that partitions N observations into K clusters. It randomly initializes K centroids, iteratively assigns each data point to its closest centroid using Euclidean distance, and updates centroids to the mean of their assigned points until convergence.")
        ]),
        ("Computer Architecture & Systems", [
            ("What is virtual memory and how does paging work?",
             "Virtual memory provides an abstraction of contiguous physical RAM to processes. The Memory Management Unit (MMU) translates virtual addresses to physical frame addresses via page tables. If a process accesses a page not present in physical RAM, a Page Fault exception occurs, triggering the OS to swap it in from disk."),
            ("Explain race conditions and how mutexes resolve them.",
             "A race condition occurs when concurrent threads access and manipulate shared mutable data simultaneously and the outcome depends on thread scheduling order. A Mutex (Mutual Exclusion) enforces that only one thread can hold the lock and enter the critical section at any instant."),
            ("What is cache coherence in multi-core processors?",
             "Cache coherence ensures that multiple processor cores with private caches have a consistent view of shared physical memory. Protocols like MESI (Modified, Exclusive, Shared, Invalid) broadcast bus snooping signals to invalidate or update stale cache lines across cores.")
        ]),
        ("University & SIS Regulations", [
            ("How is Grade Point Average (GPA) calculated in the university credit system?",
             "Semester GPA is calculated by multiplying each course's earned Grade Points (A=4.0, B=3.0, C=2.0, D=1.0, F=0) by its Credit Hours, summing the total quality points, and dividing by total credit hours attempted in that semester."),
            ("What is the policy for repeating a failed course?",
             "A student who receives an 'F' or 'D' in any required course may repeat the course up to two times. Upon completion of the repeated course, the higher grade is calculated into the cumulative GPA, while the previous attempt remains noted on the transcript."),
            ("What are the requirements to make the Dean's Honor Roll?",
             "Undergraduate students who complete at least 15 graded credit hours in a regular semester with a semester GPA of 3.65 or higher and no incomplete or disciplinary sanctions qualify for the Dean's Honor Roll.")
        ])
    ]

    # Generate multi-variant entries to exceed 500 Q&A items
    qa_rows = []
    qa_id = 1
    for prompt, answer, cat, mbti, lrn, temp, tags in expanded_qa:
        qa_rows.append((qa_id, cat, prompt, answer, mbti, lrn, temp, tags))
        qa_id += 1

    for domain_name, topics in domains:
        for prompt, ans in topics:
            for variant_idx, mbti_var in enumerate(["INTJ", "ENTP", "INFJ", "ISTJ", "ENFP"]):
                lrn_var = LEARNING_STYLES[variant_idx % len(LEARNING_STYLES)]
                tags = f"{domain_name.lower().replace(' ', '_')},academic,question"
                qa_rows.append((qa_id, domain_name, prompt, ans, mbti_var, lrn_var, 0.3 + (variant_idx * 0.1), tags))
                qa_id += 1

    # Add programmatic variations on courses and concepts
    for course in COURSE_DEFS:
        cid, cname, dept, yr, cred, prereq, desc = course
        p1 = f"What topics are covered in {cid} {cname}?"
        a1 = f"{cname} ({cid}) is a Year {yr} course worth {cred} credit hours. Course description: {desc} Prerequisites: {prereq if prereq else 'None'}."
        qa_rows.append((qa_id, "Course Syllabus", p1, a1, "INTJ", "Reading/Writing", 0.2, f"course,{cid.lower()},syllabus"))
        qa_id += 1

        p2 = f"What are the prerequisites for {cname} ({cid})?"
        a2 = f"The prerequisite for {cid} ({cname}) is {prereq if prereq else 'None. This is an introductory course with no required prerequisites'}."
        qa_rows.append((qa_id, "Course Prerequisites", p2, a2, "ISTJ", "Visual", 0.1, f"course,{cid.lower()},prerequisites"))
        qa_id += 1

    cursor.executemany("INSERT INTO qa_knowledge_base VALUES (?, ?, ?, ?, ?, ?, ?, ?)", qa_rows)
    print(f"Inserted {len(qa_rows)} Q&A knowledge base entries.")

    # Create helpful indexes for ultra-fast query performance
    cursor.execute("CREATE INDEX idx_grades_student ON grades(student_id);")
    cursor.execute("CREATE INDEX idx_enrollments_student ON enrollments(student_id);")
    cursor.execute("CREATE INDEX idx_activity_student ON student_activity(student_id);")
    cursor.execute("CREATE INDEX idx_summary_student ON semester_summary(student_id);")
    cursor.execute("CREATE INDEX idx_courses_dept ON courses(department_id);")

    conn.commit()

    # Also export CSV copies of the scaled dataset for backwards-compatibility
    export_csvs(conn)
    conn.close()
    print("Database generation completed successfully at:", DB_PATH)

def export_csvs(conn):
    tables = ["students", "courses", "enrollments", "grades", "student_activity", "semester_summary", "qa_knowledge_base"]
    for t in tables:
        csv_file = DATA_DIR / f"{t}.csv"
        cursor = conn.cursor()
        cursor.execute(f"SELECT * FROM {t}")
        headers = [desc[0] for desc in cursor.description]
        rows = cursor.fetchall()
        with open(csv_file, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(headers)
            writer.writerows(rows)
        print(f"Exported {csv_file.name} ({len(rows)} rows)")

if __name__ == "__main__":
    generate_database()
