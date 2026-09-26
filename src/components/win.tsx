export function Win() {
  return (
    <section id="jachacks" className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card/60 to-card/30 p-8 sm:p-10">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            JacHacks 2026 · University of Michigan
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            1st place out of 200+ teams
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Graphclaw won JacHacks 2026, the hackathon for building on Jac and
            Jaseci. The idea was a different memory architecture for
            OpenClaw-style agents: instead of flat files, the assistant&apos;s
            identity, skills, MCP servers, and conversations live in one
            knowledge graph, and Jac walkers route work across specialist
            agents that all read from it.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Stat value="1st" label="of 200+ teams" />
            <Stat value="5" label="chat channels + CLI" />
            <Stat value="4" label="specialist agents" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-card-border bg-background/40 px-4 py-3">
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted mt-0.5">{label}</div>
    </div>
  );
}
