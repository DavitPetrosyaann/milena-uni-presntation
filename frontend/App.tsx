import React, { useState, useEffect } from 'react';
import { NAVIGATION } from './constants';
import { Hero } from './components/Hero';
import { Content } from './components/Content';
import { StatsChart } from './components/StatsChart';
import { Funding } from './components/Funding';
import { Conclusion } from './components/Conclusion';
import { Contact } from './components/Contact';
import { Menu, X, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAVIGATION.map(nav => document.getElementById(nav.id));
      const scrollPosition = window.scrollY + 150; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-academic-50 selection:bg-academic-accent/20 selection:text-academic-900">
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 px-4 py-3 flex justify-between items-center shadow-sm">
        <span className="font-serif font-bold text-academic-900 truncate">IR-405 Presentation</span>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="text-slate-600 p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`
        fixed md:sticky top-0 left-0 h-screen w-72 bg-white border-r border-slate-200 z-40
        transform transition-transform duration-300 ease-in-out shadow-xl md:shadow-none
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        flex flex-col
      `}>
        <div className="p-8 border-b border-slate-100 hidden md:block bg-gradient-to-b from-slate-50 to-white">
          <h2 className="font-serif font-bold text-xl text-academic-900 leading-tight mb-2">
            Climate Change & Security
          </h2>
          <p className="text-xs text-academic-accent font-semibold uppercase tracking-widest">Presentation Outline</p>
        </div>
        
        <div className="flex-1 overflow-y-auto py-8 px-4 space-y-2 mt-14 md:mt-0">
          {NAVIGATION.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 flex items-center justify-between group
                  ${isActive 
                    ? 'bg-gradient-to-r from-academic-50 to-white text-academic-accent font-semibold shadow-sm border border-academic-100' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-academic-900 border border-transparent'}
                `}
              >
                <span className="relative">
                  {item.label}
                  {isActive && (
                    <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-4 bg-academic-accent rounded-r-full"></span>
                  )}
                </span>
                <ChevronRight 
                  size={16} 
                  className={`transition-transform duration-300 ${isActive ? 'text-academic-accent translate-x-1' : 'text-slate-300 group-hover:translate-x-1 group-hover:text-slate-400'}`} 
                />
              </button>
            );
          })}
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50/50">
          <div className="text-xs text-slate-400 text-center font-medium">
            &copy; {new Date().getFullYear()} University Dept. of IR
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 w-full md:w-[calc(100%-18rem)]">
        <Hero />
        <Content />
        <StatsChart />
        <Funding />
        <Conclusion />
        <Contact />
      </main>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 z-30 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default App;