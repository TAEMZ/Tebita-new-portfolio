'use client';

import { useRef, useState } from 'react';

export interface Project {
  title: string;
  client: string;
  tech: string;
  outcome: string;
  image: string;
}

export default function Portfolio({ initialProjects }: { initialProjects?: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = initialProjects?.map(p => ({
    title: p.title,
    client: p.client || '',
    tech: p.tech || '',
    outcome: p.outcome || '',
    image: p.image?.url || p.image || '/assets/image.png'
  })) || [
      {
        title: 'NEXUS AI',
        client: 'Fortune 500 Retail',
        tech: 'TensorFlow • Python • Cloud ML',
        outcome: '43% increase in prediction accuracy',
        image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200',
      },
      {
        title: 'QUANTUM FLOW',
        client: 'FinTech Startup',
        tech: 'React • Node.js • PostgreSQL',
        outcome: 'Processed $2M+ in first month',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200',
      },
      {
        title: 'SYNAPSE',
        client: 'Healthcare Corp',
        tech: 'NLP • HIPAA • Real-time Analytics',
        outcome: '67% reduction in processing time',
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200',
      },
      {
        title: 'AUTOMATION SUITE',
        client: 'Manufacturing Giant',
        tech: 'RPA • IoT • Edge Computing',
        outcome: '$1.2M annual cost savings',
        image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200',
      },
      {
        title: 'ECLIPSE PLATFORM',
        client: 'E-commerce Leader',
        tech: 'Microservices • Kubernetes • Redis',
        outcome: '99.99% uptime achieved',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200',
      },
    ];

  return (
    <section id="portfolio" className="relative py-32 bg-[#050505] overflow-hidden">
      <div className="px-8 md:px-16 mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-[#E0E0E0] tracking-tight">
          PROJECTS<span className="liquid-text">.</span>
        </h2>
        <p className="mt-6 text-xl text-[#C0C0C0]/70 max-w-2xl">
          Recent work we've done for clients. Real projects, real results.
        </p>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-8 px-8 md:px-16 overflow-x-auto scrollbar-hide pb-8"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {projects.map((project: any, index: number) => (
            <div
              key={project.title}
              className="flex-shrink-0 w-[85vw] md:w-[400px] group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-[500px] overflow-hidden glass-card transition-all duration-700 hover:shadow-[0_0_40px_rgba(192,192,192,0.2)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${hoveredIndex === index ? 'grayscale-0 scale-110' : 'grayscale scale-100'
                    }`}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-90' : 'opacity-70'
                    }`}
                />

                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-[#E0E0E0] mb-3 group-hover:liquid-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <div
                    className={`space-y-2 transition-all duration-500 ${hoveredIndex === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                      }`}
                  >
                    <div className="flex items-center gap-2 text-sm font-mono">
                      <span className="w-2 h-2 bg-[#C0C0C0]"></span>
                      <span className="text-[#C0C0C0]">{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-mono">
                      <span className="w-2 h-2 bg-[#C0C0C0]"></span>
                      <span className="text-[#C0C0C0]/70">{project.tech}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-mono">
                      <span className="w-2 h-2 bg-[#00FF00]"></span>
                      <span className="text-[#00FF00]">{project.outcome}</span>
                    </div>
                  </div>
                </div>

                {hoveredIndex === index && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute right-8 bottom-16 flex gap-4">
          <button
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
              }
            }}
            className="w-12 h-12 rounded-full border border-[#C0C0C0]/30 flex items-center justify-center hover:border-[#C0C0C0] transition-all duration-300 hover:shadow-[0_0_20px_rgba(192,192,192,0.3)]"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6 text-[#C0C0C0]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
              }
            }}
            className="w-12 h-12 rounded-full border border-[#C0C0C0]/30 flex items-center justify-center hover:border-[#C0C0C0] transition-all duration-300 hover:shadow-[0_0_20px_rgba(192,192,192,0.3)]"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 text-[#C0C0C0]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
