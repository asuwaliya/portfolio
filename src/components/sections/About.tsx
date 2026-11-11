import { about } from "@/content/site";
import { richText } from "@/lib/richText";
import { Container, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-line py-24 lg:py-36">
      <Container className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-24">
        <Reveal className="flex flex-col gap-5">
          <SectionLabel>{about.label}</SectionLabel>
          <h2 className="display text-5xl sm:text-[64px]">{richText(about.heading)}</h2>
        </Reveal>

        <div className="flex flex-col gap-12 lg:gap-14">
          <Reveal>
            <p className="font-serif text-3xl leading-[1.18] tracking-tight sm:text-[44px]">{richText(about.statement)}</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-[640px] text-[17px] leading-[1.75] text-muted">{about.bio}</p>
          </Reveal>
          <Reveal delay={200} className="grid gap-8 sm:grid-cols-3 sm:gap-12">
            {about.facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-2.5 border-t border-line pt-6">
                <SectionLabel>{f.label}</SectionLabel>
                <p className="font-serif text-[30px] tracking-tight">{f.value}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
