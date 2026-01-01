'use client';

import { useState } from 'react';
import { X, Sun, Moon } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showIndustries, setShowIndustries] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('light-theme');
  };

  const menuItems = [
    { label: 'HOME', href: '/#hero' },
    { label: 'SERVICES', href: '/#impact' },
    { label: 'INDUSTRIES', hasSubmenu: true },
    { label: 'TECHNOLOGY', href: '/#techstack' },
    { label: 'PROJECTS', href: '/#portfolio' },
    { label: 'ABOUT', href: '/#philosophy' },
    { label: 'CONTACT', href: '/#footer' },
  ];

  const industries = [
    { label: 'Retail & eCommerce', href: '/industries/retail-ecommerce' },
    { label: 'Fintech', href: '/industries/fintech' },
    { label: 'Transportation & Logistics', href: '/industries/transportation-logistics' },
    { label: 'Enterprises', href: '/industries/enterprises' },
    { label: 'EdTech', href: '/industries/edtech' },
    { label: 'Healthcare', href: '/industries/healthcare' },
    { label: 'Automotive', href: '/industries/automotive' },
    { label: 'Startups', href: '/industries/startups' },
    { label: 'Travel & Hospitality', href: '/industries/travel-hospitality' },
    { label: 'Real Estate', href: '/industries/real-estate' },
    { label: 'On Demand', href: '/industries/on-demand' },
    { label: 'Government & Public Sector', href: '/industries/government-public-sector' },
  ];

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-[#C0C0C0] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(192,192,192,0.5)]"
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
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-y-auto py-20">
          <div
            className={`absolute inset-0 transition-all duration-1000 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
            style={{
              background: 'radial-gradient(circle at center, rgba(192,192,192,0.05) 0%, transparent 70%)',
            }}
          />

          <ul className="relative z-10 space-y-6 px-8 w-full max-w-md">
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
                {item.hasSubmenu ? (
                  <div>
                    <button
                      onClick={() => setShowIndustries(!showIndustries)}
                      className="block text-4xl md:text-5xl font-light tracking-wider text-[#E0E0E0] hover:text-[#C0C0C0] transition-colors duration-300 w-full text-left"
                    >
                      {item.label} {showIndustries ? '−' : '+'}
                    </button>
                    {showIndustries && (
                      <div className="mt-4 ml-6 space-y-3 max-h-64 overflow-y-auto">
                        {industries.map((industry) => (
                          <a
                            key={industry.href}
                            href={industry.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-lg text-[#C0C0C0] hover:text-white transition-colors"
                          >
                            {industry.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-4xl md:text-5xl font-light tracking-wider text-[#E0E0E0] hover:text-[#C0C0C0] transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                )}
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
