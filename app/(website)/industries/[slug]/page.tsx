'use client';

import { industries, IndustrySlug } from '@/lib/industries-data';
import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function IndustryPage() {
    const params = useParams();
    const slug = params.slug as IndustrySlug;
    const industry = industries[slug];

    if (!industry) {
        notFound();
    }

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-[#E0E0E0]">
            {/* Hero Section */}
            <section className="relative py-32 md:py-48 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#333_0%,transparent_50%)]" />
                </div>

                <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
                            {industry.title}<span className="liquid-text">.</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-[#C0C0C0]/80 max-w-3xl leading-relaxed">
                            {industry.hero}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 border-t border-[#E0E0E0]/10">
                <div className="max-w-7xl mx-auto px-8 md:px-16">
                    <div className="grid lg:grid-cols-1 gap-24">
                        <div>
                            <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
                                <span className="w-12 h-px bg-[#E0E0E0]/30" />
                                SOLUTIONS
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                {industry.solutions.map((solution, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group p-8 rounded-2xl bg-[#0a0a0a] border border-[#E0E0E0]/5 hover:border-[#E0E0E0]/20 transition-all duration-500"
                                    >
                                        <div className="text-4xl mb-6 bg-[#111] w-16 h-16 rounded-xl flex items-center justify-center border border-[#E0E0E0]/10">
                                            {solution.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                                            {solution.title}
                                        </h3>
                                        <p className="text-[#C0C0C0]/60 mb-6 leading-relaxed">
                                            {solution.description}
                                        </p>
                                        <div className="space-y-2">
                                            {solution.benefits.map((benefit, i) => (
                                                <div key={i} className="flex items-center gap-3 text-sm font-mono text-[#C0C0C0]/40">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C0C0C0]/20" />
                                                    {benefit}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 border-t border-[#E0E0E0]/10 bg-[radial-gradient(circle_at_bottom,#111_0%,transparent_70%)]">
                <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-12">
                        Ready to automate your <span className="liquid-text lowercase">{industry.title}</span> operations?
                    </h2>
                    <a
                        href="/#footer"
                        className="inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-[#050505] bg-[#E0E0E0] rounded-none hover:bg-white transition-all duration-300 hover:scale-105"
                    >
                        GET STARTED
                    </a>
                </div>
            </section>
        </div>
    );
}
