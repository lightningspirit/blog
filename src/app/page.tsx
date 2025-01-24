import { Pagination } from "@/components/pagination";
import { Posts } from "@/components/posts";
import { getPaginatedPosts } from "@/posts";

export default async function Home() {
  const { posts, total } = await getPaginatedPosts({ page: 1, limit: 12 });

  return (
    <>
      <p>
        Hi, I&#39;m <b>Vitor de Carvalho</b>, a Software Engineer, Hacker, <a href="https://github.com/lightningspirit" rel="nofollow noopener noreferrer">Open Source contributor</a>, Musician, and Astrophysics enthusiast living in sunny <a href="https://duckduckgo.com/?q=lisbon+portugal" rel="nofollow noopener noreferrer">Lisbon, Portugal</a>.
      </p>
      <p>
      I work at <a href="https://clickhouse.com/" rel="nofollow noopener noreferrer">ClickHouse</a> and in the past, I worked for <a href="https://www.sapo.pt/" rel="nofollow noopener noreferrer">SAPO</a> and <a href="https://www.talkdesk.com/" rel="nofollow noopener noreferrer">Talkdesk</a>
      </p>
      <p>
        Some of my personal projects include <a href="https://www.npmjs.com/package/funtastic">Funtastic</a> and <a href="https://www.npmjs.com/package/editorjs-blocks-react-renderer">Editor.js Blocks React Renderer</a>
      </p>

      <Posts posts={posts} />
      <Pagination baseUrl="/page" page={1} perPage={12} total={total} />
    </>
  );
}
