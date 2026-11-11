import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exports a fully static site to /out — deploy anywhere (Vercel, Netlify, GitHub Pages).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
