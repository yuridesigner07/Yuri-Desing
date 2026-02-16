
import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkClass = "relative px-4 py-2 text-sm font-bold text-brand-text/70 hover:text-white transition-colors duration-300 group overflow-hidden rounded-lg hover:bg-white/5";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass border-b border-brand-accent/5 shadow-2xl backdrop-blur-xl' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 items-center">
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="group flex items-center gap-3"
            >
              {/* Logo Container - Ajustado para escala menor (w-9 h-9) */}
              <div className="relative w-9 h-9 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                 {/* Glow sutil atrás da logo apenas no hover */}
                 <div className="absolute inset-0 bg-brand-primary/40 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 
                 <img 
                   src="https://i.imgur.com/7AQuvYY.png" 
                   alt="Yuri Design Logo" 
                   className="w-full h-full object-contain relative z-10 drop-shadow-lg"
                 />
              </div>
              <span className="text-xl md:text-2xl font-bold font-outfit text-white tracking-tight group-hover:text-brand-accent transition-colors">
                Yuri Design
              </span>
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <button onClick={() => scrollToSection('home')} className={navLinkClass}>Início</button>
            <button onClick={() => scrollToSection('about')} className={navLinkClass}>Serviços</button>
            <button onClick={() => scrollToSection('products')} className={navLinkClass}>Produtos</button>
            <button onClick={() => scrollToSection('reviews')} className={navLinkClass}>Clientes</button>
            
            <div className="flex items-center gap-4 pl-6 border-l border-brand-text/10 ml-4">
              <a 
                href="https://wa.me/5564993319216" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover-glow bg-brand-primary text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center gap-2"
              >
                Orçamento
                <Icon name="chevronRight" className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 glass rounded-xl hover:bg-white/10 transition-colors">
              <Icon name={isOpen ? 'x' : 'menu'} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden glass border-b border-brand-accent/10 animate-fade-in-up mt-4 mx-4 rounded-3xl overflow-hidden">
          <div className="px-6 py-8 space-y-4 text-center bg-brand-bg/90 backdrop-blur-xl">
            <button onClick={() => scrollToSection('home')} className="block w-full py-4 text-lg font-bold text-white hover:text-brand-accent transition-colors border-b border-white/5">Início</button>
            <button onClick={() => scrollToSection('about')} className="block w-full py-4 text-lg font-bold text-white hover:text-brand-accent transition-colors border-b border-white/5">Serviços</button>
            <button onClick={() => scrollToSection('products')} className="block w-full py-4 text-lg font-bold text-white hover:text-brand-accent transition-colors border-b border-white/5">Produtos</button>
            <button onClick={() => scrollToSection('reviews')} className="block w-full py-4 text-lg font-bold text-white hover:text-brand-accent transition-colors">Clientes</button>
            <div className="pt-6">
              <a href="https://wa.me/5564993319216" className="block w-full bg-brand-primary text-white py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl shadow-brand-primary/20">Solicitar Orçamento</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
