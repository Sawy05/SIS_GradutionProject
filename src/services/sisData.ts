import { Department, Student, Course } from "../types";

export const DEPARTMENTS: Department[] = [
  {
    "department_id": "8",
    "department_name": "Cyber Security Program",
    "code_prefix": "CYS",
    "dean": "Prof. Dr. Tamer Helmy",
    "description": "Cybersecurity, Network Defense, Cryptography, and Threat Intelligence."
  },
  {
    "department_id": "9",
    "department_name": "Intelligent Systems",
    "code_prefix": "IS",
    "dean": "Prof. Dr. Tamer Helmy",
    "description": "Artificial Intelligence, Robotics, Autonomous Agents, and Cognitive Systems."
  },
  {
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "code_prefix": "DSAI",
    "dean": "Prof. Dr. Tamer Helmy",
    "description": "Big Data Engineering, Machine Learning, Predictive Analytics, and Deep Learning."
  },
  {
    "department_id": "11",
    "department_name": "Software Industry & Multimedia (SIM)",
    "code_prefix": "SIM",
    "dean": "Assoc. Prof. Dr. Ahmed Sherif Zekri",
    "description": "Software Engineering Architecture, Cloud Computing, Full-Stack Development, and Multimedia."
  }
];

export const COURSES: Course[] = [
  {
    "course_id": "00103N",
    "course_name": "Introduction to Computer Systems",
    "department_id": "10",
    "year_level": 1,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Introduction to Computer Systems (00103N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "00109N",
    "course_name": "Introduction to Artificial Intelligence",
    "department_id": "10",
    "year_level": 1,
    "credits": 3,
    "prerequisite_course_id": "00107N",
    "description": "Introduction to Artificial Intelligence (00109N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "00110N",
    "course_name": "Programming II",
    "department_id": "10",
    "year_level": 1,
    "credits": 3,
    "prerequisite_course_id": "00105N",
    "description": "Programming II (00110N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "00104N",
    "course_name": "Introduction to Data Sciences",
    "department_id": "8",
    "year_level": 1,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Introduction to Data Sciences (00104N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "0X006N",
    "course_name": "Man and Environment",
    "department_id": "8",
    "year_level": 1,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "Man and Environment (0X006N) is an official Elective course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "0X005N",
    "course_name": "Self-management",
    "department_id": "10",
    "year_level": 1,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "Self-management (0X005N) is an official Elective course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "00106N",
    "course_name": "Probability and Statistics I",
    "department_id": "10",
    "year_level": 1,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Probability and Statistics I (00106N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "00107N",
    "course_name": "Discrete Structures",
    "department_id": "10",
    "year_level": 1,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Discrete Structures (00107N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "0X009N",
    "course_name": "Technical writing",
    "department_id": "10",
    "year_level": 1,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "Technical writing (0X009N) is an official Elective course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "00108N",
    "course_name": "Data Structures and Algorithms",
    "department_id": "8",
    "year_level": 1,
    "credits": 3,
    "prerequisite_course_id": "00105N",
    "description": "Data Structures and Algorithms (00108N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "00101N",
    "course_name": "Linear Algebra",
    "department_id": "10",
    "year_level": 1,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Linear Algebra (00101N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "0X020N",
    "course_name": "Communication skills",
    "department_id": "10",
    "year_level": 1,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "Communication skills (0X020N) is an official Elective course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "00102N",
    "course_name": "Calculus",
    "department_id": "10",
    "year_level": 1,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Calculus (00102N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "00105N",
    "course_name": "Programming I",
    "department_id": "10",
    "year_level": 1,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Programming I (00105N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "0X011N",
    "course_name": "English for CS",
    "department_id": "10",
    "year_level": 1,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "English for CS (0X011N) is an official Elective course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170103N",
    "course_name": "Introduction to Computing Technology",
    "department_id": "11",
    "year_level": 1,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Introduction to Computing Technology (4170103N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170105N",
    "course_name": "Physics (1)",
    "department_id": "11",
    "year_level": 1,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Physics (1) (4170105N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170102N",
    "course_name": "Math (II)",
    "department_id": "11",
    "year_level": 1,
    "credits": 2,
    "prerequisite_course_id": "4170101N",
    "description": "Math (II) (4170102N) is an official Core course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170101N",
    "course_name": "Math (I)",
    "department_id": "11",
    "year_level": 1,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "Math (I) (4170101N) is an official Core course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "HUM-3-SIMN",
    "course_name": "English Language",
    "department_id": "11",
    "year_level": 1,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "English Language (HUM-3-SIMN) is an official Elective course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "HUM-2-SIMN",
    "course_name": "Public Health",
    "department_id": "11",
    "year_level": 1,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "Public Health (HUM-2-SIMN) is an official Elective course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170107N",
    "course_name": "Introduction to probability",
    "department_id": "11",
    "year_level": 1,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "Introduction to probability (4170107N) is an official Core course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170106N",
    "course_name": "Physics (II)",
    "department_id": "11",
    "year_level": 1,
    "credits": 3,
    "prerequisite_course_id": "4170105N",
    "description": "Physics (II) (4170106N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170108N",
    "course_name": "Computer Programming",
    "department_id": "11",
    "year_level": 1,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Computer Programming (4170108N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170104N",
    "course_name": "Mathematics for Computer Science",
    "department_id": "11",
    "year_level": 1,
    "credits": 3,
    "prerequisite_course_id": "4170103N",
    "description": "Mathematics for Computer Science (4170104N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "03204N",
    "course_name": "Regression Analysis",
    "department_id": "10",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "00201N",
    "description": "Regression Analysis (03204N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "01202N",
    "course_name": "Optimization Methods",
    "department_id": "9",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "00101N, 00102N",
    "description": "Optimization Methods (01202N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "00203N",
    "course_name": "Numerical Computations",
    "department_id": "10",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "00101N",
    "description": "Numerical Computations (00203N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "00202N",
    "course_name": "Introduction to Databases",
    "department_id": "9",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "00105N",
    "description": "Introduction to Databases (00202N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "00205N",
    "course_name": "Mobile Programming",
    "department_id": "10",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "00105N",
    "description": "Mobile Programming (00205N) is an official Elective course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "00204N",
    "course_name": "Web Programming",
    "department_id": "10",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "00105N",
    "description": "Web Programming (00204N) is an official Elective course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "01204N",
    "course_name": "Neural Networks",
    "department_id": "10",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "00109N",
    "description": "Neural Networks (01204N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "03203N",
    "course_name": "Data Science Tools and Software",
    "department_id": "10",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "00104N, 00201N",
    "description": "Data Science Tools and Software (03203N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "03202N",
    "course_name": "Data Science Methodology",
    "department_id": "10",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "00104N",
    "description": "Data Science Methodology (03202N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "00201N",
    "course_name": "Probability and Statistics II",
    "department_id": "8",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "00106N",
    "description": "Probability and Statistics II (00201N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "00207N",
    "course_name": "Computer Networks",
    "department_id": "8",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "00103N, 00105N",
    "description": "Computer Networks (00207N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "0X007N",
    "course_name": "Critical Thinking",
    "department_id": "8",
    "year_level": 2,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "Critical Thinking (0X007N) is an official Core course (2 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "01201N",
    "course_name": "Smart Systems and Computational Intelligence",
    "department_id": "9",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "00109N",
    "description": "Smart Systems and Computational Intelligence (01201N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "00206N",
    "course_name": "Data Mining and Analytics",
    "department_id": "8",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "00201N",
    "description": "Data Mining and Analytics (00206N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "01206N",
    "course_name": "AI Security Issues",
    "department_id": "9",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "00109N",
    "description": "AI Security Issues (01206N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "02203N",
    "course_name": "Cryptography",
    "department_id": "8",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "02201N, 02202N",
    "description": "Cryptography (02203N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "02202N",
    "course_name": "Number Theory",
    "department_id": "8",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "00101N, 00106N",
    "description": "Number Theory (02202N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "02201N",
    "course_name": "Introduction to Cybersecurity",
    "department_id": "8",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Introduction to Cybersecurity (02201N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170202N",
    "course_name": "Math (IV)",
    "department_id": "11",
    "year_level": 2,
    "credits": 2,
    "prerequisite_course_id": "4170201N",
    "description": "Math (IV) (4170202N) is an official Core course (2 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170201N",
    "course_name": "Math (III)",
    "department_id": "11",
    "year_level": 2,
    "credits": 2,
    "prerequisite_course_id": "4170102N",
    "description": "Math (III) (4170201N) is an official Core course (2 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170204N",
    "course_name": "Computational Tools for Data Science",
    "department_id": "11",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "4170108N",
    "description": "Computational Tools for Data Science (4170204N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170203N",
    "course_name": "Object Oriented Programming",
    "department_id": "11",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "4170108N",
    "description": "Object Oriented Programming (4170203N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170213N",
    "course_name": "Computer Animation Techniques",
    "department_id": "11",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "4170205N",
    "description": "Computer Animation Techniques (4170213N) is an official Elective course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170212N",
    "course_name": "Scientific & Technical Reporting",
    "department_id": "11",
    "year_level": 2,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "Scientific & Technical Reporting (4170212N) is an official Elective course (2 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170207N",
    "course_name": "Software Engineering Theory",
    "department_id": "11",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Software Engineering Theory (4170207N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170208N",
    "course_name": "Multimedia Systems",
    "department_id": "11",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "4170203N",
    "description": "Multimedia Systems (4170208N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170214N",
    "course_name": "Sound Engineering",
    "department_id": "11",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Sound Engineering (4170214N) is an official Elective course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "HUM-4-SIMN",
    "course_name": "Arabic Language",
    "department_id": "11",
    "year_level": 2,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "Arabic Language (HUM-4-SIMN) is an official Elective course (2 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170210N",
    "course_name": "Software Analysis and Verification",
    "department_id": "11",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "4170207N",
    "description": "Software Analysis and Verification (4170210N) is an official Elective course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170205N",
    "course_name": "Game Programming",
    "department_id": "11",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "4170203N",
    "description": "Game Programming (4170205N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170206N",
    "course_name": "Data Structure",
    "department_id": "11",
    "year_level": 2,
    "credits": 3,
    "prerequisite_course_id": "4170203N",
    "description": "Data Structure (4170206N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "HUM-6-SIMN",
    "course_name": "Self Management",
    "department_id": "11",
    "year_level": 2,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "Self Management (HUM-6-SIMN) is an official Elective course (2 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "HUM-5-SIMN",
    "course_name": "History of Science",
    "department_id": "11",
    "year_level": 2,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "History of Science (HUM-5-SIMN) is an official Elective course (2 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170211N",
    "course_name": "Theory of Computation",
    "department_id": "11",
    "year_level": 2,
    "credits": 2,
    "prerequisite_course_id": "4170104N",
    "description": "Theory of Computation (4170211N) is an official Elective course (2 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "01306N",
    "course_name": "Pattern Recognition",
    "department_id": "10",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00101N, 00106N",
    "description": "Pattern Recognition (01306N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "03304N",
    "course_name": "Data Computation and Analysis",
    "department_id": "10",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00206N, 00305N",
    "description": "Data Computation and Analysis (03304N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "03303N",
    "course_name": "Data Visualization Tools",
    "department_id": "10",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "03203N",
    "description": "Data Visualization Tools (03303N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "0X008N",
    "course_name": "Innovation & Entrepreneurship",
    "department_id": "10",
    "year_level": 3,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "Innovation & Entrepreneurship (0X008N) is an official Core course (2 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "00303N",
    "course_name": "Analysis and Design of Algorithms",
    "department_id": "8",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00108N",
    "description": "Analysis and Design of Algorithms (00303N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "00301N",
    "course_name": "Software Engineering",
    "department_id": "8",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00110N",
    "description": "Software Engineering (00301N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "01305N",
    "course_name": "Computer Vision",
    "department_id": "10",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00101N, 00109N",
    "description": "Computer Vision (01305N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "00304N",
    "course_name": "Distributed Processing",
    "department_id": "8",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00103N, 00108N",
    "description": "Distributed Processing (00304N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "00306N",
    "course_name": "Cloud Computing",
    "department_id": "10",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00108N",
    "description": "Cloud Computing (00306N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "00302N",
    "course_name": "Systems Analysis and Design",
    "department_id": "8",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00202N",
    "description": "Systems Analysis and Design (00302N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "00305N",
    "course_name": "Machine Learning",
    "department_id": "10",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00109N, 00101N",
    "description": "Machine Learning (00305N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "01301N",
    "course_name": "Intelligent Programming",
    "department_id": "10",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00108N, 00109N",
    "description": "Intelligent Programming (01301N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "03301N",
    "course_name": "Stochastic Processes",
    "department_id": "10",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00101N, 00201N",
    "description": "Stochastic Processes (03301N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "00307N",
    "course_name": "Operating Systems",
    "department_id": "8",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00103N, 00108N",
    "description": "Operating Systems (00307N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "02306N",
    "course_name": "Information Security Management",
    "department_id": "8",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00202N, 02201N",
    "description": "Information Security Management (02306N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "02304N",
    "course_name": "Computer Network Security",
    "department_id": "8",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00207N, 02203N",
    "description": "Computer Network Security (02304N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "02303N",
    "course_name": "Secure Software Development",
    "department_id": "8",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00110N, 02201N",
    "description": "Secure Software Development (02303N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "02305N",
    "course_name": "Data Integrity and Authentication",
    "department_id": "8",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00202N, 02203N",
    "description": "Data Integrity and Authentication (02305N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "02302N",
    "course_name": "Operating Systems Security",
    "department_id": "8",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "02201N, 00307N",
    "description": "Operating Systems Security (02302N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170307N",
    "course_name": "Design and Analysis of Algorithms",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "4170206N",
    "description": "Design and Analysis of Algorithms (4170307N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170303N",
    "course_name": "Operating systems",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "4170206N",
    "description": "Operating systems (4170303N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170308N",
    "course_name": "Human Computer Interaction",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "4170204N",
    "description": "Human Computer Interaction (4170308N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170302N",
    "course_name": "Numerical Computation",
    "department_id": "11",
    "year_level": 3,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "Numerical Computation (4170302N) is an official Core course (2 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170311N",
    "course_name": "Graphic Programming",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "4170208N",
    "description": "Graphic Programming (4170311N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170309N",
    "course_name": "The User Interface Design",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "4170203N",
    "description": "The User Interface Design (4170309N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170306N",
    "course_name": "AI for Game",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "4170205N",
    "description": "AI for Game (4170306N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170304N",
    "course_name": "Software Requirements Analysis",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "4170207N",
    "description": "Software Requirements Analysis (4170304N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170305N",
    "course_name": "Database",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "4170204N",
    "description": "Database (4170305N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170310N",
    "course_name": "Computational Complexity",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "4170307N",
    "description": "Computational Complexity (4170310N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170319N",
    "course_name": "Data Mining",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "4170206N",
    "description": "Data Mining (4170319N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170301N",
    "course_name": "Linear Algebra",
    "department_id": "11",
    "year_level": 3,
    "credits": 2,
    "prerequisite_course_id": null,
    "description": "Linear Algebra (4170301N) is an official Core course (2 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170312N",
    "course_name": "Intelligent Systems",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "4170203N",
    "description": "Intelligent Systems (4170312N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170313N",
    "course_name": "Statistical Software",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Statistical Software (4170313N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170320N",
    "course_name": "Project Management",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "4170206N",
    "description": "Project Management (4170320N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170318N",
    "course_name": "Information Systems Security",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Information Systems Security (4170318N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170321N",
    "course_name": "E-Learning Techniques",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "4170303N",
    "description": "E-Learning Techniques (4170321N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170315N",
    "course_name": "Web Software Engineering",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "4170207N",
    "description": "Web Software Engineering (4170315N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170316N",
    "course_name": "System Simulation and Modeling",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "4170303N",
    "description": "System Simulation and Modeling (4170316N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170317N",
    "course_name": "Graphs and Networks",
    "department_id": "11",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Graphs and Networks (4170317N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "01304N",
    "course_name": "Embedded Systems",
    "department_id": "9",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "01303N",
    "description": "Embedded Systems (01304N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "01303N",
    "course_name": "Modern Control Systems",
    "department_id": "9",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00101N",
    "description": "Modern Control Systems (01303N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "01302N",
    "course_name": "AI Platforms",
    "department_id": "9",
    "year_level": 3,
    "credits": 3,
    "prerequisite_course_id": "00109N",
    "description": "AI Platforms (01302N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "01405N",
    "course_name": "Reinforcement Learning",
    "department_id": "10",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00305N, 01202N",
    "description": "Reinforcement Learning (01405N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "03408N",
    "course_name": "Project II",
    "department_id": "10",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "03404N",
    "description": "Project II (03408N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "03402N",
    "course_name": "Introduction to Social Networks",
    "department_id": "10",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00201N",
    "description": "Introduction to Social Networks (03402N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "03404N",
    "course_name": "Project I",
    "department_id": "10",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Project I (03404N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "03415N",
    "course_name": "Distributed Database Systems",
    "department_id": "10",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00202N",
    "description": "Distributed Database Systems (03415N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "03410N",
    "course_name": "Non-Linear and Combinatorial Optimization",
    "department_id": "10",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00101N, 00108N",
    "description": "Non-Linear and Combinatorial Optimization (03410N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "01401N",
    "course_name": "Deep Learning",
    "department_id": "10",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00305N, 01204N",
    "description": "Deep Learning (01401N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "01403N",
    "course_name": "Natural Language Processing",
    "department_id": "10",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00305N",
    "description": "Natural Language Processing (01403N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "01417N",
    "course_name": "Business Intelligence Analysis",
    "department_id": "10",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "03303N",
    "description": "Business Intelligence Analysis (01417N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "03414N",
    "course_name": "Concurrent Algorithms and Data Structures",
    "department_id": "10",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00108N",
    "description": "Concurrent Algorithms and Data Structures (03414N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "01412N",
    "course_name": "Intelligence Technology Trends",
    "department_id": "9",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00109N",
    "description": "Intelligence Technology Trends (01412N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "03401N",
    "course_name": "Big Data Analytics",
    "department_id": "10",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00105N, 00206N, 00305N",
    "description": "Big Data Analytics (03401N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "03409N",
    "course_name": "Convex Optimization",
    "department_id": "10",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00101N, 00203N, 01201N",
    "description": "Convex Optimization (03409N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "03412N",
    "course_name": "Bayesian Statistics",
    "department_id": "10",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00201N",
    "description": "Bayesian Statistics (03412N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "01409N",
    "course_name": "Speech Recognition",
    "department_id": "9",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "01303N",
    "description": "Speech Recognition (01409N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "01410N",
    "course_name": "Natural Language Understanding",
    "department_id": "9",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "01403N",
    "description": "Natural Language Understanding (01410N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "01416N",
    "course_name": "Game Theory",
    "department_id": "9",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "01202N",
    "description": "Game Theory (01416N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "03416N",
    "course_name": "Advanced Database Systems",
    "department_id": "10",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00202N",
    "description": "Advanced Database Systems (03416N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "03418N",
    "course_name": "Advanced Topics in Data Science and AI",
    "department_id": "10",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00109N, 00305N",
    "description": "Advanced Topics in Data Science and AI (03418N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "01413N",
    "course_name": "Internet of Things II",
    "department_id": "9",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "01402N",
    "description": "Internet of Things II (01413N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "01414N",
    "course_name": "Knowledge-Based AI",
    "department_id": "9",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00305N",
    "description": "Knowledge-Based AI (01414N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "03411N",
    "course_name": "Multivariate Statistical Analysis",
    "department_id": "10",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00201N",
    "description": "Multivariate Statistical Analysis (03411N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "02407N",
    "course_name": "Law and Cybersecurity",
    "department_id": "8",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "02201N",
    "description": "Law and Cybersecurity (02407N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "02408N",
    "course_name": "Project II",
    "department_id": "8",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "02404N",
    "description": "Project II (02408N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "02405N",
    "course_name": "Cybersecurity Risk Management",
    "department_id": "8",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00206N, 00305N, 02306N",
    "description": "Cybersecurity Risk Management (02405N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "02403N",
    "course_name": "Human Security",
    "department_id": "8",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "02201N",
    "description": "Human Security (02403N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "02410N",
    "course_name": "Proactive Computer Security",
    "department_id": "8",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00110N, 02201N",
    "description": "Proactive Computer Security (02410N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "02416N",
    "course_name": "Mobile Computing",
    "department_id": "8",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Mobile Computing (02416N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "02401N",
    "course_name": "Social Network Computing",
    "department_id": "8",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00207N, 02203N",
    "description": "Social Network Computing (02401N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "02406N",
    "course_name": "Digital Forensics",
    "department_id": "8",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00207N, 00307N",
    "description": "Digital Forensics (02406N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "02412N",
    "course_name": "Blockchain Security",
    "department_id": "8",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00202N, 00207N",
    "description": "Blockchain Security (02412N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "02413N",
    "course_name": "Cloud Computing Security",
    "department_id": "8",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00306N, 02203N",
    "description": "Cloud Computing Security (02413N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "02404N",
    "course_name": "Project I",
    "department_id": "8",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Project I (02404N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "02415N",
    "course_name": "Internet of Things",
    "department_id": "8",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Internet of Things (02415N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "02402N",
    "course_name": "Security of Distributed Systems",
    "department_id": "8",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00207N, 02203N, 00307N",
    "description": "Security of Distributed Systems (02402N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "02411N",
    "course_name": "Software Security Engineering",
    "department_id": "8",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00301N, 02303N",
    "description": "Software Security Engineering (02411N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "02414N",
    "course_name": "Social Networks Analytics",
    "department_id": "8",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00101N, 00201N, 02401N",
    "description": "Social Networks Analytics (02414N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170409N",
    "course_name": "Project I",
    "department_id": "11",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Project I (4170409N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170403N",
    "course_name": "Web Programming",
    "department_id": "11",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "4170203N",
    "description": "Web Programming (4170403N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170405N",
    "course_name": "Advanced Methods for Multimedia",
    "department_id": "11",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "4170208N",
    "description": "Advanced Methods for Multimedia (4170405N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170410N",
    "course_name": "Project II",
    "department_id": "11",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "4170409N",
    "description": "Project II (4170410N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170414N",
    "course_name": "Cyber Policy- Law and Cyber Crime Investigation",
    "department_id": "11",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "4170308N",
    "description": "Cyber Policy- Law and Cyber Crime Investigation (4170414N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170407N",
    "course_name": "Cloud Software Development",
    "department_id": "11",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "4170303N",
    "description": "Cloud Software Development (4170407N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170402N",
    "course_name": "Game Design & Modeling",
    "department_id": "11",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "4170306N",
    "description": "Game Design & Modeling (4170402N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170401N",
    "course_name": "Computer Graphics",
    "department_id": "11",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "4170208N",
    "description": "Computer Graphics (4170401N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170404N",
    "course_name": "Mobile Application Development",
    "department_id": "11",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "4170303N",
    "description": "Mobile Application Development (4170404N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "4170411N",
    "course_name": "E-Business Technologies",
    "department_id": "11",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "4170206N",
    "description": "E-Business Technologies (4170411N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170412N",
    "course_name": "Large-Scale Database Systems",
    "department_id": "11",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "4170305N",
    "description": "Large-Scale Database Systems (4170412N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170413N",
    "course_name": "Performance Modeling",
    "department_id": "11",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "4170307N",
    "description": "Performance Modeling (4170413N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170408N",
    "course_name": "Information Retrieval",
    "department_id": "11",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "4170206N",
    "description": "Information Retrieval (4170408N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "4170406N",
    "course_name": "Management of Risk and Quality",
    "department_id": "11",
    "year_level": 4,
    "credits": 2,
    "prerequisite_course_id": "4170206N",
    "description": "Management of Risk and Quality (4170406N) is an official Elective course (2 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  },
  {
    "course_id": "01407N",
    "course_name": "Visual Recognition",
    "department_id": "9",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "01305N",
    "description": "Visual Recognition (01407N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "01408N",
    "course_name": "Project II",
    "department_id": "9",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "01404N",
    "description": "Project II (01408N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "01402N",
    "course_name": "Internet of Things I",
    "department_id": "9",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "01304N",
    "description": "Internet of Things I (01402N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "01406N",
    "course_name": "AI for Robotics",
    "department_id": "9",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00109N, 01304N",
    "description": "AI for Robotics (01406N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "01404N",
    "course_name": "Project I",
    "department_id": "9",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": null,
    "description": "Project I (01404N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Core",
    "is_required": 1
  },
  {
    "course_id": "01411N",
    "course_name": "Embedded Machine Learning",
    "department_id": "9",
    "year_level": 4,
    "credits": 3,
    "prerequisite_course_id": "00305N, 01304N",
    "description": "Embedded Machine Learning (01411N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "course_type": "Elective",
    "is_required": 0
  }
];

export const KNOWLEDGE_BASE = [
  {
    "id": 1,
    "category": "Data Structures",
    "prompt": "What is the difference between a stack and a queue in data structures?",
    "answer": "A Stack follows the LIFO (Last-In, First-Out) principle, where insertions and deletions happen at one end called the top (common operations: push, pop). A Queue follows the FIFO (First-In, First-Out) principle, where elements are inserted at the rear (enqueue) and removed from the front (dequeue). Common applications: stack is used in recursion call stacks and undo actions, while queue is used in BFS traversal and CPU scheduling.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "cs",
      "datastructures",
      "stack",
      "queue"
    ],
    "similarity": 0.94
  },
  {
    "id": 2,
    "category": "Algorithms",
    "prompt": "Explain QuickSort algorithm and its time complexity.",
    "answer": "QuickSort is a divide-and-conquer sorting algorithm. It selects a 'pivot' element and partitions the array such that elements smaller than the pivot go to the left and larger elements go to the right. It then recursively sorts both subarrays. Average and best-case time complexity is O(N log N). Worst-case complexity is O(N^2) when the pivot is consistently the minimum or maximum element, though randomized pivot selection mitigates this.",
    "mbti": "INTP",
    "learning_style": "Reading/Writing",
    "temperature": 0.4,
    "keywords": [
      "algorithms",
      "sorting",
      "quicksort",
      "complexity"
    ],
    "similarity": 0.94
  },
  {
    "id": 3,
    "category": "Algorithms",
    "prompt": "What is Dynamic Programming and when should it be used?",
    "answer": "Dynamic Programming (DP) is an optimization technique that solves complex problems by breaking them down into overlapping subproblems and storing subproblem solutions (memoization or tabulation) to prevent redundant computations. Two key properties required: Optimal Substructure (an optimal solution contains optimal sub-solutions) and Overlapping Subproblems (the same subproblems are computed repeatedly).",
    "mbti": "INTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.3,
    "keywords": [
      "algorithms",
      "dp",
      "optimization",
      "dynamic_programming"
    ],
    "similarity": 0.94
  },
  {
    "id": 4,
    "category": "Networking",
    "prompt": "What is the difference between TCP and UDP?",
    "answer": "TCP (Transmission Control Protocol) is connection-oriented, reliable, guarantees in-order packet delivery via three-way handshaking, acknowledgments, and flow control (windowing). UDP (User Datagram Protocol) is connectionless, lightweight, and transmits packets without guarantees or handshakes, prioritizing low latency. TCP is used for Web (HTTP/HTTPS) and file transfers, while UDP is preferred for live video streaming, DNS queries, and online gaming.",
    "mbti": "ISTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "networking",
      "tcp",
      "udp",
      "protocols"
    ],
    "similarity": 0.94
  },
  {
    "id": 5,
    "category": "Databases",
    "prompt": "Explain SQL normalization up to Third Normal Form (3NF).",
    "answer": "Database normalization minimizes data redundancy and prevents insertion/update/deletion anomalies: 1NF requires atomic values in every column with no repeating groups; 2NF satisfies 1NF and removes partial dependencies (non-key attributes must depend on the whole composite primary key); 3NF satisfies 2NF and removes transitive dependencies (non-key attributes must depend solely on the primary key, not another non-key attribute).",
    "mbti": "ISTJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.3,
    "keywords": [
      "databases",
      "sql",
      "normalization",
      "3nf"
    ],
    "similarity": 0.94
  },
  {
    "id": 6,
    "category": "Databases",
    "prompt": "What are ACID properties in database management systems?",
    "answer": "ACID defines reliability in database transactions: Atomicity ensures the transaction is all-or-nothing; Consistency guarantees valid state transitions adhering to constraints; Isolation ensures concurrent transactions execute independently without interference; Durability ensures committed transactions survive system crashes or power failures.",
    "mbti": "ENTJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.2,
    "keywords": [
      "databases",
      "acid",
      "transactions",
      "sql"
    ],
    "similarity": 0.94
  },
  {
    "id": 7,
    "category": "Artificial Intelligence",
    "prompt": "How does backpropagation work in deep learning neural networks?",
    "answer": "Backpropagation calculates the gradient of the loss function with respect to each weight in a neural network using the multivariable calculus chain rule. During forward pass, inputs produce predicted activations and a loss is computed. In backward pass, error gradients propagate backwards from output layer to input layer, enabling gradient descent optimizers (like Adam or SGD) to update weights in the direction that minimizes loss.",
    "mbti": "INTP",
    "learning_style": "Visual",
    "temperature": 0.4,
    "keywords": [
      "ai",
      "deeplearning",
      "neuralnetworks",
      "backpropagation"
    ],
    "similarity": 0.94
  },
  {
    "id": 8,
    "category": "Artificial Intelligence",
    "prompt": "What is the difference between CNN and Transformer architectures?",
    "answer": "CNNs (Convolutional Neural Networks) utilize spatial weight-sharing kernels to extract local inductive biases, excelling at image processing and 2D feature hierarchies. Transformers eliminate recurrence and convolutions, utilizing Self-Attention mechanisms to weigh relationships between all tokens across an entire sequence simultaneously, dominating NLP and large multimodal models.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.4,
    "keywords": [
      "ai",
      "transformers",
      "cnn",
      "deeplearning"
    ],
    "similarity": 0.94
  },
  {
    "id": 9,
    "category": "Cybersecurity",
    "prompt": "Explain the difference between Symmetric and Asymmetric encryption.",
    "answer": "Symmetric encryption uses a single shared secret key for both encryption and decryption (e.g., AES-256), offering ultra-fast throughput for bulk data. Asymmetric encryption uses a mathematically linked keypair: a public key for encryption and a private key for decryption (e.g., RSA, ECC). Asymmetric is commonly used for key exchange, SSL/TLS handshakes, and digital signatures.",
    "mbti": "ENTP",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "security",
      "cryptography",
      "encryption",
      "aes",
      "rsa"
    ],
    "similarity": 0.94
  },
  {
    "id": 10,
    "category": "Cybersecurity",
    "prompt": "What is SQL Injection (SQLi) and how is it prevented?",
    "answer": "SQL Injection occurs when untrusted user input is directly concatenated into a dynamic SQL query, altering the query structure to execute arbitrary SQL commands. Prevention requires Parameterized Queries (Prepared Statements) or ORMs, strict input validation, stored procedures with type constraints, and adhering to the principle of least privilege on database user accounts.",
    "mbti": "ISTP",
    "learning_style": "Kinesthetic",
    "temperature": 0.2,
    "keywords": [
      "security",
      "sqli",
      "owasp",
      "web"
    ],
    "similarity": 0.94
  },
  {
    "id": 11,
    "category": "University Policy",
    "prompt": "What is the university policy on minimum CGPA for academic good standing?",
    "answer": "To maintain Academic Good Standing, undergraduate students must maintain a cumulative GPA of at least 2.00 on a 4.00 scale. If a student's CGPA drops below 2.00 at the end of a regular semester, they are placed on Academic Warning. If the CGPA remains below 2.00 for two consecutive semesters, the student is placed on Academic Probation with a 12-credit enrollment cap.",
    "mbti": "ESTJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.1,
    "keywords": [
      "sis",
      "policy",
      "gpa",
      "standing",
      "probation"
    ],
    "similarity": 0.94
  },
  {
    "id": 12,
    "category": "University Policy",
    "prompt": "What is the procedure and deadline to drop a course without academic penalty?",
    "answer": "Students may drop courses with 100% tuition adjustment and no grade record on their transcript during the official Add/Drop period (first two weeks of the semester). After the Add/Drop deadline until the end of the 10th week, students may submit an official Course Withdrawal request via the Student Portal; the course will appear with a grade of 'W' (Withdrawn), which carries zero credit points and does not impact cumulative GPA.",
    "mbti": "ISFJ",
    "learning_style": "Auditory",
    "temperature": 0.1,
    "keywords": [
      "sis",
      "policy",
      "drop",
      "withdraw",
      "deadline"
    ],
    "similarity": 0.94
  },
  {
    "id": 13,
    "category": "University Policy",
    "prompt": "What are the prerequisites to enroll in Senior Capstone Project I (CS402)?",
    "answer": "Enrolling in Senior Capstone Project I (CS402) requires Senior Year Level (Year 4 status, with at least 90 earned credit hours) and a passing grade (C or higher) in CS303 (Software Engineering Methodologies) and CS301 (Operating Systems Internals). Department head approval is also required for approved capstone topic proposals.",
    "mbti": "ENFJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.2,
    "keywords": [
      "sis",
      "policy",
      "capstone",
      "prerequisites"
    ],
    "similarity": 0.94
  },
  {
    "id": 14,
    "category": "Course Recommender",
    "prompt": "How does the SIS Course Recommendation engine score and rank courses?",
    "answer": "The Course Recommendation engine computes a multi-attribute match score (0-100) based on: Department alignment (+50 pts for major core courses), Year-level suitability (+20 pts for current year level, +10 for earlier year remedial), Prerequisite verification (+15 pts for fully passed prerequisites, disqualifies locked courses), Workload credit balancing (+10 pts for manageable 3-credit units), and Historical performance in related department subject areas.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "recommender",
      "algorithm",
      "scoring",
      "sis"
    ],
    "similarity": 0.94
  },
  {
    "id": 15,
    "category": "Python & OOP",
    "prompt": "Explain the difference between deepcopy and shallow copy in Python.",
    "answer": "A shallow copy creates a new object but inserts references into it to the objects found in the original. A deepcopy creates a new object and recursively copies all nested objects found in the original, ensuring changes to nested elements do not mutate the source.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "python_&_oop",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 16,
    "category": "Python & OOP",
    "prompt": "Explain the difference between deepcopy and shallow copy in Python.",
    "answer": "A shallow copy creates a new object but inserts references into it to the objects found in the original. A deepcopy creates a new object and recursively copies all nested objects found in the original, ensuring changes to nested elements do not mutate the source.",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "temperature": 0.4,
    "keywords": [
      "python_&_oop",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 17,
    "category": "Python & OOP",
    "prompt": "Explain the difference between deepcopy and shallow copy in Python.",
    "answer": "A shallow copy creates a new object but inserts references into it to the objects found in the original. A deepcopy creates a new object and recursively copies all nested objects found in the original, ensuring changes to nested elements do not mutate the source.",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.5,
    "keywords": [
      "python_&_oop",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 18,
    "category": "Python & OOP",
    "prompt": "Explain the difference between deepcopy and shallow copy in Python.",
    "answer": "A shallow copy creates a new object but inserts references into it to the objects found in the original. A deepcopy creates a new object and recursively copies all nested objects found in the original, ensuring changes to nested elements do not mutate the source.",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.6000000000000001,
    "keywords": [
      "python_&_oop",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 19,
    "category": "Python & OOP",
    "prompt": "Explain the difference between deepcopy and shallow copy in Python.",
    "answer": "A shallow copy creates a new object but inserts references into it to the objects found in the original. A deepcopy creates a new object and recursively copies all nested objects found in the original, ensuring changes to nested elements do not mutate the source.",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "temperature": 0.7,
    "keywords": [
      "python_&_oop",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 20,
    "category": "Python & OOP",
    "prompt": "What are Python decorators and how do they work?",
    "answer": "Decorators are higher-order functions that take another function as an argument, extend or modify its behavior without modifying the original code, and return a callable wrapper function. Commonly used for logging, auth validation, and caching.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "python_&_oop",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 21,
    "category": "Python & OOP",
    "prompt": "What are Python decorators and how do they work?",
    "answer": "Decorators are higher-order functions that take another function as an argument, extend or modify its behavior without modifying the original code, and return a callable wrapper function. Commonly used for logging, auth validation, and caching.",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "temperature": 0.4,
    "keywords": [
      "python_&_oop",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 22,
    "category": "Python & OOP",
    "prompt": "What are Python decorators and how do they work?",
    "answer": "Decorators are higher-order functions that take another function as an argument, extend or modify its behavior without modifying the original code, and return a callable wrapper function. Commonly used for logging, auth validation, and caching.",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.5,
    "keywords": [
      "python_&_oop",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 23,
    "category": "Python & OOP",
    "prompt": "What are Python decorators and how do they work?",
    "answer": "Decorators are higher-order functions that take another function as an argument, extend or modify its behavior without modifying the original code, and return a callable wrapper function. Commonly used for logging, auth validation, and caching.",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.6000000000000001,
    "keywords": [
      "python_&_oop",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 24,
    "category": "Python & OOP",
    "prompt": "What are Python decorators and how do they work?",
    "answer": "Decorators are higher-order functions that take another function as an argument, extend or modify its behavior without modifying the original code, and return a callable wrapper function. Commonly used for logging, auth validation, and caching.",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "temperature": 0.7,
    "keywords": [
      "python_&_oop",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 25,
    "category": "Python & OOP",
    "prompt": "What is the Global Interpreter Lock (GIL) in CPython?",
    "answer": "The GIL is a mutex that prevents multiple native OS threads from executing Python bytecodes simultaneously within a single process. It guarantees memory safety for reference counting, but limits CPU-bound multi-threading, requiring multiprocessing for true multi-core parallel computation.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "python_&_oop",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 26,
    "category": "Python & OOP",
    "prompt": "What is the Global Interpreter Lock (GIL) in CPython?",
    "answer": "The GIL is a mutex that prevents multiple native OS threads from executing Python bytecodes simultaneously within a single process. It guarantees memory safety for reference counting, but limits CPU-bound multi-threading, requiring multiprocessing for true multi-core parallel computation.",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "temperature": 0.4,
    "keywords": [
      "python_&_oop",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 27,
    "category": "Python & OOP",
    "prompt": "What is the Global Interpreter Lock (GIL) in CPython?",
    "answer": "The GIL is a mutex that prevents multiple native OS threads from executing Python bytecodes simultaneously within a single process. It guarantees memory safety for reference counting, but limits CPU-bound multi-threading, requiring multiprocessing for true multi-core parallel computation.",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.5,
    "keywords": [
      "python_&_oop",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 28,
    "category": "Python & OOP",
    "prompt": "What is the Global Interpreter Lock (GIL) in CPython?",
    "answer": "The GIL is a mutex that prevents multiple native OS threads from executing Python bytecodes simultaneously within a single process. It guarantees memory safety for reference counting, but limits CPU-bound multi-threading, requiring multiprocessing for true multi-core parallel computation.",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.6000000000000001,
    "keywords": [
      "python_&_oop",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 29,
    "category": "Python & OOP",
    "prompt": "What is the Global Interpreter Lock (GIL) in CPython?",
    "answer": "The GIL is a mutex that prevents multiple native OS threads from executing Python bytecodes simultaneously within a single process. It guarantees memory safety for reference counting, but limits CPU-bound multi-threading, requiring multiprocessing for true multi-core parallel computation.",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "temperature": 0.7,
    "keywords": [
      "python_&_oop",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 30,
    "category": "Cloud & DevOps",
    "prompt": "What is the difference between Docker containers and Virtual Machines?",
    "answer": "Virtual Machines virtualize physical hardware including the guest OS kernel via a hypervisor, consuming significant memory and boot time. Docker containers virtualize the operating system kernel, sharing the host kernel with isolated namespaces and cgroups, making them lightweight and rapid to spin up.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "cloud_&_devops",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 31,
    "category": "Cloud & DevOps",
    "prompt": "What is the difference between Docker containers and Virtual Machines?",
    "answer": "Virtual Machines virtualize physical hardware including the guest OS kernel via a hypervisor, consuming significant memory and boot time. Docker containers virtualize the operating system kernel, sharing the host kernel with isolated namespaces and cgroups, making them lightweight and rapid to spin up.",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "temperature": 0.4,
    "keywords": [
      "cloud_&_devops",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 32,
    "category": "Cloud & DevOps",
    "prompt": "What is the difference between Docker containers and Virtual Machines?",
    "answer": "Virtual Machines virtualize physical hardware including the guest OS kernel via a hypervisor, consuming significant memory and boot time. Docker containers virtualize the operating system kernel, sharing the host kernel with isolated namespaces and cgroups, making them lightweight and rapid to spin up.",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.5,
    "keywords": [
      "cloud_&_devops",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 33,
    "category": "Cloud & DevOps",
    "prompt": "What is the difference between Docker containers and Virtual Machines?",
    "answer": "Virtual Machines virtualize physical hardware including the guest OS kernel via a hypervisor, consuming significant memory and boot time. Docker containers virtualize the operating system kernel, sharing the host kernel with isolated namespaces and cgroups, making them lightweight and rapid to spin up.",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.6000000000000001,
    "keywords": [
      "cloud_&_devops",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 34,
    "category": "Cloud & DevOps",
    "prompt": "What is the difference between Docker containers and Virtual Machines?",
    "answer": "Virtual Machines virtualize physical hardware including the guest OS kernel via a hypervisor, consuming significant memory and boot time. Docker containers virtualize the operating system kernel, sharing the host kernel with isolated namespaces and cgroups, making them lightweight and rapid to spin up.",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "temperature": 0.7,
    "keywords": [
      "cloud_&_devops",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 35,
    "category": "Cloud & DevOps",
    "prompt": "Explain the concept of Continuous Integration and Continuous Deployment (CI/CD).",
    "answer": "CI automatically merges and tests developer code changes in a shared repository continuously to detect regressions early. CD automatically stages or deploys verified artifacts to staging and production environments, ensuring reliable, automated release cycles.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "cloud_&_devops",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 36,
    "category": "Cloud & DevOps",
    "prompt": "Explain the concept of Continuous Integration and Continuous Deployment (CI/CD).",
    "answer": "CI automatically merges and tests developer code changes in a shared repository continuously to detect regressions early. CD automatically stages or deploys verified artifacts to staging and production environments, ensuring reliable, automated release cycles.",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "temperature": 0.4,
    "keywords": [
      "cloud_&_devops",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 37,
    "category": "Cloud & DevOps",
    "prompt": "Explain the concept of Continuous Integration and Continuous Deployment (CI/CD).",
    "answer": "CI automatically merges and tests developer code changes in a shared repository continuously to detect regressions early. CD automatically stages or deploys verified artifacts to staging and production environments, ensuring reliable, automated release cycles.",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.5,
    "keywords": [
      "cloud_&_devops",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 38,
    "category": "Cloud & DevOps",
    "prompt": "Explain the concept of Continuous Integration and Continuous Deployment (CI/CD).",
    "answer": "CI automatically merges and tests developer code changes in a shared repository continuously to detect regressions early. CD automatically stages or deploys verified artifacts to staging and production environments, ensuring reliable, automated release cycles.",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.6000000000000001,
    "keywords": [
      "cloud_&_devops",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 39,
    "category": "Cloud & DevOps",
    "prompt": "Explain the concept of Continuous Integration and Continuous Deployment (CI/CD).",
    "answer": "CI automatically merges and tests developer code changes in a shared repository continuously to detect regressions early. CD automatically stages or deploys verified artifacts to staging and production environments, ensuring reliable, automated release cycles.",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "temperature": 0.7,
    "keywords": [
      "cloud_&_devops",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 40,
    "category": "Cloud & DevOps",
    "prompt": "What is Kubernetes and how does Pod scheduling work?",
    "answer": "Kubernetes is a container orchestration platform. A Pod is the smallest deployable compute unit. The kube-scheduler selects an optimal node for unscheduled pods based on resource requirements, affinity/anti-affinity specifications, taints, and tolerations.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "cloud_&_devops",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 41,
    "category": "Cloud & DevOps",
    "prompt": "What is Kubernetes and how does Pod scheduling work?",
    "answer": "Kubernetes is a container orchestration platform. A Pod is the smallest deployable compute unit. The kube-scheduler selects an optimal node for unscheduled pods based on resource requirements, affinity/anti-affinity specifications, taints, and tolerations.",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "temperature": 0.4,
    "keywords": [
      "cloud_&_devops",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 42,
    "category": "Cloud & DevOps",
    "prompt": "What is Kubernetes and how does Pod scheduling work?",
    "answer": "Kubernetes is a container orchestration platform. A Pod is the smallest deployable compute unit. The kube-scheduler selects an optimal node for unscheduled pods based on resource requirements, affinity/anti-affinity specifications, taints, and tolerations.",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.5,
    "keywords": [
      "cloud_&_devops",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 43,
    "category": "Cloud & DevOps",
    "prompt": "What is Kubernetes and how does Pod scheduling work?",
    "answer": "Kubernetes is a container orchestration platform. A Pod is the smallest deployable compute unit. The kube-scheduler selects an optimal node for unscheduled pods based on resource requirements, affinity/anti-affinity specifications, taints, and tolerations.",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.6000000000000001,
    "keywords": [
      "cloud_&_devops",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 44,
    "category": "Cloud & DevOps",
    "prompt": "What is Kubernetes and how does Pod scheduling work?",
    "answer": "Kubernetes is a container orchestration platform. A Pod is the smallest deployable compute unit. The kube-scheduler selects an optimal node for unscheduled pods based on resource requirements, affinity/anti-affinity specifications, taints, and tolerations.",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "temperature": 0.7,
    "keywords": [
      "cloud_&_devops",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 45,
    "category": "Data Science & Machine Learning",
    "prompt": "What is the difference between Precision and Recall?",
    "answer": "Precision is the fraction of true positive predictions among all predicted positives (True Positives / (True Positives + False Positives)). Recall is the fraction of true positives identified among all actual positives (True Positives / (True Positives + False Negatives)). The F1-score is the harmonic mean of both.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "data_science_&_machine_learning",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 46,
    "category": "Data Science & Machine Learning",
    "prompt": "What is the difference between Precision and Recall?",
    "answer": "Precision is the fraction of true positive predictions among all predicted positives (True Positives / (True Positives + False Positives)). Recall is the fraction of true positives identified among all actual positives (True Positives / (True Positives + False Negatives)). The F1-score is the harmonic mean of both.",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "temperature": 0.4,
    "keywords": [
      "data_science_&_machine_learning",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 47,
    "category": "Data Science & Machine Learning",
    "prompt": "What is the difference between Precision and Recall?",
    "answer": "Precision is the fraction of true positive predictions among all predicted positives (True Positives / (True Positives + False Positives)). Recall is the fraction of true positives identified among all actual positives (True Positives / (True Positives + False Negatives)). The F1-score is the harmonic mean of both.",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.5,
    "keywords": [
      "data_science_&_machine_learning",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 48,
    "category": "Data Science & Machine Learning",
    "prompt": "What is the difference between Precision and Recall?",
    "answer": "Precision is the fraction of true positive predictions among all predicted positives (True Positives / (True Positives + False Positives)). Recall is the fraction of true positives identified among all actual positives (True Positives / (True Positives + False Negatives)). The F1-score is the harmonic mean of both.",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.6000000000000001,
    "keywords": [
      "data_science_&_machine_learning",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 49,
    "category": "Data Science & Machine Learning",
    "prompt": "What is the difference between Precision and Recall?",
    "answer": "Precision is the fraction of true positive predictions among all predicted positives (True Positives / (True Positives + False Positives)). Recall is the fraction of true positives identified among all actual positives (True Positives / (True Positives + False Negatives)). The F1-score is the harmonic mean of both.",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "temperature": 0.7,
    "keywords": [
      "data_science_&_machine_learning",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 50,
    "category": "Data Science & Machine Learning",
    "prompt": "What is overfitting and how do you prevent it in machine learning models?",
    "answer": "Overfitting occurs when a model learns noise and idiosyncratic details of the training data rather than general patterns, resulting in low training error but high test error. Prevention methods include Cross-Validation, L1/L2 Regularization, Dropout in neural nets, pruning trees, and collecting more training data.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "data_science_&_machine_learning",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 51,
    "category": "Data Science & Machine Learning",
    "prompt": "What is overfitting and how do you prevent it in machine learning models?",
    "answer": "Overfitting occurs when a model learns noise and idiosyncratic details of the training data rather than general patterns, resulting in low training error but high test error. Prevention methods include Cross-Validation, L1/L2 Regularization, Dropout in neural nets, pruning trees, and collecting more training data.",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "temperature": 0.4,
    "keywords": [
      "data_science_&_machine_learning",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 52,
    "category": "Data Science & Machine Learning",
    "prompt": "What is overfitting and how do you prevent it in machine learning models?",
    "answer": "Overfitting occurs when a model learns noise and idiosyncratic details of the training data rather than general patterns, resulting in low training error but high test error. Prevention methods include Cross-Validation, L1/L2 Regularization, Dropout in neural nets, pruning trees, and collecting more training data.",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.5,
    "keywords": [
      "data_science_&_machine_learning",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 53,
    "category": "Data Science & Machine Learning",
    "prompt": "What is overfitting and how do you prevent it in machine learning models?",
    "answer": "Overfitting occurs when a model learns noise and idiosyncratic details of the training data rather than general patterns, resulting in low training error but high test error. Prevention methods include Cross-Validation, L1/L2 Regularization, Dropout in neural nets, pruning trees, and collecting more training data.",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.6000000000000001,
    "keywords": [
      "data_science_&_machine_learning",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 54,
    "category": "Data Science & Machine Learning",
    "prompt": "What is overfitting and how do you prevent it in machine learning models?",
    "answer": "Overfitting occurs when a model learns noise and idiosyncratic details of the training data rather than general patterns, resulting in low training error but high test error. Prevention methods include Cross-Validation, L1/L2 Regularization, Dropout in neural nets, pruning trees, and collecting more training data.",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "temperature": 0.7,
    "keywords": [
      "data_science_&_machine_learning",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 55,
    "category": "Data Science & Machine Learning",
    "prompt": "Explain K-Means clustering algorithm.",
    "answer": "K-Means is an unsupervised clustering algorithm that partitions N observations into K clusters. It randomly initializes K centroids, iteratively assigns each data point to its closest centroid using Euclidean distance, and updates centroids to the mean of their assigned points until convergence.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "data_science_&_machine_learning",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 56,
    "category": "Data Science & Machine Learning",
    "prompt": "Explain K-Means clustering algorithm.",
    "answer": "K-Means is an unsupervised clustering algorithm that partitions N observations into K clusters. It randomly initializes K centroids, iteratively assigns each data point to its closest centroid using Euclidean distance, and updates centroids to the mean of their assigned points until convergence.",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "temperature": 0.4,
    "keywords": [
      "data_science_&_machine_learning",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 57,
    "category": "Data Science & Machine Learning",
    "prompt": "Explain K-Means clustering algorithm.",
    "answer": "K-Means is an unsupervised clustering algorithm that partitions N observations into K clusters. It randomly initializes K centroids, iteratively assigns each data point to its closest centroid using Euclidean distance, and updates centroids to the mean of their assigned points until convergence.",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.5,
    "keywords": [
      "data_science_&_machine_learning",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 58,
    "category": "Data Science & Machine Learning",
    "prompt": "Explain K-Means clustering algorithm.",
    "answer": "K-Means is an unsupervised clustering algorithm that partitions N observations into K clusters. It randomly initializes K centroids, iteratively assigns each data point to its closest centroid using Euclidean distance, and updates centroids to the mean of their assigned points until convergence.",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.6000000000000001,
    "keywords": [
      "data_science_&_machine_learning",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 59,
    "category": "Data Science & Machine Learning",
    "prompt": "Explain K-Means clustering algorithm.",
    "answer": "K-Means is an unsupervised clustering algorithm that partitions N observations into K clusters. It randomly initializes K centroids, iteratively assigns each data point to its closest centroid using Euclidean distance, and updates centroids to the mean of their assigned points until convergence.",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "temperature": 0.7,
    "keywords": [
      "data_science_&_machine_learning",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 60,
    "category": "Computer Architecture & Systems",
    "prompt": "What is virtual memory and how does paging work?",
    "answer": "Virtual memory provides an abstraction of contiguous physical RAM to processes. The Memory Management Unit (MMU) translates virtual addresses to physical frame addresses via page tables. If a process accesses a page not present in physical RAM, a Page Fault exception occurs, triggering the OS to swap it in from disk.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "computer_architecture_&_systems",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 61,
    "category": "Computer Architecture & Systems",
    "prompt": "What is virtual memory and how does paging work?",
    "answer": "Virtual memory provides an abstraction of contiguous physical RAM to processes. The Memory Management Unit (MMU) translates virtual addresses to physical frame addresses via page tables. If a process accesses a page not present in physical RAM, a Page Fault exception occurs, triggering the OS to swap it in from disk.",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "temperature": 0.4,
    "keywords": [
      "computer_architecture_&_systems",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 62,
    "category": "Computer Architecture & Systems",
    "prompt": "What is virtual memory and how does paging work?",
    "answer": "Virtual memory provides an abstraction of contiguous physical RAM to processes. The Memory Management Unit (MMU) translates virtual addresses to physical frame addresses via page tables. If a process accesses a page not present in physical RAM, a Page Fault exception occurs, triggering the OS to swap it in from disk.",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.5,
    "keywords": [
      "computer_architecture_&_systems",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 63,
    "category": "Computer Architecture & Systems",
    "prompt": "What is virtual memory and how does paging work?",
    "answer": "Virtual memory provides an abstraction of contiguous physical RAM to processes. The Memory Management Unit (MMU) translates virtual addresses to physical frame addresses via page tables. If a process accesses a page not present in physical RAM, a Page Fault exception occurs, triggering the OS to swap it in from disk.",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.6000000000000001,
    "keywords": [
      "computer_architecture_&_systems",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 64,
    "category": "Computer Architecture & Systems",
    "prompt": "What is virtual memory and how does paging work?",
    "answer": "Virtual memory provides an abstraction of contiguous physical RAM to processes. The Memory Management Unit (MMU) translates virtual addresses to physical frame addresses via page tables. If a process accesses a page not present in physical RAM, a Page Fault exception occurs, triggering the OS to swap it in from disk.",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "temperature": 0.7,
    "keywords": [
      "computer_architecture_&_systems",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 65,
    "category": "Computer Architecture & Systems",
    "prompt": "Explain race conditions and how mutexes resolve them.",
    "answer": "A race condition occurs when concurrent threads access and manipulate shared mutable data simultaneously and the outcome depends on thread scheduling order. A Mutex (Mutual Exclusion) enforces that only one thread can hold the lock and enter the critical section at any instant.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "computer_architecture_&_systems",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 66,
    "category": "Computer Architecture & Systems",
    "prompt": "Explain race conditions and how mutexes resolve them.",
    "answer": "A race condition occurs when concurrent threads access and manipulate shared mutable data simultaneously and the outcome depends on thread scheduling order. A Mutex (Mutual Exclusion) enforces that only one thread can hold the lock and enter the critical section at any instant.",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "temperature": 0.4,
    "keywords": [
      "computer_architecture_&_systems",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 67,
    "category": "Computer Architecture & Systems",
    "prompt": "Explain race conditions and how mutexes resolve them.",
    "answer": "A race condition occurs when concurrent threads access and manipulate shared mutable data simultaneously and the outcome depends on thread scheduling order. A Mutex (Mutual Exclusion) enforces that only one thread can hold the lock and enter the critical section at any instant.",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.5,
    "keywords": [
      "computer_architecture_&_systems",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 68,
    "category": "Computer Architecture & Systems",
    "prompt": "Explain race conditions and how mutexes resolve them.",
    "answer": "A race condition occurs when concurrent threads access and manipulate shared mutable data simultaneously and the outcome depends on thread scheduling order. A Mutex (Mutual Exclusion) enforces that only one thread can hold the lock and enter the critical section at any instant.",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.6000000000000001,
    "keywords": [
      "computer_architecture_&_systems",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 69,
    "category": "Computer Architecture & Systems",
    "prompt": "Explain race conditions and how mutexes resolve them.",
    "answer": "A race condition occurs when concurrent threads access and manipulate shared mutable data simultaneously and the outcome depends on thread scheduling order. A Mutex (Mutual Exclusion) enforces that only one thread can hold the lock and enter the critical section at any instant.",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "temperature": 0.7,
    "keywords": [
      "computer_architecture_&_systems",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 70,
    "category": "Computer Architecture & Systems",
    "prompt": "What is cache coherence in multi-core processors?",
    "answer": "Cache coherence ensures that multiple processor cores with private caches have a consistent view of shared physical memory. Protocols like MESI (Modified, Exclusive, Shared, Invalid) broadcast bus snooping signals to invalidate or update stale cache lines across cores.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "computer_architecture_&_systems",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 71,
    "category": "Computer Architecture & Systems",
    "prompt": "What is cache coherence in multi-core processors?",
    "answer": "Cache coherence ensures that multiple processor cores with private caches have a consistent view of shared physical memory. Protocols like MESI (Modified, Exclusive, Shared, Invalid) broadcast bus snooping signals to invalidate or update stale cache lines across cores.",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "temperature": 0.4,
    "keywords": [
      "computer_architecture_&_systems",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 72,
    "category": "Computer Architecture & Systems",
    "prompt": "What is cache coherence in multi-core processors?",
    "answer": "Cache coherence ensures that multiple processor cores with private caches have a consistent view of shared physical memory. Protocols like MESI (Modified, Exclusive, Shared, Invalid) broadcast bus snooping signals to invalidate or update stale cache lines across cores.",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.5,
    "keywords": [
      "computer_architecture_&_systems",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 73,
    "category": "Computer Architecture & Systems",
    "prompt": "What is cache coherence in multi-core processors?",
    "answer": "Cache coherence ensures that multiple processor cores with private caches have a consistent view of shared physical memory. Protocols like MESI (Modified, Exclusive, Shared, Invalid) broadcast bus snooping signals to invalidate or update stale cache lines across cores.",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.6000000000000001,
    "keywords": [
      "computer_architecture_&_systems",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 74,
    "category": "Computer Architecture & Systems",
    "prompt": "What is cache coherence in multi-core processors?",
    "answer": "Cache coherence ensures that multiple processor cores with private caches have a consistent view of shared physical memory. Protocols like MESI (Modified, Exclusive, Shared, Invalid) broadcast bus snooping signals to invalidate or update stale cache lines across cores.",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "temperature": 0.7,
    "keywords": [
      "computer_architecture_&_systems",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 75,
    "category": "University & SIS Regulations",
    "prompt": "How is Grade Point Average (GPA) calculated in the university credit system?",
    "answer": "Semester GPA is calculated by multiplying each course's earned Grade Points (A=4.0, B=3.0, C=2.0, D=1.0, F=0) by its Credit Hours, summing the total quality points, and dividing by total credit hours attempted in that semester.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "university_&_sis_regulations",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 76,
    "category": "University & SIS Regulations",
    "prompt": "How is Grade Point Average (GPA) calculated in the university credit system?",
    "answer": "Semester GPA is calculated by multiplying each course's earned Grade Points (A=4.0, B=3.0, C=2.0, D=1.0, F=0) by its Credit Hours, summing the total quality points, and dividing by total credit hours attempted in that semester.",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "temperature": 0.4,
    "keywords": [
      "university_&_sis_regulations",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 77,
    "category": "University & SIS Regulations",
    "prompt": "How is Grade Point Average (GPA) calculated in the university credit system?",
    "answer": "Semester GPA is calculated by multiplying each course's earned Grade Points (A=4.0, B=3.0, C=2.0, D=1.0, F=0) by its Credit Hours, summing the total quality points, and dividing by total credit hours attempted in that semester.",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.5,
    "keywords": [
      "university_&_sis_regulations",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 78,
    "category": "University & SIS Regulations",
    "prompt": "How is Grade Point Average (GPA) calculated in the university credit system?",
    "answer": "Semester GPA is calculated by multiplying each course's earned Grade Points (A=4.0, B=3.0, C=2.0, D=1.0, F=0) by its Credit Hours, summing the total quality points, and dividing by total credit hours attempted in that semester.",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.6000000000000001,
    "keywords": [
      "university_&_sis_regulations",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 79,
    "category": "University & SIS Regulations",
    "prompt": "How is Grade Point Average (GPA) calculated in the university credit system?",
    "answer": "Semester GPA is calculated by multiplying each course's earned Grade Points (A=4.0, B=3.0, C=2.0, D=1.0, F=0) by its Credit Hours, summing the total quality points, and dividing by total credit hours attempted in that semester.",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "temperature": 0.7,
    "keywords": [
      "university_&_sis_regulations",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 80,
    "category": "University & SIS Regulations",
    "prompt": "What is the policy for repeating a failed course?",
    "answer": "A student who receives an 'F' or 'D' in any required course may repeat the course up to two times. Upon completion of the repeated course, the higher grade is calculated into the cumulative GPA, while the previous attempt remains noted on the transcript.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "university_&_sis_regulations",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 81,
    "category": "University & SIS Regulations",
    "prompt": "What is the policy for repeating a failed course?",
    "answer": "A student who receives an 'F' or 'D' in any required course may repeat the course up to two times. Upon completion of the repeated course, the higher grade is calculated into the cumulative GPA, while the previous attempt remains noted on the transcript.",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "temperature": 0.4,
    "keywords": [
      "university_&_sis_regulations",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 82,
    "category": "University & SIS Regulations",
    "prompt": "What is the policy for repeating a failed course?",
    "answer": "A student who receives an 'F' or 'D' in any required course may repeat the course up to two times. Upon completion of the repeated course, the higher grade is calculated into the cumulative GPA, while the previous attempt remains noted on the transcript.",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.5,
    "keywords": [
      "university_&_sis_regulations",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 83,
    "category": "University & SIS Regulations",
    "prompt": "What is the policy for repeating a failed course?",
    "answer": "A student who receives an 'F' or 'D' in any required course may repeat the course up to two times. Upon completion of the repeated course, the higher grade is calculated into the cumulative GPA, while the previous attempt remains noted on the transcript.",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.6000000000000001,
    "keywords": [
      "university_&_sis_regulations",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 84,
    "category": "University & SIS Regulations",
    "prompt": "What is the policy for repeating a failed course?",
    "answer": "A student who receives an 'F' or 'D' in any required course may repeat the course up to two times. Upon completion of the repeated course, the higher grade is calculated into the cumulative GPA, while the previous attempt remains noted on the transcript.",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "temperature": 0.7,
    "keywords": [
      "university_&_sis_regulations",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 85,
    "category": "University & SIS Regulations",
    "prompt": "What are the requirements to make the Dean's Honor Roll?",
    "answer": "Undergraduate students who complete at least 15 graded credit hours in a regular semester with a semester GPA of 3.65 or higher and no incomplete or disciplinary sanctions qualify for the Dean's Honor Roll.",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "university_&_sis_regulations",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 86,
    "category": "University & SIS Regulations",
    "prompt": "What are the requirements to make the Dean's Honor Roll?",
    "answer": "Undergraduate students who complete at least 15 graded credit hours in a regular semester with a semester GPA of 3.65 or higher and no incomplete or disciplinary sanctions qualify for the Dean's Honor Roll.",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "temperature": 0.4,
    "keywords": [
      "university_&_sis_regulations",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 87,
    "category": "University & SIS Regulations",
    "prompt": "What are the requirements to make the Dean's Honor Roll?",
    "answer": "Undergraduate students who complete at least 15 graded credit hours in a regular semester with a semester GPA of 3.65 or higher and no incomplete or disciplinary sanctions qualify for the Dean's Honor Roll.",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "temperature": 0.5,
    "keywords": [
      "university_&_sis_regulations",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 88,
    "category": "University & SIS Regulations",
    "prompt": "What are the requirements to make the Dean's Honor Roll?",
    "answer": "Undergraduate students who complete at least 15 graded credit hours in a regular semester with a semester GPA of 3.65 or higher and no incomplete or disciplinary sanctions qualify for the Dean's Honor Roll.",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.6000000000000001,
    "keywords": [
      "university_&_sis_regulations",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 89,
    "category": "University & SIS Regulations",
    "prompt": "What are the requirements to make the Dean's Honor Roll?",
    "answer": "Undergraduate students who complete at least 15 graded credit hours in a regular semester with a semester GPA of 3.65 or higher and no incomplete or disciplinary sanctions qualify for the Dean's Honor Roll.",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "temperature": 0.7,
    "keywords": [
      "university_&_sis_regulations",
      "academic",
      "question"
    ],
    "similarity": 0.94
  },
  {
    "id": 232,
    "category": "AI Synthesized",
    "prompt": "Which courses should I register this semester",
    "answer": "\ud83d\udee0\ufe0f [Hands-on Practice] Here is the practical application and concrete workflow:\n\n**SIS Course Recommendation & Schedule Planning Strategy:**\n1. **Prerequisite Verification:** Verify that all required prerequisite courses have a passing grade (\u2265 60% / C or better) on your transcript.\n2. **Core vs Elective Ratio:** A standard balanced semester consists of 3 major core courses (9\u201310 credits) plus 1 general/interdisciplinary elective (3 credits).\n3. **Credit Balancing:** Maintain 15\u201316 credit hours per semester to stay on track for graduation within 4 years (120\u2013128 total credits).\n4. **Advisor Consultation:** Consult the 'Course Recommender' tab on your mobile dashboard to view your personalized AI match scores and prerequisite status.",
    "mbti": "ENTJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.4,
    "keywords": [
      "ai_learned",
      "auto"
    ],
    "similarity": 0.94
  },
  {
    "id": 233,
    "category": "AI Synthesized",
    "prompt": "what does the database rows and columns represent",
    "answer": "\ud83d\udcd1 [Structured Reference] Summary definition, key principles, and formal specifications:\n\n**Comprehensive Analysis of: \"what does the database rows and columns represent\"**\n\n**1. Core Concept & Theoretical Definition:**\nIn university academic curriculum, this concept represents an essential building block. It connects foundational theoretical models with practical problem-solving methodologies in your department.\n\n**2. Key Structural Principles:**\n\u2022 **Systematic Decomposition:** Break complex problems into atomic, testable modules.\n\u2022 **Invariant Verification:** Ensure all boundary conditions and edge cases are validated.\n\u2022 **Resource Optimization:** Maintain balance between compute latency, memory footprint, and development clarity.\n\n**3. Practical Guidance Tailored to Your Profile (INFP | Reading/Writing):**\nSince you learn best with a **Reading/Writing** perspective, review the syllabus documentation in the Course Catalog and experiment directly with small test implementations or visual concept maps.",
    "mbti": "INFP",
    "learning_style": "Reading/Writing",
    "temperature": 0.4,
    "keywords": [
      "ai_learned",
      "auto"
    ],
    "similarity": 0.94
  },
  {
    "id": 234,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00103N - Introduction to Computer Systems?",
    "answer": "**Course:** 00103N: Introduction to Computer Systems\n**Department:** 10\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Introduction to Computer Systems (00103N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00103N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 235,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00103N (Introduction to Computer Systems)?",
    "answer": "**00103N - Introduction to Computer Systems** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00103N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 236,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00109N - Introduction to Artificial Intelligence?",
    "answer": "**Course:** 00109N: Introduction to Artificial Intelligence\n**Department:** 10\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Introduction to Artificial Intelligence (00109N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00109N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 237,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00109N (Introduction to Artificial Intelligence)?",
    "answer": "The prerequisite for **00109N - Introduction to Artificial Intelligence** is **00107N**. You must achieve a passing grade (\u2265 60% / C) in 00107N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00109N",
      "prerequisites",
      "00107N"
    ],
    "similarity": 0.94
  },
  {
    "id": 238,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00110N - Programming II?",
    "answer": "**Course:** 00110N: Programming II\n**Department:** 10\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Programming II (00110N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00110N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 239,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00110N (Programming II)?",
    "answer": "The prerequisite for **00110N - Programming II** is **00105N**. You must achieve a passing grade (\u2265 60% / C) in 00105N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00110N",
      "prerequisites",
      "00105N"
    ],
    "similarity": 0.94
  },
  {
    "id": 240,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00104N - Introduction to Data Sciences?",
    "answer": "**Course:** 00104N: Introduction to Data Sciences\n**Department:** 8\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Introduction to Data Sciences (00104N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00104N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 241,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00104N (Introduction to Data Sciences)?",
    "answer": "**00104N - Introduction to Data Sciences** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00104N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 242,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 0X006N - Man and Environment?",
    "answer": "**Course:** 0X006N: Man and Environment\n**Department:** 8\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 2 credits\n**Type:** Elective\n**Overview:** Man and Environment (0X006N) is an official Elective course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "0X006N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 243,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 0X006N (Man and Environment)?",
    "answer": "**0X006N - Man and Environment** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "0X006N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 244,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 0X005N - Self-management?",
    "answer": "**Course:** 0X005N: Self-management\n**Department:** 10\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 2 credits\n**Type:** Elective\n**Overview:** Self-management (0X005N) is an official Elective course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "0X005N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 245,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 0X005N (Self-management)?",
    "answer": "**0X005N - Self-management** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "0X005N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 246,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00106N - Probability and Statistics I?",
    "answer": "**Course:** 00106N: Probability and Statistics I\n**Department:** 10\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Probability and Statistics I (00106N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00106N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 247,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00106N (Probability and Statistics I)?",
    "answer": "**00106N - Probability and Statistics I** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00106N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 248,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00107N - Discrete Structures?",
    "answer": "**Course:** 00107N: Discrete Structures\n**Department:** 10\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Discrete Structures (00107N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00107N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 249,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00107N (Discrete Structures)?",
    "answer": "**00107N - Discrete Structures** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00107N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 250,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 0X009N - Technical writing?",
    "answer": "**Course:** 0X009N: Technical writing\n**Department:** 10\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 2 credits\n**Type:** Elective\n**Overview:** Technical writing (0X009N) is an official Elective course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "0X009N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 251,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 0X009N (Technical writing)?",
    "answer": "**0X009N - Technical writing** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "0X009N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 252,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00108N - Data Structures and Algorithms?",
    "answer": "**Course:** 00108N: Data Structures and Algorithms\n**Department:** 8\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Data Structures and Algorithms (00108N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00108N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 253,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00108N (Data Structures and Algorithms)?",
    "answer": "The prerequisite for **00108N - Data Structures and Algorithms** is **00105N**. You must achieve a passing grade (\u2265 60% / C) in 00105N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00108N",
      "prerequisites",
      "00105N"
    ],
    "similarity": 0.94
  },
  {
    "id": 254,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00101N - Linear Algebra?",
    "answer": "**Course:** 00101N: Linear Algebra\n**Department:** 10\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Linear Algebra (00101N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00101N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 255,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00101N (Linear Algebra)?",
    "answer": "**00101N - Linear Algebra** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00101N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 256,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 0X020N - Communication skills?",
    "answer": "**Course:** 0X020N: Communication skills\n**Department:** 10\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 2 credits\n**Type:** Elective\n**Overview:** Communication skills (0X020N) is an official Elective course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "0X020N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 257,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 0X020N (Communication skills)?",
    "answer": "**0X020N - Communication skills** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "0X020N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 258,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00102N - Calculus?",
    "answer": "**Course:** 00102N: Calculus\n**Department:** 10\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Calculus (00102N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00102N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 259,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00102N (Calculus)?",
    "answer": "**00102N - Calculus** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00102N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 260,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00105N - Programming I?",
    "answer": "**Course:** 00105N: Programming I\n**Department:** 10\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Programming I (00105N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00105N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 261,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00105N (Programming I)?",
    "answer": "**00105N - Programming I** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00105N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 262,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 0X011N - English for CS?",
    "answer": "**Course:** 0X011N: English for CS\n**Department:** 10\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 2 credits\n**Type:** Elective\n**Overview:** English for CS (0X011N) is an official Elective course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "0X011N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 263,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 0X011N (English for CS)?",
    "answer": "**0X011N - English for CS** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "0X011N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 264,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170103N - Introduction to Computing Technology?",
    "answer": "**Course:** 4170103N: Introduction to Computing Technology\n**Department:** 11\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Introduction to Computing Technology (4170103N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170103N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 265,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170103N (Introduction to Computing Technology)?",
    "answer": "**4170103N - Introduction to Computing Technology** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170103N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 266,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170105N - Physics (1)?",
    "answer": "**Course:** 4170105N: Physics (1)\n**Department:** 11\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Physics (1) (4170105N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170105N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 267,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170105N (Physics (1))?",
    "answer": "**4170105N - Physics (1)** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170105N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 268,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170102N - Math (II)?",
    "answer": "**Course:** 4170102N: Math (II)\n**Department:** 11\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 2 credits\n**Type:** Core\n**Overview:** Math (II) (4170102N) is an official Core course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170102N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 269,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170102N (Math (II))?",
    "answer": "The prerequisite for **4170102N - Math (II)** is **4170101N**. You must achieve a passing grade (\u2265 60% / C) in 4170101N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170102N",
      "prerequisites",
      "4170101N"
    ],
    "similarity": 0.94
  },
  {
    "id": 270,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170101N - Math (I)?",
    "answer": "**Course:** 4170101N: Math (I)\n**Department:** 11\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 2 credits\n**Type:** Core\n**Overview:** Math (I) (4170101N) is an official Core course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170101N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 271,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170101N (Math (I))?",
    "answer": "**4170101N - Math (I)** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170101N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 272,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for HUM-3-SIMN - English Language?",
    "answer": "**Course:** HUM-3-SIMN: English Language\n**Department:** 11\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 2 credits\n**Type:** Elective\n**Overview:** English Language (HUM-3-SIMN) is an official Elective course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "HUM-3-SIMN",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 273,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for HUM-3-SIMN (English Language)?",
    "answer": "**HUM-3-SIMN - English Language** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "HUM-3-SIMN",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 274,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for HUM-2-SIMN - Public Health?",
    "answer": "**Course:** HUM-2-SIMN: Public Health\n**Department:** 11\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 2 credits\n**Type:** Elective\n**Overview:** Public Health (HUM-2-SIMN) is an official Elective course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "HUM-2-SIMN",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 275,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for HUM-2-SIMN (Public Health)?",
    "answer": "**HUM-2-SIMN - Public Health** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "HUM-2-SIMN",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 276,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170107N - Introduction to probability?",
    "answer": "**Course:** 4170107N: Introduction to probability\n**Department:** 11\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 2 credits\n**Type:** Core\n**Overview:** Introduction to probability (4170107N) is an official Core course (2 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170107N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 277,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170107N (Introduction to probability)?",
    "answer": "**4170107N - Introduction to probability** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170107N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 278,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170106N - Physics (II)?",
    "answer": "**Course:** 4170106N: Physics (II)\n**Department:** 11\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Physics (II) (4170106N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170106N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 279,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170106N (Physics (II))?",
    "answer": "The prerequisite for **4170106N - Physics (II)** is **4170105N**. You must achieve a passing grade (\u2265 60% / C) in 4170105N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170106N",
      "prerequisites",
      "4170105N"
    ],
    "similarity": 0.94
  },
  {
    "id": 280,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170108N - Computer Programming?",
    "answer": "**Course:** 4170108N: Computer Programming\n**Department:** 11\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Computer Programming (4170108N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170108N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 281,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170108N (Computer Programming)?",
    "answer": "**4170108N - Computer Programming** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170108N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 282,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170104N - Mathematics for Computer Science?",
    "answer": "**Course:** 4170104N: Mathematics for Computer Science\n**Department:** 11\n**Study Year:** Year 1 (Level 1)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Mathematics for Computer Science (4170104N) is an official Core course (3 credit hours) offered in Year 1 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170104N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 283,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170104N (Mathematics for Computer Science)?",
    "answer": "The prerequisite for **4170104N - Mathematics for Computer Science** is **4170103N**. You must achieve a passing grade (\u2265 60% / C) in 4170103N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170104N",
      "prerequisites",
      "4170103N"
    ],
    "similarity": 0.94
  },
  {
    "id": 284,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03204N - Regression Analysis?",
    "answer": "**Course:** 03204N: Regression Analysis\n**Department:** 10\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Regression Analysis (03204N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03204N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 285,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03204N (Regression Analysis)?",
    "answer": "The prerequisite for **03204N - Regression Analysis** is **00201N**. You must achieve a passing grade (\u2265 60% / C) in 00201N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03204N",
      "prerequisites",
      "00201N"
    ],
    "similarity": 0.94
  },
  {
    "id": 286,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01202N - Optimization Methods?",
    "answer": "**Course:** 01202N: Optimization Methods\n**Department:** 9\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Optimization Methods (01202N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01202N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 287,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01202N (Optimization Methods)?",
    "answer": "The prerequisite for **01202N - Optimization Methods** is **00101N, 00102N**. You must achieve a passing grade (\u2265 60% / C) in 00101N, 00102N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01202N",
      "prerequisites",
      "00101N",
      "00102N"
    ],
    "similarity": 0.94
  },
  {
    "id": 288,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00203N - Numerical Computations?",
    "answer": "**Course:** 00203N: Numerical Computations\n**Department:** 10\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Numerical Computations (00203N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00203N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 289,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00203N (Numerical Computations)?",
    "answer": "The prerequisite for **00203N - Numerical Computations** is **00101N**. You must achieve a passing grade (\u2265 60% / C) in 00101N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00203N",
      "prerequisites",
      "00101N"
    ],
    "similarity": 0.94
  },
  {
    "id": 290,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00202N - Introduction to Databases?",
    "answer": "**Course:** 00202N: Introduction to Databases\n**Department:** 9\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Introduction to Databases (00202N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00202N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 291,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00202N (Introduction to Databases)?",
    "answer": "The prerequisite for **00202N - Introduction to Databases** is **00105N**. You must achieve a passing grade (\u2265 60% / C) in 00105N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00202N",
      "prerequisites",
      "00105N"
    ],
    "similarity": 0.94
  },
  {
    "id": 292,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00205N - Mobile Programming?",
    "answer": "**Course:** 00205N: Mobile Programming\n**Department:** 10\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Mobile Programming (00205N) is an official Elective course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00205N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 293,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00205N (Mobile Programming)?",
    "answer": "The prerequisite for **00205N - Mobile Programming** is **00105N**. You must achieve a passing grade (\u2265 60% / C) in 00105N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00205N",
      "prerequisites",
      "00105N"
    ],
    "similarity": 0.94
  },
  {
    "id": 294,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00204N - Web Programming?",
    "answer": "**Course:** 00204N: Web Programming\n**Department:** 10\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Web Programming (00204N) is an official Elective course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00204N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 295,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00204N (Web Programming)?",
    "answer": "The prerequisite for **00204N - Web Programming** is **00105N**. You must achieve a passing grade (\u2265 60% / C) in 00105N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00204N",
      "prerequisites",
      "00105N"
    ],
    "similarity": 0.94
  },
  {
    "id": 296,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01204N - Neural Networks?",
    "answer": "**Course:** 01204N: Neural Networks\n**Department:** 10\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Neural Networks (01204N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01204N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 297,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01204N (Neural Networks)?",
    "answer": "The prerequisite for **01204N - Neural Networks** is **00109N**. You must achieve a passing grade (\u2265 60% / C) in 00109N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01204N",
      "prerequisites",
      "00109N"
    ],
    "similarity": 0.94
  },
  {
    "id": 298,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03203N - Data Science Tools and Software?",
    "answer": "**Course:** 03203N: Data Science Tools and Software\n**Department:** 10\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Data Science Tools and Software (03203N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03203N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 299,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03203N (Data Science Tools and Software)?",
    "answer": "The prerequisite for **03203N - Data Science Tools and Software** is **00104N, 00201N**. You must achieve a passing grade (\u2265 60% / C) in 00104N, 00201N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03203N",
      "prerequisites",
      "00104N",
      "00201N"
    ],
    "similarity": 0.94
  },
  {
    "id": 300,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03202N - Data Science Methodology?",
    "answer": "**Course:** 03202N: Data Science Methodology\n**Department:** 10\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Data Science Methodology (03202N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03202N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 301,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03202N (Data Science Methodology)?",
    "answer": "The prerequisite for **03202N - Data Science Methodology** is **00104N**. You must achieve a passing grade (\u2265 60% / C) in 00104N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03202N",
      "prerequisites",
      "00104N"
    ],
    "similarity": 0.94
  },
  {
    "id": 302,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00201N - Probability and Statistics II?",
    "answer": "**Course:** 00201N: Probability and Statistics II\n**Department:** 8\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Probability and Statistics II (00201N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00201N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 303,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00201N (Probability and Statistics II)?",
    "answer": "The prerequisite for **00201N - Probability and Statistics II** is **00106N**. You must achieve a passing grade (\u2265 60% / C) in 00106N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00201N",
      "prerequisites",
      "00106N"
    ],
    "similarity": 0.94
  },
  {
    "id": 304,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00207N - Computer Networks?",
    "answer": "**Course:** 00207N: Computer Networks\n**Department:** 8\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Computer Networks (00207N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00207N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 305,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00207N (Computer Networks)?",
    "answer": "The prerequisite for **00207N - Computer Networks** is **00103N, 00105N**. You must achieve a passing grade (\u2265 60% / C) in 00103N, 00105N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00207N",
      "prerequisites",
      "00103N",
      "00105N"
    ],
    "similarity": 0.94
  },
  {
    "id": 306,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 0X007N - Critical Thinking?",
    "answer": "**Course:** 0X007N: Critical Thinking\n**Department:** 8\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 2 credits\n**Type:** Core\n**Overview:** Critical Thinking (0X007N) is an official Core course (2 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "0X007N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 307,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 0X007N (Critical Thinking)?",
    "answer": "**0X007N - Critical Thinking** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "0X007N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 308,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01201N - Smart Systems and Computational Intelligence?",
    "answer": "**Course:** 01201N: Smart Systems and Computational Intelligence\n**Department:** 9\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Smart Systems and Computational Intelligence (01201N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01201N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 309,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01201N (Smart Systems and Computational Intelligence)?",
    "answer": "The prerequisite for **01201N - Smart Systems and Computational Intelligence** is **00109N**. You must achieve a passing grade (\u2265 60% / C) in 00109N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01201N",
      "prerequisites",
      "00109N"
    ],
    "similarity": 0.94
  },
  {
    "id": 310,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00206N - Data Mining and Analytics?",
    "answer": "**Course:** 00206N: Data Mining and Analytics\n**Department:** 8\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Data Mining and Analytics (00206N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00206N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 311,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00206N (Data Mining and Analytics)?",
    "answer": "The prerequisite for **00206N - Data Mining and Analytics** is **00201N**. You must achieve a passing grade (\u2265 60% / C) in 00201N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00206N",
      "prerequisites",
      "00201N"
    ],
    "similarity": 0.94
  },
  {
    "id": 312,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01206N - AI Security Issues?",
    "answer": "**Course:** 01206N: AI Security Issues\n**Department:** 9\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** AI Security Issues (01206N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01206N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 313,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01206N (AI Security Issues)?",
    "answer": "The prerequisite for **01206N - AI Security Issues** is **00109N**. You must achieve a passing grade (\u2265 60% / C) in 00109N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01206N",
      "prerequisites",
      "00109N"
    ],
    "similarity": 0.94
  },
  {
    "id": 314,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02203N - Cryptography?",
    "answer": "**Course:** 02203N: Cryptography\n**Department:** 8\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Cryptography (02203N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02203N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 315,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02203N (Cryptography)?",
    "answer": "The prerequisite for **02203N - Cryptography** is **02201N, 02202N**. You must achieve a passing grade (\u2265 60% / C) in 02201N, 02202N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02203N",
      "prerequisites",
      "02201N",
      "02202N"
    ],
    "similarity": 0.94
  },
  {
    "id": 316,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02202N - Number Theory?",
    "answer": "**Course:** 02202N: Number Theory\n**Department:** 8\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Number Theory (02202N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02202N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 317,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02202N (Number Theory)?",
    "answer": "The prerequisite for **02202N - Number Theory** is **00101N, 00106N**. You must achieve a passing grade (\u2265 60% / C) in 00101N, 00106N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02202N",
      "prerequisites",
      "00101N",
      "00106N"
    ],
    "similarity": 0.94
  },
  {
    "id": 318,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02201N - Introduction to Cybersecurity?",
    "answer": "**Course:** 02201N: Introduction to Cybersecurity\n**Department:** 8\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Introduction to Cybersecurity (02201N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02201N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 319,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02201N (Introduction to Cybersecurity)?",
    "answer": "**02201N - Introduction to Cybersecurity** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02201N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 320,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170202N - Math (IV)?",
    "answer": "**Course:** 4170202N: Math (IV)\n**Department:** 11\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 2 credits\n**Type:** Core\n**Overview:** Math (IV) (4170202N) is an official Core course (2 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170202N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 321,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170202N (Math (IV))?",
    "answer": "The prerequisite for **4170202N - Math (IV)** is **4170201N**. You must achieve a passing grade (\u2265 60% / C) in 4170201N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170202N",
      "prerequisites",
      "4170201N"
    ],
    "similarity": 0.94
  },
  {
    "id": 322,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170201N - Math (III)?",
    "answer": "**Course:** 4170201N: Math (III)\n**Department:** 11\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 2 credits\n**Type:** Core\n**Overview:** Math (III) (4170201N) is an official Core course (2 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170201N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 323,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170201N (Math (III))?",
    "answer": "The prerequisite for **4170201N - Math (III)** is **4170102N**. You must achieve a passing grade (\u2265 60% / C) in 4170102N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170201N",
      "prerequisites",
      "4170102N"
    ],
    "similarity": 0.94
  },
  {
    "id": 324,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170204N - Computational Tools for Data Science?",
    "answer": "**Course:** 4170204N: Computational Tools for Data Science\n**Department:** 11\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Computational Tools for Data Science (4170204N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170204N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 325,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170204N (Computational Tools for Data Science)?",
    "answer": "The prerequisite for **4170204N - Computational Tools for Data Science** is **4170108N**. You must achieve a passing grade (\u2265 60% / C) in 4170108N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170204N",
      "prerequisites",
      "4170108N"
    ],
    "similarity": 0.94
  },
  {
    "id": 326,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170203N - Object Oriented Programming?",
    "answer": "**Course:** 4170203N: Object Oriented Programming\n**Department:** 11\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Object Oriented Programming (4170203N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170203N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 327,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170203N (Object Oriented Programming)?",
    "answer": "The prerequisite for **4170203N - Object Oriented Programming** is **4170108N**. You must achieve a passing grade (\u2265 60% / C) in 4170108N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170203N",
      "prerequisites",
      "4170108N"
    ],
    "similarity": 0.94
  },
  {
    "id": 328,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170213N - Computer Animation Techniques?",
    "answer": "**Course:** 4170213N: Computer Animation Techniques\n**Department:** 11\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Computer Animation Techniques (4170213N) is an official Elective course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170213N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 329,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170213N (Computer Animation Techniques)?",
    "answer": "The prerequisite for **4170213N - Computer Animation Techniques** is **4170205N**. You must achieve a passing grade (\u2265 60% / C) in 4170205N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170213N",
      "prerequisites",
      "4170205N"
    ],
    "similarity": 0.94
  },
  {
    "id": 330,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170212N - Scientific & Technical Reporting?",
    "answer": "**Course:** 4170212N: Scientific & Technical Reporting\n**Department:** 11\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 2 credits\n**Type:** Elective\n**Overview:** Scientific & Technical Reporting (4170212N) is an official Elective course (2 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170212N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 331,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170212N (Scientific & Technical Reporting)?",
    "answer": "**4170212N - Scientific & Technical Reporting** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170212N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 332,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170207N - Software Engineering Theory?",
    "answer": "**Course:** 4170207N: Software Engineering Theory\n**Department:** 11\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Software Engineering Theory (4170207N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170207N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 333,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170207N (Software Engineering Theory)?",
    "answer": "**4170207N - Software Engineering Theory** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170207N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 334,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170208N - Multimedia Systems?",
    "answer": "**Course:** 4170208N: Multimedia Systems\n**Department:** 11\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Multimedia Systems (4170208N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170208N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 335,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170208N (Multimedia Systems)?",
    "answer": "The prerequisite for **4170208N - Multimedia Systems** is **4170203N**. You must achieve a passing grade (\u2265 60% / C) in 4170203N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170208N",
      "prerequisites",
      "4170203N"
    ],
    "similarity": 0.94
  },
  {
    "id": 336,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170214N - Sound Engineering?",
    "answer": "**Course:** 4170214N: Sound Engineering\n**Department:** 11\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Sound Engineering (4170214N) is an official Elective course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170214N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 337,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170214N (Sound Engineering)?",
    "answer": "**4170214N - Sound Engineering** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170214N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 338,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for HUM-4-SIMN - Arabic Language?",
    "answer": "**Course:** HUM-4-SIMN: Arabic Language\n**Department:** 11\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 2 credits\n**Type:** Elective\n**Overview:** Arabic Language (HUM-4-SIMN) is an official Elective course (2 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "HUM-4-SIMN",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 339,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for HUM-4-SIMN (Arabic Language)?",
    "answer": "**HUM-4-SIMN - Arabic Language** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "HUM-4-SIMN",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 340,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170210N - Software Analysis and Verification?",
    "answer": "**Course:** 4170210N: Software Analysis and Verification\n**Department:** 11\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Software Analysis and Verification (4170210N) is an official Elective course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170210N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 341,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170210N (Software Analysis and Verification)?",
    "answer": "The prerequisite for **4170210N - Software Analysis and Verification** is **4170207N**. You must achieve a passing grade (\u2265 60% / C) in 4170207N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170210N",
      "prerequisites",
      "4170207N"
    ],
    "similarity": 0.94
  },
  {
    "id": 342,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170205N - Game Programming?",
    "answer": "**Course:** 4170205N: Game Programming\n**Department:** 11\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Game Programming (4170205N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170205N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 343,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170205N (Game Programming)?",
    "answer": "The prerequisite for **4170205N - Game Programming** is **4170203N**. You must achieve a passing grade (\u2265 60% / C) in 4170203N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170205N",
      "prerequisites",
      "4170203N"
    ],
    "similarity": 0.94
  },
  {
    "id": 344,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170206N - Data Structure?",
    "answer": "**Course:** 4170206N: Data Structure\n**Department:** 11\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Data Structure (4170206N) is an official Core course (3 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170206N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 345,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170206N (Data Structure)?",
    "answer": "The prerequisite for **4170206N - Data Structure** is **4170203N**. You must achieve a passing grade (\u2265 60% / C) in 4170203N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170206N",
      "prerequisites",
      "4170203N"
    ],
    "similarity": 0.94
  },
  {
    "id": 346,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for HUM-6-SIMN - Self Management?",
    "answer": "**Course:** HUM-6-SIMN: Self Management\n**Department:** 11\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 2 credits\n**Type:** Elective\n**Overview:** Self Management (HUM-6-SIMN) is an official Elective course (2 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "HUM-6-SIMN",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 347,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for HUM-6-SIMN (Self Management)?",
    "answer": "**HUM-6-SIMN - Self Management** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "HUM-6-SIMN",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 348,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for HUM-5-SIMN - History of Science?",
    "answer": "**Course:** HUM-5-SIMN: History of Science\n**Department:** 11\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 2 credits\n**Type:** Elective\n**Overview:** History of Science (HUM-5-SIMN) is an official Elective course (2 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "HUM-5-SIMN",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 349,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for HUM-5-SIMN (History of Science)?",
    "answer": "**HUM-5-SIMN - History of Science** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "HUM-5-SIMN",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 350,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170211N - Theory of Computation?",
    "answer": "**Course:** 4170211N: Theory of Computation\n**Department:** 11\n**Study Year:** Year 2 (Level 2)\n**Credit Hours:** 2 credits\n**Type:** Elective\n**Overview:** Theory of Computation (4170211N) is an official Elective course (2 credit hours) offered in Year 2 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170211N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 351,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170211N (Theory of Computation)?",
    "answer": "The prerequisite for **4170211N - Theory of Computation** is **4170104N**. You must achieve a passing grade (\u2265 60% / C) in 4170104N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170211N",
      "prerequisites",
      "4170104N"
    ],
    "similarity": 0.94
  },
  {
    "id": 352,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01306N - Pattern Recognition?",
    "answer": "**Course:** 01306N: Pattern Recognition\n**Department:** 10\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Pattern Recognition (01306N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01306N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 353,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01306N (Pattern Recognition)?",
    "answer": "The prerequisite for **01306N - Pattern Recognition** is **00101N, 00106N**. You must achieve a passing grade (\u2265 60% / C) in 00101N, 00106N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01306N",
      "prerequisites",
      "00101N",
      "00106N"
    ],
    "similarity": 0.94
  },
  {
    "id": 354,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03304N - Data Computation and Analysis?",
    "answer": "**Course:** 03304N: Data Computation and Analysis\n**Department:** 10\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Data Computation and Analysis (03304N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03304N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 355,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03304N (Data Computation and Analysis)?",
    "answer": "The prerequisite for **03304N - Data Computation and Analysis** is **00206N, 00305N**. You must achieve a passing grade (\u2265 60% / C) in 00206N, 00305N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03304N",
      "prerequisites",
      "00206N",
      "00305N"
    ],
    "similarity": 0.94
  },
  {
    "id": 356,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03303N - Data Visualization Tools?",
    "answer": "**Course:** 03303N: Data Visualization Tools\n**Department:** 10\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Data Visualization Tools (03303N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03303N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 357,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03303N (Data Visualization Tools)?",
    "answer": "The prerequisite for **03303N - Data Visualization Tools** is **03203N**. You must achieve a passing grade (\u2265 60% / C) in 03203N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03303N",
      "prerequisites",
      "03203N"
    ],
    "similarity": 0.94
  },
  {
    "id": 358,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 0X008N - Innovation & Entrepreneurship?",
    "answer": "**Course:** 0X008N: Innovation & Entrepreneurship\n**Department:** 10\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 2 credits\n**Type:** Core\n**Overview:** Innovation & Entrepreneurship (0X008N) is an official Core course (2 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "0X008N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 359,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 0X008N (Innovation & Entrepreneurship)?",
    "answer": "**0X008N - Innovation & Entrepreneurship** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "0X008N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 360,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00303N - Analysis and Design of Algorithms?",
    "answer": "**Course:** 00303N: Analysis and Design of Algorithms\n**Department:** 8\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Analysis and Design of Algorithms (00303N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00303N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 361,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00303N (Analysis and Design of Algorithms)?",
    "answer": "The prerequisite for **00303N - Analysis and Design of Algorithms** is **00108N**. You must achieve a passing grade (\u2265 60% / C) in 00108N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00303N",
      "prerequisites",
      "00108N"
    ],
    "similarity": 0.94
  },
  {
    "id": 362,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00301N - Software Engineering?",
    "answer": "**Course:** 00301N: Software Engineering\n**Department:** 8\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Software Engineering (00301N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00301N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 363,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00301N (Software Engineering)?",
    "answer": "The prerequisite for **00301N - Software Engineering** is **00110N**. You must achieve a passing grade (\u2265 60% / C) in 00110N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00301N",
      "prerequisites",
      "00110N"
    ],
    "similarity": 0.94
  },
  {
    "id": 364,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01305N - Computer Vision?",
    "answer": "**Course:** 01305N: Computer Vision\n**Department:** 10\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Computer Vision (01305N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01305N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 365,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01305N (Computer Vision)?",
    "answer": "The prerequisite for **01305N - Computer Vision** is **00101N, 00109N**. You must achieve a passing grade (\u2265 60% / C) in 00101N, 00109N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01305N",
      "prerequisites",
      "00101N",
      "00109N"
    ],
    "similarity": 0.94
  },
  {
    "id": 366,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00304N - Distributed Processing?",
    "answer": "**Course:** 00304N: Distributed Processing\n**Department:** 8\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Distributed Processing (00304N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00304N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 367,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00304N (Distributed Processing)?",
    "answer": "The prerequisite for **00304N - Distributed Processing** is **00103N, 00108N**. You must achieve a passing grade (\u2265 60% / C) in 00103N, 00108N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00304N",
      "prerequisites",
      "00103N",
      "00108N"
    ],
    "similarity": 0.94
  },
  {
    "id": 368,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00306N - Cloud Computing?",
    "answer": "**Course:** 00306N: Cloud Computing\n**Department:** 10\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Cloud Computing (00306N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00306N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 369,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00306N (Cloud Computing)?",
    "answer": "The prerequisite for **00306N - Cloud Computing** is **00108N**. You must achieve a passing grade (\u2265 60% / C) in 00108N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00306N",
      "prerequisites",
      "00108N"
    ],
    "similarity": 0.94
  },
  {
    "id": 370,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00302N - Systems Analysis and Design?",
    "answer": "**Course:** 00302N: Systems Analysis and Design\n**Department:** 8\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Systems Analysis and Design (00302N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00302N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 371,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00302N (Systems Analysis and Design)?",
    "answer": "The prerequisite for **00302N - Systems Analysis and Design** is **00202N**. You must achieve a passing grade (\u2265 60% / C) in 00202N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00302N",
      "prerequisites",
      "00202N"
    ],
    "similarity": 0.94
  },
  {
    "id": 372,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00305N - Machine Learning?",
    "answer": "**Course:** 00305N: Machine Learning\n**Department:** 10\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Machine Learning (00305N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00305N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 373,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00305N (Machine Learning)?",
    "answer": "The prerequisite for **00305N - Machine Learning** is **00109N, 00101N**. You must achieve a passing grade (\u2265 60% / C) in 00109N, 00101N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00305N",
      "prerequisites",
      "00109N",
      "00101N"
    ],
    "similarity": 0.94
  },
  {
    "id": 374,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01301N - Intelligent Programming?",
    "answer": "**Course:** 01301N: Intelligent Programming\n**Department:** 10\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Intelligent Programming (01301N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01301N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 375,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01301N (Intelligent Programming)?",
    "answer": "The prerequisite for **01301N - Intelligent Programming** is **00108N, 00109N**. You must achieve a passing grade (\u2265 60% / C) in 00108N, 00109N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01301N",
      "prerequisites",
      "00108N",
      "00109N"
    ],
    "similarity": 0.94
  },
  {
    "id": 376,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03301N - Stochastic Processes?",
    "answer": "**Course:** 03301N: Stochastic Processes\n**Department:** 10\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Stochastic Processes (03301N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03301N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 377,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03301N (Stochastic Processes)?",
    "answer": "The prerequisite for **03301N - Stochastic Processes** is **00101N, 00201N**. You must achieve a passing grade (\u2265 60% / C) in 00101N, 00201N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03301N",
      "prerequisites",
      "00101N",
      "00201N"
    ],
    "similarity": 0.94
  },
  {
    "id": 378,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 00307N - Operating Systems?",
    "answer": "**Course:** 00307N: Operating Systems\n**Department:** 8\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Operating Systems (00307N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "00307N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 379,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 00307N (Operating Systems)?",
    "answer": "The prerequisite for **00307N - Operating Systems** is **00103N, 00108N**. You must achieve a passing grade (\u2265 60% / C) in 00103N, 00108N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "00307N",
      "prerequisites",
      "00103N",
      "00108N"
    ],
    "similarity": 0.94
  },
  {
    "id": 380,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02306N - Information Security Management?",
    "answer": "**Course:** 02306N: Information Security Management\n**Department:** 8\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Information Security Management (02306N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02306N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 381,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02306N (Information Security Management)?",
    "answer": "The prerequisite for **02306N - Information Security Management** is **00202N, 02201N**. You must achieve a passing grade (\u2265 60% / C) in 00202N, 02201N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02306N",
      "prerequisites",
      "00202N",
      "02201N"
    ],
    "similarity": 0.94
  },
  {
    "id": 382,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02304N - Computer Network Security?",
    "answer": "**Course:** 02304N: Computer Network Security\n**Department:** 8\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Computer Network Security (02304N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02304N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 383,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02304N (Computer Network Security)?",
    "answer": "The prerequisite for **02304N - Computer Network Security** is **00207N, 02203N**. You must achieve a passing grade (\u2265 60% / C) in 00207N, 02203N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02304N",
      "prerequisites",
      "00207N",
      "02203N"
    ],
    "similarity": 0.94
  },
  {
    "id": 384,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02303N - Secure Software Development?",
    "answer": "**Course:** 02303N: Secure Software Development\n**Department:** 8\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Secure Software Development (02303N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02303N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 385,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02303N (Secure Software Development)?",
    "answer": "The prerequisite for **02303N - Secure Software Development** is **00110N, 02201N**. You must achieve a passing grade (\u2265 60% / C) in 00110N, 02201N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02303N",
      "prerequisites",
      "00110N",
      "02201N"
    ],
    "similarity": 0.94
  },
  {
    "id": 386,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02305N - Data Integrity and Authentication?",
    "answer": "**Course:** 02305N: Data Integrity and Authentication\n**Department:** 8\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Data Integrity and Authentication (02305N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02305N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 387,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02305N (Data Integrity and Authentication)?",
    "answer": "The prerequisite for **02305N - Data Integrity and Authentication** is **00202N, 02203N**. You must achieve a passing grade (\u2265 60% / C) in 00202N, 02203N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02305N",
      "prerequisites",
      "00202N",
      "02203N"
    ],
    "similarity": 0.94
  },
  {
    "id": 388,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02302N - Operating Systems Security?",
    "answer": "**Course:** 02302N: Operating Systems Security\n**Department:** 8\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Operating Systems Security (02302N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02302N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 389,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02302N (Operating Systems Security)?",
    "answer": "The prerequisite for **02302N - Operating Systems Security** is **02201N, 00307N**. You must achieve a passing grade (\u2265 60% / C) in 02201N, 00307N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02302N",
      "prerequisites",
      "02201N",
      "00307N"
    ],
    "similarity": 0.94
  },
  {
    "id": 390,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170307N - Design and Analysis of Algorithms?",
    "answer": "**Course:** 4170307N: Design and Analysis of Algorithms\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Design and Analysis of Algorithms (4170307N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170307N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 391,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170307N (Design and Analysis of Algorithms)?",
    "answer": "The prerequisite for **4170307N - Design and Analysis of Algorithms** is **4170206N**. You must achieve a passing grade (\u2265 60% / C) in 4170206N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170307N",
      "prerequisites",
      "4170206N"
    ],
    "similarity": 0.94
  },
  {
    "id": 392,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170303N - Operating systems?",
    "answer": "**Course:** 4170303N: Operating systems\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Operating systems (4170303N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170303N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 393,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170303N (Operating systems)?",
    "answer": "The prerequisite for **4170303N - Operating systems** is **4170206N**. You must achieve a passing grade (\u2265 60% / C) in 4170206N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170303N",
      "prerequisites",
      "4170206N"
    ],
    "similarity": 0.94
  },
  {
    "id": 394,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170308N - Human Computer Interaction?",
    "answer": "**Course:** 4170308N: Human Computer Interaction\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Human Computer Interaction (4170308N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170308N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 395,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170308N (Human Computer Interaction)?",
    "answer": "The prerequisite for **4170308N - Human Computer Interaction** is **4170204N**. You must achieve a passing grade (\u2265 60% / C) in 4170204N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170308N",
      "prerequisites",
      "4170204N"
    ],
    "similarity": 0.94
  },
  {
    "id": 396,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170302N - Numerical Computation?",
    "answer": "**Course:** 4170302N: Numerical Computation\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 2 credits\n**Type:** Core\n**Overview:** Numerical Computation (4170302N) is an official Core course (2 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170302N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 397,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170302N (Numerical Computation)?",
    "answer": "**4170302N - Numerical Computation** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170302N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 398,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170311N - Graphic Programming?",
    "answer": "**Course:** 4170311N: Graphic Programming\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Graphic Programming (4170311N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170311N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 399,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170311N (Graphic Programming)?",
    "answer": "The prerequisite for **4170311N - Graphic Programming** is **4170208N**. You must achieve a passing grade (\u2265 60% / C) in 4170208N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170311N",
      "prerequisites",
      "4170208N"
    ],
    "similarity": 0.94
  },
  {
    "id": 400,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170309N - The User Interface Design?",
    "answer": "**Course:** 4170309N: The User Interface Design\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** The User Interface Design (4170309N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170309N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 401,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170309N (The User Interface Design)?",
    "answer": "The prerequisite for **4170309N - The User Interface Design** is **4170203N**. You must achieve a passing grade (\u2265 60% / C) in 4170203N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170309N",
      "prerequisites",
      "4170203N"
    ],
    "similarity": 0.94
  },
  {
    "id": 402,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170306N - AI for Game?",
    "answer": "**Course:** 4170306N: AI for Game\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** AI for Game (4170306N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170306N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 403,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170306N (AI for Game)?",
    "answer": "The prerequisite for **4170306N - AI for Game** is **4170205N**. You must achieve a passing grade (\u2265 60% / C) in 4170205N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170306N",
      "prerequisites",
      "4170205N"
    ],
    "similarity": 0.94
  },
  {
    "id": 404,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170304N - Software Requirements Analysis?",
    "answer": "**Course:** 4170304N: Software Requirements Analysis\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Software Requirements Analysis (4170304N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170304N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 405,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170304N (Software Requirements Analysis)?",
    "answer": "The prerequisite for **4170304N - Software Requirements Analysis** is **4170207N**. You must achieve a passing grade (\u2265 60% / C) in 4170207N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170304N",
      "prerequisites",
      "4170207N"
    ],
    "similarity": 0.94
  },
  {
    "id": 406,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170305N - Database?",
    "answer": "**Course:** 4170305N: Database\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Database (4170305N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170305N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 407,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170305N (Database)?",
    "answer": "The prerequisite for **4170305N - Database** is **4170204N**. You must achieve a passing grade (\u2265 60% / C) in 4170204N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170305N",
      "prerequisites",
      "4170204N"
    ],
    "similarity": 0.94
  },
  {
    "id": 408,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170310N - Computational Complexity?",
    "answer": "**Course:** 4170310N: Computational Complexity\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Computational Complexity (4170310N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170310N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 409,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170310N (Computational Complexity)?",
    "answer": "The prerequisite for **4170310N - Computational Complexity** is **4170307N**. You must achieve a passing grade (\u2265 60% / C) in 4170307N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170310N",
      "prerequisites",
      "4170307N"
    ],
    "similarity": 0.94
  },
  {
    "id": 410,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170319N - Data Mining?",
    "answer": "**Course:** 4170319N: Data Mining\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Data Mining (4170319N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170319N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 411,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170319N (Data Mining)?",
    "answer": "The prerequisite for **4170319N - Data Mining** is **4170206N**. You must achieve a passing grade (\u2265 60% / C) in 4170206N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170319N",
      "prerequisites",
      "4170206N"
    ],
    "similarity": 0.94
  },
  {
    "id": 412,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170301N - Linear Algebra?",
    "answer": "**Course:** 4170301N: Linear Algebra\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 2 credits\n**Type:** Core\n**Overview:** Linear Algebra (4170301N) is an official Core course (2 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170301N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 413,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170301N (Linear Algebra)?",
    "answer": "**4170301N - Linear Algebra** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170301N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 414,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170312N - Intelligent Systems?",
    "answer": "**Course:** 4170312N: Intelligent Systems\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Intelligent Systems (4170312N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170312N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 415,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170312N (Intelligent Systems)?",
    "answer": "The prerequisite for **4170312N - Intelligent Systems** is **4170203N**. You must achieve a passing grade (\u2265 60% / C) in 4170203N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170312N",
      "prerequisites",
      "4170203N"
    ],
    "similarity": 0.94
  },
  {
    "id": 416,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170313N - Statistical Software?",
    "answer": "**Course:** 4170313N: Statistical Software\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Statistical Software (4170313N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170313N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 417,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170313N (Statistical Software)?",
    "answer": "**4170313N - Statistical Software** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170313N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 418,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170320N - Project Management?",
    "answer": "**Course:** 4170320N: Project Management\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Project Management (4170320N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170320N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 419,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170320N (Project Management)?",
    "answer": "The prerequisite for **4170320N - Project Management** is **4170206N**. You must achieve a passing grade (\u2265 60% / C) in 4170206N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170320N",
      "prerequisites",
      "4170206N"
    ],
    "similarity": 0.94
  },
  {
    "id": 420,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170318N - Information Systems Security?",
    "answer": "**Course:** 4170318N: Information Systems Security\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Information Systems Security (4170318N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170318N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 421,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170318N (Information Systems Security)?",
    "answer": "**4170318N - Information Systems Security** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170318N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 422,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170321N - E-Learning Techniques?",
    "answer": "**Course:** 4170321N: E-Learning Techniques\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** E-Learning Techniques (4170321N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170321N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 423,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170321N (E-Learning Techniques)?",
    "answer": "The prerequisite for **4170321N - E-Learning Techniques** is **4170303N**. You must achieve a passing grade (\u2265 60% / C) in 4170303N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170321N",
      "prerequisites",
      "4170303N"
    ],
    "similarity": 0.94
  },
  {
    "id": 424,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170315N - Web Software Engineering?",
    "answer": "**Course:** 4170315N: Web Software Engineering\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Web Software Engineering (4170315N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170315N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 425,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170315N (Web Software Engineering)?",
    "answer": "The prerequisite for **4170315N - Web Software Engineering** is **4170207N**. You must achieve a passing grade (\u2265 60% / C) in 4170207N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170315N",
      "prerequisites",
      "4170207N"
    ],
    "similarity": 0.94
  },
  {
    "id": 426,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170316N - System Simulation and Modeling?",
    "answer": "**Course:** 4170316N: System Simulation and Modeling\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** System Simulation and Modeling (4170316N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170316N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 427,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170316N (System Simulation and Modeling)?",
    "answer": "The prerequisite for **4170316N - System Simulation and Modeling** is **4170303N**. You must achieve a passing grade (\u2265 60% / C) in 4170303N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170316N",
      "prerequisites",
      "4170303N"
    ],
    "similarity": 0.94
  },
  {
    "id": 428,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170317N - Graphs and Networks?",
    "answer": "**Course:** 4170317N: Graphs and Networks\n**Department:** 11\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Graphs and Networks (4170317N) is an official Elective course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170317N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 429,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170317N (Graphs and Networks)?",
    "answer": "**4170317N - Graphs and Networks** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170317N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 430,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01304N - Embedded Systems?",
    "answer": "**Course:** 01304N: Embedded Systems\n**Department:** 9\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Embedded Systems (01304N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01304N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 431,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01304N (Embedded Systems)?",
    "answer": "The prerequisite for **01304N - Embedded Systems** is **01303N**. You must achieve a passing grade (\u2265 60% / C) in 01303N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01304N",
      "prerequisites",
      "01303N"
    ],
    "similarity": 0.94
  },
  {
    "id": 432,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01303N - Modern Control Systems?",
    "answer": "**Course:** 01303N: Modern Control Systems\n**Department:** 9\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Modern Control Systems (01303N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01303N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 433,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01303N (Modern Control Systems)?",
    "answer": "The prerequisite for **01303N - Modern Control Systems** is **00101N**. You must achieve a passing grade (\u2265 60% / C) in 00101N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01303N",
      "prerequisites",
      "00101N"
    ],
    "similarity": 0.94
  },
  {
    "id": 434,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01302N - AI Platforms?",
    "answer": "**Course:** 01302N: AI Platforms\n**Department:** 9\n**Study Year:** Year 3 (Level 3)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** AI Platforms (01302N) is an official Core course (3 credit hours) offered in Year 3 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01302N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 435,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01302N (AI Platforms)?",
    "answer": "The prerequisite for **01302N - AI Platforms** is **00109N**. You must achieve a passing grade (\u2265 60% / C) in 00109N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01302N",
      "prerequisites",
      "00109N"
    ],
    "similarity": 0.94
  },
  {
    "id": 436,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01405N - Reinforcement Learning?",
    "answer": "**Course:** 01405N: Reinforcement Learning\n**Department:** 10\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Reinforcement Learning (01405N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01405N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 437,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01405N (Reinforcement Learning)?",
    "answer": "The prerequisite for **01405N - Reinforcement Learning** is **00305N, 01202N**. You must achieve a passing grade (\u2265 60% / C) in 00305N, 01202N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01405N",
      "prerequisites",
      "00305N",
      "01202N"
    ],
    "similarity": 0.94
  },
  {
    "id": 438,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03408N - Project II?",
    "answer": "**Course:** 03408N: Project II\n**Department:** 10\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Project II (03408N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03408N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 439,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03408N (Project II)?",
    "answer": "The prerequisite for **03408N - Project II** is **03404N**. You must achieve a passing grade (\u2265 60% / C) in 03404N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03408N",
      "prerequisites",
      "03404N"
    ],
    "similarity": 0.94
  },
  {
    "id": 440,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03402N - Introduction to Social Networks?",
    "answer": "**Course:** 03402N: Introduction to Social Networks\n**Department:** 10\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Introduction to Social Networks (03402N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03402N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 441,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03402N (Introduction to Social Networks)?",
    "answer": "The prerequisite for **03402N - Introduction to Social Networks** is **00201N**. You must achieve a passing grade (\u2265 60% / C) in 00201N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03402N",
      "prerequisites",
      "00201N"
    ],
    "similarity": 0.94
  },
  {
    "id": 442,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03404N - Project I?",
    "answer": "**Course:** 03404N: Project I\n**Department:** 10\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Project I (03404N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03404N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 443,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03404N (Project I)?",
    "answer": "**03404N - Project I** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03404N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 444,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03415N - Distributed Database Systems?",
    "answer": "**Course:** 03415N: Distributed Database Systems\n**Department:** 10\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Distributed Database Systems (03415N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03415N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 445,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03415N (Distributed Database Systems)?",
    "answer": "The prerequisite for **03415N - Distributed Database Systems** is **00202N**. You must achieve a passing grade (\u2265 60% / C) in 00202N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03415N",
      "prerequisites",
      "00202N"
    ],
    "similarity": 0.94
  },
  {
    "id": 446,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03410N - Non-Linear and Combinatorial Optimization?",
    "answer": "**Course:** 03410N: Non-Linear and Combinatorial Optimization\n**Department:** 10\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Non-Linear and Combinatorial Optimization (03410N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03410N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 447,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03410N (Non-Linear and Combinatorial Optimization)?",
    "answer": "The prerequisite for **03410N - Non-Linear and Combinatorial Optimization** is **00101N, 00108N**. You must achieve a passing grade (\u2265 60% / C) in 00101N, 00108N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03410N",
      "prerequisites",
      "00101N",
      "00108N"
    ],
    "similarity": 0.94
  },
  {
    "id": 448,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01401N - Deep Learning?",
    "answer": "**Course:** 01401N: Deep Learning\n**Department:** 10\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Deep Learning (01401N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01401N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 449,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01401N (Deep Learning)?",
    "answer": "The prerequisite for **01401N - Deep Learning** is **00305N, 01204N**. You must achieve a passing grade (\u2265 60% / C) in 00305N, 01204N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01401N",
      "prerequisites",
      "00305N",
      "01204N"
    ],
    "similarity": 0.94
  },
  {
    "id": 450,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01403N - Natural Language Processing?",
    "answer": "**Course:** 01403N: Natural Language Processing\n**Department:** 10\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Natural Language Processing (01403N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01403N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 451,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01403N (Natural Language Processing)?",
    "answer": "The prerequisite for **01403N - Natural Language Processing** is **00305N**. You must achieve a passing grade (\u2265 60% / C) in 00305N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01403N",
      "prerequisites",
      "00305N"
    ],
    "similarity": 0.94
  },
  {
    "id": 452,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01417N - Business Intelligence Analysis?",
    "answer": "**Course:** 01417N: Business Intelligence Analysis\n**Department:** 10\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Business Intelligence Analysis (01417N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01417N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 453,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01417N (Business Intelligence Analysis)?",
    "answer": "The prerequisite for **01417N - Business Intelligence Analysis** is **03303N**. You must achieve a passing grade (\u2265 60% / C) in 03303N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01417N",
      "prerequisites",
      "03303N"
    ],
    "similarity": 0.94
  },
  {
    "id": 454,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03414N - Concurrent Algorithms and Data Structures?",
    "answer": "**Course:** 03414N: Concurrent Algorithms and Data Structures\n**Department:** 10\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Concurrent Algorithms and Data Structures (03414N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03414N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 455,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03414N (Concurrent Algorithms and Data Structures)?",
    "answer": "The prerequisite for **03414N - Concurrent Algorithms and Data Structures** is **00108N**. You must achieve a passing grade (\u2265 60% / C) in 00108N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03414N",
      "prerequisites",
      "00108N"
    ],
    "similarity": 0.94
  },
  {
    "id": 456,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01412N - Intelligence Technology Trends?",
    "answer": "**Course:** 01412N: Intelligence Technology Trends\n**Department:** 9\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Intelligence Technology Trends (01412N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01412N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 457,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01412N (Intelligence Technology Trends)?",
    "answer": "The prerequisite for **01412N - Intelligence Technology Trends** is **00109N**. You must achieve a passing grade (\u2265 60% / C) in 00109N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01412N",
      "prerequisites",
      "00109N"
    ],
    "similarity": 0.94
  },
  {
    "id": 458,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03401N - Big Data Analytics?",
    "answer": "**Course:** 03401N: Big Data Analytics\n**Department:** 10\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Big Data Analytics (03401N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03401N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 459,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03401N (Big Data Analytics)?",
    "answer": "The prerequisite for **03401N - Big Data Analytics** is **00105N, 00206N, 00305N**. You must achieve a passing grade (\u2265 60% / C) in 00105N, 00206N, 00305N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03401N",
      "prerequisites",
      "00105N",
      "00206N",
      "00305N"
    ],
    "similarity": 0.94
  },
  {
    "id": 460,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03409N - Convex Optimization?",
    "answer": "**Course:** 03409N: Convex Optimization\n**Department:** 10\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Convex Optimization (03409N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03409N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 461,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03409N (Convex Optimization)?",
    "answer": "The prerequisite for **03409N - Convex Optimization** is **00101N, 00203N, 01201N**. You must achieve a passing grade (\u2265 60% / C) in 00101N, 00203N, 01201N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03409N",
      "prerequisites",
      "00101N",
      "00203N",
      "01201N"
    ],
    "similarity": 0.94
  },
  {
    "id": 462,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03412N - Bayesian Statistics?",
    "answer": "**Course:** 03412N: Bayesian Statistics\n**Department:** 10\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Bayesian Statistics (03412N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03412N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 463,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03412N (Bayesian Statistics)?",
    "answer": "The prerequisite for **03412N - Bayesian Statistics** is **00201N**. You must achieve a passing grade (\u2265 60% / C) in 00201N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03412N",
      "prerequisites",
      "00201N"
    ],
    "similarity": 0.94
  },
  {
    "id": 464,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01409N - Speech Recognition?",
    "answer": "**Course:** 01409N: Speech Recognition\n**Department:** 9\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Speech Recognition (01409N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01409N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 465,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01409N (Speech Recognition)?",
    "answer": "The prerequisite for **01409N - Speech Recognition** is **01303N**. You must achieve a passing grade (\u2265 60% / C) in 01303N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01409N",
      "prerequisites",
      "01303N"
    ],
    "similarity": 0.94
  },
  {
    "id": 466,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01410N - Natural Language Understanding?",
    "answer": "**Course:** 01410N: Natural Language Understanding\n**Department:** 9\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Natural Language Understanding (01410N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01410N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 467,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01410N (Natural Language Understanding)?",
    "answer": "The prerequisite for **01410N - Natural Language Understanding** is **01403N**. You must achieve a passing grade (\u2265 60% / C) in 01403N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01410N",
      "prerequisites",
      "01403N"
    ],
    "similarity": 0.94
  },
  {
    "id": 468,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01416N - Game Theory?",
    "answer": "**Course:** 01416N: Game Theory\n**Department:** 9\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Game Theory (01416N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01416N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 469,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01416N (Game Theory)?",
    "answer": "The prerequisite for **01416N - Game Theory** is **01202N**. You must achieve a passing grade (\u2265 60% / C) in 01202N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01416N",
      "prerequisites",
      "01202N"
    ],
    "similarity": 0.94
  },
  {
    "id": 470,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03416N - Advanced Database Systems?",
    "answer": "**Course:** 03416N: Advanced Database Systems\n**Department:** 10\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Advanced Database Systems (03416N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03416N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 471,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03416N (Advanced Database Systems)?",
    "answer": "The prerequisite for **03416N - Advanced Database Systems** is **00202N**. You must achieve a passing grade (\u2265 60% / C) in 00202N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03416N",
      "prerequisites",
      "00202N"
    ],
    "similarity": 0.94
  },
  {
    "id": 472,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03418N - Advanced Topics in Data Science and AI?",
    "answer": "**Course:** 03418N: Advanced Topics in Data Science and AI\n**Department:** 10\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Advanced Topics in Data Science and AI (03418N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03418N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 473,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03418N (Advanced Topics in Data Science and AI)?",
    "answer": "The prerequisite for **03418N - Advanced Topics in Data Science and AI** is **00109N, 00305N**. You must achieve a passing grade (\u2265 60% / C) in 00109N, 00305N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03418N",
      "prerequisites",
      "00109N",
      "00305N"
    ],
    "similarity": 0.94
  },
  {
    "id": 474,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01413N - Internet of Things II?",
    "answer": "**Course:** 01413N: Internet of Things II\n**Department:** 9\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Internet of Things II (01413N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01413N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 475,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01413N (Internet of Things II)?",
    "answer": "The prerequisite for **01413N - Internet of Things II** is **01402N**. You must achieve a passing grade (\u2265 60% / C) in 01402N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01413N",
      "prerequisites",
      "01402N"
    ],
    "similarity": 0.94
  },
  {
    "id": 476,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01414N - Knowledge-Based AI?",
    "answer": "**Course:** 01414N: Knowledge-Based AI\n**Department:** 9\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Knowledge-Based AI (01414N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01414N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 477,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01414N (Knowledge-Based AI)?",
    "answer": "The prerequisite for **01414N - Knowledge-Based AI** is **00305N**. You must achieve a passing grade (\u2265 60% / C) in 00305N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01414N",
      "prerequisites",
      "00305N"
    ],
    "similarity": 0.94
  },
  {
    "id": 478,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 03411N - Multivariate Statistical Analysis?",
    "answer": "**Course:** 03411N: Multivariate Statistical Analysis\n**Department:** 10\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Multivariate Statistical Analysis (03411N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "03411N",
      "syllabus",
      "10"
    ],
    "similarity": 0.94
  },
  {
    "id": 479,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 03411N (Multivariate Statistical Analysis)?",
    "answer": "The prerequisite for **03411N - Multivariate Statistical Analysis** is **00201N**. You must achieve a passing grade (\u2265 60% / C) in 00201N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "03411N",
      "prerequisites",
      "00201N"
    ],
    "similarity": 0.94
  },
  {
    "id": 480,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02407N - Law and Cybersecurity?",
    "answer": "**Course:** 02407N: Law and Cybersecurity\n**Department:** 8\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Law and Cybersecurity (02407N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02407N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 481,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02407N (Law and Cybersecurity)?",
    "answer": "The prerequisite for **02407N - Law and Cybersecurity** is **02201N**. You must achieve a passing grade (\u2265 60% / C) in 02201N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02407N",
      "prerequisites",
      "02201N"
    ],
    "similarity": 0.94
  },
  {
    "id": 482,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02408N - Project II?",
    "answer": "**Course:** 02408N: Project II\n**Department:** 8\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Project II (02408N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02408N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 483,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02408N (Project II)?",
    "answer": "The prerequisite for **02408N - Project II** is **02404N**. You must achieve a passing grade (\u2265 60% / C) in 02404N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02408N",
      "prerequisites",
      "02404N"
    ],
    "similarity": 0.94
  },
  {
    "id": 484,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02405N - Cybersecurity Risk Management?",
    "answer": "**Course:** 02405N: Cybersecurity Risk Management\n**Department:** 8\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Cybersecurity Risk Management (02405N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02405N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 485,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02405N (Cybersecurity Risk Management)?",
    "answer": "The prerequisite for **02405N - Cybersecurity Risk Management** is **00206N, 00305N, 02306N**. You must achieve a passing grade (\u2265 60% / C) in 00206N, 00305N, 02306N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02405N",
      "prerequisites",
      "00206N",
      "00305N",
      "02306N"
    ],
    "similarity": 0.94
  },
  {
    "id": 486,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02403N - Human Security?",
    "answer": "**Course:** 02403N: Human Security\n**Department:** 8\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Human Security (02403N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02403N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 487,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02403N (Human Security)?",
    "answer": "The prerequisite for **02403N - Human Security** is **02201N**. You must achieve a passing grade (\u2265 60% / C) in 02201N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02403N",
      "prerequisites",
      "02201N"
    ],
    "similarity": 0.94
  },
  {
    "id": 488,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02410N - Proactive Computer Security?",
    "answer": "**Course:** 02410N: Proactive Computer Security\n**Department:** 8\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Proactive Computer Security (02410N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02410N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 489,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02410N (Proactive Computer Security)?",
    "answer": "The prerequisite for **02410N - Proactive Computer Security** is **00110N, 02201N**. You must achieve a passing grade (\u2265 60% / C) in 00110N, 02201N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02410N",
      "prerequisites",
      "00110N",
      "02201N"
    ],
    "similarity": 0.94
  },
  {
    "id": 490,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02416N - Mobile Computing?",
    "answer": "**Course:** 02416N: Mobile Computing\n**Department:** 8\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Mobile Computing (02416N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02416N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 491,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02416N (Mobile Computing)?",
    "answer": "**02416N - Mobile Computing** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02416N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 492,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02401N - Social Network Computing?",
    "answer": "**Course:** 02401N: Social Network Computing\n**Department:** 8\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Social Network Computing (02401N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02401N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 493,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02401N (Social Network Computing)?",
    "answer": "The prerequisite for **02401N - Social Network Computing** is **00207N, 02203N**. You must achieve a passing grade (\u2265 60% / C) in 00207N, 02203N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02401N",
      "prerequisites",
      "00207N",
      "02203N"
    ],
    "similarity": 0.94
  },
  {
    "id": 494,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02406N - Digital Forensics?",
    "answer": "**Course:** 02406N: Digital Forensics\n**Department:** 8\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Digital Forensics (02406N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02406N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 495,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02406N (Digital Forensics)?",
    "answer": "The prerequisite for **02406N - Digital Forensics** is **00207N, 00307N**. You must achieve a passing grade (\u2265 60% / C) in 00207N, 00307N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02406N",
      "prerequisites",
      "00207N",
      "00307N"
    ],
    "similarity": 0.94
  },
  {
    "id": 496,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02412N - Blockchain Security?",
    "answer": "**Course:** 02412N: Blockchain Security\n**Department:** 8\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Blockchain Security (02412N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02412N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 497,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02412N (Blockchain Security)?",
    "answer": "The prerequisite for **02412N - Blockchain Security** is **00202N, 00207N**. You must achieve a passing grade (\u2265 60% / C) in 00202N, 00207N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02412N",
      "prerequisites",
      "00202N",
      "00207N"
    ],
    "similarity": 0.94
  },
  {
    "id": 498,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02413N - Cloud Computing Security?",
    "answer": "**Course:** 02413N: Cloud Computing Security\n**Department:** 8\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Cloud Computing Security (02413N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02413N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 499,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02413N (Cloud Computing Security)?",
    "answer": "The prerequisite for **02413N - Cloud Computing Security** is **00306N, 02203N**. You must achieve a passing grade (\u2265 60% / C) in 00306N, 02203N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02413N",
      "prerequisites",
      "00306N",
      "02203N"
    ],
    "similarity": 0.94
  },
  {
    "id": 500,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02404N - Project I?",
    "answer": "**Course:** 02404N: Project I\n**Department:** 8\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Project I (02404N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02404N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 501,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02404N (Project I)?",
    "answer": "**02404N - Project I** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02404N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 502,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02415N - Internet of Things?",
    "answer": "**Course:** 02415N: Internet of Things\n**Department:** 8\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Internet of Things (02415N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02415N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 503,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02415N (Internet of Things)?",
    "answer": "**02415N - Internet of Things** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02415N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 504,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02402N - Security of Distributed Systems?",
    "answer": "**Course:** 02402N: Security of Distributed Systems\n**Department:** 8\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Security of Distributed Systems (02402N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02402N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 505,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02402N (Security of Distributed Systems)?",
    "answer": "The prerequisite for **02402N - Security of Distributed Systems** is **00207N, 02203N, 00307N**. You must achieve a passing grade (\u2265 60% / C) in 00207N, 02203N, 00307N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02402N",
      "prerequisites",
      "00207N",
      "02203N",
      "00307N"
    ],
    "similarity": 0.94
  },
  {
    "id": 506,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02411N - Software Security Engineering?",
    "answer": "**Course:** 02411N: Software Security Engineering\n**Department:** 8\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Software Security Engineering (02411N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02411N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 507,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02411N (Software Security Engineering)?",
    "answer": "The prerequisite for **02411N - Software Security Engineering** is **00301N, 02303N**. You must achieve a passing grade (\u2265 60% / C) in 00301N, 02303N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02411N",
      "prerequisites",
      "00301N",
      "02303N"
    ],
    "similarity": 0.94
  },
  {
    "id": 508,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 02414N - Social Networks Analytics?",
    "answer": "**Course:** 02414N: Social Networks Analytics\n**Department:** 8\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Social Networks Analytics (02414N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "02414N",
      "syllabus",
      "8"
    ],
    "similarity": 0.94
  },
  {
    "id": 509,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 02414N (Social Networks Analytics)?",
    "answer": "The prerequisite for **02414N - Social Networks Analytics** is **00101N, 00201N, 02401N**. You must achieve a passing grade (\u2265 60% / C) in 00101N, 00201N, 02401N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "02414N",
      "prerequisites",
      "00101N",
      "00201N",
      "02401N"
    ],
    "similarity": 0.94
  },
  {
    "id": 510,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170409N - Project I?",
    "answer": "**Course:** 4170409N: Project I\n**Department:** 11\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Project I (4170409N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170409N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 511,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170409N (Project I)?",
    "answer": "**4170409N - Project I** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170409N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 512,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170403N - Web Programming?",
    "answer": "**Course:** 4170403N: Web Programming\n**Department:** 11\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Web Programming (4170403N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170403N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 513,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170403N (Web Programming)?",
    "answer": "The prerequisite for **4170403N - Web Programming** is **4170203N**. You must achieve a passing grade (\u2265 60% / C) in 4170203N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170403N",
      "prerequisites",
      "4170203N"
    ],
    "similarity": 0.94
  },
  {
    "id": 514,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170405N - Advanced Methods for Multimedia?",
    "answer": "**Course:** 4170405N: Advanced Methods for Multimedia\n**Department:** 11\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Advanced Methods for Multimedia (4170405N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170405N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 515,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170405N (Advanced Methods for Multimedia)?",
    "answer": "The prerequisite for **4170405N - Advanced Methods for Multimedia** is **4170208N**. You must achieve a passing grade (\u2265 60% / C) in 4170208N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170405N",
      "prerequisites",
      "4170208N"
    ],
    "similarity": 0.94
  },
  {
    "id": 516,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170410N - Project II?",
    "answer": "**Course:** 4170410N: Project II\n**Department:** 11\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Project II (4170410N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170410N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 517,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170410N (Project II)?",
    "answer": "The prerequisite for **4170410N - Project II** is **4170409N**. You must achieve a passing grade (\u2265 60% / C) in 4170409N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170410N",
      "prerequisites",
      "4170409N"
    ],
    "similarity": 0.94
  },
  {
    "id": 518,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170414N - Cyber Policy- Law and Cyber Crime Investigation?",
    "answer": "**Course:** 4170414N: Cyber Policy- Law and Cyber Crime Investigation\n**Department:** 11\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Cyber Policy- Law and Cyber Crime Investigation (4170414N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170414N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 519,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170414N (Cyber Policy- Law and Cyber Crime Investigation)?",
    "answer": "The prerequisite for **4170414N - Cyber Policy- Law and Cyber Crime Investigation** is **4170308N**. You must achieve a passing grade (\u2265 60% / C) in 4170308N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170414N",
      "prerequisites",
      "4170308N"
    ],
    "similarity": 0.94
  },
  {
    "id": 520,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170407N - Cloud Software Development?",
    "answer": "**Course:** 4170407N: Cloud Software Development\n**Department:** 11\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Cloud Software Development (4170407N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170407N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 521,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170407N (Cloud Software Development)?",
    "answer": "The prerequisite for **4170407N - Cloud Software Development** is **4170303N**. You must achieve a passing grade (\u2265 60% / C) in 4170303N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170407N",
      "prerequisites",
      "4170303N"
    ],
    "similarity": 0.94
  },
  {
    "id": 522,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170402N - Game Design & Modeling?",
    "answer": "**Course:** 4170402N: Game Design & Modeling\n**Department:** 11\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Game Design & Modeling (4170402N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170402N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 523,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170402N (Game Design & Modeling)?",
    "answer": "The prerequisite for **4170402N - Game Design & Modeling** is **4170306N**. You must achieve a passing grade (\u2265 60% / C) in 4170306N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170402N",
      "prerequisites",
      "4170306N"
    ],
    "similarity": 0.94
  },
  {
    "id": 524,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170401N - Computer Graphics?",
    "answer": "**Course:** 4170401N: Computer Graphics\n**Department:** 11\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Computer Graphics (4170401N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170401N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 525,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170401N (Computer Graphics)?",
    "answer": "The prerequisite for **4170401N - Computer Graphics** is **4170208N**. You must achieve a passing grade (\u2265 60% / C) in 4170208N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170401N",
      "prerequisites",
      "4170208N"
    ],
    "similarity": 0.94
  },
  {
    "id": 526,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170404N - Mobile Application Development?",
    "answer": "**Course:** 4170404N: Mobile Application Development\n**Department:** 11\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Mobile Application Development (4170404N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170404N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 527,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170404N (Mobile Application Development)?",
    "answer": "The prerequisite for **4170404N - Mobile Application Development** is **4170303N**. You must achieve a passing grade (\u2265 60% / C) in 4170303N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170404N",
      "prerequisites",
      "4170303N"
    ],
    "similarity": 0.94
  },
  {
    "id": 528,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170411N - E-Business Technologies?",
    "answer": "**Course:** 4170411N: E-Business Technologies\n**Department:** 11\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** E-Business Technologies (4170411N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170411N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 529,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170411N (E-Business Technologies)?",
    "answer": "The prerequisite for **4170411N - E-Business Technologies** is **4170206N**. You must achieve a passing grade (\u2265 60% / C) in 4170206N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170411N",
      "prerequisites",
      "4170206N"
    ],
    "similarity": 0.94
  },
  {
    "id": 530,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170412N - Large-Scale Database Systems?",
    "answer": "**Course:** 4170412N: Large-Scale Database Systems\n**Department:** 11\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Large-Scale Database Systems (4170412N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170412N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 531,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170412N (Large-Scale Database Systems)?",
    "answer": "The prerequisite for **4170412N - Large-Scale Database Systems** is **4170305N**. You must achieve a passing grade (\u2265 60% / C) in 4170305N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170412N",
      "prerequisites",
      "4170305N"
    ],
    "similarity": 0.94
  },
  {
    "id": 532,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170413N - Performance Modeling?",
    "answer": "**Course:** 4170413N: Performance Modeling\n**Department:** 11\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Performance Modeling (4170413N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170413N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 533,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170413N (Performance Modeling)?",
    "answer": "The prerequisite for **4170413N - Performance Modeling** is **4170307N**. You must achieve a passing grade (\u2265 60% / C) in 4170307N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170413N",
      "prerequisites",
      "4170307N"
    ],
    "similarity": 0.94
  },
  {
    "id": 534,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170408N - Information Retrieval?",
    "answer": "**Course:** 4170408N: Information Retrieval\n**Department:** 11\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Information Retrieval (4170408N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170408N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 535,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170408N (Information Retrieval)?",
    "answer": "The prerequisite for **4170408N - Information Retrieval** is **4170206N**. You must achieve a passing grade (\u2265 60% / C) in 4170206N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170408N",
      "prerequisites",
      "4170206N"
    ],
    "similarity": 0.94
  },
  {
    "id": 536,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 4170406N - Management of Risk and Quality?",
    "answer": "**Course:** 4170406N: Management of Risk and Quality\n**Department:** 11\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 2 credits\n**Type:** Elective\n**Overview:** Management of Risk and Quality (4170406N) is an official Elective course (2 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "4170406N",
      "syllabus",
      "11"
    ],
    "similarity": 0.94
  },
  {
    "id": 537,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 4170406N (Management of Risk and Quality)?",
    "answer": "The prerequisite for **4170406N - Management of Risk and Quality** is **4170206N**. You must achieve a passing grade (\u2265 60% / C) in 4170206N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "4170406N",
      "prerequisites",
      "4170206N"
    ],
    "similarity": 0.94
  },
  {
    "id": 538,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01407N - Visual Recognition?",
    "answer": "**Course:** 01407N: Visual Recognition\n**Department:** 9\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Visual Recognition (01407N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01407N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 539,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01407N (Visual Recognition)?",
    "answer": "The prerequisite for **01407N - Visual Recognition** is **01305N**. You must achieve a passing grade (\u2265 60% / C) in 01305N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01407N",
      "prerequisites",
      "01305N"
    ],
    "similarity": 0.94
  },
  {
    "id": 540,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01408N - Project II?",
    "answer": "**Course:** 01408N: Project II\n**Department:** 9\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Project II (01408N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01408N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 541,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01408N (Project II)?",
    "answer": "The prerequisite for **01408N - Project II** is **01404N**. You must achieve a passing grade (\u2265 60% / C) in 01404N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01408N",
      "prerequisites",
      "01404N"
    ],
    "similarity": 0.94
  },
  {
    "id": 542,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01402N - Internet of Things I?",
    "answer": "**Course:** 01402N: Internet of Things I\n**Department:** 9\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Internet of Things I (01402N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01402N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 543,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01402N (Internet of Things I)?",
    "answer": "The prerequisite for **01402N - Internet of Things I** is **01304N**. You must achieve a passing grade (\u2265 60% / C) in 01304N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01402N",
      "prerequisites",
      "01304N"
    ],
    "similarity": 0.94
  },
  {
    "id": 544,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01406N - AI for Robotics?",
    "answer": "**Course:** 01406N: AI for Robotics\n**Department:** 9\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** AI for Robotics (01406N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01406N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 545,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01406N (AI for Robotics)?",
    "answer": "The prerequisite for **01406N - AI for Robotics** is **00109N, 01304N**. You must achieve a passing grade (\u2265 60% / C) in 00109N, 01304N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01406N",
      "prerequisites",
      "00109N",
      "01304N"
    ],
    "similarity": 0.94
  },
  {
    "id": 546,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01404N - Project I?",
    "answer": "**Course:** 01404N: Project I\n**Department:** 9\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Core\n**Overview:** Project I (01404N) is an official Core course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01404N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 547,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01404N (Project I)?",
    "answer": "**01404N - Project I** has **no prerequisites**. It is an introductory/foundation course open for registration.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01404N",
      "prerequisites",
      "none"
    ],
    "similarity": 0.94
  },
  {
    "id": 548,
    "category": "Course Syllabus",
    "prompt": "What is the syllabus and overview for 01411N - Embedded Machine Learning?",
    "answer": "**Course:** 01411N: Embedded Machine Learning\n**Department:** 9\n**Study Year:** Year 4 (Level 4)\n**Credit Hours:** 3 credits\n**Type:** Elective\n**Overview:** Embedded Machine Learning (01411N) is an official Elective course (3 credit hours) offered in Year 4 for the Faculty of Computer and Data Sciences curriculum at Alexandria National University.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.3,
    "keywords": [
      "01411N",
      "syllabus",
      "9"
    ],
    "similarity": 0.94
  },
  {
    "id": 549,
    "category": "Course Prerequisites",
    "prompt": "What are the prerequisites for 01411N (Embedded Machine Learning)?",
    "answer": "The prerequisite for **01411N - Embedded Machine Learning** is **00305N, 01304N**. You must achieve a passing grade (\u2265 60% / C) in 00305N, 01304N prior to registering.",
    "mbti": "General",
    "learning_style": "Visual",
    "temperature": 0.2,
    "keywords": [
      "01411N",
      "prerequisites",
      "00305N",
      "01304N"
    ],
    "similarity": 0.94
  },
  {
    "id": 550,
    "category": "AI Synthesized",
    "prompt": "i wanna build a table for students with columns for age , nameee and expected grad year , so how i can do it in sql",
    "answer": "\ud83d\udee0\ufe0f [Hands-on Practice] Here is the practical application and concrete workflow:\n\n**Comprehensive Analysis of: \"i wanna build a table for students with columns for age , nameee and expected grad year , so how i can do it in sql\"**\n\n**1. Core Concept & Theoretical Definition:**\nIn university academic curriculum, this concept represents an essential building block. It connects foundational theoretical models with practical problem-solving methodologies in your department.\n\n**2. Key Structural Principles:**\n\u2022 **Systematic Decomposition:** Break complex problems into atomic, testable modules.\n\u2022 **Invariant Verification:** Ensure all boundary conditions and edge cases are validated.\n\u2022 **Resource Optimization:** Maintain balance between compute latency, memory footprint, and development clarity.\n\n**3. Practical Guidance Tailored to Your Profile (ENFJ | Kinesthetic):**\nSince you learn best with a **Kinesthetic** perspective, review the syllabus documentation in the Course Catalog and experiment directly with small test implementations or visual concept maps.",
    "mbti": "ENFJ",
    "learning_style": "Kinesthetic",
    "temperature": 0.4,
    "keywords": [
      "ai_learned",
      "auto"
    ],
    "similarity": 0.94
  }
];

