'use client';

import { useState } from 'react';

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState<string | null>('Automation');

    const categories = [
        {
            id: 'Automation',
            title: 'AUTOMATION',
            description: 'The engines that power efficiency.',
            items: [
                { name: 'n8n', icon: '⚡', desc: 'Workflow Automation' },
                { name: 'Zapier', icon: '🟠', desc: 'App Integration' },
                { name: 'Make', icon: '🟣', desc: 'Visual Scenarios' },
                { name: 'Webhooks', icon: '🔗', desc: 'Real-time Data' },
                { name: 'API Integration', icon: '🔌', desc: 'Custom Connections' },
            ]
        },
        {
            id: 'Frontend',
            title: 'FRONTEND',
            description: 'Pixel-perfect, responsive interfaces.',
            items: [
                { name: 'React', icon: '⚛️', desc: 'UI Library' },
                { name: 'Next.js', icon: '▲', desc: 'React Framework' },
                { name: 'TypeScript', icon: '📘', desc: 'Type Safety' },
                { name: 'Tailwind CSS', icon: '🎨', desc: 'Styling System' },
                { name: 'Framer Motion', icon: '✨', desc: 'Animations' },
            ]
        },
        {
            id: 'Backend',
            title: 'BACKEND',
            description: 'Robust, scalable infrastructure.',
            items: [
                { name: 'Node.js', icon: '🟢', desc: 'Runtime Environment' },
                { name: 'PostgreSQL', icon: '🐘', desc: 'Relational DB' },
                { name: 'Supabase', icon: '🔥', desc: 'Backend as a Service' },
                { name: 'AWS', icon: '☁️', desc: 'Cloud Infrastructure' },
                { name: 'Redis', icon: '🔴', desc: 'Caching' },
            ]
        },
        {
            id: 'AI',
            title: 'AI & ML',
            description: 'Intelligent decision making.',
            items: [
                { name: 'OpenAI', icon: '🧠', desc: 'LLM Integration' },
                { name: 'Claude', icon: '🤖', desc: 'Advanced Reasoning' },
                { name: 'LangChain', icon: '🦜', desc: 'AI Framework' },
                { name: 'Vector DBs', icon: '🔍', desc: 'Semantic Search' },
                { name: 'AutoGPT', icon: '⚙️', desc: 'Autonomous Agents' },
            ]
        }
    ];

    return (
        <section id="techstack" className="relative py-32 bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 md:px-16">
                <div className="mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-[#E0E0E0] tracking-tight">
                        TECHNOLOGY<span className="liquid-text">.</span>
                    </h2>
                    <p className="mt-6 text-xl text-[#C0C0C0]/70 max-w-2xl">
                        Our arsenal of modern tools. Selected for speed, scalability, and reliability.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 min-h-[400px]">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`relative overflow-hidden transition-all duration-500 ease-out cursor-pointer border border-[#E0E0E0]/10 light-theme:border-black/10 rounded-2xl ${activeCategory === category.id
                                ? 'lg:flex-[3] bg-[#0a0a0a] light-theme:bg-white'
                                : 'lg:flex-1 bg-[#0a0a0a] light-theme:bg-white hover:bg-[#111] light-theme:hover:bg-gray-50'
                                } ${activeCategory === category.id ? 'min-h-[500px]' : 'min-h-[80px] lg:min-h-[500px]'}`}
                        >
                            {/* Vertical Title (Collapsed State) */}
                            <div
                                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${activeCategory === category.id ? 'opacity-0 pointer-events-none' : 'opacity-100'
                                    }`}
                            >
                                <h3 className="text-2xl font-bold text-[#E0E0E0] light-theme:text-black tracking-widest lg:[writing-mode:vertical-rl] lg:rotate-180 uppercase opacity-50 group-hover:opacity-100">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Content (Expanded State) */}
                            <div
                                className={`absolute inset-0 p-6 md:p-8 flex flex-col transition-all duration-500 ${activeCategory === category.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                                    }`}
                            >
                                <div className="mb-6 md:mb-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#E0E0E0] light-theme:text-black mb-2">{category.title}</h3>
                                    <p className="text-[#C0C0C0]/60 light-theme:text-gray-600 font-mono text-sm">{category.description}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 overflow-y-auto pr-2 custom-scrollbar">
                                    {category.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-[#111] light-theme:bg-gray-100 border border-[#E0E0E0]/5 light-theme:border-black/5 hover:border-[#E0E0E0]/20 light-theme:hover:border-black/20 transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-[#000] light-theme:bg-white flex items-center justify-center text-xl shadow-inner">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="font-bold text-[#E0E0E0] light-theme:text-black">{item.name}</div>
                                                <div className="text-xs text-[#C0C0C0]/50 light-theme:text-gray-500 font-mono">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Active Indicator Line */}
                            {activeCategory === category.id && (
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C0C0C0] light-theme:from-black to-transparent" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
