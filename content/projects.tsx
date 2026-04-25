import type { ReactNode } from "react";

export type Project = {
  name: string;
  url?: string;
  image?: string;
  date?: string;
  blurb: ReactNode;
};

export const projects: Project[] = [
  {
    name: "vero",
    url: "https://github.com/AbhigyaGoel/vero",
    image: "/vero.png",
    date: "2026-04",
    blurb: (
      <>
        AI physical therapist that runs a live session using computer vision and ElevenLabs TTS. A swarm of 6 Claude agents that feels like a human therapist. Built in 6 hours at the Claude hackathon (won 2nd place + $1500 API credits 🔒). <a href="https://screen.studio/share/7nFWiTbh" target="_blank" rel="noopener noreferrer" className="text-link">Demo here</a>.
      </>
    ),
  },
];
