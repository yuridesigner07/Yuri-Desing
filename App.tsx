
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { PortfolioModal } from './components/PortfolioModal';
import { LegalModal } from './components/LegalModal';
import { INITIAL_CONFIG } from './data';
import { SiteConfig } from './types';
import { Icon } from './components/Icon';

const App: React.FC = () => {
  const [config] = useState<SiteConfig>(INITIAL_CONFIG);
  
  // State for Portfolio Modal
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // State for forcing a category selection in Products
  const [targetProductCategory, setTargetProductCategory] = useState<string | null>(null);

  // State for Legal Modal
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTitle, setLegalTitle] = useState('');
  const [legalContent, setLegalContent] = useState<React.ReactNode>(null);

  const openPortfolio = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setIsPortfolioOpen(true);
  };

  const closePortfolio = () => {
    setIsPortfolioOpen(false);
  };

  // Funções para abrir modais legais
  const openPrivacy = () => {
    setLegalTitle('Política de Privacidade');
    setLegalContent(
        <div className="space-y-4">
            <p><strong>1. Coleta e Uso de Informações:</strong> Coletamos apenas as informações necessárias para a prestação dos nossos serviços de design e motion graphics, como nome, e-mail e briefing do projeto.</p>
            <p className="p-4 bg-brand-primary/10 border-l-4 border-brand-primary rounded-r-lg">
                <strong>2. Confidencialidade Absoluta:</strong> Garantimos que todos os dados, arquivos de projeto, logins e estratégias compartilhadas conosco durante todo o processo de trabalho (desde o início até a entrega final) são estritamente confidenciais. <strong>Nenhum dado será divulgado, vendido ou compartilhado com terceiros sob nenhuma circunstância.</strong> Respeitamos a integridade do seu negócio e do seu conteúdo.
            </p>
            <p><strong>3. Portfólio:</strong> Reservamo-nos o direito de exibir as artes finalizadas em nosso portfólio para fins de divulgação do nosso trabalho, salvo acordo de confidencialidade (NDA) assinado previamente.</p>
            <p><strong>4. Segurança:</strong> Adotamos medidas de segurança adequadas para proteger contra acesso não autorizado, alteração, divulgação ou destruição dos seus dados pessoais.</p>
        </div>
    );
    setLegalModalOpen(true);
  };

  const openTerms = () => {
    setLegalTitle('Termos de Uso');
    setLegalContent(
        <div className="space-y-4">
            <p><strong>1. Aceitação:</strong> Ao contratar nossos serviços, você concorda com estes termos.</p>
            <p><strong>2. Prazos e Entregas:</strong> Os prazos são estipulados no momento do orçamento. Atrasos no envio de material por parte do cliente podem alterar o prazo final.</p>
            <p><strong>3. Revisões:</strong> Cada pacote possui um limite de revisões gratuitas. Alterações que fujam do briefing inicial ou excedam o limite serão cobradas à parte.</p>
            <p><strong>4. Pagamentos:</strong> O trabalho inicia-se após a confirmação do pagamento (ou conforme combinado via WhatsApp). Não realizamos reembolso após o início do processo criativo.</p>
            <p><strong>5. Direitos Autorais:</strong> Após a entrega final e pagamento integral, o cliente detém o direito de uso das artes. Os arquivos abertos (editáveis) são fornecidos apenas se especificado no pacote contratado.</p>
        </div>
    );
    setLegalModalOpen(true);
  };

  const closeLegalModal = () => {
    setLegalModalOpen(false);
  };

  // Get filtered items based on selected category
  const portfolioItems = selectedCategory 
    ? config.portfolio.filter(item => item.category === selectedCategory)
    : [];
  
  // Helper to get category title
  const getCategoryTitle = (id: string) => {
    const product = config.products.find(p => p.id === id);
    return product ? product.title : 'Portfólio';
  };

  // Handler especial para cliques nos cards de serviço
  const handleServiceClick = (service: typeof config.services[0]) => {
     if (service.relatedCategoryId === 'social-media') {
        // Define a categoria alvo para abrir automaticamente
        setTargetProductCategory('social-media');
        // Scroll para a seção de produtos
        setTimeout(() => {
          document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
     } else {
        openPortfolio(service.relatedCategoryId);
     }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15, // Aumentado ligeiramente para evitar disparos acidentais na borda
      rootMargin: "0px 0px -80px 0px" // Margem inferior negativa para animar quando o elemento já estiver um pouco dentro da tela
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Garante que a classe de ocultação seja removida e a animação adicionada
          entry.target.classList.remove('reveal');
          entry.target.classList.add('animate-fade-in-up');
          
          // Para de observar o elemento após a animação iniciar
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Seleciona todos os elementos que devem ser animados
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [config]); // Mantém config como dependência caso o conteúdo mude dinamicamente

  return (
    <div className="min-h-screen font-sans selection:bg-brand-primary selection:text-white bg-brand-bg">
      <Navbar />
      
      <main>
        <Hero profile={config.profile} />
        
        {/* Services Section */}
        <section id="about" className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 reveal">
               {/* Optional Header text if needed */}
            </div>
            
            <div className="border border-brand-accent/30 rounded-[3rem] p-8 md:p-12 relative bg-brand-bg/30">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

               {/* Grid ajustado para suportar 4 serviços em linha no desktop grande ou 2x2 */}
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {config.services.map((service, index) => (
                  <div 
                    key={index} 
                    onClick={() => handleServiceClick(service)}
                    className="group relative h-[480px] rounded-[32px] overflow-hidden border border-brand-accent/10 hover-glow transition-all duration-500 reveal bg-brand-dark/20 cursor-pointer flex flex-col"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute inset-0">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-50"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/95 to-brand-dark/60"></div>
                    </div>

                    <div className="relative h-full flex flex-col p-6 md:p-8 z-10">
                      <div className="mb-6 pt-2">
                        <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center border border-brand-primary/20 backdrop-blur-md group-hover:bg-brand-primary/20 transition-colors">
                          <Icon name={service.icon as any} className="w-7 h-7 text-brand-accent group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 font-outfit text-white leading-tight">{service.title}</h3>
                      <p className="text-brand-text/60 leading-relaxed text-sm md:text-base mb-6 font-light">
                        {service.description}
                      </p>
                      
                      <div className="mt-auto">
                        {service.relatedCategoryId === 'social-media' ? (
                            <>
                                <p className="text-center text-xs text-brand-text/40 mb-3 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                   +300 Mil Views Entregues
                                </p>
                                <button 
                                className="w-full py-3 md:py-4 rounded-xl border border-white/10 group-hover:bg-white/5 hover:border-brand-primary/50 transition-all text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 text-white group-hover:text-brand-accent pointer-events-none whitespace-nowrap"
                                >
                                <Icon name="zap" className="w-4 h-4 shrink-0" />
                                <span>Conheça os Planos</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="text-center text-xs text-brand-text/40 mb-3 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Clique para ver portfólio
                                </p>
                                <button 
                                className="w-full py-3 md:py-4 rounded-xl border border-white/10 group-hover:bg-white/5 hover:border-brand-primary/50 transition-all text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 text-white group-hover:text-brand-accent pointer-events-none"
                                >
                                <Icon name="image" className="w-4 h-4 shrink-0" />
                                <span>Ver Projetos</span>
                                </button>
                            </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <div className="reveal">
          <Products 
            products={config.products} 
            onOpenPortfolio={openPortfolio}
            forcedCategory={targetProductCategory}
            onClearForcedCategory={() => setTargetProductCategory(null)}
          />
        </div>
        
        <div className="reveal">
          <Reviews clients={config.clients} platforms={config.platforms} />
        </div>
      </main>

      <Footer onOpenPrivacy={openPrivacy} onOpenTerms={openTerms} />

      {/* Portfolio Modal */}
      <PortfolioModal 
        isOpen={isPortfolioOpen} 
        onClose={closePortfolio} 
        items={portfolioItems}
        categoryTitle={selectedCategory ? getCategoryTitle(selectedCategory) : ''}
      />

      {/* Legal Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={closeLegalModal}
        title={legalTitle}
        content={legalContent}
      />

      {/* Floating Contact - WhatsApp linked to 64 993319216 */}
      <a 
        href="https://wa.me/5564993319216" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce hover:animate-none group"
        title="Falar no WhatsApp"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
        <svg className="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.891-11.891 11.891-2.007 0-3.974-.51-5.713-1.472l-6.28 1.69zm6.307-3.801l.363.216c1.554.925 3.35 1.414 5.18 1.414 5.4 0 9.791-4.391 9.791-9.791 0-2.612-1.02-5.069-2.871-6.92s-4.307-2.871-6.92-2.871c-5.4 0-9.791 4.391-9.791 9.791 0 1.884.536 3.72 1.552 5.31l.237.371-1.018 3.714 3.848-1.031zm10.957-6.425c-.299-.15-1.766-.87-2.04-.971-.273-.1-.472-.15-.67.15-.198.3-.768.971-.941 1.17-.173.199-.347.225-.646.075-.3-.15-1.266-.467-2.41-1.487-.892-.796-1.493-1.778-1.667-2.078-.173-.3-.019-.462.13-.611.135-.133.299-.347.449-.52.149-.174.198-.299.299-.497.101-.199.05-.373-.025-.523-.075-.15-.67-1.614-.917-2.214-.241-.584-.486-.505-.67-.515-.173-.008-.372-.01-.57-.01-.198 0-.521.074-.794.373-.273.299-1.042 1.02-1.042 2.487 0 1.467 1.067 2.885 1.216 3.084.15.199 2.101 3.207 5.088 4.498.711.307 1.266.49 1.698.627.714.227 1.365.195 1.878.119.572-.085 1.766-.721 2.015-1.416.248-.696.248-1.293.174-1.416-.074-.124-.273-.199-.572-.349z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;
