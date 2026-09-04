import { ServiceItem, TargetSegment, Differential, MethodologyStep } from '../types';

export const COMPANY_INFO = {
  name: 'Conectados Consultoria',
  tagline: 'Engenharia aplicada para ativos mais confiáveis, conectados e produtivos.',
  subheadline:
    'A Conectados Consultoria integra manutenção, monitoramento via IoT, automação, serviços elétricos e capacitação técnica para reduzir falhas, melhorar processos e aumentar a disponibilidade dos ativos.',
  concept:
    'Conectar competências, tecnologias e processos para ampliar as possibilidades de solução.',
  about:
    'A Conectados Consultoria nasceu com o propósito de conectar conhecimento técnico, tecnologia e gestão para desenvolver soluções eficientes e aplicáveis. Atuamos em manutenção, monitoramento de ativos via IoT, automação, elétrica e capacitação profissional, apoiando empresas na melhoria da confiabilidade, da segurança e do desempenho operacional.\n\nNossa atuação parte da análise real de cada necessidade. Integramos diferentes competências para reduzir interfaces, riscos e tempo de solução, entregando suporte técnico com clareza, responsabilidade e foco em resultados.',
  brandSymbolMeaning:
    'A marca utiliza um “C” integrado ao símbolo do infinito, representando conexão, integração e infinitas possibilidades de solução.',
  cnpj: '66.708.688/0001-77',
  email: 'comercial@conectados.eng.br',
  domain: 'conectados.eng.br',
  // Default WhatsApp placeholder number with DDD
  defaultWhatsappNumber: '5531999999999',
  defaultWhatsappDisplay: '+55 (31) 99999-9999',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'manutencao',
    title: 'Gestão de Manutenção',
    shortDescription:
      'Estruturação e melhoria da gestão de manutenção com foco em confiabilidade, disponibilidade, controle de custos e continuidade operacional.',
    fullDescription:
      'Estruturação e melhoria da gestão de manutenção com foco em confiabilidade, disponibilidade, controle de custos e continuidade operacional.',
    iconName: 'Wrench',
    highlightBadge: 'Confiabilidade & Disponibilidade',
    items: [
      'Diagnóstico da manutenção',
      'Estruturação de planos preventivos',
      'Apoio ao planejamento e controle da manutenção (PCM)',
      'Definição de rotinas e padrões operacionais',
      'Organização de indicadores e planos de ação',
      'Análise de falhas e causa raiz (RCA)',
      'Gestão estratégica de ativos',
      'Apoio técnico à manutenção corretiva, preventiva e preditiva',
      'Melhoria contínua da confiabilidade operacional',
    ],
  },
  {
    id: 'iot',
    title: 'Monitoramento de Ativos via IoT',
    shortDescription:
      'Soluções de monitoramento remoto para transformar dados de campo em informações úteis para a operação e a manutenção.',
    fullDescription:
      'Soluções de monitoramento remoto para transformar dados de campo em informações úteis para a operação e a manutenção.',
    iconName: 'Radio',
    highlightBadge: 'Telemetria & Indústria 4.0',
    items: [
      'Monitoramento remoto de equipamentos e instalações',
      'Instalação e integração de sensores industriais',
      'Telemetria industrial em tempo real',
      'Acompanhamento de níveis, temperatura, umidade, vibração, pressão, corrente e outras variáveis',
      'Dashboards personalizados para engenharia e operação',
      'Configuração inteligente de alarmes e notificações instantâneas',
      'Armazenamento e rastreamento de histórico de dados',
      'Comunicação por protocolos industriais e IoT (Modbus, MQTT, LoRaWAN, etc.)',
      'Integração entre dispositivos de campo, sistemas legados e plataformas em nuvem',
      'Apoio especializado à manutenção baseada em condição (CBM)',
    ],
    benefits: [
      'Identificação antecipada de anomalias',
      'Redução de paradas inesperadas',
      'Acompanhamento remoto e centralizado dos ativos',
      'Apoio à tomada de decisão rápida e baseada em dados',
      'Maior controle operacional das instalações',
      'Geração de histórico consolidado para análise de desempenho',
    ],
  },
  {
    id: 'automacao',
    title: 'Automação',
    shortDescription:
      'Soluções de automação desenvolvidas conforme a necessidade de cada instalação, desde o diagnóstico até a implantação e o suporte técnico.',
    fullDescription:
      'Soluções de automação desenvolvidas conforme a necessidade de cada instalação, desde o diagnóstico até a implantação e o suporte técnico.',
    iconName: 'Cpu',
    highlightBadge: 'Controle & Produtividade',
    items: [
      'Automação de máquinas e processos industriais',
      'Programação e integração de CLPs (Controladores Lógicos Programáveis)',
      'Desenvolvimento de sistemas supervisórios (SCADA / IHM)',
      'Instrumentação industrial e calibração',
      'Projetos e integração de redes industriais',
      'Telemetria e comunicação de campo',
      'Integração de equipamentos e linhas de produção',
      'Modernização e retrofit de sistemas existentes',
      'Montagem e reforma de painéis de comando e controle',
      'Diagnóstico avançado de falhas em automação',
      'Comissionamento em campo e suporte técnico especializado',
    ],
  },
  {
    id: 'eletrica',
    title: 'Serviços Elétricos',
    shortDescription:
      'Serviços elétricos executados com planejamento, segurança e conformidade com o escopo técnico e as normas aplicáveis.',
    fullDescription:
      'Serviços elétricos executados com planejamento, segurança e conformidade com o escopo técnico e as normas aplicáveis.',
    iconName: 'Zap',
    highlightBadge: 'Segurança & Normas Técnicas',
    items: [
      'Instalações elétricas industriais e prediais de grande porte',
      'Manutenção elétrica preventiva e corretiva',
      'Diagnóstico e correção ágil de falhas em sistemas de potência',
      'Montagem, adequação e testes de painéis elétricos',
      'Projetos de circuitos de comando e potência',
      'Parametrização de sistemas de proteção e controle',
      'Adequações elétricas conforme normas vigentes (NR-10, NBR-5410, NBR-14039)',
      'Inspeções técnicas e laudos de conformidade',
      'Modernização de instalações elétricas obsoletas',
      'Apoio técnico dedicado em obras e comissionamento',
      'Elaboração de soluções personalizadas conforme a necessidade do cliente',
    ],
  },
  {
    id: 'treinamentos',
    title: 'Treinamentos',
    shortDescription:
      'Capacitação técnica personalizada para desenvolver equipes mais seguras, preparadas e produtivas.',
    fullDescription:
      'Capacitação técnica personalizada para desenvolver equipes mais seguras, preparadas e produtivas. Os treinamentos podem ser desenvolvidos conforme a realidade, os equipamentos e os objetivos da empresa contratante.',
    iconName: 'GraduationCap',
    highlightBadge: 'Desenvolvimento de Equipes',
    items: [
      'Elétrica industrial e instalações',
      'Eletrônica aplicada',
      'Automação industrial e lógica de controle',
      'Instrumentação de campo e calibração',
      'Manutenção preventiva, preditiva e confiabilidade',
      'Interpretação e leitura de diagramas unifilares e funcionais',
      'Comandos elétricos e acionamento de motores',
      'Melhoria contínua e metodologias de produtividade',
      'Análise de falhas e metodologia de causa raiz',
      'Ferramentas técnicas e de gestão de manutenção',
    ],
  },
];

