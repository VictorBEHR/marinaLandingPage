// ============================================================================
// Landing Page Data — Psychology Professional
// All placeholder content is centralized here for easy editing.
// Replace with your real information.
// ============================================================================

export const psychologist = {
  name: "Marina Reis de Souza",
  shortName: "Marina Reis",
  crp: "CRP-SP 06/233683",
  specialty: "Psicóloga Clínica — Abordagem Cognitivo-Comportamental",
  title: "Psicóloga Clínica",
  heroPhrase: "Dar o primeiro passo é o maior ato de amor próprio. Vamos construir sua jornada juntos?",
  photoUrl: "/assets/marina.jpg", // Replace with actual photo path
  photoAlt: "Psicóloga Marina Reis de Souza — consultório em São Paulo",
  email: "contato@marina.psicologia.br",
  phone: "(11) 99839-0324",
  whatsapp: "+5511998390324",
  message: "Olá! Vi seu site e gostaria de agendar uma consulta.",
  location: {
    address: "Rua Augusta, 1500 — Sala 512",
    neighborhood: "Consolação",
    city: "São Paulo — SP",
    cep: "01304-001",
    mapsUrl: "https://maps.google.com/?q=Rua+Augusta+1500+Sao+Paulo",
    mapsEmbedUrl: "", // Optional: Google Maps embed URL
  },
  social: {
    linkedin: "https://www.linkedin.com/in/psimarina-reis/",
    instagram: "https://www.instagram.com/heyp.sico/",
  },
};

export const stats = [
  { value: "2024", label: "atuação clínica desde" },
  { value: "Adultos e crianças", label: "atendimento especializado" },
  { value: "Pós-graduação", label: "em Psicanálise (PUC Minas)" },
  { value: "CRP 06/233683", label: "registro ativo" },
];

export const about = {
  paragraphs: [
    "Sou psicóloga, graduada pela Universidade Cruzeiro do Sul (UNICSUL), com registro ativo no CRP 06/233683. Atuo com atendimentos clínicos presenciais e online, oferecendo um espaço de escuta qualificada, acolhimento, sigilo e cuidado emocional para crianças, adolescentes e adultos.",
    "Minha prática é fundamentada na Psicanálise, respeitando a singularidade de cada paciente e seu processo terapêutico. Além da clínica, possuo experiência em atendimento a crianças com Transtorno do Espectro Autista (TEA), elaboração de Plano Terapêutico Individual (PTI), avaliações comportamentais e orientação parental."
  ],
  mission:
    "Oferecer um espaço seguro de escuta, acolhimento e cuidado, promovendo autoconhecimento e respeitando a singularidade de cada pessoa em sua jornada terapêutica.",
  values: [
    "Ética",
    "Acolhimento",
    "Respeito",
    "Sigilo",
    "Compromisso"
  ],
  formation:
    "Graduação em Psicologia — Universidade Cruzeiro do Sul (UNICSUL) | Pós-graduação em Clínica Psicanalítica na Atualidade (PUC Minas - em andamento)",
  approach:
    "Psicanálise"
};

export const areas = [
  {
    title: "Ansiedade",
    description: "Aprenda a lidar com preocupações excessivas, crises de ansiedade e pensamentos acelerados.",
    icon: "BrainCircuit",
  },
  {
    title: "Depressão",
    description: "Espaço seguro para trabalhar sentimentos de tristeza, desânimo e falta de perspectiva.",
    icon: "Heart",
  },
  {
    title: "Relacionamentos",
    description: "Desenvolva habilidades de comunicação e vínculos mais saudáveis em suas relações.",
    icon: "HeartHandshake",
  },
  {
    title: "Autoestima",
    description: "Fortaleça sua autoconfiança e desenvolva uma relação mais compassiva consigo mesmo.",
    icon: "Sparkles",
  },
  {
    title: "Estresse",
    description: "Técnicas para gerenciar o estresse do dia a dia e recuperar o equilíbrio emocional.",
    icon: "Wind",
  },
  {
    title: "Desenvolvimento Pessoal",
    description: "Processo de autoconhecimento para alcançar seus objetivos e potencializar seu crescimento.",
    icon: "ArrowUpCircle",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Contato",
    description: "Entre em contato por WhatsApp, e-mail ou formulário. Agendamos uma conversa inicial.",
    icon: "MessageCircle",
  },
  {
    step: 2,
    title: "Primeira Sessão",
    description: "Conheço sua história, entendemos suas demandas e alinhamos expectativas sobre o processo.",
    icon: "UserCheck",
  },
  {
    step: 3,
    title: "Acompanhamento",
    description: "Sessões regulares (geralmente 1x por semana) com duração média de 45 a 50 minutos.",
    icon: "CalendarCheck",
  },
  {
    step: 4,
    title: "Evolução",
    description: "Avaliamos juntos os progressos e ajustamos o plano terapêutico conforme sua evolução.",
    icon: "TrendingUp",
  },
];

