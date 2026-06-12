'use client';

const items = [
  'Licensed Veterinary Clinic',
  'Monday to Sunday, 10AM to 8PM',
  'Dogs and Cats Primary',
  'Sector 79, Gurugram',
  'Same Doctor Every Visit',
  'In-Clinic Pet Food and Accessories',
];

const all = [...items, ...items];

export default function Marquee() {
  return (
    <div
      style={{ backgroundColor: '#1a3050', color: '#b7d9ee', overflow: 'hidden' }}
      className="py-2 text-xs font-medium tracking-wide select-none"
    >
      <div className="marquee-track">
        {all.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="px-6">{item}</span>
            <span style={{ color: '#b7d9ee', opacity: 0.4 }}>|</span>
          </span>
        ))}
      </div>
    </div>
  );
}
