
import React, { useEffect, useState, useCallback } from 'react';
import { PortfolioProject } from '../types';
import { Icon } from './Icon';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: PortfolioProject[];
  categoryTitle: string;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, onClose, items, categoryTitle }) => {
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null); // Estado para o Preview (Lightbox)

  // Previne rolagem do body quando modal está aberto
  useEffect(() => {
    if (isOpen || previewImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      if (!isOpen) setActiveProject(null); // Reset when closed
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, previewImage]);

  // --- LÓGICA DE NAVEGAÇÃO DO LIGHTBOX ---

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeProject || !previewImage) return;

    const currentIndex = activeProject.images.findIndex(img => img.url === previewImage);
    if (currentIndex === -1) return;

    const nextIndex = (currentIndex + 1) % activeProject.images.length;
    setPreviewImage(activeProject.images[nextIndex].url);
  }, [activeProject, previewImage]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeProject || !previewImage) return;

    const currentIndex = activeProject.images.findIndex(img => img.url === previewImage);
    if (currentIndex === -1) return;

    const prevIndex = (currentIndex - 1 + activeProject.images.length) % activeProject.images.length;
    setPreviewImage(activeProject.images[prevIndex].url);
  }, [activeProject, previewImage]);

  // Suporte a teclado (Setas e ESC)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!previewImage) return;

      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setPreviewImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewImage, handleNext, handlePrev]);

  // Helper para verificar se é vídeo
  const isVideo = (url: string, type?: string) => {
    return type === 'video' || url.toLowerCase().endsWith('.mp4') || url.toLowerCase().endsWith('.webm');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* --- MODAL PRINCIPAL --- */}
      <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6">
        {/* Backdrop com Blur Intenso */}
        <div 
          className="absolute inset-0 bg-brand-bg/95 backdrop-blur-xl animate-fade-in"
          onClick={onClose}
        ></div>

        {/* Modal Container */}
        <div className="relative bg-brand-bg border border-brand-accent/10 md:rounded-[40px] rounded-t-[40px] w-full max-w-7xl h-[95vh] md:h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-fade-in-up">
          
          {/* Background Decor (Glow) */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

          {/* Header Section */}
          <div className="relative z-10 p-6 md:p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-brand-bg/50 backdrop-blur-md">
            <div className="flex items-center gap-6">
              {activeProject ? (
                <button 
                  onClick={() => setActiveProject(null)}
                  className="w-12 h-12 rounded-2xl border border-brand-text/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary text-brand-text/60 hover:text-white transition-all shadow-lg group"
                >
                  <Icon name="chevronRight" className="w-6 h-6 rotate-180 group-hover:-translate-x-1 transition-transform" />
                </button>
              ) : (
                 <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center border border-brand-primary/20">
                   <Icon name="image" className="w-6 h-6 text-brand-accent" />
                 </div>
              )}
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                   <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                   <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em]">
                      {activeProject ? `Galeria do Projeto` : `Categoria`}
                   </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-outfit text-white leading-none truncate max-w-[200px] md:max-w-md">
                  {activeProject ? activeProject.title : categoryTitle}
                </h2>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="absolute top-6 right-6 md:static w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors text-white/50 hover:text-white border border-transparent hover:border-white/10"
            >
              <Icon name="x" className="w-6 h-6" />
            </button>
          </div>

          {/* Content Area */}
          <div className="relative z-10 flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 bg-brand-dark/20">
            {!activeProject ? (
              /* VIEW 1: SELEÇÃO DE PROJETOS (Pastas) */
              <>
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                    <Icon name="image" className="w-20 h-20 text-brand-text/20 mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-2">Em Breve</h3>
                    <p className="text-brand-text/50">Novos projetos estão sendo adicionados.</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {items.map((project) => (
                      <div 
                        key={project.id} 
                        onClick={() => setActiveProject(project)}
                        className="group relative aspect-[16/10] rounded-[32px] overflow-hidden cursor-pointer border border-white/5 hover:border-brand-primary/50 bg-brand-dark transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-1"
                      >
                        <img 
                          src={project.coverImage} 
                          alt={project.title} 
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/50 to-transparent opacity-90 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
                          <span className="px-3 py-1 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                             Abrir Pasta
                          </span>
                          <h3 className="text-3xl font-bold font-outfit text-white mb-2 group-hover:text-brand-accent transition-colors">
                              {project.title}
                          </h3>
                          <div className="flex items-center gap-2 text-brand-text/60 text-sm font-medium">
                              <Icon name="image" className="w-4 h-4" />
                              <span>{project.images.length} Artes</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              /* VIEW 2: IMAGENS INTERNAS (Grade de 5 Colunas + Lightbox Trigger) */
              <div className="animate-fade-in-up">
                 {/* Header simples da galeria */}
                 <div className="mb-6 flex items-center justify-between">
                    <p className="text-brand-text/60 text-sm">Clique na imagem para ampliar</p>
                    <div className="px-4 py-2 bg-brand-primary/10 rounded-lg text-brand-primary text-xs font-bold uppercase tracking-wider">
                       {activeProject.images.length} Arquivos
                    </div>
                 </div>

                {/* --- GRID MODIFICADO PARA 5 COLUNAS --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                  {activeProject.images.map((img) => (
                    <div 
                      key={img.id} 
                      onClick={() => setPreviewImage(img.url)} // Abre o preview em vez de link externo
                      className="group relative aspect-video rounded-xl overflow-hidden bg-brand-dark border border-white/5 hover:border-brand-accent/50 transition-all duration-200 cursor-zoom-in shadow-md hover:shadow-xl hover:shadow-brand-primary/10"
                    >
                      {isVideo(img.url, img.type) ? (
                        <video
                          src={img.url}
                          muted
                          playsInline
                          loop
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onMouseOver={(e) => e.currentTarget.play().catch(() => {})}
                          onMouseOut={(e) => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }}
                        />
                      ) : (
                        <img 
                            src={img.url} 
                            alt={img.title || "Imagem do portfólio"} 
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                      
                      {/* Hover Overlay Sutil */}
                      <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px] pointer-events-none">
                          <div className="bg-black/50 p-2 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-200">
                             <Icon name={isVideo(img.url, img.type) ? "youtube" : "image"} className="w-5 h-5" />
                          </div>
                      </div>
                      
                      {/* Video Indicator */}
                      {isVideo(img.url, img.type) && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm pointer-events-none">
                           <Icon name="youtube" className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="p-4 md:p-6 bg-brand-bg border-t border-brand-accent/5 flex justify-between items-center">
              <span className="hidden md:block text-xs text-brand-text/30 font-bold uppercase tracking-widest">
                Design Estratégico
              </span>
              <a 
                  href="https://wa.me/5564993319216" 
                  target="_blank" 
                  className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-3 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20 group"
              >
                  <Icon name="zap" className="w-5 h-5 group-hover:animate-pulse" />
                  <span className="uppercase tracking-widest text-xs">Quero um projeto assim</span>
              </a>
          </div>
        </div>
      </div>

      {/* --- PREVIEW LIGHTBOX (Zoom na Imagem) COM NAVEGAÇÃO --- */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-[200] bg-brand-bg/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setPreviewImage(null)}
        >
          {/* Botão Fechar */}
          <button 
            className="absolute top-6 right-6 z-[220] p-3 rounded-full bg-black/40 hover:bg-red-500 text-white transition-colors cursor-pointer backdrop-blur-md border border-white/10"
            onClick={() => setPreviewImage(null)}
            title="Fechar (ESC)"
          >
            <Icon name="x" className="w-8 h-8" />
          </button>

          {/* Botão Anterior */}
          <button
            className="absolute left-4 md:left-8 z-[210] p-2 md:p-4 rounded-full bg-black/40 hover:bg-brand-primary text-white transition-all cursor-pointer backdrop-blur-md border border-white/10 hover:scale-110 active:scale-95 group"
            onClick={handlePrev}
            title="Anterior (Seta Esquerda)"
          >
            <Icon name="chevronRight" className="w-4 h-4 md:w-8 md:h-8 rotate-180 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Imagem ou Vídeo */}
          {isVideo(previewImage, activeProject?.images.find(i => i.url === previewImage)?.type) ? (
            <video
              src={previewImage}
              controls
              autoPlay
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-fade-in-up"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img 
              src={previewImage} 
              alt="Preview Fullscreen" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-fade-in-up"
              onClick={(e) => e.stopPropagation()} // Impede que clicar na imagem feche o modal
            />
          )}

          {/* Botão Próximo */}
          <button
            className="absolute right-4 md:right-8 z-[210] p-2 md:p-4 rounded-full bg-black/40 hover:bg-brand-primary text-white transition-all cursor-pointer backdrop-blur-md border border-white/10 hover:scale-110 active:scale-95 group"
            onClick={handleNext}
            title="Próximo (Seta Direita)"
          >
            <Icon name="chevronRight" className="w-4 h-4 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* Contador de Imagem (Opcional, mas útil) */}
          {activeProject && (
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-xs font-bold tracking-widest border border-white/10 pointer-events-none">
                {activeProject.images.findIndex(img => img.url === previewImage) + 1} / {activeProject.images.length}
             </div>
          )}
        </div>
      )}
    </>
  );
};
