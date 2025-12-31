import { notFound } from 'next/navigation';
import { industries, type IndustrySlug } from '@/lib/industries-data';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

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
            <Header />
            <main className="relative bg-[#050505] min-h-screen pt-32">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-8 md:px-16 py-20">
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-7xl font-bold text-[#E0E0E0] tracking-tight mb-6">
                            {industry.title}<span className="liquid-text">.</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-[#C0C0C0]/70 max-w-3xl">
                            {industry.hero}
                        </p>
                    </div>
                    <p className="text-xl text-[#C0C0C0]/60 max-w-2xl">
                        {industry.description}
                    </p>
                </section>

                {/* Solutions Grid */}
                <section className="max-w-7xl mx-auto px-8 md:px-16 py-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#E0E0E0] mb-12">
                        Our Solutions
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {industry.solutions.map((solution, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-[#0a0a0a] border border-[#E0E0E0]/10 rounded-2xl hover:border-[#E0E0E0]/30 transition-all duration-300"
                            >
                                <div className="text-5xl mb-4">{solution.icon}</div>
                                <h3 className="text-2xl font-bold text-[#E0E0E0] mb-3">
                                    {solution.title}
                                </h3>
                                <p className="text-[#C0C0C0]/70 mb-6">
                                    {solution.description}
                                </p>
                                <ul className="space-y-2">
                                    {solution.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-[#C0C0C0]/60">
                                            <span className="text-[#00FF00]">✓</span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-7xl mx-auto px-8 md:px-16 py-20">
                    <div className="bg-gradient-to-r from-[#0a0a0a] to-[#111] border border-[#E0E0E0]/10 rounded-2xl p-12 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#E0E0E0] mb-6">
                            Ready to Transform Your {industry.title} Business?
                        </h2>
                        <p className="text-xl text-[#C0C0C0]/70 mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can help you automate and scale your operations.
                        </p>
                        <a
                            href="/#footer"
                            className="inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-[#050505] bg-[#C0C0C0] hover:bg-[#E0E0E0] transition-all duration-300 hover:shadow-[0_0_40px_rgba(192,192,192,0.5)]"
                        >
                            GET IN TOUCH
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
