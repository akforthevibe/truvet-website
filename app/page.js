import Marquee from '@/components/Marquee';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata = {
  title: 'Pet Clinic in Sector 79 Gurugram | TruVet Pet Care Clinic',
  description:
    'Veterinary care for dogs and cats in Sector 79, Gurugram. Open all 7 days, 10am to 8pm. Dr. Brajmadhuri sees every patient personally. Book on WhatsApp.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'VeterinaryCare'],
      name: 'TruVet Pet Care Clinic',
      url: 'https://truvet.in',
      telephone: '+919871010355',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop No 4-6, Opp. Bestech Park View Altura, Sector 79, Naurangpur',
        addressLocality: 'Gurugram',
        addressRegion: 'Haryana',
        postalCode: '122051',
        addressCountry: 'IN',
      },
      openingHours: 'Mo-Su 10:00-20:00',
      sameAs: [
        'https://share.google/SbFhEnNlFDiO15KgU',
        'https://www.instagram.com/truvetpetcare_gurugram/',
        'https://www.linkedin.com/company/truvet-pet-care-clinic/',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is there a vet clinic near Sector 79 Gurugram?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. TruVet Pet Care Clinic is at Shop No 4-6, opposite Bestech Park View Altura, Sector 79, Gurugram. Open all 7 days from 10am to 8pm. Dr. Brajmadhuri offers OPD consultation, vaccination, deworming, surgery and health checkups for dogs and cats.' },
        },
        {
          '@type': 'Question',
          name: 'Are you open on Sundays?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. TruVet Pet Care Clinic is open every day including Sundays and public holidays, from 10am to 8pm. Walk-in OPD consultations are welcome.' },
        },
        {
          '@type': 'Question',
          name: 'Will I always see the same doctor?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dr. Brajmadhuri is the only consulting doctor at TruVet and sees every patient personally. There are no junior vets and no rotating staff at TruVet.' },
        },
        {
          '@type': 'Question',
          name: 'Do you treat both dogs and cats?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. TruVet treats dogs and cats. Services include vaccination, deworming, OPD consultation, surgery and health checkups for both.' },
        },
        {
          '@type': 'Question',
          name: 'How do I book an appointment?',
          acceptedAnswer: { '@type': 'Answer', text: 'Send a WhatsApp message to +91 98710 10355. Walk-in OPD consultations are also welcome during clinic hours, 10am to 8pm, all 7 days.' },
        },
        {
          '@type': 'Question',
          name: 'Where exactly is TruVet Pet Care Clinic?',
          acceptedAnswer: { '@type': 'Answer', text: 'Shop No 4-6, opposite Bestech Park View Altura, Sector 79, Naurangpur, Gurugram, Haryana 122051. Near Godrej Nature Plus, accessible from Sectors 80, 81, 82, 83, 85 and 88.' },
        },
      ],
    },
  ],
};

const services = [
  { icon: '🩺', title: 'OPD Consultation', body: 'Walk-in consultations for dogs and cats. Dr. Brajmadhuri sees every patient personally and explains everything before acting.', accent: '#b7d9ee' },
  { icon: '💉', title: 'Dog Vaccination', body: 'Complete vaccination schedules for puppies and adult dogs including core and non-core vaccines as recommended.', accent: 'rgba(217,79,30,0.10)' },
  { icon: '💉', title: 'Cat Vaccination', body: 'Kitten and adult cat vaccination including all core feline vaccines and annual boosters.', accent: '#fdf0e8' },
  { icon: '🐕', title: 'Dog Deworming', body: 'Routine deworming for puppies and adult dogs. Quick visits, no unnecessary procedures.', accent: 'rgba(26,48,80,0.07)' },
  { icon: '🐈', title: 'Cat Deworming', body: 'Safe, effective deworming for kittens and adult cats at every life stage.', accent: '#b7d9ee' },
  { icon: '🏥', title: 'Surgery and Procedures', body: 'Soft tissue surgery, cat spay and neuter, and minor procedures. All conducted by Dr. Brajmadhuri.', accent: 'rgba(217,79,30,0.10)' },
  { icon: '🔬', title: 'Dog Health Checkup', body: 'Annual wellness exams to catch problems early and keep your dog healthy year-round.', accent: '#fdf0e8' },
  { icon: '🔬', title: 'Cat Health Checkup', body: 'Comprehensive health checkups for cats. Early detection, honest advice, no unnecessary tests.', accent: 'rgba(26,48,80,0.07)' },
];

