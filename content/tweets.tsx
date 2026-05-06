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
    title: "On Modern Hackathons",
    blurb: "An honest observation about the state of hackathons in 2026, from the eyes of a participant.",
    date: "04/25/2026",
  },
];
