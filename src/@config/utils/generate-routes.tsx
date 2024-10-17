interface SubRouteProps {
  url: string
  title: string
}

interface GenerateRoutesProps {
  url: string
  title: string
  subRoutes?: SubRouteProps[] | null
}

export const generateRoutes: GenerateRoutesProps[] = [
  {
    title: 'Página inicial',
    url: '/',
  },
  {
    title: 'Sobre nós',
    url: '/sobre',
    subRoutes: [
      {
        title: 'Missão e visão',
        url: '/sobre#missao-e-visao',
      },
      {
        title: 'Valores do instituto',
        url: '/sobre#valores-do-instituto',
      },
      {
        title: 'História e fundador',
        url: '/sobre#historia-e-fundador',
      },
      {
        title: 'Resultados e impactos',
        url: '/sobre#resultados-e-impactos',
      },
    ],
  },
  {
    title: 'I.A para o bem',
    url: '/ia-for-good',
    subRoutes: [
      {
        title: 'Iniciativas de IA para o bem',
        url: '/ia-for-good#iniciativas-de-ia-para-o-bem',
      },
      {
        title: 'Histórico de eventos e iniciativas',
        url: '/ia-for-good#historico-de-eventos-e-iniciativas',
      },
    ],
  },
  {
    title: 'Projetos',
    url: '/projetos',
    subRoutes: [
      {
        title: 'AmiGU Resolv',
        url: '/projetos#amigu-resolv',
      },
      {
        title: 'Maratona um porto para o futuro',
        url: '/projetos#maratona-um-porto-para-o-futuro',
      },
      {
        title: 'Raízes digitales',
        url: '/projetos#raices-digitales',
      },
    ],
  },
  {
    title: 'Como apoiar',
    url: '/como-apoiar',
    subRoutes: [
      {
        title: 'Empresas',
        url: '/como-apoiar/empresas',
      },
      {
        title: 'Parceiros institucionais',
        url: '/como-apoiar/parceiros-institucionais',
      },
      {
        title: 'Voluntários e mentores',
        url: '/como-apoiar/voluntarios-e-mentores',
      },
    ],
  },
  // {
  //   title: 'Transparência',
  //   url: '/como-apoiar#relatorios-anuais',
  //   subRoutes: [
  //     {
  //       title: 'Relatórios anuais',
  //       url: '/como-apoiar#relatorios-anuais',
  //     },
  //     {
  //       title: 'Auditorias e certificações',
  //       url: '/como-apoiar#auditorias-e-certificacoes',
  //     },
  //     {
  //       title: 'Governança e compliance',
  //       url: '/como-apoiar#governanca-e-compliance',
  //     },
  //   ],
  // },
  {
    title: 'Maratonas',
    url: '/maratonas',
    subRoutes: [
      {
        title: 'Linha do tempo de maratonas',
        url: '/maratonas#linha-do-tempo-de-maratonas',
      },
      {
        title: 'Resultados e edições anteriores',
        url: '/maratonas#resultados-e-edicoes-anteriores',
      },
    ],
  },
]
