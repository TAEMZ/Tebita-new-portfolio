'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: 'HOME', href: '#hero' },
    { label: 'SERVICES', href: '#impact' },
    { label: 'WORK', href: '#portfolio' },
    { label: 'PHILOSOPHY', href: '#philosophy' },
    { label: 'CONTACT', href: '#footer' },
  ];

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 md:top-8 md:right-8 z-50 w-12 h-12 rounded-full bg-[#C0C0C0] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(192,192,192,0.5)]"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#050505]" />
        ) : (
          <div className="flex flex-col gap-1.5">
            <span className="w-5 h-0.5 bg-[#050505]"></span>
            <span className="w-5 h-0.5 bg-[#050505]"></span>
          </div>
        )}
      </button>

      <nav
        className={`fixed inset-0 z-40 bg-[#050505] transition-all duration-700 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`absolute inset-0 transition-all duration-1000 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
            style={{
              background: 'radial-gradient(circle at center, rgba(192,192,192,0.05) 0%, transparent 70%)',
            }}
          />

          <ul className="relative z-10 space-y-8">
            {menuItems.map((item, index) => (
              <li
                key={item.label}
                className={`transition-all duration-500 ${isOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                  }`}
                style={{
                  transitionDelay: isOpen ? `${index * 100}ms` : '0ms',
                }}
              >
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-5xl md:text-7xl font-light tracking-wider text-[#E0E0E0] hover:text-[#C0C0C0] transition-colors duration-300 ripple-effect"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-sm font-mono text-[#E0E0E0] opacity-50">
          <span>TEBITA TECH</span>
          <span>2025</span>
        </div>
      </nav>
    </>
  );
}
