import ProjectCard from "./ProjectCard";

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const HospitalIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const MicIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

const ClipboardIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const projects = [
  {
    name: "Adamrit Healthcare",
    tagline: "AI-Powered Patient Care Management",
    description:
      "Comprehensive hospital management platform with AI-driven diagnostics, patient flow optimization, and automated compliance tracking. NABH-accredited.",
    tags: ["Next.js", "Supabase", "AI/ML", "NABH"],
    color: "from-rose-500 to-pink-600",
    icon: <HospitalIcon />,
    url: "https://adamrit.com",
  },
  {
    name: "NeuroSense 360",
    tagline: "EEG/QEEG Brain Wellness SaaS",
    description:
      "Advanced brain wellness platform offering EEG analysis, QEEG brain mapping, and personalized neurofeedback protocols for ADHD, memory, and mood disorders.",
    tags: ["React", "Supabase", "EEG", "Brain Mapping"],
    color: "from-purple-500 to-violet-600",
    icon: <BrainIcon />,
    url: "https://neurosense360.site",
  },
  {
    name: "IHMS — Hospital Management",
    tagline: "Intelligent Hospital Management System",
    description:
      "Multi-specialty hospital management with EMR/EHR, OPD/IPD management, pharmacy, lab, billing, and AI-powered clinical decision support.",
    tags: ["Enterprise", "EMR/EHR", "Billing", "AI"],
    color: "from-blue-500 to-cyan-500",
    icon: <HeartIcon />,
  },
  {
    name: "Hope Hospital",
    tagline: "NABH-Accredited Super Specialty Hospital",
    description:
      "Central India's first NABH-accredited super specialty hospital with comprehensive AI-powered healthcare solutions. Operating since 2005.",
    tags: ["NABH", "Super Specialty", "Since 2005"],
    color: "from-red-500 to-rose-600",
    icon: <HospitalIcon />,
    url: "https://hopehospital.com",
  },
  {
    name: "Ayushman Nagpur Hospital",
    tagline: "Orthopedic & Spine Surgery",
    description:
      "Nagpur's premier orthopedic facility for joint replacement, spine surgery, and mobility restoration. Operating since 2018.",
    tags: ["Orthopedic", "Spine", "Joint Replacement"],
    color: "from-cyan-500 to-teal-500",
    icon: <HospitalIcon />,
    url: "https://ayushmannagpurhospital.com",
  },
  {
    name: "AI Surgeon Pilot",
    tagline: "Real-Time Surgical Guidance",
    description:
      "AI-powered surgical assistance with real-time predictive analytics, intra-operative decision support, and post-op outcome tracking.",
    tags: ["Computer Vision", "AI/ML", "Real-time", "IoT"],
    color: "from-emerald-500 to-teal-500",
    icon: <HeartIcon />,
    url: "https://www.aisurgeonpilot.com",
  },
  {
    name: "CliniVoice",
    tagline: "AI Voice Agents for Clinics",
    description:
      "Hindi/Hinglish voice AI agents for patient scheduling, prescription reminders, follow-up calls, and clinical workflow automation.",
    tags: ["Voice AI", "NLP", "Hindi", "Telephony"],
    color: "from-amber-500 to-orange-500",
    icon: <MicIcon />,
  },
  {
    name: "RSeva Health",
    tagline: "Telemedicine Platform",
    description:
      "Video consultation, e-prescriptions, remote patient monitoring, and integrated pharmacy ordering for rural and urban healthcare.",
    tags: ["Telemedicine", "Video", "E-Prescription"],
    color: "from-sky-500 to-blue-600",
    icon: <UserIcon />,
    url: "https://www.rseva.health",
  },
  {
    name: "HospiView",
    tagline: "Hospital Bed Tracking & Monitoring",
    description:
      "Real-time bed occupancy tracking, admission/discharge management, and capacity planning with predictive analytics.",
    tags: ["IoT", "Real-time", "Analytics", "Dashboard"],
    color: "from-indigo-500 to-purple-500",
    icon: <HospitalIcon />,
    url: "https://hospiview-app.vercel.app",
  },
  {
    name: "NABH Compliance",
    tagline: "Quality Management & Accreditation",
    description:
      "Automated NABH accreditation tracking, quality indicator monitoring, audit scheduling, and compliance documentation management.",
    tags: ["Compliance", "NABH", "Quality", "Audit"],
    color: "from-green-500 to-emerald-600",
    icon: <ClipboardIcon />,
    url: "https://nabh.online",
  },
  {
    name: "Limitless Brain Wellness",
    tagline: "Personalized Brain Wellness Programs",
    description:
      "Neurofeedback-based wellness programs for ADHD management, memory enhancement, mood optimization, and peak cognitive performance.",
    tags: ["Neurofeedback", "Wellness", "ADHD", "Cognitive"],
    color: "from-fuchsia-500 to-pink-500",
    icon: <BrainIcon />,
  },
  {
    name: "AI Doc Office",
    tagline: "Digital Doctor Practice Management",
    description:
      "Solo practitioner tool with appointment scheduling, digital prescriptions, patient records, billing, and AI-assisted diagnosis suggestions.",
    tags: ["SaaS", "Practice Mgmt", "AI Assist"],
    color: "from-teal-500 to-cyan-600",
    icon: <UserIcon />,
    url: "https://aidocoffice.com",
  },
  {
    name: "Modern Medical Entrepreneur",
    tagline: "Healthcare Business Consulting",
    description:
      "Expert consulting platform for doctors and healthcare professionals to establish and grow successful hospitals, clinics, and medical practices.",
    tags: ["Consulting", "Entrepreneurship", "Healthcare"],
    color: "from-yellow-500 to-amber-600",
    icon: <UserIcon />,
    url: "https://modernmedicalentrepreneur.com",
  },
  {
    name: "HealthPlus",
    tagline: "Mobile Clinic Management",
    description:
      "Lightweight mobile-first clinic management for small practices — patient records, billing, inventory, and appointment management.",
    tags: ["React Native", "Mobile", "Clinic"],
    color: "from-orange-500 to-red-500",
    icon: <HeartIcon />,
  },
  {
    name: "Anohra Deep Guard AI",
    tagline: "Medical Deepfake Detection (98% Accuracy)",
    description:
      "AI-powered deepfake detection system protecting medical records, telemedicine sessions, and healthcare communications from manipulation.",
    tags: ["Deep Learning", "Security", "98% Accuracy"],
    color: "from-red-500 to-rose-600",
    icon: <BrainIcon />,
    url: "https://anohra.com",
  },
];

export default function HealthcareProjects() {
  return (
    <section id="healthcare" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-rose-400 font-medium tracking-widest uppercase">
            Healthcare & Medical AI
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Transforming{" "}
            <span className="gradient-text">Healthcare</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From NABH-accredited hospital management to AI-powered surgical guidance
            and brain wellness — our healthcare products serve millions of patients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
