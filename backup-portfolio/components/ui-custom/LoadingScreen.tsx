'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center transition-opacity duration-500 ${progress === 100 ? 'opacity-0' : 'opacity-100'
        }`}
    >
      {/* Ambient Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#E0E0E0 1px, transparent 1px), linear-gradient(90deg, #E0E0E0 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#E0E0E0] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Ripple Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 rounded-full border border-[#E0E0E0] opacity-10 animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-0 rounded-full border border-[#E0E0E0] opacity-10 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
          <div className="absolute inset-0 rounded-full border border-[#E0E0E0] opacity-10 animate-ping" style={{ animationDuration: '3s', animationDelay: '2s' }} />
        </div>
      </div>

      <div className="text-center flex flex-col items-center relative">
        {/* Background Droplets */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left */}
          <svg
            className="absolute top-10 left-20 w-6 h-8 opacity-20 animate-pulse"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2.5C12 2.5 5 10.5 5 15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15C19 10.5 12 2.5 12 2.5Z"
              fill="#E0E0E0"
              fillOpacity="0.3"
            />
          </svg>

          {/* Top Right */}
          <svg
            className="absolute top-32 right-16 w-8 h-10 opacity-15 animate-pulse"
            style={{ animationDelay: '0.5s' }}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2.5C12 2.5 5 10.5 5 15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15C19 10.5 12 2.5 12 2.5Z"
              fill="#E0E0E0"
              fillOpacity="0.3"
            />
          </svg>

          {/* Bottom Left */}
          <svg
            className="absolute bottom-24 left-12 w-5 h-7 opacity-25 animate-pulse"
            style={{ animationDelay: '1s' }}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2.5C12 2.5 5 10.5 5 15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15C19 10.5 12 2.5 12 2.5Z"
              fill="#E0E0E0"
              fillOpacity="0.3"
            />
          </svg>

          {/* Bottom Right */}
          <svg
            className="absolute bottom-16 right-24 w-7 h-9 opacity-20 animate-pulse"
            style={{ animationDelay: '1.5s' }}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2.5C12 2.5 5 10.5 5 15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15C19 10.5 12 2.5 12 2.5Z"
              fill="#E0E0E0"
              fillOpacity="0.3"
            />
          </svg>
        </div>

        <div className="mb-8 relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold liquid-text tracking-tight">
            TEBITA
          </h1>
          <p className="text-sm md:text-base font-mono text-[#C0C0C0]/60 tracking-[0.3em] uppercase mt-3 animate-pulse">
            Automation & Web Dev
          </p>
        </div>

        {/* Main Droplet Animation */}
        <div className="relative w-36 h-48 mb-6 z-10">
          <svg
            viewBox="0 0 100 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_0_20px_rgba(224,224,224,0.15)]"
          >
            <defs>
              <linearGradient id="fillGradient" x1="50" y1="0" x2="50" y2="140" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E0E0E0" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C0C0C0" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="strokeGradient" x1="50" y1="0" x2="50" y2="140" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E0E0E0" />
                <stop offset="100%" stopColor="#C0C0C0" />
              </linearGradient>
              <clipPath id="dropletClip">
                <path d="M50 10C50 10 20 50 20 75C20 95 33.43 110 50 110C66.57 110 80 95 80 75C80 50 50 10 50 10Z" />
              </clipPath>
            </defs>

            {/* Droplet Outline */}
            <path
              d="M50 10C50 10 20 50 20 75C20 95 33.43 110 50 110C66.57 110 80 95 80 75C80 50 50 10 50 10Z"
              stroke="url(#strokeGradient)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />

            {/* Liquid Fill */}
            <g clipPath="url(#dropletClip)">
              <rect
                x="0"
                y={110 - (progress * 1.0)}
                width="100"
                height={progress * 1.0}
                fill="url(#fillGradient)"
                className="transition-all duration-300 ease-out"
              />

              {/* Wave Effect */}
              <path
                d={`M 0 ${110 - (progress * 1.0)} Q 25 ${110 - (progress * 1.0) - 2} 50 ${110 - (progress * 1.0)} T 100 ${110 - (progress * 1.0)}`}
                fill="#E0E0E0"
                fillOpacity="0.3"
              />
            </g>

            {/* Reflection/Highlight */}
            <ellipse
              cx="38"
              cy="55"
              rx="6"
              ry="10"
              fill="white"
              fillOpacity="0.25"
            />
          </svg>
        </div>

        <p className="font-mono text-sm text-[#C0C0C0] relative z-10 mb-2">{progress}%</p>

        {/* Loading Status Text */}
        <div className="font-mono text-xs text-[#C0C0C0]/40 uppercase tracking-widest relative z-10">
          {progress < 30 && "Initializing..."}
          {progress >= 30 && progress < 60 && "Loading Assets..."}
          {progress >= 60 && progress < 90 && "Preparing Experience..."}
          {progress >= 90 && "Almost Ready..."}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}
