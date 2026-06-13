export const allPostsQuery = `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage { asset, alt },
    "categories": categories[]->{title, "slug": slug.current},
    "author": author->{name}
  }
`

export const allSlugsQuery = `
  *[_type == "post" && defined(slug.current)]{ "slug": slug.current }
`

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage { asset, alt },
    "categories": categories[]->{title, "slug": slug.current},
    "author": author->{name},
    body,
    faqs
  }
`

export const recentPostsQuery = `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    mainImage { asset, alt },
    "categories": categories[]->{title, "slug": slug.current}
  }
`
