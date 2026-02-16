
import React, { useEffect } from 'react';
import { Icon } from './Icon';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  // Previne rolagem do body quando modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-bg/95 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-brand-bg border border-brand-accent/10 rounded-[40px] w-full max-w-5xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl animate-fade-in-up">
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Header */}
        <div className="relative z-10 p-8 border-b border-white/5 flex justify-between items-center bg-brand-bg/80 backdrop-blur-md">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center border border-brand-accent/20 shadow-lg shadow-brand-accent/5">
                <Icon name="check" className="w-8 h-8 text-brand-accent" />
            </div>
            <div>
              <span className="text-brand-primary text-xs font-black uppercase tracking-[0.2em] mb-1 block">Documentação</span>
              <h3 className="text-3xl md:text-4xl font-bold font-outfit text-white">
                {title}
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-full hover:bg-white/5 flex items-center justify-center transition-colors text-white/40 hover:text-white border border-transparent hover:border-white/10"
          >
            <Icon name="x" className="w-6 h-6" />
          </button>
        </div>

        {/* Content Scroll */}
        <div className="relative z-10 p-8 md:p-12 overflow-y-auto custom-scrollbar flex-1 bg-brand-dark/30">
           <div className="prose prose-invert max-w-none prose-headings:font-outfit prose-headings:text-white prose-p:text-brand-text/70 prose-p:leading-relaxed prose-strong:text-brand-accent">
               {content}
           </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 p-6 bg-brand-bg border-t border-brand-accent/5 flex justify-end items-center gap-4">
            <span className="text-xs text-brand-text/30 font-bold uppercase tracking-widest hidden md:block">
                Leitura Recomendada
            </span>
            <button 
                onClick={onClose}
                className="px-10 py-4 bg-white/5 hover:bg-brand-primary hover:text-white text-brand-text/60 rounded-xl font-bold transition-all border border-white/5 hover:border-brand-primary hover:shadow-lg hover:shadow-brand-primary/20 text-sm uppercase tracking-wider"
            >
                Entendido e Fechar
            </button>
        </div>
      </div>
    </div>
  );
};
