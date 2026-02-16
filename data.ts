
import { SiteConfig } from './types';

/**
 * --- GUIA DE IMAGENS (MÉTODO ALTA QUALIDADE) ---
 * 
 * OPÇÃO A (Fácil): Links Externos (Imgur/Discord)
 * - Use links que começam com "https://"
 * 
 * OPÇÃO B (Profissional & Alta Qualidade): Pasta Public + WebP
 * 1. Crie uma pasta chamada 'portfolio' dentro da pasta 'public' do projeto.
 * 2. Converta suas imagens para WebP usando o site https://squoosh.app (Qualidade 90%).
 * 3. Coloque as imagens na pasta: public/portfolio/minha-arte.webp
 * 4. Use o link assim: "/portfolio/minha-arte.webp"
 */

export const INITIAL_CONFIG: SiteConfig = {
  profile: {
    name: "Yuri Design",
    role: "Criando para Criadores",
    bio: "Do Design à Gestão Completa. Elevo o nível do seu conteúdo com estratégias visuais de alto impacto e gerenciamento de mídias sociais para resultados reais e consistentes.",
    photo: "https://i.imgur.com/CCTbGCp.png", 
  },
  services: [
    {
      title: "Thumbnails de Alta Performance",
      description: "Não é só beleza, é estratégia. Artes desenvolvidas para explodir sua taxa de cliques (CTR) e destacar seu vídeo no meio da multidão.",
      icon: "layout",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop",
      relatedCategoryId: "thumbnails"
    },
    {
      title: "Identidade para Lives",
      description: "Do 'Em Breve' ao 'Offline', cada tela é pensada para criar uma experiência imersiva que retém o público e passa profissionalismo.",
      icon: "monitor",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
      relatedCategoryId: "overlays"
    },
    {
      title: "Branding Completo",
      description: "Logos, banners e avatares que contam sua história. Construo uma marca sólida que seus seguidores vão reconhecer instantaneamente.",
      icon: "zap",
      image: "https://images.unsplash.com/photo-1626785774573-4b799312c95d?q=80&w=600&auto=format&fit=crop",
      relatedCategoryId: "visualid"
    },
    {
      title: "Gestão de Mídias Sociais",
      description: "Estratégia completa para crescer suas redes. Edição, planejamento e gestão de comunidade para resultados reais.",
      icon: "tiktok", // Usando ícone de social/tiktok
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&h=400&auto=format&fit=crop",
      relatedCategoryId: "social-media"
    }
  ],
  products: [
    {
      id: "thumbnails",
      title: "Thumbnails",
      description: "Aumente seu CTR com artes estratégicas. Escolha o pacote ideal para a frequência do seu canal.",
      image: "https://images.unsplash.com/photo-1626379953822-baec19c3bbcd?q=80&w=600&h=400&auto=format&fit=crop",
      packages: [
        {
          name: "Básico",
          quantity: "01 Unidade",
          priceUnit: "R$ 50,00",
          totalPrice: "R$ 50,00",
          features: ["Entrega em 48h", "Alta Resolução", "2 Alterações"]
        },
        {
          name: "Inicial",
          quantity: "02 Unidades",
          priceUnit: "R$ 45,00",
          totalPrice: "R$ 90,00",
          features: ["Entrega em 48h", "Alta Resolução", "2 Alterações por unidade"]
        },
        {
          name: "Médio",
          quantity: "05 Unidades",
          priceUnit: "R$ 40,00",
          totalPrice: "R$ 200,00",
          features: ["Prioridade na fila", "Entrega a Combinar", "2 Alterações por unidade"],
          isPopular: true
        },
        {
          name: "Grande",
          quantity: "10 Unidades",
          priceUnit: "R$ 35,00",
          totalPrice: "R$ 350,00",
          features: ["Atendimento VIP", "Entrega a Combinar", "2 Alterações por unidade"]
        }
      ]
    },
    {
      id: "overlays",
      title: "Stream Pack",
      description: "Profissionalize sua transmissão com layouts exclusivos e animados.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&h=400&auto=format&fit=crop",
      packages: [
        {
          name: "Pack Inicial",
          quantity: "Essencial",
          totalPrice: "R$ 150,00",
          features: ["3 Overlays Estáticos", "3 Emojis", "3 Painéis"]
        },
        {
          name: "Pack Básico",
          quantity: "Intermediário",
          totalPrice: "R$ 380,00",
          features: ["3 Overlays Animados", "1 Arte Stories", "3 Emojis", "3 Painéis", "2 Alertas", "Brinde: Banner e Capa"],
          isPopular: true
        },
        {
          name: "Pack Completo",
          quantity: "Pro",
          totalPrice: "R$ 650,00",
          features: ["5 Overlays Animados", "Identidade Completa", "1 Transição", "5 Alertas", "1 Arte Stories Animada", "7 Painéis", "10 Emojis", "Brinde: 30min Consultoria"]
        }
      ]
    },
    {
      id: "visualid",
      title: "Identidade Visual",
      description: "O branding completo para o seu canal se tornar uma marca reconhecida.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&h=400&auto=format&fit=crop",
      packages: [
        {
          name: "Start",
          quantity: "Essencial",
          totalPrice: "R$ 150,00",
          features: ["Banner Youtube", "Capa Redes Sociais", "Ícone", "Arte para Divulgação"]
        },
        {
          name: "Social Brand Kit",
          quantity: "Completo",
          totalPrice: "R$ 250,00",
          features: ["Logo", "Banners", "Ícones", "Destaques Instagram", "3 Ilustrações"],
          isPopular: true
        }
      ]
    },
    {
      id: "social-media",
      title: "Gestão de Mídias Sociais",
      description: "Gerenciamento estratégico para crescer suas redes com consistência e qualidade.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&h=400&auto=format&fit=crop",
      isNew: true,
      packages: [
        {
          name: "Plano Start",
          quantity: "Youtube & Shorts",
          totalPrice: "R$ 450,00",
          features: ["2 Vídeos Youtube (Edição + Thumb + Descrição)", "Relatório Básico", "Personalização Canal", "Resposta Comentários", "1 Vídeo Curto", "2 Clipes (Edição + Capa)"]
        },
        {
          name: "Plano Pro",
          quantity: "Crescimento",
          totalPrice: "R$ 750,00",
          features: ["4 Vídeos Youtube (Completo)", "Relatório Quinzenal", "Interação Diária", "2 Vídeos Curtos", "4 Clipes (Edição + Capa)", "Planejamento Conteúdo"],
          isPopular: true
        },
        {
          name: "Plano Elite",
          quantity: "Alta Performance",
          totalPrice: "R$ 1.800,00",
          features: ["6 Vídeos Youtube (Completo)", "Relatório Semanal Detalhado", "Interação Diária", "8 Vídeos Curtos", "12 Clipes (Edição + Capa)", "Planejamento + Insights"]
        }
      ]
    }
  ],
  portfolio: [
    // ... mantido igual ...
    { 
      id: "t_legadu", 
      category: "thumbnails", 
      title: "LEGADU VLOGS", 
      coverImage: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771162064/03_A_wrxqs6.jpg",
      images: [
        { id: "leg_1", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771166903/THUMB_02_02_final_im47hf.jpg", title: "Legadu 01" },
        { id: "leg_2", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771166903/THUMB_01_4.0_xe1ab7.jpg", title: "Legadu 02" },
        { id: "leg_3", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771166903/B_b_vccbme.jpg", title: "Legadu 03" },
        { id: "leg_4", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771166903/B2_ckcxse.jpg", title: "Legadu 04" },
        { id: "leg_5", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771166903/B_fefrwn.jpg", title: "Legadu 05" },
        { id: "leg_6", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771166903/THUMB_01_2.0_ht5drw.jpg", title: "Legadu 06" },
        { id: "leg_7", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771166902/A_hqyknx.jpg", title: "Legadu 07" },
        { id: "leg_8", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771166902/A_nitida_rx3y9c.jpg", title: "Legadu 08" },
        { id: "leg_9", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771166901/A_2_e4grre.jpg", title: "Legadu 09" },
        { id: "leg_10", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771166901/07_B_x541bd.jpg", title: "Legadu 10" },
        { id: "leg_11", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771166901/07_A_fpzlmv.jpg", title: "Legadu 11" },
        { id: "leg_12", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771166900/THUMB_LEGADO_02_1_vyjsd6.jpg", title: "Legadu 12" },
        { id: "leg_13", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771166900/03_B_mb_uvrz0n.jpg", title: "Legadu 13" },
        { id: "leg_14", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771166900/05_B_uxoy8s.jpg", title: "Legadu 14" },
        { id: "leg_15", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771166900/05_A_A_l9dbij.jpg", title: "Legadu 15" },
        { id: "leg_16", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771166900/05_A_R_wxjrof.jpg", title: "Legadu 16" },
        { id: "leg_17", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771162064/03_A_wrxqs6.jpg", title: "Legadu 17" }
      ]
    },
    { 
      id: "t_Trading & Finanças", 
      category: "thumbnails", 
      title: "Trading & Finanças", 
      coverImage: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170204/-20.000_com_bitcoin_stw9uj.jpg",
      images: [
        { id: "tf_1", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170204/-20.000_com_bitcoin_stw9uj.jpg", title: "-20.000 com Bitcoin" },
        { id: "tf_2", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170204/Ultrapassamos_os_300K_sa8y2w.jpg", title: "Ultrapassamos os 300K" },
        { id: "tf_3", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170203/Copy_Trade_auejmc.jpg", title: "Copy Trade" },
        { id: "tf_4", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170204/O_bitcoin_assustou_todo_mundo_j3ea06.jpg", title: "O Bitcoin Assustou" },
        { id: "tf_5", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170205/Altamente_Lucrativo_tilxfi.jpg", title: "Altamente Lucrativo" },
        { id: "tf_6", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170203/Estrategia_das_Duas_Torres_paybt7.jpg", title: "Estratégia Duas Torres" },
        { id: "tf_7", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170203/Passamos_por_uma_Prova%C3%A7%C3%A3o_mas_estamos_de_p%C3%A9_m3adeg.jpg", title: "Provações" },
        { id: "tf_8", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170202/trade_de_excel%C3%AAncia_xxiyqq.jpg", title: "Trade de Excelência" },
        { id: "tf_9", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170202/A_maior_queda_hist%C3%B3rica_do_Bitcoin_-47_xna4hd.jpg", title: "Queda Histórica BTC" },
        { id: "tf_10", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170203/Fique_Rico_Com_a_Solana_tfomgd.jpg", title: "Fique Rico com Solana" },
        { id: "tf_11", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170202/Saia_do_Negativo_a5hifs.jpg", title: "Saia do Negativo" },
        { id: "tf_12", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170202/Segredo_cge2uv.jpg", title: "Segredo" },
        { id: "tf_13", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170202/Saia_do_Negativo_a5hifs.jpg", title: "Saia do Negativo 2" },
        { id: "tf_14", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170202/Comece_ainda_este_ano_wb2yht.jpg", title: "Comece este Ano" },
        { id: "tf_15", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170201/Copy_tku0aj.jpg", title: "Copy" },
        { id: "tf_16", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170201/o_melhor_tempo_gr%C3%A1fico_cu2jcp.jpg", title: "Melhor Tempo Gráfico" },
        { id: "tf_17", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170201/1K_em_5_min_hanbox.jpg", title: "1K em 5 min" },
        { id: "tf_18", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170200/Como_realmente_tra%C3%A7ar_uma_bandeira_de_alta_gm4io5.jpg", title: "Bandeira de Alta" },
        { id: "tf_19", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170200/50_Reais_por_dia_hl1kpm.jpg", title: "50 Reais por Dia" },
        { id: "tf_20", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170200/Como_eu_leio_o_gr%C3%A1fico_em_60_segundos_e_busco_um_sal%C3%A1rio_m%C3%ADnimo_s3oiee.jpg", title: "Leitura Gráfica 60s" },
        { id: "tf_21", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170200/Copy_Trader_jzuuwa.jpg", title: "Copy Trader" },
        { id: "tf_22", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170200/Eua_x_Ir%C3%A3_sx4ipr.jpg", title: "EUA x Irã" },
        { id: "tf_23", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170199/Quebra_da_Gest%C3%A3o_v1wxti.jpg", title: "Quebra da Gestão" },
        { id: "tf_24", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170199/05_DICAS_pvlti9.jpg", title: "05 Dicas" },
        { id: "tf_25", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170199/Essas_duas_ferramentas_foram_respons%C3%A1veis_por_isso_final_f2rsa3.jpg", title: "Duas Ferramentas" },
        { id: "tf_26", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170198/A_Queda_de_Maduro__nxaha5.jpg", title: "A Queda de Maduro" },
        { id: "tf_27", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170198/Gatilho_para_surfar_tend%C3%AAncia_xkd1gz.jpg", title: "Gatilho de Tendência" },
        { id: "tf_28", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170198/Entenda_e_ganhe_hffhci.jpg", title: "Entenda e Ganhe" },
        { id: "tf_29", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170198/No%C3%A7%C3%A3o_de_espelhamento_nuqlbx.jpg", title: "Espelhamento" },
        { id: "tf_30", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771170198/Queda_BTC_oft6k5.jpg", title: "Queda BTC" }
      ]
    },
    { 
      id: "t_gamers", 
      category: "thumbnails", 
      title: "Gamers", 
      coverImage: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172896/Thumb_de_CS_qpnxfs.jpg",
      images: [
        { id: "g_1", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172896/Thumb_de_CS_qpnxfs.jpg", title: "CS GO" },
        { id: "g_2", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172892/Thumb_PVP_h32k9v.jpg", title: "PVP" },
        { id: "g_3", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172893/Thumb_Smzinho_elwusc.jpg", title: "Smzinho" },
        { id: "g_4", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172892/Thumb_DIDI_udqefd.jpg", title: "DIDI" },
        { id: "g_5", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172892/Thumb_Avenida_lwpwmd.jpg", title: "Avenida" },
        { id: "g_6", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172889/SOBERANO_BLACK_th338z.jpg", title: "Soberano Black" },
        { id: "g_7", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172889/SHEIK_ENQUADRO_k6vugt.jpg", title: "Sheik Enquadro" },
        { id: "g_8", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172887/O_Retorno_itbrjt.jpg", title: "O Retorno" },
        { id: "g_9", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172886/Nova_Cidade_mcrgma.jpg", title: "Nova Cidade" },
        { id: "g_10", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172886/Live_on_cadayv.jpg", title: "Live On" },
        { id: "g_11", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172886/Mito_do_sul_bgpboc.jpg", title: "Mito do Sul" },
        { id: "g_12", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172882/KINESSA_33_KILLS_audcvs.jpg", title: "Kinessa 33 Kills" },
        { id: "g_13", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172882/Delega_RP_cvzwmk.jpg", title: "Delega RP" },
        { id: "g_14", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172882/Dana_verso_lx0kdz.jpg", title: "Dana Verso" },
        { id: "g_15", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172881/Thumbnail_qunbjc.jpg", title: "Thumbnail" },
        { id: "g_16", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172881/2_ofl5ls.jpg", title: "Thumb 2" }
      ]
    },
    { 
      id: "t_variados", 
      category: "thumbnails", 
      title: "Variados", 
      coverImage: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172591/Nano_Banana_kaiukk.jpg",
      images: [
        { id: "v_1", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172591/Nano_Banana_kaiukk.jpg", title: "Nano Banana" },
        { id: "v_2", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172591/McGregor_vnemi0.jpg", title: "McGregor" },
        { id: "v_3", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172588/JOKIC_genrpz.jpg", title: "JOKIC" },
        { id: "v_4", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172588/DJONGA_FBC_ojog3b.jpg", title: "DJONGA FBC" },
        { id: "v_5", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172587/DJI_NEO_gjil4m.jpg", title: "DJI NEO" },
        { id: "v_6", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172587/Anthony_Edwards_djrzof.jpg", title: "Anthony Edwards" },
        { id: "v_7", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172587/Clovis_de_Barros_vwr7vi.jpg", title: "Clovis de Barros" },
        { id: "v_8", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172586/Gabriel_Barreto_jlah5q.jpg", title: "Gabriel Barreto" },
        { id: "v_9", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172585/Antes_x_Depois_chbud4.jpg", title: "Antes x Depois" },
        { id: "v_10", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172584/ACABOU_COM_O_PS_htb0dy.jpg", title: "Acabou com o PS" },
        { id: "v_11", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172584/3_hki9s6.jpg", title: "Thumb 3" },
        { id: "v_12", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172581/2_mgyfge.jpg", title: "Thumb 2" },
        { id: "v_13", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172580/Voamos_no_Embraer_wdrog7.jpg", title: "Voamos no Embraer" },
        { id: "v_14", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172580/Wolff_Vs_Landin_ilteny.jpg", title: "Wolff Vs Landin" },
        { id: "v_15", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172580/1_r3ndaw.jpg", title: "Thumb 1" },
        { id: "v_16", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172580/Treinador_Wall_bnt7y6.jpg", title: "Treinador Wall" },
        { id: "v_17", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172579/Sempre_Esteve_Certo_D%C3%A2niel_Fraga_ndie8u.jpg", title: "Sempre Esteve Certo" },
        { id: "v_18", url: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771172578/SEJA_O_MELHOR_znl27r.jpg", title: "SEJA O MELHOR" }
      ]
    },

    // ========================================================================
    // SEÇÃO DE OVERLAYS / STREAM PACK (category: "overlays")
    // ========================================================================
    { 
      id: "o_boyeltin", 
      category: "overlays", 
      title: "Boy Eltin", 
      coverImage: "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?q=80&w=600&auto=format&fit=crop",
      images: [
        { id: "be3", url: "https://res.cloudinary.com/dgfbvrnib/video/upload/v1771212153/3_tppkvl.mp4", title: "Vídeo Promocional", type: "video" },
        { id: "be1", url: "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?q=80&w=1200", title: "Tela Offline" },
        { id: "be2", url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200", title: "Facecam" }
      ]
    },
    { 
      id: "o_pedin", 
      category: "overlays", 
      title: "Pedin", 
      coverImage: "https://images.unsplash.com/photo-1519669556860-9c962554a7e0?q=80&w=600&auto=format&fit=crop",
      images: [
        { id: "pd1", url: "https://images.unsplash.com/photo-1519669556860-9c962554a7e0?q=80&w=1200", title: "Tela Just Chatting" },
        { id: "pd2", url: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1200", title: "Alertas" }
      ]
    },
    { 
      id: "o_dandan", 
      category: "overlays", 
      title: "Dandan", 
      coverImage: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=600&auto=format&fit=crop",
      images: [
        { id: "dd1", url: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1200", title: "Overlay Completo" },
        { id: "dd2", url: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1200", title: "Tela de Pausa" }
      ]
    },

    // ========================================================================
    // SEÇÃO DE IDENTIDADE VISUAL / BRANDING (category: "visualid")
    // ========================================================================
    { 
      id: "v_projA", 
      category: "visualid", 
      title: "Projeto Alpha", 
      coverImage: "https://images.unsplash.com/photo-1626785774573-4b799312c95d?q=80&w=600&auto=format&fit=crop",
      images: [
        { id: "pa1", url: "https://images.unsplash.com/photo-1626785774573-4b799312c95d?q=80&w=1200", title: "Logo Principal" },
        { id: "pa2", url: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200", title: "Variação P&B" }
      ]
    },
    { 
      id: "v_projB", 
      category: "visualid", 
      title: "Marca Beta", 
      coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      images: [
        { id: "pb1", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200", title: "Banner Youtube" },
        { id: "pb2", url: "https://images.unsplash.com/photo-1611532736597-b520262d1820?q=80&w=1200", title: "Social Media Kit" }
      ]
    },
  ],
  reviews: [], 
  // LISTA DE CLIENTES REAIS (PESSOAS/EMPRESAS)
  clients: [
    { id: "c1", name: "Legadu Vlogs", logo: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771213257/Legadu_Vlogs_tn983v.png" },
    { id: "c2", name: "Domus Trade", logo: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771213256/Domus_g13gmt.png" },
    { id: "c3", name: "ValoreClub", logo: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771213256/Valore_d2ltiv.png" },
    { id: "c4", name: "Boy Eltin", logo: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771213256/Boy_fy6bei.png" },
    { id: "c5", name: "Bl4ckRp", logo: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771213256/Bla4ckRP_dhfpok.png" },
    { id: "c6", name: "Dandan", logo: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771213257/Dandan_yj6vom.png" },
    { id: "c7", name: "Luminun Trade", logo: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771213257/Luminum_tnmck6.png" },
    { id: "c8", name: "Alan Bratz", logo: "https://res.cloudinary.com/dgfbvrnib/image/upload/v1771213257/Alan_Bratz_diskls.png" },
  ],
  // LISTA DE PLATAFORMAS (ONDE ELES ATUAM)
  platforms: [
    { id: "p1", name: "YouTube", logo: "https://cdn.simpleicons.org/youtube/white" },
    { id: "p2", name: "Twitch", logo: "https://cdn.simpleicons.org/twitch/white" },
    { id: "p3", name: "TikTok", logo: "https://cdn.simpleicons.org/tiktok/white" },
    { id: "p4", name: "Discord", logo: "https://cdn.simpleicons.org/discord/white" },
    { id: "p5", name: "Instagram", logo: "https://cdn.simpleicons.org/instagram/white" },
  ]
};
