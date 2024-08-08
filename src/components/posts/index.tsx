import { type Post } from "@/posts";
import Link from "next/link";

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <ul className="!list-none !list-outside !pl-0 !table">
      {posts.map(({ slug, title, description, date }) => (
        <li key={slug} className="table-row">
          <p className="text-sm !text-zinc-500 proportional-nums lg:pt-3 w-24">
            {new Date(date).toLocaleDateString()}{" "}
          </p>
          <div className="space-y-1 lg:table-cell">
            <h2 className="font-serif text-xl">
              <Link href={`/${slug}`}>{title}</Link>
            </h2>
            <p className="text-base">
              {description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
