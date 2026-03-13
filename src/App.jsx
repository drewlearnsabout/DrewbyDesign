import React, { useState } from 'react';
import { ArrowDown, Sun, Moon } from 'lucide-react';

const CustomLogo = ({ className }) => (
  <svg viewBox="0 0 160 100" className={className} fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
    {/* Outer shape */}
    <path d="M 10 85 C 45 25, 100 15, 150 15 C 120 40, 120 60, 145 85 C 95 92, 45 92, 10 85 Z" />
    {/* Inner shape */}
    <path d="M 42 66 C 68 42, 98 35, 118 35 C 100 48, 100 58, 120 65 C 95 68, 65 68, 42 66 Z" />
  </svg>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen font-['Inter',_sans-serif] transition-colors duration-700 relative overflow-x-hidden ${darkMode ? 'bg-slate-950 text-slate-50 selection:bg-emerald-500/30' : 'bg-[#FDF8F5] text-slate-900 selection:bg-blue-500/30'}`}>
      
      {/* Google Fonts Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;700&display=swap');
        `}
      </style>

      {/* Background Thematic Watermarks */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Astronomy / Space (Top Right) */}
        <div className="absolute top-0 right-0 w-full h-[50vh]">
          <img 
            src="PXL_20240518_052455630.NIGHT%20(1).png" 
            alt="Moon" 
            className={`absolute -top-16 -right-16 md:-top-24 md:-right-24 w-72 md:w-[32rem] drop-shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-all duration-1000 ease-in-out ${darkMode ? 'opacity-80 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-45'}`}
          />
        </div>
      </div>

      {/* Navigation Bar - Fixed Glassmorphism */}
      <header className={`w-full px-6 py-4 md:px-12 flex justify-between items-center backdrop-blur-md border-b fixed top-0 left-0 z-50 transition-colors duration-700 ${darkMode ? 'bg-slate-950/80 border-white/10' : 'bg-white/70 border-orange-200/50 shadow-sm'}`}>
        <div className="flex items-center gap-2">
          <div className={`w-12 h-10 rounded-lg flex items-center justify-center border transition-colors duration-700 ${darkMode ? 'bg-white/20 border-white/30 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'bg-orange-500 border-orange-600 text-white shadow-md'}`}>
            <CustomLogo className="w-8 h-auto" />
          </div>
          <span className={`font-['Space_Grotesk',_sans-serif] font-bold text-xl tracking-tight drop-shadow-md transition-colors duration-700 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Andrew Carbungco</span>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className={`p-2 rounded-full transition-colors flex items-center gap-2 border ${darkMode ? 'hover:bg-white/10 border-white/20 text-white' : 'hover:bg-orange-100 border-orange-200 text-orange-600'}`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <nav className={`hidden md:flex gap-6 font-medium transition-colors duration-700 ${darkMode ? 'text-white/80' : 'text-slate-600'}`}>
            <a href="#case-studies" className={`transition-colors ${darkMode ? 'hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'hover:text-blue-600'}`}>Case Studies</a>
            <a href="#about" className={`transition-colors ${darkMode ? 'hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'hover:text-blue-600'}`}>About</a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-12 md:pt-40 md:pb-24 flex flex-col md:flex-row gap-12 md:gap-8 items-center relative z-10 min-h-[80vh]">
        
        {/* Left Column: Bio & Info */}
        <section className="flex-1 flex flex-col justify-center space-y-8">
          <div>
            <h1 className={`font-['Space_Grotesk',_sans-serif] text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg transition-colors duration-700 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Andrew Carbungco
            </h1>
            <h2 className={`font-['Space_Grotesk',_sans-serif] text-2xl md:text-3xl font-medium mb-6 drop-shadow-md transition-colors duration-700 ${darkMode ? 'text-white/80' : 'text-slate-600'}`}>
              Visual Designer
            </h2>
          </div>

          <div className="space-y-4">
            <h3 className={`font-['Space_Grotesk',_sans-serif] text-xl font-semibold border-b pb-2 inline-block transition-colors duration-700 ${darkMode ? 'border-white/20 text-white' : 'border-orange-200 text-slate-900'}`}>Mission</h3>
            <p className={`text-lg leading-relaxed transition-colors duration-700 ${darkMode ? 'text-white/80' : 'text-slate-700'}`}>
              Designing digital experiences that blend aesthetic precision with intuitive functionality. My approach is rooted in visual storytelling and user-centered design principles.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={`font-['Space_Grotesk',_sans-serif] text-xl font-semibold border-b pb-2 inline-block transition-colors duration-700 ${darkMode ? 'border-white/20 text-white' : 'border-orange-200 text-slate-900'}`}>Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['UI/UX Design', 'Prototyping', 'User Research', 'Figma', 'React', 'Design Systems'].map((skill) => (
                <span 
                  key={skill} 
                  className={`px-4 py-2 backdrop-blur-sm border transition-colors rounded-full text-sm font-medium shadow-sm ${darkMode ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' : 'bg-orange-100/50 border-orange-200 hover:bg-orange-200 text-orange-900'}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Right Column: Case Studies */}
        <section className="flex-1 flex flex-col sm:flex-row gap-6 mt-8 md:mt-0" id="case-studies">
          
          {/* Case Study 1 - Shorter height */}
          <div className="flex-1 flex flex-col group cursor-pointer">
            <div className={`flex-1 backdrop-blur-md rounded-3xl p-6 min-h-[260px] md:min-h-[340px] flex flex-col justify-end transition-all duration-300 group-hover:-translate-y-2 border shadow-xl overflow-hidden relative ${darkMode ? 'bg-white/5 border-white/20 group-hover:bg-white/10 group-hover:border-white/40' : 'bg-white/80 border-orange-100 group-hover:bg-white group-hover:border-orange-300 shadow-orange-900/5'}`}>
              
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${darkMode ? 'from-indigo-500/20 to-transparent' : 'from-blue-500/10 to-transparent'}`}></div>
              
              <div className="relative z-10">
                <span className={`font-['Space_Grotesk',_sans-serif] text-xs font-bold uppercase tracking-wider mb-2 block transition-colors duration-700 ${darkMode ? 'text-indigo-300' : 'text-blue-600'}`}>Use Case 1</span>
                <h3 className={`font-['Space_Grotesk',_sans-serif] text-xl font-bold mb-2 transition-colors duration-700 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Fintech Dashboard Refactor</h3>
                <p className={`text-sm line-clamp-3 transition-colors duration-700 ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                  Streamlining complex financial data into a cohesive, user-friendly dashboard focusing on clarity and rapid data processing.
                </p>
              </div>
            </div>
          </div>

          {/* Case Study 2 - Shorter height + Stagger */}
          <div className="flex-1 flex flex-col group cursor-pointer mt-0 sm:mt-12">
             <div className={`flex-1 backdrop-blur-md rounded-3xl p-6 min-h-[260px] md:min-h-[340px] flex flex-col justify-end transition-all duration-300 group-hover:-translate-y-2 border shadow-xl overflow-hidden relative ${darkMode ? 'bg-white/5 border-white/20 group-hover:bg-white/10 group-hover:border-white/40' : 'bg-white/80 border-orange-100 group-hover:bg-white group-hover:border-orange-300 shadow-orange-900/5'}`}>
               
               <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${darkMode ? 'from-emerald-500/20 to-transparent' : 'from-orange-500/10 to-transparent'}`}></div>
              
              <div className="relative z-10">
                <span className={`font-['Space_Grotesk',_sans-serif] text-xs font-bold uppercase tracking-wider mb-2 block transition-colors duration-700 ${darkMode ? 'text-emerald-300' : 'text-orange-500'}`}>Use Case 2</span>
                <h3 className={`font-['Space_Grotesk',_sans-serif] text-xl font-bold mb-2 transition-colors duration-700 ${darkMode ? 'text-white' : 'text-slate-900'}`}>E-Commerce Mobile App</h3>
                <p className={`text-sm line-clamp-3 transition-colors duration-700 ${darkMode ? 'text-white/70' : 'text-slate-600'}`}>
                  A mobile-first shopping experience built on modern visual trends and optimized conversion pathways.
                </p>
              </div>
            </div>
          </div>

        </section>

      </main>

      {/* Scroll Down Indicator */}
      <div className={`flex justify-center pb-8 opacity-60 hover:opacity-100 transition-all relative z-10 ${darkMode ? 'text-white' : 'text-orange-500'}`}>
        <ArrowDown className="animate-bounce w-8 h-8 drop-shadow-md" />
      </div>

    </div>
  );
}