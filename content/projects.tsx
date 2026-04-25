import type { ReactNode } from "react";

export type Project = {
  name: string;
  url?: string;
  blurb: ReactNode;
};

export const projects: Project[] = [
  {
    name: "example project",
    url: "https://github.com/vedthebear",
    blurb: (
      <>
        A short description of what this project does and why it matters. You can include{" "}
        <a href="https://github.com/vedthebear" target="_blank" rel="noopener noreferrer" className="text-link">
          inline links
        </a>{" "}
        anywhere in the blurb.
      </>
    ),
  },
  {
    name: "second project",
    url: "https://github.com/vedthebear",
    blurb: (
      <>
        Another project, maybe a small CLI tool or a research prototype. Blurbs can be a sentence
        or two — long enough to give context, short enough to scan.
      </>
    ),
  },
  {
    name: "third project (no link)",
    blurb: (
      <>
        Projects without a url just render as plain text. Useful for things that aren&apos;t public
        yet, or experiments that never got a proper home.
      </>
    ),
  },
  {
    name: "fourth project",
    url: "https://example.com",
    blurb: (
      <>
        A longer blurb to show how multi-line entries breathe. The divider lines between entries
        come from <code>divide-y</code>, and the vertical rhythm comes from the <code>py-8</code>
        on each <code>li</code>. Inline <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-link">links</a> still work mid-sentence.
      </>
    ),
  },
];