export const serviceTypes = {
  online: {
    title: "Atendimento Online",
    description:
      "Sessões por videochamada (Google Meet ou WhatsApp) — mesma qualidade do presencial, com a comodidade de estar em casa. Ideal para quem tem rotina corrida ou mora em outra cidade.",
    features: [
      "Plataforma segura e sigilosa",
      "Mesma eficácia do presencial",
      "Maior flexibilidade de horários",
      "Atendimento de qualquer lugar do Brasil",
    ],
  },
  presential: {
    title: "Atendimento Presencial",
    description:
      "Sessões no consultório em São Paulo, com ambiente acolhedor e planejado para seu conforto e privacidade.",
    features: [
      "Ambiente privativo e acolhedor",
      "Localização central de fácil acesso",
      "Estacionamento nas proximidades",
      "Disponibilidade de horários variados",
    ],
  },
};

export const differentiators = [
  {
    title: "Formação Acadêmica",
    description:
      "Graduação em Psicologia pela Universidade Cruzeiro do Sul (UNICSUL) e pós-graduação em Clínica Psicanalítica na Atualidade pela PUC Minas (em andamento).",
    icon: "GraduationCap",
  },
  {
    title: "Especializações",
    description:
      "Pós-graduação em Clínica Psicanalítica na Atualidade (PUC Minas) e experiência em intervenção ABA para TEA.",
    icon: "BookOpen",
  },
  {
    title: "Registro Profissional",
    description: "CRP-SP ativo e regular — Psicóloga registrada no Conselho Regional",
    icon: "ShieldCheck",
  },
  {
    title: "Formação Continuada",
    description: "Participação em congressos, cursos e supervisão clínica regular",
    icon: "Award",
  },
];

export const testimonials = [
  {
    text: "Encontrei um espaço de escuta acolhedor e sem julgamentos. Ao longo do processo terapêutico, consegui compreender melhor minhas emoções e enfrentar desafios com mais segurança.",
    author: "Paciente A.",
  },
  {
    text: "Desde o primeiro atendimento me senti respeitado e acolhido. A terapia tem sido fundamental para meu processo de autoconhecimento.",
    author: "Paciente B.",
  },
  {
    text: "A atenção, o cuidado e o profissionalismo fizeram toda a diferença. Cada sessão contribuiu para que eu enxergasse novas possibilidades para minha vida.",
    author: "Paciente C.",
  },
  {
    text: "Foi minha primeira experiência com terapia e me senti muito confortável durante todo o processo. Recomendo pelo acolhimento e pela escuta atenta.",
    author: "Paciente D.",
  },
];

export const testimonialNotice =
  "Os depoimentos foram autorizados pelos pacientes, com identidade preservada, respeitando o sigilo profissional conforme o Código de Ética do Psicólogo (Resolução CFP nº 010/05).";

export const faqItems = [
  {
    question: "Quanto tempo dura cada sessão?",
    answer:
      "Cada sessão tem duração média de 45 a 50 minutos. Esse tempo é planejado para que possamos trabalhar o conteúdo da sessão de forma produtiva, sem pressa, mas mantendo o foco terapêutico.",
  },
  {
    question: "Com que frequência devo fazer terapia?",
    answer:
      "A frequência recomendada é de uma sessão por semana, especialmente no início do processo. Conforme a evolução do tratamento, podemos ajustar para sessões quinzenais. A regularidade é fundamental para o sucesso terapêutico.",
  },
  {
    question: "A primeira sessão é diferente das demais?",
    answer:
      "Sim. A primeira sessão é uma entrevista inicial, onde vamos nos conhecer, entender suas principais demandas, histórico e expectativas. Também esclareço como funciona o processo terapêutico, a abordagem utilizada e respondo a todas as suas dúvidas.",
  },
  {
    question: "Como funciona o atendimento online?",
    answer:
      "O atendimento online é realizado por videochamada (Google Meet), em ambiente sigiloso e seguro. Você precisa de um dispositivo com câmera, microfone e conexão estável com a internet. A eficácia é equivalente à do atendimento presencial.",
  },
  {
    question: "Aceita convênios ou planos de saúde?",
    answer:
      "Não realizo atendimento por convênio. Ofereço valores acessíveis e, mediante solicitação, forneço recibo para reembolso junto ao seu plano de saúde, caso ele cubra sessões de psicologia.",
  },
  {
    question: "Qual a diferença entre as abordagens terapêuticas?",
    answer:
      "Cada abordagem tem suas particularidades. A TCC (Terapia Cognitivo-Comportamental) foca na relação entre pensamentos, emoções e comportamentos, trabalhando de forma estruturada e prática. Na primeira sessão, explico detalhadamente como trabalho e esclareço todas as suas dúvidas.",
  },
  {
    question: "Como é garantido o sigilo das sessões?",
    answer:
      "O sigilo profissional é um dos pilares da ética na psicologia. Todas as informações compartilhadas nas sessões são confidenciais, protegidas pelo Código de Ética do Psicólogo. As exceções legais são restritas a situações de risco iminente, previstas em lei.",
  },
];

export const footer = {
  copyright: `© ${new Date().getFullYear()} ${psychologist.name}. Todos os direitos reservados.`,
  ethicsNote:
    "Este site segue as diretrizes do Código de Ética Profissional do Psicólogo (Resolução CFP nº 010/05).",
  privacyUrl: "#",
  termsUrl: "#",
};
