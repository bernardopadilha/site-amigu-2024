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
  CogIcon,
  SlackIcon,
  Users,
  ShieldCheckIcon,
  ActivityIcon,
  TrendingUpDown,
  ArrowRight,
  ChevronsDownIcon,
  ChevronsUpIcon,
} from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Mentor() {
  const refBanner: any = useRef()
  const refVolunteersMentors: any = useRef()
  const refContact: any = useRef()

  const sections = [refBanner, refVolunteersMentors, refContact]

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
      {/* Seção Voluntários e Mentores */}
      <section
        ref={refBanner}
        className="py-10 md:py-20 bg-background15 bg-center bg-cover bg-no-repeat border-b-2 border-zinc-700"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16 items-start">
          <div className="w-full space-y-3 flex flex-col text-center items-center">
            <h2 className="text-2xl w-full md:w-auto sm:text-3xl md:text-center md:text-4xl font-semibold text-zinc-50">
              <span className="text-violet-500">Voluntários</span> e{' '}
              <span className="text-blue-400">Mentores</span>: <br /> Seja a Mão
              que Transforma
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
            <div
              ref={refVolunteersMentors}
              className="flex-1 flex flex-col items-start"
            >
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
                    <p className="text-zinc-300 text-l">
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
                    <p className="text-zinc-300 text-l">
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
                    <p className="text-zinc-300 text-l">
                      Participe de ações diretas nas comunidades, promovendo
                      inclusão e oferecendo suporte onde é mais necessário.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-start">
              <span className="text-blue-400 text-sm font-semibold uppercase ">
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
                  <div className="p-3 bg-blue-400 rounded-md">
                    <ShieldCheckIcon className="size-9 text-zinc-50 " />
                  </div>
                  <div>
                    <h2 className="text-zinc-50 text-xl">
                      Habilidades Técnicas
                    </h2>
                    <p className="text-zinc-300 text-l">
                      Oriente jovens em áreas como tecnologia, análise de dados,
                      marketing digital, e gestão de projetos.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-400 rounded-md">
                    <ActivityIcon className="size-9 text-zinc-50" />
                  </div>
                  <div>
                    <h2 className="text-zinc-50 text-xl">
                      Desenvolvimento Socioemocional
                    </h2>
                    <p className="text-zinc-300 text-l">
                      Ajude a desenvolver habilidades como resiliência,
                      inteligência emocional e liderança.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-400 rounded-md">
                    <TrendingUpDown className="size-9 text-zinc-50" />
                  </div>
                  <div>
                    <h2 className="text-zinc-50 text-xl">
                      Carreira e Empreendedorismo
                    </h2>
                    <p className="text-zinc-300 text-l">
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
              Torne-se um voluntário ou mentor
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
