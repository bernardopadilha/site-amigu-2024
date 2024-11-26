/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-constant-condition */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'

import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  // ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  // ChevronsDownIcon,
  // ChevronsUpIcon,
  HeartHandshake,
  Link2,
  MouseIcon,
  Users,
} from 'lucide-react'

// import { ContactSection } from '@/components/contact-section'
// import {
//   TooltipProvider,
//   Tooltip,
//   TooltipTrigger,
//   TooltipContent,
// } from '@/components/ui/tooltip'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, Mousewheel } from 'swiper/modules'

interface ProjectsCarouselProps {
  title: string
  description: string
  buttonText: string
  href: string
  refScroll?: string
  refButtonText?: string
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
  const [buttonActiv] = useState<any>(buttonsTrials[0])

  const projectsCarousel: ProjectsCarouselProps[] = [
    {
      title: 'AmiGU Resolv',
      description:
        'Capacitando a próxima geração de líderes digitais. Participe como mentor ou jovem talento e veja seu impacto florescer.',
      buttonText: 'Saiba mais',
      href: '/projetos/amigu-resolv',
      refScroll: '#como-apoiar',
      refButtonText: 'Como apoiar',
    },
    {
      title: 'Maratona um Porto para o Futuro',
      description:
        'Transformando a logística portuária com inovação e inclusão digital. Junte-se à maratona e crie soluções que impactam.',
      buttonText: 'Participe agora',
      href: '/projetos/maratona-um-porto-para-o-futuro',
      refScroll: '#como-apoiar',
      refButtonText: 'Como apoiar',
    },
    {
      title: 'Raíces Digitales',
      description:
        'Empoderando mulheres empreendedoras e herdeiros de negócios tradicionais para o futuro digital. Descubra como participar.',
      buttonText: 'Explore o projeto',
      href: '/projetos/raices-digitales',
      refScroll: '#como-apoiar',
      refButtonText: 'Como apoiar',
    },
  ]

  const { hash } = useLocation()

  const refBanner = useRef<HTMLDivElement>(null)
  // const refContact = useRef<HTMLDivElement>(null)
  const refKnowHistory: any = useRef<HTMLDivElement>(null)
  const refProjects: any = useRef<HTMLDivElement>(null)
  const refHowToSuport = useRef<HTMLDivElement>(null)
  const refTransparency = useRef<HTMLDivElement>(null)

  // const sections = [
  //   refBanner,
  //   refKnowHistory,
  //   refProjects,
  //   refHowToSuport,
  //   refTransparency,
  //   refContact,
  // ]

  // const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0)

  // const scrollToSection = (index: number) => {
  //   console.log(index)
  //   const section = sections[index].current
  //   if (section) {
  //     const offset = index === 2 || index === 3 ? 50 : 100
  //     window.scrollTo({
  //       top: section.offsetTop - offset,
  //       behavior: 'smooth',
  //     })
  //   }
  // }

  // const scrollToNextSection = () => {
  //   if (currentSectionIndex < sections.length - 1) {
  //     setCurrentSectionIndex((prevIndex) => prevIndex + 1)
  //   }
  // }

  // const scrollToPreviousSection = () => {
  //   if (currentSectionIndex > 0) {
  //     setCurrentSectionIndex((prevIndex) => prevIndex - 1)
  //   }
  // }

  // Efetue o scroll sempre que o índice mudar
  // useEffect(() => {
  //   scrollToSection(currentSectionIndex)
  // }, [currentSectionIndex])

