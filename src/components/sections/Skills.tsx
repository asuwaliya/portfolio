import { skills } from "@/content/site";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-40">
      <Container>
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-10">
            <SectionLabel>{skills.label}</SectionLabel>
            <SectionHeading>{skills.heading}</SectionHeading>
          </div>
          <p className="max-w-[340px] leading-[1.7] text-muted">{skills.intro}</p>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-12">
          {skills.groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 80} className="border-t border-line pt-7">
              <h3 className="font-serif text-[32px] italic text-accent">{g.title}</h3>
              <ul className="mt-6 space-y-2.5">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
