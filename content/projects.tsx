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
];
