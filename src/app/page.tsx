import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

/** Section order matches the Figma design. Reorder or remove lines to change the page. */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <ContactInfo />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
