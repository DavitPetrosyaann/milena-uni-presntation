import React from 'react';
import { Lightbulb, Scale, Globe } from 'lucide-react';
import { useInView } from '../hooks';

export const Conclusion: React.FC = () => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section id="conclusion" className="py-24 px-8 bg-white border-t border-slate-200">
      <div 
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-academic-900 mb-4 tracking-tight">Conclusion & Policy Recommendations</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-academic-accent to-cyan-400 rounded-full mb-12"></div>

        <p className="text-xl text-slate-700 leading-relaxed mb-16 font-light">
          Addressing the climate-security nexus requires a paradigm shift from reactive crisis management to proactive, integrated resilience building. Security policies must incorporate climate data, and climate adaptation must be conflict-sensitive.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-academic-100 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-50">
              <Lightbulb className="text-academic-accent" size={32} />
            </div>
            <h3 className="text-xl font-bold text-academic-900 mb-4 group-hover:text-academic-accent transition-colors">Early Warning Systems</h3>
            <p className="text-slate-600 leading-relaxed">
              Integrate climate forecasting with socio-economic vulnerability data to predict and mitigate potential conflict hotspots before they escalate.
            </p>
          </div>

          <div className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-academic-100 transition-all duration-300 hover:-translate-y-2 delay-100">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-cyan-50">
              <Scale className="text-cyan-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-academic-900 mb-4 group-hover:text-cyan-600 transition-colors">Climate Diplomacy</h3>
            <p className="text-slate-600 leading-relaxed">
              Strengthen transboundary water agreements and regional resource-sharing frameworks to prevent resource scarcity from triggering interstate conflict.
            </p>
          </div>

          <div className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-academic-100 transition-all duration-300 hover:-translate-y-2 delay-200">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-indigo-50">
              <Globe className="text-indigo-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-academic-900 mb-4 group-hover:text-indigo-600 transition-colors">UNSC Integration</h3>
            <p className="text-slate-600 leading-relaxed">
              Formalize climate security risk assessments within United Nations Security Council mandates for peacekeeping and peacebuilding operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};