const rows = [
  { label: "Implementation", nanobot: "Python, lightweight assistant", openclaw: "TypeScript, web-first agent runtime", graphclaw: "Jac + Python, graph-native runtime" },
  { label: "Memory", nanobot: "Flat markdown / file memory", openclaw: "Files, skills, runtime state", graphclaw: "Workspace-backed knowledge graph" },
  { label: "Agents", nanobot: "Single assistant", openclaw: "Agent runtime", graphclaw: "Coordinator + 4 specialist agents" },
  { label: "Skills", nanobot: "Limited next to claw ecosystems", openclaw: "Strong SKILL.md ecosystem", graphclaw: "Native skills + SKILL.md + ClawHub" },
  { label: "MCP", nanobot: "Not the focus", openclaw: "Major part of its direction", graphclaw: "Configured servers exposed to all agents" },
  { label: "Operator UI", nanobot: "Usually minimal", openclaw: "Important product surface", graphclaw: "Jac-native dashboard with a live graph view" },
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
            Inspired by nanobot and OpenClaw. It keeps the claw-style agent and skill feel, and re-centers the runtime on a persistent knowledge graph.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-card-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border bg-card/80">
                <th className="text-left py-4 px-6 font-semibold text-muted" />
                <th className="text-left py-4 px-6 font-semibold text-muted">nanobot</th>
                <th className="text-left py-4 px-6 font-semibold text-muted">OpenClaw</th>
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
