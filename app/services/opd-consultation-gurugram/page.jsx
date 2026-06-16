import Link from 'next/link';

export const metadata = {
  title: 'OPD Vet Consultation in Gurugram | TruVet Pet Care, Sector 79',
  description:
    'Book an OPD consultation for your dog or cat at TruVet Pet Care Clinic, Sector 79 Gurugram. Dr. Brajmadhuri sees every patient personally. Open all 7 days.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['VeterinaryCare', 'LocalBusiness'],
      name: 'TruVet Pet Care Clinic',
      url: 'https://truvet.in',
      telephone: '+919871010355',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop No 4-6, opp. Bestech Altura, Sector 79, Naurangpur',
        addressLocality: 'Gurugram',
        addressRegion: 'Haryana',
        postalCode: '122051',
        addressCountry: 'IN',
      },
      openingHours: 'Mo-Su 10:00-20:00',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need an appointment for OPD consultation?',
          acceptedAnswer: { '@type': 'Answer', text: 'Walk-ins are welcome. You can also book in advance on WhatsApp at +91 98710 10355.' },
        },
        {
          '@type': 'Question',
          name: 'Does Dr. Brajmadhuri see every patient?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, Dr. Brajmadhuri personally conducts every consultation at TruVet. There are no junior vets and no rotating staff.' },
        },
        {
          '@type': 'Question',
          name: 'Are you open on Sundays?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, TruVet is open all 7 days from 10am to 8pm, including Sundays and public holidays.' },
        },
      ],
    },
  ],
};

const trustPoints = [
  { icon: '👩‍⚕️', text: 'Dr. Brajmadhuri sees every patient personally' },
  { icon: '📅', text: 'Open all 7 days including Sundays and public holidays' },
  { icon: '🐾', text: 'Dogs and cats primary, all species welcome' },
  { icon: '✅', text: 'Clean hygienic facility, no unnecessary procedures' },
];

const faqs = [
  { q: 'Do I need an appointment for OPD consultation?', a: 'Walk-ins are welcome. You can also book in advance on WhatsApp at +91 98710 10355.' },
  { q: 'Does Dr. Brajmadhuri see every patient?', a: 'Yes, Dr. Brajmadhuri personally conducts every consultation at TruVet. There are no junior vets and no rotating staff.' },
  { q: 'Are you open on Sundays?', a: 'Yes, TruVet is open all 7 days from 10am to 8pm, including Sundays and public holidays.' },
];

export default function OPDConsultationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 md:pb-20">
          <nav className="flex items-center gap-1.5 text-xs mb-8" style={{ color: '#6b7280', fontWeight: 300 }}>
            <Link href="/" style={{ color: '#1a3050' }} className="hover:underline">Home</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/services/" style={{ color: '#1a3050' }} className="hover:underline">Services</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>OPD Consultation</span>
          </nav>
          <div className="flex flex-col gap-5 max-w-2xl">
            <span className="self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}>OPD Consultation</span>
            <h1 className="text-4xl md:text-5xl leading-tight" style={{ color: '#1a3050' }}>OPD Consultation for Dogs and Cats in <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>Gurugram</em></h1>
            <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>Dr. Brajmadhuri sees every patient personally. No junior vets, no rotating staff.</p>
            <a href="https://wa.me/919871010355" target="_blank" rel="noopener noreferrer" className="cta-btn self-start inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold text-white">Book on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ backgroundColor: '#fdf0e8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg p-7 flex flex-col gap-4" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#d94f1e' }}>What to Expect</span>
            <h2 className="text-2xl" style={{ color: '#1a3050' }}>A thorough, <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>personal consultation.</em></h2>
            <ul className="flex flex-col gap-3">
              {['Initial assessment and medical history', 'Full physical examination', 'Diagnosis and treatment plan', 'Follow-up guidance and next steps'].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#d94f1e' }} />
                  <span className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg p-7 flex flex-col gap-4" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#d94f1e' }}>When to Visit</span>
            <h2 className="text-2xl" style={{ color: '#1a3050' }}>Signs your pet <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>needs a vet.</em></h2>
            <ul className="flex flex-col gap-3">
              {['Fever or lethargy', 'Loss of appetite', 'Vomiting or diarrhea', 'Skin, eye or ear problems', 'Limping or difficulty moving', 'Routine health concerns'].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#d94f1e' }} />
                  <span className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map(p => (
              <div key={p.text} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-base flex-shrink-0" style={{ backgroundColor: '#b7d9ee' }}>{p.icon}</div>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#fdf0e8' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6" style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}>FAQ</span>
          <h2 className="text-3xl mb-8" style={{ color: '#1a3050' }}>Common <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>questions.</em></h2>
          <div className="flex flex-col gap-3">
            {faqs.map(faq => (
              <details key={faq.q} className="rounded-lg bg-white" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer">
                  <span className="text-sm font-semibold" style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}>{faq.q}</span>
                  <span className="faq-icon flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full font-bold" style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }} />
                </summary>
                <div className="px-5 pb-5"><p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>{faq.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 py-14 text-center flex flex-col items-center gap-4">
          <h2 className="text-2xl md:text-3xl" style={{ color: '#1a3050' }}>Book a <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>consultation.</em></h2>
          <p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>Walk-in OPD welcome. Open all 7 days, 10am to 8pm.</p>
          <a href="https://wa.me/919871010355" target="_blank" rel="noopener noreferrer" className="cta-btn inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-white">Book on WhatsApp</a>
        </div>
      </section>

      {/* GEO */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 text-center">
          <p className="text-xs leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>TruVet Pet Care Clinic is a veterinary clinic at <a href="https://share.google/i8QFvO5vme5YTtKLA" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Shop No 4-6, opp. Bestech Altura, Sector 79, Naurangpur, Gurugram, Haryana 122051</a>. The clinic is run by Dr. Brajmadhuri, who conducts all consultations personally. TruVet is open all seven days from 10am to 8pm and offers OPD consultation, vaccination, deworming, surgery and health checkups for dogs and cats. WhatsApp: +91 98710 10355.</p>
        </div>
      </section>
    </>
  );
}
