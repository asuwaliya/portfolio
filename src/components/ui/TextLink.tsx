import { Icon } from "./Icon";

type Props = {
  href: string;
  children: React.ReactNode;
  download?: boolean;
  external?: boolean;
  className?: string;
};

/** Underlined text link with a diagonal arrow — matches the Figma "Text Link" component. */
export function TextLink({ href, children, download, external, className = "" }: Props) {
  return (
    <a
      href={href}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-1.5 border-b border-current pb-1 text-sm font-medium transition-colors hover:text-accent ${className}`}
    >
      {children}
      <Icon name="arrow-up-right" size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
