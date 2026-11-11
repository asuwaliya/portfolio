type IconName = "arrow-up-right" | "arrow-right" | "arrow-up" | "download" | "mail";

const paths: Record<IconName, React.ReactNode> = {
  "arrow-up-right": <path d="M7 17L17 7M17 7H8M17 7V16" />,
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-up": <path d="M12 19V5M6 11l6-6 6 6" />,
  download: <path d="M12 4v11m0 0l-5-5m5 5l5-5M5 20h14" />,
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
};

export function Icon({ name, size = 16, className = "" }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
