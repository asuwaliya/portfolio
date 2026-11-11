import { education } from "@/content/site";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section id="education" className="py-24 lg:py-36">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <SectionLabel>{education.label}</SectionLabel>
          <SectionHeading>{education.heading}</SectionHeading>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12 lg:mt-20">
          {education.items.map((e, i) => (
            <Reveal key={e.title} delay={i * 80} className="flex flex-col gap-4 border-t border-ink pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">{e.period}</p>
              <h3 className="display text-4xl leading-[1.05]">{e.title}</h3>
              <p className="leading-[1.6] text-muted">{e.place}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
