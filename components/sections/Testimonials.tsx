'use client';

import { useEffect, useState, useRef } from 'react';

// Decrypting Text Component
const DecryptingText = ({ text, reveal }: { text: string; reveal: boolean }) => {
    const [displayText, setDisplayText] = useState('');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let iteration = 0;

        if (reveal) {
            interval = setInterval(() => {
                setDisplayText(
                    text
                        .split('')
                        .map((char, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join('')
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 2; // Speed of decryption
            }, 15);
        } else {
            setDisplayText('');
        }

        return () => clearInterval(interval);
    }, [text, reveal]);

    return <span>{displayText}</span>;
};

export default function Testimonials({ initialTestimonials }: { initialTestimonials?: any[] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const fallbackTestimonials = [
        {
            quote: "Tebita Tech didn't just build our platform; they engineered a digital nervous system. The efficiency gains are not just measurable; they are exponential.",
            author: "Sarah Chen",
            role: "CTO, Nexus Dynamics",
            company: "FinTech"
        },
        {
            quote: "We were drowning in data. They turned it into our strongest asset. The AI integration feels less like software and more like precognition.",
            author: "Marcus Thorne",
            role: "Director of Operations",
            company: "Global Logistics"
        },
        {
            quote: "Absolute precision. The architecture they deployed scaled effortlessly during our biggest launch. It's rare to see code this clean and powerful.",
            author: "Elena Rodriguez",
            role: "VP of Engineering",
            company: "HealthStream"
        }
    ];

    const testimonials = initialTestimonials && initialTestimonials.length > 0
        ? initialTestimonials.map((t: any) => ({
            quote: t.quote,
            author: t.author,
            role: t.role,
            company: t.company
        }))
        : fallbackTestimonials;

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 8000); // Slower rotation for reading

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    return (
        <section className="relative py-40 bg-[#050505] overflow-hidden min-h-screen flex items-center">
            <div className="max-w-[90%] mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column: Title & Navigation */}
                    <div className="lg:col-span-3 flex flex-col justify-between h-full min-h-[50vh]">
                        <div>
                            <h2 className="text-sm font-mono text-[#E0E0E0]/50 tracking-[0.5em] uppercase mb-8 light-theme:text-black/50">
                                Voices
                            </h2>
                            <div className="w-12 h-0.5 bg-[#E0E0E0]/20 light-theme:bg-black/20" />
                        </div>

                        <div className="flex flex-col gap-4 mt-auto">
                            {testimonials.map((_: any, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setActiveIndex(idx);
                                        setIsAutoPlaying(false);
                                    }}
                                    className={`text-left text-sm font-mono transition-all duration-300 ${activeIndex === idx
                                        ? 'text-[#E0E0E0] pl-4 border-l-2 border-[#E0E0E0] light-theme:text-black light-theme:border-black'
                                        : 'text-[#E0E0E0]/30 hover:text-[#E0E0E0]/70 pl-0 border-l-2 border-transparent light-theme:text-black/30 light-theme:hover:text-black/70'
                                        }`}
                                >
                                    {String(idx + 1).padStart(2, '0')}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Massive Quote */}
                    <div className="lg:col-span-9 relative">
                        {/* Huge Background Quote Mark */}
                        <div className="absolute -top-20 -left-20 text-[12rem] md:text-[20rem] font-serif text-[#E0E0E0]/5 leading-none select-none pointer-events-none light-theme:text-black/5">
                            "
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#E0E0E0] leading-[1.1] mb-16 tracking-tight light-theme:text-black">
                                <span className="text-[#E0E0E0]/30 light-theme:text-black/30 mr-2">"</span>
                                <DecryptingText
                                    text={testimonials[activeIndex].quote}
                                    reveal={true}
                                    key={`quote-${activeIndex}`}
                                />
                                <span className="text-[#E0E0E0]/30 light-theme:text-black/30 ml-2">"</span>
                            </h3>

                            <div className="flex flex-col md:flex-row md:items-end gap-8 border-t border-[#E0E0E0]/10 pt-12 light-theme:border-black/10">
                                <div>
                                    <div className="text-xl md:text-2xl text-[#E0E0E0] font-medium mb-2 light-theme:text-black">
                                        <DecryptingText
                                            text={testimonials[activeIndex].author}
                                            reveal={true}
                                            key={`author-${activeIndex}`}
                                        />
                                    </div>
                                    <div className="text-[#E0E0E0]/50 font-mono text-sm uppercase tracking-widest light-theme:text-black/50">
                                        {testimonials[activeIndex].role}
                                    </div>
                                </div>

                                <div className="md:ml-auto text-[#E0E0E0]/60 font-serif italic text-lg light-theme:text-black/60">
                                    {testimonials[activeIndex].company}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
