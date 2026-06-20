import { useState, useEffect, useRef } from "react";
import heroPhoto from './assets/Madhan Passport photo Main1.jpg';
import resumePDF from './assets/Madhan Shanmugam Resume Final.pdf';



// Use imported local assets
const PHOTO_URL = heroPhoto;
const RESUME_B64 = resumePDF;   // Vite will handle it as URL


const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Contact"];

const ROLES = [
  "Software Engineer",
  "Fullstack Developer",
  "React Native Developer",
  "AI Enthusiast",
  "Problem Solver",
];

const SKILLS = [
  { name: "Fullstack Dev", level: 90, icon: "⚡" },
  { name: "Next.js", level: 85, icon: "▲" },
  { name: "React", level: 85, icon: "⚛" },
  { name: "Python", level: 80, icon: "🐍" },
  { name: "SQL", level: 78, icon: "🗄" },
  { name: "Java", level: 72, icon: "☕" },
  { name: "Machine Learning", level: 68, icon: "🧠" },
  { name: "Git & GitHub", level: 88, icon: "🔀" },
  { name: "Tailwind CSS", level: 85, icon: "🎨" },
  { name: "AWS", level: 65, icon: "☁" },
];

const EXPERIENCES = [
  {
    role: "Software Engineer Intern",
    company: "GUIDEWAVE LIMITED",
    location: "Wiltshire",
    period: "Aug 2025 – Dec 2025",
    color: "#00f5c4",
    points: [
      "Developed web applications using Next.js",
      "Built Creative IT Plus e-learning platform with Next.js, boosting engagement",
      "Created interactive student dashboards with Tailwind CSS & optimized performance",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "KG Micro College",
    location: "Coimbatore",
    period: "Jul 2024 – Oct 2024",
    color: "#ff6b35",
    points: [
      "Developed software solutions through coding & project collaboration",
      "Contributed to test case development for MGC project at KGM",
      "Completed Python programming at Cognoorise Company",
      "Explored machine learning applications at KGX",
    ],
  },
];

const PROJECTS = [
  {
    id: "wedonate",
    title: "weDonate",
    subtitle: "Smart Blood Donation Coordination Platform",
    award: "🥇 1st Place",
    event: "Hackmarathon 2k26",
    date: "Feb 5–6, 2026 · Coimbatore",
    color: "#00f5c4",
    gradient: "linear-gradient(135deg, #00f5c4 0%, #0099ff 100%)",
    description: "Unified platform solving critical blood bank shortages — real-time donor scheduling, AI-powered shortage prediction, and a value-based repayment system.",
    tags: ["React.js", "React Native", "Node.js", "Express", "MySQL", "Socket.io", "OpenAI API", "Tailwind CSS"],
    detail: {
      hackathon: "Hackmarathon 2k26",
      result: "First Place",
      dates: "5th & 6th February 2026",
      location: "Coimbatore, Tamil Nadu",
      teamName: "Eclipse Syndicate",
      about: "Won 1st Place in Smart Healthcare Solutions track. Built 'weDonate' - unified platform for blood donation coordination solving critical healthcare problem. Challenge: Blood banks face unpredictable donor turnout, mismatched availability, and poor shortage visibility. Solution: Real-time donor scheduling, AI-powered shortage prediction, and value-based repayment system for sustainability.",
      project: "weDonate - Smart Blood Donation Coordination Platform",
      highlights: [
        "FIRST PLACE winner in Smart Healthcare Solutions track",
        "Delivered 60% functional product within 24 hours — most polished submission",
        "Excelled in both technical and business judging rounds",
        "Underwent 3 rigorous judging rounds plus mentor session",
        "Built with real-world use cases and sustainable revenue model",
        "Validated technical abilities and understanding of building real products",
      ],
      takeaway: "A landmark achievement in my hackathon journey. As team lead, I structured our development approach meticulously, resulting in 60% functional product delivery within 24 hours - our most polished submission yet. Excelled in technical judging with full-stack implementation, real-time features with Socket.io, and OpenAI API integration. Performed strongly in business judging with clear marketing strategy, profitability model, and real-world scalability. Underwent 3 rigorous judging rounds plus a mentor session. Answered technical questions confidently due to strong development fundamentals. Addressed business questions thoroughly with market research and sustainability planning. The project was built for real-world use cases with a sustainable revenue model. Securing FIRST PLACE validated both our technical abilities and our understanding of building real products with sustainable business models.",
      tech: ["React.js", "React Native", "Node.js", "Express", "MySQL", "Tailwind CSS"],
      members: [
        { name: "Sanjay R", role: "Team Leader", url: "https://www.linkedin.com/in/sanjayravichandran600/" },
        { name: "Madhan S", role: "", url: "https://www.linkedin.com/in/madhans23/" },
        { name: "Madhavan P", role: "", url: "https://www.linkedin.com/in/madhavan-p-053356271/" },
      ],
      accentColor: "#00f5c4",
      gradient: "linear-gradient(135deg, #00f5c4 0%, #0099ff 100%)",
      media: {
        certificates: [
          { src: new URL('./assets/wedonate/certificate1.jpg', import.meta.url).href, label: "Winner Certificate" },
          { src: new URL('./assets/wedonate/certificate2.jpg', import.meta.url).href, label: "Team at Hackathon" },
        ],
        photos: [
          { src: new URL('./assets/wedonate/photo1.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/wedonate/photo2.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/wedonate/photo3.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/wedonate/photo4.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/wedonate/photo5.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/wedonate/photo6.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/wedonate/photo7.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/wedonate/photo8.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/wedonate/photo9.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/wedonate/photo10.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/wedonate/photo11.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/wedonate/photo12.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/wedonate/photo13.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/wedonate/photo14.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/wedonate/photo15.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/wedonate/photo16.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/wedonate/photo17.png', import.meta.url).href, label: "Project Demo" },
        ],
      },
    },
  },
  {
    id: "werespond",
    title: "WeRespond",
    subtitle: "AI Emergency Rescue Platform",
    award: "🥈 2nd Place",
    event: "SRCAS Hackathon 2.0",
    date: "Dec 13–14, 2025 · Coimbatore",
    color: "#ff6b35",
    gradient: "linear-gradient(135deg, #ff6b35 0%, #ff2d78 100%)",
    description: "Community-powered emergency rescue platform — AI geo-matching connects victims with nearby citizen first-responders even without internet access.",
    tags: ["React Native", "ReactJS", "Node.js", "Express", "MySQL", "REST APIs"],
    detail: {
      hackathon: "SRCAS Hackathon 2.0 - 2025",
      result: "Second Place",
      dates: "13th & 14th December 2025",
      location: "Coimbatore, Tamil Nadu",
      teamName: "Eclipse Syndicate",
      about: "24-hour hackathon at Sri Ramakrishna College of Arts & Science. Built 'WeRespond' - community-powered emergency rescue platform. Problem: Women/elderly can't share location during emergencies, especially without internet. Solution: AI-powered geo-matching connecting victims with nearby citizen first-responders before official help arrives.",
      project: "WeRespond - AI Emergency Rescue Platform",
      highlights: [
        "Secured Second Place out of numerous participating teams",
        "Built React Native mobile app + React JS web dashboard with shared Node.js APIs",
        "Underwent 2 evaluation rounds + 1 mentoring session with positive feedback",
        "App performed flawlessly without crashes during final judging",
        "Validated ability to build meaningful solutions for real societal problems",
      ],
      takeaway: "Perfect team coordination - built React Native mobile app + React JS web dashboard sharing common Node.js APIs. Underwent 2 evaluation rounds + 1 mentoring session. Mentor's feedback helped refine our approach significantly. During final judging, our presentation was outstanding and the app performed flawlessly without crashes. Core idea by Madhan S (team lead) - all three contributed equally to 24-hour development sprint. Securing 2nd place validated our technical skills and ability to build meaningful solutions for real societal problems.",
      tech: ["React Native", "ReactJS", "Node.js", "Express", "MySQL", "REST APIs"],
      members: [
        { name: "Madhan S", role: "Team Leader", url: "https://www.linkedin.com/in/madhans23/" },
        { name: "Sanjay R", role: "", url: "https://www.linkedin.com/in/sanjayravichandran600/" },
        { name: "Madhavan P", role: "", url: "https://www.linkedin.com/in/madhavan-p-053356271/" },
      ],
      accentColor: "#ff6b35",
      gradient: "linear-gradient(135deg, #ff6b35 0%, #ff2d78 100%)",
      media: {
        certificates: [
          { src: new URL('./assets/werespond/certificate1.jpeg', import.meta.url).href, label: "Runner-Up Certificate" },
          { src: new URL('./assets/werespond/certificate2.jpeg', import.meta.url).href, label: "Team At Hackathon" },
        ],
        photos: [
          { src: new URL('./assets/werespond/photo1.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/werespond/photo2.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/werespond/photo3.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/werespond/photo4.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/werespond/photo5.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/werespond/photo6.png', import.meta.url).href, label: "Project Demo" },
          { src: new URL('./assets/werespond/photo7.png', import.meta.url).href, label: "Project Demo" },
        ],
      },
    },
  },
  {
    id: "deepracer",
    title: "AWS DeepRacer",
    subtitle: "Autonomous Racing Model · Reinforcement Learning",
    award: "🏆 Shortlisted",
    event: "DeepRacer 3.0 League",
    date: "Aug 23–25, 2024 · Coimbatore",
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
    description: "Shortlisted from 500+ teams. Trained reinforcement learning models on virtual tracks using AWS credits, deployed to physical autonomous cars.",
    tags: ["Python", "AWS DeepRacer", "Reinforcement Learning", "AWS SageMaker", "ML"],
    detail: {
      hackathon: "DeepRacer 3.0 League",
      result: "Participation",
      dates: "23rd - 25th August 2024",
      location: "Coimbatore, Tamil Nadu",
      teamName: "TechMakerz",
      about: "48-hour AWS DeepRacer bootcamp. Shortlisted from 500+ teams. Trained reinforcement learning models on virtual tracks using AWS credits. Models deployed to physical autonomous cars for real-track racing.",
      project: "Autonomous Racing Model - Reinforcement Learning",
      highlights: [
        "Shortlisted from 500+ teams to top 50 globally",
        "Provisional Global Winner — awarded $99 Amazon Gift Card",
        "Hands-on with ML, Reinforcement Learning (PPO algorithm), and hyperparameter tuning",
        "Models deployed globally on AWS DeepRacer League leaderboard",
        "Proved complex fields like ML are accessible to motivated learners",
      ],
      takeaway: "A 3-month journey culminating in an unforgettable 48-hour bootcamp. Got hands-on with Machine Learning, Reinforcement Learning (PPO algorithm), reward function engineering, and hyperparameter tuning. Each team member deployed models globally on AWS DeepRacer League. Received official email confirming I was a provisional global winner — won $99 Amazon gift card. Working alongside Madhan S and Madhavan P made this journey special. This proved that complex fields like ML are accessible to motivated learners.",
      tech: ["Python", "AWS DeepRacer", "Reinforcement Learning", "AWS SageMaker", "ML"],
      globalAward: {
        title: "🏆 Global Recognition",
        subtitle: "AWS DeepRacer League 2024",
        badge: "✨ Awarded $99 Amazon Gift Card as Global Provisional Winner",
        bullets: [
          "Selected from 500+ teams, shortlisted to top 50 globally",
          "Trained reinforcement learning models using AWS DeepRacer platform",
          "Deployed models globally on AWS DeepRacer League leaderboard",
          "Received official recognition from AWS for outstanding model performance and optimization",
        ],
        link: "https://agt0s8jvqe.ufs.sh/f/Kn2JOlTZrvcDMYChDaIJ8E3l1yxPf7h9qDz0Wjevw2tBpSNu",
      },
      members: [
        { name: "Madhavan P", role: "Team Leader", url: "https://www.linkedin.com/in/madhavan-p-053356271/" },
        { name: "Sanjay R", role: "", url: "https://www.linkedin.com/in/sanjayravichandran600/" },
        { name: "Madhan S", role: "", url: "https://www.linkedin.com/in/madhans23/" },
      ],
      accentColor: "#a855f7",
      gradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
      media: {
        certificates: [
          { src: new URL('./assets/deepracer/certificate2.jpeg', import.meta.url).href, label: "AWS Recognition" },
        ],
        photos: [
          { src: new URL('./assets/deepracer/photo1.jpeg', import.meta.url).href, label: "DeepRacer Bootcamp" },
        ],
      },
    },
  },
];

const STRENGTHS = [
  { label: "Communication", icon: "💬" },
  { label: "Leadership", icon: "🎯" },
  { label: "Critical Thinking", icon: "🧩" },
  { label: "Adaptability", icon: "🔄" },
  { label: "Emotional Intelligence", icon: "💡" },
  { label: "Fast Learner", icon: "⚡" },
];

const ROTATING_STACKS = [
  [
    { name: "Next.js", icon: "▲", color: "#ffffff", bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.2)" },
    { name: "React", icon: "⚛", color: "#00f5c4", bg: "rgba(0,245,196,0.06)", border: "rgba(0,245,196,0.2)" },
    { name: "Node.js", icon: "🟢", color: "#6cc24a", bg: "rgba(108,194,74,0.06)", border: "rgba(108,194,74,0.2)" },
    { name: "MySQL", icon: "🐬", color: "#00758f", bg: "rgba(0,117,143,0.06)", border: "rgba(0,117,143,0.2)" }
  ],
  [
    { name: "Python", icon: "🐍", color: "#ff6b35", bg: "rgba(255,107,53,0.06)", border: "rgba(255,107,53,0.2)" },
    { name: "AWS", icon: "☁", color: "#a855f7", bg: "rgba(168,85,247,0.06)", border: "rgba(168,85,247,0.2)" },
    { name: "Tailwind", icon: "🎨", color: "#38bdf8", bg: "rgba(56,189,248,0.06)", border: "rgba(56,189,248,0.2)" },
    { name: "Git", icon: "🔀", color: "#f05032", bg: "rgba(240,80,50,0.06)", border: "rgba(240,80,50,0.2)" }
  ],
  [
    { name: "OpenAI", icon: "🧠", color: "#74aa9c", bg: "rgba(116,170,156,0.06)", border: "rgba(116,170,156,0.2)" },
    { name: "Socket.io", icon: "⚡", color: "#00f5c4", bg: "rgba(0,245,196,0.06)", border: "rgba(0,245,196,0.2)" },
    { name: "Express", icon: "🚂", color: "#e8eaf0", bg: "rgba(232,234,240,0.06)", border: "rgba(232,234,240,0.2)" },
    { name: "Java", icon: "☕", color: "#ea2d2e", bg: "rgba(234,45,46,0.06)", border: "rgba(234,45,46,0.2)" }
  ]
];

// ── Typewriter hook ──────────────────────────────────────────
function useTypewriter(words, typingSpeed = 80, deletingSpeed = 45, pauseMs = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState("typing"); // "typing" | "pausing" | "deleting"

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let timeout;

    if (phase === "typing") {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), pauseMs);
      }
    } else if (phase === "deleting") {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), deletingSpeed);
      } else {
        setWordIdx(i => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [display, phase, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

  return display;
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimatedBar({ level, color, inView }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 99, height: 6, overflow: "hidden" }}>
      <div style={{
        height: "100%", borderRadius: 99,
        background: color,
        width: inView ? `${level}%` : "0%",
        transition: "width 1.2s cubic-bezier(.4,0,.2,1)",
        boxShadow: `0 0 12px ${color}88`,
      }} />
    </div>
  );
}

