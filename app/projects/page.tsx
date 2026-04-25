import { projects } from "@/content/projects";

export const metadata = { title: "Projects — Ved Vedere" };

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center px-8 py-20">
      <div className="w-full max-w-2xl">
        <ul className="flex flex-col divide-y divide-[var(--muted)]/30">
          {projects.map((project) => (
            <li key={project.name} className="py-12 first:pt-0 last:pb-0">
              <h3 className="text-2xl mb-3">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    {project.name}
                  </a>
                ) : (
                  <span>{project.name}</span>
                )}
              </h3>
              <p className="text-lg leading-relaxed text-[var(--foreground)]">
                {project.blurb}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
