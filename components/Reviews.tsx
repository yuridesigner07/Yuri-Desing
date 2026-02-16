
import React from 'react';
import { SiteConfig } from '../types';

interface ReviewsProps {
  clients: SiteConfig['clients'];
  platforms: SiteConfig['clients']; // Reutilizando a interface Client
}

export const Reviews: React.FC<ReviewsProps> = ({ clients, platforms }) => {
  // Duplicar listas para scroll infinito suave (Apenas clientes precisam disso agora)
  const repeatedClients = [...clients, ...clients, ...clients];
  
  // Plataformas não precisam ser duplicadas pois serão fixas

  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-brand-bg border-t border-brand-accent/5">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        /* Removido o pause no hover conforme solicitado */
      `}</style>

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 text-center">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent mb-4 block">Parcerias de Sucesso</span>
        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-4">Quem Confia</h2>
        <p className="text-brand-text/50 font-light text-lg max-w-2xl mx-auto">
          Criadores de conteúdo e empresas que transformaram sua identidade visual conosco.
        </p>
      </div>

      {/* --- SEÇÃO 1: CLIENTES REAIS (Marquee Infinito - Sem Pause) --- */}
      <div className="relative w-full overflow-hidden mb-20">
        <div className="absolute top-0 left-0 h-full w-20 md:w-40 bg-gradient-to-r from-brand-bg to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-20 md:w-40 bg-gradient-to-l from-brand-bg to-transparent z-20 pointer-events-none"></div>

        <div className="flex w-max animate-scroll gap-12 md:gap-20 items-center">
           {repeatedClients.map((client, index) => (
             <div 
               key={`c-${index}`} 
               className="flex-shrink-0 group flex flex-col items-center gap-4 cursor-pointer"
             >
                {/* Avatar do Cliente - Círculo */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-br from-brand-accent/30 to-brand-primary/30 group-hover:from-brand-accent group-hover:to-brand-primary transition-all duration-500 shadow-2xl">
                    <div className="w-full h-full rounded-full overflow-hidden bg-brand-bg relative">
                       <img 
                           src={client.logo} 
                           alt={client.name} 
                           className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                       />
                    </div>
                </div>
                {/* Nome do cliente */}
                <span className="text-sm md:text-base font-bold font-outfit text-brand-text/60 group-hover:text-white transition-colors uppercase tracking-wider">
                    {client.name}
                </span>
             </div>
           ))}
        </div>
      </div>

      {/* --- SEÇÃO 2: PLATAFORMAS (Fixo e Centralizado) --- */}
      <div className="relative w-full border-t border-white/5 pt-12 max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text/20">Onde nossos clientes dominam</span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
           {platforms.map((plat, index) => (
             <div key={`p-${index}`} className="flex-shrink-0 hover:scale-110 transition-transform duration-300">
                <img 
                    src={plat.logo} 
                    alt={plat.name} 
                    className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    title={plat.name}
                />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
