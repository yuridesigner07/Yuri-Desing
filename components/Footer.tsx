
import React from 'react';
import { Icon } from './Icon';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer id="contact" className="bg-brand-bg pt-24 pb-32 relative overflow-hidden border-t border-brand-accent/5">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Discord Banner (Mantido e Ajustado) */}
        <div className="mb-24 hover-glow glass p-8 md:p-10 rounded-[32px] border border-[#5865F2]/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group shadow-2xl shadow-[#5865F2]/5">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5865F2]/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#5865F2]/20 transition-all duration-700"></div>
          
          <div className="relative z-10 flex items-center gap-6">
            <div className="w-20 h-20 bg-[#5865F2] rounded-2xl flex items-center justify-center shadow-lg shadow-[#5865F2]/30 group-hover:scale-110 transition-transform duration-500 rotate-3 group-hover:rotate-0">
              <Icon name="discord" className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-outfit mb-2 text-white">Comunidade VIP</h3>
              <p className="text-brand-text/60 max-w-md text-sm leading-relaxed font-medium">
                Networking, recursos gratuitos e suporte direto no meu servidor.
              </p>
            </div>
          </div>
          
          <a 
            href="https://discord.gg/fc4dxGFbWU" 
            target="_blank"
            className="relative z-10 px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl font-bold shadow-lg shadow-[#5865F2]/20 hover:shadow-[#5865F2]/40 hover:-translate-y-1 transition-all flex items-center gap-2 whitespace-nowrap text-sm uppercase tracking-wider"
          >
            Acessar Agora
            <Icon name="externalLink" className="w-4 h-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          
          {/* COLUNA 1: MARCA E SOBRE (7 colunas) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-6 group">
                {/* Logo sem container box - Ajustado para w-12 h-12 */}
                <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <img 
                       src="https://i.imgur.com/7AQuvYY.png" 
                       alt="Yuri Design Logo" 
                       className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold font-outfit text-white tracking-tight leading-none group-hover:text-brand-accent transition-colors">Yuri Design</h2>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary/80">Criando para Criadores</span>
                </div>
            </div>

            <p className="text-brand-text/50 mb-8 text-base leading-relaxed font-light border-l-2 border-brand-text/10 pl-4 max-w-2xl">
              Elevando o nível visual de criadores de conteúdo com estratégias validadas e design de alta performance.
            </p>
            
            <div className="flex gap-3">
              <a href="https://www.instagram.com/designeryuri07/" target="_blank" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white transition-all hover:-translate-y-1 duration-300 shadow-lg text-brand-text/40 border border-white/5" aria-label="Instagram">
                <Icon name="instagram" className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@yurimat07" target="_blank" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all hover:-translate-y-1 duration-300 shadow-lg text-brand-text/40 border border-white/5" aria-label="YouTube">
                <Icon name="youtube" className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@yuri_designer_" target="_blank" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-black hover:text-white hover:border-brand-accent/50 transition-all hover:-translate-y-1 duration-300 shadow-lg text-brand-text/40 border border-white/5" aria-label="TikTok">
                <Icon name="tiktok" className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* COLUNA 2: CONTATO (5 colunas) */}
          <div className="lg:col-span-5">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-brand-text/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366]"></span> Fale Comigo
            </h4>
            <div className="flex flex-col gap-4">
              
              {/* WhatsApp Card Highlight */}
              <a href="https://wa.me/5564993319216" target="_blank" className="group relative overflow-hidden p-1 rounded-2xl transition-transform hover:-translate-y-1 duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/20 to-[#128C7E]/20 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
                <div className="relative bg-[#0a1f20] border border-[#25D366]/30 p-5 rounded-xl flex items-center gap-5">
                    <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 animate-pulse-glow">
                        <Icon name="zap" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#25D366] mb-1">Resposta Rápida</p>
                        <p className="text-xl font-bold text-white group-hover:text-[#25D366] transition-colors font-outfit">WhatsApp</p>
                        <p className="text-xs text-brand-text/40 mt-1">Orçamentos e dúvidas</p>
                    </div>
                    <div className="ml-auto">
                        <Icon name="chevronRight" className="w-5 h-5 text-[#25D366]/50 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
              </a>

              {/* Email Card Minimal */}
              <a href="mailto:desingyuri@gmail.com" className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-all">
                <div className="p-2.5 bg-brand-text/5 rounded-lg text-brand-text/40 group-hover:text-white transition-colors">
                  <Icon name="mail" className="w-5 h-5" />
                </div>
                <div className="flex-1">
                   <p className="text-xs font-bold text-brand-text/30 uppercase tracking-wide">E-mail</p>
                   <p className="text-sm font-medium text-brand-text/80 group-hover:text-white transition-colors">desingyuri@gmail.com</p>
                </div>
              </a>

            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-text/30 text-xs font-medium flex items-center gap-2">
            © 2024 Yuri Design. <span className="w-1 h-1 bg-brand-text/20 rounded-full"></span> Todos os direitos reservados.
          </p>
          <div className="flex gap-6 z-20">
             <button onClick={onOpenPrivacy} className="text-xs font-bold uppercase tracking-wider text-brand-text/20 hover:text-brand-primary transition-colors cursor-pointer">Privacidade</button>
             <button onClick={onOpenTerms} className="text-xs font-bold uppercase tracking-wider text-brand-text/20 hover:text-brand-primary transition-colors cursor-pointer">Termos</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
