import { client } from '@/sanity/lib/client'

export const dynamic = 'force-static'

const baseUrl = 'https://truvet.in'

const servicePages = [
  'opd-consultation-gurugram',
  'dog-vaccination-gurugram',
  'cat-vaccination-gurugram',
  'dog-deworming-gurugram',
  'cat-deworming-gurugram',
  'dog-health-checkup-gurugram',
  'cat-health-checkup-gurugram',
  'pet-surgery-gurugram',
]

export default async function sitemap() {
  const now = new Date()
  const posts = await client
    .fetch(`*[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt, publishedAt }`)
    .catch(() => [])

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/location/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/`, lastModified: now, changeFrequency: 'daily', priority: 0.7 },
    ...servicePages.map((slug) => ({
      url: `${baseUrl}/services/${slug}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}/`,
      lastModified: new Date(post._updatedAt || post.publishedAt || now),
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  ]
}
