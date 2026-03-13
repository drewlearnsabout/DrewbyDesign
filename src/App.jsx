import React, { useState } from 'react';
import { ArrowDown, Sun, Moon, ArrowUp, Mail, Linkedin, Github } from 'lucide-react';

const CustomLogo = ({ className }) => (
  <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 10 85 C 45 25, 100 15, 150 15 C 120 40, 120 60, 145 85 C 95 92, 45 92, 10 85 Z" />
    <path d="M 42 66 C 68 42, 98 35, 118 35 C 100 48, 100 58, 120 65 C 95 68, 65 68, 42 66 Z" />
  </svg>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activePage, setActivePage] = useState('home');

  const themeColors = darkMode 
    ? 'bg-slate-950 text-slate-50 selection:bg-emerald-500/30' 
    : 'bg-[#FDF8F5] text-slate-900 selection:bg-blue-500/30';

  return (
    <div className={`min-h-screen font-['Inter',_sans-serif] transition-colors duration-700 relative overflow-hidden ${themeColors}`}>
      
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
            {['about', 'home'].map((page) => (
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
        {/* Home Layer */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${activePage === 'home' ? 'opacity-100' : 'opacity-0'}`}>
          <img 
            src="PXL_20240518_052455630.NIGHT%20(1).png" 
            alt="Moon" 
            className={`absolute -top-8 -right-8 md:-top-24 md:-right-24 w-72 md:w-[32rem] drop-shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-all duration-1000 ${darkMode ? 'opacity-80 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-45'}`}
          />
        </div>

        {/* About Layer */}
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

      {/* Content Wrapper */}
      <div className={`page-transition-wrapper h-screen ${activePage === 'about' ? '-translate-y-full' : 'translate-y-0'}`}>
        
        {/* PORTFOLIO PAGE */}
        <section className="h-screen flex flex-col justify-center relative px-6 md:px-12">
          {/* Increased pt-36 for mobile to clear fixed nav */}
          <main className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-12 md:gap-8 items-center z-10 pt-36 md:pt-0">
            <div className="flex-1 space-y-8">
              <div>
                <h1 className="font-['Space_Grotesk',_sans-serif] text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Andrew Carbungco</h1>
                <h2 className="font-['Space_Grotesk',_sans-serif] text-2xl md:text-3xl font-medium opacity-80">Visual Designer</h2>
              </div>
              <div className="space-y-4">
                <h3 className={`font-['Space_Grotesk',_sans-serif] text-xl font-semibold border-b pb-2 inline-block ${darkMode ? 'border-white/20' : 'border-orange-200'}`}>Mission</h3>
                <p className="text-lg leading-relaxed opacity-80">Designing digital experiences that blend aesthetic precision with intuitive functionality. Rooted in visual storytelling.</p>
              </div>
              <div className="space-y-4">
                <h3 className={`font-['Space_Grotesk',_sans-serif] text-xl font-semibold border-b pb-2 inline-block ${darkMode ? 'border-white/20' : 'border-orange-200'}`}>Skills</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {[
                    'UI/UX Design', 
                    'Prototyping', 
                    'Figma', 
                    'Svelte', 
                    'Design Systems', 
                    'CSS', 
                    'Javascript', 
                    'HTML', 
                    'Adobe Suite', 
                    'Style Guides'
                  ].map((s) => (
                    <span key={s} className="font-bold text-sm tracking-wide opacity-90">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row gap-6 w-full">
              {[
                { title: 'Fintech Dashboard', tag: 'Use Case 1', gradient: darkMode ? 'from-indigo-500/20' : 'from-blue-500/10' },
                { title: 'E-Commerce App', tag: 'Use Case 2', gradient: darkMode ? 'from-emerald-500/20' : 'from-orange-500/10', stagger: true }
              ].map((card, i) => (
                <div key={i} className={`flex-1 group cursor-pointer ${card.stagger ? 'sm:mt-12' : ''}`}>
                  <div className={`backdrop-blur-md rounded-3xl p-6 min-h-[260px] md:min-h-[340px] flex flex-col justify-end transition-all duration-300 group-hover:-translate-y-2 border shadow-xl relative overflow-hidden ${darkMode ? 'bg-white/5 border-white/20 group-hover:border-white/40' : 'bg-white/80 border-orange-100 group-hover:border-orange-300'}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${card.gradient} to-transparent`} />
                    <div className="relative z-10">
                      <span className={`font-['Space_Grotesk',_sans-serif] text-xs font-bold uppercase tracking-wider mb-2 block ${darkMode ? 'text-indigo-300' : 'text-blue-600'}`}>{card.tag}</span>
                      <h3 className="font-['Space_Grotesk',_sans-serif] text-xl font-bold">{card.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
          <div onClick={() => setActivePage('about')} className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all">
            <span className="text-xs font-bold uppercase tracking-[0.3em]">About Me</span>
            <ArrowDown className="animate-bounce w-8 h-8" />
          </div>
        </section>

        {/* ABOUT PAGE */}
        <section className="h-screen flex flex-col justify-center relative overflow-y-auto px-6 md:px-12">
          <div onClick={() => setActivePage('home')} className="absolute top-28 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all">
            <ArrowUp className="animate-bounce w-8 h-8" />
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Portfolio</span>
          </div>
          <main className="max-w-4xl mx-auto w-full z-20 pt-20">
            <div className="space-y-12">
              <header>
                <h2 className="font-['Space_Grotesk',_sans-serif] text-3xl md:text-5xl font-bold mb-6">Behind the Design</h2>
                <div className={`h-1 w-24 rounded-full ${darkMode ? 'bg-emerald-500' : 'bg-blue-500'}`} />
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg leading-relaxed opacity-80">
                <div className="space-y-6">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </div>
                <div className="space-y-6">
                  <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis.</p>
                  <div className="pt-6 flex gap-4">
                    {[Github, Linkedin, Mail].map((Icon, i) => (
                      <button key={i} className={`p-3 rounded-xl border transition-all ${darkMode ? 'bg-white/10 border-white/20 hover:bg-white/20' : 'bg-white border-slate-200 hover:bg-slate-50 shadow-sm'}`}>
                        <Icon size={20} />
                      </button>
                    ))}
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