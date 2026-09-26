import Image from "next/image";

const tree = `assistant_root  (Graphclaw root node)
├─ has_name ───────────▶ Name
├─ has_identity ───────▶ Identity
├─ has_soul ───────────▶ Soul
├─ speaks_with_cadence ▶ Conversation cadence
├─ runs_dream_cycle ───▶ Dream cadence (2h)
├─ has_skills ─────────▶ Skills root
│   └─ has_skill_group ▶ inherent, clawhub,
│                        workspace, shared
│       └─ has_skill ──▶ base44, loveable
└─ has_mcp ────────────▶ MCP root
    └─ has_mcp_group ──▶ servers, tools,
                         resources, prompts

per conversation:
session ▶ turns ▶ memories ─related_to─▶ memories`;

export function Memory() {
  return (
    <section id="memory" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Memory is a <span className="text-accent">graph</span>, not a file
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            The assistant starts with a seeded root graph for its identity,
            skills, and MCP servers, then grows it with every conversation. It
            is stored as JSON in your workspace, so you can read it and back it
            up.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-card-border bg-code-bg p-6">
            <div className="text-muted mb-3 text-xs font-medium uppercase tracking-wider">
              Seeded graph on first launch (real edge names)
            </div>
            <pre className="font-mono text-xs sm:text-[13px] leading-6 overflow-x-auto text-foreground/90">
              <code>{tree}</code>
            </pre>
          </div>

          <div className="space-y-4">
            <MemoryCard
              title="Confidence decay"
              description="Each memory has a confidence and a decay rate (0.01 per day by default; the seeded identity nodes don't decay). User turns start at 0.7 and assistant turns at 0.6."
              color="orange"
            />
            <MemoryCard
              title="Recall"
              description="Before each reply, the highest-confidence live memories (up to 3,000 characters) are added to the prompt. Recall walkers also search by text and type (User, Feedback, Project, Reference) and rank by confidence."
              color="blue"
            />
            <MemoryCard
              title="Dream walker"
              description="Every 2 hours: tombstones memories at zero confidence, re-validates the ones between 0.2 and 0.6, tags untagged memories with topics, and adds related_to edges."
              color="purple"
            />
          </div>
        </div>

        <figure className="mt-12">
          <div className="overflow-hidden rounded-xl border border-card-border">
            <Image
              src="/dashboard-graph.jpg"
              alt="Graphclaw's Jac dashboard, Graph Memory page: a force-directed knowledge graph of the root, identity, skills, and MCP nodes, with the core identity nodes listed beside it."
              width={1600}
              height={1000}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="mt-3 text-center text-xs text-muted">
            The local dashboard&apos;s Graph Memory page on a fresh install (24 nodes,
            19 edges), captured at <code className="font-mono">127.0.0.1:18789</code>.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function MemoryCard({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: string;
}) {
  const colors: Record<string, string> = {
    orange: "border-orange-500/20 bg-orange-500/5",
    blue: "border-blue-500/20 bg-blue-500/5",
    purple: "border-accent/20 bg-accent/5",
  };

  const dotColors: Record<string, string> = {
    orange: "bg-orange-400",
    blue: "bg-blue-400",
    purple: "bg-accent",
  };

  return (
    <div className={`rounded-xl border p-5 ${colors[color]}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className={`w-2 h-2 rounded-full ${dotColors[color]}`} />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}
