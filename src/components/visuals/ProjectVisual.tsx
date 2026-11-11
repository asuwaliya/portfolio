import type { ProjectVisual as VisualType } from "@/content/site";

/**
 * Illustrative project thumbnails, built in code so they stay crisp.
 * To use real screenshots instead, put an image in /public/images and
 * swap <ProjectVisual/> for <Image/> in Projects.tsx.
 */
export function ProjectVisual({ type }: { type: VisualType }) {
  if (type === "dashboard") return <Dashboard />;
  if (type === "flow") return <Flow />;
  return <Shop />;
}

function Dashboard() {
  const bars = [40, 55, 48, 70, 62, 85, 75];
  return (
    <div className="absolute inset-x-[14%] top-[18%] bottom-[10%] rounded-2xl bg-white p-[6%] shadow-[0_30px_60px_rgba(26,38,102,0.12)] transition-transform duration-500 group-hover:-translate-y-2">
      <p className="text-xs text-muted sm:text-[13px]">Outstanding receivables</p>
      <p className="mt-1 font-serif text-3xl tracking-tight sm:text-5xl">$1,24,680</p>
      <div className="mt-[8%] flex h-[45%] items-end gap-[4%]">
        {bars.map((h, i) => (
          <div key={i} className={`flex-1 rounded-lg ${i === 5 ? "bg-accent" : "bg-[#D1DBFF]"}`} style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

function Flow() {
  const steps = ["Query received", "Intent classified", "Fare rules checked", "Reply drafted"];
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-4 px-[20%] transition-transform duration-500 group-hover:-translate-y-2 sm:gap-6">
      {steps.map((s, i) => (
        <div
          key={s}
          className={`flex w-fit items-center gap-3 rounded-full bg-white px-4 py-2.5 text-sm font-medium shadow-sm sm:px-5 sm:py-3.5 sm:text-base ${i % 2 ? "ml-[18%]" : ""}`}
        >
          <span className={`size-2.5 rounded-full ${i === 3 ? "bg-accent" : "bg-[#369A80]"}`} />
          {s}
        </div>
      ))}
    </div>
  );
}

function Shop() {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-[3%] px-[8%] transition-transform duration-500 group-hover:-translate-y-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className={`w-[26%] rounded-xl bg-white p-[2.5%] shadow-[0_20px_40px_rgba(102,64,26,0.12)] ${i === 1 ? "-translate-y-[8%]" : ""}`}>
          <div className="flex aspect-square items-center justify-center rounded-lg bg-[#FAF2E6]">
            <div className="size-[38%] rounded-full border-[3px] border-[#CC9E4D] sm:border-4" />
          </div>
          <div className="mt-[12%] h-2 w-[70%] rounded bg-ink" />
          <div className="mt-[6%] h-1.5 w-[42%] rounded bg-[#B3B3B3]" />
          <div className="mt-[8%] h-1.5 w-[28%] rounded bg-accent" />
        </div>
      ))}
    </div>
  );
}
