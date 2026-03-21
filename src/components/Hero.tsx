export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          Co-founded by Biji Thomas & Dr. Murali BK
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Where{" "}
          <span className="gradient-text">Medicine</span>
          <br />
          Meets{" "}
          <span className="gradient-text">Machines</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          HopePhoenix is a joint venture between{" "}
          <span className="text-white font-medium">DrM Hope Softwares</span> and{" "}
          <span className="text-white font-medium">Bettroi FZE</span> — jointly building
          AI-powered solutions that transform hospitals, factories, and enterprises
          across India and the UAE.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#healthcare"
            className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "30+", label: "Products Built" },
            { value: "15+", label: "Years Experience" },
            { value: "2", label: "Countries" },
            { value: "100+", label: "Team Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-gray-600">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
