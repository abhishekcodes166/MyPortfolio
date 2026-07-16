export const profile = {
  name: "Abhishek Kumar Jha",
  firstName: "Abhishek",
  role: "Full-Stack Developer & Competitive Programmer",
  tagline:
    "CSE undergrad at MNNIT Allahabad building real-time web platforms — and solving hard algorithmic problems for fun.",
  location: "Prayagraj, India",
  email: "abhishekjhaa340@gmail.com",
  phone: "+91-8368866357",
  resumeUrl: "/resume.pdf",
  links: {
    github: "https://github.com/abhishekcodes166",
    linkedin: "https://www.linkedin.com/in/abhishekjha1666",
    leetcode: "https://leetcode.com/u/abhi-jha/",
    gfg: "https://www.geeksforgeeks.org/user/abhishekh8mek/",
    codechef: "https://www.codechef.com/users/avisekcodes",
  },
};

export const about = {
  paragraphs: [
    "I'm a Computer Science undergraduate at Motilal Nehru National Institute of Technology (MNNIT) Allahabad, Class of 2027. I build full-stack products end to end — from WebRTC signaling servers and Socket.IO event pipelines to polished React frontends — with a growing focus on integrating AI meaningfully into real applications.",
    "On the algorithmic side, I'm a LeetCode Knight with a 2070 contest rating (top 1.77% globally) and 1100+ problems solved, including 200+ hard. That daily grind of contest problems shapes how I write application code: I care about latency, data modeling, and edge cases, not just getting things to render.",
    "Recently I've been deep in systems thinking — my project SysVERSE is a browser-based system-design playground where architectures get validated and cost-estimated as you draw them. Off the keyboard, I captain the MNNIT Cricket Club and pitched my way to a 3rd-place finish at the Udbhav-2024 E-Summit startup competition.",
  ],
  highlights: [
    { label: "LeetCode Rating", value: "2070" },
    { label: "Problems Solved", value: "1164" },
    { label: "Global Percentile", value: "Top 1.77%" },
    { label: "Projects Shipped", value: "10+" },
  ],
};

export const skillGroups = [
  {
    title: "Languages",
    skills: ["C++", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Vite", "HTML/CSS"],
  },
  {
    title: "Backend & Real-Time",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "WebRTC", "JWT Auth"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "CS Fundamentals",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Database Management Systems",
      "High-Level Design",
    ],
  },
];

export type Project = {
  name: string;
  period: string;
  summary: string;
  description: string;
  tech: string[];
  features: string[];
  challenges: string[];
  github: string;
  live?: string;
};

