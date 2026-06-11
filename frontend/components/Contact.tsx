import React, { useState } from 'react';
import { Mail, BookOpen, Send, MessageSquare } from 'lucide-react';
import { useInView } from '../hooks';

export const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { ref, isInView } = useInView<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Question submitted by ${email}. The professor will respond shortly.`);
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 px-8 bg-slate-900 text-white relative overflow-hidden">
      {/* Deep background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-academic-accent/20 via-slate-900 to-slate-900 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl pointer-events-none"></div>

      <div 
        ref={ref}
        className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-16 relative z-10 transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-tight">Questions & Discussion</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-academic-accent to-cyan-400 rounded-full mb-8"></div>
          <p className="text-slate-300 leading-relaxed mb-12 text-lg font-light">
            Thank you for attending this presentation. For further reading, syllabus requests, or to submit questions regarding the climate-security nexus, please use the contact form or reach out directly.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-5 text-slate-300 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center group-hover:bg-academic-accent/20 group-hover:border-academic-accent/50 transition-all duration-300">
                <Mail size={24} className="group-hover:text-academic-400 transition-colors" />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1 uppercase tracking-wider font-medium">Email</p>
                <p className="font-medium text-lg text-white">e.vance@university.edu</p>
              </div>
            </div>
            <div className="flex items-center gap-5 text-slate-300 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
                <BookOpen size={24} className="group-hover:text-cyan-400 transition-colors" />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1 uppercase tracking-wider font-medium">Office Hours</p>
                <p className="font-medium text-lg text-white">Tues/Thurs 2:00 PM - 4:00 PM</p>
                <p className="text-sm text-slate-400">Room 402, Social Sciences Bldg</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-700 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="text-academic-400" size={24} />
            <h3 className="text-2xl font-bold">Submit a Question</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Your Academic Email</label>
              <input 
                type="email" 
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-academic-accent focus:border-transparent outline-none text-white transition-all placeholder-slate-500"
                placeholder="student@university.edu"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Question / Comment</label>
              <textarea 
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-5 py-4 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-academic-accent focus:border-transparent outline-none text-white transition-all resize-none placeholder-slate-500"
                placeholder="Regarding the Syria case study..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-academic-accent to-cyan-600 hover:from-academic-accentHover hover:to-cyan-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-academic-accent/25 hover:-translate-y-1"
            >
              <span>Submit Question</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};