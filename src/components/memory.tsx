export function Memory() {
  return (
    <section id="memory" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Memory is a <span className="text-accent">Graph</span>, Not a File
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Every fact is a node with confidence that decays over time. The Dream
            walker maintains it automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Graph visualization */}
          <div className="rounded-xl border border-card-border bg-code-bg p-6 font-mono text-sm leading-loose">
            <div className="text-muted mb-3 text-xs font-sans font-medium uppercase tracking-wider">
              Graph Structure
            </div>
            <pre className="text-sm leading-7 overflow-x-auto">
              <code>
                <span className="text-accent font-bold">root</span>
                {"\n"}
                <span className="text-muted"> ├──</span>
                <span className="text-blue-400">[:HasMemory]</span>
                <span className="text-muted">──▶ </span>
                <span className="text-green-400">Memory</span>
                <span className="text-muted">{" { content, type, confidence: 0.9 }"}</span>
                {"\n"}
                <span className="text-muted"> ├──</span>
                <span className="text-blue-400">[:HasSession]</span>
                <span className="text-muted">──▶ </span>
                <span className="text-yellow-400">Session</span>
                <span className="text-muted"> ──</span>
                <span className="text-blue-400">[:HasTurn]</span>
                <span className="text-muted">──▶ </span>
                <span className="text-yellow-400">Turn</span>
                {"\n"}
                <span className="text-muted"> └──▶ </span>
                <span className="text-pink-400">Topic</span>
                <span className="text-muted"> ──</span>
                <span className="text-blue-400">[:Tagged]</span>
                <span className="text-muted">──▶ </span>
                <span className="text-green-400">Memory</span>
                {"\n"}
                <span className="text-muted">{"      "}</span>
                <span className="text-green-400">Memory</span>
                <span className="text-muted"> ──</span>
                <span className="text-blue-400">[:Relates]</span>
                <span className="text-muted">──▶ </span>
                <span className="text-green-400">Memory</span>
              </code>
            </pre>
          </div>

          {/* Feature cards */}
          <div className="space-y-4">
            <MemoryCard
              title="Confidence Decay"
              description="Every memory loses 0.01 confidence per day since last validation. After ~90 days without revalidation, a fact is considered stale and tombstoned."
              color="orange"
            />
            <MemoryCard
              title="Dual Recall"
              description="Substring match by default for speed. Semantic recall via by llm() on demand for deeper understanding."
              color="blue"
            />
            <MemoryCard
              title="Dream Walker"
              description="Runs every 2 hours: tombstones zero-confidence nodes, auto-tags untagged memories, revalidates still-accurate decaying memories."
              color="purple"
            />
          </div>
        </div>
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
