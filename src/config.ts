export const siteConfig = {
  name: "Shaheen",
  title: "Software Engineer & AI/ML Researcher",
  description: "Portfolio website of Shaheen Bhattacharya",
  accentColor: "#1d4ed8",
  social: {
    email: "shaheen.bhattacharya1773@gmail.com",
    linkedin: "https://linkedin.com/in/shaheen-bhattacharya",
    github: "https://github.com/shaheen-bhattacharya",
  },
  aboutMe:
    "",
  skills: ["Python", "Java", "C/C++", "SQL", "HTML/CSS/JS", "PyTorch", "TensorFlow", "Git", "REST APIs", "Office 365", "Google Suite"],
  projects: [
    {
      name: "Focus Tracker",
      description:
        "Developed a Chrome extension with Flask API backend using Claude API classify websites as distracting in real time. Trained custom model on web-scraped datasets achieving 85% accuracy; integrated HTTP GET/POST request handling.",
      link: "https://github.com/shaheen-bhattacharya/FocusExtention",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "BotaniScan",
      description:
        "This is an app which allows you to track the health conditions of your plants and see whether or not they are infected. The AI model trained here is close to 97% accuracy and it can correctly identify your plants in most cases.",
      link: "https://github.com/shaheen-bhattacharya/BotaniScan",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Summailize",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://github.com/shaheen-bhattacharya/Summailize",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "University of Maryland",
      title: "Undergraduate AI/ML Researcher",
      dateRange: "Sep. 2025 - Present",
      bullets: [
        "Conducting research on Vision Transformers for tracking Mesoscale Convective Systems (MCS) using 1TB+ data",
        "Researcher UNet architechture as well as XGBoost for time series analysis",
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
        "Presented software to team members ",
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
      school: "University Name",
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
