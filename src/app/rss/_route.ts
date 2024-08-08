import { getPaginatedPosts } from "@/posts";
import { baseUrl } from "../sitemap";

export async function GET() {
  const { posts } = await getPaginatedPosts({ page: 1, limit: 50 });

  const itemsXml = posts
    .sort((a, b) => {
      if (new Date(a.date) > new Date(b.date)) {
        return -1
      }
      return 1
    })
    .map(
      (post) =>
        `<item>
          <title>${post.title}</title>
          <link>${baseUrl}/${post.slug}</link>
          <description>${post.description || ''}</description>
          <pubDate>${new Date(
            post.date
          ).toUTCString()}</pubDate>
        </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Lightningspirit's blog</title>
        <link>${baseUrl}</link>
        <description>Written by Vitor De Carvalho, Software Developer, Hacker, Musician, Astrophysics lover, who lives in sunny Lisbon, Portugal.</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}