export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center px-8 py-16">
      <div className="w-full max-w-2xl flex flex-col gap-10">

        {/* Header: photo + name + socials */}
        <div className="flex items-center gap-10">
          <div className="w-40 h-40 rounded-full overflow-hidden shrink-0">
            <img src="/headshot.jpg" alt="Ved Vedere" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-6xl leading-none">Ved Vedere</h1>
            <div className="flex gap-4 items-center text-[var(--muted)]">
            <a href="https://github.com/vedthebear" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://x.com/vedvedere" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.264 5.633 5.9-5.633zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/ved-vedere" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://vedere.bearblog.dev" target="_blank" rel="noopener noreferrer" aria-label="Bear Blog">
              <img src="/bear-blog.png" alt="Bear Blog" className="h-6 w-auto mix-blend-multiply" style={{ filter: 'invert(1) brightness(0.58) invert(1)' }} />
            </a>
            </div>
          </div>
        </div>

        {/* Body text */}
        <div className="flex flex-col gap-5 text-xl leading-relaxed text-black">
          <p>
            I study mathematics and computation at UCLA. I took a break from school to move to San Francisco and join the founding team of <a href="https://usebear.ai" target="_blank" rel="noopener noreferrer" className="text-link">Bear (YC F25)</a> as an engineer. After we raised a seed round, I decided to return to UCLA to start my next chapter.
          </p>
          <p>
            Now, I'm obsessed with applied machine learning research, specifically on language models, RL, and computer use. I think the next five years of this work are going to <a href="https://ai-2027.com/" target="_blank" rel="noopener noreferrer" className="text-link">matter a lot</a>, and I want to be close to where it's happening.
          </p>
          <p>
            I spend most of my time these days <a href="https://github.com/vedthebear/" target="_blank" rel="noopener noreferrer" className="text-link">tinkering with Claude Code</a>, reading papers, running experiments, and <a href="https://vedere.bearblog.dev/" target="_blank" rel="noopener noreferrer" className="text-link">writing</a> about what I'm learning. Outside of that, I read a lot and play sports. I was previously a top 5 badminton player in the USA.
          </p>
          <p>I love learning.</p>
          <p>Reach out to me if you'd like to chat :)</p>
        </div>

      </div>
    </main>
  );
}
