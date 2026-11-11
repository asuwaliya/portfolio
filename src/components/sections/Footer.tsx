import { profile, social } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/TextLink";
import { Container } from "@/components/ui/Section";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <p className="font-serif text-[32px] tracking-tight">{profile.name}</p>
            <p className="text-sm text-muted">
              {profile.role} · {profile.location}
            </p>
          </div>
          <nav aria-label="Social links" className="flex gap-8">
            {Object.values(social).map((s) => (
              <TextLink key={s.label} href={s.href} external>
                {s.label}
              </TextLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-between border-t border-line pt-6 text-[13px]">
          <p className="text-muted">
            © {year} {profile.name}. All rights reserved.
          </p>
          <a href="#top" className="inline-flex items-center gap-1.5 font-medium hover:text-accent">
            Back to top <Icon name="arrow-up" size={14} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
