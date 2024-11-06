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
import { AnimatePresence, motion } from 'framer-motion'
import {
  QuoteIcon,
  Cog,
  ArrowRight,
  ChevronsDownIcon,
  ChevronsUpIcon,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

type Language = 'BR' | 'ES'

interface Content {
  title: string
  description: string
  testimonial: string
  testimonialAuthor: string
  sectionTitles: {
    section1: string
    section2: string
    section3: string
  }
  sectionDescriptions: {
    section1: string
    section2: string
    section3: string
  }
  transformationTitle: string
  transformationDescription: string
  cta: {
    ctaTitle: string
    ctaDescription: string
    ctaButtonText: string
  }
  imageUrl: string
}

const contentRaicesDigitaless: Record<Language, Content> = {
  BR: {
    title:
      'Raíces Digitales Brasil: Empoderando Mulheres e Herdeiros de Negócios Tradicionais',
    description:
      'O Raíces Digitales Brasil é voltado para a capacitação de mulheres empreendedoras e jovens herdeiros de negócios tradicionais em áreas urbanas e rurais. Com foco na inclusão digital e na transformação de negócios familiares, o projeto oferece treinamento em marketing digital, vendas online, e gestão de microempresas, ajudando a preservar as raízes culturais e econômicas das comunidades locais.',
    testimonial:
      'O Raíces Digitales Brasil me deu as ferramentas para transformar o negócio da minha família. Hoje, estamos crescendo e preservando nossas tradições ao mesmo tempo.',
    testimonialAuthor: '- Ana, empreendedora e participante do projeto',
    sectionTitles: {
      section1: 'Capacitação em Negócios Digitais',
      section2: 'Empoderamento Feminino',
      section3: 'Preservação Cultural',
    },
    sectionDescriptions: {
      section1:
        'As participantes recebem treinamento em ferramentas digitais que permitem a modernização e o crescimento de seus negócios.',
      section2:
        'O projeto oferece um espaço seguro e de apoio para que as mulheres possam desenvolver suas habilidades e se tornarem líderes em suas comunidades.',
      section3:
        'As participantes recebem treinamento em ferramentas digitais que permitem a modernização e o crescimento de seus negócios.',
    },
    transformationTitle: 'Como eles se conectam',
    transformationDescription:
      'O Raíces Digitales Brasil atua diretamente na modernização de negócios familiares, capacitando mulheres e jovens empreendedores que podem se beneficiar das mentorias do AmiGU Resolv e das soluções desenvolvidas na Maratona Um Porto para o Futuro. Juntos, esses projetos fortalecem o tecido social e econômico das comunidades participantes.',
    cta: {
      ctaTitle: 'Participe da Próxima Maratona – Entre em contato',
      ctaDescription: 'Participe da próxima maratona – Garanta sua vaga agora!',
      ctaButtonText: 'Inscreva-se',
    },
    imageUrl: '/raices-digitales-br.png',
  },
  ES: {
    title:
      'Raíces Digitales Espanha: Inovação para Negócios Familiares e Comunidades Tradicionais',
    description:
      'O Raíces Digitales Espanha foca na capacitação de jovens herdeiros de negócios familiares em regiões como Galícia e Catalunha. Este projeto é essencial para a preservação das tradições culturais e econômicas dessas áreas, enquanto prepara os participantes para enfrentar os desafios da era digital. Através de treinamentos especializados, os jovens são equipados para modernizar e expandir os negócios de suas famílias, mantendo suas raízes enquanto exploram novas oportunidades de crescimento.',
    testimonial:
      'O Raíces Digitales Espanha me ajudou a modernizar o negócio da minha família, mantendo nossas tradições vivas enquanto exploramos novas oportunidades no mercado europeu.',
    testimonialAuthor: '- Carlos, jovem empreendedor e participante do projeto',
    sectionTitles: {
      section1: 'Treinamento em Tecnologia e Inovação',
      section2: 'Fortalecimento das Comunidades Locais',
      section3: 'Conexão com o Mercado Europeu',
    },
    sectionDescriptions: {
      section1:
        'Os jovens herdeiros recebem treinamento em ferramentas digitais avançadas, que permitem a transformação e o crescimento dos negócios familiares.',
      section2:
        'O projeto promove a inclusão digital e a modernização dos negócios tradicionais, contribuindo para o desenvolvimento sustentável das comunidades.',
      section3:
        'Parcerias com universidades e empresas locais abrem portas para que os participantes expandam suas operações e alcancem novos mercados.',
    },
    transformationTitle: 'Como eles se conectam',
    transformationDescription:
      'O Raíces Digitales Espanha não só moderniza negócios familiares, mas também conecta esses jovens empreendedores com oportunidades de mentoria e soluções inovadoras, como as desenvolvidas na Maratona Um Porto para o Futuro e no AmiGU Resolv. Assim, o impacto do projeto se expande, promovendo um desenvolvimento sustentável em várias frentes.',
    cta: {
      ctaTitle: 'Participe do Raíces Digitales Espanha - Entre em contato',
      ctaDescription: 'Participe da próxima maratona – Garanta sua vaga agora!',
      ctaButtonText: 'Inscreva-se Agora',
    },
    imageUrl: '/raices-digitales-esp.png',
  },
}

export function RaicesDigitales() {
  const [language, setLanguage] = useState<Language>('BR')

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
  }

  // Variantes para animação
  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  }

  const refBanner: any = useRef()
  const refProject: any = useRef()
  const refContact: any = useRef()

  const sections = [refBanner, refProject, refContact]

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
    <main>
      {/* Seção Raíces Digitales */}
      <section
        ref={refBanner}
        className="bg-background13 bg-center bg-cover bg-no-repeat pt-28 md:pt-36 border-zinc-700 border-y-2 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6 overflow-hidden">
          {/* Conteúdo Principal com Animação */}
          <AnimatePresence mode="wait">
            <motion.div
              key={language}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
              className="bg-zinc-800 border-4 border-zinc-700 p-4 md:p-10 overflow-hidden rounded-lg flex flex-col items-center w-full"
            >
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => handleLanguageChange('BR')}
                  disabled={language === 'BR'}
                  className={`${language === 'BR' ? 'bg-violet-500 hover:bg-violet-900 disabled:opacity-100' : 'bg-violet-900 hover:bg-violet-500 opacity-60'} text-white flex items-center gap-2`}
                >
                  <img
                    src="/flags/brazil-flag.svg"
                    alt="Brasil"
                    className="w-6 h-6"
                  />
                  Brasil
                </Button>
                <Button
                  onClick={() => handleLanguageChange('ES')}
                  disabled={language === 'ES'}
                  className={`${language === 'ES' ? 'bg-violet-500 hover:bg-violet-900 disabled:opacity-100' : 'bg-violet-900 hover:bg-violet-500 opacity-90'} text-white flex items-center gap-2`}
                >
                  <img
                    src="/flags/spain-flag.svg"
                    alt="Espanha"
                    className="w-6 h-6"
                  />
                  Espanha
                </Button>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between mt-20 w-full gap-10">
                <div className="flex-1 flex flex-col">
                  <span className="text-violet-500 text-xl">
                    Raíces Digitales
                  </span>
                  <h2 className="text-lg md:text-3xl text-white font-semibold mt-2  md:max-w-3xl">
                    {contentRaicesDigitaless[language].title}
                  </h2>

                  <p className="mt-5 text-justify text-lg text-zinc-300 max-w-4xl">
                    {contentRaicesDigitaless[language].description}
                  </p>
                </div>

                <div className="flex-1 w-full md:mt-10 lg:mt-0 overflow-hidden rounded-lg">
                  <img
                    alt="Imagem"
                    src={contentRaicesDigitaless[language].imageUrl}
                    className="aspect-auto object-center rounded-lg border-4 border-zinc-700 z-10 w-full h-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 mt-10">
                <div className="border-b-2 border-zinc-700 pb-5 w-full space-y-1.5">
                  <h2 className="text-xl font-semibold text-white">
                    {contentRaicesDigitaless[language].sectionTitles.section1}
                  </h2>
                  <p className="text-zinc-300 text-justify md:text-left">
                    {
                      contentRaicesDigitaless[language].sectionDescriptions
                        .section1
                    }
                  </p>
                </div>

                <div
                  ref={refProject}
                  className="border-b-2 border-zinc-700 pb-5 w-full space-y-1.5"
                >
                  <h2 className="text-xl font-semibold text-white">
                    {contentRaicesDigitaless[language].sectionTitles.section2}
                  </h2>
                  <p className="text-zinc-300 text-justify text-lg md:text-left">
                    {
                      contentRaicesDigitaless[language].sectionDescriptions
                        .section2
                    }
                  </p>
                </div>

                <div className=" border-zinc-700 pb-5 w-full space-y-1.5">
                  <h2 className="text-xl font-semibold text-white">
                    {contentRaicesDigitaless[language].sectionTitles.section3}
                  </h2>
                  <p className="text-zinc-300 text-justify md:text-left">
                    {
                      contentRaicesDigitaless[language].sectionDescriptions
                        .section3
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testemunho com Animação */}
          <AnimatePresence mode="wait">
            <motion.div
              key={language + '-testimonial'}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full flex gap-16 items-start">
                <div className="w-full bg-zinc-800 border-4 border-zinc-700 p-7 rounded-lg flex flex-col items-start gap-2 hover:scale-[.98] transition-all">
                  <QuoteIcon className="text-violet-500 fill-violet-500 size-8" />

                  <p className="text-zinc-300 text-lg text-justify md:text-left">
                    {contentRaicesDigitaless[language].testimonial}
                  </p>

                  <h2 className="text-zinc-500 text-lg">
                    {contentRaicesDigitaless[language].testimonialAuthor}
                  </h2>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Seção de Transformação com Animação */}
          <AnimatePresence mode="wait">
            <motion.div
              key={language + '-transformation'}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full flex gap-16 items-start">
                <div className="w-full bg-zinc-800 border-4 border-zinc-700  p-7 rounded-lg flex flex-col items-start gap-2 hover:scale-[.98] transition-all">
                  <span className="uppercase text-violet-500 flex items-center gap-2">
                    <Cog className="size-5" />
                    Engrenagem de transformação
                  </span>

                  <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 font-semibold tracking-tight">
                    {contentRaicesDigitaless[language].transformationTitle}
                  </h2>

                  <p className="text-zinc-300 text-lg text-justify md:text-left">
                    {
                      contentRaicesDigitaless[language]
                        .transformationDescription
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Seção de Chamada para Ação (CTA) com Animação */}
        <AnimatePresence mode="wait">
          <motion.div
            key={language + '-cta'}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-400 to-violet-500 mt-10 md:mt-20"
          >
            {/* Seção CTA + Participe da próxima maratona */}
            <Link to="/maratonas/#contato">
              <div className="bg-gradient-to-r from-violet-500 to-blue-400">
                <div className="max-w-7xl mx-auto px-4 flex gap-2 flex-row items-center justify-center py-6">
                  <img
                    src="/rocket-logo.png"
                    alt="foguete logo amigu"
                    className="w-8"
                  />
                  <h1 className="text-lg md:text-xl text-zinc-50">
                    {contentRaicesDigitaless[language].cta.ctaTitle}
                  </h1>
                  <ArrowRight className="size-5" />
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </section>

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
