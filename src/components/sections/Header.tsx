import { profile } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4 sm:py-5">
        <a href="#top" className="font-serif text-2xl tracking-tight sm:text-[26px]">
          {profile.name}
        </a>
        <div className="flex items-center gap-6">
          {profile.available && (
            <p className="hidden items-center gap-2.5 text-sm font-medium text-muted md:flex">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-available opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-available" />
              </span>
              {profile.availabilityText}
            </p>
          )}
          <Button href="#contact" size="sm" icon="arrow-up-right">
            Let’s talk
          </Button>
        </div>
      </Container>
    </header>
  );
}