export const TARGET_AUDIENCE_DATA: TargetSegment[] = [
  {
    id: 'industrias',
    title: 'Indústrias',
    description: 'Manufatura, processos contínuos, química, alimentos, siderurgia e papel & celulose.',
    iconName: 'Factory',
  },
  {
    id: 'mineracao',
    title: 'Mineração',
    description: 'Ambientes severos que exigem alta disponibilidade e máxima confiabilidade de maquinário pesado.',
    iconName: 'Mountain',
  },
  {
    id: 'energia',
    title: 'Energia e Subestações',
    description: 'Geração, transmissão, distribuição de energia e infraestruturas de subestações de alta/média tensão.',
    iconName: 'Zap',
  },
  {
    id: 'facilities',
    title: 'Facilities e Infraestrutura',
    description: 'Condomínios industriais, hospitais, data centers, saneamento e grandes centros logísticos.',
    iconName: 'Building2',
  },
  {
    id: 'engenharia',
    title: 'Empresas de Engenharia',
    description: 'Parcerias técnicas em projetos, comissionamento e soluções complementares integradas.',
    iconName: 'Compass',
  },
  {
    id: 'integradores',
    title: 'Integradores',
    description: 'Apoio em automação, montagem de painéis, telemetria e soluções em IoT para projetos de terceiros.',
    iconName: 'Layers',
  },
  {
    id: 'construtoras',
    title: 'Construtoras',
    description: 'Instalações elétricas especiais, comissionamento e entrega técnica de obras de infraestrutura.',
    iconName: 'HardHat',
  },
  {
    id: 'prestadores',
    title: 'Prestadores de Serviços',
    description: 'Suporte técnico qualificado para empresas de manutenção e facilities terceirizadas.',
    iconName: 'Handshake',
  },
  {
    id: 'capacitacao',
    title: 'Empresas em Capacitação',
    description: 'Organizações que buscam elevar a segurança operacional e competência técnica de seu time.',
    iconName: 'Users',
  },
];

