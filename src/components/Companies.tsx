const companies = [
  {
    name: "DrM Hope Softwares",
    role: "Technology & Development",
    url: "https://drmhope.com",
    location: "Nagpur, India",
    description:
      "The engineering powerhouse. Founded in 2010 by Dr. B.K. Murali — a surgeon who codes with AI. DrM Hope builds all the technology products, from AI healthcare platforms to industrial IoT systems.",
    highlights: [
      "Full-stack AI development",
      "Healthcare IT specialists",
      "Industrial IoT & SCADA",
      "Voice AI & NLP",
    ],
    color: "from-rose-500 to-orange-500",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    name: "Bettroi FZE",
    role: "Business & Commercialization",
    url: "https://bettroi.com",
    location: "UAE (Free Zone)",
    description:
      "The commercial arm. Bettroi packages and delivers AI solutions to enterprises across the Middle East and globally — from oil & gas to healthcare to customer experience.",
    highlights: [
      "Enterprise AI solutions",
      "Oil & Gas automation",
      "Customer experience platforms",
      "Global market access",
    ],
    color: "from-blue-500 to-purple-500",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

export default function Companies() {
  return (
    <section id="companies" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-orange-400 font-medium tracking-widest uppercase">
            Our Companies
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Two Companies.{" "}
            <span className="gradient-text">One Vision.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            HopePhoenix unites world-class engineering from India with
            global commercial reach from the UAE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-8 group block"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center mb-6 text-white`}>
                {company.icon}
              </div>

              <h3 className="text-2xl font-bold mb-1 group-hover:text-orange-400 transition-colors">
                {company.name}
              </h3>
              <div className="text-sm text-gray-500 mb-4">
                {company.role} — {company.location}
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                {company.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {company.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
