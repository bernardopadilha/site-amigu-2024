/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import {
  ArrowRight,
  ArrowRightLeftIcon,
  Info,
  LibraryBigIcon,
  Link2,
  LockKeyholeIcon,
  QuoteIcon,
  Send,
} from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface ProjectsCarouselProps {
  title: string
  description: string
  buttonText: string
  href: string
}

type buttonActivProps = 'Mentores' | 'Empresas' | 'Parceiros institucionais'

type CompanyTrial = {
  title: string
  description: string
  icon: JSX.Element
  button: string
  href: string
}

type ContentData = {
  [key: string]: {
    title: string
    description: string
    companyTrials: CompanyTrial[]
  }
}

export function Home() {
  const buttonsTrials: buttonActivProps[] = [
    'Empresas',
    'Mentores',
    'Parceiros institucionais',
  ]
  const [buttonActiv, setButtonActiv] = useState<any>(buttonsTrials[0])
  // const { hash } = useLocation()

  const projectsCarousel: ProjectsCarouselProps[] = [
    {
      title: 'AmiGU Resolv',
      description:
        'Capacitando a próxima geração de líderes digitais. Participe como mentor ou jovem talento e veja seu impacto florescer.',
      buttonText: 'Saiba mais',
      href: '/projetos#amigu-resolv',
    },
    {
      title: 'Maratona um Porto para o Futuro',
      description:
        'Transformando a logística portuária com inovação e inclusão digital. Junte-se à maratona e crie soluções que impactam.',
      buttonText: 'Participe agora',
      href: '/projetos#maratona-um-porto-para-o-futuro',
    },
    {
      title: 'Raíces Digitales',
      description:
        'Empoderando mulheres empreendedoras e herdeiros de negócios tradicionais para o futuro digital. Descubra como participar.',
      buttonText: 'Explore o projeto',
      href: '/projetos#raices-digitales',
    },
  ]

  const refBanner: any = useRef()
  const refContact: any = useRef()

  // useEffect(() => {
  //   if (hash === '') {
  //     window.scroll({
  //       top: refBanner.current.offsetTop - 100,
  //       behavior: 'smooth',
  //     })
  //   }

  //   if (hash === '#contato') {
  //     window.scroll({
  //       top: refContact.current.offsetTop - 100,
  //       behavior: 'smooth',
  //     })
  //   }
  // }, [hash])

  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  }

  const contentData: ContentData = {
    Empresas: {
      title: 'Sua empresa pode ser a força que transforma',
      description:
        "No Instituto AmiGU, oferecemos várias formas de apoio para que sua empresa, instituição ou você, individualmente, possa contribuir com nosso propósito. Cada tipo de apoio é fundamental para alcançar nossos 'big numbers' e garantir que nossas ações cheguem a quem mais precisa.",
      companyTrials: [
        {
          title: 'Empresas Mantenedoras',
          description:
            'Seja uma empresa que faz a diferença em grande escala. Junte-se a nós como Mantenedora e ajude a transformar vidas com visibilidade e impacto.',
          icon: (
            <ArrowRightLeftIcon className="size-5 text-violet-600 rotate-45" />
          ),
          button: 'Saiba Como',
          href: '/',
        },
        {
          title: 'Empresas Incentivadoras',
          description:
            'Contrate nossos projetos e contribua diretamente para a inovação e inclusão social. Suporte que gera resultados.',
          icon: <LockKeyholeIcon className="size-5 text-violet-600" />,
          button: 'Contrate Nossos Projetos',
          href: '/',
        },
        {
          title: 'Empresas Impulsionadoras',
          description:
            'Patrocine um projeto ou evento específico e veja como sua contribuição pode criar mudanças significativas.',
          icon: <LibraryBigIcon className="size-5 text-violet-600" />,
          button: 'Patrocine Agora',
          href: '/',
        },
      ],
    },
    Mentores: {
      title: 'Sua empresa pode ser a força que transforma',
      description:
        "No Instituto AmiGU, oferecemos várias formas de apoio para que sua empresa, instituição ou você, individualmente, possa contribuir com nosso propósito. Cada tipo de apoio é fundamental para alcançar nossos 'big numbers' e garantir que nossas ações cheguem a quem mais precisa.",
      companyTrials: [
        {
          title: 'Mentores',
          description:
            'Seja uma empresa que faz a diferença em grande escala. Junte-se a nós como Mantenedora e ajude a transformar vidas com visibilidade e impacto.',
          icon: (
            <ArrowRightLeftIcon className="size-5 text-violet-600 rotate-45" />
          ),
          button: 'Saiba Como',
          href: '/',
        },
        {
          title: 'Mentores',
          description:
            'Contrate nossos projetos e contribua diretamente para a inovação e inclusão social. Suporte que gera resultados.',
          icon: <LockKeyholeIcon className="size-5 text-violet-600" />,
          button: 'Contrate Nossos Projetos',
          href: '/',
        },
        {
          title: 'Voluntários',
          description:
            'Patrocine um projeto ou evento específico e veja como sua contribuição pode criar mudanças significativas.',
          icon: <LibraryBigIcon className="size-5 text-violet-600" />,
          button: 'Patrocine Agora',
          href: '/',
        },
      ],
    },
    'Parceiros institucionais': {
      title: 'Sua empresa pode ser a força que transforma',
      description:
        "No Instituto AmiGU, oferecemos várias formas de apoio para que sua empresa, instituição ou você, individualmente, possa contribuir com nosso propósito. Cada tipo de apoio é fundamental para alcançar nossos 'big numbers' e garantir que nossas ações cheguem a quem mais precisa.",
      companyTrials: [
        {
          title: 'Empresas Mantenedoras',
          description:
            'Seja uma empresa que faz a diferença em grande escala. Junte-se a nós como Mantenedora e ajude a transformar vidas com visibilidade e impacto.',
          icon: (
            <ArrowRightLeftIcon className="size-5 text-violet-600 rotate-45" />
          ),
          button: 'Saiba Como',
          href: '/',
        },
        {
          title: 'Empresas Incentivadoras',
          description:
            'Contrate nossos projetos e contribua diretamente para a inovação e inclusão social. Suporte que gera resultados.',
          icon: <LockKeyholeIcon className="size-5 text-violet-600" />,
          button: 'Contrate Nossos Projetos',
          href: '/',
        },
        {
          title: 'Empresas Impulsionadoras',
          description:
            'Patrocine um projeto ou evento específico e veja como sua contribuição pode criar mudanças significativas.',
          icon: <LibraryBigIcon className="size-5 text-violet-600" />,
          button: 'Patrocine Agora',
          href: '/',
        },
      ],
    },
  }

  const { title, description, companyTrials } = contentData[buttonActiv]

  return (
    <main>
      {/* Seção de banner */}
      <section
        ref={refBanner}
        className="py-10 px-4 h-[40rem] md:h-[44rem] bg-background4 bg-no-repeat bg-fixed bg-cover pt-24 border-b-4 border-zinc-700"
      >
        <div className="flex items-center justify-center gap-10 w-full h-full max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col items-start">
            <span className="text-violet-500 uppercase text-lg">
              Faça parte da transformação
            </span>
            <h1 className="text-3xl md:text-4xl font-semibold text-white mt-1">
              Transforme o futuro Conosco
            </h1>

            <p className="text-md md:text-lg text-zinc-300 mt-4 max-w-xl text-justify">
              No Instituto AmiGU, cada ação sua é uma alavanca de mudança.
              Junte-se a nós para capacitar comunidades, impulsionar inovações e
              criar oportunidades que impactam vidas.
            </p>
          </div>
          <div className="flex-1 mt-5 rounded-xl border-4 border-violet-500 overflow-hidden">
            <iframe
              allowFullScreen
              className="w-full aspect-video"
              title="Apresentação Porto Hack Santos 2022"
              src="https://www.youtube.com/embed/WHgPr_dCaUs?si=iWNuWJGZzYDwvPvx"
            />
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-violet-500 to-blue-400">
        <div className="max-w-7xl mx-auto px-4 flex gap-2 flex-row items-center justify-center py-6">
          <img
            src="/rocket-logo.png"
            alt="foguete logo amigu"
            className="w-8"
          />
          <h1 className="text-lg md:text-xl text-zinc-50">
            Conheça nossa história
          </h1>
          <ArrowRight className="size-5" />
        </div>
      </section>
      {/* Seção de CTA + Apoio de transformação */}
      <section className="bg-zinc-800 border-zinc-700 border-b-2">
        <div className=" max-w-7xl mx-auto px-4 flex flex-col gap-20 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-14">
            <div className="flex-1 flex flex-col items-start gap-4">
              <div className="">
                <span className="text-violet-500 text-sm font-semibold uppercase ">
                  Transformando Vidas
                </span>
                <h2 className="text-3xl text-zinc-50 mt-1 tracking-tight">
                  Seu apoio transforma <br /> vidas e comunidades.
                </h2>
              </div>
              <p className="text-zinc-400 text-lg text-justify">
                No Instituto AmiGU, acreditamos que o verdadeiro impacto começa
                com uma pequena faísca – e essa faísca pode vir de você. Desde
                2019, capacitamos mais de 88 mil pessoas, conectamos 6 mil
                famílias a novas oportunidades e realizamos mais de 40 eventos
                que transformaram vidas e comunidades inteiras. E com sua ajuda,
                podemos ir ainda mais longe.
              </p>
            </div>

            <div className="flex-1 flex flex-col items-start gap-4">
              <div className="bg-gradient-to-r from-violet-500 to-blue-400 border border-zinc-50 p-4 rounded-lg flex flex-col items-start gap-2 hover:scale-[.98] transition-all">
                <QuoteIcon className="text-white fill-white" />

                <p className="text-white">
                  Ser uma mantenedora do Instituto AmiGU nos permitiu ver de
                  perto como nossos recursos estão transformando realidades.
                </p>

                <h2 className="text-zinc-300">- Executivo da Resolv</h2>
              </div>

              <div className="bg-gradient-to-r from-violet-500 to-blue-400 border border-zinc-50 p-4 rounded-lg flex flex-col items-start gap-2 hover:scale-[.98] transition-all">
                <QuoteIcon className="text-white fill-white" />

                <p className="text-white">
                  Participar do Porto Hack Santos mudou minha vida. Agora, tenho
                  um portfólio real e oportunidades de emprego que nunca
                  imaginei.
                </p>

                <h2 className="text-zinc-300">
                  - Lucas, Competidor da Maratona
                </h2>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 md:gap-0 gap-8 grid-cols-2">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-5xl">88 mil</h2>
              <p className="text-lg text-zinc-300 text-center">
                Pessoas capacitadas
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-5xl">6 mil</h2>
              <p className="text-lg text-zinc-300 text-center">
                Famílias impactadas
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-5xl">40+</h2>
              <p className="text-lg text-zinc-300 text-center">
                Eventos realizados
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-5xl">100+</h2>
              <p className="text-lg text-zinc-300 text-center">
                Parcerias com empresas
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Seção de CTA para saber como fazer parte da comunidade */}
      <section className="bg-gradient-to-r from-violet-500 to-blue-400">
        <div className="max-w-7xl mx-auto px-4 flex gap-2 flex-row items-center justify-center py-6">
          <img
            src="/rocket-logo.png"
            alt="foguete logo amigu"
            className="w-8"
          />
          <h1 className="text-lg md:text-xl text-zinc-50">
            Veja como você pode fazer parte dessa transformação
          </h1>
          <ArrowRight className="size-5" />
        </div>
      </section>
      {/* Seção de projetos que criam oportunidades reais */}
      <section className="py-10 md:py-20 bg-zinc-900 bg-background bg-center bg-fixed bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="flex flex-col items-center justify-center gap-4 md:text-center">
            <h2 className="text-left w-full md:text-center text-2xl md:text-3xl font-semibold text-zinc-50">
              Projetos que <br /> criam oportunidades reais
            </h2>
            <p className="max-w-3xl text-zinc-300 text-justify md:text-center">
              Nossos projetos são mais do que iniciativas – são portas para um
              futuro melhor. Desde capacitar jovens em situação de
              vulnerabilidade até transformar negócios tradicionais em
              empreendimentos digitais, cada projeto do Instituto AmiGU é
              desenhado para gerar impacto sustentável e duradouro.
            </p>
          </div>

          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full mt-10"
          >
            <CarouselContent className="border-none">
              {projectsCarousel.map((carousel, i) => (
                <CarouselItem
                  key={carousel.title}
                  className="md:basis-1/2 lg:basis-1/3 border-none rounded-md overflow-hidden"
                >
                  <Card className="border-0 rounded-lg overflow-hidden">
                    <CardContent className="min-h-[372px] bg-zinc-800 flex  px-6 py-10 border-4 border-zinc-700">
                      <div className="flex flex-col justify-between gap-6">
                        <div>
                          <span className="bg-violet-600 border-4 border-violet-800 font-bold text-white size-10 flex items-center justify-center rounded-full">
                            {i + 1}
                          </span>

                          <h2
                            className="text-3xl text-zinc-50 font-semibold mt-2"
                            dangerouslySetInnerHTML={{
                              __html: carousel.title.includes(
                                'Maratona um Porto para o Futuro',
                              )
                                ? 'Maratona um <br /> Porto para o Futuro'
                                : carousel.title,
                            }}
                          />

                          <p className="text-zinc-300 text-lg mt-4">
                            {carousel.description}
                          </p>
                        </div>

                        <Link
                          to={carousel.href}
                          className="w-full text-white bg-violet-600 flex items-center justify-center px-3 py-2 rounded-md hover:bg-violet-500 transition-all"
                        >
                          {' '}
                          <Link2 className="size-4 mr-2" />{' '}
                          {carousel.buttonText}
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>
      {/* Seção faça parte você também */}
      <section className="bg-zinc-800 py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-zinc-800 gap-5 md:gap-8 border-2 border-zinc-800 rounded-md flex flex-col items-center">
            <div className="flex items-center gap-2 bg-zinc-300 p-1 rounded-lg">
              {buttonsTrials.map((button) => (
                <Button
                  key={button}
                  onClick={() => setButtonActiv(button)}
                  className={`relative flex-1 font-semibold transition-colors duration-300 rounded-md px-4 py-2 hover:bg-violet-500 hover:text-white ${
                    buttonActiv === button
                      ? 'bg-violet-500 text-white'
                      : 'bg-transparent text-zinc-700'
                  }`}
                >
                  {button}
                </Button>
              ))}
            </div>

            <motion.div
              key={buttonActiv}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{
                type: 'tween',
                duration: 0.7,
              }}
              className="flex flex-col items-center gap-10"
            >
              <div className="text-center">
                <span className="text-lg text-violet-500 uppercase">
                  Seja um apoiador
                </span>
                <h2 className="text-4xl text-white">{title}</h2>
                <p className="max-w-4xl text-zinc-300 text-center mt-4">
                  {description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5">
                {companyTrials.map((item: any) => (
                  <div
                    key={item.title}
                    className="flex flex-col items-start justify-between bg-zinc-700 p-7 rounded-md border-2 border-zinc-600"
                  >
                    <div className="flex flex-col items-start gap-4">
                      <div className="p-3 rounded-full bg-zinc-700 w-fit border-4 border-violet-900">
                        {item.icon}
                      </div>
                      <div>
                        <h2 className="text-xl text-white font-semibold">
                          {item.title}
                        </h2>
                        <p className="text-zinc-300 text-justify mt-2 mb-4">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <Link
                      to={item.href}
                      className="flex items-center gap-2 w-fit py-2 px-3 bg-violet-500 hover:brightness-90 rounded-md"
                    >
                      <Link2 className="size-5" />
                      {item.button}
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Seção CTA de junte-se à comunidade Sou AmiGU */}
      <section className="bg-gradient-to-r from-blue-400 to-violet-500">
        <div className="max-w-7xl mx-auto px-4 flex gap-2 flex-row items-center justify-center py-6">
          <img
            src="/rocket-logo.png"
            alt="foguete logo amigu"
            className="w-8"
          />
          <h1 className="text-lg md:text-xl text-zinc-50">
            Faça parte da comunidade AmiGU
          </h1>
          <ArrowRight className="size-5" />
        </div>
      </section>
      {/* Seção de desafie-se, conecte-se e impacte */}
      <section className="py-10 md:py-10 bg-background6 bg-center bg-cover bg-fixed bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:items-center md:flex-row gap-10 md:gap-8 items-start">
          <div className="flex-1">
            <span className="uppercase text-violet-500 font-medium text-md md:text-xl">
              Faça parte você também
            </span>

            <h2 className="text-xl md:text-4xl font-semibold text-zinc-50">
              Desafie-se, Conecte-se, Impacte
            </h2>

            <p className="text-justify md:text-left mt-4 text-zinc-300 font-light leading-relaxed text-md sm:text-lg">
              Ser parte da Comunidade Sou AmiGU é estar conectado a uma rede de
              pessoas e organizações que compartilham o desejo de transformar
              vidas e comunidades. Se você é um jovem talento, um mentor
              experiente ou uma instituição buscando fazer a diferença, aqui
              você encontra um espaço para crescer, inovar e causar impacto.
            </p>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-5 md:gap-10 md:mt-10">
              <div className="md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                <div className="bg-violet-600 border-4 border-violet-800 font-bold text-white size-10 flex items-center justify-center rounded-full">
                  1
                </div>

                <h2 className="text-zinc-300 leading-relaxed text-md sm:text-lg mt-3">
                  Participe de nossas maratonas e crie um portfólio que fará
                  você ser visto pelo mercado de outra forma.
                </h2>
              </div>

              <div className="md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                <div className="bg-violet-600 border-4 border-violet-800 font-bold text-white size-10 flex items-center justify-center rounded-full">
                  2
                </div>

                <h2 className="text-zinc-300 leading-relaxed text-md sm:text-lg mt-3">
                  Renove sua carreira, compartilhe seu conhecimento e receba de
                  volta reconhecimento, oportunidades e renda.
                </h2>
              </div>

              <div className="md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                <div className="bg-violet-600 border-4 border-violet-800 font-bold text-white size-10 flex items-center justify-center rounded-full">
                  3
                </div>

                <h2 className="text-zinc-300 leading-relaxed text-md sm:text-lg mt-3">
                  Inscreva sua associação em nossos projetos e maratonas e leve
                  a transformação para sua comunidade.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Seção nossa missão, nossa transparência */}
      <section className="bg-zinc-800 border-y-4 border-zinc-700 py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-zinc-900 gap-10 md:gap-20 border-2 border-zinc-800 p-5 sm:p-10 rounded-md flex flex-col md:flex-row items-center">
            <div className="flex-1 w-full">
              <img
                alt="Imagem"
                src="/portoHack-03.JPG"
                className="aspect-video object-cover rounded-lg border-4 border-zinc-700 z-10"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-semibold text-zinc-50">
                Nossa missão, <br /> Nossa transparência
              </h2>

              <p className="my-4 md:text-left text-justify text-zinc-300 font-light leading-relaxed text-sm sm:text-md md:text-lg">
                Transparência e responsabilidade são pilares do Instituto AmiGU.
                Como uma OSCIP, temos o compromisso de mostrar como cada real
                investido é utilizado para criar impacto social e transformar
                vidas. Confira nossos relatórios anuais e auditorias para ver
                como fazemos isso acontecer.
              </p>

              <Link
                to="/"
                className="py-2 px-3 bg-violet-500 flex items-center gap-2 w-72 hover:brightness-90 rounded-md"
              >
                <Link2 className="size-5" />
                Confira nossos relatórios anuais
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Seção de contato */}
      <section
        ref={refContact}
        className="py-10 border-t-2 border-t-zinc-800 bg-zinc-900 bg-background5 bg-center bg-cover bg-no-repeat"
      >
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
                type="button"
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
