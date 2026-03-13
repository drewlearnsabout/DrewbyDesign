import React, { useState, useRef } from 'react';
import { ArrowDown, Sun, Moon, ArrowUp, Mail, Linkedin } from 'lucide-react';

const CustomLogo = ({ className }) => (
  <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 10 85 C 45 25, 100 15, 150 15 C 120 40, 120 60, 145 85 C 95 92, 45 92, 10 85 Z" />
    <path d="M 42 66 C 68 42, 98 35, 118 35 C 100 48, 100 58, 120 65 C 95 68, 65 68, 42 66 Z" />
  </svg>
);

const HPLogo = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className}>
    <circle cx="100" cy="100" r="95" fill="currentColor" />
    <path 
      d="M75 160V40H85V160H75ZM115 160V80H125V95C130 85 140 80 155 80C175 80 185 95 185 120V160H175V120C175 105 170 95 155 95C140 95 130 105 125 120V160H115Z" 
      fill="white" 
      transform="skewX(-10) translate(-10, 0)"
    />
  </svg>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [touchStart, setTouchStart] = useState(null);
  const aboutRef = useRef(null);

  const themeColors = darkMode 
    ? 'bg-slate-950 text-slate-50 selection:bg-emerald-500/30' 
    : 'bg-[#FDF8F5] text-slate-900 selection:bg-blue-500/30';

  // Swipe logic for mobile navigation
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientY;
    const deltaY = touchStart - touchEnd;
    const threshold = 50; // Minimum distance to trigger swipe

    // Swiped Up: Go to About
    if (deltaY > threshold && activePage === 'home') {
      setActivePage('about');
    }
    
    // Swiped Down: Go to Home (only if at the top of About scroll)
    if (deltaY < -threshold && activePage === 'about') {
      if (aboutRef.current && aboutRef.current.scrollTop <= 5) {
        setActivePage('home');
      }
    }

    setTouchStart(null);
  };

  const handleCardClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div 
      className={`min-h-screen font-['Inter',_sans-serif] transition-colors duration-700 relative overflow-hidden overscroll-none ${themeColors}`}
      style={{ touchAction: 'pan-y', overscrollBehaviorY: 'none' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;700&display=swap');
          
          .mist-animation {
            animation: drift 60s linear infinite;
          }

          @keyframes drift {
            from { transform: translateX(-10%); }
            to { transform: translateX(10%); }
          }

          .forest-mask {
            mask-image: radial-gradient(circle, black 30%, transparent 80%);
            -webkit-mask-image: radial-gradient(circle, black 30%, transparent 80%);
          }

          .page-transition-wrapper {
            transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: transform;
            transform-style: preserve-3d;
          }

          /* Prevents pull-to-refresh on mobile browsers */
          body {
            overscroll-behavior-y: none;
            position: fixed;
            width: 100%;
            height: 100%;
          }
        `}
      </style>

      {/* Navigation */}
      <header className={`w-full px-6 py-4 md:px-12 flex justify-between items-center backdrop-blur-md border-b fixed top-0 left-0 z-50 transition-colors duration-700 ${darkMode ? 'bg-slate-950/80 border-white/10' : 'bg-white/70 border-orange-200/50 shadow-sm'}`}>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActivePage('home')}>
          <div className={`w-12 h-10 rounded-lg flex items-center justify-center border transition-colors duration-700 ${darkMode ? 'bg-white/20 border-white/30 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'bg-orange-500 border-orange-600 text-white shadow-md'}`}>
            <CustomLogo className="w-8 h-auto" />
          </div>
          <span className="font-['Space_Grotesk',_sans-serif] font-bold text-lg md:text-xl tracking-tight drop-shadow-md">Andrew Carbungco</span>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className={`p-2 rounded-full transition-colors flex items-center gap-2 border ${darkMode ? 'hover:bg-white/10 border-white/20 text-white' : 'hover:bg-orange-100 border-orange-200 text-orange-600'}`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <nav className="hidden md:flex gap-6 font-medium">
            {['home', 'about'].map((page) => (
              <button 
                key={page}
                onClick={() => setActivePage(page)} 
                className={`capitalize transition-all duration-300 ${activePage === page ? (darkMode ? 'text-white underline decoration-emerald-500 underline-offset-8' : 'text-blue-600 underline decoration-blue-500 underline-offset-8') : 'opacity-60 hover:opacity-100'}`}
              >
                {page === 'home' ? 'Portfolio' : 'About'}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Persistent Backgrounds */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute inset-0 transition-opacity duration-1000 ${activePage === 'home' ? 'opacity-100' : 'opacity-0'}`}>
          <img 
            src="PXL_20240518_052455630.NIGHT%20(1).png" 
            alt="Moon" 
            className={`absolute -top-8 -right-8 md:-top-24 md:-right-24 w-72 md:w-[32rem] drop-shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-all duration-1000 ${darkMode ? 'opacity-80 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-45'}`}
          />
          <img 
            src="56c28000-6c42-450f-85ee-0a28afe0e1cf~1.jpg" 
            alt="Beach" 
            className={`absolute inset-0 w-full h-full object-cover forest-mask transition-all duration-1000 ${!darkMode ? 'opacity-30 scale-100' : 'opacity-0 scale-95'}`}
          />
        </div>

        <div className={`absolute inset-0 transition-opacity duration-1000 ${activePage === 'about' ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`absolute inset-0 transition-colors duration-1000 ${darkMode ? 'bg-gradient-to-b from-slate-950 via-teal-950/20 to-slate-950' : 'bg-gradient-to-b from-emerald-50/50 via-teal-100/30 to-emerald-50/50'}`} />
          <img 
            src="20170528_114926.jpg" 
            alt="PNW Woods" 
            className={`w-full h-full object-cover forest-mask transition-all duration-1000 ${darkMode ? 'opacity-20 grayscale-[0.3]' : 'opacity-15 grayscale-[0.1]'}`}
          />
          <div className="absolute inset-0 opacity-20 mist-animation overflow-hidden">
             <div className={`absolute -inset-[100%] transition-colors duration-1000 ${darkMode ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_0%,transparent_70%)]' : 'bg-[radial-gradient(circle_at_50%_50%,rgba(0,100,80,0.05)_0%,transparent_70%)]'}`} />
          </div>
        </div>
      </div>

      {/* Global Fixed UI Indicators */}
      <div 
        onClick={() => setActivePage('about')} 
        className={`fixed bottom-10 md:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-1 md:gap-2 transition-all duration-500 z-30 ${activePage === 'home' ? 'opacity-60 hover:opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">About Me</span>
        <ArrowDown className="animate-bounce w-6 h-6 md:w-8 md:h-8" />
      </div>

      {/* Content Wrapper */}
      <div className={`page-transition-wrapper h-screen ${activePage === 'about' ? '-translate-y-full' : 'translate-y-0'}`}>
        
        {/* PORTFOLIO PAGE */}
        <section className="h-screen flex flex-col justify-center relative px-6 md:px-12">
          <main className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 md:gap-8 items-center z-10 pt-20 md:pt-0">
            <div className="flex-1 space-y-4 md:space-y-8">
              <div>
                <h1 className="font-['Space_Grotesk',_sans-serif] text-3xl md:text-5xl font-extrabold mb-2 leading-tight">Andrew Carbungco</h1>
                <h2 className="font-['Space_Grotesk',_sans-serif] text-xl md:text-3xl font-medium opacity-80">Visual Designer</h2>
              </div>
              <div className="space-y-2 md:space-y-4">
                <h3 className={`font-['Space_Grotesk',_sans-serif] text-lg md:text-xl font-semibold border-b pb-1 inline-block ${darkMode ? 'border-white/20' : 'border-orange-200'}`}>Mission</h3>
                <p className="text-base md:text-lg leading-relaxed opacity-80">Designing digital experiences that blend aesthetic precision with intuitive functionality. Rooted in visual storytelling.</p>
              </div>
              <div className="space-y-2 md:space-y-4">
                <h3 className={`font-['Space_Grotesk',_sans-serif] text-lg md:text-xl font-semibold border-b pb-1 inline-block ${darkMode ? 'border-white/20' : 'border-orange-200'}`}>Skills</h3>
                <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-1 md:gap-y-2">
                  {[
                    'UI/UX Design', 'Prototyping', 'Figma', 'Svelte', 'Design Systems', 
                    'CSS', 'Javascript', 'HTML', 'Adobe Suite', 'Style Guides'
                  ].map((s) => (
                    <span key={s} className="font-bold text-xs md:text-sm tracking-wide opacity-90">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row gap-4 md:gap-6 w-full">
              {[
                { 
                  title: 'Most recent use case coming soon', 
                  tag: 'Use Case 1', 
                  gradient: darkMode ? 'from-indigo-500/20' : 'from-blue-500/10' 
                },
                { 
                  title: 'HP Remote Printing', 
                  tag: 'Use Case 2', 
                  isHP: true,
                  link: 'HP UI Case Study.pdf',
                  stagger: true 
                }
              ].map((card, i) => (
                <div key={i} onClick={() => handleCardClick(card.link)} className={`flex-1 group cursor-pointer ${card.stagger ? 'sm:mt-12' : ''}`}>
                  <div className={`backdrop-blur-md rounded-3xl p-5 md:p-6 h-full min-h-[150px] md:min-h-[340px] flex flex-col justify-end transition-all duration-300 group-hover:-translate-y-2 border shadow-xl relative overflow-hidden ${card.isHP ? 'bg-[#0096D6] border-white/20' : (darkMode ? 'bg-white/5 border-white/20 group-hover:border-white/40' : 'bg-white/80 border-orange-100 group-hover:border-orange-300')}`}>
                    
                    {!card.isHP && <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${card.gradient} to-transparent`} />}
                    
                    {card.isHP && (
                      <div className="absolute -top-12 -right-12 md:-top-20 md:-right-20 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                        <HPLogo className="w-48 h-48 md:w-80 md:h-80 text-white" />
                      </div>
                    )}

                    <div className="relative z-10">
                      <span className={`font-['Space_Grotesk',_sans-serif] text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 md:mb-2 block ${card.isHP ? 'text-white/80' : (darkMode ? 'text-indigo-300' : 'text-blue-600')}`}>{card.tag}</span>
                      <h3 className={`font-['Space_Grotesk',_sans-serif] text-lg md:text-xl font-bold leading-tight ${card.isHP ? 'text-white' : ''}`}>{card.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </section>

        {/* ABOUT PAGE */}
        <section 
          ref={aboutRef}
          className="h-screen flex flex-col justify-center relative overflow-y-auto px-6 md:px-12 overscroll-y-contain"
          style={{ overscrollBehaviorY: 'contain' }}
        >
          <div onClick={() => setActivePage('home')} className="absolute top-24 md:top-28 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-1 md:gap-2 opacity-60 hover:opacity-100 transition-all z-20">
            <ArrowUp className="animate-bounce w-6 h-6 md:w-8 md:h-8" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Portfolio</span>
          </div>
          <main className="max-w-4xl mx-auto w-full z-20 pt-20">
            <div className="space-y-8 md:space-y-12">
              <header>
                <h2 className="font-['Space_Grotesk',_sans-serif] text-3xl md:text-5xl font-bold mb-4 md:mb-6">Behind the Design</h2>
                <div className={`h-1 w-16 md:w-24 rounded-full ${darkMode ? 'bg-emerald-500' : 'bg-blue-500'}`} />
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-base md:text-lg leading-relaxed opacity-80">
                <div className="space-y-4 md:space-y-6">
                  <p>
                    I am a visual designer with a background in agency environments, where I’ve had the opportunity to bridge the gap between complex industries—ranging from semi conductor manufacturing to established federal credit unions. This diverse experience has shaped my ability to translate intricate business needs into clean, impactful visual stories.
                  </p>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <p>
                    Originally from San Diego and now calling the Pacific Northwest home, I draw a lot of my creative energy from the environments around me. When I’m not at my desk, you can usually find me looking up—I’m a lifelong space enthusiast with a deep curiosity for the cosmos.
                  </p>
                  <div className="pt-4 md:pt-6 flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/andrew-carbungco-1357ab22" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-2 md:p-3 rounded-xl border transition-all ${darkMode ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 shadow-sm'}`}
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="mailto:andrew.carbungco@gmail.com"
                      className={`p-2 md:p-3 rounded-xl border transition-all ${darkMode ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 shadow-sm'}`}
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>

      </div>
    </div>
  );
}