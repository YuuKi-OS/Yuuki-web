"use client"

import React from "react"
import { Navbar } from "@/components/yuuki/navbar"
import { Hero } from "@/components/yuuki/hero"
import { ModelSection } from "@/components/yuuki/model-section"
import { EcosystemSection } from "@/components/yuuki/ecosystem-section"
import { StatsSection } from "@/components/yuuki/stats-section"
import { CreatorSection } from "@/components/yuuki/creator-section"
import { Footer } from "@/components/yuuki/footer"

function Divider() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  )
}

class ErrorBoundary extends React.Component<
  { name: string; children: React.ReactNode },
  { error: Error | null }
> {
  constructor(props: { name: string; children: React.ReactNode }) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error: Error) {
    return { error }
  }
  componentDidCatch(error: Error) {
    console.log(`[v0] ErrorBoundary caught in ${this.props.name}:`, error.message)
  }
  render() {
    if (this.state.error) {
      return (
        <div className="p-8 text-center text-red-400 border border-red-800 rounded-lg m-4">
          <p className="font-mono text-sm">Error in {this.props.name}: {this.state.error.message}</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default function Page() {
  console.log("[v0] Page component rendering")
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ErrorBoundary name="Navbar">
        <Navbar />
      </ErrorBoundary>
      <ErrorBoundary name="Hero">
        <Hero />
      </ErrorBoundary>
      <Divider />
      <ErrorBoundary name="ModelSection">
        <ModelSection />
      </ErrorBoundary>
      <Divider />
      <ErrorBoundary name="EcosystemSection">
        <EcosystemSection />
      </ErrorBoundary>
      <Divider />

      {/* Demo Section */}
      <ErrorBoundary name="DemoSection">
        <section id="demo" className="relative px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-[#f472b6]">
                Live Demo
              </span>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance">
                Try Yuuki Now
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                Generate code directly in your browser. Click below to open the Yuuki Space
                on HuggingFace. No setup required.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-12 text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(244,114,182,0.15)] border border-[rgba(244,114,182,0.25)]">
                <svg className="h-8 w-8 text-[#f472b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Interactive Playground</h3>
              <p className="mx-auto mb-8 max-w-md text-sm text-muted-foreground leading-relaxed">
                The Yuuki Space runs the Yuuki-best model on HuggingFace infrastructure.
                Generate code in Agda, C, Python, Assembly, and more.
              </p>
              <a
                href="https://huggingface.co/spaces/OpceanAI/Yuuki"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#f472b6] px-8 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-opacity hover:opacity-90"
              >
                Launch Yuuki Space
                <span>{">"}</span>
              </a>
            </div>
          </div>
        </section>
      </ErrorBoundary>

      <Divider />
      <ErrorBoundary name="StatsSection">
        <StatsSection />
      </ErrorBoundary>
      <Divider />
      <ErrorBoundary name="CreatorSection">
        <CreatorSection />
      </ErrorBoundary>
      <Divider />

      {/* Donate Section */}
      <ErrorBoundary name="DonateSection">
        <section id="donate" className="relative px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl">
              <div className="overflow-hidden rounded-2xl border border-[rgba(244,114,182,0.25)] bg-card relative">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#f472b6]/5 via-transparent to-transparent" />
                <div className="relative p-8 md:p-12 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
                    Support the Project
                  </h2>
                  <p className="mx-auto mb-8 max-w-xl text-muted-foreground leading-relaxed">
                    Yuuki is built with zero budget by a single person. Your support helps keep the
                    project alive and growing -- better hardware, more training time, and new features.
                  </p>

                  <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <a
                      href="https://github.com/sponsors/aguitauwu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#f472b6] px-8 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-opacity hover:opacity-90"
                    >
                      Sponsor on GitHub
                    </a>
                    <a
                      href="https://github.com/YuuKi-OS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      Star the repos
                    </a>
                  </div>

                  <p className="mt-6 text-xs text-muted-foreground">
                    Even a star on GitHub helps. Every contribution matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ErrorBoundary>

      <ErrorBoundary name="Footer">
        <Footer />
      </ErrorBoundary>
    </main>
  )
}
