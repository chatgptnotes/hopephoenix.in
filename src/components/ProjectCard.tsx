interface ProjectCardProps {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  color: string;
  icon: React.ReactNode;
  url?: string;
}

export default function ProjectCard({
  name,
  tagline,
  description,
  tags,
  color,
  icon,
  url,
}: ProjectCardProps) {
  const Wrapper = url ? "a" : "div";
  const wrapperProps = url
    ? { href: url, target: "_blank" as const, rel: "noopener noreferrer" as const }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="glass-card rounded-2xl p-6 group block h-full"
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 text-white`}
      >
        {icon}
      </div>

      <h3 className="text-lg font-bold mb-1 group-hover:text-orange-400 transition-colors">
        {name}
      </h3>
      <p className="text-sm text-orange-400/80 mb-3">{tagline}</p>
      <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-500 border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}
