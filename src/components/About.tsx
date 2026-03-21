export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-sm text-orange-400 font-medium tracking-widest uppercase">
            About HopePhoenix
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Two Visionaries.{" "}
            <span className="gradient-text">One Mission.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              HopePhoenix is co-founded by{" "}
              <span className="text-white font-semibold">Biji Thomas (BT)</span> and{" "}
              <span className="text-white font-semibold">Dr. B.K. Murali</span> — combining
              deep business expertise with hands-on engineering and clinical experience
              to bridge the gap between industry and technology.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              <span className="text-white font-medium">Biji Thomas</span> brings strategic
              vision, global business development, and enterprise leadership from the UAE,
              while <span className="text-white font-medium">Dr. Murali</span> — an orthopedic
              surgeon turned AI engineer — brings 15+ years of medical and software
              engineering expertise from India. Together, they lead a team of 100+ engineers,
              building products that solve real problems in hospitals, factories, and enterprises.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our philosophy is simple: <span className="text-orange-400 font-medium">technology should serve humanity</span>.
              Every product we build is designed to make healthcare more accessible,
              industry more efficient, and businesses more intelligent.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🏥", label: "Hope Hospital", sub: "NABH-accredited since 2005" },
                { icon: "🏗️", label: "Ayushman Nagpur", sub: "Orthopedic & Spine Surgery" },
                { icon: "💻", label: "DrM Hope Softwares", sub: "Est. 2010, Nagpur" },
                { icon: "🌍", label: "Bettroi FZE", sub: "UAE Free Zone Entity" },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm font-semibold text-white">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Healthcare AI",
                count: "12+",
                desc: "Products across hospital management, telemedicine, brain wellness, and surgical AI",
                color: "from-rose-500/20 to-rose-500/5",
                border: "border-rose-500/20",
              },
              {
                title: "Industrial Automation",
                count: "8+",
                desc: "SCADA, PLC automation, smart manufacturing, and energy grid systems",
                color: "from-blue-500/20 to-blue-500/5",
                border: "border-blue-500/20",
              },
              {
                title: "Enterprise AI",
                count: "10+",
                desc: "AI sales agents, project management, security, and virtual assistants",
                color: "from-purple-500/20 to-purple-500/5",
                border: "border-purple-500/20",
              },
            ].map((cat) => (
              <div
                key={cat.title}
                className={`rounded-2xl p-6 bg-gradient-to-r ${cat.color} border ${cat.border}`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl font-bold text-white">{cat.count}</span>
                  <span className="text-lg font-semibold text-white">{cat.title}</span>
                </div>
                <p className="text-sm text-gray-400">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
