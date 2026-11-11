/**
 * ============================================================
 *  SITE CONTENT — edit this file to update the whole website.
 *  No component code needs to change for text, links or lists.
 * ============================================================
 */

export const profile = {
  name: "Aman Suwaliya",
  role: "Senior UI/UX Designer",
  location: "Indore, India",
  locationFull: "Indore, Madhya Pradesh, India",
  email: "asuwaliya@gmail.com",
  phone: "+91 74152 07186",
  photo: "/images/aman-suwaliya.jpg",
  resume: "/resume/Aman-Suwaliya-Resume.pdf",
  available: true,
  availabilityText: "Available for new opportunities",
};

export const social = {
  linkedin: { label: "LinkedIn", handle: "in/aman-suwaliya", href: "https://www.linkedin.com/in/aman-suwaliya/" },
  // TODO: replace with your real profile URLs
  behance: { label: "Behance", handle: "View portfolio", href: "https://www.behance.net/" },
  dribbble: { label: "Dribbble", handle: "View portfolio", href: "https://dribbble.com/" },
};

export const seo = {
  title: "Aman Suwaliya — Senior UI/UX Designer",
  description:
    "Senior UI/UX Designer with 7+ years of experience designing user-centered products for web, mobile and SaaS. Based in Indore, India.",
};

/* ---------------------------- Hero ---------------------------- */
export const hero = {
  eyebrow: ["Senior UI/UX Designer", "7+ years", "Indore, India"],
  // The word inside {curly braces} is rendered in blue italics.
  headline: "Designing products\npeople {enjoy} using.",
  intro:
    "I help product teams turn complex requirements into clear, accessible experiences across web, mobile and SaaS — from early research to scalable, production-ready design systems.",
  primaryCta: { label: "See selected work", href: "#projects" },
  secondaryCta: { label: "Download résumé", href: profile.resume },
  trustLabel: "Experience at",
};

/* ---------------------------- About --------------------------- */
export const about = {
  label: "01 / About",
  heading: "Hello, I’m\nAman.",
  statement:
    "I turn complex problems into {simple, accessible and visually engaging} digital products — grounded in research and refined through iteration.",
  bio: "Today I’m a Senior UI/UX Designer at Galaxy Weblinks, designing products in fintech, travel and e-commerce. My work spans user research, design strategy and interaction design — and I use design systems and AI tools like ChatGPT, Claude and Figma Make to move faster without compromising quality.",
  facts: [
    { label: "Experience", value: "7+ years" },
    { label: "Companies", value: "4 teams & studios" },
    { label: "Platforms", value: "Web · Mobile · SaaS" },
  ],
};

/* --------------------------- Projects ------------------------- */
export type ProjectVisual = "dashboard" | "flow" | "shop";

export const projects = {
  label: "02 / Projects",
  heading: "Recent\n{projects.}",
  intro: "Selected work across fintech, travel and e-commerce — each shaped by research and designed to scale.",
  items: [
    {
      title: "Cadex Solution",
      category: "Fintech · SaaS",
      description:
        "Accounts receivable management platform — simplifying invoicing, collections and cash-flow visibility for finance teams.",
      visual: "dashboard" as ProjectVisual,
      tint: "#DCE3FF",
      href: "#", // TODO: link to case study
    },
    {
      title: "SITA (Travart)",
      category: "Travel · Automation",
      description:
        "Travel query automation for SITA — turning complex, multi-step requests into clear and guided workflows for agents.",
      visual: "flow" as ProjectVisual,
      tint: "#DCF0E6",
      href: "#",
    },
    {
      title: "Tiny Tags",
      category: "E-commerce · WooCommerce",
      description:
        "WooCommerce integration and automation for a custom jewelry brand — a smoother journey from discovery to personalised checkout.",
      visual: "shop" as ProjectVisual,
      tint: "#F8E6D1",
      href: "#",
    },
  ],
  moreText: "Want to see more? Explore UI explorations and visual work on Behance and Dribbble.",
};

