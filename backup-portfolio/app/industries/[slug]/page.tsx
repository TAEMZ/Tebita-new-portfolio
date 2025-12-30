import { industries, type IndustrySlug } from '@/lib/industries-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/sections/Header';

export async function generateStaticParams() {
    return Object.keys(industries).map((slug) => ({
        slug,
    }));
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
    const industry = industries[params.slug as IndustrySlug];

    if (!industry) {
        notFound();
    }

    return (
        <>
            {/* Header with Navigation */}
            <Header />


            <main className="relative min-h-screen bg-black light-theme:bg-white">
                {/* Hero Section - Magazine Style */}
                <section className="relative min-h-[60vh] flex items-end px-8 md:px-16 pb-16 pt-32">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black light-theme:to-white" />

                    <div className="max-w-7xl mx-auto relative z-10 w-full">
                        <div className="border-l-4 border-[#E0E0E0] light-theme:border-black pl-8">
                            <p className="text-sm tracking-[0.3em] text-[#C0C0C0] light-theme:text-gray-600 uppercase mb-4">Industry Focus</p>
                            <h1 className="text-6xl md:text-8xl font-bold text-[#E0E0E0] light-theme:text-black mb-6 leading-none">
                                {industry.title}
                            </h1>
                            <p className="text-2xl md:text-3xl text-[#C0C0C0] light-theme:text-gray-700 font-light max-w-3xl leading-relaxed">
                                {industry.hero}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Solutions - Editorial Layout */}
                <section className="relative py-24 px-8 md:px-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-20">
                            <h2 className="text-sm tracking-[0.3em] text-[#C0C0C0] light-theme:text-gray-600 uppercase mb-4">Our Approach</h2>
                            <div className="w-24 h-1 bg-[#E0E0E0] light-theme:bg-black" />
                        </div>

                        <div className="space-y-32">
                            {industry.solutions.map((solution, index) => (
                                <article
                                    key={index}
                                    className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                                        }`}
                                >
                                    {/* Number */}
                                    <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-11' : ''}`}>
                                        <div className="text-8xl font-bold text-[#E0E0E0]/10 light-theme:text-black/10 leading-none">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`lg:col-span-10 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                        <div className="max-w-3xl">
                                            <h3 className="text-4xl md:text-5xl font-bold text-[#E0E0E0] light-theme:text-black mb-6 leading-tight">
                                                {solution.title}
                                            </h3>

                                            <p className="text-xl text-[#C0C0C0]/80 light-theme:text-gray-700 leading-relaxed mb-8">
                                                {solution.description}
                                            </p>

                                            {/* Benefits - Clean List */}
                                            <div className="border-l-2 border-[#E0E0E0]/20 light-theme:border-black/20 pl-6 space-y-3">
                                                {solution.benefits.map((benefit, idx) => (
                                                    <div key={idx} className="flex items-start gap-3">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#E0E0E0] light-theme:bg-black mt-2.5 flex-shrink-0" />
                                                        <p className="text-[#C0C0C0] light-theme:text-gray-700 text-lg">{benefit}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    {index < industry.solutions.length - 1 && (
                                        <div className="lg:col-span-12 mt-16">
                                            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E0E0E0]/20 light-theme:via-black/20 to-transparent" />
                                        </div>
                                    )}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section - Minimal */}
                <section className="relative py-32 px-8 md:px-16 border-t border-[#E0E0E0]/10 light-theme:border-black/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm tracking-[0.3em] text-[#C0C0C0] light-theme:text-gray-600 uppercase mb-6">Let's Talk</p>
                        <h2 className="text-4xl md:text-6xl font-bold text-[#E0E0E0] light-theme:text-black mb-12 leading-tight">
                            Ready to automate your<br />{industry.title.toLowerCase()} operations?
                        </h2>
                        <Link
                            href="/#footer"
                            className="inline-block group"
                        >
                            <div className="flex items-center gap-4 px-8 py-4 border-2 border-[#E0E0E0] light-theme:border-black text-[#E0E0E0] light-theme:text-black font-bold tracking-wider hover:bg-[#E0E0E0] light-theme:hover:bg-black hover:text-black light-theme:hover:text-white transition-all duration-300">
                                <span>START A CONVERSATION</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
