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
            }, 30);
        } else {
            setDisplayText('');
        }

        return () => clearInterval(interval);
    }, [text, reveal]);

    return <span>{displayText}</span>;
};

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
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

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000); // Change every 6 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    return (
        <section className="relative py-32 bg-[#050505] overflow-hidden flex items-center justify-center min-h-[80vh]">
            {/* Background Ambience */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/30 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
                <div className="flex flex-col items-center text-center">

                    {/* Header */}
                    <div className="mb-16">
                        <h2 className="text-sm md:text-base font-mono text-[#00FF00] tracking-[0.5em] uppercase mb-4">
                            Client Testimonies
                        </h2>
                    </div>

                    {/* Main Card */}
                    <div className="relative w-full max-w-4xl">
                        {/* Glass Monolith */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff05] to-[#ffffff01] backdrop-blur-sm border border-[#ffffff10] rounded-2xl transform rotate-1 scale-105 opacity-50" />

                        <div className="relative bg-[#0a0a0a]/80 border border-[#333] rounded-2xl p-12 md:p-20 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-[#555] transition-colors duration-500">

                            {/* Decorative Corner Accents */}
                            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#00FF00]/30 rounded-tl-2xl" />
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#00FF00]/30 rounded-br-2xl" />

                            {/* Quote Icon */}
                            <div className="absolute top-8 left-8 text-6xl text-[#ffffff10] font-serif">"</div>

                            {/* Content Container */}
                            <div className="relative z-10 min-h-[200px] flex flex-col justify-center">
                                <h3 className="text-2xl md:text-4xl font-light text-[#E0E0E0] leading-relaxed mb-8">
                                    <DecryptingText
                                        text={testimonials[activeIndex].quote}
                                        reveal={true}
                                        key={`quote-${activeIndex}`} // Force re-render for animation
                                    />
                                </h3>

                                <div className="flex flex-col items-center gap-2 mt-4">
                                    <div className="text-[#00FF00] font-mono text-lg tracking-wider">
                                        <DecryptingText
                                            text={testimonials[activeIndex].author}
                                            reveal={true}
                                            key={`author-${activeIndex}`}
                                        />
                                    </div>
                                    <div className="text-[#888] text-sm font-light uppercase tracking-widest">
                                        {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex gap-4 mt-12">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setActiveIndex(idx);
                                    setIsAutoPlaying(false); // Stop auto-play on interaction
                                }}
                                className={`w-12 h-1 transition-all duration-300 ${activeIndex === idx ? 'bg-[#00FF00] w-20' : 'bg-[#333] hover:bg-[#555]'
                                    }`}
                                aria-label={`View testimonial ${idx + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
