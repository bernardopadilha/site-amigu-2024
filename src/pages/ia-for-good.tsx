/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ChevronsDownIcon,
  ChevronsUpIcon,
  Link2Icon,
  Mouse,
} from 'lucide-react'

import 'swiper/css'
import 'swiper/css/navigation'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

export function IAForGood() {
  const { hash } = useLocation()
  const refBanner: any = useRef()
  const refIaForGood: any = useRef()
  const refHitoryMarathons: any = useRef()

  const sections = [refBanner, refIaForGood, refHitoryMarathons]

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

  useEffect(() => {
    if (hash === '#historico-de-eventos-e-iniciativas') {
      window.scroll({
        top: refHitoryMarathons.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#ia-para-o-bem') {
      window.scroll({
        top: refIaForGood.current.offsetTop - 110,
        behavior: 'smooth',
      })
    }
  }, [hash])

  return (
    <main className="relative">
      <section
        ref={refBanner}
        className="flex flex-col items-center gap-24 justify-center bg-background4 bg-fixed pb-20 pt-28 md:pt-48"
      >
        <div className="max-w-7xl px-8 mx-auto gap-10 flex flex-col md:flex-row items-center justify-center">
          <div className="flex-1 flex flex-col items-start justify-start max-w-4xl mx-auto">
            <span className="text-lg font-medium uppercase text-violet-500">
              Somos IA para o bem
            </span>
            <h1 className="text-3xl md:text-5xl text-white mt-2">
              Transformando vidas <br /> com{' '}
              <span className="text-violet-500 font-medium">
                inteligência artificial
              </span>{' '}
            </h1>

            <p className="text-md md:text-lg text-zinc-300 mt-5 max-w-xl text-justify">
              No Instituto AmiGU, acreditamos que a tecnologia, em especial a
              inteligência artificial, pode ser uma força poderosa para o bem.
              Por meio de nossas iniciativas, estamos utilizando a IA para
              enfrentar desafios sociais, educacionais e econômicos,
              proporcionando soluções que transformam vidas e comunidades.
            </p>

            <Button
              asChild
              className="bg-gradient-to-r from-violet-500 to-blue-400 hover:bg-violet-500 hover:brightness-90 text-white mt-5 flex items-center gap-2"
            >
              <Link to={'/ia-for-good#ia-para-o-bem'}>
                <Mouse className="size-4" />
                Conhecer IA para o bem
              </Link>
            </Button>
          </div>
          <div className="flex-1 w-full">
            <img
              alt="Imagem"
              src="/portoHack-robo.png"
              className="aspect-video object-cover rounded-lg border-4 border-zinc-600 z-10"
            />
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-violet-500 to-blue-400">
          <div className="max-w-7xl mx-auto px-4 flex gap-2 flex-row items-center justify-center py-6">
            <img
              src="/rocket-logo.png"
              alt="foguete logo amigu"
              className="w-8"
            />
            <h1 className="text-xl md:text-xl text-zinc-50">
              Conheça o IA para o Bem
            </h1>
            <ArrowRight className="size-5" />
          </div>
        </div>

        <div
          ref={refIaForGood}
          className="max-w-7xl px-8 mx-auto gap-10 flex flex-col items-center justify-center w-full h-full"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-4xl text-center">
              Transformação através da <br /> inteligência artificial
            </h2>
            <div className="w-[60%] h-[1px] bg-violet-500 mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-start justify-between gap-2 rounded-md p-4 bg-zinc-800 border-2 border-zinc-700">
              <h2 className="text-2xl font-medium">
                Transformação <br /> Através da Inteligência Artificial
              </h2>
              <p className="text-zinc-300 text-justify">
                Nossos projetos de IA criam impactos duradouros, desde a
                educação até o setor portuário. Empoderamos jovens de
                comunidades carentes, desenvolvemos soluções inovadoras para o
                setor jurídico e promovemos a inclusão digital, moldando um
                futuro onde a tecnologia beneficia a todos de forma justa e
                igualitária.
              </p>

              <img
                src="/portoHack-robo.png"
                alt=""
                className="w-[350px] h-[230px] border border-zinc-700 rounded-md"
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-2 rounded-md p-4 bg-zinc-800 border-2 border-zinc-700">
              <h2 className="text-2xl font-medium">
                Hackathons: <br /> O Poder da IA em Ação
              </h2>
              <p className="text-zinc-300 text-justify">
                Os hackathons do Instituto AmiGU são exemplos claros de como a
                IA pode ser utilizada para resolver problemas reais. Em eventos
                como o Porto Hack Santos e o Hackathon Startup Cidadã, a
                inteligência artificial foi o motor por trás de soluções que
                melhoraram desde a gestão educacional até a eficiência dos
                portos brasileiros.
              </p>

              <img
                src="/portoHackSantos-166.jpg"
                alt=""
                className="w-[350px] h-[230px] object-cover border border-zinc-700 rounded-md"
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-2 rounded-md p-4 bg-zinc-800 border-2 border-zinc-700">
              <h2 className="text-2xl font-medium">
                Impacto <br /> Social e Inclusão
              </h2>
              <p className="text-zinc-300 text-justify">
                Nosso compromisso vai além da inovação tecnológica; buscamos
                inclusão e equidade. Garantimos que a IA empodere indivíduos e
                comunidades, especialmente os mais vulneráveis. Em projetos como
                o Porto Hack Santos 2023, onde 50% das funções foram ocupadas
                por mulheres, promovemos um futuro onde a tecnologia é acessível
                e benéfica para todos.
              </p>

              <img
                src="/sala-de-aula.jpg"
                alt=""
                className="w-[350px] h-[230px] border border-zinc-700 rounded-md"
              />
            </div>

            <div className="flex flex-col items-start col-span-1 md:col-span-3 gap-2 rounded-md p-4 bg-zinc-800 border-2 border-zinc-700">
              <h2 className="text-2xl font-medium">
                Junte-se a Nós: IA para o Bem
              </h2>
              <p className="text-zinc-300">
                No Instituto AmiGU, estamos sempre em busca de novas formas de
                usar a inteligência artificial para o bem comum. Se você
                acredita no poder transformador da tecnologia e deseja fazer
                parte dessa jornada, junte-se a nós. Vamos juntos construir um
                futuro onde a IA é uma força positiva, capaz de transformar
                vidas e comunidades ao redor do mundo.
              </p>

              <Button className="mt-4 flex items-center gap-2 bg-violet-500 hover:bg-violet-500 hover:brightness-90 text-white hover:">
                <Link2Icon className="size-4" />
                Junte-se a nós
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r to-violet-500 from-blue-400">
        <div className="max-w-7xl mx-auto px-4 flex gap-2 flex-row items-center justify-center py-6">
          <img
            src="/rocket-logo.png"
            alt="foguete logo amigu"
            className="w-8"
          />
          <h1 className="text-lg md:text-xl text-zinc-50">
            Faça parte e apoie o Instito AmiGU
          </h1>
          <ArrowRight className="size-5" />
        </div>
      </section>

      <section
        ref={refHitoryMarathons}
        className="flex flex-col items-center gap-32 justify-center bg-background5 bg-fixed py-20"
      >
        <div className="max-w-7xl mx-auto px-2 md:px-8 flex flex-col items-center">
          <div className="text-white text-center">
            <h1 className="text-3xl font-semibold">
              Resultados das Iniciativas de <br /> IA para o Bem do Instituto
              AmiGU
            </h1>
            <p className="font-light max-w-3xl mt-4">
              O Instituto AmiGU tem se destacado ao longo dos anos como uma
              força motriz na utilização da inteligência artificial para
              transformar vidas e promover a inclusão social. A seguir,
              apresentamos um compilado dos principais resultados de nossas
              iniciativas de "AI for Good", que mostram o impacto real e
              duradouro de nossos projetos.
            </p>
          </div>

          <div className="">
            <Carousel
              orientation="vertical"
              className="mt-24 w-full select-none"
            >
              <CarouselContent className="flex h-auto w-full md:h-[350px]">
                <CarouselItem>
                  <div className="flex items-center">
                    <div className="hidden shrink-0 items-start gap-3 whitespace-nowrap md:flex">
                      <div className="relative block h-8 w-8 shrink-0 rounded-full bg-violet-500 after:absolute after:left-1/2 after:top-8 after:block after:h-80 after:w-[4px] after:-translate-x-1/2 after:bg-violet-500 after:content-['']" />
                      <div className="flex w-32 flex-col text-white">
                        <span className="font-semibold">2017</span>
                      </div>
                    </div>

                    <div className="flex w-full flex-col md:flex-row items-center justify-between gap-4 rounded-md border-4 border-zinc-600 bg-zinc-700 p-4 text-white">
                      <div className="flex flex-1 flex-col">
                        <div>
                          <span className="inline-block rounded-full bg-violet-500 px-3 py-1 font-bold md:hidden">
                            2017
                          </span>
                        </div>
                        <h1 className="mt-2 text-xl font-semibold md:mt-0 md:text-xl">
                          Code in Pizza in 013
                        </h1>
                        <p>
                          Em dezembro de 2017, o Instituto AmiGU organizou o
                          evento "Code in Pizza in 013" na antiga UNIMONTE,
                          atual Universidade São Judas. Esse evento reuniu mais
                          de 200 pessoas e ofereceu 15 trilhas de palestras que
                          abordaram temas como Inteligência Artificial,
                          Blockchain, Carreiras em Desenvolvimento, Robótica,
                          Cultura Ágil, DevOps, Empreendedorismo Digital e
                          Inovação Aberta. O evento foi um marco para inspirar
                          novos talentos a seguir carreiras tecnológicas.
                        </p>
                      </div>
                      <div className="flex-1 w-full">
                        <img
                          alt="Imagem"
                          src="/imagens-de-evento/code-in-pizza-2.jpg"
                          className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center">
                    <div className="hidden shrink-0 items-start gap-3 whitespace-nowrap md:flex">
                      <div className="relative block h-8 w-8 shrink-0 rounded-full bg-violet-500 after:absolute after:left-1/2 after:top-8 after:block after:h-80 after:w-[4px] after:-translate-x-1/2 after:bg-violet-500 after:content-['']" />
                      <div className="flex w-32 flex-col text-white">
                        <span className="font-semibold">2018</span>
                      </div>
                    </div>

                    <div className="flex w-full flex-col md:flex-row items-center justify-between gap-4 rounded-md border-4 border-zinc-600 bg-zinc-700 p-4 text-white">
                      <div className="flex flex-1 flex-col">
                        <div>
                          <span className="inline-block rounded-full bg-violet-500 px-3 py-1 font-bold md:hidden">
                            2018
                          </span>
                        </div>
                        <h1 className="mt-2 text-xl font-semibold md:mt-0 md:text-xl">
                          Palestra sobre Machine Learning no Museu Pelé
                        </h1>
                        <p>
                          Em fevereiro de 2018, o Instituto AmiGU levou mais de
                          100 pessoas ao Museu Pelé para uma palestra sobre
                          Machine Learning. O evento contou com cinco
                          especialistas que discutiram os impactos dessa
                          tecnologia na criação de Inteligências Artificiais,
                          apresentando casos de sucesso que ilustraram o
                          potencial transformador do Machine Learning
                        </p>
                      </div>
                      <div className="flex-1 w-full">
                        <img
                          alt="Imagem"
                          src="/imagens-de-evento/rei-pele.jpg"
                          className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="flex items-center">
                    <div className="hidden shrink-0 items-start gap-3 whitespace-nowrap md:flex">
                      <div className="relative block h-8 w-8 shrink-0 rounded-full bg-violet-500 after:absolute after:left-1/2 after:top-8 after:block after:h-80 after:w-[4px] after:-translate-x-1/2 after:bg-violet-500 after:content-['']" />
                      <div className="flex w-32 flex-col text-white">
                        <span className="font-semibold">2019</span>
                      </div>
                    </div>

                    <div className="flex w-full flex-col md:flex-row items-center justify-between gap-4 rounded-md border-4 border-zinc-600 bg-zinc-700 p-4 text-white">
                      <div className="flex flex-1 flex-col">
                        <div>
                          <span className="inline-block rounded-full bg-violet-500 px-3 py-1 font-bold md:hidden">
                            2019
                          </span>
                        </div>
                        <h1 className="mt-2 text-xl font-semibold md:mt-0 md:text-xl">
                          Camps 4.0 - O Aprendiz do Futuro
                        </h1>
                        <p>
                          Em abril de 2019, o Instituto AmiGU organizou o evento
                          "Camps 4.0 - O Aprendiz do Futuro", que reuniu 1000
                          jovens aprendizes em parceria com o CAMPS-SANTOS.
                          Durante o evento, foram apresentados workshops,
                          palestras e demonstrações imersivas sobre como a
                          Inteligência Artificial está transformando as
                          profissões e preparando os jovens para o futuro do
                          trabalho.
                        </p>
                      </div>
                      <div className="flex-1 w-full">
                        <img
                          alt="Imagem"
                          src="/imagens-de-evento/camps-4.jpeg"
                          className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="flex items-center">
                    <div className="hidden shrink-0 items-start gap-3 whitespace-nowrap md:flex">
                      <div className="relative block h-8 w-8 shrink-0 rounded-full bg-violet-500 after:absolute after:left-1/2 after:top-8 after:block after:h-80 after:w-[4px] after:-translate-x-1/2 after:bg-violet-500 after:content-['']" />
                      <div className="flex w-32 flex-col text-white">
                        <span className="font-semibold">2019</span>
                      </div>
                    </div>

                    <div className="flex w-full flex-col md:flex-row items-center justify-between gap-4 rounded-md border-4 border-zinc-600 bg-zinc-700 p-4 text-white">
                      <div className="flex flex-1 flex-col">
                        <div>
                          <span className="inline-block rounded-full bg-violet-500 px-3 py-1 font-bold md:hidden">
                            2019
                          </span>
                        </div>{' '}
                        <h1 className="mt-2 text-xl font-semibold md:mt-0 md:text-xl">
                          Laboratório de Inteligência Artificial na UNISANTOS
                        </h1>
                        <p>
                          Em setembro de 2019, o Instituto AmiGU, através de seu
                          Hackerspace, criou o primeiro Laboratório de IA em uma
                          universidade privada no estado de São Paulo,
                          localizado na UNISANTOS. Esse laboratório,
                          desenvolvido em parceria com IBM e Data H, ofereceu
                          trilhas de conhecimento e workshops de IA para alunos
                          de graduação em Tecnologia, fortalecendo a comunidade
                          acadêmica e oferecendo suporte contínuo para o
                          desenvolvimento de habilidades em IA.
                        </p>
                      </div>
                      <div className="flex-1 w-full">
                        <img
                          alt="Imagem"
                          src="/imagens-de-evento/IA-unisantos.jpg"
                          className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="flex items-center">
                    <div className="hidden shrink-0 items-start gap-3 whitespace-nowrap md:flex">
                      <div className="relative block h-8 w-8 shrink-0 rounded-full bg-violet-500 after:absolute after:left-1/2 after:top-8 after:block after:h-80 after:w-[4px] after:-translate-x-1/2 after:bg-violet-500 after:content-['']" />
                      <div className="flex w-32 flex-col text-white">
                        <span className="font-semibold">2019</span>
                      </div>
                    </div>

                    <div className="flex w-full flex-col md:flex-row items-center justify-between gap-4 rounded-md border-4 border-zinc-600 bg-zinc-700 p-4 text-white">
                      <div className="flex flex-1 flex-col">
                        <div>
                          <span className="inline-block rounded-full bg-violet-500 px-3 py-1 font-bold md:hidden">
                            2019
                          </span>
                        </div>
                        <h1 className="mt-2 text-xl font-semibold md:mt-0 md:text-xl">
                          Watson on the Beach
                        </h1>
                        <p>
                          Em dezembro de 2019, o Instituto AmiGU, em parceria
                          com a IBM e a SOMAY, organizou o evento "Watson on the
                          Beach" na concha acústica da praia de Santos. Mais de
                          200 pessoas participaram desse evento que apresentou o
                          robô NOW, capaz de simular sentimentos e emoções. Além
                          disso, o evento incluiu palestras sobre carreiras
                          tecnológicas, focadas em jovens e adultos, com o
                          objetivo de inspirar e capacitar novos talentos.
                        </p>
                      </div>
                      <div className="flex-1 w-full">
                        <img
                          alt="Imagem"
                          src="/imagens-de-evento/watson-on-the-beach.jpg"
                          className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="flex items-center">
                    <div className="hidden shrink-0 items-start gap-3 whitespace-nowrap md:flex">
                      <div className="relative block h-8 w-8 shrink-0 rounded-full bg-violet-500 after:absolute after:left-1/2 after:top-8 after:block after:h-80 after:w-[4px] after:-translate-x-1/2 after:bg-violet-500 after:content-['']" />
                      <div className="flex w-32 flex-col text-white">
                        <span className="font-semibold">2019</span>
                      </div>
                    </div>

                    <div className="flex w-full flex-col md:flex-row items-center justify-between gap-4 rounded-md border-4 border-zinc-600 bg-zinc-700 p-4 text-white">
                      <div className="flex flex-1 flex-col">
                        <div>
                          <span className="inline-block rounded-full bg-violet-500 px-3 py-1 font-bold md:hidden">
                            2019
                          </span>
                        </div>
                        <h1 className="mt-2 text-xl font-semibold md:mt-0 md:text-xl">
                          Hackerspace Zero Treze Innovation Space
                        </h1>
                        <p>
                          O Instituto AmiGU fundou o Hackerspace Zero Treze
                          Innovation Space, o primeiro Hub de Inovação
                          Tecnológica na Baixada Santista. Este espaço serve
                          como um ambiente de integração e desenvolvimento para
                          desenvolvedores, oferecendo palestras, eventos,
                          hackathons, e laboratórios. O Hackerspace é um ponto
                          de encontro para a comunidade tecnológica local,
                          fomentando a inovação e a colaboração contínua.
                        </p>
                      </div>

                      <div className="flex-1 w-full">
                        <img
                          alt="Imagem"
                          src="/imagens-de-evento/hackerspace.jpg"
                          className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="flex items-center">
                    <div className="hidden shrink-0 items-start gap-3 whitespace-nowrap md:flex">
                      <div className="relative block h-8 w-8 shrink-0 rounded-full bg-violet-500 after:absolute after:left-1/2 after:top-8 after:block after:h-80 after:w-[4px] after:-translate-x-1/2 after:bg-violet-500 after:content-['']" />
                      <div className="flex w-32 flex-col text-white">
                        <span className="font-semibold">2019</span>
                      </div>
                    </div>

                    <div className="flex w-full flex-col md:flex-row items-center justify-between gap-4 rounded-md border-4 border-zinc-600 bg-zinc-700 p-4 text-white">
                      <div className="flex flex-1 flex-col">
                        <div>
                          <span className="inline-block rounded-full bg-violet-500 px-3 py-1 font-bold md:hidden">
                            2019
                          </span>
                        </div>
                        <h1 className="mt-2 text-xl font-semibold md:mt-0 md:text-xl">
                          Programa Business4Devs
                        </h1>
                        <p>
                          Com o objetivo de impulsionar carreiras em tecnologia,
                          o Instituto AmiGU criou o programa Business4Devs. Este
                          programa foi fundamental para o desenvolvimento de
                          muitos profissionais, incluindo Erick Wendel, que se
                          tornou um dos maiores empreendedores de conteúdo
                          tecnológico da América Latina. Em parceria com a
                          EW.IT, o Instituto lançou o curso gratuito
                          "Fundamentos de Node.JS", que capacitou mais de 88.000
                          alunos em 3.000 municípios desde 2019.
                        </p>
                      </div>
                      <div className="flex-1 w-full">
                        <img
                          alt="Imagem"
                          src="/erick-marco.jpeg"
                          className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="flex items-center">
                    <div className="hidden shrink-0 items-start gap-3 whitespace-nowrap md:flex">
                      <div className="relative block h-8 w-8 shrink-0 rounded-full bg-violet-500" />
                      <div className="flex w-32 flex-col text-white">
                        <span className="font-semibold">2020</span>
                      </div>
                    </div>

                    <div className="flex w-full flex-col md:flex-row items-center justify-between gap-4 rounded-md border-4 border-zinc-600 bg-zinc-700 p-4 text-white">
                      <div className="flex flex-1 flex-col">
                        <div>
                          <span className="inline-block rounded-full bg-violet-500 px-3 py-1 font-bold md:hidden">
                            2020
                          </span>
                        </div>
                        <h1 className="mt-2 text-xl font-semibold md:mt-0 md:text-xl">
                          Apoio às Comunidades de Tecnologia
                        </h1>
                        <p>
                          O Instituto AmiGU tem um compromisso contínuo com o
                          apoio às comunidades tecnológicas, como Nerdzão,
                          Nerdgirls e AI Brasil. Essas iniciativas impactam
                          mensalmente mais de 80.000 jovens, oferecendo suporte
                          educacional, recursos e oportunidades para
                          desenvolvimento profissional. O Instituto promove
                          eventos, workshops e sessões de mentoria, conectando
                          jovens talentos com as demandas do mercado.{' '}
                        </p>
                      </div>
                      <div className="flex-1 w-full">
                        <img
                          alt="Imagem"
                          src="/imagens-de-evento/comunidades.jpg"
                          className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious className="rounded-md bg-violet-500 hover:bg-violet-500/90 border-none text-white md:flex hidden" />
              <CarouselNext className="rounded-md bg-violet-500 hover:bg-violet-500/90 border-none text-white md:flex hidden" />
            </Carousel>
          </div>
        </div>
      </section>

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
