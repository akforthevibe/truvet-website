'use client';

export default function PostFAQAccordion({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <details
          key={i}
          className="rounded-lg bg-white"
          style={{ border: '1px solid rgba(0,0,0,0.07)' }}
        >
          <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer">
            <span
              className="text-sm font-semibold leading-snug"
              style={{ color: '#1a3050', fontFamily: 'Playfair Display, serif' }}
            >
              {faq.question}
            </span>
            <span
              className="faq-icon flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-base font-bold"
              style={{ backgroundColor: 'rgba(217,79,30,0.08)', color: '#d94f1e' }}
            />
          </summary>
          <div className="px-5 pb-5">
            <p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontWeight: 300 }}>
              {faq.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
