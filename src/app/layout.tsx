import type { Metadata, Viewport } from "next";
import { profile, seo } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  authors: [{ name: profile.name }],
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    images: [profile.photo],
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F5F0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
