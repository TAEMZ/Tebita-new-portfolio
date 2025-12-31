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

export default function LiveMetrics({ initialMetrics }: { initialMetrics?: any[] }) {
    const fallbackMetrics = [
        { label: "System Uptime", value: 99, suffix: "%", delay: 0 },
        { label: "Global Projects", value: 142, suffix: "", delay: 200 },
        { label: "Lines of Code", value: 850, suffix: "K+", delay: 400 },
        { label: "Client ROI", value: 300, suffix: "%", delay: 600 }
    ];

    const metrics = initialMetrics && initialMetrics.length > 0
        ? initialMetrics.map((m: any, index: number) => ({
            label: m.label,
            value: m.value,
            suffix: m.suffix || "",
            delay: index * 200
        }))
        : fallbackMetrics;

    return (
        <section className="py-20 bg-[#050505] border-b border-[#333]/50">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {metrics.map((metric: any, index: number) => (
                        <MetricCard
                            key={index}
                            label={metric.label}
                            value={metric.value}
                            suffix={metric.suffix}
                            delay={metric.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
