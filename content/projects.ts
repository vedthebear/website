export type Project = {
  name: string;
  description: string;
  year: number;
  url?: string;
};

export const projects: Project[] = [
  {
    name: "example project",
    description: "a short description of what this does",
    year: 2024,
    url: "https://github.com/vedthebear",
  },
];