const whyCards = [
  { title: 'Always Dr. Brajmadhuri', body: 'Every consultation at TruVet is conducted personally by Dr. Brajmadhuri. There are no junior vets and no rotating staff. Your pet sees the same trusted doctor on every visit.' },
  { title: 'Open Every Day', body: 'TruVet is open all 7 days including Sundays and public holidays, 10am to 8pm. Because pets do not get sick on a schedule.' },
  { title: 'Honest, Transparent Care', body: 'A clean, hygienic facility with fair pricing and no hidden fees. We explain before we act and recommend only what your pet actually needs.' },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. MARQUEE ── */}
      <Marquee />

      {/* ── 2. HERO ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <span
              className="self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: '#b7d9ee', color: '#1a3050' }}
            >
              Sector 79, Gurugram
            </span>
            <h1 className="text-4xl md:text-5xl leading-tight" style={{ color: '#1a3050' }}>
              {"Gurugram's neighbourhood vet for dogs and "}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>cats.</em>
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              TruVet Pet Care Clinic is opposite Bestech Park View Altura, Sector 79. Open all 7 days, 10am to 8pm. Dr. Brajmadhuri sees every patient personally. No junior vets. No rotating staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="https://wa.me/919871010355"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold text-white"
              >
                Book on WhatsApp
              </a>
              <a
                href="/services/"
                className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-semibold"
                style={{ border: '1.5px solid rgba(26,48,80,0.18)', color: '#1a3050', backgroundColor: 'transparent' }}
              >
                See Our Services
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-sm">
            <div
              className="rounded-xl p-6 flex flex-col gap-4"
              style={{ border: '1px solid rgba(0,0,0,0.07)', backgroundColor: '#ffffff', boxShadow: '0 4px 24px rgba(26,48,80,0.07)' }}
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#22c55e' }} />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: '#22c55e' }} />
                </span>
                <span className="text-xs font-semibold" style={{ color: '#22c55e' }}>Open Now 10AM to 8PM</span>
              </div>
              <div>
                <p className="font-semibold text-base" style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}>
                  TruVet Pet Care Clinic
                </p>
                <p className="text-sm mt-1 leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
                  Shop No 4-6, Opp. Bestech Park View Altura,<br />
                  Sector 79, Naurangpur, Gurugram 122051
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Dogs', 'Cats', 'All 7 Days'].map(tag => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: '#b7d9ee', color: '#1a3050' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://wa.me/919871010355"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn mt-1 text-center text-sm font-semibold text-white px-4 py-3 rounded"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES ── */}
      <section style={{ backgroundColor: '#fdf0e8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}>
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl" style={{ color: '#1a3050' }}>
              Veterinary services in{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>Sector 79, Gurugram.</em>
            </h2>
            <p className="max-w-xl text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              Consultations, vaccinations, preventive care and more for dogs and cats near Sector 79. Honest care, transparent billing, no unnecessary procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="hover-card bg-white rounded-lg p-5 flex flex-col gap-3"
                style={{ border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl" style={{ backgroundColor: s.accent }}>
                  {s.icon}
                </div>
                <h3 className="text-base font-semibold" style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20" style={{ backgroundColor: '#1a3050' }}>
            {['Fair Honest Pricing', 'Call to Know More +91 98710 10355', 'No Hidden Charges'].map((item) => (
              <div key={item} className="px-6 py-4 text-center text-sm font-semibold" style={{ color: '#b7d9ee' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY TRUVET ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}>
              Why Pet Parents Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl" style={{ color: '#1a3050' }}>
              The same doctor.{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>Every single visit.</em>
            </h2>
            <p className="max-w-xl text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              Three things that make TruVet different from every other clinic near Sector 79.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCards.map((c) => (
              <div
                key={c.title}
                className="hover-card rounded-lg p-7 flex flex-col gap-3 bg-white"
                style={{ border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <h3 className="text-lg" style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}>
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/919871010355"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-white"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. ABOUT ── */}
      <section style={{ backgroundColor: '#fdf0e8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="flex-1 flex flex-col gap-5">
            <span className="self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}>
              About the Clinic
            </span>
            <h2 className="text-3xl md:text-4xl" style={{ color: '#1a3050' }}>
              Built for Sector 79.{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>Run by one doctor.</em>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              TruVet Pet Care Clinic was opened to give pet parents in Sector 79 and the surrounding sectors access to dependable, honest veterinary care close to home.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              Dr. Brajmadhuri founded and runs TruVet. She conducts every consultation personally. When you bring your pet here, you know exactly who will be in that room with them.
            </p>
            <ul className="flex flex-col gap-3 mt-1">
              {[
                'Modern hygienic facility, calm and stress-free for pets',
                'Transparent billing, you always know what you are paying for',
                'No unnecessary procedures, we explain before we act',
                'Dogs and cats are the primary focus, all other species welcome',
                'In-clinic pet food, treats and accessories',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#b7d9ee', color: '#1a3050' }}>
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/about/"
              className="cta-btn self-start mt-2 inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold text-white"
            >
              Meet Dr. Brajmadhuri
            </a>
          </div>

          <div className="flex-1 flex items-start">
            <div
              className="w-full rounded-xl aspect-[4/3] flex items-center justify-center text-sm"
              style={{ border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#ffffff', color: '#6b7280', fontWeight: 300 }}
            >
              Clinic photo coming soon
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. LOCATION ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}>
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl" style={{ color: '#1a3050' }}>
              Opposite Bestech Altura,{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>Sector 79, Gurugram.</em>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto flex flex-col gap-6">
            <p className="text-base leading-relaxed text-center" style={{ color: '#6b7280', fontWeight: 300 }}>
              Shop No 4-6, opposite Bestech Park View Altura, Sector 79, Naurangpur, Gurugram, Haryana 122051
            </p>
            <p className="text-sm text-center font-medium" style={{ color: '#1a3050' }}>
              Open all 7 days, 10am to 8pm
            </p>
            <p className="text-sm text-center" style={{ color: '#6b7280', fontWeight: 300 }}>
              Accessible from Godrej Nature Plus, Bestech Altura, and Sectors 80, 81, 82, 83, 85 and 88.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {[
                { icon: '📍', label: 'Address', value: 'Shop No 4-6, Opp. Bestech Park View Altura, Sector 79, Gurugram 122051' },
                { icon: '📞', label: 'Phone', value: '+91 98710 10355' },
                { icon: '🕙', label: 'Hours', value: 'All 7 days, 10am to 8pm' },
                { icon: '📸', label: 'Instagram', value: '@truvetpetcare_gurugram' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-4 rounded-lg" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
                  <div className="w-9 h-9 flex-shrink-0 rounded-lg flex items-center justify-center text-base" style={{ backgroundColor: '#b7d9ee' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: '#1a3050' }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4">
              <a
                href="https://wa.me/919871010355"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-white"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section style={{ backgroundColor: '#fdf0e8' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}>
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl" style={{ color: '#1a3050' }}>
              Frequently asked{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>questions.</em>
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ── 8. GEO PARAGRAPH ── */}
      <section className="bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 text-center">
          <p className="text-xs leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
            TruVet Pet Care Clinic is a veterinary clinic at Shop No 4-6, opposite Bestech Park View Altura, Sector 79, Naurangpur, Gurugram, Haryana 122051. The clinic is run by Dr. Brajmadhuri, who conducts all consultations personally. TruVet is open all seven days from 10am to 8pm and offers OPD consultation, vaccination, deworming, surgery and health checkups for dogs and cats. WhatsApp: +91 98710 10355.
          </p>
        </div>
      </section>
    </>
  );
}
