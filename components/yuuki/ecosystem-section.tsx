import {
  Terminal,
  MessageSquare,
  Cpu,
  Download,
  Layers,
  Smartphone,
  Monitor,
  Zap,
} from "lucide-react"

const tools = [
  {
    name: "YUY",
    subtitle: "CLI Tool",
    description:
      "Download, manage, and run Yuuki models locally. Three commands to get started. Written in Rust.",
    icon: Terminal,
    tech: "Rust 1.75+",
    features: [
      "Model downloads with auto-quantization",
      "Local inference via llama.cpp / ollama",
      "Cross-platform (Termux, Linux, macOS, Windows)",
      "System diagnostics & health checks",
    ],
    links: {
      github: "https://github.com/YuuKi-OS/yuy",
    },
    command: "yuy setup && yuy download Yuuki-best && yuy run Yuuki-best",
  },
  {
    name: "YUY-Chat",
    subtitle: "TUI Chat",
    description:
      "Beautiful terminal chat interface. Stream responses word by word. Save and reload conversations. All local.",
    icon: MessageSquare,
    tech: "Rust + ratatui",
    features: [
      "Real-time streaming responses",
      "Conversation history (JSON)",
      "Model selector & presets",
      "HuggingFace cloud integration",
    ],
    links: {
      github: "https://github.com/YuuKi-OS/yuy-chat",
    },
    command: "yuy-chat",
  },
]

const highlights = [
  {
    icon: Download,
    title: "Smart Downloads",
    desc: "Auto-selects the best quantization based on your hardware and RAM.",
  },
  {
    icon: Layers,
    title: "Multiple Quantizations",
    desc: "q4_0, q5_k_m, q8_0, and f32. From phones to research workstations.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    desc: "Termux is the primary target. Optimized for constrained hardware.",
  },
  {
    icon: Monitor,
    title: "Cross-Platform",
    desc: "Termux, Linux, macOS, and Windows. Same experience everywhere.",
  },
  {
    icon: Cpu,
    title: "Zero Config",
    desc: "Platform detection, RAM recommendations, runtime auto-discovery.",
  },
  {
    icon: Zap,
    title: "~50ms Startup",
    desc: "Lightweight Rust binaries. ~8 MB. ~20 MB idle RAM.",
  },
]

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-sakura">
            Ecosystem
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance">
            The Complete Toolkit
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            From downloading models to chatting with them in your terminal.
            Everything built in Rust, optimized for every platform.
          </p>
        </div>

        {/* Tools grid */}
        <div className="mb-16 grid gap-6 lg:grid-cols-2">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-colors hover:border-sakura-border"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sakura-dim border border-sakura-border">
                    <tool.icon size={20} className="text-sakura" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{tool.name}</h3>
                    <span className="text-xs font-mono text-muted-foreground">{tool.subtitle}</span>
                  </div>
                </div>
                <span className="rounded-md bg-secondary px-2.5 py-1 text-xs font-mono text-muted-foreground">
                  {tool.tech}
                </span>
              </div>

              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                {tool.description}
              </p>

              <ul className="mb-6 flex flex-col gap-2">
                {tool.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sakura" />
                    <span className="text-secondary-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Command line */}
              <div className="overflow-hidden rounded-lg border border-border bg-background">
                <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-[#ef4444]/50" />
                  <div className="h-2 w-2 rounded-full bg-[#eab308]/50" />
                  <div className="h-2 w-2 rounded-full bg-[#22c55e]/50" />
                </div>
                <div className="p-4">
                  <code className="text-xs font-mono text-muted-foreground">
                    <span className="text-sakura">$</span> {tool.command}
                  </code>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={tool.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-sakura transition-opacity hover:opacity-80"
                >
                  View on GitHub
                  <span className="text-xs">{">"}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-sakura-border"
            >
              <item.icon size={18} className="mb-3 text-sakura" />
              <h4 className="mb-1.5 text-sm font-semibold text-foreground">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
