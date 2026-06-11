import React from 'react';
import { ShieldAlert, Droplets, Users, AlertTriangle, MapPin, Quote } from 'lucide-react';
import { SYRIA_CASE_STUDY } from '../constants';
import { useInView } from '../hooks';

export const Content: React.FC = () => {
  const { ref: defRef, isInView: defInView } = useInView<HTMLDivElement>();
  const { ref: impactRef, isInView: impactInView } = useInView<HTMLDivElement>();
  const { ref: caseRef, isInView: caseInView } = useInView<HTMLDivElement>();

  return (
    <div className="bg-academic-50">
      {/* Definition Section */}
      <section id="definition" className="py-24 px-8 max-w-5xl mx-auto overflow-hidden">
        <div 
          ref={defRef}
          className={`mb-16 transition-all duration-1000 transform ${defInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-academic-900 mb-4 tracking-tight">Defining Climate Security</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-academic-accent to-cyan-400 rounded-full mb-8"></div>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Climate security refers to the security risks induced, directly or indirectly, by changes in climate patterns. It is widely recognized in academic and military circles not as a direct cause of conflict, but as a <strong className="text-academic-accent font-semibold bg-blue-50 px-2 py-0.5 rounded">"threat multiplier."</strong>
          </p>
          
          <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mt-12 group hover:shadow-md transition-shadow duration-300">
            <Quote className="absolute top-6 left-6 text-academic-100 rotate-180" size={48} />
            <blockquote className="relative z-10 pl-12 italic text-xl text-slate-700 font-serif leading-relaxed">
              "Climate change acts as a threat multiplier for instability in some of the most volatile regions of the world, and it presents significant national security challenges."
              <footer className="text-sm text-academic-accent mt-6 not-italic font-sans font-medium flex items-center gap-2">
                <div className="w-6 h-px bg-academic-accent"></div>
                CNA Military Advisory Board (2007)
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Key Impacts Section */}
      <section id="impacts" className="py-24 px-8 bg-white border-y border-slate-200 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white pointer-events-none"></div>
        <div 
          ref={impactRef}
          className={`max-w-5xl mx-auto relative z-10 transition-all duration-1000 transform ${impactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-academic-900 mb-4 tracking-tight">Primary Vectors of Instability</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-academic-accent to-cyan-400 rounded-full mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-academic-900 mb-3 group-hover:text-academic-accent transition-colors">Climate Migration</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Extreme weather events and slow-onset changes force populations to relocate, straining resources in host communities and potentially sparking border tensions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 delay-100">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Droplets size={28} />
              </div>
              <h3 className="text-xl font-bold text-academic-900 mb-3 group-hover:text-cyan-600 transition-colors">Water Scarcity</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                With 60% of global freshwater flowing across national boundaries, altered precipitation patterns increase the risk of transboundary water disputes.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 delay-200">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <ShieldAlert size={28} />
              </div>
              <h3 className="text-xl font-bold text-academic-900 mb-3 group-hover:text-amber-600 transition-colors">State Fragility</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Loss of agricultural livelihoods undermines state legitimacy and economic stability, creating vacuums that non-state armed groups may exploit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="py-24 px-8 max-w-5xl mx-auto">
        <div 
          ref={caseRef}
          className={`transition-all duration-1000 transform ${caseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-academic-900 mb-4 tracking-tight">Case Study Analysis</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-academic-accent to-cyan-400 rounded-full mb-12"></div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden group">
            <div className="bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden">
              {/* Abstract background shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-academic-accent/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 text-slate-300 mb-6 text-sm font-medium uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700 backdrop-blur-sm">
                    <MapPin size={14} className="text-academic-accent" />
                    {SYRIA_CASE_STUDY.location}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700 backdrop-blur-sm">
                    {SYRIA_CASE_STUDY.period}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">{SYRIA_CASE_STUDY.title}</h3>
                <p className="text-lg text-slate-300 leading-relaxed max-w-3xl font-light">
                  {SYRIA_CASE_STUDY.description}
                </p>
              </div>
            </div>
            
            <div className="p-8 md:p-12 bg-gradient-to-b from-slate-50 to-white">
              <h4 className="text-xl font-bold text-academic-900 mb-8 flex items-center gap-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <AlertTriangle size={20} className="text-amber-600" />
                </div>
                Cascading Impacts
              </h4>
              <ul className="space-y-6">
                {SYRIA_CASE_STUDY.impacts.map((impact, index) => (
                  <li key={index} className="flex items-start gap-4 group/item hover:bg-slate-50 p-3 -ml-3 rounded-xl transition-colors duration-200">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-academic-100 to-blue-50 text-academic-accent flex items-center justify-center text-sm font-bold shadow-sm border border-blue-100 group-hover/item:scale-110 transition-transform duration-200">
                      {index + 1}
                    </span>
                    <span className="text-slate-700 leading-relaxed pt-1">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};