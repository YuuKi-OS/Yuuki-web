export function ModelSection() {
  return (
    <section id="model" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-sakura">
            The Model
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance">
            Yuuki-best
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            A code generation model based on GPT-2 (124M parameters), trained from scratch
            on a smartphone CPU. Currently at checkpoint 2000 with measurable improvements.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Training Card */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Training Details
            </h3>
            <div className="flex flex-col gap-3">
              <InfoRow label="Base Model" value="GPT-2 (124M)" />
              <InfoRow label="Hardware" value="Snapdragon 685" />
              <InfoRow label="Training Type" value="CPU only" />
              <InfoRow label="Time" value="50+ hours" />
              <InfoRow label="Progress" value="2,000 / 37,500 steps" />
              <InfoRow label="Cost" value="$0.00" highlight />
            </div>
          </div>

          {/* Scores Card */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Language Scores (CP-2000)
            </h3>
            <div className="flex flex-col gap-3">
              <ScoreBar language="Agda" score={55} color="bg-[#22c55e]" />
              <ScoreBar language="C" score={20} color="bg-[#eab308]" />
              <ScoreBar language="Assembly" score={15} color="bg-[#eab308]" />
              <ScoreBar language="Python" score={8} color="bg-[#ef4444]" />
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Average: 24.6/100 (+146% from checkpoint 1400)
            </p>
          </div>

          {/* Checkpoint Comparison */}
          <div className="rounded-xl border border-border bg-card p-6 md:col-span-2 lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Evolution
            </h3>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary">
                    <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground">
                      Metric
                    </th>
                    <th className="px-4 py-2.5 text-right text-xs font-medium text-muted-foreground">
                      CP-1400
                    </th>
                    <th className="px-4 py-2.5 text-right text-xs font-medium text-muted-foreground">
                      CP-2000
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <ComparisonRow metric="Progress" old="3.7%" current="5.3%" />
                  <ComparisonRow metric="Agda" old="20" current="55" />
                  <ComparisonRow metric="C" old="8" current="20" />
                  <ComparisonRow metric="Assembly" old="2" current="15" />
                  <ComparisonRow metric="Avg Score" old="~10" current="24.6" />
                  <ComparisonRow metric="Speed" old="100s/step" current="86s/step" />
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Code sample */}
        <div className="mt-8 rounded-xl border border-border bg-card overflow-hidden">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-[#ef4444]/60" />
            <div className="h-3 w-3 rounded-full bg-[#eab308]/60" />
            <div className="h-3 w-3 rounded-full bg-[#22c55e]/60" />
            <span className="ml-2 text-xs font-mono text-muted-foreground">
              Yuuki output -- Agda (best language, 55/100)
            </span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed">
            <code className="text-muted-foreground">
              <span className="text-sakura">{"module"}</span>{" Main "}
              <span className="text-sakura">{"where"}</span>
              {"\n\n"}
              <span className="text-[#22c55e]">{"open import"}</span>{" Function\n"}
              <span className="text-muted-foreground/50">{"--"}</span>
              {"\n"}
              <span className="text-[#22c55e]">{"open import"}</span>{" Data.Nat\n"}
              <span className="text-[#22c55e]">{"open import"}</span>{" Function\n\n"}
              <span className="text-[#22c55e]">{"open import"}</span>{" Data.Nat\n"}
              <span className="text-[#22c55e]">{"open import"}</span>{" Data.Unit\n"}
              <span className="text-[#22c55e]">{"open import"}</span>{" Data.Nat.Dec\n"}
              <span className="text-[#22c55e]">{"open import"}</span>{" Data.Properties.Nat\n"}
              <span className="text-[#22c55e]">{"open import"}</span>{" Data.Nat.Properties\n"}
              <span className="text-[#22c55e]">{"open import"}</span>{" Data.Unary"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}

function InfoRow({
  label,
  value,
  highlight = false,
}: {
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span
        className={`text-sm font-medium font-mono ${
          highlight ? "text-sakura" : "text-foreground"
        }`}
      >
        {value}
      </span>
    </div>
  )
}

function ScoreBar({
  language,
  score,
  color,
}: {
  language: string
  score: number
  color: string
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm text-foreground">{language}</span>
        <span className="text-xs font-mono text-muted-foreground">{score}/100</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className={`h-full rounded-full ${color} transition-all duration-1000`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  )
}

function ComparisonRow({
  metric,
  old,
  current,
}: {
  metric: string
  old: string
  current: string
}) {
  return (
    <tr className="border-b border-border last:border-0">
      <td className="px-4 py-2.5 text-muted-foreground">{metric}</td>
      <td className="px-4 py-2.5 text-right font-mono text-muted-foreground/60">{old}</td>
      <td className="px-4 py-2.5 text-right font-mono text-sakura font-medium">{current}</td>
    </tr>
  )
}
