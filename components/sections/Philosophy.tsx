'use client';

import { useEffect, useState } from 'react';

export default function Philosophy({ initialPhilosophy }: { initialPhilosophy?: any[] }) {
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const philosophyHighlights = initialPhilosophy?.[0]?.content?.map((c: any) => c.point) || [
    'Pure implementation over promised perfection',
    'Hardware-software convergence as the ultimate goal',
    'AI as an extension of human intent, not a replacement',
    'Extreme minimalism in code, maximum impact in output',
  ];

  const codeSequence = [
    '// Initialize innovation',
    'const solution = analyze(problem);',
    '',
    'function optimize(code) {',
    '  while (!isPerfect(code)) {',
    '    code = refactor(code);',
    '    code = enhance(code);',
    '  }',
    '  return code;',
    '}',
    '',
    'const impact = solution.map(idea => {',
    '  return idea.transform().scale();',
    '});',
    '',
    '// Create ripples',
    'deploy(impact);',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < codeSequence.length - 1) {
          return prev + 1;
        }
        return 0;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCodeLines(codeSequence.slice(0, currentIndex + 1));
  }, [currentIndex]);

  return (
    <section id="philosophy" className="relative min-h-screen py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] glass-card p-8 overflow-hidden">
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>

            <div className="mt-12 font-mono text-sm leading-relaxed">
              {codeLines.map((line: string, index: number) => (
                <div
                  key={index}
                  className="transition-all duration-300"
                  style={{
                    opacity: index === currentIndex ? 1 : 0.5,
                  }}
                >
                  <span className="text-[#C0C0C0]/30 mr-4 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={
                      line.startsWith('//')
                        ? 'text-[#6A9955]'
                        : line.includes('function') ||
                          line.includes('const') ||
                          line.includes('return') ||
                          line.includes('while')
                          ? 'text-[#C586C0]'
                          : line.includes('solution') ||
                            line.includes('impact') ||
                            line.includes('code')
                            ? 'text-[#9CDCFE]'
                            : 'text-[#E0E0E0]'
                    }
                  >
                    {line || '\u00A0'}
                  </span>
                  {index === currentIndex && (
                    <span className="inline-block w-2 h-4 bg-[#C0C0C0] ml-1 animate-pulse"></span>
                  )}
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#E0E0E0] tracking-tight mb-8">
                ABOUT US<span className="liquid-text">.</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#C0C0C0] to-transparent"></div>
            </div>

            <div className="space-y-8 text-lg text-[#C0C0C0] leading-relaxed">
              <p>
                Technology is only as good as the value it creates. At Tebita Tech, we believe in{' '}
                <span className="text-[#E0E0E0] font-semibold">partnership over transactions.</span>
              </p>

              <p>
                We don't just build software; we build{' '}
                <span className="liquid-text font-semibold">
                  sustainable foundations for your growth.
                </span>{' '}
                Our approach is rooted in understanding your unique challenges and crafting solutions that stand the test of time.
              </p>

              <p>
                We take pride in our craft. Every system we design is built with clarity, purpose, and a deep respect for the people who will use it.
              </p>

              <div className="pt-8 space-y-4">
                {philosophyHighlights.map((point: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#C0C0C0] rounded-full mt-2"></div>
                    <div>
                      <p className="text-base text-[#C0C0C0]/70">
                        {point}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <blockquote className="border-l-2 border-[#C0C0C0] pl-6 italic text-xl text-[#E0E0E0]">
                "Technology is fluid. A single line of code creates a ripple effect of automation
                and utility."
              </blockquote>
              <p className="mt-4 font-mono text-sm text-[#C0C0C0]/50">— TEBITA TECH MANIFESTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
