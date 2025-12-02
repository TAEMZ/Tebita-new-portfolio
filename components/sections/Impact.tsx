'use client';

import { useState } from 'react';

export default function Impact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      number: '01',
      title: 'ARTIFICIAL INTELLIGENCE',
      description: 'Neural networks that learn, adapt, and evolve. Machine learning solutions that transform data into actionable intelligence.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      tags: ['ML', 'Deep Learning', 'NLP', 'Computer Vision'],
    },
    {
      number: '02',
      title: 'FULL STACK ARCHITECTURE',
      description: 'End-to-end solutions built on robust, scalable foundations. From database design to cloud deployment, we architect the complete digital ecosystem.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      number: '03',
      title: 'HYPER-AUTOMATION',
      description: 'Workflows that execute themselves. Business processes reimagined through intelligent automation, reducing friction and maximizing efficiency.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      tags: ['RPA', 'API Integration', 'Workflow', 'DevOps'],
    },
  ];

  return (
    <section id="impact" className="relative min-h-screen py-32 px-8 md:px-16 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-6xl md:text-8xl font-bold text-[#E0E0E0] tracking-tight">
            IMPACT<span className="liquid-text">.</span>
          </h2>
          <p className="mt-6 text-xl text-[#C0C0C0]/70 max-w-2xl">
            Three pillars of technological excellence. Each service engineered to create exponential value.
          </p>
        </div>

        <div className="space-y-1">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start gap-8 p-8 transition-all duration-500 border-b border-[#E0E0E0]/5 hover:border-[#C0C0C0]/20">
                <div className="flex-1">
                  <div className="flex items-baseline gap-6">
                    <span className="text-4xl md:text-6xl font-mono text-[#C0C0C0]/30 group-hover:text-[#C0C0C0] transition-colors duration-300">
                      {service.number}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold text-[#E0E0E0] tracking-tight group-hover:liquid-text transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${hoveredIndex === index ? 'max-h-96 opacity-100 mt-8' : 'max-h-96 opacity-100 mt-8 md:max-h-0 md:opacity-0 md:mt-0'
                      }`}
                  >
                    <p className="text-lg text-[#C0C0C0] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 text-sm font-mono border border-[#C0C0C0]/20 text-[#C0C0C0] hover:border-[#C0C0C0] transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`hidden lg:block relative w-96 h-64 overflow-hidden transition-all duration-700 ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                >
                  <div className="glass-card absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>

              {hoveredIndex === index && (
                <div
                  className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#C0C0C0] via-[#E0E0E0] to-[#C0C0C0] transition-all duration-500"
                  style={{
                    boxShadow: '0 0 20px rgba(192, 192, 192, 0.5)',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
