import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-8 py-20">

      {/* Left nav — vertical */}
      <nav className="absolute left-12 top-20 flex flex-col gap-5 text-lg">
        <Link href="/writing" className="underline-slide">writing</Link>
        <Link href="/projects" className="underline-slide">projects</Link>
      </nav>

      {/* Header: photo + text side by side */}
      <div className="flex items-center gap-10">

        {/* Photo placeholder */}
        <div className="w-36 h-36 rounded-full border border-[var(--muted)]/40 bg-[var(--muted)]/10 flex items-center justify-center shrink-0">
          <span className="text-xs text-[var(--muted)]">photo</span>
        </div>

        {/* Name + bio + socials */}
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl leading-none">Ved Vedere</h1>
          <p className="text-lg text-[var(--muted)] italic leading-snug max-w-xs">
            Studying Math + CS @ UCLA. Working towards the frontier of AI.
          </p>
          <div className="flex gap-5 text-base text-[var(--muted)]">
            <a href="https://github.com/vedthebear" target="_blank" rel="noopener noreferrer" className="underline-slide hover:text-[var(--foreground)] transition-colors">
              github
            </a>
            <a href="https://x.com/vedvedere" target="_blank" rel="noopener noreferrer" className="underline-slide hover:text-[var(--foreground)] transition-colors">
              x
            </a>
            <a href="https://linkedin.com/in/ved-vedere" target="_blank" rel="noopener noreferrer" className="underline-slide hover:text-[var(--foreground)] transition-colors">
              linkedin
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
