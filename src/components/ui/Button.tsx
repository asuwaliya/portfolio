import { Icon, type IconName } from "./Icon";

type Variant = "dark" | "light" | "outline" | "outline-light";

const variants: Record<Variant, string> = {
  dark: "bg-ink text-white hover:bg-accent",
  light: "bg-white text-accent hover:bg-paper",
  outline: "border border-ink text-ink hover:bg-ink hover:text-white",
  "outline-light": "border border-white/50 text-white hover:bg-white hover:text-accent",
};

const sizes = {
  sm: "px-5 py-3 text-sm",
  md: "px-6 py-4 text-[15px]",
  lg: "px-7 py-5 text-base",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  icon?: IconName;
  download?: boolean;
  external?: boolean;
};

export function Button({ href, children, variant = "dark", size = "md", icon = "arrow-right", download, external }: Props) {
  return (
    <a
      href={href}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-2.5 rounded-full font-semibold transition-colors duration-300 ${variants[variant]} ${sizes[size]}`}
    >
      {children}
      <Icon name={icon} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px" />
    </a>
  );
}
