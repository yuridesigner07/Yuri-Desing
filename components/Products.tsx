
import React, { useState, useEffect } from 'react';
import { ProductCategory, PricingPackage } from '../types';
import { Icon } from './Icon';

interface ProductsProps {
  products: ProductCategory[];
  onOpenPortfolio: (categoryId: string) => void;
  forcedCategory?: string | null;
  onClearForcedCategory?: () => void;
}

export const Products: React.FC<ProductsProps> = ({ 
  products, 
  onOpenPortfolio, 
  forcedCategory, 
  onClearForcedCategory 
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(null);

  // Efeito para ativar categoria externamente (via botão de serviço)
  useEffect(() => {
    if (forcedCategory) {
      const category = products.find(p => p.id === forcedCategory);
      if (category) {
        setActiveCategory(category);
        if (onClearForcedCategory) {
           onClearForcedCategory();
        }
      }
    }
  }, [forcedCategory, products, onClearForcedCategory]);

  const handleCategoryClick = (category: ProductCategory) => {
    setActiveCategory(category);
    setTimeout(() => {
      document.getElementById('product-details')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleBack = () => {
    setActiveCategory(null);
  };

  return (
    <section id="products" className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-3 block">Serviços Premium</span>
            <h2 className="text-5xl md:text-6xl font-bold font-outfit mb-6 text-white leading-tight">
              Nossos <span className="gradient-text-primary">Produtos</span>
            </h2>
            <p className="text-brand-text/60 text-xl font-light leading-relaxed max-w-2xl">
              Escolha a categoria ideal para impulsionar seu canal. Produtos validados por grandes criadores de conteúdo.
            </p>
          </div>
        </div>

        {/* View Switcher */}
        {!activeCategory ? (
          /* Category Selection View - REDESIGNED GRID (2 cols mobile, 4 cols desktop) */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-fade-in-up">
            {products.map((category) => (
              <div 
                key={category.id} 
                onClick={() => handleCategoryClick(category)}
                className="group relative h-[400px] md:h-[480px] rounded-[32px] md:rounded-[40px] overflow-hidden cursor-pointer hover-glow border border-white/5 bg-brand-dark/20 flex flex-col"
              >
                {/* Background Image with Parallax Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                  />
                  {/* Enhanced Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent opacity-90"></div>
                </div>
                
                {/* --- Top Section: Badge & Icon --- */}
                <div className="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-start z-20">
                    {/* NOVO Badge - MISTÉRIO/CURIOSIDADE */}
                    {category.isNew ? (
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-600 rounded-lg blur-md animate-pulse"></div>
                        <div className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white text-[10px] font-black uppercase tracking-[0.2em] py-2 px-4 rounded-lg shadow-xl border border-white/20 animate-pulse-glow flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                          Novo
                        </div>
                      </div>
                    ) : (
                        <div></div> /* Spacer se não houver badge */
                    )}

                    {/* Icon Box - FIXED POSITION TOP RIGHT */}
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-primary/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-brand-primary/30 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-500 shadow-lg shadow-brand-primary/10">
                      <Icon name="chevronRight" className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                </div>

                {/* --- Bottom Section: Typography --- */}
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end items-start z-10 pointer-events-none">
                   {/* Container específico para garantir que o texto fique embaixo e não suba */}
                   <div className="w-full mt-auto pt-20"> 
                      <h3 className="text-2xl md:text-3xl font-bold font-outfit mb-3 md:mb-4 text-white group-hover:text-brand-accent transition-colors leading-tight drop-shadow-lg">{category.title}</h3>
                      <p className="text-brand-text/80 text-sm md:text-base mb-4 md:mb-6 line-clamp-2 font-medium leading-relaxed hidden sm:block drop-shadow-md">{category.description}</p>
                      
                      {/* Category Meta */}
                      <div className="w-full h-px bg-white/20 mb-4 md:mb-6 group-hover:bg-brand-primary/50 transition-colors"></div>
                      <div className="flex items-center gap-2 text-brand-text/70 text-xs md:text-sm font-bold uppercase tracking-widest group-hover:text-brand-primary transition-colors">
                        <span>{category.packages.length} Planos</span>
                        <Icon name="chevronRight" className="w-3 h-3 md:w-4 md:h-4" />
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Detailed Pricing View - REDESIGNED */
          <div id="product-details" className="animate-fade-in-up">
            <div className="flex items-center gap-4 mb-12">
              <button 
                onClick={handleBack}
                className="w-12 h-12 rounded-full border border-brand-text/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary text-brand-text/60 hover:text-white transition-all"
              >
                <Icon name="chevronRight" className="w-5 h-5 rotate-180" />
              </button>
              <h3 className="text-lg font-bold text-brand-text/40 uppercase tracking-widest">Voltar para seleção</h3>
            </div>

            <div className="glass p-8 md:p-14 rounded-[48px] border border-brand-accent/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 mb-16 flex flex-col xl:flex-row justify-between items-end gap-10 border-b border-white/5 pb-10">
                <div className="max-w-2xl">
                  {activeCategory.isNew && (
                     <span className="inline-block bg-red-600/20 text-red-400 font-bold tracking-widest uppercase text-xs mb-3 px-3 py-1 rounded-lg border border-red-600/30">Novo Serviço</span>
                  )}
                  <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-3 block">Categoria Selecionada</span>
                  <h3 className="text-5xl font-bold font-outfit mb-6 text-white">{activeCategory.title}</h3>
                  <p className="text-brand-text/60 text-xl font-light">{activeCategory.description}</p>
                </div>
                
                {/* Oculta botão de ver exemplos para Gestão de Mídias (id: social-media) */}
                {activeCategory.id !== 'social-media' && (
                  <button 
                    onClick={() => onOpenPortfolio(activeCategory.id)}
                    className="w-full xl:w-auto hover-glow group relative overflow-hidden flex items-center gap-5 px-8 py-5 rounded-2xl bg-brand-dark border border-brand-primary/20 transition-all shadow-xl"
                  >
                    <div className="p-3 bg-brand-primary/20 rounded-xl text-brand-accent group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <Icon name="image" className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                        <div className="text-xs font-bold text-brand-text/40 uppercase tracking-widest mb-1">Confira a qualidade</div>
                        <div className="text-lg font-bold text-white flex items-center gap-2">
                          Ver Exemplos Reais
                          <Icon name="externalLink" className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                  </button>
                )}
              </div>

              {/* AVISO DE GESTÃO DE MÍDIAS SOCIAIS */}
              {activeCategory.id === 'social-media' && (
                <div className="mb-12 p-6 bg-brand-primary/10 border border-brand-primary/30 rounded-3xl flex items-start gap-4 animate-fade-in-up">
                   <div className="p-3 bg-brand-primary rounded-full text-white shrink-0">
                      <Icon name="zap" className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-white mb-2">Processo de Contratação</h4>
                      <p className="text-brand-text/70 leading-relaxed">
                        Para os planos de Gestão de Mídias, é essencial alinharmos expectativas e estratégias. Ao clicar em contratar, você será redirecionado para o WhatsApp onde explicarei detalhadamente como funciona nosso fluxo de trabalho, cronogramas e entregas.
                      </p>
                   </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {activeCategory.packages.map((pkg, idx) => (
                  <div 
                    key={idx} 
                    className={`relative p-8 rounded-[32px] flex flex-col h-full transition-all duration-300 ${
                      pkg.isPopular 
                        ? 'bg-gradient-to-b from-brand-primary/20 to-brand-dark/80 border border-brand-primary/50 shadow-2xl shadow-brand-primary/10 hover:-translate-y-2' 
                        : 'bg-brand-bg/40 border border-white/5 hover:border-brand-accent/30 hover:bg-brand-dark/40 hover:-translate-y-2'
                    }`}
                  >
                    {pkg.isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[10px] font-black uppercase tracking-[0.2em] py-2 px-6 rounded-full shadow-lg shadow-brand-primary/40 border border-brand-primary/50">
                        Recomendado
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="text-2xl font-bold font-outfit mb-2 text-white h-[40px] flex items-center">{pkg.name}</h4>
                      <p className="text-brand-accent text-sm font-bold uppercase tracking-wider bg-brand-accent/10 inline-block px-3 py-1 rounded-lg">{pkg.quantity}</p>
                    </div>

                    <div className="mb-8 pb-8 border-b border-white/5 min-h-[100px] flex flex-col justify-end">
                       {pkg.priceUnit && (
                         <p className="text-sm text-brand-text/40 mb-1 font-medium">Valor Unitário: {pkg.priceUnit}</p>
                       )}
                       {/* Preço e Total na mesma linha */}
                       <div className="flex items-baseline flex-wrap gap-1 whitespace-nowrap">
                          <p className="text-4xl font-bold text-white tracking-tight">{pkg.totalPrice}</p>
                          <span className="text-sm text-brand-text/40 font-bold">/total</span>
                       </div>
                    </div>

                    {/* Lista de Features com flex-1 para empurrar o botão para baixo e altura mínima para alinhamento */}
                    <div className="flex-1 mb-10">
                        <ul className="space-y-4">
                        {pkg.features?.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3 text-sm text-brand-text/80 font-medium">
                            <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${pkg.isPopular ? 'bg-brand-primary text-white' : 'bg-brand-text/10 text-brand-text/50'}`}>
                                <Icon name="check" className="w-3 h-3" />
                            </div>
                            <span>{feature}</span>
                            </li>
                        ))}
                        </ul>
                    </div>

                    <a 
                      href={`https://wa.me/5564993319216?text=Olá Yuri, tenho interesse no pacote ${pkg.name} de ${activeCategory.title}. Gostaria de entender melhor como funciona.`}
                      target="_blank"
                      className={`w-full py-4 rounded-xl font-bold text-center text-sm transition-all flex items-center justify-center gap-2 mt-auto ${
                        pkg.isPopular 
                          ? 'bg-brand-primary text-white hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40' 
                          : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                      }`}
                    >
                      <Icon name="shopping" className="w-4 h-4" />
                      Escolher {pkg.name}
                    </a>
                  </div>
                ))}

                {/* Card de Orçamento Personalizado */}
                <div className="relative p-8 rounded-[32px] border-2 border-dashed border-brand-accent/20 bg-brand-bg/20 hover:bg-brand-accent/5 hover:border-brand-accent/40 transition-all duration-300 flex flex-col h-full group hover:-translate-y-2">
                  <div className="mb-6 flex-1">
                    <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 shadow-lg shadow-brand-accent/5">
                      <Icon name="zap" className="w-7 h-7 text-brand-accent group-hover:text-white" />
                    </div>
                    <h4 className="text-2xl font-bold font-outfit mb-3 text-white h-[40px] flex items-center">Personalizado</h4>
                    <p className="text-brand-text/60 text-sm leading-relaxed font-medium">
                      Precisa de algo específico? Vamos criar um pacote que melhor atenda suas necessidades.
                    </p>
                  </div>

                  <div className="mt-auto border-t border-brand-accent/10 pt-8">
                      <p className="text-xs text-brand-text/40 mb-2 uppercase tracking-wider font-bold">Investimento</p>
                      <p className="text-3xl font-bold text-white mb-8">Sob Consulta</p>
                      
                      <a 
                        href={`https://wa.me/5564993319216?text=Olá Yuri, gostaria de um orçamento personalizado para ${activeCategory.title}`}
                        target="_blank"
                        className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border border-brand-accent text-brand-accent font-bold text-sm hover:bg-brand-accent hover:text-white transition-all shadow-lg hover:shadow-brand-accent/20"
                      >
                        Solicitar Agora
                        <Icon name="chevronRight" className="w-4 h-4" />
                      </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
