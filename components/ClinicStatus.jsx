'use client';

import { useState, useEffect } from 'react';

export default function ClinicStatus({ size = 'sm' }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000;
      const istTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60 * 1000) + istOffset);
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const totalMinutes = hours * 60 + minutes;
      setIsOpen(totalMinutes >= 600 && totalMinutes < 1200);
    };
    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  const textSize = size === 'xs' ? 'text-xs' : 'text-sm';

  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
        {isOpen && (
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: '#22c55e' }}
          />
        )}
        <span
          className="relative inline-flex rounded-full h-2.5 w-2.5"
          style={{ backgroundColor: isOpen ? '#22c55e' : '#9ca3af' }}
        />
      </span>
      <span className={`${textSize} font-semibold`} style={{ color: isOpen ? '#22c55e' : '#6b7280' }}>
        {isOpen ? 'Open now · 10am to 8pm' : 'Closed · Opens at 10am'}
      </span>
    </div>
  );
}
