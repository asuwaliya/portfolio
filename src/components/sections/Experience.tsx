import { experience } from "@/content/site";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="bg-white py-24 lg:py-36">
      <Container className="grid gap-14 lg:grid-cols-[1fr_760px] lg:gap-16">
        <Reveal className="flex flex-col gap-10 lg:sticky lg:top-32 lg:self-start">
          <SectionLabel>{experience.label}</SectionLabel>
          <SectionHeading>{experience.heading}</SectionHeading>
          <p className="max-w-[360px] leading-[1.7] text-muted">{experience.intro}</p>
        </Reveal>

        <ol className="border-b border-line">
          {experience.items.map((job) => (
            <Reveal key={job.period} className="border-t border-line">
              <li className="grid gap-3 py-10 sm:grid-cols-[170px_1fr] sm:gap-12 lg:py-11">
                <p className="pt-2 text-xs font-medium uppercase tracking-[0.08em] text-muted">{job.period}</p>
                <div className="flex flex-col gap-2.5">
                  <h3 className="display text-[38px] leading-[1.05]">{job.role}</h3>
                  <p className="text-sm font-medium text-accent">{job.company}</p>
                  <p className="text-[15px] leading-[1.6] text-muted">{job.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
