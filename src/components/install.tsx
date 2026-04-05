"use client";

import { useState } from "react";

const tabs = [
  {
    label: "Linux / macOS",
    code: `curl -fsSL https://raw.githubusercontent.com/zero-abd/graphclaw/main/install.sh | bash`,
  },
  {
    label: "Windows",
    code: `irm https://raw.githubusercontent.com/zero-abd/graphclaw/main/install.ps1 | iex`,
  },
  {
    label: "From source",
    code: `git clone https://github.com/zero-abd/graphclaw
cd graphclaw
bash install.sh`,
  },
];

export function Install() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(tabs[active].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Get <span className="text-accent">Started</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            One command. Works on Linux, macOS, and Windows.
          </p>
        </div>

        <div className="rounded-xl border border-card-border overflow-hidden">
          {/* Tab bar */}
          <div className="flex border-b border-card-border bg-card/80">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-5 py-3 text-sm font-medium transition-colors ${
                  active === i
                    ? "text-accent border-b-2 border-accent bg-accent/5"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code area */}
          <div className="relative bg-code-bg p-6">
            <pre className="font-mono text-sm leading-relaxed text-green-400 whitespace-pre-wrap break-all">
              <code>{tabs[active].code}</code>
            </pre>
            <button
              onClick={copy}
              className="absolute top-4 right-4 rounded-lg border border-card-border bg-card px-3 py-1.5 text-xs text-muted hover:text-foreground transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted">
          Requires Python 3.12+ and Git. The installer handles everything
          else.
        </div>

        {/* Post-install */}
        <div className="mt-10 rounded-xl border border-card-border bg-code-bg p-6 font-mono text-sm">
          <div className="text-muted text-xs font-sans font-medium uppercase tracking-wider mb-3">
            Then run
          </div>
          <div>
            <span className="text-green-400">$</span>{" "}
            <span className="text-foreground">graphclaw</span>
          </div>
          <div className="mt-2 text-muted">
            The interactive wizard will ask for your LLM provider, channels,
            and API keys.
          </div>
        </div>
      </div>
    </section>
  );
}
