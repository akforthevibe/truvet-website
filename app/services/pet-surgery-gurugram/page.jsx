import Link from 'next/link';

export const metadata = {
  title: 'Pet Surgery in Gurugram | TruVet Pet Care Clinic, Sector 79',
  description:
    'Pet surgery and procedures for dogs and cats at TruVet Pet Care Clinic, Sector 79 Gurugram. Spay, neuter, wound care and more. Open all 7 days.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['VeterinaryCare', 'LocalBusiness'],
      name: 'TruVet Pet Care Clinic',
      url: 'https://truvet.in',
      telephone: '+919871010355',
      address: { '@type': 'PostalAddress', streetAddress: 'Shop No 4-6, opp. Bestech Altura, Sector 79, Naurangpur', addressLocality: 'Gurugram', addressRegion: 'Haryana', postalCode: '122051', addressCountry: 'IN' },
      openingHours: 'Mo-Su 10:00-20:00',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does TruVet do cat spay and neuter?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Spay and neuter procedures for cats and dogs are available at TruVet Pet Care Clinic, Sector 79, Gurugram.' } },
        { '@type': 'Question', name: 'How do I know if my pet needs surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Dr. Brajmadhuri will examine your pet and recommend a procedure only if it is necessary. No surgery is performed without a prior assessment.' } },
        { '@type': 'Question', name: 'What should I do before bringing my pet for surgery?', acceptedAnswer: { '@type': 'Answer', text: 'WhatsApp us at +91 98710 10355 to discuss your pet\'s condition. Dr. Brajmadhuri will advise on fasting requirements and preparation.' } },
      ],
    },
  ],
};

const procedures = ['Spay and neuter for cats and dogs', 'Minor wound care and suturing', 'Abscess treatment and drainage', 'Minor mass or lump removal', 'Other OPD-level procedures as assessed by Dr. Brajmadhuri'];
const trustPoints = [
  { icon: '👩‍⚕️', text: 'Dr. Brajmadhuri sees every patient personally' },
  { icon: '📅', text: 'Open all 7 days including Sundays and public holidays' },
  { icon: '🐾', text: 'Dogs and cats primary, all species welcome' },
  { icon: '✅', text: 'Clean hygienic facility, no unnecessary procedures' },
];
const faqs = [
  { q: 'Does TruVet do cat spay and neuter?', a: 'Yes. Spay and neuter procedures for cats and dogs are available at TruVet Pet Care Clinic, Sector 79, Gurugram.' },
  { q: 'How do I know if my pet needs surgery?', a: 'Dr. Brajmadhuri will examine your pet and recommend a procedure only if it is necessary. No surgery is performed without a prior assessment.' },
  { q: 'What should I do before bringing my pet for surgery?', a: 'WhatsApp us at +91 98710 10355 to discuss your pet\'s condition. Dr. Brajmadhuri will advise on fasting requirements and preparation.' },
];

export default function PetSurgeryPage() {
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
            <span>Surgery and Procedures</span>
          </nav>
          <div className="flex flex-col gap-5 max-w-2xl">
            <span className="self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}>Surgery and Procedures</span>
            <h1 className="text-4xl md:text-5xl leading-tight" style={{ color: '#1a3050' }}>Pet Surgery and Procedures in <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>Gurugram</em></h1>
            <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>Surgical and clinical procedures for dogs and cats at TruVet Pet Care Clinic, Sector 79.</p>
            <a href="https://wa.me/919871010355" target="_blank" rel="noopener noreferrer" className="cta-btn self-start inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold text-white">Book on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ backgroundColor: '#fdf0e8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 flex flex-col gap-8">
          <div className="bg-white rounded-lg p-7 flex flex-col gap-4" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#d94f1e' }}>Procedures Offered</span>
            <h2 className="text-2xl" style={{ color: '#1a3050' }}>What we can <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>do for your pet.</em></h2>
            <ul className="flex flex-col gap-3">
              {procedures.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#d94f1e' }} />
                  <span className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-7 flex flex-col gap-4" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#d94f1e' }}>Before Surgery</span>
              <h2 className="text-2xl" style={{ color: '#1a3050' }}>Assessment <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>always comes first.</em></h2>
              <p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>Dr. Brajmadhuri examines every patient before recommending any procedure. Pre-surgical bloodwork may be advised depending on the pet's age and health. Nothing is done without your understanding and consent.</p>
            </div>
            <div className="bg-white rounded-lg p-7 flex flex-col gap-4" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#d94f1e' }}>After Surgery</span>
              <h2 className="text-2xl" style={{ color: '#1a3050' }}>Care that continues <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>at home.</em></h2>
              <ul className="flex flex-col gap-3">
                {['Discharge instructions provided at the clinic', 'Follow-up visits scheduled as needed', 'WhatsApp available for post-op queries'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#d94f1e' }} />
                    <span className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
          <h2 className="text-2xl md:text-3xl" style={{ color: '#1a3050' }}>Discuss your pet's <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>procedure.</em></h2>
          <p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>WhatsApp us to describe your pet's condition. Dr. Brajmadhuri will advise before you come in.</p>
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
