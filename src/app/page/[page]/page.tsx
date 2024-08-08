import { Pagination } from "@/components/pagination";
import { Posts } from "@/components/posts";
import { getPaginatedPosts, getPosts } from "@/posts";
import { notFound, redirect } from "next/navigation";

export default async function Page({ params }: { params: { page: number } }) {
  let { page } = params;
  page = Number(page);

  if (page < 1) notFound();

  if (page == 1) redirect("/");

  const { posts, total } = await getPaginatedPosts({
    page,
    limit: 12,
  });

  if (!posts.length) notFound();

  return (
    <>
      <Posts posts={posts} />
      <Pagination baseUrl="/page" page={page} perPage={12} total={total} />
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  const pages = Math.ceil(posts.length / 12);

  return [...Array(pages)].map((_, i) => ({
    page: `${i + 1}`,
  }));
}