/* ------------------------ Skills & tools ---------------------- */
export const skills = {
  label: "03 / Skills & tools",
  heading: "Skills & {tools.}",
  intro: "The methods and tools I rely on to take products from discovery to delivery.",
  groups: [
    { title: "UI design", items: ["Visual Design", "Interaction Design", "Responsive Design", "Design Systems", "Branding"] },
    {
      title: "UX research",
      items: ["User Research", "Persona Development", "Wireframing", "Prototyping", "Usability Testing", "Heuristic Evaluation", "Accessibility (WCAG)"],
    },
    { title: "Design tools", items: ["Figma", "Adobe XD", "Photoshop", "Illustrator"] },
    { title: "AI tools", items: ["ChatGPT", "Claude", "Figma Make"] },
  ],
};

/* -------------------------- Experience ------------------------ */
export const experience = {
  label: "04 / Experience",
  heading: "Experience.",
  intro: "A steady progression from UI/UX Designer to Senior — designing for product companies and client studios since 2019.",
  items: [
    {
      period: "Apr 2023 — Present",
      role: "Sr. UI/UX Designer",
      company: "Galaxy Weblinks Ltd",
      description: "Leading UI/UX across web, mobile and SaaS products — research, design strategy, design systems and AI-assisted workflows.",
    },
    {
      period: "Dec 2021 — Apr 2023",
      role: "Sr. UI/UX Designer",
      company: "Ideal IT Techno Pvt Ltd",
      description: "Designed user-centered web and mobile experiences for multiple clients, from wireframes to high-fidelity UI.",
    },
    {
      period: "Nov 2020 — Dec 2021",
      role: "UI/UX Designer",
      company: "Cocosto Design Studio",
      description: "Delivered UX strategy, wireframes, prototypes and visual design for studio clients across industries.",
    },
    {
      period: "Jan 2019 — Feb 2020",
      role: "UI/UX Designer",
      company: "Genxcellence",
      description: "Started my journey in interface design — building responsive layouts and learning usability fundamentals.",
    },
  ],
};

// Short names used in the hero "Experience at" line
export const companies = ["Galaxy Weblinks", "Ideal IT Techno", "Cocosto Design Studio", "Genxcellence"];

/* -------------------------- Education ------------------------- */
export const education = {
  label: "05 / Education",
  heading: "Education &\n{certification.}",
  items: [
    { period: "2014 — 2018", title: "Bachelor of Engineering", place: "Malwa Institute of Science & Technology, Indore" },
    { period: "2013 — 2014", title: "Higher Secondary", place: "Shree Adinath HSS School, Indore" },
    { period: "Certification", title: "User Experience Certificate", place: "Accenture" },
  ],
};

/* ------------------------- Contact info ----------------------- */
export const contact = {
  label: "06 / Contact",
  heading: "Get in\n{touch.}",
  intro: "Prefer a direct line? I’m always happy to talk about product, design and new opportunities.",
  items: [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { label: "Location", value: profile.locationFull },
    { label: social.linkedin.label, value: social.linkedin.handle, href: social.linkedin.href },
    { label: social.behance.label, value: social.behance.handle, href: social.behance.href },
    { label: social.dribbble.label, value: social.dribbble.handle, href: social.dribbble.href },
  ],
};

/* ----------------------------- CTA ---------------------------- */
export const cta = {
  badge: "Open to full-time roles & freelance projects",
  headline: "Have a product that deserves\na {better experience?}",
  body: "Whether you’re hiring a senior designer or starting something new, let’s turn your idea into an intuitive, accessible product people genuinely enjoy using.",
  primary: {
    label: "Start a conversation",
    href: `mailto:${profile.email}?subject=${encodeURIComponent("Let’s work together")}`,
  },
  secondary: { label: "Download résumé", href: profile.resume },
};
