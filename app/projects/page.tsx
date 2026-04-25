import { projects } from "@/content/projects";

export const metadata = { title: "Projects — Ved Vedere" };

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center px-8 py-20">
      <div className="w-full max-w-4xl">
        <ul className="flex flex-col divide-y divide-[var(--muted)]/30">
          {projects.map((project) => (
            <li
              key={project.name}
              className="py-12 first:pt-0 last:pb-0 flex gap-6 items-start"
            >
              {project.image && (
                <div className="shrink-0 w-32 h-32 bg-white">
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className="text-2xl">
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
                  {project.date && (
                    <time className="text-base text-[var(--muted)] shrink-0">
                      {project.date}
                    </time>
                  )}
                </div>
                <p className="text-lg leading-relaxed text-[var(--foreground)]">
                  {project.blurb}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
