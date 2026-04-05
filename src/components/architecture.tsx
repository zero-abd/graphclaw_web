const agents = [
  {
    name: "DevOps",
    color: "text-red-400 border-red-500/30 bg-red-500/5",
    desc: "Infra, deployments, Base44, Loveable, shell",
  },
  {
    name: "Planner",
    color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/5",
    desc: "Task breakdown, project management, priorities",
  },
  {
    name: "Builder",
    color: "text-green-400 border-green-500/30 bg-green-500/5",
    desc: "Code writing, file editing, shell, git",
  },
  {
    name: "Researcher",
    color: "text-blue-400 border-blue-500/30 bg-blue-500/5",
    desc: "Web search, knowledge extraction, memory synthesis",
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Multi-Agent <span className="text-accent">Architecture</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            A Coordinator classifies your intent with{" "}
            <code className="text-accent font-mono text-base">by llm()</code>{" "}
            and routes to the right specialist.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* User message */}
          <div className="rounded-xl border border-card-border bg-card px-6 py-3 text-sm font-medium">
            User Message
          </div>

          <Arrow />

          {/* Coordinator */}
          <div className="rounded-xl border-2 border-accent/50 bg-accent/5 px-8 py-4 text-center">
            <div className="text-lg font-bold text-accent">Coordinator Agent</div>
            <div className="text-xs text-muted mt-1 font-mono">
              classify_intent() by llm()
            </div>
          </div>

          <Arrow />

          {/* Specialist agents */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className={`rounded-xl border p-4 text-center transition-all hover:scale-105 ${agent.color}`}
              >
                <div className="text-base font-bold">{agent.name}</div>
                <div className="text-xs text-muted mt-1.5 leading-relaxed">
                  {agent.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-card-border bg-card/50 px-6 py-4 max-w-lg text-center">
            <p className="text-sm text-muted">
              All agents share the same <span className="text-accent font-semibold">memory graph</span>.
              A fact left by DevOps about a failed deployment is immediately
              visible to Coordinator on the next turn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-px h-6 bg-card-border" />
      <svg className="w-4 h-4 text-muted" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
