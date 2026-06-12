import Link from 'next/link';
import MapEmbed from '@/components/MapEmbed';

export const metadata = {
  title: 'Location and Contact | TruVet Pet Care Clinic, Sector 79 Gurugram',
  description:
    'TruVet Pet Care Clinic is at Shop No 4-6, opposite Bestech Park View Altura, Sector 79, Gurugram. Open all 7 days, 10am to 8pm. Get directions on Google Maps.',
};

const jsonLd = {
  '@context': 'https://schema.org',
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.3974',
    longitude: '77.0263',
  },
  telephone: '+919871010355',
  openingHours: 'Mo-Su 10:00-20:00',
  url: 'https://truvet.in',
  hasMap: 'https://share.google/SbFhEnNlFDiO15KgU',
  sameAs: [
    'https://share.google/SbFhEnNlFDiO15KgU',
    'https://www.instagram.com/truvetpetcare_gurugram/',
  ],
};

const quickInfo = [
  {
    icon: '📍',
    label: 'Address',
    value: 'Shop No 4-6, Opp. Bestech Park View Altura, Sector 79, Naurangpur, Gurugram 122051',
    href: null,
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 98710 10355',
    href: 'tel:+919871010355',
  },
  {
    icon: '🕗',
    label: 'Hours',
    value: 'Monday to Sunday, 10AM to 8PM. Open all public holidays.',
    href: null,
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@truvetpetcare_gurugram',
    href: 'https://www.instagram.com/truvetpetcare_gurugram/',
  },
];

const howToReach = [
  {
    icon: '🏡',
    heading: 'From Godrej Nature Plus',
    body: 'Take the internal road toward Sector 79 market. TruVet Pet Care Clinic is on the main road opposite Bestech Park View Altura. Look for the clinic signboard.',
  },
  {
    icon: '🏢',
    heading: 'From Bestech Altura Residents',
    body: 'We are directly opposite your complex on the main road. Shop No 4-6. Walk-in welcome anytime from 10am to 8pm.',
  },
  {
    icon: '🗺️',
    heading: 'From Sectors 80, 81, 82, 83, 85 and 88',
    body: 'TruVet is centrally located in Sector 79, accessible from all surrounding sectors within a 5 to 10 minute drive. No appointment needed for OPD.',
  },
];

const hours = [
  { day: 'Monday to Friday', time: '10:00 AM to 8:00 PM' },
  { day: 'Saturday', time: '10:00 AM to 8:00 PM' },
  { day: 'Sunday', time: '10:00 AM to 8:00 PM' },
  { day: 'Public Holidays', time: '10:00 AM to 8:00 PM' },
];

const landmarks = [
  'Bestech Park View Altura',
  'Godrej Nature Plus',
  'Sector 79 Market',
  'Naurangpur Village Road',
];