/* ── LightboxViewer: full-screen image overlay ─────────── */
function LightboxViewer({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const total = images.length;
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx(i => (i + 1) % total);
      if (e.key === "ArrowLeft") setIdx(i => (i - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total, onClose]);
  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 3000, background: "rgba(0,0,0,0.96)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "16px" }}
    >
      <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%", width: 40, height: 40, color: "#fff", fontSize: 20, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>×</button>
      <div style={{ position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.5)", fontSize: 13, fontWeight: 600 }}>{idx + 1} / {total}</div>
      <div onClick={e => e.stopPropagation()} style={{ maxWidth: "92vw", maxHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <img
          src={images[idx].src}
          alt={images[idx].label}
          style={{ maxWidth: "100%", maxHeight: "72vh", objectFit: "contain", borderRadius: 12, boxShadow: "0 20px 80px rgba(0,0,0,0.8)", display: "block" }}
          onError={e => { e.currentTarget.style.display = "none"; }}
        />
        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 500 }}>{images[idx].label}</span>
      </div>
      {total > 1 && (
        <>
          <button
            onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + total) % total); }}
            style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", width: 44, height: 44, color: "#fff", fontSize: 20, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          >‹</button>
          <button
            onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % total); }}
            style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", width: 44, height: 44, color: "#fff", fontSize: 20, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          >›</button>
        </>
      )}
      {total > 1 && (
        <div style={{ position: "absolute", bottom: 20, display: "flex", gap: 7 }}>
          {images.map((_, i) => (
            <div key={i} onClick={e => { e.stopPropagation(); setIdx(i); }} style={{ width: i === idx ? 20 : 7, height: 7, borderRadius: 99, background: i === idx ? "#fff" : "rgba(255,255,255,0.3)", cursor: "pointer", transition: "all .3s" }} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── MediaGallery: grid of thumbnails ───────────────────── */
function MediaGallery({ items, accentColor, emptyMsg }) {
  const [lightbox, setLightbox] = useState(null);
  if (!items || items.length === 0) {
    return (
      <div style={{ padding: "28px 0", textAlign: "center" }}>
        <div style={{ fontSize: 36, marginBottom: 10 }}>🖼️</div>
        <p style={{ color: "#4a5568", fontSize: 14 }}>{emptyMsg || "No images added yet."}</p>
        <p style={{ color: "#374151", fontSize: 12, marginTop: 6 }}>Add images to the assets folder as described in the instructions.</p>
      </div>
    );
  }
  return (
    <>
      {lightbox !== null && <LightboxViewer images={items} startIndex={lightbox} onClose={() => setLightbox(null)} />}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12, marginTop: 14 }}>
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => setLightbox(i)}
            style={{ cursor: "pointer", borderRadius: 10, overflow: "hidden", border: `1px solid ${accentColor}30`, background: "rgba(255,255,255,0.03)", transition: "transform .2s, box-shadow .2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.03)"; e.currentTarget.style.boxShadow = `0 8px 24px ${accentColor}25`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <img
              src={item.src}
              alt={item.label}
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
              onError={e => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.parentElement.innerHTML = `<div style="aspect-ratio:4/3;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:8px"><div style="font-size:24px">📷</div><div style="font-size:10px;color:#4a5568;text-align:center">${item.label}</div></div>`;
              }}
            />
            <div style={{ padding: "8px 10px", fontSize: 11, color: "#8892a4", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── ProjectModal ────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  const d = project.detail;
  const media = project.detail.media || { certificates: [], photos: [] };
  const [activeTab, setActiveTab] = useState("details");

  const TABS = [
    { id: "details",      label: "Details",      icon: "📋" },
    { id: "certificates", label: "Certificates", icon: "🏅" },
    { id: "photos",       label: "Photos",       icon: "📸" },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "24px 16px", overflowY: "auto" }}>
      <div onClick={e => e.stopPropagation()} className="modal-content-container" style={{ background: "#0d1220", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 24, width: "100%", maxWidth: 780, position: "relative", overflow: "hidden", marginTop: 20, marginBottom: 20 }}>

        {/* Header */}
        <div className="modal-header-container" style={{ background: d.gradient, padding: "36px 40px 30px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
          <div style={{ position: "absolute", bottom: -50, left: "30%", width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
          <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "rgba(0,0,0,0.3)", border: "none", borderRadius: "50%", width: 36, height: 36, color: "#fff", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>×</button>
          <div style={{ position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", background: "rgba(0,0,0,0.25)", padding: "5px 12px", borderRadius: 99 }}>{d.hackathon}</span>
            <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 14 }}>
              <div>
                <h2 style={{ fontFamily: "'Syne'", fontWeight: 800, fontSize: 32, color: "#fff", lineHeight: 1.1 }}>{project.title}</h2>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, marginTop: 6 }}>{project.subtitle}</p>
              </div>
            </div>
            <div className="modal-badges-flex" style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
              {[["📅", d.dates], ["📍", d.location], ["🏆", d.result], ["👥", d.teamName]].map(([icon, val]) => (
                <span key={val} style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", background: "rgba(0,0,0,0.2)", padding: "4px 12px", borderRadius: 99, fontWeight: 500 }}>{icon} {val}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div className="modal-tab-bar" style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "0 28px", background: "rgba(255,255,255,0.01)", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: "flex", alignItems: "center", gap: 7,
                padding: "14px 18px",
                background: "none", border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 700, fontFamily: "'Syne'",
                letterSpacing: "0.04em", whiteSpace: "nowrap",
                color: activeTab === tab.id ? d.accentColor : "#8892a4",
                borderBottom: activeTab === tab.id ? `2px solid ${d.accentColor}` : "2px solid transparent",
                transition: "all .2s",
                marginBottom: -1,
              }}
            >
              <span style={{ fontSize: 15 }}>{tab.icon}</span>
              {tab.label}
              {tab.id === "certificates" && media.certificates.length > 0 && (
                <span style={{ background: `${d.accentColor}25`, color: d.accentColor, fontSize: 10, fontWeight: 800, padding: "1px 7px", borderRadius: 99, marginLeft: 2 }}>{media.certificates.length}</span>
              )}
              {tab.id === "photos" && media.photos.length > 0 && (
                <span style={{ background: `${d.accentColor}25`, color: d.accentColor, fontSize: 10, fontWeight: 800, padding: "1px 7px", borderRadius: 99, marginLeft: 2 }}>{media.photos.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="modal-body-container" style={{ padding: "32px 40px 40px", display: "flex", flexDirection: "column", gap: 32 }}>

          {activeTab === "details" && (
            <>
              <div>
                <ModalLabel label="About the Hackathon" color={d.accentColor} />
                <p style={{ color: "#a0aec0", fontSize: 15, lineHeight: 1.75, marginTop: 10 }}>{d.about}</p>
              </div>

              <div style={{ background: `${d.accentColor}15`, border: `1px solid ${d.accentColor}40`, borderRadius: 14, padding: "16px 22px" }}>
                <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: d.accentColor }}>Project Built</span>
                <p style={{ color: "#fff", fontWeight: 700, fontSize: 17, marginTop: 6, fontFamily: "'Syne'" }}>{d.project}</p>
              </div>

              <div>
                <ModalLabel label="Key Highlights" color={d.accentColor} />
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginTop: 12 }}>
                  {d.highlights.map((h, i) => (
                    <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ color: d.accentColor, flexShrink: 0, marginTop: 2 }}>★</span>
                      <span style={{ color: "#c0c8d8", fontSize: 14, lineHeight: 1.65 }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ModalLabel label="Key Takeaways & Experience" color={d.accentColor} />
                <p style={{ color: "#a0aec0", fontSize: 14, lineHeight: 1.8, marginTop: 10 }}>{d.takeaway}</p>
              </div>

              {d.globalAward && (
                <div className="global-award-container" style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(236,72,153,0.1) 100%)", border: "1px solid rgba(168,85,247,0.35)", borderRadius: 16, padding: "24px 28px" }}>
                  <div style={{ fontFamily: "'Syne'", fontWeight: 800, fontSize: 20, color: "#fff" }}>{d.globalAward.title}</div>
                  <div style={{ color: "#a855f7", fontWeight: 600, fontSize: 14, margin: "6px 0 14px" }}>{d.globalAward.subtitle}</div>
                  <div style={{ background: "rgba(168,85,247,0.2)", borderRadius: 10, padding: "10px 16px", fontSize: 14, color: "#e8b4fe", fontWeight: 600, marginBottom: 14 }}>{d.globalAward.badge}</div>
                  {d.globalAward.bullets.map((b, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                      <span style={{ color: "#a855f7" }}>•</span>
                      <span style={{ color: "#c0c8d8", fontSize: 13, lineHeight: 1.6 }}>{b}</span>
                    </div>
                  ))}
                  <a href={d.globalAward.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12, color: "#a855f7", fontWeight: 600, fontSize: 13, textDecoration: "none", borderBottom: "1px solid rgba(168,85,247,0.4)", paddingBottom: 2 }}>
                    View Official Recognition Email →
                  </a>
                </div>
              )}

              <div>
                <ModalLabel label="Technologies Used" color={d.accentColor} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
                  {d.tech.map(t => (
                    <span key={t} style={{ padding: "6px 16px", borderRadius: 99, fontSize: 13, fontWeight: 600, background: `${d.accentColor}18`, color: d.accentColor, border: `1px solid ${d.accentColor}40` }}>{t}</span>
                  ))}
                </div>
              </div>

              <div>
                <ModalLabel label="Team Members" color={d.accentColor} />
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
                  {d.members.map((m, i) => (
                    <a key={i} href={m.url} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 12, textDecoration: "none", transition: "all .2s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = d.accentColor + "66"; e.currentTarget.style.background = d.accentColor + "12"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}>
                      <div style={{ width: 34, height: 34, borderRadius: "50%", background: d.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne'", fontWeight: 800, color: "#fff", fontSize: 13, flexShrink: 0 }}>
                        {m.name[0]}
                      </div>
                      <div>
                        <div style={{ color: "#e8eaf0", fontWeight: 600, fontSize: 13 }}>{m.name}</div>
                        {m.role && <div style={{ color: d.accentColor, fontSize: 11, fontWeight: 600 }}>{m.role}</div>}
                      </div>
                      <span style={{ color: "#4a5568", fontSize: 12 }}>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "certificates" && (
            <div>
              <ModalLabel label="Certificates" color={d.accentColor} />
              <p style={{ color: "#8892a4", fontSize: 13, marginTop: 6, marginBottom: 4 }}>Click any certificate to view full size.</p>
              <MediaGallery items={media.certificates} accentColor={d.accentColor} emptyMsg="No certificates added yet." />
            </div>
          )}

          {activeTab === "photos" && (
            <div>
              <ModalLabel label="Project Photos" color={d.accentColor} />
              <p style={{ color: "#8892a4", fontSize: 13, marginTop: 6, marginBottom: 4 }}>Click any photo to view full size.</p>
              <MediaGallery items={media.photos} accentColor={d.accentColor} emptyMsg="No photos added yet." />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

function ModalLabel({ label, color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 3, height: 16, background: color, borderRadius: 4 }} />
      <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: color }}>{label}</span>
    </div>
  );
}

function SectionLabel({ label, centered }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4, justifyContent: centered ? "center" : "flex-start" }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00f5c4", display: "inline-block" }} />
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00f5c4" }}>{label}</span>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [heroVisible, setHeroVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [stackIndex, setStackIndex] = useState(0);
  const typedRole = useTypewriter(ROLES);
  const [skillsRef, skillsInView] = useInView();
  const [expRef, expInView] = useInView();
  const [projRef, projInView] = useInView();
  const [contactRef, contactInView] = useInView();

  useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setStackIndex((prev) => (prev + 1) % ROTATING_STACKS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(l => document.getElementById(l.toLowerCase()));
      const scrollY = window.scrollY + 120;
      sections.forEach((sec, i) => { if (sec && scrollY >= sec.offsetTop) setActive(NAV_LINKS[i]); });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  const handleDownloadResume = () => {
    const a = document.createElement("a");
    a.href = RESUME_B64;
    a.download = "Madhan_Shanmugam_Resume.pdf";
    a.click();
  };

  return (
    <div style={{ fontFamily: "'Syne', 'DM Sans', sans-serif", background: "#080c14", color: "#e8eaf0", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080c14; }
        ::-webkit-scrollbar-thumb { background: #00f5c4; border-radius: 4px; }
        .nav-link { cursor: pointer; transition: color .2s; font-weight: 600; font-size: 14px; letter-spacing: 0.05em; text-transform: uppercase; }
        .nav-link:hover { color: #00f5c4; }
        .tag { display: inline-block; padding: 4px 12px; border-radius: 99px; font-size: 11px; font-weight: 600; letter-spacing: 0.06em; background: rgba(255,255,255,0.07); color: #a0aec0; margin: 3px; text-transform: uppercase; }
        .project-card { transition: transform .3s, box-shadow .3s, border-color .3s; cursor: pointer; }
        .project-card:hover { transform: translateY(-6px) scale(1.01); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
        .strength-chip { transition: transform .2s, background .2s; }
        .strength-chip:hover { transform: scale(1.06); background: rgba(0,245,196,0.1) !important; }
        .glow-btn { transition: transform .2s, box-shadow .2s; cursor: pointer; }
        .glow-btn:hover { transform: translateY(-2px); box-shadow: 0 0 28px #00f5c480; }
        .resume-btn { transition: all .2s; cursor: pointer; }
        .resume-btn:hover { transform: translateY(-2px); background: #00f5c4 !important; color: #080c14 !important; box-shadow: 0 0 24px #00f5c450; }
        .grid-bg { background-image: linear-gradient(rgba(0,245,196,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,196,0.04) 1px, transparent 1px); background-size: 40px 40px; }
        .fade-in { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
        .fade-in.visible { opacity: 1; transform: none; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }
        @keyframes photo-ring { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        @keyframes blink-cursor { 0%,100%{opacity:1} 50%{opacity:0} }

        /* Dynamic Rotating Stack Animations */
        .stack-carousel-item { transition: opacity 0.5s ease, transform 0.5s ease; opacity: 0; transform: translateY(10px); display: none; }
        .stack-carousel-item.active { opacity: 1; transform: translateY(0); display: flex; }

        /* MOBILE RESPONSIVE MEDIA QUERIES */
        @media (max-width: 991px) {
          nav { padding: 0 24px !important; }
          .nav-link { display: none !important; }
          .hero-container-row { flex-direction: column-reverse !important; text-align: center !important; gap: 40px !important; padding-top: 60px !important; }
          .hero-text-container { flex: 1 1 100% !important; align-items: center !important; }
          .hero-heading-block h1 { font-size: 42px !important; text-align: center !important; }
          .hero-subtitle-block { justify-content: center !important; }
          .hero-desc-block p { margin: 0 auto !important; text-align: center !important; }
          .hero-carousel-block { justify-content: center !important; margin: 15px 0 !important; width: 100% !important; }
          .hero-buttons-block { justify-content: center !important; gap: 12px !important; width: 100% !important; }
          .hero-stats-block { justify-content: center !important; gap: 32px !important; width: 100% !important; }
          .hero-photo-container { order: 1 !important; margin-bottom: 10px !important; width: 100% !important; display: flex !important; justify-content: center !important; }
          .experience-container { padding-left: 20px !important; }
          .experience-line { left: 0 !important; }
          .experience-node { left: -26px !important; }
          .experience-card-inner { padding: 20px !important; }
          .experience-header-flex { flex-direction: column !important; align-items: flex-start !important; gap: 8px !important; }
          .skills-grid-container { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)) !important; }
          .strengths-chips-flex { justify-content: center !important; }
          .education-card-inner { padding: 16px !important; }
          .contact-links-list { width: 100% !important; max-width: 100% !important; padding: 0 10px !important; }
          .contact-link-item { max-width: 100% !important; }
          .footer-container { flex-direction: column !important; text-align: center !important; gap: 16px !important; }
          .modal-content-container { margin-top: 10px !important; margin-bottom: 10px !important; max-width: 95% !important; }
          .modal-header-container { padding: 24px 20px 20px !important; }
          .modal-header-container h2 { font-size: 24px !important; }
          .modal-badges-flex { gap: 8px !important; margin-top: 12px !important; }
          .modal-body-container { padding: 20px 16px 28px !important; gap: 24px !important; }
          .global-award-container { padding: 16px 20px !important; }
          .modal-tab-bar { padding: 0 16px !important; }
          .modal-tab-bar button { padding: 12px 14px !important; font-size: 12px !important; }
          .media-gallery-grid { grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)) !important; gap: 10px !important; }
        }
        @media (max-width: 479px) {
          nav { padding: 0 16px !important; }
          .hero-heading-block h1 { font-size: 32px !important; }
          .hero-buttons-block { flex-direction: column !important; width: 100% !important; gap: 12px !important; }
          .hero-buttons-block button { width: 100% !important; text-align: center !important; margin: 0 !important; }
          .hero-stats-block { gap: 12px !important; justify-content: center !important; }
          .hero-photo-wrapper, .hero-photo-wrapper img { width: 220px !important; height: 220px !important; }
          .modal-header-container h2 { font-size: 20px !important; }
          .stack-carousel-item { justify-content: center !important; gap: 8px !important; }
          .stack-tag-badge { padding: 6px 10px !important; font-size: 11px !important; }
          .media-gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* MODAL */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, backdropFilter: "blur(18px)", background: "rgba(8,12,20,0.82)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "0 5vw", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <span style={{ fontFamily: "'Syne'", fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em", color: "#00f5c4" }}>
          MS<span style={{ color: "#e8eaf0" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {NAV_LINKS.map(l => (
            <span key={l} className="nav-link" onClick={() => scrollTo(l)} style={{ color: active === l ? "#00f5c4" : "#8892a4" }}>{l}</span>
          ))}
          <button className="resume-btn" onClick={handleDownloadResume}
            style={{ padding: "8px 20px", borderRadius: 8, background: "transparent", color: "#00f5c4", border: "1px solid #00f5c4", fontFamily: "'Syne'", fontWeight: 700, fontSize: 12, letterSpacing: "0.07em", textTransform: "uppercase" }}>
            ↓ Resume
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" className="grid-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 5vw 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,196,0.12) 0%, transparent 70%)", pointerEvents: "none", animation: "float 7s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "15%", left: "-5%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.09) 0%, transparent 70%)", pointerEvents: "none", animation: "float 9s ease-in-out infinite reverse" }} />

        <div className="hero-container-row" style={{ maxWidth: 1100, margin: "0 auto", width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 48 }}>
          {/* Left - Content */}
          <div className="hero-text-container" style={{ flex: "1 1 55%", display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "all .6s ease" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", border: "1px solid rgba(0,245,196,0.3)", borderRadius: 99, fontSize: 12, fontWeight: 600, color: "#00f5c4", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00f5c4", display: "inline-block", animation: "pulse-dot 1.8s infinite" }} />
                Available for Opportunities
              </span>
            </div>

            <div className="hero-heading-block" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(30px)", transition: "all .7s .1s ease" }}>
              <h1 style={{ fontFamily: "'Syne'", fontWeight: 800, fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1, letterSpacing: "-0.03em", color: "#fff" }}>
                Madhan<br />
                <span style={{ WebkitTextStroke: "2px #00f5c4", color: "transparent" }}>Shanmugam</span>
              </h1>
            </div>

            {/* ── TYPEWRITER SUBTITLE ── */}
            <div className="hero-subtitle-block" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "all .7s .2s ease", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 40, height: 2, background: "#00f5c4", flexShrink: 0 }} />
              <span style={{ fontSize: 16, fontWeight: 700, color: "#e2e8f0", letterSpacing: "0.02em", display: "inline-flex", alignItems: "center", minHeight: "1.5em" }}>
                <span style={{ color: "#00f5c4" }}>{typedRole}</span>
                <span style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1.1em",
                  background: "#00f5c4",
                  marginLeft: "3px",
                  borderRadius: "1px",
                  verticalAlign: "middle",
                  animation: "blink-cursor 1s step-end infinite",
                }} />
              </span>
            </div>

            <div className="hero-desc-block" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "all .7s .3s ease", maxWidth: 540 }}>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#8892a4", fontWeight: 300 }}>
                Passionate tech enthusiast immersed in AI, Data Science & SQL. As an elite hackathon champion and cross-functional team lead, I specialize in architecting production-ready full-stack ecosystems using Next.js and React Native, translating complex computational problems into highly intuitive, user-centric software solutions that deliver high real-world scalability.
              </p>
            </div>

            {/* Dynamic Rotating Tech Stack Carousel */}
            <div className="hero-carousel-block" style={{ display: "flex", alignItems: "center", minHeight: "44px", width: "100%", opacity: heroVisible ? 1 : 0, transition: "opacity 0.6s ease" }}>
              {ROTATING_STACKS.map((stack, groupIndex) => (
                <div key={groupIndex} className={`stack-carousel-item ${groupIndex === stackIndex ? "active" : ""}`} style={{ gap: "10px", flexWrap: "wrap", width: "100%" }}>
                  {stack.map((item, idx) => (
                    <span key={idx} className="stack-tag-badge" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: item.bg, border: `1px solid ${item.border}`, borderRadius: "10px", padding: "6px 14px", fontSize: "13px", fontWeight: "600", color: item.color, transition: "all 0.3s ease", boxShadow: `0 2px 8px ${item.color}10` }}>
                      <span>{item.icon}</span> {item.name}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            <div className="hero-buttons-block" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "all .7s .4s ease", display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button className="glow-btn" onClick={() => scrollTo("contact")} style={{ padding: "13px 28px", borderRadius: 8, background: "#00f5c4", color: "#080c14", border: "none", cursor: "pointer", fontFamily: "'Syne'", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Get In Touch
              </button>
              <button className="glow-btn" onClick={handleDownloadResume} style={{ padding: "13px 28px", borderRadius: 8, background: "transparent", color: "#e8eaf0", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", fontFamily: "'Syne'", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                ↓ Download Resume
              </button>
            </div>

            <div className="hero-stats-block" style={{ opacity: heroVisible ? 1 : 0, transition: "all .7s .5s ease", display: "flex", gap: 36, flexWrap: "wrap", marginTop: 8 }}>
              {[["2", "Hackathon Wins"], ["3+", "Internships"], ["500+", "Teams Beaten"], ["MSc", "Software Systems"]].map(([num, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Syne'", fontWeight: 800, fontSize: 28, color: "#00f5c4", lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: 11, color: "#8892a4", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.07em" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Photo */}
          <div className="hero-photo-container" style={{ flex: "1 1 35%", opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(30px) scale(0.95)", transition: "all .8s .3s ease", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            <div className="hero-photo-wrapper" style={{ position: "relative", width: 280, height: 280 }}>
              <div style={{ position: "absolute", inset: -10, borderRadius: "50%", border: "2px dashed rgba(0,245,196,0.3)", animation: "photo-ring 20s linear infinite" }} />
              <div style={{ position: "absolute", inset: -20, borderRadius: "50%", border: "1px solid rgba(0,245,196,0.12)" }} />
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(circle at 50% 100%, rgba(0,245,196,0.25), transparent 70%)", zIndex: 0 }} />
              <img src={PHOTO_URL} alt="Madhan Shanmugam" style={{ width: 280, height: 280, borderRadius: "50%", objectFit: "cover", objectPosition: "center top", position: "relative", zIndex: 1, border: "3px solid rgba(0,245,196,0.4)", display: "block" }} />
              <div style={{ position: "absolute", bottom: 10, right: -10, background: "#0d1220", border: "1px solid rgba(0,245,196,0.4)", borderRadius: 12, padding: "8px 14px", zIndex: 2, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
                <div style={{ fontSize: 10, color: "#8892a4", textTransform: "uppercase", letterSpacing: "0.08em" }}>Based in</div>
                <div style={{ fontSize: 13, color: "#00f5c4", fontWeight: 700 }}>Coimbatore 🇮🇳</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" ref={expRef} style={{ padding: "100px 5vw", background: "#0a0e18" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionLabel label="Experience" />
          <h2 style={{ fontFamily: "'Syne'", fontWeight: 800, fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.02em", marginBottom: 56, marginTop: 12 }}>
            Where I've <span style={{ color: "#00f5c4" }}>Worked</span>
          </h2>
          <div className="experience-container" style={{ position: "relative", paddingLeft: 32 }}>
            <div className="experience-line" style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #00f5c4, #a855f7, transparent)" }} />
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className={`fade-in ${expInView ? "visible" : ""}`} style={{ marginBottom: 48, transition: `opacity .7s ${i * 0.15}s ease, transform .7s ${i * 0.15}s ease`, position: "relative" }}>
                <div className="experience-node" style={{ position: "absolute", left: -38, top: 4, width: 14, height: 14, borderRadius: "50%", background: exp.color, boxShadow: `0 0 0 3px #0a0e18, 0 0 0 5px ${exp.color}55` }} />
                <div className="experience-card-inner" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "28px 32px" }}>
                  <div className="experience-header-flex" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                    <span style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: 18, color: "#fff" }}>{exp.role}</span>
                    <span style={{ fontSize: 12, color: "#8892a4", padding: "4px 12px", background: "rgba(255,255,255,0.05)", borderRadius: 99 }}>{exp.period}</span>
                  </div>
                  <div style={{ color: exp.color, fontWeight: 600, fontSize: 14, marginBottom: 16 }}>{exp.company} · {exp.location}</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ color: exp.color, marginTop: 3, flexShrink: 0 }}>▸</span>
                        <span style={{ fontSize: 14, color: "#a0aec0", lineHeight: 1.65 }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" ref={projRef} style={{ padding: "100px 5vw", background: "#080c14" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionLabel label="Projects" />
          <h2 style={{ fontFamily: "'Syne'", fontWeight: 800, fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.02em", marginBottom: 12, marginTop: 12 }}>
            Hackathon <span style={{ color: "#00f5c4" }}>Wins</span>
          </h2>
          <p style={{ color: "#8892a4", fontSize: 14, marginBottom: 48 }}>Click on any project card to explore full details →</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {PROJECTS.map((proj, i) => (
              <div key={i} className={`project-card fade-in ${projInView ? "visible" : ""}`}
                onClick={() => setSelectedProject(proj)}
                style={{ transition: `opacity .7s ${i * 0.15}s ease, transform .7s ${i * 0.15}s ease`, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", top: 14, right: 14, zIndex: 3, background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 99, padding: "4px 10px", fontSize: 10, color: "rgba(255,255,255,0.6)", fontWeight: 600, letterSpacing: "0.06em" }}>Click For More Details</div>
                <div style={{ background: proj.gradient, padding: "24px 28px 20px", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
                  <div style={{ position: "relative" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", background: "rgba(0,0,0,0.25)", padding: "4px 10px", borderRadius: 99 }}>{proj.award}</span>
                    <h3 style={{ fontFamily: "'Syne'", fontWeight: 800, fontSize: 26, color: "#fff", marginTop: 12, lineHeight: 1.1 }}>{proj.title}</h3>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>{proj.subtitle}</p>
                  </div>
                </div>
                <div style={{ padding: "22px 28px 28px" }}>
                  <div style={{ fontSize: 11, color: "#8892a4", marginBottom: 12, fontWeight: 500 }}>{proj.event} · {proj.date}</div>
                  <p style={{ fontSize: 14, color: "#a0aec0", lineHeight: 1.7, marginBottom: 18 }}>{proj.description}</p>
                  <div>{proj.tags.slice(0,4).map(t => <span key={t} className="tag">{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" ref={skillsRef} style={{ padding: "100px 5vw", background: "#0a0e18" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionLabel label="Skills" />
          <h2 style={{ fontFamily: "'Syne'", fontWeight: 800, fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.02em", marginBottom: 56, marginTop: 12 }}>
            Tech <span style={{ color: "#00f5c4" }}>Arsenal</span>
          </h2>
          <div className="skills-grid-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {SKILLS.map((skill, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "18px 22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ fontSize: 18 }}>{skill.icon}</span>
                    <span style={{ fontWeight: 600, fontSize: 14, color: "#e8eaf0" }}>{skill.name}</span>
                  </div>
                  <span style={{ fontSize: 12, color: "#00f5c4", fontWeight: 700 }}>{skill.level}%</span>
                </div>
                <AnimatedBar level={skill.level} color="#00f5c4" inView={skillsInView} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 64 }}>
            <h3 style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: 24, marginBottom: 28, color: "#fff" }}>Strengths</h3>
            <div className="strengths-chips-flex" style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              {STRENGTHS.map((s, i) => (
                <div key={i} className="strength-chip" style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 22px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 12, cursor: "default" }}>
                  <span style={{ fontSize: 20 }}>{s.icon}</span>
                  <span style={{ fontWeight: 600, fontSize: 14, color: "#e8eaf0" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 64 }}>
            <h3 style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: 24, marginBottom: 28, color: "#fff" }}>Education</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { degree: "MSc. Software Systems", year: "08/2022-05/2027", school: "KG College of Arts and Science, Coimbatore", color: "#00f5c4" },
                { degree: "SSLC & HSC", year: "06/2008-04/2022", school: "Sindhi Vidyalaya Matriculation Higher Secondary School, Coimbatore", color: "#a855f7" },
              ].map((edu, i) => (
                <div key={i} className="education-card-inner" style={{ display: "flex", gap: 20, alignItems: "flex-start", background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ width: 3, alignSelf: "stretch", background: edu.color, borderRadius: 4, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: "'Syne'", fontWeight: 700, fontSize: 16, color: "#fff" }}>{edu.degree}</div>
                    <div style={{ color: edu.color, fontWeight: 600, fontSize: 12, margin: "4px 0" }}>{edu.year}</div>
                    <div style={{ color: "#8892a4", fontSize: 13 }}>{edu.school}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={contactRef} style={{ padding: "100px 5vw 80px", background: "#080c14" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <SectionLabel label="Contact" centered />
          <h2 style={{ fontFamily: "'Syne'", fontWeight: 800, fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-0.02em", marginBottom: 18, marginTop: 12 }}>
            Let's <span style={{ color: "#00f5c4" }}>Connect</span>
          </h2>
          <p style={{ color: "#8892a4", fontSize: 16, lineHeight: 1.7, marginBottom: 48 }}>
            I'm always open to new opportunities, collaborations, and exciting projects. Drop me a message!
          </p>
          <div className={`fade-in ${contactInView ? "visible" : ""}`} style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
            <div className="contact-links-list" style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center", width: "100%" }}>
              {[
                { icon: "✉", label: "madhanshanmugam556@gmail.com", href: "mailto:madhanshanmugam556@gmail.com" },
                { icon: "📞", label: "+91 93449 07744", href: "tel:+919344907744" },
                { icon: "🔗", label: "linkedin.com/in/madhans23", href: "https://linkedin.com/in/madhans23" },
                { icon: "💻", label: "github.com/MadhanS2302", href: "https://github.com/MadhanS2302" },
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="contact-link-item"
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 28px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, width: "100%", maxWidth: 460, textDecoration: "none", color: "#a0aec0", transition: "all .2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#00f5c455"; e.currentTarget.style.background = "rgba(0,245,196,0.05)"; e.currentTarget.style.color = "#00f5c4"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.color = "#a0aec0"; }}>
                  <span style={{ fontSize: 20 }}>{item.icon}</span>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{item.label}</span>
                </a>
              ))}
            </div>
            <button className="glow-btn" onClick={handleDownloadResume}
              style={{ marginTop: 16, padding: "14px 36px", borderRadius: 10, background: "#00f5c4", color: "#080c14", border: "none", fontFamily: "'Syne'", fontWeight: 700, fontSize: 14, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              ↓ Download My Resume
            </button>
          </div>
          <div style={{ marginTop: 48, color: "#4a5568", fontSize: 13 }}>
            Based in <span style={{ color: "#00f5c4" }}>Coimbatore, India</span> · Open to Remote & Hybrid
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-container" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "24px 5vw", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#080c14", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontFamily: "'Syne'", fontWeight: 700, color: "#00f5c4", fontSize: 18 }}>Madhan Shanmugam</span>
        <span style={{ color: "#4a5568", fontSize: 12 }}>All Rights Reserved Madhan Shanmugam · 2026</span>
      </footer>
    </div>
  );
}