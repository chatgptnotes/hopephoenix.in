const technologies = [
  { name: "Next.js", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Supabase", category: "Backend" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "OpenAI", category: "AI/ML" },
  { name: "Google AI", category: "AI/ML" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Vercel", category: "Deploy" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MQTT", category: "IoT" },
  { name: "Modbus", category: "Industrial" },
  { name: "OPC-UA", category: "Industrial" },
];

export default function TechStack() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-300">
            Technologies We Work With
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-gray-400 hover:text-orange-400 hover:border-orange-500/30 transition-all cursor-default"
            >
              <span className="font-medium">{tech.name}</span>
              <span className="text-[10px] text-gray-600 ml-2">{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
