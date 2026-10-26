import { Department, Student, Course } from "../types";

export const DEPARTMENTS: Department[] = [
  {
    department_id: "8",
    department_name: "Cyber Security Program",
    code_prefix: "CYS",
    dean: "Prof. Dr. Tamer Helmy",
    description: "Cybersecurity, Network Defense, Cryptography, and Threat Intelligence."
  },
  {
    department_id: "9",
    department_name: "Intelligent Systems",
    code_prefix: "IS",
    dean: "Prof. Dr. Tamer Helmy",
    description: "Artificial Intelligence, Robotics, Autonomous Agents, and Cognitive Systems."
  },
  {
    department_id: "10",
    department_name: "Data Science & Artificial Intelligence",
    code_prefix: "DSAI",
    dean: "Prof. Dr. Tamer Helmy",
    description: "Big Data Engineering, Machine Learning, Predictive Analytics, and Deep Learning."
  },
  {
    department_id: "11",
    department_name: "Software Industry & Multimedia (SIM)",
    code_prefix: "SIM",
    dean: "Assoc. Prof. Dr. Ahmed Sherif Zekri",
    description: "Software Engineering Architecture, Cloud Computing, Full-Stack Development, and Multimedia."
  }
];

export const INITIAL_STUDENTS: Student[] = [
  {
    student_id: "FCDS20260001",
    student_name: "Adam Ibrahim Shehata El-Naggar",
    email: "adam.fcds20260001@anu.edu.eg",
    department_id: "10",
    department_name: "Data Science & Artificial Intelligence",
    year_level: 1,
    gpa: 3.05,
    academic_standing: "Good Standing",
    mbti: "ENFJ",
    learning_style: "Auditory",
    advising_notes: "Eligible for standard semester registration. Good analytical foundation in statistics.",
    dean: "Prof. Dr. Tamer Helmy"
  },
  {
    student_id: "FCDS20260003",
    student_name: "Nour Hossam Kamal El-Masry",
    email: "nour.fcds20260003@anu.edu.eg",
    department_id: "10",
    department_name: "Data Science & Artificial Intelligence",
    year_level: 1,
    gpa: 3.71,
    academic_standing: "Dean's List",
    mbti: "INTJ",
    learning_style: "Auditory",
    advising_notes: "Outstanding performance in Linear Algebra and Discrete Mathematics.",
    dean: "Prof. Dr. Tamer Helmy"
  },
  {
    student_id: "FCDS20250001",
    student_name: "Fatma Adel Abdel-Hamid El-Sayed",
    email: "fatma.fcds20250001@anu.edu.eg",
    department_id: "10",
    department_name: "Data Science & Artificial Intelligence",
    year_level: 2,
    gpa: 2.93,
    academic_standing: "Good Standing",
    mbti: "ENFP",
    learning_style: "Reading/Writing",
    advising_notes: "Eligible for advanced data modeling. Recommended to balance lab heavy courses.",
    dean: "Prof. Dr. Tamer Helmy"
  },
  {
    student_id: "FCDS20240001",
    student_name: "Reem Tarek Kamal El-Kady",
    email: "reem.fcds20240001@anu.edu.eg",
    department_id: "10",
    department_name: "Data Science & Artificial Intelligence",
    year_level: 3,
    gpa: 3.38,
    academic_standing: "Good Standing",
    mbti: "INTJ",
    learning_style: "Visual",
    advising_notes: "On track for early graduation. Prerequisites for Capstone Part I fulfilled.",
    dean: "Prof. Dr. Tamer Helmy"
  },
  {
    student_id: "FCDS20230001",
    student_name: "Ziad Hossam Helmy El-Sayed",
    email: "ziad.fcds20230001@anu.edu.eg",
    department_id: "10",
    department_name: "Data Science & Artificial Intelligence",
    year_level: 4,
    gpa: 3.71,
    academic_standing: "Dean's List",
    mbti: "INTP",
    learning_style: "Kinesthetic",
    advising_notes: "Senior Capstone Project approved in Deep Reinforcement Learning.",
    dean: "Prof. Dr. Tamer Helmy"
  },
  {
    student_id: "CYS20260015",
    student_name: "Omar Khaled Mahmoud El-Sabbagh",
    email: "omar.cys20260015@anu.edu.eg",
    department_id: "8",
    department_name: "Cyber Security Program",
    year_level: 1,
    gpa: 1.84,
    academic_standing: "Academic Warning",
    mbti: "ISTP",
    learning_style: "Kinesthetic",
    advising_notes: "CGPA below 2.00 threshold. Academic advising consultation required before registration.",
    dean: "Prof. Dr. Tamer Helmy"
  },
  {
    student_id: "SIM20250042",
    student_name: "Salma Hany Mostafa Mansour",
    email: "salma.sim20250042@anu.edu.eg",
    department_id: "11",
    department_name: "Software Industry & Multimedia (SIM)",
    year_level: 2,
    gpa: 3.82,
    academic_standing: "Dean's List",
    mbti: "ENTJ",
    learning_style: "Visual",
    advising_notes: "Top 2% class rank. Eligible for honors independent study in Cloud Architecture.",
    dean: "Assoc. Prof. Dr. Ahmed Sherif Zekri"
  },
  {
    student_id: "IS20240019",
    student_name: "Youssef Amr Hassan Radwan",
    email: "youssef.is20240019@anu.edu.eg",
    department_id: "9",
    department_name: "Intelligent Systems",
    year_level: 3,
    gpa: 2.78,
    academic_standing: "Good Standing",
    mbti: "INFP",
    learning_style: "Reading/Writing",
    advising_notes: "Cleared probation with significant improvement in computer vision & autonomous robotics.",
    dean: "Prof. Dr. Tamer Helmy"
  }
];