  useEffect(() => {
    if (hash === '#conhecer-historia') {
      window.scroll({
        top: refKnowHistory.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#conhecer-projetos') {
      window.scroll({
        top: refProjects.current.offsetTop - 110,
        behavior: 'smooth',
      })
    }
  }, [hash])

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
          icon: <Building2 className="size-5 text-violet-500" />,
          button: 'Saiba Como',
          href: '/como-apoiar/empresas',
        },
        {
          title: 'Empresas Incentivadoras',
          description:
            'Contrate nossos projetos e contribua diretamente para a inovação e inclusão social. Suporte que gera resultados.',
          icon: <Building2 className="size-5 text-violet-500" />,
          button: 'Contrate Nossos Projetos',
          href: '/como-apoiar/empresas',
        },
        {
          title: 'Empresas Impulsionadoras',
          description:
            'Patrocine um projeto ou evento específico e veja como sua contribuição pode criar mudanças significativas.',
          icon: <Building2 className="size-5 text-violet-500" />,
          button: 'Patrocine Agora',
          href: '/como-apoiar/empresas',
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
          icon: <Users className="size-5 text-violet-500" />,
          button: 'Saiba Como',
          href: '/como-apoiar/voluntarios-e-mentores',
        },
        {
          title: 'Mentores',
          description:
            'Contrate nossos projetos e contribua diretamente para a inovação e inclusão social. Suporte que gera resultados.',
          icon: <Users className="size-5 text-violet-500" />,
          button: 'Contrate Nossos Projetos',
          href: '/como-apoiar/voluntarios-e-mentores',
        },
        {
          title: 'Voluntários',
          description:
            'Patrocine um projeto ou evento específico e veja como sua contribuição pode criar mudanças significativas.',
          icon: <Users className="size-5 text-violet-500" />,
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
          icon: <HeartHandshake className="size-5 text-violet-500" />,
          button: 'Saiba Como',
          href: '/como-apoiar/parceiros-institucionais',
        },
        {
          title: 'Empresas Incentivadoras',
          description:
            'Contrate nossos projetos e contribua diretamente para a inovação e inclusão social. Suporte que gera resultados.',
          icon: <HeartHandshake className="size-5 text-violet-500" />,
          button: 'Contrate Nossos Projetos',
          href: '/como-apoiar/parceiros-institucionais',
        },
        {
          title: 'Empresas Impulsionadoras',
          description:
            'Patrocine um projeto ou evento específico e veja como sua contribuição pode criar mudanças significativas.',
          icon: <HeartHandshake className="size-5 text-violet-500" />,
          button: 'Patrocine Agora',
          href: '/como-apoiar/parceiros-institucionais',
        },
      ],
    },
  }

  const { title, description, companyTrials } = contentData[buttonActiv]

  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 10,
    slidesPerView: 1, // Padrão para tamanhos maiores que lg
    loop: true,
    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      // Define 1 slide para telas pequenas (xs)
      640: {
        slidesPerView: 1,
      },
      // Define 2 slides para telas médias (sm)
      768: {
        slidesPerView: 2,
      },
      // Define 2 slides para telas grandes (md)
      1024: {
        slidesPerView: 2,
      },
      // Define 3 slides para telas grandes (lg)
      1440: {
        slidesPerView: 3,
      },
    },
  }

  return (
    <main className="relative">
      <section className="w-full relative pt-24 min-h-auto md:min-h-[100vh] flex flex-col">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoHeight
          className="flex-1"
          navigation={{
            nextEl: '.button-next-slide',
            prevEl: '.button-prev-slide',
          }}
          modules={[Mousewheel, Navigation]}
          mousewheel
        >
          {/* Seção de banner */}
          <SwiperSlide>
            <section
              ref={refBanner}
              className="w-full pt-10 pb-20 md:pt-0 md:pb-0 md:min-h-[calc(90vh-1rem)] flex items-center bg-background4 bg-fixed bg-center bg-cover bg-no-repeat"
            >
              <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:px-4 gap-10">
                <div className="flex-1 flex flex-col items-start">
                  <span className="text-violet-500 uppercase text-lg">
                    Faça parte da transformação
                  </span>
                  <h1 className="text-3xl md:text-4xl font-semibold text-white mt-1">
                    Transforme o futuro conosco
                  </h1>

                  <p className="text-md md:text-lg text-zinc-300 mt-4 max-w-xl text-justify">
                    No Instituto AmiGU, formamos Resolvedores: pessoas que
                    escolhem ser parte da solução. Com mentorias práticas e
                    desafios reais em nossos hackathons, capacitamos habilidades
                    essenciais para o mercado, gerando conhecimento aplicável e
                    oportunidades concretas. Junte-se a nós e faça do seu
                    aprendizado um impacto transformador.
                    <br /> <br /> Junte-se a nós e transforme o conhecimento em
                    impacto social.
                  </p>

                  <Button
                    asChild
                    className="mt-4 flex items-center gap-2 bg-gradient-to-r from-violet-500 to to-blue-400 text-white hover:brightness-90 transition-all"
                  >
                    <Link to={'/#conhecer-historia'}>
                      <MouseIcon className="size-4" />
                      Conher história
                    </Link>
                  </Button>
                </div>

                <div className="flex-1 mt-5 rounded-xl border-4 border-violet-500  w-full">
                  <iframe
                    allowFullScreen
                    className="w-full aspect-video rounded-lg"
                    title="Apresentação Porto Hack Santos 2022"
                    src="https://www.youtube.com/embed/WHgPr_dCaUs?si=iWNuWJGZzYDwvPvx"
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>

          {/* Seção Apoio de transformação */}
          <SwiperSlide>
            <section ref={refKnowHistory} className="bg-zinc-800">
              <div className="max-w-7xl mx-auto flex flex-col gap-10 pt-10 md:px-4">
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
                    <p className="text-zinc-300 text-lg text-justify">
                      No Instituto AmiGU, acreditamos que uma pequena faísca
                      pode desencadear grandes transformações — e essa faísca
                      pode vir de você. Desde 2019, já capacitamos mais de 88
                      mil pessoas, conectamos 6 mil famílias a novas
                      oportunidades e realizamos mais de 40 eventos que
                      impactaram profundamente vidas e comunidades. Com seu
                      apoio, estamos prontos para levar essa transformação ainda
                      mais longe.
                    </p>

                    <Button
                      asChild
                      className="mt-4 flex items-center gap-2 bg-gradient-to-r from-violet-500 to to-blue-400 text-white hover:brightness-90 transition-all"
                    >
                      <Link to={'/#conhecer-projetos'}>
                        <MouseIcon className="size-4" />
                        Conheça nossos projetos
                      </Link>
                    </Button>
                  </div>

                  <div className="flex-1 flex flex-col items-start gap-4">
                    <img
                      src="hero-events.png"
                      alt="Eventos AmiGU"
                      className="object-contain"
                    />
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
          </SwiperSlide>

          {/* Seção de projetos que criam oportunidades reais */}
          <SwiperSlide>
            <section
              ref={refProjects}
              className="w-full md:min-h-[calc(90vh-1rem)] bg-background bg-center bg-fixed bg-cover bg-no-repeat"
            >
              <div className="max-w-7xl mx-auto flex flex-col items-center pt-10">
                <div className="flex flex-col items-center justify-center gap-2 md:text-center">
                  <h2 className="text-left w-full md:text-center text-2xl md:text-3xl font-semibold text-zinc-50">
                    Projetos que <br /> criam oportunidades reais
                  </h2>
                  <p className="max-w-3xl text-zinc-300 text-justify md:text-lg md:text-center">
                    Nossos projetos são mais do que iniciativas – são portas
                    para um futuro melhor. Desde capacitar jovens em situação de
                    vulnerabilidade até transformar negócios tradicionais em
                    empreendimentos digitais, cada projeto do Instituto AmiGU é
                    desenhado para gerar impacto sustentável e duradouro.
                  </p>
                </div>

                <div className="max-w-full lg:max-w-7xl md:max-w-xl mx-auto px-4 mt-10 relative overflow-x-hidden z-10">
                  <Swiper {...swiperOptions} className="w-full">
                    {projectsCarousel.map((carousel, i) => (
                      <SwiperSlide className="mx-auto" key={i}>
                        <Card className="border-0 rounded-lg overflow-hidden max-w-[95%] mx-auto">
                          <CardContent className="lg:min-h-[350px] md:min-h-[300px] bg-zinc-700 flex px-4 py-6 border-4 border-zinc-600 box-border">
                            <div className="flex flex-col justify-end gap-4 relative">
                              <span className="absolute left-2 top-2 bg-violet-600 border-4 border-violet-800 font-bold text-white size-10 flex items-center justify-center rounded-full">
                                {i + 1}
                              </span>
                              <div className="flex flex-col justify-start">
                                <h2
                                  className="text-lg xs:text-2xl sm:text-3xl text-zinc-50 font-semibold mt-2"
                                  dangerouslySetInnerHTML={{
                                    __html: carousel.title.includes(
                                      'Maratona um Porto para o Futuro',
                                    )
                                      ? 'Maratona um Porto para o Futuro'
                                      : carousel.title,
                                  }}
                                />
                                <p className="text-zinc-300 text-md mt-4">
                                  {carousel.description}
                                </p>
                              </div>
                              <div className="space-y-2">
                                <Link
                                  to={carousel.href}
                                  className="w-full text-white bg-violet-600 flex items-center justify-center px-3 py-2 rounded-md hover:bg-violet-500 transition-all"
                                >
                                  <Link2 className="size-4 mr-2" />
                                  {carousel.buttonText}
                                </Link>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="flex w-full items-center justify-center mt-5 gap-2 lg:hidden">
                    <Button className="w-12 h-12 p-2 bg-violet-500 text-white custom-swiper-button-prev">
                      <ChevronLeft className="size-5" />
                    </Button>
                    <Button className="w-12 h-12 p-2 bg-violet-500 text-white custom-swiper-button-next">
                      <ChevronRight className="size-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>

          {/* Seção faça parte você também */}
          <SwiperSlide>
            <section
              ref={refHowToSuport}
              className="w-full md:min-h-[calc(90vh-1rem)] bg-background bg-center bg-fixed bg-cover bg-no-repeat py-10 md:py-10"
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="gap-5 md:gap-8 rounded-md flex flex-col items-center">
                  {/* <div className="flex items-center gap-2 bg-zinc-300 p-1 rounded-lg">
                    {buttonsTrials.map((button) => (
                      <Button
                        key={button}
                        onClick={() => setButtonActiv(button)}
                        className={`relative flex-1 font-semibold transition-colors duration-300 rounded-md px-2 md:px-4 py-2 hover:bg-violet-500 hover:text-white ${
                          buttonActiv === button
                            ? 'bg-violet-500 text-white'
                            : 'bg-transparent text-zinc-700'
                        }`}
                      >
                        {button}
                      </Button>
                    ))}
                  </div> */}

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
                            <div className="p-3 rounded-full bg-zinc-700 w-fit border-2 border-violet-600">
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
                          <div className="w-full space-y-2">
                            <Link
                              to={item.href}
                              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-violet-500 hover:brightness-90 rounded-md"
                            >
                              <Link2 className="size-5" />
                              {item.button}
                            </Link>

                            <Link
                              to={item.href}
                              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-blue-400 hover:brightness-90 rounded-md"
                            >
                              <Link2 className="size-5" />
                              Como Participar
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* <div className="flex flex-col md:flex-row w-full pt-10">
                      <div className="flex items-center justify-center rounded-t-md py-2 md:py-0 md:rounded-b-none md:rounded-l-md md:rounded-r-none px-4 bg-gradient-to-r from-violet-500 to-blue-400">
                        <img
                          src="/rocket-logo.png"
                          alt="foguete logo amigu"
                          className="w-8"
                        />
                      </div>
                      <div className="flex-1 border-x-2 border-b-2 md:border-x-0 md:border-y-2 md:border-r-2 bg-zinc-800 border-zinc-700 md:pr-3 md:pl-5 md:py-2 py-5 px-3 md:px-0 rounded-b-md md:rounded-b-none md:rounded-r-md">
                        <h2 className="text-3xl text-zinc-50 mt-1 tracking-tight">
                          Desafie-se, Conecte-se, Impacte
                        </h2>
                        <p className="text-zinc-400 text-lg text-justify md:text-left mt-1">
                          Ao juntar-se à Comunidade Sou AmiGU, você entra em uma
                          rede dedicada a transformar vidas e comunidades. Seja
                          você um jovem talento, um mentor experiente ou uma
                          instituição comprometida com a mudança, aqui é o lugar
                          para crescer, inovar e deixar sua marca no mundo.
                        </p>
                      </div>
                    </div> */}
                  </motion.div>
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section
              ref={refTransparency}
              className="bg-zinc-800 md:min-h-[calc(90vh-1rem)] max-w-7xl mx-auto flex justify-center py-10 md:py-10"
            >
              <div className="bg-zinc-700 gap-10 md:gap-20 border-2 border-zinc-800 p-5 sm:p-10 rounded-md flex flex-col md:flex-row items-center">
                <div className="flex-1 w-full">
                  <img
                    alt="Imagem"
                    src="/portoHack-03.JPG"
                    className="aspect-video object-cover rounded-lg border-4 border-violet-500 z-10"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-4xl font-semibold text-zinc-50">
                    Nossa missão, <br /> Nossa transparência
                  </h2>

                  <p className="my-4 md:text-left text-justify text-zinc-300 font-light leading-relaxed text-sm sm:text-md md:text-lg">
                    Transparência e responsabilidade são pilares do Instituto
                    AmiGU. Como uma OSCIP, temos o compromisso de mostrar como
                    cada real investido é utilizado para criar impacto social e
                    transformar vidas. Confira nossos relatórios anuais e
                    auditorias para ver como fazemos isso acontecer.
                  </p>

                  <Link
                    to="/transparencia"
                    className="py-2 px-3 bg-violet-500 flex items-center gap-2 w-72 hover:brightness-90 rounded-md"
                  >
                    <Link2 className="size-5" />
                    Confira nossos relatórios anuais
                  </Link>
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section
              ref={refTransparency}
              className="w-full md:min-h-[calc(90vh-1rem)] bg-background bg-center bg-cover bg-no-repeat py-10 md:py-10"
            >
              <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 md:gap-16">
                <div className="flex-1 flex flex-col justify-center">
                  <div>
                    <h1 className="md:mt-6 text-zinc-200 font-semibold text-3xl">
                      Localização
                    </h1>

                    <p className="text-base md:text-md mt-1 font-light text-zinc-300">
                      Estamos localizado no endereço: Panorama Trade Center - R.
                      Euclydes da Cunha, 11 - Sala 301 - Gonzaga, Santos - SP,
                      11065-100
                    </p>

                    <Button
                      asChild
                      className="mt-5 w-full bg-violet-500 hover:bg-violet-500/80 text-white"
                    >
                      <Link to="https://www.google.com/maps/place/Panorama+Trade+Center/@-23.9661018,-46.3371174,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce03100e33dbab:0x41d14fc3c8a34a8c!8m2!3d-23.9661018!4d-46.3345425!16s%2Fg%2F11c2ng2xg6?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D">
                        Ir para o mapa
                      </Link>
                    </Button>
                  </div>

                  <div>
                    <h1 className="md:mt-6 text-zinc-200 font-semibold text-3xl">
                      Contato
                    </h1>
                    <p className="text-base sm:text-md mt-1 font-light text-zinc-300 mb-3">
                      Agende agora uma reunião com nosso fundador Marco Riveiros
                    </p>

                    <Button
                      asChild
                      className="mt-5 w-full bg-violet-500 hover:bg-violet-500/80 text-white"
                    >
                      <Link to="https://www.google.com/maps/place/Panorama+Trade+Center/@-23.9661018,-46.3371174,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce03100e33dbab:0x41d14fc3c8a34a8c!8m2!3d-23.9661018!4d-46.3345425!16s%2Fg%2F11c2ng2xg6?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D">
                        Agendar uma Reunião
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src="/guzinho-2.png"
                    alt="escritório AmiGU"
                    className="h-[450px] object-contain rounded-md mt-5 p-2"
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
        {/* BUTTONS SWIPER */}
        <div className="absolute left-2 bottom-2 md:left-auto md:right-72 md:bottom-4 flex items-center gap-2 z-10">
          <Button
            variant={'outline'}
            size={'icon'}
            type="button"
            title="Clique para voltar um slide"
            className="button-prev-slide rounded-md hover:brightness-90 border-2 border-zinc-700 text-zinc-400 flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant={'outline'}
            size={'icon'}
            type="button"
            title="Clique para avançar um slide"
            className="button-next-slide rounded-md hover:brightness-90 border-2 border-zinc-700 text-zinc-400 flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </section>

      {/* Seção de CTA para saber como fazer parte da comunidade */}
      {/* <section className="bg-gradient-to-r from-violet-500 to-blue-400">
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
      </section> */}

      {/* Seção CTA de junte-se à comunidade Sou AmiGU */}
      {/* <section className="bg-gradient-to-r from-blue-400 to-violet-500">
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
      </section> */}
      {/* Seção nossa missão, nossa transparência */}

      {/* Seção de contato */}

      {/* <div ref={refContact}>
        <ContactSection />
      </div> */}

      {/* <div className="z-50 hidden md:block">
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
      </div> */}
    </main>
  )
}
