import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { tweets } from "@/content/tweets";

export const metadata = { title: "Writing — Ved Vedere" };

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <main className="flex flex-col items-center px-8 py-20">
      <div className="w-full max-w-4xl flex flex-col gap-14">

        <section>
          <h2 className="text-3xl pb-3 mb-3 border-b border-[var(--muted)]/40">Essays</h2>
          <p className="text-base leading-relaxed text-[var(--muted)] italic mb-6">
            Longer-form essays on ideas I've been reflecting on. 
          </p>
          {posts.length === 0 ? (
            <p className="text-[var(--muted)]">no posts yet.</p>
          ) : (
            <ul className="list-disc pl-6 flex flex-col gap-4">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/writing/${post.slug}`} className="group flex items-baseline justify-between gap-4">
                    <span className="text-lg font-semibold underline-slide-child">
                      {post.title}
                    </span>
                    <span className="text-base text-[var(--muted)] shrink-0">{post.date}</span>
                  </Link>
                  {post.description && (
                    <p className="text-base text-[var(--foreground)] mt-1">{post.description}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <h2 className="text-3xl pb-3 mb-3 border-b border-[var(--muted)]/40">Tweets</h2>
          <p className="text-base leading-relaxed text-[var(--muted)] italic mb-6">
            &ldquo;Sometimes I write twitter threads as a low-effort way to express something I&rsquo;d have written an essay about if I had more time&rdquo; &mdash; Chris Olah
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-4">
            {tweets.map((tweet) => (
              <li key={tweet.url}>
                <a
                  href={tweet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline justify-between gap-4"
                >
                  <span className="text-lg font-semibold text-link">
                    {tweet.title}
                  </span>
                  {tweet.date && (
                    <span className="text-base text-[var(--muted)] shrink-0">{tweet.date}</span>
                  )}
                </a>
                <p className="text-base text-[var(--foreground)] mt-1">{tweet.blurb}</p>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </main>
  );
}
