/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContactSection } from '@/components/contact-section'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import {
  ArrowRight,
  ArrowRightLeftIcon,
  ChevronsUpIcon,
  LibraryBigIcon,
  LockKeyholeIcon,
  QuoteIcon,
} from 'lucide-react'
import { ReactNode, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface SkillsCarouselProps {
  title: string
  description: string
}

interface InviteProps {
  title: string
  description: string
  icon: ReactNode
}

const skillsBasicsCarousel: SkillsCarouselProps[] = [
  {
    title: 'Oratória',
    description:
      'Comunicação clara e eficaz para apresentar ideias e persuadir.',
  },
  {
    title: 'Escrita',
    description:
      'Documentação e comunicação escrita eficaz para o ambiente profissional.',
  },
  {
    title: 'Persuasão',
    description:
      'Habilidade crucial para negociação e influência em contextos empresariais.',
  },
  {
    title: 'Matemática e Lógica',
    description: 'Base para a resolução de problemas e análise de dados.',
  },
  {
    title: 'Raciocínio Lógico',
    description:
      'Fundamental para o pensamento estruturado e solução de problemas complexos.',
  },
  {
    title: 'Educação Financeira',
    description:
      'Essencial para a gestão eficaz de recursos financeiros pessoais e empresariais.',
  },
  {
    title: 'Empreendedorismo',
    description:
      'Importante para identificar oportunidades e criar negócios sustentáveis.',
  },
]

const skillsTecnicalCarousel: SkillsCarouselProps[] = [
  {
    title: 'Alfabetização Digital',
    description:
      'Fundamental para operar e entender tecnologias digitais modernas.',
  },
  {
    title: 'Análise de Dados',
    description:
      'Essencial para interpretar dados e tomar decisões informadas.',
  },
  {
    title: 'IA Generativa',
    description:
      'Habilidade central para criar soluções inovadoras e eficientes usando IA.',
  },
  {
    title: 'Ética na IA',
    description:
      'Garantir o uso responsável e seguro da tecnologia em diferentes contextos.',
  },
]

const welcomingInvitation: InviteProps[] = [
  {
    title: 'Troca de Conhecimentos',
    description:
      'Seu conhecimento e experiência são inestimáveis para as jovens que estão começando suas carreiras. Seja compartilhando suas habilidades técnicas ou orientando em questões de desenvolvimento pessoal, sua contribuição terá um impacto duradouro.',
    icon: <ArrowRightLeftIcon className="size-5 text-violet-600 rotate-45" />,
  },
  {
    title: 'Um Espaço Seguro e Inspirador',
    description:
      'No AmiGU Delas, criamos um ambiente onde as mulheres são incentivadas a expressar suas ideias, compartilhar suas histórias e apoiar umas às outras. Aqui, cada mentora e especialista é vista como uma peça fundamental na construção de uma rede poderosa de mulheres que fazem a diferença.',
    icon: <LockKeyholeIcon className="size-5 text-violet-600" />,
  },
  {
    title: 'Crescimento Mútuo',
    description:
      'Ao se tornar uma mentora no AmiGU Delas, você também terá a oportunidade de crescer, aprendendo com outras mentoras e especialistas e expandindo sua própria rede profissional.',
    icon: <LibraryBigIcon className="size-5 text-violet-600" />,
  },
]

export function AmiGUResolv() {
  const { hash } = useLocation()
  const refBanner: any = useRef()
  const refAmiGuResolv: any = useRef()
  const refAmiGUDelas: any = useRef()

  useEffect(() => {
    if (hash === '') {
      window.scroll({
        top: refBanner.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#amigu-resolv') {
      window.scroll({
        top: refAmiGuResolv.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#amigu-delas') {
      window.scroll({
        top: refAmiGUDelas.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }
  }, [hash])

  return (
    <main>
      {/* Seção de banner */}
      <section
        ref={refBanner}
        className="py-10 h-[45rem] bg-zinc-700 bg-background4 bg-no-repeat bg-center bg-cover pt-28"
      >
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 justify-between w-full h-full">
          <div className="flex-1 flex flex-col items-start">
            <span className="text-violet-500 rounded-full text-lg flex items-center">
              Vidas e comunidades
            </span>

            <h1 className="text-xl md:text-4xl text-white mt-3">
              Projetos que transformam <br /> vidas e comunidades tecnológicas
            </h1>

            <p className="text-md md:text-lg text-zinc-300 mt-2 max-w-xl">
              Conheça as iniciativas do Instituto AmiGU que estão criando
              oportunidades, promovendo a inclusão digital e gerando impacto
              social sustentável.
            </p>
          </div>

          <div className="flex-1 w-full">
            <img
              alt="Imagem"
              src="/portoHack-286.jpg"
              className="aspect-video object-cover rounded-lg border-4 border-violet-500 z-10"
            />
          </div>
        </div>
      </section>

      {/* Seção CTA + Conheça nossos projetos */}
      <section className="bg-gradient-to-r from-blue-400 to-violet-500">
        <div className="max-w-7xl mx-auto px-4 flex md:flex-row items-center justify-center gap-2 py-6">
          <img
            src="/rocket-logo.png"
            alt="foguete logo amigu"
            className="w-8"
          />
          <h1 className="text-xl md:text-2xl text-zinc-50">
            Conheça nossos projetos
          </h1>
          <ArrowRight className="size-5" />
        </div>
      </section>

      {/* Seção AmiGU Resolv: Capacitando jovens e mentores para o futuro */}
      <section
        ref={refAmiGuResolv}
        className="bg-zinc-800 border-zinc-700 py-10 md:py-20 border-b-2 bg-background11 bg-center bg-cover bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-14">
            <div className="flex-1 w-full py-10">
              <img
                alt="Imagem"
                src="/resolv.png"
                className=" rounded-lg z-10"
              />
            </div>

            <div className="flex-1 flex flex-col items-start gap-4">
              <div>
                <span className="text-violet-500 text-sm font-semibold uppercase ">
                  Projeto AmiGU Resolv
                </span>
                <h2 className="text-3xl text-white mt-1 tracking-tight">
                  AmiGU Resolv: <br /> Capacitando jovens e mentores para o
                  futuro
                </h2>
              </div>
              <p className="text-zinc-300 text-lg text-justify">
                O AmiGU Resolv é um programa de mentorias que conecta jovens em
                situação de vulnerabilidade com mentores experientes,
                capacitando-os em um conjunto abrangente de habilidades
                técnicas, socioemocionais e de liderança. Este projeto é ideal
                para profissionais que desejam compartilhar seu conhecimento e
                fazer a diferença na vida de jovens talentos, ao mesmo tempo em
                que se conectam com uma rede de impacto social.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center gap-5">
              <h2 className="text-2xl w-full md:w-auto sm:text-3xl md:text-center md:text-4xl text-white">
                Habilidades ensinadas
              </h2>
              <p className="text-justify md:text-center text-lg text-zinc-300 max-w-3xl">
                Desenvolva competências para o futuro: habilidades essenciais
                que transformam sua capacidade de inovar, solucionar problemas e
                se destacar no mundo em constante evolução!
              </p>
            </div>

            <div className="w-full flex flex-col justify-center gap-20 mt-10">
              <div className="flex items-start flex-col">
                <h2 className="text-2xl text-white font-semibold">
                  Habilidades básicas:
                </h2>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 w-full gap-4">
                  {skillsBasicsCarousel.map((carousel, i) => (
                    <div
                      key={carousel.title}
                      className="border-none rounded-md overflow-hidden"
                    >
                      <Card className="border-0 rounded-lg overflow-hidden max">
                        <CardContent className="bg-zinc-800 h-[200px] flex h- px-4 py-10 border-4 border-zinc-700">
                          <div className="flex flex-col gap-6">
                            <div className="flex itens-end gap-2">
                              <span className="bg-violet-600 border-4 border-violet-800 font-bold text-white size-10 flex items-center justify-center rounded-full">
                                {i + 1}
                              </span>

                              <h2 className="text-2xl text-zinc-50 font-semibold">
                                {carousel.title}
                              </h2>
                            </div>

                            <p className="text-lg text-zinc-300">
                              {carousel.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start flex-col">
                <h2 className="text-2xl text-white font-semibold">
                  Habilidades técnicas:
                </h2>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 w-full gap-4">
                  {skillsTecnicalCarousel.map((carousel, i) => (
                    <div
                      key={carousel.title}
                      className="border-none rounded-md overflow-hidden"
                    >
                      <Card className="border-0 rounded-lg overflow-hidden max">
                        <CardContent className="bg-zinc-800 h-[200px] flex flex-col gap-4 px-4 py-10 border-4 border-zinc-700">
                          <div className="flex items-center gap-2">
                            <span className="w-10 h-10 bg-violet-600 border-4 border-violet-800 font-bold text-white flex items-center justify-center rounded-full">
                              {i + 1}
                            </span>

                            <h2 className="text-2xl text-zinc-50 font-semibold">
                              {carousel.title}
                            </h2>
                          </div>

                          <p className="text-lg text-zinc-300">
                            {carousel.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção AmiGU Delas */}
      <section
        ref={refAmiGUDelas}
        className="bg-background11 bg-center bg-cover bg-no-repeat  py-10 md:py-20 border-zinc-800 border-y-2"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-10">
          <div className="flex items-center flex-col-reverse md:flex-row justify-between gap-10">
            <div className="flex-1 flex flex-col items-start">
              <span className="text-violet-500 text-sm font-semibold uppercase ">
                AmiGU Delas
              </span>
              <h2 className="text-2xl w-full md:w-auto sm:text-3xl md:text-4xl text-zinc-50">
                Mentoras e especialistas: <br /> Junte-se a nós para inspirar a{' '}
                próxima geração de líderes
              </h2>
              <p className="mt-3 text-justify text-lg text-zinc-300 max-w-3xl">
                Como mentora ou especialista no AmiGU Delas, você terá a
                oportunidade única de impactar diretamente a vida de jovens
                mulheres em situação de vulnerabilidade. Seu conhecimento,
                experiência e paixão podem ser a chave para ajudar essas jovens
                a desbloquear seu potencial e se tornarem líderes em suas
                comunidades e setores.
              </p>
            </div>

            <div className="flex-1 w-full py-10">
              <img alt="Imagem" src="/delas.png" className=" rounded-lg z-10" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5">
            {welcomingInvitation.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start gap-4 bg-zinc-800 p-7 rounded-md border border-zinc-700"
              >
                <div className="p-3 rounded-full bg-zinc-800 w-fit border-2 border-violet-600">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-xl text-white font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-zinc-300  text-lg mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative max-w-7xl mx-auto px-4 flex flex-col justify-center text-justify md:text-left bg-gradient-to-r p-10 md:p-20 rounded-3xl from-blue-400 to-violet-600 transition-all">
            <h2 className="text-xl md:text-3xl text-white font-semibold">
              Liderança Feminina
            </h2>

            <p className="text-white text-xl font-medium mt-3">
              O AmiGU Delas coloca as mulheres no centro da transformação,
              oferecendo ferramentas e suporte para que elas possam liderar com
              confiança e inspirar outras ao longo do caminho.
            </p>

            <QuoteIcon className="absolute md:top-10 md:left-10 left-3 top-3 rotate-180 text-white fill-white" />
            <QuoteIcon className="hidden md:block absolute bottom-10 right-10 text-white fill-white" />
            <img
              src="/elipses.svg"
              alt="elipses"
              className="absolute top-0 right-0"
            />
          </div>

          <div className="bg-zinc-800 border-4 border-zinc-700 p-4 rounded-lg flex flex-col items-start gap-2 hover:scale-[100%] transition-all">
            <QuoteIcon className="text-violet-500 fill-violet-500" />

            <p className="text-lg text-zinc-300">
              Ser mentora no AmiGU Delas tem sido uma das experiências mais
              gratificantes da minha vida. Ver a evolução das jovens e saber que
              estou contribuindo para o crescimento delas é algo que me enche de
              orgulho e motivação.
            </p>

            <h2 className="text-zinc-500">
              {' '}
              - Cláudia, mentora no AmiGU Delas
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-5">
            <div className="flex-1 flex flex-col items-start gap-3">
              <div>
                <span className="text-violet-500 text-sm font-semibold uppercase">
                  Conexão com Outros Projetos
                </span>
                <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 tracking-tight">
                  Impacto Expandido: <br /> Como nossos projetos se conectam
                </h2>
              </div>
              <p className="text-lg text-zinc-300 text-justify md:text-left">
                Os jovens e mentores participantes do AmiGU Resolv são
                conectados com as pessoas e comunidades impactadas pela Maratona
                Um Porto para o Futuro e pelo Raíces Digitales. Isso garante que
                o impacto das mentorias se estenda para além do aprendizado,
                contribuindo diretamente para a transformação das vidas e
                negócios das pessoas beneficiadas por esses projetos.
              </p>
            </div>

            <div className="flex-1 flex flex-col items-start gap-3">
              <div>
                <span className="text-violet-500 text-sm font-semibold uppercase">
                  Engrenagem de Transformação
                </span>
                <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 tracking-tight">
                  Como eles se conectam: Formando <br /> uma rede de impacto
                  sustentável
                </h2>
              </div>
              <p className="text-lg text-zinc-300 text-justify md:text-left">
                O AmiGU Resolv é o motor que capacita jovens e mentores,
                preparando-os para atuar em outros projetos do Instituto AmiGU,
                como a Maratona Um Porto para o Futuro e o Raíces Digitales.
                Juntos, esses projetos formam uma engrenagem de transformação,
                onde cada iniciativa alimenta a outra, criando um impacto
                sustentável e duradouro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA Entre em contato */}
      <Link to="/maratonas/#contato">
        <div className="bg-gradient-to-r from-violet-500 to-blue-400">
          <div className="max-w-7xl mx-auto px-4 flex gap-2 flex-row items-center justify-center py-6">
            <img
              src="/rocket-logo.png"
              alt="foguete logo amigu"
              className="w-8"
            />
            <h1 className="text-xs md:text-xl text-zinc-50">
              Entre em contato conosco
            </h1>
            <ArrowRight className="size-5" />
          </div>
        </div>
      </Link>

      {/* Seção de contato */}
      <ContactSection />

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="fixed bottom-5 right-5"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ChevronsUpIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent asChild>
            <div className="flex flex-col gap-2 bg-primary mb-2 mr-5 border-zinc-600">
              <Button
                asChild
                className="bg-violet-500 hover:bg-violet-500/90 text-white"
              >
                <Link to={'/projetos/amigu-resolv#amigu-resolv'}>
                  AmiGU Resolv
                </Link>
              </Button>
              <Button
                asChild
                className="bg-violet-500 hover:bg-violet-500/90 text-white"
              >
                <Link to={'/projetos/amigu-resolv#amigu-delas'}>
                  Resolv Delas
                </Link>
              </Button>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </main>
  )
}
