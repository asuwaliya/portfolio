import { contact } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function ContactInfo() {
  return (
    <section id="contact" className="bg-white py-24 lg:py-36">
      <Container className="grid gap-14 lg:grid-cols-[380px_1fr] lg:gap-24">
        <Reveal className="flex flex-col gap-10">
          <SectionLabel>{contact.label}</SectionLabel>
          <SectionHeading>{contact.heading}</SectionHeading>
          <p className="max-w-[320px] leading-[1.7] text-muted">{contact.intro}</p>
        </Reveal>

        <Reveal delay={100} className="grid border-b border-line sm:grid-cols-2 sm:gap-x-12">
          {contact.items.map((item) => {
            const inner = (
              <>
                <span className="flex flex-col gap-2.5">
                  <SectionLabel>{item.label}</SectionLabel>
                  <span className="font-serif text-[26px] tracking-tight transition-colors group-hover:text-accent sm:text-[28px]">
                    {item.value}
                  </span>
                </span>
                {item.href && <Icon name="arrow-up-right" size={22} className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />}
              </>
            );
            const cls = "group flex items-center justify-between gap-4 border-t border-line py-8";
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={cls}
              >
                {inner}
              </a>
            ) : (
              <div key={item.label} className={cls}>
                {inner}
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
