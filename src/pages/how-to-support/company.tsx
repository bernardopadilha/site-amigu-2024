/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContactSection } from '@/components/contact-section'
import { Button } from '@/components/ui/button'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import {
  ArrowRight,
  ChartBar,
  ChevronsDownIcon,
  ChevronsUpIcon,
  ClipboardPlus,
  DollarSign,
  Eye,
  Link2,
  MousePointerClickIcon,
  Presentation,
  TicketCheck,
} from 'lucide-react'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

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
    icon: <ClipboardPlus className="size-5 text-violet-500" />,
  },
  {
    title: 'Auditorias Independentes',
    description:
      'A garantia de que nossos processos e a aplicação de recursos sempre serão realizados com integridade e eficiência.',
    icon: <Presentation className="size-5 text-violet-500" />,
  },
  {
    title: 'Certificações',
    description:
      'Nossa certificação como OSCIP reforça nosso compromisso com a transparência e a responsabilidade social.',
    icon: <TicketCheck className="size-5 text-violet-500" />,
  },
]

export function Company() {
  const refBanner: any = useRef()
  const refIncentivadoras: any = useRef()
  const refImpulsionadoras: any = useRef()
  const refEmbaixadores: any = useRef()
  const refTransparency: any = useRef()
  const refContact: any = useRef()

  const sections = [
    refBanner,
    refIncentivadoras,
    refImpulsionadoras,
    refEmbaixadores,
    refTransparency,
    refContact,
  ]

  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0)

  const scrollToSection = (index: number) => {
    const section = sections[index].current
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth',
      })
    }
  }

  const scrollToNextSection = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex((prevIndex) => prevIndex + 1)
    }
  }

  const scrollToPreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex((prevIndex) => prevIndex - 1)
    }
  }

  // Efetue o scroll sempre que o índice mudar
  useEffect(() => {
    scrollToSection(currentSectionIndex)
  }, [currentSectionIndex])

  return (
    <main className="py-10 pt-24">
      {/* Seção de empresas mantenedoras */}
      <section
        ref={refBanner}
        className="py-10 md:py-20 bg-background15 bg-cover bg-center bg-no-repeat border-b-2 border-zinc-700 "
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

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="flex-1 md:top-[350px]">
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
                className="bg-gradient-to-r from-blue-400 to-violet-500
                 w-full md:w-auto hover:bg-emerald-500/80 mt-4 transition-all flex items-center gap-2 text-white"
              >
                <MousePointerClickIcon className="text-white size-5" />
                Ser uma mantedora
              </Button>
            </div>

            <div className="flex-1 ">
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-3xl text-white font-semibold">
                  Benefícios
                </h2>
                <div className="md:ml-5 relative bg-gradient-to-r from-blue-400 to-violet-500 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-white font-medium">
                    Visibilidade e Reconhecimento
                  </h2>
                  <p className="text-zinc-100 mt-2 leading-relaxed sm:text-lg">
                    Participe de nossas maratonas e crie um portfólio que fará
                    você ser visto pelo mercado de outra forma.
                  </p>
                </div>
                <div className="md:ml-5 relative bg-gradient-to-r from-blue-400 to-violet-500 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-white font-medium">
                    Parceria Estratégica
                  </h2>
                  <p className="text-zinc-100 mt-2 leading-relaxed sm:text-lg">
                    Participação ativa na co-criação e planejamento de novos
                    projetos, alinhados aos interesses e valores de sua empresa.
                  </p>
                </div>
                <div className="md:ml-5 relative bg-gradient-to-r from-blue-400 to-violet-500 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-white font-medium">
                    Relatórios Personalizados
                  </h2>
                  <p className="text-zinc-100 mt-2 leading-relaxed sm:text-lg">
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
        ref={refIncentivadoras}
        className="py-10 md:py-20 bg-background16 bg-cover bg-center bg-no-repeat border-b-2 border-zinc-700 "
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16 items-center">
          <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-center">
            <div className="flex-1 md:top-[350px]">
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
                className="bg-gradient-to-r from-blue-400 to-violet-500
                 w-full md:w-auto hover:bg-emerald-500/80 mt-4 transition-all flex items-center gap-2 text-white"
              >
                <MousePointerClickIcon className="text-white size-5" />
                Ser uma incentivadora
              </Button>
            </div>

            <div className="flex-1 ">
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-3xl text-white font-semibold">
                  Benefícios
                </h2>

                <div className="relative bg-gradient-to-r from-blue-400 to-violet-500 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-white font-medium">
                    Acesso a Talentos
                  </h2>
                  <p className="text-zinc-100 mt-2 leading-relaxed sm:text-lg">
                    Identificação e conexão com jovens altamente capacitados e
                    inovadores, preparados para enfrentar os desafios do
                    mercado.
                  </p>
                </div>
                <div className="relative bg-gradient-to-r from-blue-400 to-violet-500 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-white font-medium">
                    Impacto Social Direto
                  </h2>
                  <p className="text-zinc-100 mt-2 leading-relaxed sm:text-lg">
                    Sua empresa estará promovendo a transformação digital e
                    social em comunidades que mais precisam.
                  </p>
                </div>
                <div className="relative bg-gradient-to-r from-blue-400 to-violet-500 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-white font-medium">Networking</h2>
                  <p className="text-zinc-100 mt-2 leading-relaxed sm:text-lg">
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
        ref={refImpulsionadoras}
        className="py-10 md:py-20 bg-background15 bg-cover bg-center bg-no-repeat border-b-2 border-zinc-700 "
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16 items-center">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="flex-1 md:top-[350px]">
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
                className="bg-gradient-to-r from-blue-400 to-violet-500
                 w-full md:w-auto mt-4 transition-all flex items-center gap-2 text-white"
              >
                <MousePointerClickIcon className="text-white size-5" />
                Ser uma mantedora
              </Button>
            </div>

            <div className="flex-1 ">
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-3xl text-white font-semibold">
                  Benefícios
                </h2>
                <div className="md:ml-5 relative bg-gradient-to-r from-blue-400 to-violet-500 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-white font-medium">
                    Flexibilidade
                  </h2>
                  <p className="text-zinc-100 mt-2 leading-relaxed sm:text-lg">
                    Escolha patrocinar o projeto que mais se alinha com os
                    valores e objetivos da sua empresa.
                  </p>
                </div>
                <div className="md:ml-5 relative bg-gradient-to-r from-blue-400 to-violet-500 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-white font-medium">
                    Visibilidade
                  </h2>
                  <p className="text-zinc-100 mt-2 leading-relaxed sm:text-lg">
                    Destaque como patrocinadora em eventos, materiais de
                    divulgação e mídias sociais, fortalecendo a imagem da sua
                    marca como uma empresa socialmente responsável.
                  </p>
                </div>
                <div className="md:ml-5 relative bg-gradient-to-r from-blue-400 to-violet-500 border-2 border-zinc-700 rounded-md p-5">
                  <h2 className="text-xl text-white font-medium">
                    Resultados Concretos
                  </h2>
                  <p className="text-zinc-100 mt-2 leading-relaxed sm:text-lg">
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
      {/* Seção Embaixadores e Embaixadoras */}
      <section
        ref={refEmbaixadores}
        className="bg-background17 bg-center bg-cover bg-no-repeat border-b-2 border-zinc-700 py-10 md:py-20"
      >
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
            <div className="w-full hover:scale-[.97] transition-all flex flex-col items-start justify-center px-5 py-5 rounded-xl bg-background17 bg-center bg-cover bg-no-repeat border-4 border-zinc-700 backdrop-blur-lg">
              <div className="hidden md:block border-2 bg-zinc-800 border-zinc-700 p-3 rounded-full absolute -left-5 -top-5">
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

            <div className="w-full hover:scale-[.97] transition-all flex flex-col items-start justify-center px-5 py-5  rounded-xl bg-background17 bg-center bg-cover bg-no-repeat border-4 border-zinc-700 backdrop-blur-lg">
              <div className="hidden md:block bg-zinc-800 border-2 border-zinc-700 p-3 rounded-full absolute -left-5 -top-5">
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

            <div className="w-full hover:scale-[.97] transition-all flex flex-col items-start justify-center px-5 py-5 rounded-xl bg-background17 bg-center bg-cover bg-no-repeat border-4 border-zinc-700 backdrop-blur-lg">
              <div className="hidden md:block bg-zinc-800 border-2 border-zinc-700 p-3 rounded-full absolute -left-5 -top-5">
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
      {/* CTA como se tornar um embaixador */}
      <section className="bg-gradient-to-r from-violet-500 to-blue-400">
        <div className="max-w-7xl mx-auto px-4 flex gap-2 flex-row items-center justify-center py-6">
          <img
            src="/rocket-logo.png"
            alt="foguete logo amigu"
            className="w-8"
          />
          <h1 className="text-lg md:text-xl text-zinc-50">
            Saiba mais sobre como se tornar um embaixador ou embaixadora
          </h1>
          <ArrowRight className="size-5" />
        </div>
      </section>
      {/* Seção Transparencia */}
      <section
        ref={refTransparency}
        className="bg-zinc-800 py-10 border-zinc-800 border-y-2"
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
                <div className="p-2 rounded-full bg-zinc-800 w-fit border-2 border-violet-500">
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

          <Link
            to="/transparencia"
            className="py-2 px-3 bg-violet-500 flex items-center gap-2 w-72 hover:brightness-90 rounded-md"
          >
            <Link2 className="size-5" />
            Confira nossos relatórios anuais
          </Link>
        </div>
      </section>
      {/* CTA Veja nossos relatórios e auditorias */}
      <Link to="/">
        <div className="bg-gradient-to-r from-violet-500 to-blue-400">
          <div className="max-w-7xl mx-auto px-4 flex gap-2 flex-row items-center justify-center py-6">
            <img
              src="/rocket-logo.png"
              alt="foguete logo amigu"
              className="w-8"
            />
            <h1 className="text-lg md:text-xl text-zinc-50">
              Veja nossos relatórios e auditorias
            </h1>
            <ArrowRight className="size-5" />
          </div>
        </div>
      </Link>
      {/* Seção de contato */}
      <div ref={refContact}>
        <ContactSection />
      </div>

      <div>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="w-9 h-9 fixed bottom-16 right-5"
                onClick={scrollToPreviousSection}
              >
                <ChevronsUpIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" align="center">
              <p>Seção anterior</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="w-9 h-9 fixed bottom-5 right-5"
                onClick={scrollToNextSection}
              >
                <ChevronsDownIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" align="center">
              <p>Próxima seção</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </main>
  )
}
