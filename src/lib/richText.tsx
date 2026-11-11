import { Fragment, type ReactNode } from "react";

/**
 * Turns content strings into styled JSX:
 *  - "\n" becomes a line break
 *  - text inside {curly braces} becomes blue italic (the accent style from Figma)
 *
 * Example: "Designing products\npeople {enjoy} using."
 */
export function richText(text: string, accentClass = "italic text-accent"): ReactNode {
  return text.split("\n").map((line, i, lines) => (
    <Fragment key={i}>
      {line.split(/(\{[^}]+\})/g).map((part, j) =>
        part.startsWith("{") && part.endsWith("}") ? (
          <em key={j} className={accentClass}>
            {part.slice(1, -1)}
          </em>
        ) : (
          <Fragment key={j}>{part}</Fragment>
        ),
      )}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
}
