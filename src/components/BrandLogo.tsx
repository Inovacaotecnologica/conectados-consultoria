import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'footer';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'light',
  showTagline = false,
}) => {
  const isDark = variant === 'dark' || variant === 'footer';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon: C integrated with Infinity symbol */}
      <div className="relative flex-shrink-0 w-10 h-10 flex items-center justify-center">
        <svg
          viewBox="0 0 100 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-105"
        >
          <defs>
            <linearGradient id="cInfinityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="cAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          {/* Right loop of the infinity symbol */}
          <path
            d="M 50 30 C 58 12, 85 12, 85 30 C 85 48, 58 48, 50 30"
            stroke="url(#cInfinityGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Left loop shaped as a dynamic 'C' meeting in the center */}
          <path
            d="M 45 16 C 36 12, 15 14, 15 30 C 15 46, 36 48, 45 44"
            stroke="url(#cInfinityGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Connection bridge / node representing technological integration */}
          <circle cx="50" cy="30" r="4.5" fill="#38BDF8" />
          <circle cx="15" cy="30" r="3" fill="#0284C7" />
          <circle cx="85" cy="30" r="3" fill="#06B6D4" />
        </svg>
      </div>

      {/* Brand text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-heading font-extrabold tracking-wider text-xl leading-none ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            CONECTADOS
          </span>
          <span
            className="text-xs font-semibold uppercase tracking-widest px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-600 border border-cyan-500/20"
          >
            ENG
          </span>
        </div>
        <span
          className={`text-[11px] tracking-[0.22em] font-medium uppercase mt-0.5 ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          CONSULTORIA
        </span>
        {showTagline && (
          <span
            className={`text-[10px] italic mt-0.5 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Engenharia & Confiabilidade
          </span>
        )}
      </div>
    </div>
  );
};