export const DIFFERENTIALS_DATA: Differential[] = [
  {
    id: 'consultivo',
    title: 'Atendimento técnico consultivo',
    description: 'Engenheiros e especialistas que entendem a fundo o seu processo antes de propor qualquer intervenção.',
    iconName: 'Headphones',
  },
  {
    id: 'personalizadas',
    title: 'Soluções personalizadas',
    description: 'Projetos desenhados sob medida para as restrições, normas e objetivos específicos de cada cliente.',
    iconName: 'Settings',
  },
  {
    id: 'integrada',
    title: 'Visão integrada entre engenharia, manutenção e operação',
    description: 'Conectamos o planejamento de engenharia com a rotina de quem opera e mantém os equipamentos no chão de fábrica.',
    iconName: 'Maximize2',
  },
  {
    id: 'pratica',
    title: 'Aplicação prática de tecnologia',
    description: 'Uso de IoT, telemetria e automação focado no retorno operacional real, sem complexidades desnecessárias.',
    iconName: 'Cpu',
  },
  {
    id: 'seguranca',
    title: 'Foco em segurança e confiabilidade',
    description: 'Rigoroso cumprimento de normas regulamentadoras e foco absoluto na integridade de pessoas e instalações.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'pessoas-processos',
    title: 'Integração entre pessoas, processos e ativos',
    description: 'Alinhamento dos procedimentos de trabalho com o treinamento do time e a tecnologia dos maquinários.',
    iconName: 'Workflow',
  },
  {
    id: 'acompanhamento',
    title: 'Acompanhamento próximo do cliente',
    description: 'Presença ativa, canal direto de comunicação e suporte contínuo durante e após a execução do serviço.',
    iconName: 'UserCheck',
  },
  {
    id: 'reducao-riscos',
    title: 'Soluções orientadas à redução de riscos, falhas e tempo de resposta',
    description: 'Ações preventivas estruturadas para evitar paradas inesperadas e garantir a continuidade operacional.',
    iconName: 'TrendingUp',
  },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: 1,
    title: 'Diagnóstico',
    description: 'Entendimento da necessidade, dos riscos e das condições da instalação.',
  },
  {
    step: 2,
    title: 'Planejamento',
    description: 'Definição da solução, do escopo técnico e das etapas de execução.',
  },
  {
    step: 3,
    title: 'Implementação',
    description: 'Execução dos serviços, integrações, instalações ou capacitações previstas.',
  },
  {
    step: 4,
    title: 'Acompanhamento',
    description: 'Validação dos resultados, orientações técnicas e suporte conforme o escopo contratado.',
  },
];
