export function StatsSection() {
  const stats = [
    { value: "124M", label: "Parameters", sub: "GPT-2 base" },
    { value: "988", label: "MB Model Size", sub: "Full precision" },
    { value: "37,500", label: "Total Steps", sub: "Target" },
    { value: "2,000", label: "Steps Completed", sub: "5.3% done" },
    { value: "50+", label: "Hours Training", sub: "On a phone" },
    { value: "$0", label: "Total Cost", sub: "Zero cloud" },
    { value: "~86s", label: "Per Step", sub: "Snapdragon 685" },
    { value: "+146%", label: "Quality Gain", sub: "CP-1400 to CP-2000" },
  ]

  const timeline = [
    {
      step: "Phase 1",
      title: "Foundation",
      status: "complete",
      items: [
        "Training pipeline on mobile",
        "Custom tokenizer",
        "Checkpoint system",
        "Evaluation framework",
      ],
    },
    {
      step: "Phase 2",
      title: "Current",
      status: "active",
      items: [
        "Continued pre-training",
        "Language expansion",
        "YUY CLI tool (Rust)",
        "YUY-Chat TUI interface",
      ],
    },
    {
      step: "Phase 3",
      title: "Upcoming",
      status: "planned",
      items: [
        "Yuuki v0.1 full release",
        "Research paper publication",
        "Native model (from scratch)",
        "Community model hub",
      ],
    },
  ]

  return (
    <section id="stats" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-sakura">
            Numbers
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance">
            Progress is Real
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Every metric is measurable and reproducible. Trained at zero cost
            with consistent improvements across checkpoints.
          </p>
        </div>

        {/* Stats grid */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-5 text-center"
            >
              <div className="mb-1 text-2xl font-bold font-mono text-sakura md:text-3xl">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Roadmap / Timeline */}
        <div className="grid gap-6 md:grid-cols-3">
          {timeline.map((phase) => (
            <div
              key={phase.step}
              className={`rounded-xl border p-6 ${
                phase.status === "active"
                  ? "border-sakura-border bg-sakura-dim"
                  : "border-border bg-card"
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    phase.status === "complete"
                      ? "bg-[#22c55e]"
                      : phase.status === "active"
                        ? "bg-sakura animate-pulse"
                        : "bg-muted-foreground/30"
                  }`}
                />
                <div>
                  <span className="text-xs font-mono text-muted-foreground">{phase.step}</span>
                  <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span
                      className={`mt-1.5 h-1 w-1 flex-shrink-0 rounded-full ${
                        phase.status === "complete" ? "bg-[#22c55e]" : "bg-muted-foreground/40"
                      }`}
                    />
                    <span className="text-secondary-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why it matters */}
        <div className="mt-16 rounded-xl border border-border bg-card p-8 md:p-12">
          <h3 className="mb-6 text-2xl font-bold text-foreground">Why This Matters</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-sakura">Accessibility</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Students without GPU access can experiment with ML training.
                No cloud account, no credit card, no barriers.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold text-sakura">Democratization</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Proves that meaningful ML research can happen anywhere in the world,
                with just a phone and determination.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold text-sakura">Edge ML</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Explores the limits of what is possible with mobile hardware,
                pushing edge ML training into new territory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
