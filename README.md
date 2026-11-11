# Aman Suwaliya — Portfolio

Personal portfolio website built from the Figma design
([Portfolio Final, Desktop 1440](https://www.figma.com/design/XJbCHhgP7FumiXwAKZhaFr/Aman-Po?node-id=7-75)).

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · static export

---

## Run it locally

Requires **Node.js 18.18+** (20 or 22 recommended).

```bash
npm install
npm run dev        # http://localhost:3000
```

Build a production version:

```bash
npm run build      # outputs a static site to /out
```

---

## Editing content (no coding needed)

**All text, links and lists live in one file: `src/content/site.ts`.**

| To change…                         | Edit in `site.ts`               |
| ---------------------------------- | ------------------------------- |
| Name, email, phone, availability   | `profile`                       |
| LinkedIn / Behance / Dribbble URLs | `social`                        |
| Hero headline & intro              | `hero`                          |
| About text & facts                 | `about`                         |
| Projects                           | `projects.items`                |
| Skills                             | `skills.groups`                 |
| Jobs                               | `experience.items`              |
| Education                          | `education.items`               |
| Final call-to-action               | `cta`                           |
| Browser title / SEO description    | `seo`                           |

**Formatting tips**

- `\n` makes a line break: `"Hello, I’m\nAman."`
- Wrap words in `{curly braces}` to make them blue italic: `"people {enjoy} using."`

**Replace files**

- Photo → `public/images/aman-suwaliya.jpg` (square, at least 600×600)
- Résumé → `public/resume/Aman-Suwaliya-Resume.pdf`

---

## Changing the design

Colors and fonts are defined once in **`src/app/globals.css`** inside `@theme`,
mirroring the Figma "Portfolio Light" tokens:

| Token          | Value     | Use                  |
| -------------- | --------- | -------------------- |
| `paper`        | `#F7F5F0` | Page background      |
| `paper-2`      | `#EEEBE3` | Alternate background |
| `ink`          | `#141414` | Text                 |
| `muted`        | `#6E6B66` | Secondary text       |
| `line`         | `#E1DDD3` | Hairline dividers    |
| `accent`       | `#3346FF` | Brand blue           |

Fonts: **Instrument Serif** (headlines) and **DM Sans** (body), self-hosted via Fontsource.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # <html>, SEO metadata
│   ├── page.tsx            # Section order of the page
│   ├── globals.css         # Design tokens, fonts, animations
│   └── icon.svg            # Favicon
├── content/
│   └── site.ts             # ← ALL website content
├── components/
│   ├── sections/           # One file per page section
│   │   ├── Header.tsx      ├── Skills.tsx
│   │   ├── Hero.tsx        ├── Experience.tsx
│   │   ├── About.tsx       ├── Education.tsx
│   │   ├── Projects.tsx    ├── ContactInfo.tsx
│   │   ├── CTA.tsx         └── Footer.tsx
│   ├── ui/                 # Reusable building blocks
│   │   ├── Button.tsx      # Pill buttons (4 variants)
│   │   ├── TextLink.tsx    # Underlined link with arrow
│   │   ├── Section.tsx     # Container, SectionLabel, SectionHeading
│   │   ├── Reveal.tsx      # Scroll fade-in animation
│   │   └── Icon.tsx        # SVG icons
│   └── visuals/
│       └── ProjectVisual.tsx  # Coded project thumbnails
└── lib/
    └── richText.tsx        # \n and {accent} formatting helper
public/
├── images/aman-suwaliya.jpg
└── resume/Aman-Suwaliya-Resume.pdf
```

**Reorder or remove sections** by editing the list in `src/app/page.tsx`.

**Use real project screenshots:** add images to `public/images/`, add an `image`
field to each project in `site.ts`, and render `<Image src={p.image} … />`
in `Projects.tsx` instead of `<ProjectVisual />`.

---

## Deploy

The site exports as plain static files, so it runs anywhere:

- **Vercel:** import the repo → Deploy (zero config)
- **Netlify:** build command `npm run build`, publish directory `out`
- **GitHub Pages / any host:** upload the contents of `out/`

---

## Before going live — checklist

- [ ] Set real Behance & Dribbble URLs in `social`
- [ ] Link each project's `href` to its case study (currently `#`)
- [ ] Review the one-line descriptions in `experience.items`
- [ ] Add `metadataBase: new URL("https://your-domain.com")` in `layout.tsx` once you have a domain
