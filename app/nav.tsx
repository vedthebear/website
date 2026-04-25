"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Projects" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 h-screen flex flex-col gap-7 px-10 py-16">
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`relative text-4xl underline-slide transition-colors duration-300 ${
              active ? "text-[var(--muted)]" : ""
            }`}
          >
            <span
              aria-hidden
              className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 text-[var(--muted)] transition-all duration-300 ease-out ${
                active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
              }`}
            >
              ▸
            </span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
