// 'use client';

// import { useEffect, useRef, useState } from 'react';

// export default function Hero() {
//   const sphereRef = useRef<HTMLDivElement>(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const x = (e.clientX / window.innerWidth) * 2 - 1;
//       const y = (e.clientY / window.innerHeight) * 2 - 1;
//       setMousePosition({ x, y });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="relative w-full h-screen flex items-center justify-center bg-[#050505] overflow-hidden"
//     >
//       <div
//         className="absolute inset-0 opacity-20"
//         style={{
//           background: `radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(192,192,192,0.1) 0%, transparent 50%)`,
//           transition: 'background 0.3s ease',
//         }}
//       />

//       <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
//         <div className="flex-1 flex items-end justify-center w-full">
//           <div className="text-center max-w-4xl px-8 mb-12">
//             <div className="overflow-hidden mb-4">
//               <p className="text-xs md:text-sm font-mono text-[#C0C0C0]/70 tracking-[0.3em] uppercase animate-[slideDown_0.8s_ease-out]">
//                 Welcome to the Future
//               </p>
//             </div>
//             <div className="overflow-hidden">
//               <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#E0E0E0] leading-tight tracking-tight animate-[slideDown_1s_ease-out_0.2s_backwards]">
//                 Where Every Line of Code
//                 <br />
//                 Creates <span className="liquid-text">Infinite Ripples</span>
//               </h2>
//             </div>
//             <div className="overflow-hidden mt-6">
//               <p className="text-sm md:text-base text-[#C0C0C0]/80 font-light leading-relaxed max-w-2xl mx-auto animate-[slideDown_1.2s_ease-out_0.4s_backwards]">
//                 Precision-engineered solutions in artificial intelligence, full-stack architecture,
//                 and hyper-automation. We don't just build technology—we engineer flow.
//               </p>
//             </div>
//             <div className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent animate-[expand_1.5s_ease-out_0.6s_backwards]" />
//           </div>
//         </div>

//         <div
//           ref={sphereRef}
//           className="relative w-64 h-64 md:w-96 md:h-96 rounded-full transition-transform duration-300 ease-out"
//           style={{
//             transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) scale(${1 + Math.abs(mousePosition.x) * 0.05})`,
//             background: 'radial-gradient(circle at 30% 30%, #E8E8E8, #A0A0A0)',
//             boxShadow: '0 20px 60px rgba(192, 192, 192, 0.3), inset 0 -20px 40px rgba(0, 0, 0, 0.4)',
//           }}
//         >
//           <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />

//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-3/4 h-3/4 rounded-lg bg-[#050505]/80 backdrop-blur-sm border border-[#E0E0E0]/10 p-4 overflow-hidden">
//               <div className="font-mono text-[#00FF00] text-xs md:text-sm leading-relaxed">
//                 <span className="text-[#E0E0E0]">{'>'}</span> tebita.init()
//                 <br />
//                 <span className="text-[#C0C0C0]">Loading intelligence...</span>
//                 <br />
//                 <span className="text-[#00FF00]">✓ System ready</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex-1 flex items-start justify-start w-full pl-12" />
//       </div>

//       <div className="absolute bottom-12 left-12 z-20 max-w-2xl">
//         <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 tracking-tight">
//           <span className="block text-[#E0E0E0]">TEBITA.</span>
//         </h1>
//         <p className="text-lg md:text-2xl text-[#C0C0C0] font-light leading-relaxed tracking-wide">
//           From a single drop,
//           <br />
//           <span className="liquid-text">an ocean of intelligence.</span>
//         </p>
//       </div>

