<div align="center">

<br>

<img src="https://img.shields.io/badge/%E2%9C%A6-YUUKI--WEB-000000?style=for-the-badge&labelColor=000000" alt="Yuuki Web" height="50">

<br><br>

# The Official Landing Page for the Yuuki Project

**Showcase the model. Embed the demo. Tell the story.**<br>
**A dark, cyberpunk-minimal site built with Next.js and sakura pink.**

<br>

<a href="#features"><img src="https://img.shields.io/badge/FEATURES-000000?style=for-the-badge" alt="Features"></a>
&nbsp;&nbsp;
<a href="https://huggingface.co/spaces/OpceanAI/Yuuki"><img src="https://img.shields.io/badge/LIVE_DEMO-000000?style=for-the-badge" alt="Demo"></a>
&nbsp;&nbsp;
<a href="https://github.com/sponsors/aguitauwu"><img src="https://img.shields.io/badge/SPONSOR-000000?style=for-the-badge" alt="Sponsor"></a>

<br><br>

[![License](https://img.shields.io/badge/MIT-222222?style=flat-square&logo=opensourceinitiative&logoColor=white)](LICENSE)
&nbsp;
[![Next.js](https://img.shields.io/badge/Next.js_16-222222?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
&nbsp;
[![React](https://img.shields.io/badge/React_19-222222?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
&nbsp;
[![Tailwind](https://img.shields.io/badge/Tailwind_v4-222222?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
&nbsp;
[![TypeScript](https://img.shields.io/badge/TypeScript-222222?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
&nbsp;
[![Vercel](https://img.shields.io/badge/Vercel-222222?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

<br>

---

<br>

<table>
<tr>
<td width="50%" valign="top">

**8 handcrafted sections.**<br><br>
Hero with animated terminal prompt.<br>
Model stats and evaluation data.<br>
Full ecosystem showcase.<br>
Embedded Gradio demo.<br>
Evaluation benchmarks.<br>
Creator profile and origin story.<br>
GitHub Sponsors integration.<br>
Responsive footer with full link map.

</td>
<td width="50%" valign="top">

**One page. Zero backend.**<br><br>
Static site, no database, no API keys.<br>
Dark theme with sakura pink (#f472b6) accents.<br>
Monospace terminal aesthetic.<br>
Built for the Yuuki ecosystem.<br>
<br>
Deployed on Vercel in one click.

</td>
</tr>
</table>

<br>

</div>

---

<br>

<div align="center">

## What is Yuuki-Web?

</div>

<br>

**Yuuki-Web** is the official landing page for the [Yuuki project](https://huggingface.co/OpceanAI) -- a code-generation model trained entirely on a smartphone with zero budget. The site serves as the public face of the project: introducing the model, showcasing the ecosystem tools (YUY CLI and YUY-Chat), embedding a live interactive demo, presenting evaluation data, and providing a way for people to support the project financially.

The site is built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**. It uses a dark cyberpunk-minimal design language with sakura pink accents inspired by the Japanese name Yuuki (courage/bravery). The entire site is static -- no backend, no database, no environment variables required.

<br>

---

<br>

<div align="center">

## Features

</div>

<br>

<table>
<tr>
<td width="50%" valign="top">

<h3>Hero Section</h3>

Full-viewport hero with animated typing effect in a terminal-style code block. Headline communicates the core message: an AI model trained on a phone with $0 budget. CTA buttons link to the live demo and GitHub.

<br>

<h3>Model Overview</h3>

Technical card grid displaying key model specifications: architecture (GPT-2, 124M params), training hardware (Snapdragon 685), dataset composition (multilingual code), training progress (5.3%), and model size (988 MB). All stats presented in a clean bento-grid layout.

<br>

<h3>Ecosystem Showcase</h3>

Side-by-side feature cards for the two companion tools -- YUY (CLI for downloading and running models) and YUY-Chat (TUI chat interface). Each card includes description, key features, tech stack badges, and terminal code examples showing real commands.

<br>

<h3>Live Demo</h3>

Embedded HuggingFace Space via iframe with a macOS-style window chrome (traffic light dots, URL bar, external link). Loads the Gradio-powered Yuuki-best model directly in the browser. No setup required.

</td>
<td width="50%" valign="top">

<h3>Evaluation & Stats</h3>

Data-driven section showing benchmark scores across programming languages (Agda 55/100, C 20/100, Assembly 15/100, Python 8/100). Includes training metrics: loss curves, steps completed, and checkpoint comparisons between 1400 and 2000.

<br>

<h3>Creator Profile</h3>

About section for agua_omg with custom avatar, personal bio, social links (GitHub, Twitter/X, Discord, HuggingFace), and quick-stat cards (4+ projects, Rust, Redmi 12, $0 budget). Includes the full origin story of the name "Yuuki" -- from Japanese kanji to Girls' Last Tour.

<br>

<h3>Sponsor Section</h3>

Embedded GitHub Sponsors card via iframe alongside CTA buttons for sponsoring and starring repos. Clean messaging about supporting a zero-budget solo project.

<br>

<h3>Footer</h3>

Four-column footer with organized link sections: Ecosystem (model, demo, training code), Tools (YUY, YUY-Chat, HuggingFace), Community (GitHub org, Twitter, sponsor link), and the project tagline.

</td>
</tr>
</table>

<br>

---

<br>

<div align="center">

## Design System

</div>

<br>

### Color Palette

| Token | Value | Usage |
|:------|:------|:------|
| `--background` | `#050505` | Page background |
| `--foreground` | `#fafafa` | Primary text |
| `--card` | `#0e0e0e` | Card surfaces |
| `--muted-foreground` | `#737373` | Secondary text |
| `--border` | `#1f1f1f` | Borders and dividers |
| `--sakura` | `#f472b6` | Primary accent (pink) |
| `--sakura-dim` | `rgba(244,114,182,0.15)` | Subtle pink backgrounds |
| `--sakura-border` | `rgba(244,114,182,0.25)` | Pink-tinted borders |

<br>

### Typography

| Role | Font | Weight |
|:-----|:-----|:-------|
| Headings | Geist | Bold (700) |
| Body text | Geist | Regular (400) |
| Code / Labels | Geist Mono | Regular (400) |

<br>

### Design Principles

- **Dark-first.** The entire site uses a near-black background (`#050505`) with high-contrast white text and sakura pink accents. No light mode.
- **Terminal aesthetic.** Monospace labels, code blocks, and a typing animation in the hero reinforce the developer/hacker vibe.
- **Minimal color.** Three colors total: black, white, and pink. No gradients unless explicitly decorative.
- **Card-based layout.** Every section uses bordered cards with subtle background differentiation on a consistent grid.
- **Mobile-first responsive.** All layouts use flexbox with responsive breakpoints. Grid layouts collapse to single columns on small screens.

<br>

---

<br>

<div align="center">

## Tech Stack

</div>

<br>

| Technology | Version | Purpose |
|:-----------|:--------|:--------|
| **Next.js** | 16 | React framework, App Router, static rendering |
| **React** | 19 | UI component library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4 | Utility-first styling with `@theme inline` tokens |
| **shadcn/ui** | Latest | Base component primitives (cards, buttons) |
| **Lucide React** | Latest | Icon library |
| **Geist** | Latest | Font family (sans + mono) |

<br>

### External Embeds

| Embed | Method | Source |
|:------|:-------|:------|
| Yuuki Demo | `<iframe>` | `https://opceanai-yuuki.hf.space` |
| GitHub Sponsors | `<iframe>` | `https://github.com/sponsors/aguitauwu/card` |

<br>

---

<br>

<div align="center">

## Architecture

</div>

<br>

```
                           User (Browser)
                                |
                                v
  +-------------------------------------------------------------+
  |                    Yuuki-Web (Next.js 16)                   |
  |                                                             |
  |   app/                                                      |
  |     layout.tsx           Root layout, fonts, metadata        |
  |     globals.css          Tailwind v4 theme + design tokens   |
  |     page.tsx             Main page, section assembly,        |
  |                          error boundaries, inline embeds     |
  |                                                             |
  |   components/yuuki/                                         |
  |     navbar.tsx           Fixed top nav with scroll links     |
  |     hero.tsx             Hero section + terminal animation   |
  |     model-section.tsx    Model specs bento grid              |
  |     ecosystem-section.tsx YUY + YUY-Chat showcase           |
  |     stats-section.tsx    Evaluation data + benchmarks        |
  |     creator-section.tsx  agua_omg profile + name story       |
  |     footer.tsx           4-column link footer                |
  +-------+----------------------------+-----------------------+
          |                            |
          v                            v
  +------------------+       +------------------+
  |  HuggingFace     |       |  GitHub          |
  |  Spaces (iframe) |       |  Sponsors card   |
  |  Gradio demo     |       |  (iframe)        |
  +------------------+       +------------------+
```

<br>

### Source Layout

```
yuuki-web/
    app/
        layout.tsx                  # root layout, Geist fonts, metadata
        globals.css                 # Tailwind v4, design tokens, sakura theme
        page.tsx                    # main page assembly + inline demo/donate
    components/
        yuuki/
            navbar.tsx              # sticky navbar with smooth scroll links
            hero.tsx                # hero with terminal typing animation
            model-section.tsx       # model specs grid (architecture, hardware, etc.)
            ecosystem-section.tsx   # YUY CLI + YUY-Chat feature cards
            stats-section.tsx       # evaluation benchmarks + training metrics
            creator-section.tsx     # agua_omg profile, socials, name origin
            footer.tsx              # 4-column footer with ecosystem links
    public/
        images/
            agua-avatar.jpg         # creator avatar
```

<br>

### Component Hierarchy

```
Page
 |-- Navbar
 |-- Hero
 |     |-- TerminalBlock (animated typing)
 |     |-- StatCards (inline stats)
 |
 |-- ModelSection
 |     |-- SpecCard (x6 grid items)
 |
 |-- EcosystemSection
 |     |-- ToolCard (YUY)
 |     |-- ToolCard (YUY-Chat)
 |     |-- CodeBlock (terminal examples)
 |
 |-- DemoSection (inline in page.tsx)
 |     |-- WindowChrome (traffic lights + URL)
 |     |-- iframe (HuggingFace Space)
 |
 |-- StatsSection
 |     |-- EvalCard (per-language scores)
 |     |-- MetricCard (training metrics)
 |
 |-- CreatorSection
 |     |-- ProfileCard (avatar, bio, socials)
 |     |-- NameOriginCard (Yuuki story)
 |     |-- ProjectLink (x4 related projects)
 |
 |-- DonateSection (inline in page.tsx)
 |     |-- iframe (GitHub Sponsors card)
 |     |-- CTAButtons
 |
 |-- Footer
       |-- LinkColumn (x4)
```

<br>

---

<br>

<div align="center">

## Sections Reference

</div>

<br>

| Section | ID | Component | Description |
|:--------|:---|:----------|:------------|
| Navigation | -- | `navbar.tsx` | Fixed top bar with smooth-scroll anchor links |
| Hero | `#hero` | `hero.tsx` | Full-viewport intro with animated terminal |
| Model | `#model` | `model-section.tsx` | Architecture, hardware, dataset, training info |
| Ecosystem | `#ecosystem` | `ecosystem-section.tsx` | YUY CLI and YUY-Chat tool cards |
| Demo | `#demo` | Inline in `page.tsx` | Embedded Gradio Space via iframe |
| Stats | `#stats` | `stats-section.tsx` | Evaluation scores and training benchmarks |
| Creator | `#creator` | `creator-section.tsx` | agua_omg profile and Yuuki name origin |
| Donate | `#donate` | Inline in `page.tsx` | GitHub Sponsors embed + CTA |
| Footer | -- | `footer.tsx` | Organized link sections + tagline |

<br>

---

<br>

<div align="center">

## Installation

</div>

<br>

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- [pnpm](https://pnpm.io/) (recommended) or npm

<br>

### Clone and Run

```bash
git clone https://github.com/YuuKi-OS/yuuki-web
cd yuuki-web
pnpm install
pnpm dev
```

The site will be available at `http://localhost:3000`.

<br>

### Build for Production

```bash
pnpm build
pnpm start
```

<br>

### Deploy to Vercel

The recommended deployment method. Connect the repo to Vercel and it will auto-deploy on every push.

```bash
# Or deploy manually with the Vercel CLI
npx vercel
```

No environment variables required. The site is fully static.

<br>

---

<br>

<div align="center">

## Configuration

</div>

<br>

### Metadata

SEO metadata is configured in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Yuuki Project - Code Generation Trained on a Phone',
  description: 'A multilingual code generation model trained entirely on a smartphone...',
}
```

### Theme Tokens

All design tokens are defined in `app/globals.css` using Tailwind v4's `@theme inline` directive:

```css
@theme inline {
  --color-sakura: var(--sakura);
  --color-sakura-dim: var(--sakura-dim);
  --color-sakura-border: var(--sakura-border);
}
```

### Embeds

The two external embeds are configured directly in `app/page.tsx`:

| Embed | URL | Dimensions |
|:------|:----|:-----------|
| Gradio Demo | `https://opceanai-yuuki.hf.space` | 100% width, 450px height |
| Sponsors Card | `https://github.com/sponsors/aguitauwu/card` | 600px width, 225px height |

To change the embedded Space, update the `src` attribute on the demo iframe in `page.tsx`.

<br>

---

<br>

<div align="center">

## Performance

</div>

<br>

| Metric | Value |
|:-------|:------|
| First Contentful Paint | < 0.8s |
| Largest Contentful Paint | < 1.5s |
| Total Blocking Time | < 50ms |
| Cumulative Layout Shift | < 0.01 |
| Bundle size (gzipped) | ~90 KB |
| Components | 7 |
| External dependencies | 0 (runtime) |
| Environment variables | 0 |
| API routes | 0 |
| Database | None |

The site is fully static with no client-side data fetching, no database queries, and no API calls. The only network requests beyond the initial page load are the two embedded iframes.

<br>

---

<br>

<div align="center">

## Design Decisions

</div>

<br>

<details>
<summary><strong>Why Next.js for a static landing page?</strong></summary>
<br>

Next.js provides excellent DX with hot reload, TypeScript support, image optimization, font loading, and one-click Vercel deployment. The App Router enables clean component composition. For a project page that may evolve to include dynamic features (blog, documentation, model playground), starting with Next.js avoids a future migration.

</details>

<details>
<summary><strong>Why Tailwind CSS v4?</strong></summary>
<br>

Tailwind v4 introduces `@theme inline` for design token registration directly in CSS, eliminating the need for `tailwind.config.js`. This simplifies the project structure and makes the design system self-documenting. The new CSS-first configuration is more intuitive for custom token systems like the sakura color palette.

</details>

<details>
<summary><strong>Why dark theme only?</strong></summary>
<br>

The Yuuki project's identity is rooted in terminal aesthetics, hacking culture, and cyberpunk minimalism. A dark theme reinforces this identity. Supporting a light mode would double the design surface area for negligible benefit -- the target audience (developers, AI researchers) overwhelmingly prefers dark interfaces.

</details>

<details>
<summary><strong>Why iframe for the demo instead of the Gradio web component?</strong></summary>
<br>

The Gradio web component (`<gradio-app>`) requires loading a 2MB+ JavaScript module and creating custom elements at runtime, which conflicts with React's DOM management and causes errors in sandboxed environments. An iframe provides complete isolation, loads the Space in its own browsing context, and requires zero JavaScript on the host page.

</details>

<details>
<summary><strong>Why sakura pink (#f472b6)?</strong></summary>
<br>

The name Yuuki comes from Japanese -- combining "Yuki" (snow) and the character Yuu from Girls' Last Tour. Sakura (cherry blossom) pink is a natural complement: it evokes Japanese aesthetics, stands out beautifully against dark backgrounds, and creates a warm, distinctive brand identity that differentiates Yuuki from the sea of blue-themed AI projects.

</details>

<details>
<summary><strong>Why inline sections for Demo and Donate instead of separate components?</strong></summary>
<br>

Both sections contain iframes that can cause issues when loaded inside React component boundaries with error boundaries. Inlining them directly in `page.tsx` gives the most control over rendering and avoids potential hydration mismatches. The sections are simple enough (a few divs + an iframe) that component extraction adds complexity without benefit.

</details>

<br>

---

<br>

<div align="center">

## Accessibility

</div>

<br>

- **Semantic HTML** -- `<main>`, `<section>`, `<nav>`, `<header>`, `<footer>` used throughout
- **ARIA labels** -- all decorative SVGs use `aria-hidden="true"`
- **Alt text** -- all meaningful images have descriptive alt text
- **Keyboard navigation** -- all links and interactive elements are focusable
- **Color contrast** -- text passes WCAG AA against the dark background
- **Focus indicators** -- visible focus rings on all interactive elements
- **Smooth scrolling** -- `scroll-behavior: smooth` for anchor navigation
- **Responsive** -- fully usable from 320px to 4K+ screens

<br>

---

<br>

<div align="center">

## Roadmap

</div>

<br>

### v1.0 -- Current (Complete)

- [x] Hero section with terminal animation
- [x] Model specification grid
- [x] Ecosystem showcase (YUY + YUY-Chat)
- [x] Embedded Gradio demo via iframe
- [x] Evaluation benchmarks and training stats
- [x] Creator profile with origin story
- [x] GitHub Sponsors integration
- [x] Responsive footer with full link map
- [x] Dark cyberpunk theme with sakura accents
- [x] Mobile-first responsive design
- [x] Smooth scroll navigation

### v1.1 -- Enhancements (Planned)

- [ ] Blog / changelog section
- [ ] Model comparison page (checkpoint evolution)
- [ ] Interactive evaluation chart (Recharts)
- [ ] Animated stats counters on scroll
- [ ] Open Graph images for social sharing
- [ ] RSS feed for project updates

### v2.0 -- Ecosystem Hub (Future)

- [ ] Documentation section with MDX
- [ ] Model download page with direct links
- [ ] Community contributions gallery
- [ ] Multi-language support (EN/ES/JP)
- [ ] Search functionality
- [ ] Dark/light theme toggle

<br>

---

<br>

<div align="center">

## Contributing

</div>

<br>

### Development Setup

```bash
git clone https://github.com/YuuKi-OS/yuuki-web
cd yuuki-web

# install dependencies
pnpm install

# start dev server
pnpm dev

# type check
pnpm tsc --noEmit

# lint
pnpm lint
```

### Commit Convention

```
<type>(<scope>): <subject>
```

Types: `feat` | `fix` | `docs` | `style` | `refactor` | `chore`

```
feat(hero): add terminal typing animation

- Implement character-by-character typing effect
- Add cursor blink animation
- Support multiple code examples in rotation

Closes #7
```

### Pull Request Checklist

- [ ] TypeScript compiles without errors
- [ ] Responsive on mobile and desktop
- [ ] Accessibility checked (keyboard, screen reader)
- [ ] No console errors or warnings
- [ ] Design tokens used (no hardcoded colors)
- [ ] Commits follow the convention above

<br>

---

<br>

<div align="center">

## About the Yuuki Project

</div>

<br>

Yuuki-Web is the public face of the [Yuuki project](https://huggingface.co/OpceanAI/Yuuki-best) -- a code-generation LLM being trained entirely on a smartphone (Redmi 12, Snapdragon 685, CPU only) with zero cloud budget.

<table>
<tr>
<td width="50%" valign="top">

**Training Details**

| | |
|:--|:--|
| Base model | GPT-2 (124M parameters) |
| Training type | Continued pre-training |
| Hardware | Snapdragon 685, CPU only |
| Training time | 50+ hours |
| Progress | 2,000 / 37,500 steps (5.3%) |
| Cost | $0.00 |

</td>
<td width="50%" valign="top">

**Quality Scores (Checkpoint 2000)**

| Language | Score |
|:---------|:------|
| Agda | 55 / 100 |
| C | 20 / 100 |
| Assembly | 15 / 100 |
| Python | 8 / 100 |

</td>
</tr>
</table>

Created by **agua_omg** -- a young independent developer who started the project in January 2026 because paying for Claude was no longer an option. The name Yuuki combines the Japanese word for snow (Yuki) with the character Yuu from Girls' Last Tour.

<br>

---

<br>

<div align="center">

## Related Projects

</div>

<br>

| Project | Description |
|:--------|:------------|
| [yuy](https://github.com/YuuKi-OS/yuy) | CLI for downloading, managing, and running Yuuki models |
| [yuy-chat](https://github.com/YuuKi-OS/yuy-chat) | TUI chat interface for local AI conversations |
| [Yuuki-best](https://huggingface.co/OpceanAI/Yuuki-best) | Best checkpoint model weights |
| [Yuuki Space](https://huggingface.co/spaces/OpceanAI/Yuuki) | Web-based interactive demo |
| [yuuki-training](https://github.com/YuuKi-OS/yuuki-training) | Training code and scripts |

<br>

---

<br>

<div align="center">

## Links

</div>

<br>

<div align="center">

[![Model Weights](https://img.shields.io/badge/Model_Weights-Hugging_Face-ffd21e?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co/OpceanAI/Yuuki-best)
&nbsp;
[![Live Demo](https://img.shields.io/badge/Live_Demo-Spaces-ffd21e?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co/spaces/OpceanAI/Yuuki)
&nbsp;
[![YUY CLI](https://img.shields.io/badge/Yuy_CLI-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YuuKi-OS/yuy)

<br>

[![YUY Chat](https://img.shields.io/badge/Yuy_Chat-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YuuKi-OS/yuy-chat)
&nbsp;
[![Sponsor](https://img.shields.io/badge/Sponsor-GitHub_Sponsors-ea4aaa?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/aguitauwu)
&nbsp;
[![Report Issue](https://img.shields.io/badge/Report_Issue-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YuuKi-OS/yuuki-web/issues)

</div>

<br>

---

<br>

<div align="center">

## License

</div>

<br>

```
MIT License

Copyright (c) 2026 Yuuki Project

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

<br>

---

<br>

<div align="center">

**Built with patience, a phone, and zero budget.**

<br>

[![Yuuki Project](https://img.shields.io/badge/Yuuki_Project-2026-000000?style=for-the-badge)](https://huggingface.co/OpceanAI)

<br>

</div>