export default function LocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. HERO ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 md:pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs mb-8" style={{ color: '#6b7280', fontWeight: 300 }}>
            <Link href="/" className="hover:underline" style={{ color: '#1a3050' }}>Home</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>Location</span>
          </nav>

          <div className="flex flex-col gap-5 max-w-2xl">
            <span
              className="self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
            >
              Find Us
            </span>
            <h1 className="text-4xl md:text-5xl leading-tight" style={{ color: '#1a3050' }}>
              Opposite Bestech Altura, Sector 79,{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>Gurugram.</em>
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              Shop No 4-6, opposite Bestech Park View Altura, Sector 79, Naurangpur, Gurugram, Haryana 122051. Open all 7 days, 10am to 8pm.
            </p>
            <div className="mt-2">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=9X4C%2B89+Gurugram+Haryana&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold text-white"
              >
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. QUICK INFO STRIP ── */}
      <section style={{ backgroundColor: '#fdf0e8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickInfo.map((item) => (
              <div key={item.label} className="flex flex-col gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: '#b7d9ee' }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#1a3050' }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm leading-relaxed hover:underline"
                      style={{ color: '#d94f1e', fontWeight: 300 }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MAP SECTION ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <h2 className="text-3xl md:text-4xl" style={{ color: '#1a3050' }}>
              Find us on{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>Google Maps.</em>
            </h2>
            <p className="max-w-xl text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              We are opposite Bestech Park View Altura. Look for the TruVet Pet Care Clinic sign. Parking available in front.
            </p>
          </div>
          <MapEmbed />
        </div>
      </section>

      {/* ── 4. HOW TO REACH US ── */}
      <section style={{ backgroundColor: '#fdf0e8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
            >
              Getting Here
            </span>
            <h2 className="text-3xl md:text-4xl" style={{ color: '#1a3050' }}>
              Accessible from across{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>Sector 79 and beyond.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howToReach.map((col) => (
              <div
                key={col.heading}
                className="hover-card bg-white rounded-lg p-6 flex flex-col gap-4"
                style={{ border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: '#b7d9ee' }}
                >
                  {col.icon}
                </div>
                <h3 className="text-base font-semibold" style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}>
                  {col.heading}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
                  {col.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. HOURS AND CONTACT ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

            {/* Left: Hours */}
            <div className="flex flex-col gap-5">
              <span
                className="self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
              >
                Clinic Hours
              </span>
              <h2 className="text-3xl md:text-4xl" style={{ color: '#1a3050' }}>
                Open every day,{' '}
                <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>all year round.</em>
              </h2>

              <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
                {hours.map((row, i) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between px-5 py-3.5 text-sm"
                    style={{
                      backgroundColor: i % 2 === 0 ? '#ffffff' : '#fdf0e8',
                      borderBottom: i < hours.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                    }}
                  >
                    <span style={{ color: '#1a3050', fontWeight: 500 }}>{row.day}</span>
                    <span style={{ color: '#6b7280', fontWeight: 300 }}>{row.time}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
                Walk-in OPD consultations are welcome at any time during clinic hours. No appointment needed.
              </p>

              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: '#22c55e' }}
                  />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: '#22c55e' }} />
                </span>
                <span className="text-sm font-semibold" style={{ color: '#22c55e' }}>Open Now</span>
              </div>
            </div>

            {/* Right: Contact */}
            <div className="flex flex-col gap-5">
              <span
                className="self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
              >
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-4xl" style={{ color: '#1a3050' }}>
                Book on{' '}
                <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>WhatsApp.</em>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
                The fastest way to reach us is on WhatsApp. Send a message with your pet's name, species and reason for visit and we will confirm your slot.
              </p>

              <a
                href="https://wa.me/919871010355"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn w-full text-center text-sm font-semibold text-white px-6 py-4 rounded"
              >
                Book on WhatsApp
              </a>

              <a
                href="tel:+919871010355"
                className="text-sm font-medium hover:underline"
                style={{ color: '#1a3050' }}
              >
                +91 98710 10355
              </a>

              <a
                href="https://www.instagram.com/truvetpetcare_gurugram/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
                style={{ color: '#d94f1e', fontWeight: 400 }}
              >
                @truvetpetcare_gurugram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. NEARBY LANDMARKS ── */}
      <section style={{ backgroundColor: '#fdf0e8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
            >
              Landmarks Near Us
            </span>
            <h2 className="text-3xl md:text-4xl" style={{ color: '#1a3050' }}>
              Easy to find,{' '}
              <em style={{ color: '#d94f1e', fontStyle: 'italic' }}>easy to remember.</em>
            </h2>
            <p className="max-w-lg text-base leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              Tell your driver or use these landmarks when navigating.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {landmarks.map((lm) => (
              <span
                key={lm}
                className="text-sm font-medium px-5 py-3 rounded-full"
                style={{ backgroundColor: '#b7d9ee', color: '#1a3050' }}
              >
                {lm}
              </span>
            ))}
          </div>

          <p className="text-center text-xs" style={{ color: '#6b7280', fontWeight: 300 }}>
            Plus Code: <span style={{ color: '#1a3050', fontWeight: 500 }}>9X4C+89 Gurugram, Haryana.</span> Share this code for precise navigation.
          </p>
        </div>
      </section>

      {/* ── 7. GEO PARAGRAPH ── */}
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
