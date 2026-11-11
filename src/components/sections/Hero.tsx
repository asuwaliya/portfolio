import Image from "next/image";
import { companies, hero, profile } from "@/content/site";
import { richText } from "@/lib/richText";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { Container, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section id="top" className="pb-20 pt-16 sm:pt-24 lg:pb-28 lg:pt-28">
      <Container>
        <div className="flex flex-col-reverse items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Reveal className="flex flex-col gap-8">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em]">
              <span className="size-1.5 rounded-full bg-accent" />
              {hero.eyebrow.join("  ·  ")}
            </p>
            <h1 className="display text-[56px] sm:text-[96px] xl:text-[128px]">{richText(hero.headline)}</h1>
          </Reveal>

          <Reveal delay={150} className="shrink-0">
            <div className="relative size-40 overflow-hidden rounded-full border-[6px] border-white shadow-[0_24px_48px_rgba(51,70,255,0.18)] sm:size-56 lg:size-[270px]">
              <Image src={profile.photo} alt={`Portrait of ${profile.name}`} fill priority sizes="270px" className="object-cover" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={250} className="mt-14 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-[540px] text-lg leading-relaxed text-muted">{hero.intro}</p>
          <div className="flex flex-wrap items-center gap-6">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <TextLink href={hero.secondaryCta.href} download>
              {hero.secondaryCta.label}
            </TextLink>
          </div>
        </Reveal>

        <Reveal delay={350}>
          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-line pt-7">
            <SectionLabel>{hero.trustLabel}</SectionLabel>
            {companies.map((c) => (
              <span key={c} className="font-serif text-2xl tracking-tight text-muted sm:text-[26px]">
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
