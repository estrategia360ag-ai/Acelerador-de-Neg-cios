export type QuestionOption = {
  label: string;
  points: number;
  tag?: string;
  icon?: string;
  image?: string;
};

export type Question = {
  id: number;
  title: string;
  description?: string;
  options: QuestionOption[];
};

export const quizQuestions: Question[] = [
  {
    id: 1,
    title: 'Qual é o seu tipo de negócio?',
    description: 'Selecione a categoria que melhor descreve sua empresa para personalizarmos sua análise.',
    options: [
      {
        label: 'Loja Física',
        points: 0,
        tag: 'loja',
        icon: 'storefront',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqH6N6_IIZrbvBaZSN7ZC1CO0SP5TNDHz3HtCi2J27wksz4JIwKWCUTaMQmOwEX4dKnz-x6DnUwtdzOj84LwXNUwcUBeJ_iMpYGp3NltImFmJPaK0qg3J0DMpRNQ69MbFRuvsUfXLkzqWqi9UVxGPWBFhE8bOXCeHmF8lhjj8y22Am3Za32dNefnkxMYgo47hH2kwsTTCjZf6D-Wr96hRyG3U1KnDujWfNHuoopuX7rklVNeaKKJgOPvZ5PGj1yXFNFeH0lVpm0Y3C',
      },
      {
        label: 'Restaurante',
        points: 0,
        tag: 'alimentacao',
        icon: 'restaurant',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwHimRQJ7LzXVvpYcm9JAjAV56jyYV-xg-04NVWiOT8nvHGgN0xUSlujt3l2R8pSqImHevWmHFDqBa2RTA6_mCf48rtovoCfh7GiPENzE1da1-CJ7jS2axdk3Q1DzpjjcqCJSyY6fiyikTTtbzcKvMoyc28ajng8sCUvhSTvVkX-a2r3ysoFpHfDH7qsHjZDcm3q2MZAw2eCEAj39DXkbRJuGDh8bXHWUDaumiKUaYOYFTXxpdsBS8keIoKH3kL2pQ2ZXs3EFr_aet',
      },
      {
        label: 'Beleza',
        points: 0,
        tag: 'beleza',
        icon: 'spa',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0V5B3t6s8CJs718VKD7EqRHRd_lKjgONhNHEOFNNba_mKvM0KfCUtCHx3RRrft5FkzlRhjZlePT7bc8zL36a-IXyniW16gp4uZkzwj9o56rzIFUyiJeLX26virZDG1CTQ7OrEU2KaDPQkhoCSDbNOnkNZ7D6b_76RTN7MBu1yq7OngRUFl_KOCS6pE1XscKBBgykddH7_pvO0BNMsQYeaENDgXYDPUp46aKxQvg-ljYlixcrvRfs7Wq6gBzxcKlGMhk0eMfgwcrfU',
      },
      {
        label: 'Saúde',
        points: 0,
        tag: 'saude',
        icon: 'medical_services',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6YTdDU9K2BRy1oKNAMic-UqJlmtIiISNaTLj14lGLnOmED0feej0R0OkpV_bdB_rjSB9PEdk1lEcbclrqQJrjIPVRY8Wlkm7ssNt0S8EMsQZ5GIuKnZsJgW1Es907VE2qfHJjaZzSFvTols0XIFfsA1oEQbQiImB6qv5fOjfyF4d3IHBIKSNM3VEMxxDiGkIhm0mQ6Dd9yBWeNorI_dAEsNsJiFM7HkBEPVO-w8Gkhs1Iyv0_QQvYQ6XI4ruzAVCWBNg6QOIdCVjY',
      },
      {
        label: 'Serviços',
        points: 0,
        tag: 'servico',
        icon: 'design_services',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwmBnD91dMnY9Hb7qBNid0Jj3p2iz8nTnbBqnQvbf5MmUDGq0y6y0wY8E5va_Fns8ENz8C7K_mA1ByDxF2rQR3_Gz8KTAtLyLShwYN1w5gncS2Y5wfQnzZ1TK7uu0Aqk2ejouQoyHPzF4Rey4CWcudkYef3_wKhrRB5s5fwx1U5XK9MtuMGiw_dOfrP6F-DWIGJoy5Y7dTt2yssYV_RRmKckxy8iATxyqF4910kmpZAPonA6BHZkJ_oZumCU25keSYiw4cB4cc9urN',
      },
      {
        label: 'Outros',
        points: 0,
        tag: 'outro',
        icon: 'category',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEfnw_ZC66guip2bjychg_MfpsvMoqthmGPBhdMTpjC6ONVEtH8prayzubz9HPLBbpLUPKkMKT2gH7jyiVi9uDDOwxb1NOswu1OhAq3Su8n5mSmh3MsppD00ZMSXIEhmdNJLqSoIizhljNyXrRk9glEjuv_q_LDe4lg9X8AeY5H8dI1LG9FLuW52gktzGVqLjI5yNU8HFLkOTtolEBYAtqrMBtFD05JWDe47imWCNi0u_t_I7z5uHcLGsDEF9pWOzV5gvCx1Ey3-rt',
      },
    ],
  },
  {
    id: 2,
    title: 'Como seus clientes te encontram hoje?',
    options: [
      { label: '🗣️ Indicação de conhecidos', points: 1 },
      { label: '🚶 Passam na frente e entram', points: 1 },
      { label: '📱 Me acham no Instagram/Facebook', points: 2 },
      { label: '📍 Me acham no Google/Maps', points: 3 },
      { label: '📢 Faço anúncios pagos (Meta Ads, Google Ads)', points: 4 },
      { label: '🤷 Não sei direito', points: 0 },
    ],
  },
  {
    id: 3,
    title: 'Se você parasse de postar nas redes sociais por 30 dias, o que aconteceria com suas vendas?',
    description: 'Seja honesto. Isso ajuda a entender a dependência do seu negócio em canais orgânicos.',
    options: [
      { label: '😰 Cairiam muito', points: 0 },
      { label: '😐 Cairiam um pouco', points: 1 },
      { label: '🤷 Nem perceberia diferença (já não vem ninguém por lá)', points: 0 },
      { label: '💪 Tenho outras fontes de clientes, não dependeria', points: 3 },
    ],
  },
  {
    id: 4,
    title: 'Você já fez algum anúncio pago no Facebook, Instagram ou Google?',
    options: [
      { label: '❌ Nunca fiz (não sei como)', points: 0 },
      { label: '🔄 Já fiz mas parei (não funcionou ou era a agência que fazia)', points: 1 },
      { label: '⚡ Já usei o botão "Impulsionar" do Instagram', points: 1 },
      { label: '🏢 Pago agência/gestor mas não sei se tá funcionando', points: 2 },
      { label: '✅ Faço eu mesmo pelo Gerenciador de Anúncios', points: 4 },
    ],
  },
  {
    id: 5,
    title: 'Quando alguém pesquisa no Google pelo que você vende + sua cidade, sua empresa aparece?',
    options: [
      { label: '❌ Não aparece', points: 0 },
      { label: '🤷 Nunca pesquisei', points: 0 },
      { label: '📍 Aparece no Google Maps', points: 2 },
      { label: '🔝 Aparece nos primeiros resultados', points: 3 },
      { label: '📢 Aparece como anúncio', points: 4 },
    ],
  },
  {
    id: 6,
    title: 'Quantos clientes NOVOS sua empresa atrai por semana (em média)?',
    options: [
      { label: '😰 Menos de 5', points: 0 },
      { label: '😐 Entre 5 e 15', points: 1 },
      { label: '🙂 Entre 15 e 30', points: 2 },
      { label: '😀 Mais de 30', points: 3 },
      { label: '🤷 Não sei / não controlo', points: 0 },
    ],
  },
  {
    id: 7,
    title: 'Você consegue PREVER quantos clientes vai ter na próxima semana?',
    options: [
      { label: '❌ Não, cada dia é uma surpresa', points: 0 },
      { label: '😐 Mais ou menos, depende da época', points: 1 },
      { label: '✅ Sim, tenho boa previsibilidade', points: 3 },
    ],
  },
  {
    id: 8,
    title: 'Se existisse um sistema simples que TE ENSINASSE a criar seus próprios anúncios e atrair clientes da sua cidade — sem precisar de agência — você:',
    options: [
      { label: '🔥 Quero aprender isso pra ontem', points: 4 },
      { label: '🤔 Teria interesse em conhecer', points: 3 },
      { label: '💰 Depende do preço', points: 2 },
      { label: '❌ Prefiro pagar alguém pra fazer', points: 0 },
    ],
  },
];
