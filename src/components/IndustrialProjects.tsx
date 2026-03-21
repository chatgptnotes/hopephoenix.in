import ProjectCard from "./ProjectCard";

const CogIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChipIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const BoltIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const DropletIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-4 4.5-7 8-7 11a7 7 0 1014 0c0-3-3-6.5-7-11z" />
  </svg>
);

const projects = [
  {
    name: "SCADA.work",
    tagline: "Water Distribution SCADA System",
    description:
      "Full-stack SCADA for water treatment and distribution — automated monitoring, leak detection, pressure management, and integrated billing.",
    tags: ["SCADA", "IoT", "Water", "Billing"],
    color: "from-cyan-500 to-blue-600",
    icon: <DropletIcon />,
    url: "https://scada.work",
  },
  {
    name: "PLCAutoPilot",
    tagline: "AI PLC Programming from Natural Language",
    description:
      "Describe your control logic in plain English — get production-ready PLC code. Supports Siemens, Allen-Bradley, and Mitsubishi PLCs.",
    tags: ["AI", "PLC", "Natural Language", "IEC 61131"],
    color: "from-orange-500 to-amber-600",
    icon: <ChipIcon />,
    url: "https://plcautopilot.com",
  },
  {
    name: "AIMS — AI P&ID Platform",
    tagline: "Intelligent Piping & Instrumentation Diagrams",
    description:
      "AI-powered P&ID creation and validation with ISA 5.1 compliance, automated symbol recognition, and intelligent design suggestions.",
    tags: ["P&ID", "ISA 5.1", "AI", "CAD"],
    color: "from-violet-500 to-purple-600",
    icon: <CogIcon />,
    url: "https://aims1.vercel.app",
  },
  {
    name: "FactoryPulse",
    tagline: "Manufacturing Execution System (85% OEE)",
    description:
      "Real-time production monitoring, OEE tracking, downtime analysis, quality management, and predictive maintenance for smart factories.",
    tags: ["MES", "OEE", "Industry 4.0", "Analytics"],
    color: "from-green-500 to-emerald-600",
    icon: <ChartIcon />,
    url: "https://factorypulse.site",
  },
  {
    name: "AutoPanelDesign",
    tagline: "AI Electrical Panel CAD",
    description:
      "Voice-powered and AI-driven electrical control panel design. Generate panel layouts, wiring diagrams, and BOMs from natural language.",
    tags: ["CAD", "Electrical", "Voice AI", "BOM"],
    color: "from-yellow-500 to-orange-500",
    icon: <BoltIcon />,
    url: "https://autopaneldesign.com",
  },
  {
    name: "Galvon",
    tagline: "Parent Brand for Industrial Intelligence",
    description:
      "Industrial intelligence platform powering Ampris, FlowNexus, and NexaProc — unified monitoring and control for energy, water, and manufacturing.",
    tags: ["Platform", "Industrial Intelligence"],
    color: "from-gray-500 to-zinc-600",
    icon: <CogIcon />,
    url: "https://galvon.in",
  },
  {
    name: "Ampris SCADA",
    tagline: "Power Grid Orchestration",
    description:
      "Web-based SCADA platform for real-time power system monitoring and control with grid visualization and automated load management.",
    tags: ["SCADA", "Grid", "Power", "Real-time"],
    color: "from-blue-500 to-indigo-600",
    icon: <BoltIcon />,
    url: "https://ampris.in",
  },
  {
    name: "FlowNexus",
    tagline: "Pipeline Telemetry & Flow Control",
    description:
      "Advanced industrial flow monitoring and management for pipelines, fluid systems, and process plants with real-time telemetry.",
    tags: ["Pipeline", "Telemetry", "Flow", "IoT"],
    color: "from-indigo-500 to-blue-600",
    icon: <DropletIcon />,
    url: "https://flownexus.work",
  },
  {
    name: "Fluxio.work",
    tagline: "Industrial Water Monitoring IoT",
    description:
      "IoT-based industrial water monitoring with sensor integration, real-time dashboards, anomaly detection, and regulatory compliance reporting.",
    tags: ["IoT", "Water", "Sensors", "Compliance"],
    color: "from-teal-500 to-cyan-600",
    icon: <DropletIcon />,
    url: "https://fluxio.work",
  },
  {
    name: "NexaProc",
    tagline: "Process Automation & Batch Control",
    description:
      "Factory automation and process SCADA for manufacturing plants with end-to-end process control, ISA-88 compliance, and quality assurance.",
    tags: ["Batch", "ISA-88", "Automation", "QA"],
    color: "from-slate-500 to-gray-600",
    icon: <CogIcon />,
    url: "https://nexaproc.in",
  },
];

export default function IndustrialProjects() {
  return (
    <section id="industrial" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-sm text-blue-400 font-medium tracking-widest uppercase">
            Industrial & Engineering Automation
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Powering{" "}
            <span className="gradient-text-blue">Industry 4.0</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            SCADA systems, AI-driven PLC programming, smart manufacturing, and
            energy grid automation — built for real-world industrial environments.
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
