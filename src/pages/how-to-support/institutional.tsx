/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import { ContactSection } from '@/components/contact-section'
import { Button } from '@/components/ui/button'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import { ArrowRight, ChevronsDownIcon, ChevronsUpIcon } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Institutonal() {
  const refBanner: any = useRef()
  const refContact: any = useRef()

  const sections = [refBanner, refContact]

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
      {/* Seção de parceiros institucionais */}
      <section
        ref={refBanner}
        className="py-10 md:py-20 border-t bg-background15 bg-center bg-cover bg-no-repeat border-b-2 border-zinc-700"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16 items-start">
          <div className="bg-zinc-800 gap-10 md:gap-20 border-2 border-zinc-700 p-5 sm:p-10 rounded-md flex flex-col items-start">
            <div className="flex-1 text-center">
              <h2 className="text-xl md:text-3xl font-semibold text-zinc-50">
                Parceiros Institucionais: <br /> Construindo Pontes para o
                Futuro
              </h2>

              <p className="mt-4 text-zinc-300 font-light leading-relaxed text-sm sm:text-md md:text-lg">
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
              <div className="flex flex-col md:flex-row items-start justify-start gap-5">
                <div className="w-full space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-medium text-violet-500">
                        01
                      </span>
                      <h2 className="text-xl text-white">
                        Alinhamento de Propósitos
                      </h2>
                    </div>

                    <div className="flex p-2 items-center justify-center rounded-md bg-gradient-to-r from-violet-500 to-blue-400">
                      <img
                        src="/rocket-logo.png"
                        alt="foguete logo amigu"
                        className="w-5"
                      />
                    </div>
                  </div>

                  <p className="text-zinc-300 max-w-lg text-justify text-lg md:text-left">
                    Parcerias estratégicas com organizações que compartilham
                    nossa visão, permitindo a criação de sinergias que aceleram
                    a transformação social.
                  </p>
                </div>

                <div className="border-t-2 md:border-t-0 md:border-l-2 border-zinc-700 pt-5 md:pt-0 md:pl-5 w-full">
                  <div className="w-full space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-medium text-violet-500">
                          02
                        </span>
                        <h2 className="text-xl text-white">
                          Cooperação em Projetos
                        </h2>
                      </div>

                      <div className="flex p-2 items-center justify-center rounded-md bg-gradient-to-r from-violet-500 to-blue-400">
                        <img
                          src="/rocket-logo.png"
                          alt="foguete logo amigu"
                          className="w-5"
                        />
                      </div>
                    </div>

                    <p className="text-zinc-300 max-w-lg text-justify text-lg md:text-left">
                      Colaboração na concepção, desenvolvimento e execução de
                      projetos que atendem às necessidades específicas das
                      comunidades alvo do Instituto.
                    </p>
                  </div>
                </div>

                <div className="border-t-2 md:border-t-0 md:border-l-2 border-zinc-700 pt-5 md:pt-0 md:pl-5 w-full">
                  <div className="w-full space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-medium text-violet-500">
                          03
                        </span>
                        <h2 className="text-xl text-white">
                          Ampliação de Impacto
                        </h2>
                      </div>

                      <div className="flex p-2 items-center justify-center rounded-md bg-gradient-to-r from-violet-500 to-blue-400">
                        <img
                          src="/rocket-logo.png"
                          alt="foguete logo amigu"
                          className="w-5"
                        />
                      </div>
                    </div>
                    <p className="text-zinc-300 max-w-lg text-justify text-lg md:text-left">
                      Possibilidade de ampliar o alcance e a eficácia das ações
                      do Instituto, utilizando a expertise e os recursos dos
                      parceiros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Seja um parceiro institucional */}
      <Link to="/">
        <div className="bg-gradient-to-r from-violet-500 to-blue-400">
          <div className="max-w-7xl mx-auto px-4 flex gap-2 flex-row items-center justify-center py-6">
            <img
              src="/rocket-logo.png"
              alt="foguete logo amigu"
              className="w-8"
            />
            <h1 className="text-lg md:text-xl text-zinc-50">
              Seja um parceiro institucional
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
