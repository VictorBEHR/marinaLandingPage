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
  { value: "12+", label: "anos de atuação" },
  { value: "600+", label: "pacientes atendidos" },
  { value: "Pós em TCC", label: "Especialização" },
  { value: "CRP-SP", label: "Registro ativo" },
];

export const about = {
  paragraphs: [
    "Sou psicóloga clínica formada pela Universidade de São Paulo (USP) há mais de 12 anos. Minha trajetória profissional é marcada pelo compromisso com a ética, o acolhimento e a constante atualização técnica.",
    "Acredito que cada pessoa possui uma história única e que o processo terapêutico deve ser construído com respeito, empatia e colaboração. Minha abordagem principal é a Terapia Cognitivo-Comportamental (TCC), mas integro também técnicas de Terapia do Esquema e Mindfulness, adaptando o atendimento às necessidades específicas de cada paciente.",
  ],
  mission:
    "Oferecer um espaço seguro de escuta e transformação, onde cada pessoa possa desenvolver autoconhecimento e ferramentas para viver com mais plenitude.",
  values: ["Ética", "Acolhimento", "Respeito", "Confidencialidade", "Compromisso"],
  formation: "Graduação em Psicologia — USP",
  approach: "Terapia Cognitivo-Comportamental (TCC)",
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
    description: "Graduação pela USP e Pós-Graduação em Terapia Cognitivo-Comportamental",
    icon: "GraduationCap",
  },
  {
    title: "Especializações",
    description: "Formação em Terapia do Esquema, Mindfulness e Psicologia Positiva",
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
    text: "A terapia com a Dra. Maria Clara transformou minha relação com a ansiedade. Aprendi ferramentas que uso até hoje e me sinto muito mais preparada para lidar com os desafios do dia a dia.",
    author: "Paciente A., 34 anos",
  },
  {
    text: "Comecei a terapia buscando ajuda para um momento difícil e encontrei muito mais que isso. O acolhimento e a escuta atenta fizeram toda a diferença no meu processo.",
    author: "Paciente B., 28 anos",
  },
  {
    text: "Era minha primeira vez em terapia e fui recebida com muito cuidado e paciência. Cada sessão foi um espaço seguro para me entender melhor e crescer.",
    author: "Paciente C., 42 anos",
  },
  {
    text: "Depois de anos evitando procurar ajuda, finalmente dei o primeiro passo. A abordagem da Dra. Maria Clara me fez sentir confortável e compreendida desde o primeiro contato.",
    author: "Paciente D., 51 anos",
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
