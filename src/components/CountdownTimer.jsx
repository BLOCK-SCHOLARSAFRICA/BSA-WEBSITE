import React, { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date - November 21, 2025 at 9 AM WAT
    const targetDate = new Date('2025-11-21T09:00:00+01:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          weeks,
          days,
          hours,
          minutes,
          seconds
        });
      } else {
        setTimeLeft({
          weeks: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    // Update immediately
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const CountdownBox = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-[#660431] rounded-2xl px-6 py-4 shadow-lg border border-[#D50967]">
        <div className="text-3xl md:text-4xl font-bold text-white text-center">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="text-white font-bold text-sm md:text-base mt-4 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-[#FE6906] py-10 px-6 border-b-4 border-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-12">
          Countdown to AWDEC2025
        </h2>
        
        {/* Countdown Display */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <CountdownBox value={timeLeft.weeks} label="WEEKS" />
          <CountdownBox value={timeLeft.days} label="DAYS" />
          <CountdownBox value={timeLeft.hours} label="HOURS" />
          <CountdownBox value={timeLeft.minutes} label="MINUTES" />
          <CountdownBox value={timeLeft.seconds} label="SECONDS" />
        </div>
      </div>
    </div>
  );
}