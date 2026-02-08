"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Model", href: "#model" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Demo", href: "#demo" },
  { label: "Stats", href: "#stats" },
  { label: "News", href: "#news" },
  { label: "Creator", href: "#creator" },
  { label: "Donate", href: "#donate" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground font-mono tracking-tight">
            Yuuki
          </span>
          <span className="rounded-md bg-sakura-dim px-2 py-0.5 text-xs font-mono text-sakura border border-sakura-border">
            v0.1
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/YuuKi-OS"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary"
          >
            GitHub
          </a>
          <a
            href="https://huggingface.co/OpceanAI/Yuuki-best"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-sakura px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Model
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/YuuKi-OS"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-4 py-2 text-sm text-foreground"
              >
                GitHub
              </a>
              <a
                href="https://huggingface.co/OpceanAI/Yuuki-best"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-sakura px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                Model
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
