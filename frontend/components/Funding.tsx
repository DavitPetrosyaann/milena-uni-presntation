import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { FUNDING_TIERS } from '../constants';
import { useInView } from '../hooks';

export const Funding: React.FC = () => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section id="funding" className="py-24 px-8 bg-slate-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      <div 
        ref={ref}
        className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-academic-900 mb-4 tracking-tight">Research Funding Requirements</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-academic-accent to-cyan-400 rounded-full mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg">
            To advance our understanding of the climate-security nexus and develop actionable policy recommendations, we propose the following tiered research funding structures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {FUNDING_TIERS.map((tier, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                tier.recommended 
                  ? 'border-2 border-academic-accent shadow-2xl shadow-academic-accent/20 md:-translate-y-4 z-10' 
                  : 'border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-academic-accent to-cyan-500 text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg flex items-center gap-2">
                  <Sparkles size={16} />
                  Recommended
                </div>
              )}
              
              <h3 className="text-xl font-bold text-academic-900 mb-2">{tier.title}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-serif font-bold text-slate-900 tracking-tight">{tier.amount}</span>
              </div>
              <p className="text-slate-500 text-sm mb-8 h-12 leading-relaxed">{tier.description}</p>
              
              <div className="w-full h-px bg-slate-100 mb-8"></div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-slate-700 group">
                    <div className="mt-0.5 bg-emerald-50 p-1 rounded-full group-hover:bg-emerald-100 transition-colors">
                      <Check size={14} className="text-emerald-600 flex-shrink-0" />
                    </div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                tier.recommended 
                  ? 'bg-gradient-to-r from-academic-accent to-cyan-600 text-white hover:shadow-lg hover:shadow-academic-accent/30 hover:scale-[1.02]' 
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200 hover:scale-[1.02]'
              }`}>
                Request Proposal
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};