import { projects } from "@/content/projects";

export const metadata = { title: "Projects — Ved Vedere" };

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center px-8 py-20">
      <div className="w-full max-w-2xl">
        <h2 className="text-5xl mb-12">Projects</h2>

        <ul className="flex flex-col divide-y divide-[var(--muted)]/20">
          {projects.map((project) => (
            <li key={project.name} className="py-8 first:pt-0 last:pb-0">
              <p className="text-lg leading-relaxed text-[var(--foreground)]">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-link"
                  >
                    {project.name}
                  </a>
                ) : (
                  <span className="font-semibold">{project.name}</span>
                )}{" "}
                {project.blurb}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
