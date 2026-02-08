export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-lg font-bold text-foreground font-mono">Yuuki</span>
              <span className="rounded-md bg-sakura-dim px-1.5 py-0.5 text-[10px] font-mono text-sakura border border-sakura-border">
                v0.1
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Built with patience, a phone, and zero budget.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Apache 2.0 License
            </p>
          </div>

          {/* Model */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Model
            </h4>
            <ul className="flex flex-col gap-2">
              <FooterLink href="https://huggingface.co/OpceanAI/Yuuki-best" label="Yuuki-best" />
              <FooterLink href="https://huggingface.co/OpceanAI/Yuuki" label="Original Yuuki" />
              <FooterLink href="https://huggingface.co/spaces/OpceanAI/Yuuki" label="Live Demo" />
              <FooterLink href="https://github.com/YuuKi-OS/yuuki-training" label="Training Code" />
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Tools
            </h4>
            <ul className="flex flex-col gap-2">
              <FooterLink href="https://github.com/YuuKi-OS/yuy" label="YUY CLI" />
              <FooterLink href="https://github.com/YuuKi-OS/yuy-chat" label="YUY-Chat" />
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Community
            </h4>
            <ul className="flex flex-col gap-2">
              <FooterLink href="https://github.com/YuuKi-OS" label="GitHub Org" />
              <FooterLink href="https://github.com/aguitauwu" label="GitHub (agua_omg)" />
              <FooterLink href="https://twitter.com/agua_omg" label="Twitter" />
              <FooterLink href="https://github.com/sponsors/aguitauwu" label="Sponsor" />
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            Yuuki Project 2026. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Snapdragon 685 | CPU only | $0.00
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {label}
      </a>
    </li>
  )
}
