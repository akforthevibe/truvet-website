import Link from 'next/link';

export const metadata = {
  title: 'About Dr. Brajmadhuri | TruVet Pet Care Clinic, Sector 79 Gurugram',
  description:
    'TruVet Pet Care Clinic is founded and run by Dr. Brajmadhuri, BVSc. Every consultation is conducted personally by Dr. Brajmadhuri. No junior vets, no rotating staff.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['VeterinaryCare', 'LocalBusiness'],
      name: 'TruVet Pet Care Clinic',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop No 4-6, Opp. Bestech Park View Altura, Sector 79, Naurangpur',
        addressLocality: 'Gurugram',
        addressRegion: 'Haryana',
        postalCode: '122051',
        addressCountry: 'IN',
      },
      telephone: '+919871010355',
      openingHours: 'Mo-Su 10:00-20:00',
      url: 'https://truvet.in',
      founder: {
        '@type': 'Person',
        name: 'Dr. Brajmadhuri',
        jobTitle: 'Veterinarian and Clinic Director',
        sameAs: 'https://www.linkedin.com/in/dr-brajmadhuri-8b31b017/',
      },
      sameAs: [
        'https://share.google/SbFhEnNlFDiO15KgU',
        'https://www.instagram.com/truvetpetcare_gurugram/',
        'https://www.linkedin.com/company/truvet-pet-care-clinic/',
      ],
    },
    {
      '@type': 'Person',
      name: 'Dr. Brajmadhuri',
      jobTitle: 'Veterinarian',
      worksFor: {
        '@type': 'VeterinaryCare',
        name: 'TruVet Pet Care Clinic',
      },
      sameAs: 'https://www.linkedin.com/in/dr-brajmadhuri-8b31b017/',
    },
  ],
};

