/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import {
  ActivityIcon,
  ChartBar,
  CheckCheck,
  ClipboardPlus,
  CogIcon,
  DollarSign,
  Eye,
  Heart,
  Info,
  MousePointerClickIcon,
  Presentation,
  Send,
  ShieldCheckIcon,
  SlackIcon,
  TicketCheck,
  TrendingUpDown,
  Users,
} from 'lucide-react'
import { ReactNode, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface ReportsProps {
  title: string
  description: string
  icon: ReactNode
}

const reports: ReportsProps[] = [
  {
    title: 'Relatórios Anuais',
    description:
      'Acompanhe nossos resultados e veja como suas contribuições estão transformando vidas e comunidades.',
    icon: <ClipboardPlus className="size-5 text-violet-600" />,
  },
  {
    title: 'Auditorias Independentes',
    description:
      'A garantia de que nossos processos e a aplicação de recursos sempre serão realizados com integridade e eficiência.',
    icon: <Presentation className="size-5 text-violet-600" />,
  },
  {
    title: 'Certificações',
    description:
      'Nossa certificação como OSCIP reforça nosso compromisso com a transparência e a responsabilidade social.',
    icon: <TicketCheck className="size-5 text-violet-600" />,
  },
]

export function HowToSupport() {
  const { hash } = useLocation()

  const refBanner: any = useRef()
  const refCompanies: any = useRef()
  const refEncouraging: any = useRef()
  const refDrivers: any = useRef()
  const refInstitutionalPartners: any = useRef()
  const refVolunteersAndMentors: any = useRef()

  const refAnnualReports: any = useRef()

  useEffect(() => {
    if (hash === '') {
      window.scroll({
        top: refBanner.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#empresas') {
      window.scroll({
        top: refCompanies.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#incentivadoras') {
      window.scroll({
        top: refEncouraging.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#impulsionadoras') {
      window.scroll({
        top: refDrivers.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#parceiros-institucionais') {
      window.scroll({
        top: refInstitutionalPartners.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#voluntarios-e-mentores') {
      window.scroll({
        top: refVolunteersAndMentors.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#relatorios-anuais') {
      window.scroll({
        top: refAnnualReports.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#auditorias-e-certificacoes') {
      window.scroll({
        top: refAnnualReports.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#governanca-e-compliance') {
      window.scroll({
        top: refAnnualReports.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }
  }, [hash])

  return (
    <main>
      {/* Seção de banner */}
      <section
        ref={refBanner}
        className="py-10 h-[45rem] bg-[url(/portoHack-00.jpg)] bg-no-repeat bg-center bg-cover pt-24"
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto px-4">
            <span className="bg-violet-600 border-4 border-violet-700 text-white px-4 rounded-full animate-bounce py-1 text-sm md:text-md flex items-center">
              <Heart className="size-4 mr-2 fill-white" />
              Como Apoiar
            </span>

            <h1 className="text-xl text-center md:text-5xl font-semibold text-white mt-3">
              Juntos, podemos <br /> transformar vidas e comunidades
            </h1>

            <p className="text-md md:text-lg text-zinc-300 mt-2 max-w-xl text-center">
              Descubra as diversas formas de apoiar o Instituto AmiGU e fazer
              parte de uma rede de impacto social que está mudando o Brasil e o
              mundo.{' '}
            </p>
          </div>
        </div>
      </section>

      {/* Seção CTA + Junte-se à comunidade AmiGU */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Junte-se à comunidade sou AmiGU
            </h1>
            <p className="text-zinc-300">
              Junte-se à comunidade Sou AmiGU e faça parte dessa transformação!
            </p>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Saiba mais
          </Link>
        </div>
      </section>

      {/* Seção de empresas mantenedoras */}
      <section
        ref={refCompanies}
        className="py-10 md:py-20 bg-zinc-900 bg-background bg-center bg-cover bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16 items-center">
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-2xl w-full md:w-auto sm:text-3xl md:text-center md:text-4xl font-semibold text-zinc-50">
              Empresas parceiras: <br /> Faça parte da transformação social
            </h2>
            <p className="text-justify md:text-center text-zinc-300 max-w-3xl">
              As empresas são peças fundamentais na engrenagem de transformação
              do Instituto AmiGU. Oferecemos diversas formas de parceria que
              permitem às empresas contribuírem diretamente para os nossos
              projetos, obtendo benefícios em visibilidade, impacto social e
              conexão com novos talentos.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <div className="flex-1 md:sticky md:top-[350px]">
              <span className="text-violet-500 text-sm font-semibold uppercase ">
                Mantenedoras
              </span>
              <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 tracking-tight">
                Empresas Mantenedoras: <br /> Construa Impacto com Grandes
                Números
              </h2>

              <p className="text-zinc-400 text-lg text-justify mt-4">
                As Empresas Mantenedoras são aquelas que compartilham nossa
                visão de transformação em larga escala e estão comprometidas em
                investir no crescimento de longo prazo de nossas iniciativas. Ao
                se tornar uma Mantenedora, sua empresa não apenas contribui para
                projetos que impactam milhares de vidas, mas também se associa a
                uma marca reconhecida por sua responsabilidade social e
                inovação.
              </p>

              <Button
                size="lg"
                className="bg-emerald-500 w-full md:w-auto hover:bg-emerald-500/80 mt-4 transition-all flex items-center gap-2 text-white"
              >
                <MousePointerClickIcon className="text-white size-5" />
                Ser uma mantedora
              </Button>
            </div>

            <div className="flex-1 ">
              <div className="flex flex-col items-center gap-8">
                <h2 className="text-3xl text-white font-semibold">
                  Benefícios
                </h2>
                <div className="md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-violet-500 font-medium">
                    Visibilidade e Reconhecimento
                  </h2>
                  <p className="text-zinc-300 mt-2 leading-relaxed sm:text-lg">
                    Participe de nossas maratonas e crie um portfólio que fará
                    você ser visto pelo mercado de outra forma.
                  </p>
                </div>
                <div className="md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-violet-500 font-medium">
                    Parceria Estratégica
                  </h2>
                  <p className="text-zinc-300 mt-2 leading-relaxed sm:text-lg">
                    Participação ativa na co-criação e planejamento de novos
                    projetos, alinhados aos interesses e valores de sua empresa.
                  </p>
                </div>
                <div className="md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-violet-500 font-medium">
                    Relatórios Personalizados
                  </h2>
                  <p className="text-zinc-300 mt-2 leading-relaxed sm:text-lg">
                    Acesso a relatórios detalhados de impacto, mostrando como
                    sua contribuição está sendo utilizada e os resultados
                    alcançados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de empresas incentivadoras */}
      <section
        ref={refEncouraging}
        className="py-10 md:py-20 border-t border-b bg-zinc-900 bg-background bg-center bg-cover bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16 items-center">
          <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-start">
            <div className="flex-1 md:sticky md:top-[350px]">
              <span className="text-violet-500 text-sm font-semibold uppercase">
                Incentivadoras
              </span>

              <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 tracking-tight">
                Empresas Incentivadoras: <br /> Invista em Inovação e Talentos
              </h2>

              <p className="text-zinc-400 text-lg text-justify mt-4">
                As Empresas Incentivadoras contribuem diretamente para a
                realização de eventos como a Maratona Um Porto para o Futuro e
                projetos de inovação, ajudando a identificar e capacitar
                talentos em comunidades carentes. Ao apoiar esses eventos, sua
                empresa não só investe em soluções inovadoras, mas também em
                pessoas que podem se tornar parte de sua equipe.
              </p>

              <Button
                size="lg"
                className="bg-emerald-500 w-full md:w-auto hover:bg-emerald-500/80 mt-4 transition-all flex items-center gap-2 text-white"
              >
                <MousePointerClickIcon className="text-white size-5" />
                Ser uma incentivadora
              </Button>
            </div>

            <div className="flex-1 ">
              <div className="flex flex-col items-center gap-8">
                <div className=" relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-violet-500 font-medium">
                    Acesso a Talentos
                  </h2>
                  <p className="text-zinc-300 mt-2 leading-relaxed sm:text-lg">
                    Identificação e conexão com jovens altamente capacitados e
                    inovadores, preparados para enfrentar os desafios do
                    mercado.
                  </p>
                </div>
                <div className="relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-violet-500 font-medium">
                    Impacto Social Direto
                  </h2>
                  <p className="text-zinc-300 mt-2 leading-relaxed sm:text-lg">
                    Sua empresa estará promovendo a transformação digital e
                    social em comunidades que mais precisam.
                  </p>
                </div>
                <div className="relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-violet-500 font-medium">
                    Networking
                  </h2>
                  <p className="text-zinc-300 mt-2 leading-relaxed sm:text-lg">
                    Oportunidade de se conectar com outras empresas e
                    instituições que compartilham os mesmos valores e objetivos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de empresas impulsionadoras */}
      <section
        ref={refDrivers}
        className="py-10 md:py-20 bg-zinc-900 bg-background bg-center bg-cover bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16 items-center">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <div className="flex-1 md:sticky md:top-[350px]">
              <span className="text-violet-500 text-sm font-semibold uppercase">
                Impulsionadoras
              </span>

              <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 tracking-tight">
                Empresas Impulsionadoras: <br /> Patrocine Projetos que Fazem a
                Diferença
              </h2>

              <p className="text-zinc-400 text-lg text-justify mt-4">
                As Empresas Impulsionadoras são aquelas que optam por patrocinar
                projetos específicos do Instituto AmiGU, contribuindo com
                recursos financeiros ou expertise técnica. Este modelo de apoio
                é ideal para empresas que desejam um envolvimento mais pontual,
                mas ainda assim impactante.
              </p>

              <Button
                size="lg"
                className="bg-emerald-500 w-full md:w-auto hover:bg-emerald-500/80 mt-4 transition-all flex items-center gap-2 text-white"
              >
                <MousePointerClickIcon className="text-white size-5" />
                Ser uma mantedora
              </Button>
            </div>

            <div className="flex-1 ">
              <div className="flex flex-col items-center gap-8">
                <div className="md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-violet-500 font-medium">
                    Flexibilidade
                  </h2>
                  <p className="text-zinc-300 mt-2 leading-relaxed sm:text-lg">
                    Escolha patrocinar o projeto que mais se alinha com os
                    valores e objetivos da sua empresa.
                  </p>
                </div>
                <div className="md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-violet-500 font-medium">
                    Visibilidade
                  </h2>
                  <p className="text-zinc-300 mt-2 leading-relaxed sm:text-lg">
                    Destaque como patrocinadora em eventos, materiais de
                    divulgação e mídias sociais, fortalecendo a imagem da sua
                    marca como uma empresa socialmente responsável.
                  </p>
                </div>
                <div className="md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-violet-500 font-medium">
                    Resultados Concretos
                  </h2>
                  <p className="text-zinc-300 mt-2 leading-relaxed sm:text-lg">
                    Acompanhe de perto o impacto do seu patrocínio, com
                    relatórios detalhados e histórias de sucesso das comunidades
                    beneficiadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de parceiros institucionais */}
      <section
        ref={refInstitutionalPartners}
        className="py-10 md:py-20 border-t bg-zinc-900 bg-background bg-center bg-cover bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16 items-start">
          <div className="bg-zinc-800 gap-10 md:gap-20 border-2 border-zinc-700 p-5 sm:p-10 rounded-md flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h2 className="text-xl md:text-3xl font-semibold text-zinc-50">
                Parceiros Institucionais: <br /> Construindo Pontes para o
                Futuro
              </h2>

              <p className="mt-4 text-justify md:text-left text-zinc-300 font-light leading-relaxed text-sm sm:text-md md:text-lg">
                Os Parceiros Institucionais desempenham um papel crucial na
                realização dos grandes objetivos do Instituto AmiGU,
                especialmente naqueles relacionados ao desenvolvimento
                sustentável e à inclusão digital. Juntos, podemos construir
                pontes entre diferentes setores, criando atalhos seguros para a
                concretização dos nossos 'big numbers' e objetivos de impacto
                social.
              </p>
            </div>

            <div className="flex-1 flex flex-col items-start justify-start gap-5">
              <h2 className="text-3xl text-white font-semibold mb-3">
                Benefícios
              </h2>
              <div className="border-b-2 border-zinc-700 pb-5 w-full">
                <h2 className="text-xl text-violet-500">
                  Alinhamento de Propósitos
                </h2>
                <p className="text-zinc-300 max-w-lg text-justify md:text-left">
                  Parcerias estratégicas com organizações que compartilham nossa
                  visão, permitindo a criação de sinergias que aceleram a
                  transformação social.
                </p>
              </div>

              <div className="border-b-2 border-zinc-700 pb-5 w-full">
                <h2 className="text-xl text-violet-500">
                  Cooperação em Projetos
                </h2>
                <p className="text-zinc-300 max-w-lg text-justify md:text-left">
                  Colaboração na concepção, desenvolvimento e execução de
                  projetos que atendem às necessidades específicas das
                  comunidades alvo do Instituto.
                </p>
              </div>

              <div className="border-b-2 border-zinc-700 pb-5 w-full">
                <h2 className="text-xl text-violet-500">
                  Ampliação de Impacto
                </h2>
                <p className="text-zinc-300 max-w-lg text-justify md:text-left">
                  Possibilidade de ampliar o alcance e a eficácia das ações do
                  Instituto, utilizando a expertise e os recursos dos parceiros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Saiba mais sobre <br /> como se tornar um parceiro
            </h1>
            <p className="text-zinc-300">
              Descubra como fazer parte da nossa rede de parceiros!
            </p>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Torne-se
          </Link>
        </div>
      </section>

      <section
        ref={refVolunteersAndMentors}
        className="py-10 md:py-20 bg-zinc-900 bg-background bg-center bg-cover bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16 items-start">
          <div className="w-full space-y-3 flex flex-col text-center items-center">
            <h2 className="text-2xl w-full md:w-auto sm:text-3xl md:text-center md:text-4xl font-semibold text-zinc-50">
              <span className="text-violet-500">Voluntários</span> e{' '}
              <span className="text-emerald-500">Mentores</span>: <br /> Seja a
              Mão que Transforma
            </h2>
            <p className="text-justify md:text-center text-zinc-300 max-w-3xl">
              Como voluntário ou mentor no Instituto AmiGU, você pode
              compartilhar seu conhecimento, tempo e habilidades para
              transformar a vida de jovens e adultos em situação de
              vulnerabilidade. Seja orientando no desenvolvimento de habilidades
              técnicas e socioemocionais, ou contribuindo com suporte
              operacional, sua participação é essencial para o sucesso de nossos
              projetos.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            <div className="flex-1 flex flex-col items-start">
              <span className="text-violet-500 text-sm font-semibold uppercase ">
                Voluntários
              </span>
              <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 tracking-tight">
                Voluntários: Construa Impacto, <br /> Um Passo de Cada Vez
              </h2>
              <p className="text-zinc-400 text-lg text-justify mt-4">
                Os voluntários do Instituto AmiGU desempenham um papel vital,
                apoiando em diversas frentes, desde o suporte em eventos até a
                capacitação de jovens em habilidades essenciais para o mercado
                de trabalho. Seja qual for a sua área de atuação, há sempre uma
                forma de contribuir.
              </p>

              <div className="flex items-start flex-col gap-4 mt-10">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  Oportunidades de Voluntariado
                </h2>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-violet-500 rounded-md">
                    <CogIcon className="size-9 text-zinc-50 " />
                  </div>
                  <div>
                    <h2 className="text-zinc-50 text-xl">Apoio Operacional</h2>
                    <p className="text-zinc-300 text-xs">
                      Ajude na organização e execução dos nossos eventos,
                      garantindo que tudo ocorra de forma eficiente e
                      impactante.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-violet-500 rounded-md">
                    <SlackIcon className="size-9 text-zinc-50" />
                  </div>
                  <div>
                    <h2 className="text-zinc-50 text-xl">Capacitação</h2>
                    <p className="text-zinc-300 text-xs">
                      Contribua com oficinas, treinamentos e workshops que
                      ofereçam novas habilidades a jovens e adultos em situação
                      de vulnerabilidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-violet-500 rounded-md">
                    <Users className="size-9 text-zinc-50" />
                  </div>
                  <div>
                    <h2 className="text-zinc-50 text-xl">
                      Engajamento Comunitário
                    </h2>
                    <p className="text-zinc-300 text-xs">
                      Participe de ações diretas nas comunidades, promovendo
                      inclusão e oferecendo suporte onde é mais necessário.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-start">
              <span className="text-emerald-500 text-sm font-semibold uppercase ">
                Mentores
              </span>
              <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 tracking-tight">
                Mentores: Inspire e <br /> Capacite a Próxima Geração
              </h2>
              <p className="text-zinc-400 text-lg text-justify mt-4">
                Ser mentor no Instituto AmiGU é uma oportunidade única de
                compartilhar sua experiência e conhecimento com jovens que
                buscam orientação para transformar suas vidas e carreiras. Seu
                papel como mentor vai além do ensino – você será um guia, um
                exemplo e uma fonte de inspiração.
              </p>

              <div className="flex items-start flex-col gap-4 mt-10">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  Oportunidades de Mentoria
                </h2>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500 rounded-md">
                    <ShieldCheckIcon className="size-9 text-zinc-50 " />
                  </div>
                  <div>
                    <h2 className="text-zinc-50 text-xl">
                      Habilidades Técnicas
                    </h2>
                    <p className="text-zinc-300 text-xs">
                      Oriente jovens em áreas como tecnologia, análise de dados,
                      marketing digital, e gestão de projetos.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500 rounded-md">
                    <ActivityIcon className="size-9 text-zinc-50" />
                  </div>
                  <div>
                    <h2 className="text-zinc-50 text-xl">
                      Desenvolvimento Socioemocional
                    </h2>
                    <p className="text-zinc-300 text-xs">
                      Ajude a desenvolver habilidades como resiliência,
                      inteligência emocional e liderança.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500 rounded-md">
                    <TrendingUpDown className="size-9 text-zinc-50" />
                  </div>
                  <div>
                    <h2 className="text-zinc-50 text-xl">
                      Carreira e Empreendedorismo
                    </h2>
                    <p className="text-zinc-300 text-xs">
                      Apoie jovens a descobrir suas paixões, desenvolver suas
                      carreiras e lançar seus próprios empreendimentos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Saiba mais sobre como <br /> se tornar um voluntário ou mentor
            </h1>
            <p className="text-zinc-300 mt-2">
              Entenda como contribuir com seu tempo e experiência!
            </p>
          </div>

          <div className="flex flex-col md:flex-row mt-4 md:mt-0 items-center gap-4 w-full md:w-auto">
            <Link
              to="https://api.whatsapp.com/send?phone=1340420740"
              target="_blank"
              title="Clique aqui!"
              className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-violet-500 text-white hover:bg-violet-600 rounded-md border-violet-800"
            >
              <CheckCheck className="size-4 mr-2" />
              Quero me tornar um voluntário
            </Link>

            <Link
              to="https://api.whatsapp.com/send?phone=1340420740"
              target="_blank"
              title="Clique aqui!"
              className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
            >
              <CheckCheck className="size-4 mr-2" />
              Quero me tornar um mentor
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 py-10 md:py-20 bg-background bg-center bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-start gap-4">
            <div>
              <span className="text-violet-500 text-sm font-semibold uppercase ">
                Embaixadores e Embaixadoras
              </span>
              <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 tracking-tight">
                Amplifique nossa voz e impacto
              </h2>
            </div>
            <p className="text-zinc-400 text-lg text-justify">
              Os Embaixadores e Embaixadoras do Instituto AmiGU são líderes que
              compartilham nossa missão e têm o poder de amplificar nossa voz,
              levando nossa mensagem a novos públicos e criando conexões
              valiosas. Como Embaixador ou Embaixadora, você terá a oportunidade
              de representar o Instituto em eventos, criar conteúdo relevante e
              conectar o Instituto com novas oportunidades de parceria e apoio.
            </p>
          </div>

          <div className="flex-1 w-full flex flex-col items-center justify-center gap-5 md:gap-10">
            <div className="w-full hover:scale-[.97] transition-all flex flex-col items-start justify-center px-5 py-5 rounded-xl bg-zinc-900 border-4 border-zinc-800 backdrop-blur-lg">
              <div className="hidden md:block bg-zinc-800 p-3 rounded-full absolute -left-5 -top-5">
                <Eye className="size-4" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-300 md:mt-3">
                Visibilidade e Protagonismo
              </h2>
              <p className="text-zinc-300">
                Seja a voz do Instituto AmiGU em eventos nacionais e
                internacionais, aumentando sua visibilidade e a nossa.
              </p>
            </div>

            <div className="w-full hover:scale-[.97] transition-all flex flex-col items-start justify-center px-5 py-5  rounded-xl  bg-zinc-900 border-4 border-zinc-800 backdrop-blur-lg">
              <div className="hidden md:block bg-zinc-800 p-3 rounded-full absolute -left-5 -top-5">
                <DollarSign className="size-4" />
              </div>
              <h2 className="text-xl font-semibold text-white md:mt-3">
                Networking Exclusivo
              </h2>
              <p className="text-zinc-300">
                Acesse uma rede exclusiva de líderes, parceiros e
                influenciadores que compartilham a missão de transformar vidas.
              </p>
            </div>

            <div className="w-full hover:scale-[.97] transition-all flex flex-col items-start justify-center px-5 py-5 rounded-xl bg-zinc-900 border-4 border-zinc-800 backdrop-blur-lg">
              <div className="hidden md:block bg-zinc-800 p-3 rounded-full absolute -left-5 -top-5">
                <ChartBar className="size-4" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-300 md:mt-3">
                Impacto Real
              </h2>
              <p className="text-zinc-300">
                Contribua diretamente para o crescimento do Instituto, ajudando
                a expandir nosso alcance e impacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Saiba mais sobre como se <br /> tornar um embaixador ou
              embaixadora
            </h1>
            <p className="text-zinc-300 mt-3">
              Descubra como representar nossa causa com paixão!
            </p>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Torne-se
          </Link>
        </div>
      </section>

      <section
        ref={refAnnualReports}
        className="bg-zinc-900 py-10 border-zinc-800 border-y-2"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-2xl w-full md:w-auto sm:text-3xl md:text-center md:text-4xl font-semibold text-zinc-50">
              Transparência: <br /> Seu apoio faz a diferença
            </h2>
            <p className="text-justify md:text-center text-zinc-300 max-w-3xl">
              No Instituto AmiGU, valorizamos a confiança e a transparência em
              todas as nossas parcerias. Acreditamos que cada contribuição deve
              ser tratada com o máximo de responsabilidade, e por isso
              oferecemos relatórios detalhados e auditorias periódicas que
              mostram como os recursos são aplicados e quais os impactos
              gerados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5">
            {reports.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start gap-4 bg-zinc-800 p-7 rounded-md border border-zinc-700"
              >
                <div className="p-3 rounded-full bg-zinc-800 w-fit border-4 border-violet-950">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-xl text-white font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-zinc-300 text-justify mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Veja nossos relatórios e auditorias
            </h1>
            <p className="text-zinc-300">
              Explore nossos relatórios e análises detalhadas!
            </p>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Relatórios e auditorias
          </Link>
        </div>
      </section>

      {/* Seção de contato */}
      <section className="py-10 border-t-2 border-t-zinc-800 bg-zinc-900 bg-background bg-center bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="flex-1">
            <h1 className="md:mt-6 text-zinc-200 font-semibold text-3xl">
              Localização
            </h1>

            <p className="text-sm md:text-md mt-1 font-light text-zinc-300">
              Estamos localizado no endereço: <br /> Panorama Trade Center - R.
              Euclydes da Cunha, 11 - Sala 301 - Gonzaga, Santos - SP, 11065-100
            </p>

            <div className="relative">
              <iframe
                width="100%"
                height="450"
                loading="lazy"
                className="mt-5 rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.839040325162!2d-46.33709002433409!3d-23.96613127852372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce0329ba52b9ef%3A0xf5415b14cf2ca8a!2sInstituto%20AmiGU!5e0!3m2!1spt-BR!2sbr!4v1728329843918!5m2!1spt-BR!2sbr"
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="md:mt-6 text-zinc-200 font-semibold text-3xl">
              Contato
            </h1>
            <p className="text-sm sm:text-md mt-1 font-light text-zinc-300">
              Entre em contato conosco agora mesmo <br /> por meio do nosso
              e-mail.
            </p>

            <form method="post" className="w-full flex flex-col gap-4 mt-10">
              <div className="space-y-1">
                <Label className="text-zinc-500 text-sm">Nome completo</Label>
                <Input
                  type="text"
                  className="h-12"
                  placeholder="Digite seu nome completo..."
                />
              </div>

              <div className="space-y-1">
                <Label className="text-zinc-500 text-sm">
                  Endereço de e-mail
                </Label>
                <Input
                  type="text"
                  className="h-12"
                  placeholder="Digite seu endereço de e-mail..."
                />
              </div>

              <div className="space-y-1">
                <Label className="text-zinc-500 text-sm">
                  Telefone (Whatsapp)
                </Label>
                <Input
                  type="text"
                  className="h-12"
                  placeholder="Digite seu telefone..."
                />
              </div>

              <div className="space-y-1">
                <Label className="text-zinc-500 text-sm">Mensagem</Label>
                <Textarea
                  className="h-32 max-h-44 resize-y"
                  placeholder="Digite sua mensagem..."
                />
              </div>

              <div className="text-sm flex items-center gap-2 rounded-md">
                <div className="p-[2px] bg-yellow-100 border border-yellow-300 rounded-md">
                  <Info className="size-4" />
                </div>

                <span className="text-xs text-zinc-300">
                  Confirmo em compartilhar minhas informações com o Instituto
                  AmiGU.
                </span>
              </div>

              <Button
                type="submit"
                className="w-full mt-5 py-3 bg-violet-600 text-white rounded-md hover:bg-violet-500 transition-all"
              >
                <Send className="size-4 mr-2" />
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
