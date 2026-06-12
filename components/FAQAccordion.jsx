'use client';

const faqs = [
  {
    q: 'Is there a vet clinic near Sector 79 Gurugram?',
    a: 'Yes. TruVet Pet Care Clinic is at Shop No 4-6, opposite Bestech Park View Altura, Sector 79, Gurugram. Open all 7 days from 10am to 8pm. Dr. Brajmadhuri offers OPD consultation, vaccination, deworming, surgery and health checkups for dogs and cats.',
  },
  {
    q: 'Are you open on Sundays?',
    a: 'Yes. TruVet Pet Care Clinic is open every day including Sundays and public holidays, from 10am to 8pm. Walk-in OPD consultations are welcome.',
  },
  {
    q: 'Will I always see the same doctor?',
    a: 'Yes. Dr. Brajmadhuri is the only consulting doctor at TruVet and sees every patient personally. There are no junior vets and no rotating staff at TruVet.',
  },
  {
    q: 'Do you treat both dogs and cats?',
    a: 'Yes. TruVet treats dogs and cats. Services include vaccination, deworming, OPD consultation, surgery and health checkups for both.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'Send a WhatsApp message to +91 98710 10355. Walk-in OPD consultations are also welcome during clinic hours, 10am to 8pm, all 7 days.',
  },
  {
    q: 'Where exactly is TruVet Pet Care Clinic?',
    a: 'Shop No 4-6, opposite Bestech Park View Altura, Sector 79, Naurangpur, Gurugram, Haryana 122051. Near Godrej Nature Plus, accessible from Sectors 80, 81, 82, 83, 85 and 88.',
  },
];

export default function FAQAccordion() {
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq) => (
        <details
          key={faq.q}
          className="rounded-lg bg-white"
          style={{ border: '1px solid rgba(0,0,0,0.07)' }}
        >
          <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer">
            <span
              className="text-sm font-semibold leading-snug"
              style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}
            >
              {faq.q}
            </span>
            <span
              className="faq-icon flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-base font-bold"
              style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
            />
          </summary>
          <div className="px-5 pb-5">
            <p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              {faq.a}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
