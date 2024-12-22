import { type Post } from "@/posts";
import Link from "next/link";

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <ul className="!pl-0">
      {posts.map(({ slug, title, description, date }) => (
        <li key={slug} className="table-row">
          <time className="text-base !text-zinc-500 proportional-nums whitespace-nowrap lg:pr-3">
            {new Date(date).toLocaleDateString("en-US", {
              dateStyle: "medium",
            })}{" "}
          </time>
          <div className="pb-3 lg:pl-3 lg:table-cell">
            <h2 className="!my-0">
              <Link href={`/${slug}`} className="!no-underline">{title}</Link>
            </h2>
            <p className="my-0">
              {description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
