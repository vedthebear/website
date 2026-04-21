import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/mdx";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    return { title: `${post.title} — Ved Vedere` };
  } catch {
    return { title: "Ved Vedere" };
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  return (
    <main className="flex flex-col items-center px-8 py-16">
      <div className="w-full max-w-lg">
        <nav className="mb-16 flex justify-center gap-6 text-base text-[var(--muted)]">
          <Link href="/" className="underline-slide hover:text-[var(--foreground)] transition-colors">
            Ved Vedere
          </Link>
          <Link href="/writing" className="underline-slide hover:text-[var(--foreground)] transition-colors">
            writing
          </Link>
        </nav>

        <header className="mb-12 text-center">
          <h1 className="text-4xl mb-2">{post.title}</h1>
          <time className="text-base text-[var(--muted)]">{post.date}</time>
        </header>

        <article className="prose-mdx">
          <MDXRemote source={post.content} />
        </article>
      </div>
    </main>
  );
}