export const COURSES: Course[] = [
  { course_id: "DSAI101", course_name: "Introduction to Data Science & AI", department_id: "10", year_level: 1, credits: 3, description: "Fundamental concepts of data pipelines, statistical exploratory analysis, and AI paradigms.", course_type: "Core", is_required: 1 },
  { course_id: "CS111", course_name: "Structured Programming (C++)", department_id: "10", year_level: 1, credits: 3, description: "Procedural programming, memory models, pointers, recursion, and object design.", course_type: "Core", is_required: 1 },
  { course_id: "MATH101", course_name: "Calculus & Linear Algebra I", department_id: "10", year_level: 1, credits: 3, description: "Vector spaces, matrices, eigenvalues, single-variable differential and integral calculus.", course_type: "Core", is_required: 1 },
  { course_id: "STAT101", course_name: "Probability & Applied Statistics", department_id: "10", year_level: 1, credits: 3, description: "Random variables, probability distributions, hypothesis testing, and regression models.", course_type: "Core", is_required: 1 },
  { course_id: "HUM101", course_name: "Technical Communication & Ethics", department_id: "10", year_level: 1, credits: 2, description: "Academic research reporting, engineering ethics, privacy laws, and presentation skills.", course_type: "Elective", is_required: 0 },
  { course_id: "CS112", course_name: "Data Structures & Algorithm Analysis", department_id: "10", year_level: 1, credits: 3, prerequisite_course_id: "CS111", description: "Stacks, queues, balanced trees, heaps, graphs, hashing, and asymptotic algorithmic analysis.", course_type: "Core", is_required: 1 },
  { course_id: "DSAI201", course_name: "Machine Learning Foundations", department_id: "10", year_level: 2, credits: 3, prerequisite_course_id: "DSAI101", description: "Supervised and unsupervised learning, decision trees, support vector machines, and ensemble methods.", course_type: "Core", is_required: 1 },
  { course_id: "CS204", course_name: "Database Systems & SQL Optimization", department_id: "10", year_level: 2, credits: 3, prerequisite_course_id: "CS111", description: "Relational database schema design, normalization, ACID properties, indexing, and query plans.", course_type: "Core", is_required: 1 },
  { course_id: "MATH201", course_name: "Discrete Mathematics & Graph Theory", department_id: "10", year_level: 2, credits: 3, prerequisite_course_id: "MATH101", description: "Propositional logic, combinatorics, relations, graph algorithms, and formal proofs.", course_type: "Core", is_required: 1 },
  { course_id: "DSAI202", course_name: "Deep Learning & Neural Networks", department_id: "10", year_level: 2, credits: 3, prerequisite_course_id: "DSAI201", description: "Backpropagation, convolutional neural networks, transformers, and loss optimization.", course_type: "Core", is_required: 1 },
  { course_id: "DSAI301", course_name: "Big Data Architecture & Spark", department_id: "10", year_level: 3, credits: 3, prerequisite_course_id: "CS204", description: "Distributed data storage, Hadoop ecosystem, Apache Spark streaming, and NoSQL engines.", course_type: "Core", is_required: 1 },
  { course_id: "DSAI302", course_name: "Natural Language Processing", department_id: "10", year_level: 3, credits: 3, prerequisite_course_id: "DSAI202", description: "Word embeddings, sequence models, self-attention mechanisms, and large language models.", course_type: "Elective", is_required: 0 },
  { course_id: "CS305", course_name: "Operating Systems & Concurrency", department_id: "10", year_level: 3, credits: 3, prerequisite_course_id: "CS112", description: "Process scheduling, thread synchronization, deadlocks, virtual memory, and file systems.", course_type: "Core", is_required: 1 },
  { course_id: "DSAI401", course_name: "Senior Capstone Project I", department_id: "10", year_level: 4, credits: 4, prerequisite_course_id: "DSAI301", description: "Independent applied research or production software development in AI and Data Science.", course_type: "Core", is_required: 1 },
  { course_id: "DSAI402", course_name: "Senior Capstone Project II", department_id: "10", year_level: 4, credits: 4, prerequisite_course_id: "DSAI401", description: "Final thesis defense, system deployment, and academic paper publication.", course_type: "Core", is_required: 1 }
];

