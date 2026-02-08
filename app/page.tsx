import { Navbar } from "@/components/yuuki/navbar"
import { Hero } from "@/components/yuuki/hero"
import { ModelSection } from "@/components/yuuki/model-section"
import { EcosystemSection } from "@/components/yuuki/ecosystem-section"
import { DemoSection } from "@/components/yuuki/demo-section"
import { StatsSection } from "@/components/yuuki/stats-section"
import { CreatorSection } from "@/components/yuuki/creator-section"
import { DonateSection } from "@/components/yuuki/donate-section"
import { Footer } from "@/components/yuuki/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <ModelSection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <EcosystemSection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <DemoSection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <StatsSection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <CreatorSection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <DonateSection />
      <Footer />
    </main>
  )
}
