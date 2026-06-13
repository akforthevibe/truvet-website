import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { allPostsQuery } from '@/sanity/lib/queries';

export const metadata = {
  title: 'Pet Care Blog | TruVet Pet Care Clinic, Sector 79 Gurugram',
  description:
    'Veterinary advice for dog and cat owners in Sector 79, Gurugram. Articles on vaccination, deworming, health checkups and more from Dr. Brajmadhuri at TruVet.',
};

function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogIndexPage() {
  const posts = await client.fetch(allPostsQuery).catch(() => []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-14 md:pb-18">
          <nav className="flex items-center gap-1.5 text-xs mb-8" style={{ color: '#6b7280', fontWeight: 300 }}>
            <Link href="/" className="hover:underline" style={{ color: '#1a3050' }}>Home</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>Blog</span>
          </nav>
          <div className="flex flex-col gap-4 max-w-2xl">
            <span
              className="self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
            >
              The Blog
            </span>
            <h1 className="text-4xl md:text-5xl leading-tight" style={{ color: '#1a3050' }}>
              Pet care advice from{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>Dr. Brajmadhuri.</em>
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              Practical veterinary guidance for dog and cat owners in Sector 79 and surrounding areas of Gurugram.
            </p>
          </div>
        </div>
      </section>

      {/* ── POSTS GRID ── */}
      <section style={{ backgroundColor: '#fdf0e8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-base" style={{ color: '#6b7280', fontWeight: 300 }}>
                Articles coming soon. Check back shortly.
              </p>
              <a
                href="https://wa.me/919871010355"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn mt-6 inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold text-white"
              >
                Ask Dr. Brajmadhuri on WhatsApp
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}/`}
                  className="hover-card bg-white rounded-lg overflow-hidden flex flex-col"
                  style={{ border: '1px solid rgba(0,0,0,0.07)', textDecoration: 'none' }}
                >
                  {/* Cover image */}
                  {post.mainImage?.asset ? (
                    <div className="w-full aspect-[16/9] overflow-hidden bg-gray-100">
                      <img
                        src={urlFor(post.mainImage).width(640).height(360).fit('crop').url()}
                        alt={post.mainImage.alt || post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-full aspect-[16/9] flex items-center justify-center text-2xl"
                      style={{ backgroundColor: 'rgba(183,217,238,0.30)' }}
                    >
                      🐾
                    </div>
                  )}

                  <div className="flex flex-col gap-3 p-5 flex-1">
                    {/* Categories */}
                    {post.categories?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {post.categories.map((cat) => (
                          <span
                            key={cat.slug}
                            className="text-xs font-medium px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
                          >
                            {cat.title}
                          </span>
                        ))}
                      </div>
                    )}

                    <h2
                      className="text-lg leading-snug"
                      style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}
                    >
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-sm leading-relaxed line-clamp-3" style={{ color: '#6b7280', fontWeight: 300 }}>
                        {post.excerpt}
                      </p>
                    )}

                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <span className="text-xs" style={{ color: '#6b7280', fontWeight: 300 }}>
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="text-xs font-semibold" style={{ color: '#d94f1e' }}>
                        Read &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14 text-center flex flex-col gap-4 items-center">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
          >
            Book a Visit
          </span>
          <h2 className="text-2xl md:text-3xl" style={{ color: '#1a3050' }}>
            Have a question for{' '}
            <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>Dr. Brajmadhuri?</em>
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
            TruVet Pet Care Clinic is open all 7 days, 10am to 8pm. Walk-in OPD consultations welcome.
          </p>
          <a
            href="https://wa.me/919871010355"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-white"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
