'use client';

import { useEffect, useState } from 'react';

const MetricCard = ({ label, value, suffix = '', delay = 0 }: { label: string; value: number; suffix?: string; delay?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const stepTime = duration / steps;
        let current = 0;

        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                current += value / steps;
                if (current >= value) {
                    setCount(value);
                    clearInterval(interval);
                } else {
                    setCount(Math.floor(current));
                }
            }, stepTime);
            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return (
        <div className="flex flex-col items-center p-6 bg-[#0a0a0a] border border-[#333] rounded-xl hover:border-[#00FF00]/50 transition-colors duration-300 group">
            <div className="text-4xl md:text-5xl font-mono font-bold text-[#E0E0E0] mb-2 group-hover:text-[#00FF00] transition-colors">
                {count}{suffix}
            </div>
            <div className="text-xs md:text-sm text-[#888] uppercase tracking-widest font-light">
                {label}
            </div>
        </div>
    );
};

export default function LiveMetrics() {
    return (
        <section className="py-20 bg-[#050505] border-b border-[#333]/50">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <MetricCard label="System Uptime" value={99} suffix="%" delay={0} />
                    <MetricCard label="Global Projects" value={142} delay={200} />
                    <MetricCard label="Lines of Code" value={850} suffix="K+" delay={400} />
                    <MetricCard label="Client ROI" value={300} suffix="%" delay={600} />
                </div>
            </div>
        </section>
    );
}
