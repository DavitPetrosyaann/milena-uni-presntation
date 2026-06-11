import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DISPLACEMENT_STATS } from '../constants';
import { useInView } from '../hooks';

export const StatsChart: React.FC = () => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section id="statistics" className="py-24 px-8 bg-white border-y border-slate-200 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>

      <div 
        ref={ref}
        className={`max-w-5xl mx-auto relative z-10 transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-academic-900 mb-4 tracking-tight">UN Statistics: Internal Displacement</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-academic-accent to-cyan-400 rounded-full mb-8"></div>
        
        <p className="text-slate-600 mb-12 max-w-3xl leading-relaxed text-lg">
          Data from the Internal Displacement Monitoring Centre (IDMC) highlights the growing scale of weather-related displacements globally. Note the correlation between the number of extreme weather events and millions displaced.
        </p>

        <div className="h-[450px] w-full bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 group hover:shadow-2xl hover:border-academic-200 transition-all duration-500">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={DISPLACEMENT_STATS}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="year" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b', fontWeight: 500 }}
                dy={10}
              />
              <YAxis 
                yAxisId="left" 
                orientation="left" 
                stroke="#0284c7" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b' }}
                label={{ value: 'Millions Displaced', angle: -90, position: 'insideLeft', fill: '#64748b', dy: 50, fontWeight: 500 }}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                stroke="#0f172a" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b' }}
                label={{ value: 'Recorded Events', angle: 90, position: 'insideRight', fill: '#64748b', dy: -50, fontWeight: 500 }}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: '1px solid #e2e8f0', 
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(4px)'
                }}
                cursor={{ fill: '#f8fafc' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} iconType="circle" />
              <Bar yAxisId="left" dataKey="displaced" name="Displaced (Millions)" fill="url(#colorDisplaced)" radius={[6, 6, 0, 0]} />
              <Bar yAxisId="right" dataKey="events" name="Weather Events" fill="#94a3b8" radius={[6, 6, 0, 0]} />
              
              <defs>
                <linearGradient id="colorDisplaced" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0284c7" stopOpacity={1}/>
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.8}/>
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-slate-400 mt-6 text-right italic flex items-center justify-end gap-2">
          <span className="w-4 h-px bg-slate-300"></span>
          Source: Internal Displacement Monitoring Centre (IDMC) Global Reports
        </p>
      </div>
    </section>
  );
};