export const KNOWLEDGE_BASE = [
  {
    category: "Data Structures",
    keywords: ["stack", "queue", "lifo", "fifo"],
    prompt: "What is the difference between a stack and a queue in data structures?",
    answer: "A Stack follows the LIFO (Last-In, First-Out) principle, where insertions and deletions happen at one end called the top (push, pop). A Queue follows the FIFO (First-In, First-Out) principle, where elements are inserted at the rear (enqueue) and removed from the front (dequeue). Applications: stack is used in recursion call stacks and undo operations; queue is used in BFS traversal, task scheduling, and printer queues.",
    similarity: 0.98
  },
  {
    category: "Algorithms",
    keywords: ["quicksort", "time complexity", "sort", "pivot"],
    prompt: "Explain QuickSort algorithm and its time complexity.",
    answer: "QuickSort is a divide-and-conquer sorting algorithm. It selects a 'pivot' element and partitions the array such that elements smaller than the pivot go to the left and larger elements go to the right. It then recursively sorts both subarrays. Average and best-case time complexity is O(N log N). Worst-case complexity is O(N^2) when the pivot is consistently the minimum or maximum element, though randomized pivot selection mitigates this in practice.",
    similarity: 0.99
  },
  {
    category: "Algorithms",
    keywords: ["dynamic programming", "dp", "memoization", "tabulation"],
    prompt: "What is Dynamic Programming and when should it be used?",
    answer: "Dynamic Programming (DP) is an optimization technique that solves complex problems by breaking them down into overlapping subproblems and storing subproblem solutions (memoization or tabulation) to prevent redundant computations. Two key properties required: Optimal Substructure (an optimal solution contains optimal sub-solutions) and Overlapping Subproblems (the same subproblems are computed repeatedly).",
    similarity: 0.97
  },
  {
    category: "Databases",
    keywords: ["acid", "transactions", "atomicity", "consistency", "isolation", "durability"],
    prompt: "What are ACID properties in database management systems?",
    answer: "ACID defines reliability in database transactions: Atomicity ensures the transaction is all-or-nothing; Consistency guarantees valid state transitions adhering to schema constraints; Isolation ensures concurrent transactions execute independently without dirty reads; Durability ensures committed transactions survive system crashes or power failures.",
    similarity: 0.99
  },
  {
    category: "Networking",
    keywords: ["tcp", "udp", "connection", "handshake"],
    prompt: "What is the difference between TCP and UDP?",
    answer: "TCP (Transmission Control Protocol) is connection-oriented, reliable, and guarantees in-order packet delivery via three-way handshaking, acknowledgments, and flow control. UDP (User Datagram Protocol) is connectionless, lightweight, and transmits packets without guarantees or handshakes, prioritizing low latency. TCP is used for Web (HTTP/HTTPS) and file transfers, while UDP is preferred for live video streaming, DNS queries, and online gaming.",
    similarity: 0.98
  },
  {
    category: "Artificial Intelligence",
    keywords: ["backpropagation", "gradient", "neural network", "deep learning"],
    prompt: "How does backpropagation work in deep learning neural networks?",
    answer: "Backpropagation calculates the gradient of the loss function with respect to each weight in a neural network using the multivariable calculus chain rule. During forward pass, inputs produce predicted activations and a loss is computed. In backward pass, error gradients propagate backwards from output layer to input layer, enabling gradient descent optimizers (like Adam or SGD) to update weights in the direction that minimizes loss.",
    similarity: 0.96
  },
  {
    category: "Academic Policy",
    keywords: ["cgpa", "academic standing", "probation", "warning", "good standing"],
    prompt: "What is the university policy on minimum CGPA for academic good standing?",
    answer: "According to university academic bylaws, students must maintain a Cumulative GPA (CGPA) of at least 2.00 / 4.00 to remain in Good Standing. A CGPA between 1.70 and 1.99 incurs an Academic Warning with a maximum 14-credit enrollment cap. A CGPA below 1.70 places the student on Academic Probation, requiring mandatory advising and a remedial study contract.",
    similarity: 0.98
  },
  {
    category: "Academic Policy",
    keywords: ["repeat", "failed course", "course repeat", "grade replacement"],
    prompt: "What is the policy for repeating a failed course?",
    answer: "A student who receives a grade of 'F' (below 60.0%) in a required course must repeat the course at the earliest available semester. Upon successful repetition, the new grade points replace the failed grade in the Cumulative GPA calculation, although the original registration record remains on the official academic transcript.",
    similarity: 0.97
  }
];
