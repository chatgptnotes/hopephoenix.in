import ProjectCard from "./ProjectCard";

const RocketIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const DocIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CardIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
  </svg>
);

const ChartBarIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const projects = [
  {
    name: "AgentSDR / AutoAISale",
    tagline: "AI Sales Development Representative",
    description:
      "Autonomous AI agent that handles outbound calls, emails, follow-ups, and CRM updates. Replaces manual SDR workflows with intelligent automation.",
    tags: ["AI Agent", "Sales", "CRM", "Automation"],
    color: "from-orange-500 to-red-500",
    icon: <PhoneIcon />,
    url: "https://autoaisale.com",
  },
  {
    name: "Proposify AI",
    tagline: "AI Proposal Generation & Pricing",
    description:
      "Generate professional proposals with AI — auto-pricing, scope estimation, competitive analysis, and one-click client delivery.",
    tags: ["AI", "Proposals", "Pricing", "SaaS"],
    color: "from-violet-500 to-purple-600",
    icon: <DocIcon />,
    url: "https://proposifyai.com",
  },
  {
    name: "PulseOfProject",
    tagline: "Real-Time Project Management",
    description:
      "AI-enhanced project management with real-time timelines, resource allocation, risk prediction, and automated status reporting.",
    tags: ["Project Mgmt", "AI", "Analytics"],
    color: "from-emerald-500 to-green-600",
    icon: <ChartBarIcon />,
    url: "https://pulseofproject.com",
  },
  {
    name: "Pulse of People",
    tagline: "Voter Sentiment Analysis Platform",
    description:
      "Real-time voter sentiment tracking, demographic analysis, trend prediction, and campaign optimization for political analytics.",
    tags: ["Sentiment", "Analytics", "NLP", "Politics"],
    color: "from-blue-500 to-indigo-600",
    icon: <UsersIcon />,
  },
  {
    name: "4C Secure",
    tagline: "Digital Asset Security Platform",
    description:
      "Enterprise-grade digital asset protection with multi-factor authentication, encryption, access control, and threat detection.",
    tags: ["Security", "Encryption", "Enterprise"],
    color: "from-slate-500 to-zinc-600",
    icon: <ShieldIcon />,
    url: "https://4-csecure-one.vercel.app",
  },
  {
    name: "Linkist",
    tagline: "NFC Business Cards + AI Contact Mgmt",
    description:
      "Tap-to-share NFC business cards with AI-powered contact enrichment, follow-up reminders, and CRM integration.",
    tags: ["NFC", "AI", "Networking", "CRM"],
    color: "from-sky-500 to-cyan-500",
    icon: <CardIcon />,
    url: "https://linkist.2men.co",
  },
  {
    name: "AIVA — AI Virtual Assistant",
    tagline: "Custom Agentic AI for Enterprises",
    description:
      "Build and deploy custom AI virtual assistants with multi-channel support (WhatsApp, Web, Voice), knowledge base integration, and workflow automation.",
    tags: ["AI Agent", "Multi-channel", "Enterprise"],
    color: "from-pink-500 to-rose-600",
    icon: <RocketIcon />,
  },
  {
    name: "Privata",
    tagline: "Offline AI Assistant — No Internet Required",
    description:
      "Fully offline AI assistant for sensitive environments. Runs on-device with local LLMs — no data ever leaves your machine.",
    tags: ["Offline AI", "Privacy", "Local LLM", "On-Device"],
    color: "from-gray-500 to-slate-600",
    icon: <ShieldIcon />,
  },
];

export default function EnterpriseProjects() {
  return (
    <section id="enterprise" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-purple-400 font-medium tracking-widest uppercase">
            Enterprise & AI Platforms
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Enterprise{" "}
            <span className="gradient-text">Intelligence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            AI sales agents, project management, security platforms, and custom
            virtual assistants — powering the next generation of enterprise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
