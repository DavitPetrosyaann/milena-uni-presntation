import React from 'react';
import { Globe2, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative px-8 py-20 bg-white border-b border-slate-200 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
      
      {/* Gradient orb for visual interest */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-academic-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="flex items-center gap-3 text-academic-accent mb-6 font-medium tracking-wider uppercase text-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="p-2 bg-academic-50 rounded-lg shadow-sm border border-academic-100">
            <Globe2 size={20} className="animate-float" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-academic-accent to-blue-800">
            Department of International Relations
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-academic-900 leading-tight mb-8 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.3s' }}>
          Climate Change & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-academic-accent to-cyan-600">
            International Security
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-12 max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Analyzing the nexus of environmental degradation, resource scarcity, and global conflict in the 21st century.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center text-sm text-slate-500 border-l-4 border-academic-accent pl-6 animate-fade-in-up bg-gradient-to-r from-slate-50 to-transparent py-4 pr-4 rounded-r-xl" style={{ animationDelay: '0.7s' }}>
          <div>
            <p className="font-semibold text-academic-900 text-base">Presented by</p>
            <p className="text-slate-600">Dr. Eleanor Vance</p>
            <p className="text-slate-500 italic">Professor of Global Security Studies</p>
          </div>
          <div className="hidden sm:block h-12 w-px bg-slate-200"></div>
          <div>
            <p className="font-semibold text-academic-900 text-base">Course</p>
            <p className="text-slate-600">IR-405: Advanced Topics in Geopolitics</p>
            <p className="text-slate-500 italic">Fall Semester 2024</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-academic-accent/50 hover:text-academic-accent transition-colors cursor-pointer z-10">
        <a href="#definition" aria-label="Scroll down" className="p-3 bg-white rounded-full shadow-md border border-slate-100 block hover:shadow-lg transition-all">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};