const whyCards = [
  {
    icon: '🩺',
    title: 'Always the Same Doctor',
    body: 'Dr. Brajmadhuri sees every patient. You will never be handed to a junior vet or a different doctor on a different day.',
  },
  {
    icon: '📅',
    title: 'Open Every Day',
    body: 'TruVet is open all 7 days from 10am to 8pm, including Sundays and public holidays. Pets do not follow a schedule and neither do we.',
  },
  {
    icon: '🤝',
    title: 'Honest, Transparent Care',
    body: 'We tell you what your pet needs and only that. Fair pricing, no hidden fees, no pressure for unnecessary procedures.',
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. HERO ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 md:pb-20">
          <nav className="flex items-center gap-1.5 text-xs mb-8" style={{ color: '#6b7280', fontWeight: 300 }}>
            <Link href="/" className="hover:underline" style={{ color: '#1a3050' }}>Home</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>About</span>
          </nav>

          <div className="flex flex-col gap-5 max-w-2xl">
            <span
              className="self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
            >
              About the Clinic
            </span>
            <h1 className="text-4xl md:text-5xl leading-tight" style={{ color: '#1a3050' }}>
              Founded and run by{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>one doctor.</em>
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              TruVet Pet Care Clinic was built on a simple principle. Every pet deserves to be seen by the same trusted doctor, every single visit. Dr. Brajmadhuri conducts every consultation personally.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. DOCTOR PROFILE ── */}
      <section style={{ backgroundColor: '#fdf0e8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 flex flex-col md:flex-row gap-12 md:gap-16 items-start">

          {/* Left: photo placeholder */}
          <div className="w-full md:w-80 flex-shrink-0">
            <div className="relative">
              <div
                className="w-full rounded-xl flex flex-col items-center justify-center gap-2"
                style={{
                  height: '420px',
                  border: '1px solid rgba(0,0,0,0.07)',
                  backgroundColor: 'rgba(183,217,238,0.20)',
                }}
              >
                <span className="text-sm" style={{ color: '#6b7280', fontWeight: 400 }}>Dr. Brajmadhuri</span>
                <span className="text-xs" style={{ color: '#6b7280', fontWeight: 300 }}>Photo coming soon</span>
              </div>
              <span
                className="absolute bottom-4 right-4 text-xs font-bold text-white px-3 py-1.5 rounded-lg"
                style={{ backgroundColor: '#d94f1e' }}
              >
                BVSc
              </span>
            </div>
          </div>

          {/* Right: profile */}
          <div className="flex-1 flex flex-col gap-5">
            <span
              className="self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
            >
              Lead Veterinarian
            </span>
            <h2 className="text-3xl md:text-4xl" style={{ color: '#1a3050' }}>
              Dr.{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>Brajmadhuri.</em>
            </h2>

            <div className="flex flex-wrap gap-2">
              {['BVSc', 'Veterinary Medicine'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#b7d9ee', color: '#1a3050' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              Dr. Brajmadhuri is the founder and sole veterinarian at TruVet Pet Care Clinic, Sector 79, Gurugram. She conducts every consultation personally. There are no junior vets and no rotating staff at TruVet.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              Her approach is direct and practical. She listens carefully, diagnoses accurately, explains everything in plain terms, and recommends only what your pet actually needs. No unnecessary procedures. No unnecessary tests.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              Dr. Brajmadhuri built TruVet because pet parents in Sector 79 and the surrounding sectors deserved a dependable neighbourhood vet they could trust and return to.
            </p>

            <ul className="flex flex-col gap-3 mt-1">
              {[
                'Every patient seen personally by Dr. Brajmadhuri',
                'Same doctor on every visit, no exceptions',
                'Plain communication, no medical jargon',
                'Only necessary procedures recommended',
                'Open all 7 days so you are never left without care',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: '#b7d9ee', color: '#1a3050' }}
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://www.linkedin.com/in/dr-brajmadhuri-8b31b017/"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start text-sm underline"
              style={{ color: '#1a3050', fontWeight: 400 }}
            >
              View Dr. Brajmadhuri on LinkedIn
            </a>

            <a
              href="https://wa.me/919871010355"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn self-start inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold text-white"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. THE CLINIC ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 flex flex-col md:flex-row gap-12 md:gap-16 items-start">

          {/* Left */}
          <div className="flex-1 flex flex-col gap-5">
            <span
              className="self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
            >
              The Clinic
            </span>
            <h2 className="text-3xl md:text-4xl" style={{ color: '#1a3050' }}>
              A clean, calm space{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>for your pet.</em>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              TruVet Pet Care Clinic is a modern, hygienic veterinary clinic at Shop No 4-6, opposite Bestech Park View Altura, Sector 79, Gurugram. The clinic was designed to be calm and stress-free for animals.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              We stock a curated selection of pet food, treats and accessories in-clinic. One stop for care and supplies.
            </p>

            <ul className="flex flex-col gap-3 mt-1">
              {[
                'Clean, hygienic examination rooms',
                'Calm, stress-free environment for pets',
                'In-clinic pet food, treats and accessories',
                'Designed for cats and dogs with all species welcome',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: '#b7d9ee', color: '#1a3050' }}
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: photo placeholder */}
          <div className="w-full md:w-96 flex-shrink-0">
            <div
              className="w-full rounded-xl flex items-center justify-center text-sm"
              style={{
                height: '400px',
                border: '1px solid rgba(0,0,0,0.07)',
                backgroundColor: 'rgba(183,217,238,0.20)',
                color: '#6b7280',
                fontWeight: 300,
              }}
            >
              Clinic photo coming soon
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY TRUVET ── */}
      <section style={{ backgroundColor: '#fdf0e8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
            >
              Our Difference
            </span>
            <h2 className="text-3xl md:text-4xl" style={{ color: '#1a3050' }}>
              Why pet parents in Sector 79{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>come back.</em>
            </h2>
            <p className="max-w-xl text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              Three things that set TruVet apart from every other clinic in the area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCards.map((c) => (
              <div
                key={c.title}
                className="hover-card bg-white rounded-lg p-7 flex flex-col gap-4"
                style={{ border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <span className="text-3xl">{c.icon}</span>
                <h3 className="text-lg" style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}>
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. THE MISSION ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
            >
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl" style={{ color: '#1a3050' }}>
              Dependable veterinary care,{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>close to home.</em>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              Sectors 76 to 88 along Gurugram are home to thousands of pet-owning families. TruVet Pet Care Clinic was built to serve them with honest, consistent, high-quality veterinary care without having to travel far.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              Every decision at TruVet, from the clinic design to the approach to billing, is made with one goal: to be the neighbourhood vet that pet parents in Sector 79 can depend on, every time.
            </p>
            <a
              href="https://wa.me/919871010355"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn mt-2 inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-white"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. GEO PARAGRAPH ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 text-center">
          <p className="text-xs leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
            TruVet Pet Care Clinic is a veterinary clinic at Shop No 4-6, opposite Bestech Park View Altura, Sector 79, Naurangpur, Gurugram, Haryana 122051. The clinic is founded and run by Dr. Brajmadhuri, who conducts all consultations personally. TruVet is open all seven days from 10am to 8pm and offers OPD consultation, vaccination, deworming, surgery and health checkups for dogs and cats. WhatsApp: +91 98710 10355.
          </p>
        </div>
      </section>
    </>
  );
}
