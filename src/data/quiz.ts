export interface QuestionOption {
  label: string;
  points: number;
  image?: string;
  icon?: string;
}

export interface Question {
  title: string;
  description?: string;
  options: QuestionOption[];
}

export const quizQuestions: Question[] = [
  {
    title: "Qual é o seu setor de atuação?",
    description: "Selecione a categoria que melhor descreve seu negócio.",
    options: [
      { label: "Varejo / Loja Física", points: 10, image: "https://picsum.photos/seed/retail/400/300", icon: "storefront" },
      { label: "Alimentação / Restaurante", points: 10, image: "https://picsum.photos/seed/food/400/300", icon: "restaurant" },
      { label: "Beleza / Estética", points: 10, image: "https://picsum.photos/seed/beauty/400/300", icon: "spa" },
      { label: "Saúde / Clínica", points: 10, image: "https://picsum.photos/seed/health/400/300", icon: "medical_services" },
      { label: "Serviços Profissionais", points: 10, image: "https://picsum.photos/seed/services/400/300", icon: "design_services" },
      { label: "Outros", points: 10, image: "https://picsum.photos/seed/other/400/300", icon: "category" }
    ]
  },
  {
    title: "Como você atrai novos clientes hoje?",
    options: [
      { label: "Indicação / Boca a boca", points: 5 },
      { label: "Redes Sociais (Orgânico)", points: 10 },
      { label: "Anúncios (Tráfego Pago)", points: 20 },
      { label: "Não tenho uma estratégia clara", points: 0 }
    ]
  },
  {
    title: "Sua empresa aparece no Google Maps?",
    options: [
      { label: "Sim, estamos bem posicionados", points: 20 },
      { label: "Sim, mas raramente recebemos contatos", points: 10 },
      { label: "Não sei / Não tenho certeza", points: 5 },
      { label: "Não aparecemos", points: 0 }
    ]
  },
  {
    title: "Você já investiu em anúncios online?",
    options: [
      { label: "Sim, invisto mensalmente", points: 20 },
      { label: "Já tentei, mas não tive retorno", points: 5 },
      { label: "Nunca investi", points: 0 }
    ]
  }
];
