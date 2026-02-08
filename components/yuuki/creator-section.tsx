import { Github, ExternalLink } from "lucide-react"

export function CreatorSection() {
  return (
    <section id="creator" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-sakura">
            About
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance">
            The Creator
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative h-32 bg-gradient-to-r from-sakura/10 via-sakura/5 to-transparent">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(244,114,182,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(244,114,182,0.2) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>
            <div className="px-8 pb-8">
              <div className="-mt-12 mb-6 flex items-end gap-4">
                <div className="h-24 w-24 overflow-hidden rounded-2xl border-4 border-card bg-secondary">
                  <img
                    src="/images/agua-avatar.jpg"
                    alt="agua_omg avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mb-1">
                  <h3 className="text-xl font-bold text-foreground">agua_omg</h3>
                  <p className="text-sm text-muted-foreground">
                    Independent Developer & Creator of Yuuki
                  </p>
                </div>
              </div>

              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                {"Hey, I'm agua -- a young independent developer. I started this project in January 2026 simply because I couldn't afford to keep paying for Claude anymore, so I decided to build my own open-source model for everyone. I'm open to collaborating with and supporting anyone who wants to try out or contribute to Yuuki."}
              </p>

              <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <MiniStat label="Projects" value="4+" />
                <MiniStat label="Language" value="Rust" />
                <MiniStat label="Device" value="Redmi 12" />
                <MiniStat label="Budget" value="$0" />
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/aguitauwu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="https://twitter.com/agua_omg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter / X
                </a>
                <a
                  href="https://discord.com/users/agua_omg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  Discord
                </a>
                <a
                  href="https://huggingface.co/OpceanAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  <ExternalLink size={16} />
                  HuggingFace
                </a>
              </div>
            </div>
          </div>

          {/* Name Origin Story */}
          <div className="mt-8 rounded-xl border border-border bg-card p-8">
            <h3 className="mb-4 text-lg font-bold text-foreground">
              {"Where does the name \"Yuuki\" come from?"}
            </h3>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                {"It all started back in October 2025. I was working on another project and wanted to find a good name for it, so I looked into Japanese kanji and discovered"}{" "}
                <span className="font-medium text-foreground">Yuki</span>
                {" -- meaning \"snow.\""}
              </p>
              <p>
                {"Then in November 2025, I came across the anime"}{" "}
                <span className="font-medium text-sakura">{"Girls' Last Tour"}</span>
                {". The two protagonists are Yuu and Chi-chan, but I really fell in love with Yuu -- her personality is so unique and beautiful."}
              </p>
              <p>
                {"By December 2025, the two inspirations came together, and"}{" "}
                <span className="font-bold text-sakura">Yuuki</span>
                {" was born -- a name that carries the quiet beauty of snow and the courageous spirit of a character who never gives up."}
              </p>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <ProjectLink
              name="Yuuki-best"
              desc="Best checkpoint model weights"
              href="https://huggingface.co/OpceanAI/Yuuki-best"
            />
            <ProjectLink
              name="Yuuki Space"
              desc="Web-based interactive demo"
              href="https://huggingface.co/spaces/OpceanAI/Yuuki"
            />
            <ProjectLink
              name="YUY CLI"
              desc="Download, manage, and run models"
              href="https://github.com/YuuKi-OS/yuy"
            />
            <ProjectLink
              name="YUY-Chat"
              desc="Terminal chat interface"
              href="https://github.com/YuuKi-OS/yuy-chat"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-secondary p-3 text-center">
      <div className="text-sm font-bold font-mono text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )
}

function ProjectLink({
  name,
  desc,
  href,
}: {
  name: string
  desc: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:border-sakura-border"
    >
      <div>
        <h4 className="text-sm font-semibold text-foreground">{name}</h4>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
      <ExternalLink
        size={14}
        className="text-muted-foreground transition-colors group-hover:text-sakura"
      />
    </a>
  )
}
