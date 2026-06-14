import Link from 'next/link';

export const metadata = {
  title: 'Veterinary Services | TruVet Pet Care Clinic, Sector 79 Gurugram',
  description:
    'Vet services in Sector 79 Gurugram, vaccination, deworming, OPD, surgery and health checkups for dogs and cats. Dr. Brajmadhuri, open all 7 days.',
};

const services = [
  {
    icon: '🩺',
    title: 'OPD Consultation',
    description: 'Walk-in consultations for dogs and cats, seen personally by Dr. Brajmadhuri.',
    href: '/services/opd-consultation-gurugram/',
  },
  {
    icon: '💉',
    title: 'Dog Vaccination',
    description: 'Core and non-core vaccine schedules for puppies and adult dogs.',
    href: '/services/dog-vaccination-gurugram/',
  },
  {
    icon: '💉',
    title: 'Cat Vaccination',
    description: 'Complete kitten and adult cat vaccination including annual boosters.',
    href: '/services/cat-vaccination-gurugram/',
  },
  {
    icon: '🐕',
    title: 'Dog Deworming',
    description: 'Routine deworming for puppies and adult dogs at every life stage.',
    href: '/services/dog-deworming-gurugram/',
  },
  {
    icon: '🐈',
    title: 'Cat Deworming',
    description: 'Safe and effective deworming for kittens and adult cats.',
    href: '/services/cat-deworming-gurugram/',
  },
  {
    icon: '🔬',
    title: 'Dog Health Checkup',
    description: 'Annual wellness exams to catch problems early and keep dogs healthy.',
    href: '/services/dog-health-checkup-gurugram/',
  },
  {
    icon: '🔬',
    title: 'Cat Health Checkup',
    description: 'Comprehensive health checkups for cats with honest, clear advice.',
    href: '/services/cat-health-checkup-gurugram/',
  },
  {
    icon: '🏥',
    title: 'Surgery and Procedures',
    description: 'Soft tissue surgery, spay and neuter, and minor procedures by Dr. Brajmadhuri.',
    href: '/services/pet-surgery-gurugram/',
  },
];

const trustPoints = [
  { icon: '👩‍⚕️', text: 'Every patient seen by Dr. Brajmadhuri personally' },
  { icon: '📅', text: 'Open all 7 days including Sundays and public holidays' },
  { icon: '🐾', text: 'Dogs and cats primary, all species welcome' },
  { icon: '✅', text: 'Clean hygienic facility, no unnecessary procedures' },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 md:pb-20">
          <nav className="flex items-center gap-1.5 text-xs mb-8" style={{ color: '#6b7280', fontWeight: 300 }}>
            <Link href="/" className="hover:underline" style={{ color: '#1a3050' }}>Home</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>Services</span>
          </nav>

          <div className="flex flex-col gap-5 max-w-2xl">
            <span
              className="self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
            >
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl leading-tight" style={{ color: '#1a3050' }}>
              Veterinary services in{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>Sector 79, Gurugram.</em>
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              Dr. Brajmadhuri sees every patient personally. Open all 7 days, 10am to 8pm.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ backgroundColor: '#fdf0e8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.href}
                className="hover-card bg-white rounded-lg p-6 flex flex-col gap-3"
                style={{ border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <span className="text-2xl">{s.icon}</span>
                <h2
                  className="text-base font-semibold leading-snug"
                  style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}
                >
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#6b7280', fontWeight: 300 }}>
                  {s.description}
                </p>
                <Link
                  href={s.href}
                  className="text-xs font-semibold"
                  style={{ color: '#d94f1e' }}
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TRUVET STRIP ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
            >
              Why TruVet
            </span>
            <h2 className="text-3xl md:text-4xl" style={{ color: '#1a3050' }}>
              Care you can{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>count on.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((p) => (
              <div key={p.text} className="flex flex-col items-center text-center gap-3 p-5">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: '#b7d9ee' }}
                >
                  {p.icon}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#fdf0e8' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14 md:py-16 flex flex-col items-center text-center gap-5">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
          >
            Book a Visit
          </span>
          <h2 className="text-3xl md:text-4xl" style={{ color: '#1a3050' }}>
            Book an appointment on{' '}
            <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>WhatsApp.</em>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
            Walk-in OPD consultations are welcome at any time during clinic hours. No appointment needed for most visits.
          </p>
          <a
            href="https://wa.me/919871010355"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn inline-flex items-center gap-2 px-8 py-4 rounded text-sm font-semibold text-white"
          >
            Book on WhatsApp
          </a>
          <a
            href="tel:+919871010355"
            className="text-sm hover:underline"
            style={{ color: '#1a3050', fontWeight: 400 }}
          >
            +91 98710 10355
          </a>
        </div>
      </section>

      {/* ── GEO PARAGRAPH ── */}
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
