import { cta, profile } from "@/content/site";
import { richText } from "@/lib/richText";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-accent py-28 text-white lg:py-40">
      {/* decorative rings */}
      <div aria-hidden className="pointer-events-none absolute -left-64 -top-52 size-[720px] rounded-full border border-white/12" />
      <div aria-hidden className="pointer-events-none absolute -bottom-64 -right-40 size-[560px] rounded-full border border-white/12" />

      <Container className="relative flex flex-col items-center gap-10 text-center lg:gap-12">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full bg-white/12 px-4 py-2 text-sm font-medium">
            <span className="size-2 rounded-full bg-available shadow-[0_0_8px_rgba(33,184,102,0.7)]" />
            {cta.badge}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display text-5xl sm:text-[80px] lg:text-[104px]">{richText(cta.headline, "italic")}</h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="max-w-[640px] text-lg leading-relaxed text-white/80 sm:text-[19px]">{cta.body}</p>
        </Reveal>
        <Reveal delay={300} className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={cta.primary.href} variant="light" size="lg" icon="arrow-up-right">
              {cta.primary.label}
            </Button>
            <Button href={cta.secondary.href} variant="outline-light" size="lg" icon="download" download>
              {cta.secondary.label}
            </Button>
          </div>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2.5 text-[15px] text-white/75 hover:text-white">
            <Icon name="mail" size={18} />
            or email me at {profile.email}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
