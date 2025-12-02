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

      {/* TOP BAR (TEBITA LEFT — NAV NEXT TO BURGER ON RIGHT) */}
      <div className="absolute top-6 left-6 md:left-10 z-40 select-none cursor-default group">
        <div className="flex items-center gap-3">
          {/* Droplet Logo */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          >
            <path
              d="M12 2.5C12 2.5 5 10.5 5 15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15C19 10.5 12 2.5 12 2.5Z"
              className="fill-[#E0E0E0] group-hover:fill-white transition-colors duration-300"
            />
            <path
              d="M12 2.5C12 2.5 5 10.5 5 15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15C19 10.5 12 2.5 12 2.5Z"
              stroke="url(#dropletGradient)"
              strokeWidth="0.5"
            />
            <defs>
              <linearGradient id="dropletGradient" x1="12" y1="2.5" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="#7bff7bff" />
              </linearGradient>
            </defs>
            {/* Reflection */}
            <path
              d="M9.5 12C9.5 12 8.5 14 8.5 15.5C8.5 17.433 10.067 19 12 19"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-2">
            <span className="text-white">TEBITA</span>
            <span className="font-light text-gray-400 group-hover:text-white transition-colors duration-300">TECH</span>
          </h2>
        </div>
      </div>

      <div className="absolute top-6 right-6 md:right-10 flex items-center gap-8 z-40">
        {/* NAV — 3 ITEMS (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6">
          {["HOME", "SERVICES", "WORK"].map((item) => (
            <a
              key={item}
              href={
                item === "HOME"
                  ? "#hero"
                  : item === "SERVICES"
                    ? "#impact"
                    : "#portfolio"
              }
              className="text-sm tracking-[0.25em] text-gray-400 hover:text-white transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        {/* BURGER ICON */}
        <button className="w-12 h-12 rounded-full bg-[#C0C0C0] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(192,192,192,0.5)]">
          <div className="flex flex-col gap-1.5">
            <span className="w-5 h-0.5 bg-black"></span>
            <span className="w-5 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>

      {/* MAIN */}
      <div className="relative w-full h-full flex flex-col md:flex-row items-center pt-20 md:pt-0">

        {/* LEFT TEXT */}
        <div className="relative z-10 w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-6 md:pl-16 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Engineering the <span className="text-gray-300">Future</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
            We design intelligent systems and scalable architectures built for speed,
            precision, and impact.
          </p>
        </div>

        {/* RIGHT — ORB WITH CODE INSIDE */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">

          <div
            className="rounded-full w-80 h-80 md:w-[420px] md:h-[420px] relative flex items-center justify-center"
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px)`,
              background:
                "radial-gradient(circle at 30% 30%, #ffffff25, #00000060 70%)",
              boxShadow: "0 0 120px 40px rgba(255,255,255,0.1)",
              backdropFilter: "blur(15px)",
            }}
          >
            {/* CODE INSIDE ORB */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4/5 h-3/5 bg-black/40 backdrop-blur-md rounded-lg border border-[#00FF00]/20 p-4 flex flex-col justify-between overflow-hidden shadow-[0_0_30px_rgba(0,255,0,0.1)]">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-[#00FF00]/20 pb-2 mb-2">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] font-mono text-[#00FF00]/50">TERMINAL</div>
                </div>

                {/* Code Area */}
                <div className="font-mono text-[#00FF00] text-xs md:text-sm opacity-90 flex-1 overflow-hidden">
                  <span className="mr-2 opacity-50">$</span>
                  {code}
                  <span className="inline-block w-1.5 h-4 bg-[#00FF00] ml-1 animate-pulse align-middle" />
                </div>

                {/* Footer / Status */}
                <div className="mt-2 pt-2 border-t border-[#00FF00]/20 flex justify-between text-[9px] font-mono text-[#00FF00]/40 uppercase tracking-wider">
                  <span>CPU: 12%</span>
                  <span>NET: ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tag */}
      <div className="absolute bottom-10 left-14 z-10">
        <p className="text-gray-400 text-lg">Intelligence in Motion</p>
      </div>
    </section>
  );
}
