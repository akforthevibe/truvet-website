'use client';

export default function MapEmbed() {
  return (
    <div className="w-full">
      <div
        className="w-full overflow-hidden"
        style={{
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(26,48,80,0.10)',
          height: '300px',
        }}
      >
        <style>{`
          @media (min-width: 768px) {
            .map-iframe { height: 420px !important; }
          }
        `}</style>
        <iframe
          className="map-iframe"
          src="https://maps.google.com/maps?q=28.3974,77.0263&hl=en&z=16&output=embed"
          width="100%"
          height="300"
          style={{ border: 'none', display: 'block' }}
          loading="lazy"
          allowFullScreen
          title="TruVet Pet Care Clinic on Google Maps"
        />
      </div>

      <div className="flex justify-center mt-6">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=28.3974,77.0263&travelmode=driving"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-white"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}
