import { CalendarDays, Tag } from "lucide-react"

interface NewsItem {
  date: string
  tag: string
  title: string
  summary: string
  link?: string
  image?: string
  imageAlt?: string
  video?: string
}

const NEWS_ITEMS: NewsItem[] = [
  {
    date: "Feb 8, 2026",
    tag: "Meme",
    title: "Help, Yuuki Is Consuming Me",
    summary:
      "When you start training a model on your phone \"just for fun\" and suddenly it becomes your entire personality. Send help.",
    video: "/videos/yuuki-consuming-me.mp4",
  },
  {
    date: "Feb 8, 2026",
    tag: "Community",
    title: "r/yuuki_omg Is Now Live on Reddit",
    summary:
      "The official Yuuki community subreddit is open at r/yuuki_omg. A Discord server is also in the works — just need to find the motivation to set up all the channels.",
    link: "https://www.reddit.com/r/yuuki_omg",
  },
  {
    date: "Feb 8, 2026",
    tag: "Model",
    title: "Training Surpasses 8,000 Steps",
    summary:
      "Yuuki has officially crossed 8,400+ training steps (23% of the way there) running entirely on a Redmi 12 via Termux. Loss is sitting at ~1.6 and steadily dropping. The grind never stops.",
    image: "/images/training-8k-steps.jpg",
    imageAlt: "Termux terminal showing Yuuki training at 8447/37500 steps with loss 1.6131",
    link: "https://huggingface.co/OpceanAI/Yuuki-best",
  },
  {
    date: "Feb 2026",
    tag: "Research",
    title: "Yuuki Research Paper in Progress",
    summary:
      "A research paper documenting the full Yuuki training methodology is currently being written. arXiv is giving us trouble with publishing, but a draft is available on Google Drive in the meantime.",
    link: "https://drive.google.com/drive/folders/1IVoaI_FdNBxWGH-zBsnG24Gc5hIxKc4A",
  },
  {
    date: "Feb 8, 2026",
    tag: "Launch",
    title: "Yuuki Project Website Goes Live",
    summary:
      "The official Yuuki Project landing page is now live, featuring a live Gradio demo, the full model ecosystem, evaluation stats, and a donation section. Built with Next.js and Tailwind CSS.",
    link: "https://github.com/YuuKi-OS",
  },
  {
    date: "Jan 2026",
    tag: "Model",
    title: "Training Begins on Redmi 12",
    summary:
      "Yuuki's training officially kicked off on a Snapdragon 685 with 4GB RAM. Using a custom GPT-2 architecture with rotary positional embeddings, the model trains entirely on-device with zero cloud budget.",
    link: "https://huggingface.co/OpceanAI/Yuuki-best",
  },
  {
    date: "Jan 2026",
    tag: "Tooling",
    title: "YUY CLI & YUY-Chat Released",
    summary:
      "The Rust-based CLI tool for downloading and managing GGUF models, and a full TUI chat interface with streaming, multi-turn conversations, and adaptive theming are now available.",
    link: "https://github.com/YuuKi-OS/yuy",
  },
  {
    date: "Dec 2025",
    tag: "Origin",
    title: "The Name \"Yuuki\" is Born",
    summary:
      "Inspired by the Japanese kanji for snow (Yuki) and the character Yuu from Girls' Last Tour, the project name Yuuki was chosen \u2014 carrying the quiet beauty of snow and the spirit of never giving up.",
  },
]

const TAG_COLORS: Record<string, string> = {
  Launch: "bg-[#22c55e]/15 text-[#22c55e] border-[#22c55e]/25",
  Model: "bg-[#f472b6]/15 text-[#f472b6] border-[#f472b6]/25",
  Tooling: "bg-[#3b82f6]/15 text-[#3b82f6] border-[#3b82f6]/25",
  Origin: "bg-[#eab308]/15 text-[#eab308] border-[#eab308]/25",
  Research: "bg-[#a855f7]/15 text-[#a855f7] border-[#a855f7]/25",
  Community: "bg-[#06b6d4]/15 text-[#06b6d4] border-[#06b6d4]/25",
  Meme: "bg-[#f97316]/15 text-[#f97316] border-[#f97316]/25",
}

export function NewsSection() {
  return (
    <section id="news" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-[#f472b6]">
            Updates
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance">
            News & Milestones
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Follow the journey of Yuuki from concept to reality. Every step, every
            milestone, documented here.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#f472b6]/40 via-border to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {NEWS_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row md:items-start ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-[15px] top-1 z-10 h-[9px] w-[9px] rounded-full border-2 border-[#f472b6] bg-background md:left-1/2 md:-translate-x-1/2" />

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-4 md:mr-auto" : "md:pl-4 md:ml-auto"
                  }`}
                >
                  <div className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-[rgba(244,114,182,0.25)]">
                    {/* Optional image */}
                    {item.image && (
                      <div className="border-b border-border">
                        <img
                          src={item.image}
                          alt={item.imageAlt || item.title}
                          className="w-full object-cover"
                          style={{ maxHeight: "220px" }}
                        />
                      </div>
                    )}

                    {/* Optional video */}
                    {item.video && (
                      <div className="border-b border-border">
                        <video
                          src={item.video}
                          className="w-full object-cover"
                          style={{ maxHeight: "260px" }}
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    )}

                    <div className="p-5">
                      <div className="mb-3 flex items-center gap-3">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                            TAG_COLORS[item.tag] || "bg-secondary text-muted-foreground border-border"
                          }`}
                        >
                          <Tag size={10} />
                          {item.tag}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <CalendarDays size={12} />
                          {item.date}
                        </span>
                      </div>

                      <h3 className="mb-2 text-sm font-bold text-foreground leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.summary}
                      </p>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#f472b6] hover:underline"
                        >
                          Learn more
                          <span>{">"}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