//       <div className="absolute bottom-8 right-8 z-20">
//         <button
//           onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}
//           className="w-12 h-12 rounded-full border border-[#C0C0C0]/30 flex items-center justify-center hover:border-[#C0C0C0] transition-all duration-300 hover:shadow-[0_0_20px_rgba(192,192,192,0.3)]"
//           aria-label="Scroll down"
//         >
//           <svg
//             className="w-6 h-6 text-[#C0C0C0] animate-bounce"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//           </svg>
//         </button>
//       </div>
//     </section>
//   );
// }
'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [code, setCode] = useState('');
  const [phase, setPhase] = useState(0);
  var [erase, setErase] = useState(false);

  // Code typing + erasing logic
  useEffect(() => {
    const lines = [
      "> tebita.init()",
      "Loading intelligence...",
      "✓ System ready",
    ];

    let index = 0;
    let charIndex = 0;

    const interval = setInterval(() => {
      const current = lines[index];

      if (!erase) {
        // typing
        setCode(current.slice(0, charIndex));
        charIndex++;

        if (charIndex > current.length + 5) {
          erase = true;
        }
      } else {
        // erasing
        setCode(current.slice(0, charIndex));
        charIndex--;

        if (charIndex < 0) {
          erase = false;
          index = (index + 1) % lines.length;
        }
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // Orb movement
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setPos({ x, y });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-black text-white overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${50 + pos.x}% ${50 + pos.y}%, rgba(255,255,255,0.08), transparent 60%)`,
        }}
      />

      {/* MAIN */}
      <div className="relative w-full h-full flex flex-col md:flex-row items-center pt-20 md:pt-0">

        {/* LEFT TEXT */}
        <div className="relative z-10 w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-6 md:pl-16 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            We Build <span className="text-gray-300">Automations</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
            Connecting your tools, automating your workflows, and building web apps that make your life easier.
          </p>
        </div>

        {/* RIGHT — VIDEO CAROUSEL (Editorial Style) */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
          {/* Background Accent */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-[#00FF00]/5 to-transparent blur-3xl pointer-events-none" />

          <div className="relative w-full px-8 md:px-12">
            {/* Label */}
            <div className="mb-4 flex items-center gap-3">
              <div className="w-8 h-px bg-[#E0E0E0]/30 light-theme:bg-black/20" />
              <span className="text-xs font-mono text-[#E0E0E0]/50 tracking-[0.3em] uppercase light-theme:text-black/50">
                In Action
              </span>
            </div>

            {/* Video Container with Floating Icons */}
            <div className="relative w-full aspect-video overflow-visible">
              {/* Floating Icons */}
              <div className="absolute -inset-12 pointer-events-none">
                {/* n8n icon */}
                <div className="absolute top-0 left-0 w-12 h-12 rounded-lg bg-[#EA4B71]/10 border border-[#EA4B71]/20 flex items-center justify-center animate-float" style={{ animationDelay: '0s' }}>
                  <span className="text-xl">⚡</span>
                </div>
                {/* Zapier icon */}
                <div className="absolute top-1/4 right-0 w-10 h-10 rounded-lg bg-[#FF4A00]/10 border border-[#FF4A00]/20 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-lg">🟠</span>
                </div>
                {/* Make icon */}
                <div className="absolute bottom-0 left-1/4 w-11 h-11 rounded-lg bg-[#6D3AFF]/10 border border-[#6D3AFF]/20 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-lg">🟣</span>
                </div>
                {/* API icon */}
                <div className="absolute bottom-1/4 right-1/4 w-9 h-9 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                  <span className="text-sm">🔌</span>
                </div>
              </div>

              {/* Video Container - Rounded */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm light-theme:bg-white/50 shadow-2xl">
                {/* Carousel Container */}
                <div className="relative w-full h-full overflow-hidden">
                  {/* Video 1 with Glitch Exit */}
                  <div
                    className="absolute inset-0"
                    style={{ animation: 'video-glitch-exit-1 14s infinite' }}
                  >
                    <video
                      playsInline
                      autoPlay
                      muted
                      loop
                      preload="auto"
                      className="w-full h-full"
                      style={{
                        transform: 'scale(1.17)',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    >
                      <source src="/assets/make.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Video 2 with Crack Enter */}
                  <div
                    className="absolute inset-0"
                    style={{ animation: 'video-crack-enter-2 14s infinite' }}
                  >
                    <video
                      playsInline
                      autoPlay
                      muted
                      loop
                      preload="auto"
                      className="w-full h-full"
                      style={{
                        transform: 'scale(1.4)',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    >
                      <source src="/assets/my-n8n.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Glitch Overlay Effects */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-overlay"
                    style={{ animation: 'glitch-overlay 14s infinite' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-cyan-500/20 to-red-500/0" />
                  </div>

                  {/* Crack Lines Effect */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ animation: 'crack-lines 14s infinite' }}
                  >
                    <line x1="0%" y1="0%" x2="100%" y2="100%" stroke="white" strokeWidth="2" opacity="0" className="crack-line-1" />
                    <line x1="100%" y1="0%" x2="0%" y2="100%" stroke="white" strokeWidth="2" opacity="0" className="crack-line-2" />
                    <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="white" strokeWidth="1.5" opacity="0" className="crack-line-3" />
                  </svg>

                  {/* Subtle Bottom Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none light-theme:from-white/60" />
                </div>
              </div>
            </div>
          </div>

          {/* Animation Keyframes */}
          <style jsx>{`
          /* Video 1: Glitch Exit with RGB Split & Slide */
          @keyframes video-glitch-exit-1 {
            0% {
              opacity: 1;
              transform: scale(1) translate(0, 0);
              filter: blur(0px) hue-rotate(0deg);
              clip-path: inset(0 0 0 0);
              z-index: 2;
            }
            40% {
              opacity: 1;
              transform: scale(1.02) translate(0, 0);
              filter: blur(0px) hue-rotate(0deg);
              clip-path: inset(0 0 0 0);
              z-index: 2;
            }
            45% {
              opacity: 1;
              transform: scale(1.05) translate(-5px, 0);
              filter: blur(0px) hue-rotate(10deg);
              clip-path: inset(0 0 0 0);
              z-index: 2;
            }
            47% {
              opacity: 0.9;
              transform: scale(1.08) translate(8px, -3px);
              filter: blur(1px) hue-rotate(-10deg) saturate(2);
              clip-path: polygon(0 0, 100% 0, 100% 30%, 0 35%);
              z-index: 2;
            }
            49% {
              opacity: 0.7;
              transform: scale(1.12) translate(-12px, 5px);
              filter: blur(3px) hue-rotate(15deg) saturate(3);
              clip-path: polygon(0 35%, 100% 30%, 100% 70%, 0 75%);
              z-index: 2;
            }
            50% {
              opacity: 0;
              transform: scale(1.2) translate(50px, 0) rotate(2deg);
              filter: blur(10px) hue-rotate(30deg) saturate(0);
              clip-path: polygon(0 75%, 100% 70%, 100% 100%, 0 100%);
              z-index: 1;
            }
            92% {
              opacity: 0;
              transform: scale(0.8) translate(-50px, 0) rotate(-2deg);
              filter: blur(10px) hue-rotate(-30deg);
              clip-path: inset(0 0 100% 0);
              z-index: 1;
            }
            96% {
              opacity: 0.3;
              transform: scale(0.9) translate(-10px, 0) rotate(-1deg);
              filter: blur(5px) hue-rotate(-10deg);
              clip-path: inset(0 0 50% 0);
              z-index: 1;
            }
            98% {
              opacity: 0.7;
              transform: scale(0.95) translate(-3px, 0);
              filter: blur(2px) hue-rotate(-5deg);
              clip-path: inset(0 0 20% 0);
              z-index: 1;
            }
            100% {
              opacity: 1;
              transform: scale(1) translate(0, 0);
              filter: blur(0px) hue-rotate(0deg);
              clip-path: inset(0 0 0 0);
              z-index: 2;
            }
          }

          /* Video 2: Crack Enter with Shatter & Slide */
          @keyframes video-crack-enter-2 {
            0% {
              opacity: 0;
              transform: scale(0.8) translate(-50px, 0) rotate(-2deg);
              filter: blur(10px) brightness(0.5);
              clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
              z-index: 1;
            }
            40% {
              opacity: 0;
              transform: scale(0.85) translate(-30px, 0) rotate(-1.5deg);
              filter: blur(8px) brightness(0.6);
              clip-path: polygon(0 0, 10% 0, 10% 100%, 0 100%);
              z-index: 1;
            }
            45% {
              opacity: 0.2;
              transform: scale(0.9) translate(-15px, 0) rotate(-1deg);
              filter: blur(5px) brightness(0.7);
              clip-path: polygon(0 0, 30% 0, 30% 100%, 0 100%);
              z-index: 1;
            }
            47% {
              opacity: 0.4;
              transform: scale(0.92) translate(-8px, 3px) rotate(-0.5deg);
              filter: blur(3px) brightness(0.8) saturate(1.5);
              clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
              z-index: 1;
            }
            49% {
              opacity: 0.7;
              transform: scale(0.96) translate(-3px, -2px);
              filter: blur(1px) brightness(0.9) saturate(2);
              clip-path: polygon(0 0, 80% 0, 80% 100%, 0 100%);
              z-index: 1;
            }
            50% {
              opacity: 1;
              transform: scale(1) translate(0, 0);
              filter: blur(0px) brightness(1);
              clip-path: inset(0 0 0 0);
              z-index: 2;
            }
            92% {
              opacity: 1;
              transform: scale(1.03) translate(0, 0);
              filter: blur(0px) brightness(1);
              clip-path: inset(0 0 0 0);
              z-index: 2;
            }
            96% {
              opacity: 0.8;
              transform: scale(1.08) translate(10px, -5px) rotate(1deg);
              filter: blur(2px) brightness(1.1) hue-rotate(10deg);
              clip-path: polygon(0 0, 100% 0, 100% 70%, 0 65%);
              z-index: 2;
            }
            98% {
              opacity: 0.5;
              transform: scale(1.15) translate(25px, 0) rotate(2deg);
              filter: blur(5px) brightness(1.2) hue-rotate(20deg);
              clip-path: polygon(0 0, 100% 0, 100% 40%, 0 35%);
              z-index: 2;
            }
            100% {
              opacity: 0;
              transform: scale(1.25) translate(50px, 0) rotate(3deg);
              filter: blur(10px) brightness(1.5) hue-rotate(30deg);
              clip-path: polygon(0 0, 100% 0, 100% 10%, 0 5%);
              z-index: 1;
            }
          }

          /* Glitch Overlay Flash */
          @keyframes glitch-overlay {
            0%, 44%, 51%, 100% {
              opacity: 0;
            }
            45%, 46% {
              opacity: 0.4;
              transform: translateX(-5px);
            }
            47%, 48% {
              opacity: 0.6;
              transform: translateX(5px);
            }
            49%, 50% {
              opacity: 0.8;
              transform: translateX(-3px);
            }
          }

          /* Crack Lines Animation */
          @keyframes crack-lines {
            0%, 46%, 52%, 100% {
              opacity: 0;
            }
            47% {
              opacity: 0;
            }
            48% {
              opacity: 0.6;
            }
            49% {
              opacity: 0.9;
            }
            50% {
              opacity: 1;
            }
            51% {
              opacity: 0.5;
            }
          }

          .crack-line-1 {
            animation: crack-flash-1 14s infinite;
          }

          .crack-line-2 {
            animation: crack-flash-2 14s infinite;
          }

          .crack-line-3 {
            animation: crack-flash-3 14s infinite;
          }

          @keyframes crack-flash-1 {
            0%, 47.5%, 51%, 100% { opacity: 0; }
            48%, 50% { opacity: 0.8; }
          }

          @keyframes crack-flash-2 {
            0%, 47.8%, 51%, 100% { opacity: 0; }
            48.2%, 50% { opacity: 0.7; }
          }

          @keyframes crack-flash-3 {
            0%, 48%, 51%, 100% { opacity: 0; }
            48.5%, 50% { opacity: 0.6; }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}</style>
        </div>

        {/* Bottom tag */}
        <div className="absolute bottom-10 left-14 z-10">
          <p className="text-gray-400 text-lg">Intelligence in Motion</p>
        </div>
      </div>
    </section>
  );
}
