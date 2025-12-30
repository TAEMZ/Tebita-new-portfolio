'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
        if (savedTheme) {
            setTheme(savedTheme);
            if (savedTheme === 'light') {
                document.documentElement.classList.add('light-theme');
            }
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('light-theme');
    };

    return (
        <>
            {/* TOP BAR - Logo */}
            <div className="fixed top-6 left-6 md:left-10 z-50 select-none cursor-default group">
                <Link href="/" className="flex items-center gap-3">
                    {/* Droplet Logo */}
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                    >
                        <path
                            d="M12 2.5C12 2.5 5 10.5 5 15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15C19 10.5 12 2.5 12 2.5Z"
                            className="fill-[#E0E0E0] light-theme:fill-black group-hover:fill-white light-theme:group-hover:fill-gray-700 transition-colors duration-300"
                        />
                        <path
                            d="M12 2.5C12 2.5 5 10.5 5 15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15C19 10.5 12 2.5 12 2.5Z"
                            stroke="url(#dropletGradient)"
                            strokeWidth="0.5"
                        />
                        <defs>
                            <linearGradient id="dropletGradient" x1="12" y1="2.5" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="#7bff7bff" />
                            </linearGradient>
                        </defs>
                        {/* Reflection */}
                        <path
                            d="M9.5 12C9.5 12 8.5 14 8.5 15.5C8.5 17.433 10.067 19 12 19"
                            stroke="white"
                            strokeOpacity="0.3"
                            strokeWidth="1"
                            strokeLinecap="round"
                        />
                    </svg>

                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-2">
                        <span className="text-white light-theme:text-black">TEBITA</span>
                        <span className="font-light text-gray-400 light-theme:text-gray-600 group-hover:text-white light-theme:group-hover:text-black transition-colors duration-300">TECH</span>
                    </h2>
                </Link>
            </div>

            {/* TOP BAR - Navigation */}
            <div className="fixed top-6 right-6 md:right-10 flex items-center gap-8 z-50">
                {/* NAV — ALL ITEMS (Hidden on mobile) */}
                <div className="hidden md:flex items-center gap-6">
                    {/* HOME */}
                    <Link
                        href="/"
                        className="text-sm tracking-[0.25em] text-gray-400 light-theme:text-gray-600 hover:text-white light-theme:hover:text-black transition-all"
                    >
                        HOME
                    </Link>

                    {/* SERVICES with Dropdown */}
                    <div className="relative group">
                        <Link
                            href="/#impact"
                            className="text-sm tracking-[0.25em] text-gray-400 light-theme:text-gray-600 hover:text-white light-theme:hover:text-black transition-all cursor-pointer"
                        >
                            SERVICES
                        </Link>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full right-0 mt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                            <div className="bg-[#0a0a0a] light-theme:bg-white border border-[#E0E0E0]/10 light-theme:border-black/10 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] light-theme:shadow-[0_0_30px_rgba(0,0,0,0.1)]">
                                <Link
                                    href="/#service-automation"
                                    className="block px-6 py-4 text-sm text-gray-400 light-theme:text-gray-700 hover:text-white light-theme:hover:text-black hover:bg-[#E0E0E0]/5 light-theme:hover:bg-black/5 transition-all border-b border-[#E0E0E0]/5 light-theme:border-black/5"
                                >
                                    <div className="font-semibold mb-1">Workflow Automation</div>
                                    <div className="text-xs text-gray-500">n8n, Zapier, Make</div>
                                </Link>
                                <Link
                                    href="/#service-web"
                                    className="block px-6 py-4 text-sm text-gray-400 light-theme:text-gray-700 hover:text-white light-theme:hover:text-black hover:bg-[#E0E0E0]/5 light-theme:hover:bg-black/5 transition-all border-b border-[#E0E0E0]/5 light-theme:border-black/5"
                                >
                                    <div className="font-semibold mb-1">Web Development</div>
                                    <div className="text-xs text-gray-500">React, Node.js, Full Stack</div>
                                </Link>
                                <Link
                                    href="/#service-ai"
                                    className="block px-6 py-4 text-sm text-gray-400 light-theme:text-gray-700 hover:text-white light-theme:hover:text-black hover:bg-[#E0E0E0]/5 light-theme:hover:bg-black/5 transition-all"
                                >
                                    <div className="font-semibold mb-1">AI Integration</div>
                                    <div className="text-xs text-gray-500">OpenAI, Claude, AI Workflows</div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* INDUSTRIES with Dropdown */}
                    <div className="relative group">
                        <span className="text-sm tracking-[0.25em] text-gray-400 light-theme:text-gray-600 hover:text-white light-theme:hover:text-black transition-all cursor-pointer">
                            INDUSTRIES
                        </span>

                        {/* Dropdown Menu - Grid Layout */}
                        <div className="absolute top-full right-0 mt-4 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                            <div className="bg-[#0a0a0a] light-theme:bg-white border border-[#E0E0E0]/10 light-theme:border-black/10 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] light-theme:shadow-[0_0_30px_rgba(0,0,0,0.1)] p-6">
                                <div className="grid grid-cols-5 gap-3">
                                    <Link href="/industries/retail-ecommerce" className="px-4 py-3 text-xs text-center text-gray-400 light-theme:text-gray-700 hover:text-white light-theme:hover:text-black hover:bg-[#E0E0E0]/5 light-theme:hover:bg-black/5 transition-all rounded border border-transparent hover:border-[#E0E0E0]/20 light-theme:hover:border-black/20">
                                        Retail & eCommerce
                                    </Link>
                                    <Link href="/industries/fintech" className="px-4 py-3 text-xs text-center text-gray-400 light-theme:text-gray-700 hover:text-white light-theme:hover:text-black hover:bg-[#E0E0E0]/5 light-theme:hover:bg-black/5 transition-all rounded border border-transparent hover:border-[#E0E0E0]/20 light-theme:hover:border-black/20">
                                        Fintech
                                    </Link>
                                    <Link href="/industries/transportation-logistics" className="px-4 py-3 text-xs text-center text-gray-400 light-theme:text-gray-700 hover:text-white light-theme:hover:text-black hover:bg-[#E0E0E0]/5 light-theme:hover:bg-black/5 transition-all rounded border border-transparent hover:border-[#E0E0E0]/20 light-theme:hover:border-black/20">
                                        Transport & Logistics
                                    </Link>
                                    <Link href="/industries/enterprises" className="px-4 py-3 text-xs text-center text-gray-400 light-theme:text-gray-700 hover:text-white light-theme:hover:text-black hover:bg-[#E0E0E0]/5 light-theme:hover:bg-black/5 transition-all rounded border border-transparent hover:border-[#E0E0E0]/20 light-theme:hover:border-black/20">
                                        Enterprises
                                    </Link>
                                    <Link href="/industries/edtech" className="px-4 py-3 text-xs text-center text-gray-400 light-theme:text-gray-700 hover:text-white light-theme:hover:text-black hover:bg-[#E0E0E0]/5 light-theme:hover:bg-black/5 transition-all rounded border border-transparent hover:border-[#E0E0E0]/20 light-theme:hover:border-black/20">
                                        EdTech
                                    </Link>
                                    <Link href="/industries/healthcare" className="px-4 py-3 text-xs text-center text-gray-400 light-theme:text-gray-700 hover:text-white light-theme:hover:text-black hover:bg-[#E0E0E0]/5 light-theme:hover:bg-black/5 transition-all rounded border border-transparent hover:border-[#E0E0E0]/20 light-theme:hover:border-black/20">
                                        Healthcare
                                    </Link>
                                    <Link href="/industries/automotive" className="px-4 py-3 text-xs text-center text-gray-400 light-theme:text-gray-700 hover:text-white light-theme:hover:text-black hover:bg-[#E0E0E0]/5 light-theme:hover:bg-black/5 transition-all rounded border border-transparent hover:border-[#E0E0E0]/20 light-theme:hover:border-black/20">
                                        Automotive
                                    </Link>
                                    <Link href="/industries/startups" className="px-4 py-3 text-xs text-center text-gray-400 light-theme:text-gray-700 hover:text-white light-theme:hover:text-black hover:bg-[#E0E0E0]/5 light-theme:hover:bg-black/5 transition-all rounded border border-transparent hover:border-[#E0E0E0]/20 light-theme:hover:border-black/20">
                                        Startups
                                    </Link>
                                    <Link href="/industries/travel-hospitality" className="px-4 py-3 text-xs text-center text-gray-400 light-theme:text-gray-700 hover:text-white light-theme:hover:text-black hover:bg-[#E0E0E0]/5 light-theme:hover:bg-black/5 transition-all rounded border border-transparent hover:border-[#E0E0E0]/20 light-theme:hover:border-black/20">
                                        Travel & Hospitality
                                    </Link>
                                    <Link href="/industries/real-estate" className="px-4 py-3 text-xs text-center text-gray-400 light-theme:text-gray-700 hover:text-white light-theme:hover:text-black hover:bg-[#E0E0E0]/5 light-theme:hover:bg-black/5 transition-all rounded border border-transparent hover:border-[#E0E0E0]/20 light-theme:hover:border-black/20">
                                        Real Estate
                                    </Link>
                                    <Link href="/industries/on-demand" className="px-4 py-3 text-xs text-center text-gray-400 light-theme:text-gray-700 hover:text-white light-theme:hover:text-black hover:bg-[#E0E0E0]/5 light-theme:hover:bg-black/5 transition-all rounded border border-transparent hover:border-[#E0E0E0]/20 light-theme:hover:border-black/20">
                                        On Demand
                                    </Link>
                                    <Link href="/industries/government-public-sector" className="px-4 py-3 text-xs text-center text-gray-400 light-theme:text-gray-700 hover:text-white light-theme:hover:text-black hover:bg-[#E0E0E0]/5 light-theme:hover:bg-black/5 transition-all rounded border border-transparent hover:border-[#E0E0E0]/20 light-theme:hover:border-black/20">
                                        Gov & Public
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TECHNOLOGY */}
                    <Link
                        href="/#techstack"
                        className="text-sm tracking-[0.25em] text-gray-400 light-theme:text-gray-600 hover:text-white light-theme:hover:text-black transition-all"
                    >
                        TECHNOLOGY
                    </Link>

                    {/* PROJECTS */}
                    <Link
                        href="/#portfolio"
                        className="text-sm tracking-[0.25em] text-gray-400 light-theme:text-gray-600 hover:text-white light-theme:hover:text-black transition-all"
                    >
                        PROJECTS
                    </Link>

                    {/* ABOUT */}
                    <Link
                        href="/#philosophy"
                        className="text-sm tracking-[0.25em] text-gray-400 light-theme:text-gray-600 hover:text-white light-theme:hover:text-black transition-all"
                    >
                        ABOUT
                    </Link>

                    {/* CONTACT */}
                    <Link
                        href="/#footer"
                        className="text-sm tracking-[0.25em] text-gray-400 light-theme:text-gray-600 hover:text-white light-theme:hover:text-black transition-all"
                    >
                        CONTACT
                    </Link>
                </div>

                {/* Theme Toggle - Desktop */}
                <button
                    onClick={toggleTheme}
                    className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full border border-[#E0E0E0]/20 light-theme:border-black/20 hover:border-[#E0E0E0]/40 light-theme:hover:border-black/40 transition-all group"
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? (
                        <>
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                            <span className="text-xs text-gray-400 group-hover:text-white transition-colors">DARK</span>
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <span className="text-xs text-gray-600 group-hover:text-black transition-colors">LIGHT</span>
                        </>
                    )}
                </button>

                {/* Mobile Burger Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-[#E0E0E0]/20 light-theme:border-black/20 hover:border-[#E0E0E0]/40 light-theme:hover:border-black/40 transition-all"
                    aria-label="Toggle mobile menu"
                >
                    {mobileMenuOpen ? (
                        <svg className="w-6 h-6 text-[#E0E0E0] light-theme:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-[#E0E0E0] light-theme:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Fullscreen Menu */}
            <div className={`md:hidden fixed inset-0 z-40 bg-black light-theme:bg-white transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="flex flex-col h-full justify-center items-center px-8 py-20 overflow-y-auto">
                    <nav className="flex flex-col items-center gap-8 w-full max-w-md">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-light text-[#E0E0E0] light-theme:text-black hover:text-white light-theme:hover:text-gray-700 transition-colors">
                            HOME
                        </Link>
                        <Link href="/#impact" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-light text-[#E0E0E0] light-theme:text-black hover:text-white light-theme:hover:text-gray-700 transition-colors">
                            SERVICES
                        </Link>
                        <Link href="/#techstack" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-light text-[#E0E0E0] light-theme:text-black hover:text-white light-theme:hover:text-gray-700 transition-colors">
                            TECHNOLOGY
                        </Link>
                        <Link href="/#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-light text-[#E0E0E0] light-theme:text-black hover:text-white light-theme:hover:text-gray-700 transition-colors">
                            PROJECTS
                        </Link>
                        <Link href="/#philosophy" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-light text-[#E0E0E0] light-theme:text-black hover:text-white light-theme:hover:text-gray-700 transition-colors">
                            ABOUT
                        </Link>
                        <Link href="/#footer" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-light text-[#E0E0E0] light-theme:text-black hover:text-white light-theme:hover:text-gray-700 transition-colors">
                            CONTACT
                        </Link>

                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={() => {
                                toggleTheme();
                                setMobileMenuOpen(false);
                            }}
                            className="mt-8 flex items-center gap-3 px-6 py-3 rounded-full border border-[#E0E0E0]/20 light-theme:border-black/20 hover:border-[#E0E0E0]/40 light-theme:hover:border-black/40 transition-all"
                        >
                            {theme === 'dark' ? (
                                <>
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                    <span className="text-sm text-gray-400">DARK MODE</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <span className="text-sm text-gray-600">LIGHT MODE</span>
                                </>
                            )}
                        </button>
                    </nav>
                </div>
            </div>
        </>
    );
}
