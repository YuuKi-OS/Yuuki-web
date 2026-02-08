"use client"

import { useEffect, useRef, useState } from "react"

export function DemoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (loaded) return
    // Load Gradio script dynamically
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://gradio.s3-us-west-2.amazonaws.com/5.9.1/gradio.js"
    script.onload = () => {
      if (!containerRef.current) return
      // Create the gradio-app custom element after the script loads
      const gradioApp = document.createElement("gradio-app")
      gradioApp.setAttribute("src", "https://opceanai-yuuki.hf.space")
      gradioApp.style.minHeight = "600px"
      gradioApp.style.width = "100%"
      containerRef.current.appendChild(gradioApp)
    }
    document.head.appendChild(script)
    setLoaded(true)
  }, [loaded])

  return (
    <section id="demo" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-sakura">
            Live Demo
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance">
            Try Yuuki Now
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Generate code directly in your browser. This Space runs the Yuuki-best model
            on HuggingFace infrastructure. No setup required.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {/* Window chrome */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ef4444]/60" />
              <div className="h-3 w-3 rounded-full bg-[#eab308]/60" />
              <div className="h-3 w-3 rounded-full bg-[#22c55e]/60" />
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              opceanai-yuuki.hf.space
            </span>
            <a
              href="https://huggingface.co/spaces/OpceanAI/Yuuki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-sakura hover:underline"
            >
              Open in new tab
            </a>
          </div>

          {/* Gradio embed */}
          <div ref={containerRef} className="relative min-h-[600px] w-full bg-background" />
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          The Space may take a moment to load if it has been idle. Powered by HuggingFace Spaces.
        </p>
      </div>
    </section>
  )
}
