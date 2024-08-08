import { getPosts } from "@/posts";


export const baseUrl = 'https://lightningspir.it'

export default async function sitemap() {
  const blogs = (await getPosts()).map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: post.date,
  }))

  const routes = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
