
import React from 'react';
import { SiteConfig } from '../types';

interface HeroProps {
  profile: SiteConfig['profile'];
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-brand-dark/30 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Coluna da Esquerda: Texto */}
          <div className="animate-fade-in-up order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 border border-brand-accent/20">
              <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse mr-2"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent">Estratégia Visual</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold font-outfit mb-8 leading-[1.1] tracking-tighter">
              {profile.name}
              <br />
              <span className="gradient-text">
                {profile.role}
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-brand-text/60 mb-12 max-w-xl leading-relaxed font-light">
              {profile.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => scrollToSection('products')}
                className="group relative px-10 py-5 bg-brand-primary text-white rounded-2xl font-bold text-center overflow-hidden shadow-2xl shadow-brand-primary/40 hover:scale-105 transition-all duration-300"
              >
                {/* Background Gradient & Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-[#4D8EFF]"></div>
                
                {/* Dynamic Shimmer Effect */}
                <div className="absolute inset-0 translate-x-[-100%] animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>

                {/* Content */}
                <div className="relative flex items-center justify-center gap-3">
                  <span className="tracking-wide">Ver Produtos</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </button>
              
              <a 
                href="https://wa.me/5564993319216" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-5 glass text-white rounded-2xl font-bold text-center border border-brand-accent/20 hover:bg-brand-primary/10 transition-all flex items-center justify-center gap-2"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          {/* Coluna da Direita: Foto */}
          <div className="relative animate-float lg:mt-0 mt-10 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative z-10 w-full max-w-[480px] aspect-square lg:aspect-[4/5] glass p-4 rounded-[40px] shadow-2xl overflow-hidden group">
              <img 
                src={profile.photo} 
                alt={profile.name} 
                className="w-full h-full object-cover rounded-[30px] transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Decorações */}
            <div className="absolute -top-8 -right-8 w-40 h-40 border-2 border-brand-accent/10 rounded-[50px] rotate-12 -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px] -z-0"></div>
            
            {/* Badge Flutuante */}
            <div className="absolute bottom-10 -left-12 glass px-6 py-4 rounded-2xl z-20 hidden xl:flex items-center gap-4 animate-float border border-brand-accent/10 shadow-2xl" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 bg-brand-accent/20 rounded-xl flex items-center justify-center">
                   <span className="font-bold text-brand-accent text-lg">5★</span>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-text/30 leading-none mb-1">Qualidade</p>
                  <p className="text-sm font-bold uppercase tracking-tighter">Clientes Satisfeitos</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
