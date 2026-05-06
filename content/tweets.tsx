import type { ReactNode } from "react";

export type Tweet = {
  url: string;
  title: string;
  blurb: ReactNode;
  date?: string;
};

export const tweets: Tweet[] = [
  {
    url: "https://x.com/vedvedere/status/2048186308963848554",
    title: "thread",
    blurb: "a short thought I posted instead of writing the essay it deserved.",
  },
];
