export const siteConfig = {
  name: "Shaheen",
  title: "Software Engineer & AI/ML Researcher",
  description: "Portfolio website of Shaheen Bhattacharya",
  accentColor: "#1d4ed8",
  social: {
    email: "shaheen.bhattacharya1773@gmail.com",
    linkedin: "https://www.linkedin.com/in/shaheen-bhattacharya-416b94365",
    github: "https://github.com/shaheen-bhattacharya",
  },
  aboutMe:
    "I’m a student at the University of Maryland and am looking for positions in software development and the AI space. As a Computer Science major, I am intrigued by the prospect of AI and its potential in making everyday tools smarter, more accessible, and more impactful. I’ve built projects using Python, Java, JavaScript, and React, and I enjoy tackling complex problems through code.",
  skills: ["Python", "Java", "C/C++", "SQL", "HTML/CSS/JS", "PyTorch", "TensorFlow", "Git", "REST APIs", "Office 365", "Google Suite"],
  projects: [
    {
      name: "Focus Tracker",
      description:
        "Developed a Chrome extension with Flask API backend using Claude API classify websites as distracting in real time. Trained custom model on web-scraped datasets achieving 85% accuracy; integrated HTTP GET/POST request handling.",
      link: "https://github.com/shaheen-bhattacharya/FocusExtention",
      skills: ["Full Stack Development", "FlaskAPI", "React", "UI/UX", "Python"],
    },
    {
      name: "BotaniScan",
      description:
        "This is an app which allows you to track the health conditions of your plants and see whether or not they are infected. The AI model trained here is close to 97% accuracy and it can correctly identify your plants in most cases.",
      link: "https://github.com/shaheen-bhattacharya/BotaniScan",
      skills: ["Model Training", "Data Analysis", "Fine Tuning", "HTML/CSS/JS"],
    },
    {
      name: "Summailize",
      description:
        "Summailize is a smart email assistant that automatically fetches unread Gmail messages, summarizes them using Google Gemini AI, categorizes them into types (like Job Opportunity, Event, Promotion, etc.), applies labels inside Gmail, and shows you desktop notifications. Built for users who find it inconvenient to navigate through thousands of unread emails.",
      link: "https://github.com/shaheen-bhattacharya/Summailize",
      skills: ["REST API", "Automation", "AI/ML Development", "Gmail API"],
    },
  ],
  experience: [
    {
      company: "University of Maryland",
      title: "Undergraduate AI/ML Researcher",
      dateRange: "Sep. 2025 - Present",
      bullets: [
        "Conducting research on Vision Transformers for tracking Mesoscale Convective Systems (MCS) using 1TB+ data",
        "Researching UNet architechture as well as XGBoost for time series analysis",
        "Testing segmentation algorithms on datasets to validate accuracy",
      ],
    },
    {
      company: "Northrop Grumman Innovation Lab",
      title: "Software Engineering Researcher",
      dateRange: "Sep. 2025 - Present",
      bullets: [
        "Developing AR simulation software modeling data flow across components using Python and computer vision",
        "Integrated Python FaceMesh for double blink camera detection for autonomous actions",
        "Presented software to team members during meetings",
      ],
    },
    {
      company: "Narb",
      title: "Software Engineering Intern",
      dateRange: "Jul 2025 - Present",
      bullets: [
        "Working on nHabit mobile app, integrating Geimini API for location accuracy",
        "Architecting the app using TypeScript for consistency in the codebase",
        "Testing narb's custom LLM with custom prompts and determining fallacies in the model",
      ],
    },
    {
      company: "NuCulture",
      title: "Software Engineering Intern",
      dateRange: "Jun 2025 - May 2025",
      bullets: [
        "Built ai_video_editor, a full-stack AI application leveraging Meta SlowFast for video frame sequencing and OpenAI Whisper for speech-to-text transcription for automated edit generation",
        "Trained a custom AI inference model on 500GB of media to identify optimal cut points in video.",
      ],
    },
    {
      company: "MRP Solutions",
      title: "QA Engineering Intern",
      dateRange: "Aug 2024 - April 2025",
      bullets: [
        "Created a library for FTIR scanner to analyze contamination in plastic caps and liners",
        "Developed ~15 programs to automatically measure precisely and accurately the dimensions of plastic caps",
      ],
    },
  ],
  education: [
    {
      school: "University of Maryland",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "Expected 2027",
      achievements: [
        "Presidential Scholarship",
        "Computer Science Courses: Object-Oriented Programming I&II (Java), Intro to Computer Systems (C), Discrete Structures",
        "Mathematics Courses: Advanced Calculus II, Applied Probability and Statistics, Calculus I–III",
      ],
    },
    {
      school: "Princeton University",
      degree: "Mathematics Dual Enrollment",
      dateRange: "2024 - 2025",
      achievements: [
        "Relevant Coursework: Real Analysis, Linear Algebra (Honors)",
      ],
    },
  ],
};
