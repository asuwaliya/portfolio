import { projects, social } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/TextLink";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";

export function Projects() {
  return (
    <section id="projects" className="bg-white py-24 lg:py-40">
      <Container>
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-10">
            <SectionLabel>{projects.label}</SectionLabel>
            <SectionHeading>{projects.heading}</SectionHeading>
          </div>
          <p className="max-w-[340px] leading-[1.7] text-muted">{projects.intro}</p>
        </Reveal>

        <div className="mt-16 lg:mt-24">
          {projects.items.map((p, i) => (
            <Reveal key={p.title}>
              <article className="group grid gap-8 border-t border-line py-12 lg:grid-cols-[720px_1fr] lg:gap-20 lg:py-16">
                <a href={p.href} aria-label={p.title} className="relative block aspect-[36/25] overflow-hidden rounded" style={{ background: p.tint }}>
                  <ProjectVisual type={p.visual} />
                </a>
                <div className="flex flex-col gap-6 lg:pt-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-[var(--tracking-label)] text-muted">
                      {String(i + 1).padStart(2, "0")}&nbsp;&nbsp;&nbsp;{p.category}
                    </p>
                    <span className="flex size-12 items-center justify-center rounded-full border border-line transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                      <Icon name="arrow-up-right" size={18} />
                    </span>
                  </div>
                  <h3 className="display text-5xl sm:text-[64px]">{p.title}</h3>
                  <p className="leading-[1.7] text-muted">{p.description}</p>
                  <TextLink href={p.href} className="w-fit">
                    Explore project
                  </TextLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted">{projects.moreText}</p>
          <div className="flex gap-3">
            <Button href={social.behance.href} variant="outline" size="sm" icon="arrow-up-right" external>
              Behance
            </Button>
            <Button href={social.dribbble.href} variant="outline" size="sm" icon="arrow-up-right" external>
              Dribbble
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
