import { Heart } from "lucide-react"

export function DonateSection() {
  return (
    <section id="donate" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-sakura-border bg-card relative">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sakura/5 via-transparent to-transparent" />
            
            <div className="relative p-8 md:p-12 text-center">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sakura-dim border border-sakura-border">
                <Heart size={24} className="text-sakura" />
              </div>
              
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
                Support the Project
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground leading-relaxed">
                Yuuki is built with zero budget by a single person. Your support helps keep the
                project alive and growing -- better hardware, more training time, and new features.
              </p>

              {/* GitHub Sponsors embed */}
              <div className="mb-8 flex justify-center">
                <div className="overflow-hidden rounded-xl border border-border bg-background">
                  <iframe
                    src="https://github.com/sponsors/aguitauwu/card"
                    title="Sponsor aguitauwu"
                    height={225}
                    width={600}
                    className="max-w-full border-0"
                    style={{ border: 0 }}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://github.com/sponsors/aguitauwu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-sakura px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Heart size={16} />
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
  )
}
