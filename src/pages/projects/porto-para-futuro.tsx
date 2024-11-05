/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

import {
  AwardIcon,
  UsersRoundIcon,
  TicketCheckIcon,
  PlusIcon,
  MinusIcon,
  QuoteIcon,
  Cog,
  ArrowRight,
  ChevronsUpIcon,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { ContactSection } from '@/components/contact-section'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'

interface AcordionProps {
  title: string
  descripition: string
}

const acordionArray: AcordionProps[] = [
  {
    title: 'Arquitetura da Competição',
    descripition:
      'A maratona será organizada em várias etapas, começando com um período de imersão nas comunidades portuárias, onde os competidores terão a oportunidade de entender as necessidades locais. Em seguida, os participantes formarão equipes multidisciplinares e começarão a desenvolver suas soluções com o apoio de mentores experientes.',
  },
  {
    title: 'Cidades e Comunidades Participantes',
    descripition:
      'A maratona será realizada em várias cidades portuárias ao longo do Brasil, incluindo Santos, Rio de Janeiro e Salvador. Cada uma dessas cidades foi escolhida por sua importância econômica e pelos desafios únicos que suas comunidades enfrentam.',
  },
  {
    title: 'Impactos Esperados',
    descripition:
      'Ao final da maratona, esperamos que as soluções desenvolvidas contribuam para a melhoria das condições de vida nas comunidades portuárias, promovendo a inclusão digital, a educação e o desenvolvimento sustentável. As melhores soluções poderão ser implementadas com o apoio das empresas parceiras, gerando impacto real e duradouro.',
  },
]

export function PortoParaFuturo() {
  const [isActive, setIsActive] = useState({
    status: true,
    key: 0,
  })
  const { hash } = useLocation()
  const refBanner: any = useRef()
  const refProject: any = useRef()
  const refHowWillWork: any = useRef()

  const handleClick = (key: number) => {
    if (isActive.key === key) {
      setIsActive({
        key: key === isActive.key ? 0 : key,
        status: !isActive.status,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }

  useEffect(() => {
    if (hash === '#destaques') {
      window.scroll({
        top: refProject.current.offsetTop - 150,
        behavior: 'smooth',
      })
    }

    if (hash === '#como-funcionara') {
      window.scroll({
        top: refHowWillWork.current.offsetTop - 140,
        behavior: 'smooth',
      })
    }
  }, [hash])

  return (
    <>
      <section
        ref={refBanner}
        className="bg-background12 bg-center bg-cover bg-no-repeat py-10 md:py-48 border-zinc-700 border-y-2 pt-28"
      >
        <div className="max-w-7xl w-full mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-3 w-full">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="w-full flex-1">
                <span className="text-violet-500 text-sm font-semibold uppercase">
                  Maratona Um Porto para o Futuro
                </span>
                <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 tracking-tight">
                  Maratona Um Porto para o Futuro: <br /> Soluções para
                  comunidades portuárias
                </h2>
                <p className="text-zinc-400 text-lg text-justify mt-4">
                  A "Maratona Um Porto para o Futuro" desafia jovens talentos a
                  desenvolverem soluções inovadoras que melhorem a qualidade de
                  vida das pessoas que vivem em comunidades portuárias. Este
                  evento anual promove a inclusão social e digital, capacitando
                  os moradores locais com ferramentas que transformam suas vidas
                  e oferecem novas oportunidades de desenvolvimento.
                </p>
              </div>

              <div className="flex-1 w-full">
                <img
                  alt="Imagem"
                  src="/porto-para-futuro-2.png"
                  className="z-10 w-full"
                />
              </div>
            </div>
          </div>

          <div
            ref={refProject}
            className="mt-10 flex flex-col items-start justify-center"
          >
            <div className="flex-1 flex flex-col items-start gap-2">
              <h2 className="text-2xl text-white font-semibold">
                Destaques do Projeto
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 mt-4 items-start gap-4">
                <div className="md:h-[340px] flex flex-col items-start gap-4 bg-zinc-800 border border-zinc-700 p-7 rounded-md">
                  <div className="p-2 bg-violet-500 rounded-md">
                    <AwardIcon className="size-6 text-zinc-50 " />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-zinc-50 text-2xl font-medium">
                      Soluções para <br /> comunidades portuárias
                    </h2>
                    <p className="text-lg text-zinc-300 text-justify">
                      Os participantes da maratona são desafiados a criar
                      soluções que abordem as necessidades reais das comunidades
                      portuárias, como educação, saúde, segurança e inclusão
                      digital.
                    </p>
                  </div>
                </div>

                <div className="md:h-[340px] flex flex-col items-start gap-4 bg-zinc-800 border border-zinc-700 p-7 rounded-md">
                  <div className="p-2 bg-violet-500 rounded-md">
                    <UsersRoundIcon className="size-6 text-zinc-50" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-zinc-50 text-2xl font-medium">
                      Empoderamento e <br /> transformação
                    </h2>
                    <p className="text-lg text-zinc-300 text-justify">
                      A maratona promove a transformação social ao capacitar os
                      moradores dessas comunidades, tornando-os resolvedores que
                      contribuem para o desenvolvimento local.
                    </p>
                  </div>
                </div>

                <div className="md:h-[340px] flex flex-col items-start gap-4 bg-zinc-800 border border-zinc-700 p-7 rounded-md">
                  <div className="p-2 bg-violet-500 rounded-md">
                    <TicketCheckIcon className="size-6 text-zinc-50" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-zinc-50 text-2xl font-medium">
                      Parcerias com <br /> empresas
                    </h2>
                    <p className="text-lg text-zinc-300 text-justify">
                      Empresas do setor portuário e logístico participam como
                      incentivadoras, mantenedoras e impulsionadoras dos
                      projetos, apoiando as melhores ideias e integrando
                      resolvedores qualificados em seus quadros.
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={refHowWillWork}
                className="flex w-full items-center my-10 gap-10"
              >
                <div className="w-full flex flex-col items-center gap-5">
                  <h2 className="text-3xl w-full md:w-auto sm:text-3xl md:text-center md:text-4xl font-semibold text-zinc-50">
                    Como funcionará a maratona
                  </h2>

                  <p className="max-w-2xl text-justify md:text-lg md:text-center">
                    Saiba todos os detalhes da maratona: descubra como será o
                    formato, etapas, desafios e como você pode participar para
                    alcançar o melhor desempenho nessa jornada incrível!
                  </p>

                  <div className="w-full flex flex-col items-center gap-5 mt-5">
                    {acordionArray.map((item, index) => (
                      <Card key={index} className="w-full flex-1">
                        <CardContent
                          onClick={() => handleClick(index)}
                          className="cursor-pointer flex flex-col items-center justify-center rounded-md bg-zinc-700 p-4"
                        >
                          <div
                            className={`${isActive.key === index && isActive.status && 'border-b border-zinc-600 pb-4 mb-2'} w-full flex items-center justify-between`}
                          >
                            <h2
                              onClick={() => handleClick(index)}
                              className="text-zinc-300 select-none pointer-events-none hover:text-zinc-700 cursor-pointer"
                            >
                              {item.title}
                            </h2>

                            {/* Botão com rotação e transição de ícones */}
                            <Button
                              onClick={() => handleClick(index)}
                              size="icon"
                              className="bg-violet-500 text-white w-6 h-6 hover:bg-violet-500/90 rounded-full transition-transform duration-300"
                              style={{
                                transform:
                                  isActive.key === index && isActive.status
                                    ? 'rotate(180deg)'
                                    : 'rotate(0deg)',
                              }}
                            >
                              {isActive.key !== index || !isActive.status ? (
                                <PlusIcon className="transition-opacity duration-300 opacity-100 size-4" />
                              ) : (
                                <MinusIcon className="transition-opacity duration-300 opacity-100 size-4" />
                              )}
                            </Button>
                          </div>

                          {/* Animação para o parágrafo com AnimatePresence para fechar */}
                          <AnimatePresence initial={false}>
                            {isActive.key === index && isActive.status && (
                              <motion.p
                                key={item.title}
                                transition={{ duration: 0.1 }}
                                exit={{ opacity: 0, height: 0 }}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="text-zinc-400 pointer-events-none select-none text-justify md:text-left"
                              >
                                {item.descripition}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="w-full bg-zinc-800 border-4 border-zinc-700 p-7 rounded-lg flex flex-col items-start gap-2 hover:scale-[.98] transition-all">
                  <QuoteIcon className="text-violet-500 fill-violet-500 size-8" />

                  <p className="text-zinc-300 text-lg text-justify md:text-left">
                    Participar da Maratona Um Porto para o Futuro foi uma
                    experiência incrível. Desenvolvi uma solução que foi adotada
                    pela minha própria comunidade, e isso abriu as portas para
                    minha carreira.
                  </p>

                  <h2 className="text-zinc-500 text-lg">
                    - Lucas, vencedor da maratona
                  </h2>
                </div>
                <div className="w-full max-w-7xl mx-auto px-4 flex gap-16 items-start">
                  <div className="w-full bg-zinc-800 border-4 border-zinc-700 p-7 rounded-lg flex flex-col items-start gap-2 hover:scale-[.98] transition-all">
                    <span className="uppercase text-violet-600 flex items-center gap-2">
                      <Cog className="size-5" />
                      Engrenagem de transformação
                    </span>

                    <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 tracking-tight">
                      Como eles se conectam
                    </h2>

                    <p className="text-zinc-300 text-lg text-justify md:text-left">
                      A Maratona Um Porto para o Futuro é o ponto de partida
                      para a identificação de problemas e necessidades das
                      comunidades portuárias. As soluções desenvolvidas são
                      aplicadas diretamente nas vidas dessas pessoas, que, por
                      sua vez, podem ser impactadas pelo AmiGU Resolv e pelo
                      Raíces Digitales, fechando o ciclo de transformação
                      promovido pelo Instituto AmiGU.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA + Participe da próxima maratona */}
      <Link to="/">
        <div className="bg-gradient-to-r from-violet-500 to-blue-400">
          <div className="max-w-7xl mx-auto px-4 flex gap-2 flex-row items-center justify-center py-6">
            <img
              src="/rocket-logo.png"
              alt="foguete logo amigu"
              className="w-8"
            />
            <h1 className="text-xs md:text-xl text-zinc-50">
              Visite o site Maratona um Porto para o Futuro
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
                <Link
                  to={'/projetos/maratona-um-porto-para-o-futuro#destaques'}
                >
                  Destaques do projeto
                </Link>
              </Button>
              <Button
                asChild
                className="bg-violet-500 hover:bg-violet-500/90 text-white"
              >
                <Link
                  to={
                    '/projetos/maratona-um-porto-para-o-futuro#como-funcionara'
                  }
                >
                  Como funcionará
                </Link>
              </Button>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}
