const rows = [
  { label: "Language", nanobot: "Python", openclaw: "TypeScript", graphclaw: "Jac (compiles to Python)" },
  { label: "Memory", nanobot: "Flat .md files", openclaw: "File-based", graphclaw: "OSP property graph" },
  { label: "Memory recall", nanobot: "LLM summarization", openclaw: "File scan", graphclaw: "Indexed graph traversal + semantic" },
  { label: "Agents", nanobot: "Single agent", openclaw: "Single agent", graphclaw: "Multi-agent (5 specialists)" },
  { label: "Skills", nanobot: "SKILL.md files", openclaw: "ClawHub", graphclaw: "Dynamic directory + online install" },
  { label: "Multi-user", nanobot: "No", openclaw: "No", graphclaw: "Config scaffold present" },
  { label: "Deployment", nanobot: "pip", openclaw: "pip", graphclaw: "jac run → jac start → Kubernetes" },
  { label: "AI functions", nanobot: "LLM calls", openclaw: "LLM calls", graphclaw: "by llm() — Meaning Typed" },
];

export function Comparison() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Why <span className="text-accent">Graphclaw</span>?
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Inspired by nanobot and openclaw — rebuilt from scratch with a graph-native core.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-card-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border bg-card/80">
                <th className="text-left py-4 px-6 font-semibold text-muted" />
                <th className="text-left py-4 px-6 font-semibold text-muted">nanobot</th>
                <th className="text-left py-4 px-6 font-semibold text-muted">openclaw</th>
                <th className="text-left py-4 px-6 font-semibold text-accent">Graphclaw</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-card-border/50 ${
                    i % 2 === 0 ? "bg-transparent" : "bg-card/30"
                  }`}
                >
                  <td className="py-3.5 px-6 font-medium">{row.label}</td>
                  <td className="py-3.5 px-6 text-muted">{row.nanobot}</td>
                  <td className="py-3.5 px-6 text-muted">{row.openclaw}</td>
                  <td className="py-3.5 px-6 font-medium text-foreground">
                    {row.graphclaw}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
