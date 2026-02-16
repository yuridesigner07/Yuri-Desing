
export interface Review {
  id: string;
  clientName: string;
  projectName: string;
  comment: string;
  rating: number;
  avatar?: string;
}

export interface PricingPackage {
  name: string;
  quantity: string;
  priceUnit?: string;
  totalPrice: string;
  features: string[];
  isPopular?: boolean;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  packages: PricingPackage[];
  isNew?: boolean; // Propriedade opcional para destacar novos serviços
}

// Nova estrutura para imagens individuais dentro de um projeto
export interface PortfolioImage {
  id: string;
  url: string;
  title?: string;
  type?: 'image' | 'video';
}

// Estrutura de "Pasta" ou "Projeto"
export interface PortfolioProject {
  id: string;
  title: string; // Ex: "LEGADU VLOGS", "Boy Eltin"
  category: string; // Ex: "thumbnails", "overlays"
  coverImage: string; // Capa da pasta
  images: PortfolioImage[]; // Imagens dentro da pasta
}

export interface Client {
  id: string;
  name: string;
  logo: string;
}

export interface SiteConfig {
  profile: {
    name: string;
    role: string;
    bio: string;
    photo: string;
  };
  services: {
    title: string;
    description: string;
    icon: string;
    image: string; 
    relatedCategoryId: string; 
  }[];
  products: ProductCategory[];
  portfolio: PortfolioProject[]; // Atualizado para lista de projetos
  reviews: Review[];
  clients: Client[];   // Lista de Clientes Reais (Pessoas/Empresas)
  platforms: Client[]; // Lista de Plataformas (YouTube, Twitch, etc.)
}