export const featuredProjects: Project[] = [
  {
    name: "IntelMeet",
    period: "May 2025 — Present",
    summary: "AI-powered real-time meeting & collaboration platform",
    description:
      "A full-stack WebRTC conferencing platform with live collaboration tools and AI meeting intelligence. Peer-to-peer audio calls run alongside a synchronized multi-user whiteboard, live polls, floating emoji reactions, and instant file sharing — while Google's Gemini API turns live transcriptions into automated meeting summaries and action items.",
    tech: [
      "React 19",
      "Node.js",
      "Express",
      "Socket.IO",
      "WebRTC (PeerJS)",
      "MongoDB",
      "Gemini API",
      "Tailwind CSS",
    ],
    features: [
      "Low-latency P2P audio — under 200 ms in testing — with live speaking indicators",
      "Synchronized whiteboard, live polls, and floating reactions over Socket.IO",
      "Gemini-generated meeting minutes, action items, and takeaways",
      "Scheduled meetings with timezone support, RSVP tracking, and Nodemailer email invites",
      "JWT-authenticated sockets with host/participant-level authorization",
    ],
    challenges: [
      "Achieved 99%+ NAT/firewall traversal by layering fallback STUN/TURN servers",
      "Used MongoDB transactions to keep meeting analytics atomic under concurrent socket events",
      "Built periodic connection-health sweepers to prune stale peers and prevent memory leaks",
      "Added 3× exponential backoff with JSON-schema fallbacks to make AI endpoints fail-safe",
    ],
    github: "https://github.com/abhishekcodes166/IntelMeet",
    live: "https://intel-meet.vercel.app",
  },
  {
  name: "AI Attendance System",
  period: "Jul 2026 — Present",
  summary: "Face recognition attendance system with FaceNet & anti-spoofing",
  description:
    "A secure AI-powered attendance management system that automates user registration and attendance using FaceNet facial embeddings. The platform captures 200 images during one-time registration, performs real-time face recognition through a webcam, detects spoofing attempts, and maintains attendance records through a Flask-based web application.",
  tech: [
    "Python",
    "Flask",
    "FaceNet",
    "TensorFlow",
    "OpenCV",
    "SQLite",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  features: [
    "One-time face registration capturing 200 images from multiple angles to generate robust facial embeddings",
    "Real-time face recognition using FaceNet embeddings and OpenCV-based face detection",
    "Face anti-spoofing pipeline to detect presentation attacks such as photos and mobile screens",
    "Automated attendance logging with timestamp, user management, and attendance history",
    "Admin dashboard for registration, attendance records, and user profile management",
  ],
  challenges: [
    "Built an end-to-end facial recognition pipeline integrating OpenCV preprocessing with FaceNet embedding extraction",
    "Designed a registration workflow that captures diverse facial samples to improve recognition accuracy under varying conditions",
    "Integrated anti-spoofing with recognition while maintaining low-latency real-time inference",
    "Developed a modular Flask backend with SQLite persistence for user profiles, facial embeddings, and attendance records",
  ],
  github: "https://github.com/yourusername/AI-Attendance-System",
},
{
    name: "SysVERSE",
    period: "Jul 2026 — Present",
    summary: "System-design playground with live validation & cost estimation",
    description:
      "A one-stop platform for practicing system design in the browser — like a whiteboard interview that talks back. Drag components onto a ReactFlow canvas, wire them together with deep per-node configuration, and get instant feedback: a rule engine flags architectural flaws as you build, and a traffic model produces an itemized monthly cost estimate.",
    tech: [
      "React 18",
      "TypeScript",
      "Vite",
      "ReactFlow",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
      "Drag-and-drop canvas with 10 typed components — clients, CDNs, load balancers, caches, queues, databases, and more",
      "Real config schemas per node: DB shards & replicas, cache strategy & TTL, LB algorithms, autoscaling",
      "Live validation engine that flags errors and warnings — unconnected components, missing replicas, capacity vs target RPS",
      "Monthly cost estimation from DAU and traffic modeling, loosely based on real AWS/GCP rates",
      "Per-user save/load persisted to MongoDB, plus full JSON export of any design",
    ],
    challenges: [
      "Rendered all 10 component types through a single data-driven ReactFlow node — no per-component classes",
      "Kept component definitions, validation rules, and pricing as typed data, fully decoupled from the UI",
      "Did JWT auth right: httpOnly cookies instead of localStorage tokens, bcrypt hashing, user ID always derived server-side",
      "Stayed deliberately lean — ReactFlow state plus React context, no state-management library",
    ],
    github: "https://github.com/whynotramaa/SysVERSE",
  },
  {
    name: "Video Manager",
    period: "2025",
    summary: "Full-stack video-sharing platform — a YouTube-style backend done right",
    description:
      "A complete video-sharing platform covering the full product surface: secure authentication, cloud media storage, channels with subscriptions, playlists, watch history, and real-time notifications. Built as a deep dive into production backend patterns — file pipelines, aggregation-heavy data models, and token-based session security.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    features: [
      "Secure signup/login with access + refresh token rotation",
      "Video upload pipeline backed by cloud media storage",
      "Channel subscriptions, playlists, and per-user watch history",
      "Real-time notifications for subscriber activity",
    ],
    challenges: [
      "Modeled subscriptions and channel stats with MongoDB aggregation pipelines",
      "Handled large media uploads reliably via multipart streaming to Cloudinary",
      "Kept watch-history writes cheap so playback pages stay fast",
    ],
    github: "https://github.com/abhishekcodes166/video-manager",
    live: "https://video-manager-seven.vercel.app",
  },
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    handle: "@abhi-jha",
    url: "https://leetcode.com/u/abhi-jha/",
    stats: [
      { label: "Contest Rating", value: "2070" },
      { label: "Badge", value: "Knight · Top 1.77%" },
      { label: "Solved", value: "1164 (204 Hard)" },
      { label: "Best Contest Rank", value: "#394 global" },
    ],
  },
  {
    platform: "GeeksforGeeks",
    handle: "@abhishekh8mek",
    url: "https://www.geeksforgeeks.org/user/abhishekh8mek/",
    stats: [
      { label: "Profile", value: "Active problem-solver" },
      { label: "Focus", value: "DSA practice" },
    ],
  },
  {
    platform: "CodeChef",
    handle: "@avisekcodes",
    url: "https://www.codechef.com/users/avisekcodes",
    stats: [
      { label: "Profile", value: "Competitive programming" },
      { label: "Focus", value: "Rated contests" },
    ],
  },
  {
    platform: "GitHub",
    handle: "@abhishekcodes166",
    url: "https://github.com/abhishekcodes166",
    stats: [
      { label: "Public Repos", value: "15" },
      { label: "Focus", value: "Full-stack & AI projects" },
    ],
  },
];

export const achievements = [
  {
    title: "Global Rank 394 — LeetCode Contest",
    detail:
      "Placed 394th among 30,000+ participants in a LeetCode contest; consistently ranked in the top 4% across contests.",
    tag: "Competitive Programming",
  },
  {
    title: "LeetCode Knight — 2070 Rating",
    detail:
      "Top 1.77% of contest participants worldwide, with 1114 problems solved including 202 hard.",
    tag: "Competitive Programming",
  },
  {
    title: "Top 1500 — Google Big Code Competition",
    detail: "Ranked in the top 1500 among 200,000+ participants.",
    tag: "Competitive Programming",
  },
  {
    title: "3rd Prize — Udbhav-2024, E-Summit Renaissance",
    detail: "Won 3rd place among 20+ startup pitches at MNNIT's entrepreneurship summit.",
    tag: "Startup & Innovation",
  },
];

export const leadership = [
  {
    role: "Captain",
    org: "MNNIT Cricket Club",
    detail: "Leading the institute cricket team — selection, strategy, and match-day decisions.",
  },
  {
    role: "Class Representative",
    org: "CSE Department, MNNIT",
    detail: "Point of contact between 100+ classmates and faculty for academics and logistics.",
  },
  {
    role: "Media Lead",
    org: "Cultural Event, MNNIT",
    detail: "Managed a team of 10 content creators covering the event end to end.",
  },
];

export const education = [
  {
    institution: "Motilal Nehru National Institute of Technology, Allahabad",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Aug 2023 — May 2027",
    detail: "CGPA: 7.67 · Prayagraj, India",
  },
  {
    institution: "Mithila Institute of Technology",
    degree: "Higher Secondary Education (Class XII)",
    period: "Apr 2021 — Mar 2022",
    detail: "Science stream",
  },
  {
    institution: "Mithila Institute of Technology",
    degree: "Secondary Education (Class X)",
    period: "Apr 2019 — Mar 2020",
    detail: "",
  },
];