export const INITIAL_STUDENTS: Student[] = [
  {
    "student_id": "FCDS20260001",
    "student_name": "Adam Ibrahim Shehata El-Naggar",
    "email": "adam.fcds20260001@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.05,
    "academic_standing": "Good Standing",
    "mbti": "ENFJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.05.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260002",
    "student_name": "Tarek Medhat Farouk El-Beheiry",
    "email": "tarek.fcds20260002@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.56,
    "academic_standing": "Good Standing",
    "mbti": "ISTP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.56.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260003",
    "student_name": "Nour Hossam Kamal El-Masry",
    "email": "nour.fcds20260003@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.71,
    "academic_standing": "Dean's List",
    "mbti": "INTJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.71.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260004",
    "student_name": "Shahd Sherif Shawky El-Gazzar",
    "email": "shahd.fcds20260004@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.21,
    "academic_standing": "Good Standing",
    "mbti": "ISFP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.21.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260005",
    "student_name": "Hussein Ahmed Abdallah El-Sayed",
    "email": "hussein.fcds20260005@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.56,
    "academic_standing": "Good Standing",
    "mbti": "ISTJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.56.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260006",
    "student_name": "Menna Hassan Kamal El-Gazzar",
    "email": "menna.fcds20260006@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.64,
    "academic_standing": "Dean's List",
    "mbti": "ISFJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.64.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260007",
    "student_name": "Nour Tarek Tawfik Hassan",
    "email": "nour.fcds20260007@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.87,
    "academic_standing": "Good Standing",
    "mbti": "ISFP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.87.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260008",
    "student_name": "Yassin Medhat Mostafa Sakr",
    "email": "yassin.fcds20260008@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.64,
    "academic_standing": "Good Standing",
    "mbti": "ISTP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.64.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260009",
    "student_name": "Layla Ashraf Fouad Hegazy",
    "email": "layla.fcds20260009@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.39,
    "academic_standing": "Good Standing",
    "mbti": "INFP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.39.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260010",
    "student_name": "Seif Walid Shawky Ghanem",
    "email": "seif.fcds20260010@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.19,
    "academic_standing": "Good Standing",
    "mbti": "ISTP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.19.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260011",
    "student_name": "Yara Khaled Fathy El-Haddad",
    "email": "yara.fcds20260011@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.2,
    "academic_standing": "Good Standing",
    "mbti": "ESTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.2.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260012",
    "student_name": "Mariam Ahmed Osman El-Sawy",
    "email": "mariam.fcds20260012@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.94,
    "academic_standing": "Good Standing",
    "mbti": "ESFP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.94.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260013",
    "student_name": "Nada Hesham Sayed Osman",
    "email": "nada.fcds20260013@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.98,
    "academic_standing": "Good Standing",
    "mbti": "INFP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.98.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260014",
    "student_name": "Rawan Nabil Tawfik Sakr",
    "email": "rawan.fcds20260014@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.62,
    "academic_standing": "Good Standing",
    "mbti": "ESFJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.62.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260015",
    "student_name": "Ali Hesham Zakaria Khalil",
    "email": "ali.fcds20260015@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.88,
    "academic_standing": "Good Standing",
    "mbti": "ESTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.88.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260016",
    "student_name": "Fatma Mahmoud Abdel-Hamid El-Kady",
    "email": "fatma.fcds20260016@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.69,
    "academic_standing": "Dean's List",
    "mbti": "ISFJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.69.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260017",
    "student_name": "Farida Ibrahim Fathy Hegazy",
    "email": "farida.fcds20260017@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.96,
    "academic_standing": "Good Standing",
    "mbti": "ESFJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.96.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260018",
    "student_name": "Ahmed Gamal Tawfik El-Sayed",
    "email": "ahmed.fcds20260018@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.56,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.56.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260019",
    "student_name": "Youssef Hesham Shehata El-Deeb",
    "email": "youssef.fcds20260019@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.63,
    "academic_standing": "Good Standing",
    "mbti": "INFJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.63.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260020",
    "student_name": "Adam Sherif Farouk El-Sayed",
    "email": "adam.fcds20260020@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.14,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.14.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260021",
    "student_name": "Amr Ali Abdallah El-Sawy",
    "email": "amr.fcds20260021@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.54,
    "academic_standing": "Good Standing",
    "mbti": "ENFJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.54.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260022",
    "student_name": "Sarah Ayman Zakaria El-Wakeel",
    "email": "sarah.fcds20260022@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.07,
    "academic_standing": "Good Standing",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.07.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260023",
    "student_name": "Mahmoud Medhat Anwar Khalil",
    "email": "mahmoud.fcds20260023@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.45,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.45.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260024",
    "student_name": "Hassan Ashraf Ramadan El-Sawy",
    "email": "hassan.fcds20260024@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.58,
    "academic_standing": "Good Standing",
    "mbti": "ISFJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.58.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260025",
    "student_name": "Sarah Ibrahim Farouk El-Sawy",
    "email": "sarah.fcds20260025@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.41,
    "academic_standing": "Good Standing",
    "mbti": "ESFJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.41.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260026",
    "student_name": "Mohamed Ibrahim Mansour Ibrahim",
    "email": "mohamed.fcds20260026@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.73,
    "academic_standing": "Good Standing",
    "mbti": "ENFP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.73.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260027",
    "student_name": "Layla Gamal Abdel-Hamid Sakr",
    "email": "layla.fcds20260027@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.84,
    "academic_standing": "Good Standing",
    "mbti": "ISFJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.84.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260028",
    "student_name": "Hassan Mohamed Osman El-Kady",
    "email": "hassan.fcds20260028@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.34,
    "academic_standing": "Good Standing",
    "mbti": "ENFJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.34.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260029",
    "student_name": "Reem Mahmoud Tawfik El-Beheiry",
    "email": "reem.fcds20260029@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.23,
    "academic_standing": "Good Standing",
    "mbti": "ESTJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.23.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260030",
    "student_name": "Ali Medhat Abdallah El-Sayed",
    "email": "ali.fcds20260030@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.77,
    "academic_standing": "Dean's List",
    "mbti": "ISTJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.77.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260031",
    "student_name": "Marwan Alaa Fouad El-Masry",
    "email": "marwan.fcds20260031@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.69,
    "academic_standing": "Good Standing",
    "mbti": "ESTP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.69.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260032",
    "student_name": "Layla Ibrahim Mostafa Radwan",
    "email": "layla.fcds20260032@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.32,
    "academic_standing": "Good Standing",
    "mbti": "INFP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.32.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260033",
    "student_name": "Khaled Hassan Helmy Ghanem",
    "email": "khaled.fcds20260033@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.67,
    "academic_standing": "Good Standing",
    "mbti": "ESTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.67.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260034",
    "student_name": "Reem Khaled Shehata El-Wakeel",
    "email": "reem.fcds20260034@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.19,
    "academic_standing": "Good Standing",
    "mbti": "ESFP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.19.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260035",
    "student_name": "Abdel-Rahman Tarek Shawky El-Sayed",
    "email": "abdel-rahman.fcds20260035@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.7,
    "academic_standing": "Good Standing",
    "mbti": "ESFJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.7.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260036",
    "student_name": "Malak Sameh Farouk El-Deeb",
    "email": "malak.fcds20260036@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.91,
    "academic_standing": "Good Standing",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.91.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260037",
    "student_name": "Marwan Ashraf Osman El-Kady",
    "email": "marwan.fcds20260037@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.56,
    "academic_standing": "Good Standing",
    "mbti": "ESTJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.56.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260038",
    "student_name": "Aya Essam Kamal El-Shenawy",
    "email": "aya.fcds20260038@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.75,
    "academic_standing": "Dean's List",
    "mbti": "ISTP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.75.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260039",
    "student_name": "Malak Magdy Abdel-Hamid El-Sayed",
    "email": "malak.fcds20260039@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.83,
    "academic_standing": "Dean's List",
    "mbti": "ISFP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.83.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260040",
    "student_name": "Nour Ashraf Farouk Mansour",
    "email": "nour.fcds20260040@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.26,
    "academic_standing": "Good Standing",
    "mbti": "ISTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.26.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260041",
    "student_name": "Fatma Medhat Fouad Sharaf",
    "email": "fatma.fcds20260041@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.21,
    "academic_standing": "Good Standing",
    "mbti": "ISTJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.21.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260042",
    "student_name": "Mahmoud Ashraf Zakaria El-Sawy",
    "email": "mahmoud.fcds20260042@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.78,
    "academic_standing": "Good Standing",
    "mbti": "ENFP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.78.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260043",
    "student_name": "Rawan Essam Shehata Refaat",
    "email": "rawan.fcds20260043@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.21,
    "academic_standing": "Good Standing",
    "mbti": "ENFP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.21.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260044",
    "student_name": "Mohamed Saeed Fathy Mansour",
    "email": "mohamed.fcds20260044@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.25,
    "academic_standing": "Good Standing",
    "mbti": "ISFP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.25.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260045",
    "student_name": "Ahmed Saeed Helmy Hassan",
    "email": "ahmed.fcds20260045@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.78,
    "academic_standing": "Dean's List",
    "mbti": "ISFJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.78.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260046",
    "student_name": "Yara Khaled Radwan Sharaf",
    "email": "yara.fcds20260046@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.29,
    "academic_standing": "Good Standing",
    "mbti": "INFP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.29.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260047",
    "student_name": "Dalia Khaled Ramadan El-Deeb",
    "email": "dalia.fcds20260047@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.45,
    "academic_standing": "Good Standing",
    "mbti": "ESTP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.45.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260048",
    "student_name": "Mirna Ashraf Tawfik El-Haddad",
    "email": "mirna.fcds20260048@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.36,
    "academic_standing": "Good Standing",
    "mbti": "ENTJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.36.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260049",
    "student_name": "Jana Mohamed Abdel-Aziz El-Haddad",
    "email": "jana.fcds20260049@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.17,
    "academic_standing": "Good Standing",
    "mbti": "ESTJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.17.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260050",
    "student_name": "Mostafa Nabil Shehata Hassan",
    "email": "mostafa.fcds20260050@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.32,
    "academic_standing": "Good Standing",
    "mbti": "INTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.32.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260051",
    "student_name": "Islam Medhat Abdel-Hamid El-Sayed",
    "email": "islam.fcds20260051@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.66,
    "academic_standing": "Good Standing",
    "mbti": "INTP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.66.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260052",
    "student_name": "Farida Hesham Osman El-Sawy",
    "email": "farida.fcds20260052@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.99,
    "academic_standing": "Good Standing",
    "mbti": "ISTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.99.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260053",
    "student_name": "Khaled Hassan Kamal El-Shalaby",
    "email": "khaled.fcds20260053@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.0,
    "academic_standing": "Good Standing",
    "mbti": "ESTJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.0.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260054",
    "student_name": "Shahd Walid Zakaria El-Deeb",
    "email": "shahd.fcds20260054@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.12,
    "academic_standing": "Good Standing",
    "mbti": "ESFP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.12.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260055",
    "student_name": "Basmala Walid Mansour El-Beheiry",
    "email": "basmala.fcds20260055@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.2,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.2.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260056",
    "student_name": "Yasmin Emad Abdel-Hamid Ibrahim",
    "email": "yasmin.fcds20260056@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.86,
    "academic_standing": "Good Standing",
    "mbti": "ESFP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.86.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260057",
    "student_name": "Aya Essam Abdel-Aziz El-Shalaby",
    "email": "aya.fcds20260057@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.54,
    "academic_standing": "Good Standing",
    "mbti": "ISTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.54.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260058",
    "student_name": "Belal Nabil Mansour El-Gazzar",
    "email": "belal.fcds20260058@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.15,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.15.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260059",
    "student_name": "Nada Emad Ramadan Barakat",
    "email": "nada.fcds20260059@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.18,
    "academic_standing": "Good Standing",
    "mbti": "ESTJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.18.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260060",
    "student_name": "Mariam Ayman Helmy Barakat",
    "email": "mariam.fcds20260060@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.83,
    "academic_standing": "Good Standing",
    "mbti": "ESTJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.83.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260061",
    "student_name": "Ali Mohamed Shehata El-Haddad",
    "email": "ali.fcds20260061@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.79,
    "academic_standing": "Good Standing",
    "mbti": "ESFJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.79.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260062",
    "student_name": "Sarah Ayman Kamal Hegazy",
    "email": "sarah.fcds20260062@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.1,
    "academic_standing": "Good Standing",
    "mbti": "ESTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.1.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260063",
    "student_name": "Yara Ashraf Radwan El-Deeb",
    "email": "yara.fcds20260063@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.92,
    "academic_standing": "Good Standing",
    "mbti": "ENFJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.92.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260064",
    "student_name": "Fatma Essam Abdel-Aziz El-Masry",
    "email": "fatma.fcds20260064@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.82,
    "academic_standing": "Good Standing",
    "mbti": "ISFP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.82.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260065",
    "student_name": "Mahmoud Mahmoud Radwan Osman",
    "email": "mahmoud.fcds20260065@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.71,
    "academic_standing": "Good Standing",
    "mbti": "ESTJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.71.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260066",
    "student_name": "Basmala Tarek Ramadan Sakr",
    "email": "basmala.fcds20260066@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.17,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.17.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260067",
    "student_name": "Amr Ashraf Fouad Refaat",
    "email": "amr.fcds20260067@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.7,
    "academic_standing": "Good Standing",
    "mbti": "ISFP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.7.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260068",
    "student_name": "Fady Emad Kamal El-Sayed",
    "email": "fady.fcds20260068@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.86,
    "academic_standing": "Good Standing",
    "mbti": "ESTP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.86.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260069",
    "student_name": "Layla Hossam Radwan El-Shalaby",
    "email": "layla.fcds20260069@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.98,
    "academic_standing": "Good Standing",
    "mbti": "INTJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.98.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260070",
    "student_name": "Tamer Mahmoud Shehata El-Beheiry",
    "email": "tamer.fcds20260070@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.23,
    "academic_standing": "Good Standing",
    "mbti": "ESTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.23.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260071",
    "student_name": "Fatma Ali Farouk El-Sayed",
    "email": "fatma.fcds20260071@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.89,
    "academic_standing": "Good Standing",
    "mbti": "ESFJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.89.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260072",
    "student_name": "Kholoud Saeed Shawky Ghanem",
    "email": "kholoud.fcds20260072@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.86,
    "academic_standing": "Good Standing",
    "mbti": "ENFJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.86.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260073",
    "student_name": "Nada Mohamed Sayed Khalil",
    "email": "nada.fcds20260073@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.86,
    "academic_standing": "Good Standing",
    "mbti": "ISFP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.86.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260074",
    "student_name": "Sherif Emad Kamal El-Gazzar",
    "email": "sherif.fcds20260074@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.68,
    "academic_standing": "Dean's List",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.68.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260075",
    "student_name": "Kareem Essam Farouk El-Kady",
    "email": "kareem.fcds20260075@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.03,
    "academic_standing": "Good Standing",
    "mbti": "ESFP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.03.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260076",
    "student_name": "Nadine Ashraf Helmy Ghanem",
    "email": "nadine.fcds20260076@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.73,
    "academic_standing": "Good Standing",
    "mbti": "INFJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.73.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260077",
    "student_name": "Marwan Hesham Zakaria Radwan",
    "email": "marwan.fcds20260077@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.13,
    "academic_standing": "Good Standing",
    "mbti": "ESFP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.13.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260078",
    "student_name": "Aya Hossam Tawfik El-Gazzar",
    "email": "aya.fcds20260078@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.65,
    "academic_standing": "Dean's List",
    "mbti": "ESFP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.65.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260079",
    "student_name": "Youssef Medhat Shawky Ghanem",
    "email": "youssef.fcds20260079@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.01,
    "academic_standing": "Good Standing",
    "mbti": "ISTJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.01.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260080",
    "student_name": "Amr Hassan Anwar Sakr",
    "email": "amr.fcds20260080@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.65,
    "academic_standing": "Good Standing",
    "mbti": "INTJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.65.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260081",
    "student_name": "Seif Gamal Tawfik El-Deeb",
    "email": "seif.fcds20260081@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.27,
    "academic_standing": "Good Standing",
    "mbti": "ISTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.27.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260082",
    "student_name": "Menna Medhat Shawky El-Masry",
    "email": "menna.fcds20260082@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.22,
    "academic_standing": "Good Standing",
    "mbti": "INFJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.22.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260083",
    "student_name": "Menna Ayman Mansour Attia",
    "email": "menna.fcds20260083@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.11,
    "academic_standing": "Good Standing",
    "mbti": "ENFP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.11.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260084",
    "student_name": "Hussein Magdy Mostafa Ghanem",
    "email": "hussein.fcds20260084@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.79,
    "academic_standing": "Good Standing",
    "mbti": "ENTJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.79.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260085",
    "student_name": "Fady Mohamed Fathy El-Shenawy",
    "email": "fady.fcds20260085@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.27,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.27.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260086",
    "student_name": "Ziad Emad Anwar Ghanem",
    "email": "ziad.fcds20260086@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.58,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.58.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260087",
    "student_name": "Hamza Ibrahim Fouad Sakr",
    "email": "hamza.fcds20260087@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.73,
    "academic_standing": "Good Standing",
    "mbti": "ISFP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.73.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260088",
    "student_name": "Malak Mohamed Radwan El-Gazzar",
    "email": "malak.fcds20260088@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.84,
    "academic_standing": "Good Standing",
    "mbti": "ENTJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.84.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260089",
    "student_name": "Jana Hesham Soliman Hegazy",
    "email": "jana.fcds20260089@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.39,
    "academic_standing": "Good Standing",
    "mbti": "ESTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.39.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260090",
    "student_name": "Farida Hassan Farouk El-Shalaby",
    "email": "farida.fcds20260090@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.57,
    "academic_standing": "Good Standing",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.57.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260091",
    "student_name": "Fatma Ahmed Osman Sakr",
    "email": "fatma.fcds20260091@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.67,
    "academic_standing": "Good Standing",
    "mbti": "ISTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.67.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260092",
    "student_name": "Dalia Emad Sayed Hassan",
    "email": "dalia.fcds20260092@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.08,
    "academic_standing": "Good Standing",
    "mbti": "ESTJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.08.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260093",
    "student_name": "Yara Ashraf Sayed El-Gazzar",
    "email": "yara.fcds20260093@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.99,
    "academic_standing": "Dean's List",
    "mbti": "ENFJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.99.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260094",
    "student_name": "Amr Medhat Anwar Ibrahim",
    "email": "amr.fcds20260094@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.11,
    "academic_standing": "Good Standing",
    "mbti": "INFJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.11.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260095",
    "student_name": "Rania Walid Farouk El-Sawy",
    "email": "rania.fcds20260095@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.22,
    "academic_standing": "Good Standing",
    "mbti": "ESTJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.22.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260096",
    "student_name": "Dalia Hossam Fathy El-Gazzar",
    "email": "dalia.fcds20260096@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.36,
    "academic_standing": "Good Standing",
    "mbti": "ENFJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.36.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260097",
    "student_name": "Fady Gamal Zakaria Hegazy",
    "email": "fady.fcds20260097@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.01,
    "academic_standing": "Good Standing",
    "mbti": "ENTJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.01.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260098",
    "student_name": "Nada Walid Fouad El-Beheiry",
    "email": "nada.fcds20260098@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.08,
    "academic_standing": "Good Standing",
    "mbti": "ESFP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.08.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260099",
    "student_name": "Tarek Ibrahim Shawky Khalil",
    "email": "tarek.fcds20260099@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.13,
    "academic_standing": "Good Standing",
    "mbti": "ESTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.13.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260100",
    "student_name": "Salma Medhat Farouk Attia",
    "email": "salma.fcds20260100@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.65,
    "academic_standing": "Dean's List",
    "mbti": "ISFP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.65.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260101",
    "student_name": "Ziad Saeed Sayed Barakat",
    "email": "ziad.fcds20260101@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.36,
    "academic_standing": "Good Standing",
    "mbti": "INTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.36.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260102",
    "student_name": "Ahmed Ayman Soliman Hassan",
    "email": "ahmed.fcds20260102@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.39,
    "academic_standing": "Good Standing",
    "mbti": "ISFP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.39.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260103",
    "student_name": "Nour Tarek Osman Refaat",
    "email": "nour.fcds20260103@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.76,
    "academic_standing": "Good Standing",
    "mbti": "INFP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.76.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260104",
    "student_name": "Omar Khaled Ramadan Barakat",
    "email": "omar.fcds20260104@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.48,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.48.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260105",
    "student_name": "Noha Essam Mansour Hassan",
    "email": "noha.fcds20260105@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.29,
    "academic_standing": "Good Standing",
    "mbti": "ESTP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.29.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260106",
    "student_name": "Engy Hassan Kamal Ghanem",
    "email": "engy.fcds20260106@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.47,
    "academic_standing": "Good Standing",
    "mbti": "ESTJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.47.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260107",
    "student_name": "Salma Sameh Osman El-Gazzar",
    "email": "salma.fcds20260107@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.81,
    "academic_standing": "Dean's List",
    "mbti": "ENTJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.81.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260108",
    "student_name": "Sherif Walid Fathy El-Kady",
    "email": "sherif.fcds20260108@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.56,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.56.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260109",
    "student_name": "Omar Alaa Kamal El-Sawy",
    "email": "omar.fcds20260109@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.94,
    "academic_standing": "Good Standing",
    "mbti": "INTJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.94.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260110",
    "student_name": "Tarek Ashraf Radwan El-Masry",
    "email": "tarek.fcds20260110@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.08,
    "academic_standing": "Good Standing",
    "mbti": "ENFJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.08.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260111",
    "student_name": "Yara Ashraf Abdel-Aziz Osman",
    "email": "yara.fcds20260111@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.14,
    "academic_standing": "Good Standing",
    "mbti": "ISFP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.14.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260112",
    "student_name": "Omar Adel Anwar El-Sawy",
    "email": "omar.fcds20260112@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.07,
    "academic_standing": "Good Standing",
    "mbti": "ISTJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.07.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260113",
    "student_name": "Menna Mahmoud Fouad Osman",
    "email": "menna.fcds20260113@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.41,
    "academic_standing": "Good Standing",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.41.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260114",
    "student_name": "Yehia Ali Osman El-Kady",
    "email": "yehia.fcds20260114@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 4.0,
    "academic_standing": "Dean's List",
    "mbti": "ESTP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 4.0.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260115",
    "student_name": "Maya Ayman Kamal El-Wakeel",
    "email": "maya.fcds20260115@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.15,
    "academic_standing": "Good Standing",
    "mbti": "INTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.15.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260116",
    "student_name": "Hassan Mahmoud Abdel-Hamid Hassan",
    "email": "hassan.fcds20260116@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.65,
    "academic_standing": "Good Standing",
    "mbti": "ISFJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.65.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260117",
    "student_name": "Hagar Essam Helmy El-Shalaby",
    "email": "hagar.fcds20260117@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.45,
    "academic_standing": "Good Standing",
    "mbti": "ISTP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.45.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260118",
    "student_name": "Hana Sameh Mansour El-Shalaby",
    "email": "hana.fcds20260118@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.65,
    "academic_standing": "Dean's List",
    "mbti": "ENFJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.65.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260119",
    "student_name": "Hagar Emad Osman El-Shenawy",
    "email": "hagar.fcds20260119@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.74,
    "academic_standing": "Dean's List",
    "mbti": "ESTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.74.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260120",
    "student_name": "Reem Nabil Shawky Hassan",
    "email": "reem.fcds20260120@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.96,
    "academic_standing": "Dean's List",
    "mbti": "ISFJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.96.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260121",
    "student_name": "Nour Adel Radwan Osman",
    "email": "nour.fcds20260121@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.15,
    "academic_standing": "Good Standing",
    "mbti": "ISFP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.15.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260122",
    "student_name": "Dalia Ashraf Mansour Hassan",
    "email": "dalia.fcds20260122@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.8,
    "academic_standing": "Good Standing",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.8.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260123",
    "student_name": "Kareem Essam Osman El-Naggar",
    "email": "kareem.fcds20260123@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.4,
    "academic_standing": "Good Standing",
    "mbti": "ENFP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.4.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260124",
    "student_name": "Hassan Walid Mostafa El-Shenawy",
    "email": "hassan.fcds20260124@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.13,
    "academic_standing": "Good Standing",
    "mbti": "ESTJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.13.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260125",
    "student_name": "Fady Emad Abdallah Radwan",
    "email": "fady.fcds20260125@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 4.0,
    "academic_standing": "Dean's List",
    "mbti": "ESFJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 4.0.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260126",
    "student_name": "Islam Sameh Shawky El-Kady",
    "email": "islam.fcds20260126@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.07,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.07.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260127",
    "student_name": "Adam Alaa Tawfik El-Sayed",
    "email": "adam.fcds20260127@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.34,
    "academic_standing": "Good Standing",
    "mbti": "INTJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.34.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260128",
    "student_name": "Farida Ashraf Fouad El-Shalaby",
    "email": "farida.fcds20260128@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.37,
    "academic_standing": "Good Standing",
    "mbti": "INFP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.37.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260129",
    "student_name": "Abdel-Rahman Walid Shawky Ibrahim",
    "email": "abdel-rahman.fcds20260129@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.77,
    "academic_standing": "Dean's List",
    "mbti": "INTP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.77.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260130",
    "student_name": "Mirna Saeed Zakaria Hegazy",
    "email": "mirna.fcds20260130@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.73,
    "academic_standing": "Good Standing",
    "mbti": "ISFP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.73.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260131",
    "student_name": "Yara Medhat Sayed El-Gazzar",
    "email": "yara.fcds20260131@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.65,
    "academic_standing": "Dean's List",
    "mbti": "INFJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.65.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260132",
    "student_name": "Yehia Sherif Shehata Radwan",
    "email": "yehia.fcds20260132@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.76,
    "academic_standing": "Good Standing",
    "mbti": "ESFJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.76.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260133",
    "student_name": "Youssef Emad Ramadan Ibrahim",
    "email": "youssef.fcds20260133@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.33,
    "academic_standing": "Good Standing",
    "mbti": "INFJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.33.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260134",
    "student_name": "Mahmoud Ahmed Shawky El-Haddad",
    "email": "mahmoud.fcds20260134@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.11,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.11.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260135",
    "student_name": "Malak Essam Abdel-Hamid El-Sawy",
    "email": "malak.fcds20260135@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.85,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.85.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260136",
    "student_name": "Ali Essam Shawky El-Shenawy",
    "email": "ali.fcds20260136@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.59,
    "academic_standing": "Good Standing",
    "mbti": "ISFP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.59.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260137",
    "student_name": "Mahmoud Ashraf Mostafa Refaat",
    "email": "mahmoud.fcds20260137@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.06,
    "academic_standing": "Good Standing",
    "mbti": "ESTJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.06.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260138",
    "student_name": "Farida Hossam Ramadan El-Shalaby",
    "email": "farida.fcds20260138@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.62,
    "academic_standing": "Good Standing",
    "mbti": "ENFP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.62.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260139",
    "student_name": "Bassem Hossam Shawky Mansour",
    "email": "bassem.fcds20260139@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.56,
    "academic_standing": "Good Standing",
    "mbti": "ENTJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.56.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260140",
    "student_name": "Kholoud Sameh Radwan El-Gazzar",
    "email": "kholoud.fcds20260140@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.81,
    "academic_standing": "Good Standing",
    "mbti": "ESFJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.81.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260141",
    "student_name": "Mariam Mahmoud Farouk Osman",
    "email": "mariam.fcds20260141@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.47,
    "academic_standing": "Good Standing",
    "mbti": "ENFP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.47.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260142",
    "student_name": "Marwan Walid Sayed Ibrahim",
    "email": "marwan.fcds20260142@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.83,
    "academic_standing": "Good Standing",
    "mbti": "INFJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.83.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260143",
    "student_name": "Hassan Ahmed Farouk Radwan",
    "email": "hassan.fcds20260143@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.41,
    "academic_standing": "Good Standing",
    "mbti": "ESTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.41.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260144",
    "student_name": "Menna Essam Anwar Sakr",
    "email": "menna.fcds20260144@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.14,
    "academic_standing": "Good Standing",
    "mbti": "INTP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.14.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260145",
    "student_name": "Salma Sherif Fathy El-Sayed",
    "email": "salma.fcds20260145@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.43,
    "academic_standing": "Good Standing",
    "mbti": "INTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.43.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260146",
    "student_name": "Sarah Magdy Mansour El-Gazzar",
    "email": "sarah.fcds20260146@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.12,
    "academic_standing": "Good Standing",
    "mbti": "ESTJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.12.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260147",
    "student_name": "Abdel-Rahman Sameh Kamal El-Kady",
    "email": "abdel-rahman.fcds20260147@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.37,
    "academic_standing": "Good Standing",
    "mbti": "ISFJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.37.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260148",
    "student_name": "Lobna Ali Shehata Mansour",
    "email": "lobna.fcds20260148@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.8,
    "academic_standing": "Good Standing",
    "mbti": "ISFJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.8.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260149",
    "student_name": "Lobna Gamal Shehata El-Wakeel",
    "email": "lobna.fcds20260149@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.35,
    "academic_standing": "Good Standing",
    "mbti": "INTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.35.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260150",
    "student_name": "Khaled Ali Soliman Ghanem",
    "email": "khaled.fcds20260150@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.12,
    "academic_standing": "Good Standing",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.12.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260151",
    "student_name": "Mahmoud Ayman Mansour El-Kady",
    "email": "mahmoud.fcds20260151@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.56,
    "academic_standing": "Good Standing",
    "mbti": "INFP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.56.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260152",
    "student_name": "Tarek Mohamed Anwar El-Sayed",
    "email": "tarek.fcds20260152@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.04,
    "academic_standing": "Good Standing",
    "mbti": "ESTJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.04.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260153",
    "student_name": "Kareem Mahmoud Zakaria El-Masry",
    "email": "kareem.fcds20260153@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.07,
    "academic_standing": "Good Standing",
    "mbti": "ESTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.07.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260154",
    "student_name": "Sarah Hesham Kamal Khalil",
    "email": "sarah.fcds20260154@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.7,
    "academic_standing": "Dean's List",
    "mbti": "ENTJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.7.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260155",
    "student_name": "Engy Ahmed Kamal El-Haddad",
    "email": "engy.fcds20260155@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.88,
    "academic_standing": "Good Standing",
    "mbti": "ISTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.88.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260156",
    "student_name": "Basmala Walid Shawky El-Sayed",
    "email": "basmala.fcds20260156@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.84,
    "academic_standing": "Good Standing",
    "mbti": "INFJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.84.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260157",
    "student_name": "Tamer Khaled Shawky Barakat",
    "email": "tamer.fcds20260157@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.51,
    "academic_standing": "Good Standing",
    "mbti": "ISFJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.51.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260158",
    "student_name": "Omar Ibrahim Radwan El-Masry",
    "email": "omar.fcds20260158@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.95,
    "academic_standing": "Good Standing",
    "mbti": "INTJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.95.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260159",
    "student_name": "Hana Ali Mostafa Sakr",
    "email": "hana.fcds20260159@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.58,
    "academic_standing": "Good Standing",
    "mbti": "ISFJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.58.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260160",
    "student_name": "Noha Adel Helmy Hassan",
    "email": "noha.fcds20260160@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.43,
    "academic_standing": "Good Standing",
    "mbti": "ESTJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.43.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260161",
    "student_name": "Engy Magdy Helmy Refaat",
    "email": "engy.fcds20260161@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.67,
    "academic_standing": "Good Standing",
    "mbti": "INFJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.67.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260162",
    "student_name": "Seif Walid Helmy El-Haddad",
    "email": "seif.fcds20260162@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 4.0,
    "academic_standing": "Dean's List",
    "mbti": "INTP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 4.0.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260163",
    "student_name": "Adam Ashraf Abdel-Aziz Osman",
    "email": "adam.fcds20260163@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.95,
    "academic_standing": "Good Standing",
    "mbti": "INFJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.95.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260164",
    "student_name": "Yasmin Hesham Mostafa El-Beheiry",
    "email": "yasmin.fcds20260164@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.47,
    "academic_standing": "Good Standing",
    "mbti": "ESTJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.47.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260165",
    "student_name": "Adam Magdy Shawky Attia",
    "email": "adam.fcds20260165@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.05,
    "academic_standing": "Good Standing",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.05.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260166",
    "student_name": "Sherif Magdy Sayed Khalil",
    "email": "sherif.fcds20260166@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.83,
    "academic_standing": "Good Standing",
    "mbti": "ISTJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.83.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260167",
    "student_name": "Mohamed Ahmed Sayed Hegazy",
    "email": "mohamed.fcds20260167@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.64,
    "academic_standing": "Dean's List",
    "mbti": "INTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.64.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260168",
    "student_name": "Rawan Khaled Mostafa El-Kady",
    "email": "rawan.fcds20260168@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.17,
    "academic_standing": "Good Standing",
    "mbti": "ISFP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.17.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260169",
    "student_name": "Hagar Alaa Fouad El-Masry",
    "email": "hagar.fcds20260169@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.12,
    "academic_standing": "Good Standing",
    "mbti": "ENFJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.12.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260170",
    "student_name": "Mahmoud Sherif Zakaria Mansour",
    "email": "mahmoud.fcds20260170@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.19,
    "academic_standing": "Good Standing",
    "mbti": "INFP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.19.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260171",
    "student_name": "Dalia Essam Osman Hassan",
    "email": "dalia.fcds20260171@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.79,
    "academic_standing": "Good Standing",
    "mbti": "INTP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.79.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260172",
    "student_name": "Kareem Hossam Shehata El-Shalaby",
    "email": "kareem.fcds20260172@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.76,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.76.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260173",
    "student_name": "Tarek Ahmed Mostafa Sakr",
    "email": "tarek.fcds20260173@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.22,
    "academic_standing": "Good Standing",
    "mbti": "ESTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.22.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260174",
    "student_name": "Engy Essam Abdel-Aziz El-Naggar",
    "email": "engy.fcds20260174@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.69,
    "academic_standing": "Good Standing",
    "mbti": "INTJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.69.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260175",
    "student_name": "Nadine Hossam Kamal Ghanem",
    "email": "nadine.fcds20260175@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.61,
    "academic_standing": "Good Standing",
    "mbti": "ESFP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.61.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260176",
    "student_name": "Lobna Hossam Sayed El-Masry",
    "email": "lobna.fcds20260176@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.86,
    "academic_standing": "Good Standing",
    "mbti": "ESTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.86.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260177",
    "student_name": "Ibrahim Hassan Kamal Refaat",
    "email": "ibrahim.fcds20260177@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.92,
    "academic_standing": "Dean's List",
    "mbti": "ISTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.92.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260178",
    "student_name": "Tamer Hesham Soliman Radwan",
    "email": "tamer.fcds20260178@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.65,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.65.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260179",
    "student_name": "Ramy Ayman Soliman Radwan",
    "email": "ramy.fcds20260179@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.71,
    "academic_standing": "Good Standing",
    "mbti": "ENFJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.71.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260180",
    "student_name": "Rawan Medhat Osman El-Kady",
    "email": "rawan.fcds20260180@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.2,
    "academic_standing": "Good Standing",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.2.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260181",
    "student_name": "Belal Hassan Soliman El-Haddad",
    "email": "belal.fcds20260181@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.31,
    "academic_standing": "Good Standing",
    "mbti": "ISTP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.31.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260182",
    "student_name": "Basmala Hesham Fathy Radwan",
    "email": "basmala.fcds20260182@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.75,
    "academic_standing": "Good Standing",
    "mbti": "ENFJ",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.75.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260183",
    "student_name": "Mostafa Emad Kamal El-Masry",
    "email": "mostafa.fcds20260183@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.45,
    "academic_standing": "Good Standing",
    "mbti": "INFJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.45.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260184",
    "student_name": "Tarek Ibrahim Ramadan El-Gazzar",
    "email": "tarek.fcds20260184@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.0,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.0.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260185",
    "student_name": "Sherif Gamal Fouad Barakat",
    "email": "sherif.fcds20260185@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.67,
    "academic_standing": "Dean's List",
    "mbti": "INFJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.67.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260186",
    "student_name": "Belal Emad Tawfik El-Kady",
    "email": "belal.fcds20260186@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.49,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.49.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260187",
    "student_name": "Yara Hesham Farouk El-Shalaby",
    "email": "yara.fcds20260187@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.87,
    "academic_standing": "Good Standing",
    "mbti": "INFJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.87.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260188",
    "student_name": "Farida Medhat Abdel-Hamid Mansour",
    "email": "farida.fcds20260188@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.11,
    "academic_standing": "Good Standing",
    "mbti": "INTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.11.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260189",
    "student_name": "Kareem Ibrahim Ramadan El-Kady",
    "email": "kareem.fcds20260189@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 4.0,
    "academic_standing": "Dean's List",
    "mbti": "ISFJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 4.0.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260190",
    "student_name": "Yara Tarek Farouk Osman",
    "email": "yara.fcds20260190@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.96,
    "academic_standing": "Good Standing",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.96.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260191",
    "student_name": "Mirna Medhat Osman El-Shalaby",
    "email": "mirna.fcds20260191@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.57,
    "academic_standing": "Good Standing",
    "mbti": "ISFJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.57.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260192",
    "student_name": "Hagar Nabil Zakaria El-Deeb",
    "email": "hagar.fcds20260192@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.71,
    "academic_standing": "Good Standing",
    "mbti": "ISTP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.71.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260193",
    "student_name": "Noha Hesham Mostafa El-Sayed",
    "email": "noha.fcds20260193@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.1,
    "academic_standing": "Good Standing",
    "mbti": "ISFP",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.1.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260194",
    "student_name": "Youssef Nabil Fouad El-Shenawy",
    "email": "youssef.fcds20260194@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.03,
    "academic_standing": "Good Standing",
    "mbti": "ESFJ",
    "learning_style": "Visual",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.03.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260195",
    "student_name": "Fady Ali Abdallah Refaat",
    "email": "fady.fcds20260195@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.03,
    "academic_standing": "Good Standing",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.03.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260196",
    "student_name": "Sarah Hassan Osman El-Gazzar",
    "email": "sarah.fcds20260196@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.61,
    "academic_standing": "Good Standing",
    "mbti": "ENTP",
    "learning_style": "Auditory",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.61.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260197",
    "student_name": "Ramy Alaa Abdel-Aziz Sharaf",
    "email": "ramy.fcds20260197@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 2.4,
    "academic_standing": "Good Standing",
    "mbti": "ISFJ",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 2.4.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260198",
    "student_name": "Bassem Magdy Zakaria El-Wakeel",
    "email": "bassem.fcds20260198@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.92,
    "academic_standing": "Dean's List",
    "mbti": "ESTP",
    "learning_style": "Reading/Writing",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.92.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260199",
    "student_name": "Dalia Tarek Radwan Khalil",
    "email": "dalia.fcds20260199@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.49,
    "academic_standing": "Good Standing",
    "mbti": "ISTJ",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.49.",
    "dean": "Prof. Dr. Tamer Helmy"
  },
  {
    "student_id": "FCDS20260200",
    "student_name": "Youssef Medhat Helmy Osman",
    "email": "youssef.fcds20260200@anu.edu.eg",
    "department_id": "10",
    "department_name": "Data Science & Artificial Intelligence",
    "year_level": 1,
    "gpa": 3.7,
    "academic_standing": "Dean's List",
    "mbti": "INTP",
    "learning_style": "Kinesthetic",
    "advising_notes": "Cohort 2026 Year 1 student enrolled in Faculty of Computer & Data Sciences (10). Cumulative GPA: 3.7.",
    "dean": "Prof. Dr. Tamer Helmy"
  }
];
