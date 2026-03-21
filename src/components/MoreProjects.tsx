import ProjectCard from "./ProjectCard";

const SparkleIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const CameraIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const MicIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

const RobotIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const projects = [
  {
    category: "Beauty & Lifestyle",
    items: [
      {
        name: "StyleMy.Hair",
        tagline: "AI Virtual Hairstyle Try-On",
        description:
          "AI-powered platform that lets users preview different hairstyles digitally before visiting the salon. Virtual try-on with facial detection.",
        tags: ["AI", "Beauty Tech", "Computer Vision"],
        color: "from-pink-500 to-rose-500",
        icon: <SparkleIcon />,
        url: "https://stylemy.hair",
      },
      {
        name: "Headz",
        tagline: "Advanced Virtual Hair Try-On",
        description:
          "Next-gen virtual hair try-on with AI-powered facial detection, realistic rendering, and personalized style recommendations.",
        tags: ["AI", "AR", "Beauty"],
        color: "from-fuchsia-500 to-pink-600",
        icon: <SparkleIcon />,
      },
    ],
  },
  {
    category: "Wedding Tech",
    items: [
      {
        name: "PreWed AI",
        tagline: "AI Pre-Wedding Photo Generation",
        description:
          "Revolutionary AI platform that creates stunning pre-wedding photos. Couples can visualize their wedding look with AI-generated imagery.",
        tags: ["AI", "Photography", "Wedding"],
        color: "from-rose-400 to-pink-500",
        icon: <CameraIcon />,
        url: "https://prewedai.com",
      },
    ],
  },
  {
    category: "Education",
    items: [
      {
        name: "AI-Shu",
        tagline: "Intelligent AI Tutoring Platform",
        description:
          "Photorealistic AI tutors with real-time adaptive learning, personalized curriculum, multi-language support, and interactive assessments.",
        tags: ["AI Tutor", "Adaptive Learning", "EdTech"],
        color: "from-emerald-500 to-green-600",
        icon: <BookIcon />,
        url: "https://ai-shu.vercel.app",
      },
    ],
  },
  {
    category: "AI Platforms",
    items: [
      {
        name: "BhashAI",
        tagline: "AI Voice Calling Agent Platform",
        description:
          "Customized voice calling agent powered by AI for intelligent customer interactions, outbound campaigns, and multi-language support.",
        tags: ["Voice AI", "Telephony", "Multi-language"],
        color: "from-orange-500 to-amber-500",
        icon: <MicIcon />,
        url: "https://bhashai.com",
      },
      {
        name: "ORMA AI Studio",
        tagline: "Google Gemini Integration Platform",
        description:
          "Comprehensive AI Studio for running and deploying AI-powered applications with Google Gemini integration and multi-model support.",
        tags: ["Gemini", "AI Studio", "Multi-model"],
        color: "from-blue-500 to-violet-500",
        icon: <RobotIcon />,
        url: "https://orma-main-kyac.vercel.app",
      },
      {
        name: "Voice Agent App",
        tagline: "Mobile Voice AI Conversations",
        description:
          "Mobile application enabling natural voice-based conversations with AI agents — real-time speech recognition and natural language processing.",
        tags: ["Mobile", "Voice", "Real-time", "NLP"],
        color: "from-cyan-500 to-blue-500",
        icon: <MicIcon />,
      },
    ],
  },
];

export default function MoreProjects() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-emerald-400 font-medium tracking-widest uppercase">
            More Innovations
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Beyond{" "}
            <span className="gradient-text">Boundaries</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Beauty tech, wedding AI, education platforms, and cutting-edge AI tools
            — innovation that touches every aspect of life.
          </p>
        </div>

        {projects.map((section) => (
          <div key={section.category} className="mb-12 last:mb-0">
            <h3 className="text-lg font-semibold text-gray-300 mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gradient-to-r from-orange-500 to-transparent" />
              {section.category}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
