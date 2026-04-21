import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata = { title: "Writing — Ved Vedere" };

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <main className="flex flex-col items-center px-8 py-20">
      <div className="w-full max-w-lg">
        <h2 className="text-3xl mb-12 text-center">Writing</h2>

        {posts.length === 0 ? (
          <p className="text-[var(--muted)] text-center">no posts yet.</p>
        ) : (
          <ul className="flex flex-col gap-8">
            {posts.map((post) => (
              <li key={post.slug} className="text-center">
                <Link href={`/writing/${post.slug}`} className="group flex flex-col gap-1">
                  <span className="text-xl underline-slide-child inline-block">
                    {post.title}
                  </span>
                  <span className="text-base text-[var(--muted)]">{post.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
