export function Skills() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Extensible <span className="text-accent">Skill System</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            Two skill types that extend your agents at runtime — no restart needed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Native skills */}
          <div className="rounded-xl border border-card-border bg-card/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Native Skills</h3>
            </div>
            <p className="text-sm text-muted mb-4">
              Fast, typed Python modules with a JSON manifest.
            </p>
            <div className="rounded-lg bg-code-bg border border-card-border p-4 font-mono text-xs leading-relaxed overflow-x-auto">
              <div className="text-muted">skills/registry/</div>
              <div className="text-muted">
                {"└── "}
                <span className="text-accent">base44/</span>
              </div>
              <div className="text-muted">
                {"    ├── "}
                <span className="text-yellow-400">skill.json</span>
                {"  "}
                <span className="text-muted/50">← manifest</span>
              </div>
              <div className="text-muted">
                {"    └── "}
                <span className="text-green-400">skill.py</span>
                {"   "}
                <span className="text-muted/50">← async tools</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <SkillPill name="base44" />
              <SkillPill name="loveable" />
            </div>
          </div>

          {/* ClawHub skills */}
          <div className="rounded-xl border border-card-border bg-card/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">ClawHub Skills</h3>
            </div>
            <p className="text-sm text-muted mb-4">
              13,000+ community skills from the ClawHub registry.
            </p>
            <div className="rounded-lg bg-code-bg border border-card-border p-4 font-mono text-xs leading-relaxed overflow-x-auto">
              <div>
                <span className="text-green-400">{">"}</span>
                <span className="text-muted"> install the kubernetes skill</span>
              </div>
              <div className="mt-1">
                <span className="text-accent">[devops]</span>
                <span className="text-muted"> Searching ClawHub for &apos;kubernetes&apos;...</span>
              </div>
              <div>
                <span className="text-accent">[devops]</span>
                <span className="text-muted">
                  {" "}
                  Downloading and installing...
                </span>
              </div>
              <div className="mt-1">
                <span className="text-green-400">{"✓"}</span>
                <span className="text-muted"> Skill installed</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <SkillPill name="kubernetes" />
              <SkillPill name="docker" />
              <SkillPill name="github-actions" />
              <SkillPill name="13,000+" dim />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillPill({ name, dim }: { name: string; dim?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-mono ${
        dim
          ? "border-card-border text-muted"
          : "border-accent/30 bg-accent/5 text-accent"
      }`}
    >
      {name}
    </span>
  );
}
