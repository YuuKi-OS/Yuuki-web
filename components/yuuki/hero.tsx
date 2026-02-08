import React from "react"
import { Terminal, Smartphone, Cpu } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(244,114,182,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(244,114,182,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-sakura/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Terminal badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2">
          <Terminal size={14} className="text-sakura" />
          <span className="text-xs font-mono text-muted-foreground">
            Trained entirely on a smartphone
          </span>
        </div>

        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance">
          <span className="text-sakura">Yuuki</span>
          <br />
          <span className="text-foreground">Code Generation</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
          A multilingual code generation model trained on a Redmi 12 smartphone.
          Zero cloud. Zero budget. Built by one person with pure determination.
        </p>

        {/* CTA buttons */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#demo"
            className="group flex items-center gap-2 rounded-xl bg-sakura px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Try Live Demo
            <span className="transition-transform group-hover:translate-x-0.5">{">"}</span>
          </a>
          <a
            href="https://github.com/YuuKi-OS/yuy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <span className="font-mono text-muted-foreground">$</span>
            cargo install yuy
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-border">
          <Stat icon={<Smartphone size={16} />} value="Redmi 12" label="Training Device" />
          <Stat icon={<Cpu size={16} />} value="$0.00" label="Cloud Cost" />
          <Stat value="988 MB" label="Model Size" />
          <Stat value="5.3%" label="Training Progress" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-8 w-5 rounded-full border border-border flex items-start justify-center p-1">
          <div className="h-2 w-1 rounded-full bg-sakura animate-bounce" />
        </div>
      </div>
    </section>
  )
}

function Stat({
  icon,
  value,
  label,
}: {
  icon?: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="flex flex-col items-center gap-1 px-6 py-3">
      <div className="flex items-center gap-1.5">
        {icon && <span className="text-sakura">{icon}</span>}
        <span className="text-lg font-bold text-foreground font-mono">{value}</span>
      </div>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}
