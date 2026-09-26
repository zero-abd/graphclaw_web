const channels = ["Telegram", "Discord", "Slack", "Email", "WhatsApp", "CLI"];

const agents = [
  {
    name: "Planner",
    color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/5",
    desc: "Plans, roadmaps, task breakdowns",
    tools: "read / write files",
  },
  {
    name: "Builder",
    color: "text-green-400 border-green-500/30 bg-green-500/5",
    desc: "Writes and edits code, runs tests",
    tools: "files, shell, web, Base44 / Loveable",
  },
  {
    name: "Researcher",
    color: "text-blue-400 border-blue-500/30 bg-blue-500/5",
    desc: "Search, compare, summarize",
    tools: "web search, web fetch",
  },
  {
    name: "DevOps",
    color: "text-red-400 border-red-500/30 bg-red-500/5",
    desc: "Deploys, infra, skill installs",
    tools: "files, shell, web, ClawHub",
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            How a message <span className="text-accent">flows</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Every channel feeds one message bus. Each message becomes a session
            turn in graph memory, gets routed to a specialist agent, and the
            reply is written back to the graph before it goes out.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Channels */}
          <div className="flex flex-wrap justify-center gap-2">
            {channels.map((c) => (
              <span
                key={c}
                className="rounded-lg border border-card-border bg-card px-3 py-1.5 text-xs font-medium"
              >
                {c}
              </span>
            ))}
          </div>

          <Arrow />

          <Box title="Message bus" sub="inbound queue → dispatch loop → per-channel outbound queues" />

          <Arrow />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
            <MiniCard
              title="Session + turn"
              body="start_session() and append_turn() record who said what, on which channel."
            />
            <MiniCard
              title="Memory context"
              body="The highest-confidence live memories, up to 3,000 characters, are prepended to the prompt."
            />
            <MiniCard
              title="Built-in handlers"
              body="Pairing commands, skill-install approvals, and rename or persona updates are handled before any agent runs."
            />
          </div>

          <Arrow />

          <div className="rounded-xl border-2 border-accent/50 bg-accent/5 px-8 py-4 text-center max-w-xl">
            <div className="text-lg font-bold text-accent">Coordinator</div>
            <div className="text-xs text-muted mt-1 leading-relaxed">
              Picks a specialist for the message. The runtime path matches the
              request against each agent&apos;s keywords; the Jac{" "}
              <code className="font-mono text-accent">CoordinatorAgent</code> walker
              classifies intent with{" "}
              <code className="font-mono text-accent">by llm()</code> and falls back
              to a general agent below 0.6 confidence.
            </div>
          </div>

          <Arrow />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
            {agents.map((agent) => (
              <div key={agent.name} className={`rounded-xl border p-4 text-center ${agent.color}`}>
                <div className="text-base font-bold">{agent.name}</div>
                <div className="text-xs text-muted mt-1.5 leading-relaxed">{agent.desc}</div>
                <div className="text-[11px] text-muted/80 mt-2 font-mono">{agent.tools}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted text-center max-w-xl">
            Anything that matches no specialist goes to a general agent with web
            search, the skill runtime, and every configured MCP server.
          </p>

          <Arrow />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
            <MiniCard
              title="Consolidate"
              body="After each reply the session's turns become memory nodes with confidence, topic tags, and a source session."
            />
            <MiniCard
              title="Dream, every 2 hours"
              body="Consolidates leftover sessions, tombstones memories whose confidence has decayed to zero, re-validates fading ones, tags untagged ones, and links related memories."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Box({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="rounded-xl border border-card-border bg-card px-6 py-3 text-center">
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-xs text-muted mt-0.5 font-mono">{sub}</div>
    </div>
  );
}

function MiniCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-card-border bg-card/50 p-4">
      <div className="text-sm font-semibold mb-1">{title}</div>
      <p className="text-xs text-muted leading-relaxed">{body}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex flex-col items-center" aria-hidden="true">
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
