import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { allSlugsQuery, postBySlugQuery, recentPostsQuery } from '@/sanity/lib/queries';
import PostFAQAccordion from '@/components/PostFAQAccordion';
import ClinicStatus from '@/components/ClinicStatus';

export async function generateStaticParams() {
  const slugs = await client.fetch(allSlugsQuery).catch(() => []);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug }).catch(() => null);
  if (!post) return {};
  return {
    title: `${post.title} | TruVet Pet Care Clinic`,
    description: post.excerpt || `${post.title} - TruVet Pet Care Clinic, Sector 79 Gurugram.`,
  };
}

function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const portableComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base leading-relaxed mb-5" style={{ color: '#6b7280', fontWeight: 300 }}>
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl mt-10 mb-4 leading-snug" style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl mt-8 mb-3 leading-snug" style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg mt-6 mb-2 font-semibold" style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}>
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="my-6 pl-5 py-4 pr-4 rounded-r-lg text-base italic leading-relaxed"
        style={{
          borderLeft: '3px solid #d94f1e',
          backgroundColor: '#fdf0e8',
          color: '#6b7280',
          fontWeight: 300,
        }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 flex flex-col gap-2 pl-2">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-2.5 text-base" style={{ color: '#6b7280', fontWeight: 300 }}>
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#d94f1e' }} />
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong style={{ color: '#1a3050', fontWeight: 600 }}>{children}</strong>
    ),
    em: ({ children }) => (
      <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>{children}</em>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
        style={{ color: '#d94f1e' }}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(960).fit('max').url()}
            alt={value.alt || ''}
            className="w-full rounded-lg"
            style={{ boxShadow: '0 4px 20px rgba(26,48,80,0.08)' }}
            loading="lazy"
          />
          {value.alt && (
            <figcaption className="mt-2 text-xs text-center" style={{ color: '#6b7280', fontWeight: 300 }}>
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const [post, recentPosts] = await Promise.all([
    client.fetch(postBySlugQuery, { slug }).catch(() => null),
    client.fetch(recentPostsQuery).catch(() => []),
  ]);

  if (!post) notFound();

  const otherRecent = recentPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* ── COVER IMAGE ── */}
      {post.mainImage?.asset && (
        <div className="w-full bg-gray-100" style={{ maxHeight: '480px', overflow: 'hidden' }}>
          <img
            src={urlFor(post.mainImage).width(1200).height(480).fit('crop').url()}
            alt={post.mainImage.alt || post.title}
            className="w-full object-cover"
            style={{ maxHeight: '480px' }}
            loading="eager"
          />
        </div>
      )}

      {/* ── POST HEADER ── */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-8">
          <nav className="flex items-center gap-1.5 text-xs mb-8" style={{ color: '#6b7280', fontWeight: 300 }}>
            <Link href="/" className="hover:underline" style={{ color: '#1a3050' }}>Home</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/blog/" className="hover:underline" style={{ color: '#1a3050' }}>Blog</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span className="truncate max-w-[160px]">{post.title}</span>
          </nav>

          {post.categories?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat) => (
                <span
                  key={cat.slug}
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          <h1
            className="text-3xl md:text-4xl leading-tight mb-5"
            style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-4 pb-8" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
              style={{ backgroundColor: '#1a3050' }}
            >
              Dr
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: '#1a3050' }}>
                {post.author?.name || 'Dr. Brajmadhuri'}
              </p>
              <p className="text-xs" style={{ color: '#6b7280', fontWeight: 300 }}>
                {formatDate(post.publishedAt)} · TruVet Pet Care Clinic
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY + SIDEBAR ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 md:pb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Article body */}
            <article className="flex-1 min-w-0">
              {post.excerpt && (
                <p
                  className="text-lg leading-relaxed mb-8 pb-8"
                  style={{
                    color: '#6b7280',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                  }}
                >
                  {post.excerpt}
                </p>
              )}

              {post.body && (
                <PortableText value={post.body} components={portableComponents} />
              )}

              {/* FAQs */}
              {post.faqs?.length > 0 && (
                <div className="mt-12">
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                    style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
                  >
                    Questions
                  </span>
                  <h2
                    className="text-2xl mb-6"
                    style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}
                  >
                    Frequently asked <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>questions.</em>
                  </h2>
                  <PostFAQAccordion faqs={post.faqs} />
                </div>
              )}

              {/* WhatsApp CTA */}
              <div
                className="mt-12 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                style={{ backgroundColor: '#fdf0e8', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                <div>
                  <p className="text-base font-semibold mb-1" style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}>
                    Questions for Dr. Brajmadhuri?
                  </p>
                  <p className="text-sm" style={{ color: '#6b7280', fontWeight: 300 }}>
                    Open all 7 days, 10am to 8pm. Walk-in OPD welcome.
                  </p>
                </div>
                <a
                  href="https://wa.me/919871010355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded text-sm font-semibold text-white"
                >
                  Book on WhatsApp
                </a>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-7">

              {/* Clinic card */}
              <div
                className="rounded-lg p-5 flex flex-col gap-3"
                style={{ border: '1px solid rgba(0,0,0,0.07)', backgroundColor: '#ffffff' }}
              >
                <ClinicStatus size="xs" />
                <p className="text-sm font-semibold" style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}>
                  TruVet Pet Care Clinic
                </p>
                <p className="text-xs leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
                  Shop No 4-6, Opp. Bestech Park View Altura, Sector 79, Gurugram 122051
                </p>
                <a
                  href="https://wa.me/919871010355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn text-center text-xs font-semibold text-white px-4 py-2.5 rounded"
                >
                  Book on WhatsApp
                </a>
              </div>

              {/* Recent posts */}
              {otherRecent.length > 0 && (
                <div className="flex flex-col gap-4">
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1a3050' }}>
                    Recent Posts
                  </p>
                  {otherRecent.map((p) => (
                    <Link
                      key={p._id}
                      href={`/blog/${p.slug}/`}
                      className="flex gap-3 group"
                      style={{ textDecoration: 'none' }}
                    >
                      {p.mainImage?.asset ? (
                        <div className="w-16 h-14 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                          <img
                            src={urlFor(p.mainImage).width(128).height(112).fit('crop').url()}
                            alt={p.mainImage.alt || p.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div
                          className="w-16 h-14 flex-shrink-0 rounded flex items-center justify-center text-base"
                          style={{ backgroundColor: 'rgba(183,217,238,0.30)' }}
                        >
                          🐾
                        </div>
                      )}
                      <div className="flex flex-col gap-1">
                        <p
                          className="text-sm leading-snug group-hover:underline"
                          style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}
                        >
                          {p.title}
                        </p>
                        <p className="text-xs" style={{ color: '#6b7280', fontWeight: 300 }}>
                          {formatDate(p.publishedAt)}
                        </p>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/blog/"
                    className="text-xs font-semibold underline"
                    style={{ color: '#d94f1e' }}
                  >
                    All posts &rarr;
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
