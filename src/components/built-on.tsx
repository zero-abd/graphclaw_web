const tech = [
  {
    name: "Jac / Jaseci",
    description: "AI-native full-stack language",
    url: "https://docs.jaseci.org/",
  },
  {
    name: "byLLM",
    description: "Meaning Typed Programming (by llm())",
    url: "https://docs.jaseci.org/learn/jac-byllm/",
  },
  {
    name: "LiteLLM",
    description: "Multi-provider LLM routing",
    url: "https://github.com/BerriAI/litellm",
  },
  {
    name: "nanobot",
    description: "Inspiration — personal AI agent",
    url: "https://github.com/HKUDS/nanobot",
  },
  {
    name: "openclaw",
    description: "Inspiration — skill-based AI platform",
    url: "https://github.com/openclaw/openclaw",
  },
];

export function BuiltOn() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Built On
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {tech.map((t) => (
            <a
              key={t.name}
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 rounded-xl border border-card-border bg-card/50 px-6 py-5 transition-all hover:border-accent/30 hover:bg-card min-w-[180px]"
            >
              <span className="text-sm font-semibold group-hover:text-accent transition-colors">
                {t.name}
              </span>
              <span className="text-xs text-muted text-center">{t.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
