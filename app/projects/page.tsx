import Link from "next/link";
import { projects } from "@/content/projects";

export const metadata = { title: "projects — Ved Vedere" };

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center px-8 py-16">
      <div className="w-full max-w-lg">
        <nav className="mb-16 text-base text-[var(--muted)] text-center">
          <Link href="/" className="underline-slide hover:text-[var(--foreground)] transition-colors">
            Ved Vedere
          </Link>
        </nav>

        <h2 className="text-3xl mb-12 text-center">projects</h2>

        <ul className="flex flex-col gap-8">
          {projects.map((project) => (
            <li key={project.name} className="text-center">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-1">
                  <span className="text-xl underline-slide-child inline-block">
                    {project.name}
                  </span>
                  <span className="text-base text-[var(--muted)]">
                    {project.description} — {project.year}
                  </span>
                </a>
              ) : (
                <div className="flex flex-col gap-1">
                  <span className="text-xl">{project.name}</span>
                  <span className="text-base text-[var(--muted)]">
                    {project.description} — {project.year}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
