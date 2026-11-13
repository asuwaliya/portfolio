# Aman Suwaliya — Portfolio website (Netlify package)

A static, responsive website: the home page plus three case studies.

| Page | File | Live URL after deploy |
|---|---|---|
| Home | `index.html` | `/` |
| CADEX Legal | `cadex.html` | `/cadex` |
| SITA Travart | `sita.html` | `/sita` |
| ORYX | `oryx.html` | `/oryx` |

No build step is needed. Upload the folder as it is.

---

## Step 1 — Export the images from Figma (one click)

Every image the site needs already has export settings and the right name in your Figma file.

1. Open the Figma file **Aman-Po** and go to the **Portfolio** page.
2. Click an empty spot on the canvas so nothing is selected.
3. Press **Ctrl + Shift + E** (Windows) or **Cmd + Shift + E** (Mac). You can also use **File → Export…**.
4. Figma lists **74 items** named like `home/avatar`, `cadex/v01`, `sita/v01`, `oryx/v01`. Click **Export**.
5. Choose this package's **`assets`** folder as the destination.

Figma creates the `home`, `cadex`, `sita` and `oryx` subfolders automatically. The full list of expected files is in `assets/EXPECTED_FILES.txt`.

> Tip: the images export at 2× for sharp screens. If the upload feels heavy, you can compress the JPGs with a tool like Squoosh or TinyJPG first. The file names must stay the same.

## Step 2 — Add your résumé

Put your CV in the root of this folder as **`resume.pdf`**. Both "Download résumé" buttons link to it.

## Step 3 — Update your social links (2 minutes)

Your Behance and Dribbble profile URLs aren't in the Figma file, so they currently point to the sites' home pages. Search the HTML files for `behance.net/` and `dribbble.com/` and replace them with your profile links. LinkedIn is already set to `linkedin.com/in/aman-suwaliya`; check that it's correct.

## Step 4 — Deploy on Netlify

1. Go to **app.netlify.com → Add new site → Deploy manually**.
2. Drag and drop **this whole folder** (the one containing `index.html`) onto the upload area.
3. Netlify gives you a live URL in a few seconds. Rename it under **Site configuration → Change site name**, or connect your own domain under **Domain management**.

To update the site later, drag the updated folder onto **Deploys** for the same site.

---

## What's inside

```
index.html          Home page
cadex.html          Case study — CADEX Legal
sita.html           Case study — SITA Travart
oryx.html           Case study — ORYX
styles.css          All styles (portfolio colours, Instrument Serif + DM Sans)
404.html            "Page not found" page
favicon.svg         Browser tab icon
netlify.toml        Netlify settings (caching, /work/<name> shortcut links)
robots.txt
assets/             Images (export from Figma, see Step 1)
```

**Navigation:** the project cards on the home page open each case study. Inside a case study, "All work" and the logo return home, and "Read next case study" cycles CADEX → SITA → ORYX → CADEX.

**Responsive:** the layout adapts from large desktop down to mobile (390 px).
