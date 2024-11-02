/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  AwardIcon,
  Building,
  DollarSign,
  HandshakeIcon,
  Heart,
  Link2,
  QuoteIcon,
  TicketCheckIcon,
  Users,
  UsersRoundIcon,
} from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useEffect, useRef } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ContactSection } from '@/components/contact-section'

interface TimelineProps {
  title: string
  descripition: string
}

const historyGustavo: TimelineProps[] = [
  {
    title: 'Uma Perda Inesperada',
    descripition:
      'Gustavo foi um jovem que, apesar de seu potencial, teve sua vida interrompida prematuramente. A dor dessa perda foi imensa para Marco, que decidiu honrar a memória de seu sobrinho de uma maneira que refletisse os valores e os sonhos que Gustavo representava',
  },
  {
    title: 'A Metodologia Hackathon como Cura',
    descripition:
      'Após a morte de Gustavo, Marco encontrou nos hackathons – maratonas de inovação que combinam tecnologia e colaboração – uma forma de canalizar sua dor e criar algo transformador. Esses eventos não só permitiram a Marco lidar com sua perda, mas também se tornaram uma ferramenta para ajudar jovens a superar seus próprios desafios e a encontrar novas oportunidades.',
  },
  {
    title: 'Impacto no Instituto',
    descripition:
      'A metodologia do hackathon se tornou um pilar central dos projetos do Instituto AmiGU. Desde a primeira maratona, esses eventos foram projetados para empoderar jovens, promovendo a inovação e oferecendo um ambiente onde eles podem desenvolver soluções para problemas reais, transformando suas vidas e as de suas comunidades.',
  },
]

export function About() {
  const { hash } = useLocation()

  const navigate = useNavigate()

  const refBanner: any = useRef()
  const refMissionAndVision: any = useRef()
  const refHistoryFounder: any = useRef()
  const refResults: any = useRef()
  const refValues: any = useRef()

  useEffect(() => {
    if (hash === '') {
      window.scroll({
        top: refBanner.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#missao-e-visao') {
      window.scroll({
        top: refMissionAndVision.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#historia-e-fundador') {
      window.scroll({
        top: refHistoryFounder.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#resultados-e-impactos') {
      window.scroll({
        top: refResults.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }

    if (hash === '#valores-do-instituto') {
      window.scroll({
        top: refValues.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }
  }, [hash])

  return (
    <main>
      {/* Seção de banner */}
      <section
        ref={refBanner}
        className="py-10 px-4 h-[40rem] md:h-[45rem] bg-[url(/portoHack-497.jpg)] bg-no-repeat bg-center bg-cover pt-24"
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
            <span className="border-4 border-violet-700 text-white px-4 rounded-full animate-bounce py-1 text-sm md:text-md flex items-center">
              <Heart className="size-4 mr-2 fill-white" />
              Transformando vidas
            </span>

            <h1 className="text-xl text-center md:text-5xl font-semibold text-white mt-3">
              Nossa missão é transformar <br /> vidas e construir o futuro
              melhor{' '}
            </h1>

            <p className="text-md md:text-lg text-zinc-300 mt-2 max-w-xl text-center">
              Descubra a história e os valores que impulsionam o Instituto AmiGU
              a criar oportunidades e mudar realidades em todo o Brasil e no
              mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Seção CTA + Junte-se à comunidade AmiGU */}
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

      {/* Seção o que nos move */}
      <section
        ref={refMissionAndVision}
        className="bg-zinc-800 border-zinc-700 py-10 md:py-20 border-b-2 bg-background7 bg-center bg-cover bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
            <div className="flex-1 flex flex-col items-start gap-4">
              <div>
                <span className="text-violet-500 text-sm font-semibold uppercase ">
                  Nossa Visão
                </span>
                <h2 className="text-3xl text-zinc-50 mt-1 tracking-tight">
                  O que nos move
                </h2>
              </div>
              <p className="text-zinc-400 text-lg text-justify">
                No Instituto AmiGU, acreditamos que o verdadeiro poder da
                transformação está nas pessoas. Nossa missão é clara capacitar
                comunidades em situação de vulnerabilidade, empoderando jovens,
                mulheres e microempreendedores para que possam alcançar seu
                pleno potencial. Fazemos isso através da educação, da inovação
                tecnológica, e de projetos que geram impacto social sustentável.
              </p>
            </div>
            <div className="flex-1 w-full">
              <img
                alt="Imagem"
                src="/"
                className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-10 w-full">
              <div className="hover:scale-[.96] transition-all relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                <div className="bg-violet-600 border-4 border-violet-800 font-bold text-white size-10 flex items-center justify-center rounded-full">
                  1
                </div>

                <h2 className="text-zinc-50 text-xl mt-5">Inclusão</h2>

                <p className="text-zinc-300 leading-relaxed mt-3">
                  Acreditamos que todas as pessoas merecem oportunidades iguais
                  de crescimento e sucesso.
                </p>
              </div>

              <div className="hover:scale-[.96] transition-all md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                <div className="bg-violet-600 border-4 border-violet-800 font-bold text-white size-10 flex items-center justify-center rounded-full">
                  2
                </div>

                <h2 className="text-zinc-50 text-xl mt-5">Inovação</h2>

                <p className="text-zinc-300 leading-relaxed mt-3">
                  Usamos a tecnologia para abrir novas portas e criar soluções
                  que transformam vidas.
                </p>
              </div>

              <div className="hover:scale-[.96] transition-all md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                <div className="bg-violet-600 border-4 border-violet-800 font-bold text-white size-10 flex items-center justify-center rounded-full">
                  3
                </div>

                <h2 className="text-zinc-50 text-xl mt-5">Sustentabilidade</h2>

                <p className="text-zinc-300 leading-relaxed mt-3">
                  Nossas ações são projetadas para ter um impacto duradouro,
                  beneficiando tanto as comunidades quanto o planeta.
                </p>
              </div>

              <div className="hover:scale-[.96] transition-all md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                <div className="bg-violet-600 border-4 border-violet-800 font-bold text-white size-10 flex items-center justify-center rounded-full">
                  4
                </div>

                <h2 className="text-zinc-50 text-xl mt-3">Transparência</h2>

                <p className="text-zinc-300 leading-relaxed mt-3">
                  Agimos com clareza e responsabilidade, prestando contas de
                  todas as nossas ações e recursos.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full pt-10">
              <div className="flex items-center justify-center rounded-t-md py-2 md:py-0 md:rounded-b-none md:rounded-l-md md:rounded-r-none px-4 bg-gradient-to-r from-violet-500 to-blue-400">
                <img
                  src="/rocket-logo.png"
                  alt="foguete logo amigu"
                  className="w-8"
                />
              </div>
              <div className="flex-1 border-x-2 border-b-2 md:border-x-0 md:border-y-2 md:border-r-2 bg-zinc-800 border-zinc-700 md:pr-3 md:pl-5 md:py-2 py-5 px-3 md:px-0 rounded-b-md md:rounded-b-none md:rounded-r-md">
                <h2 className="text-3xl text-zinc-50 mt-1 tracking-tight">
                  Visão
                </h2>
                <p className="text-zinc-400 text-lg text-justify md:text-left mt-1">
                  Ser inspiração global na promoção da inclusão digital e no
                  desenvolvimento humano, inspirando pessoas e organizações a se
                  unirem por um mundo mais justo e igualitário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de o que nos guia */}
      <section
        ref={refValues}
        className="bg-zinc-800 py-10 md:py-20 border-b-2 border-zinc-700 bg-background9 bg-center bg-cover bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 flex flex-col items-start gap-4">
              <div>
                <span className="text-violet-500 text-sm font-semibold uppercase ">
                  Nossa missão
                </span>
                <h2 className="text-3xl text-zinc-50 mt-1 tracking-tight">
                  O que nos guia
                </h2>
              </div>
              <p className="text-zinc-400 text-lg text-justify">
                Nosso trabalho é guiado por um conjunto de valores que
                acreditamos serem essenciais para criar um impacto real e
                duradouro. No Instituto AmiGU, agimos com integridade,
                responsabilidade e compromisso com o futuro. Nossa ética e
                nossos valores são o alicerce de tudo o que fazemos, desde a
                concepção de um projeto até a sua execução.
              </p>
            </div>

            <div className="flex-1 w-full flex flex-col items-center justify-center gap-5 md:gap-10">
              <div className="w-full hover:scale-[.97] transition-all flex flex-col items-start justify-center px-5 py-5 rounded-xl bg-zinc-800 border-4 border-zinc-700 backdrop-blur-lg">
                <div className="hidden md:block bg-zinc-700 p-3 rounded-full absolute -left-5 -top-5">
                  <Building className="size-4" />
                </div>
                <h2 className="text-xl font-semibold text-zinc-300 md:mt-3">
                  Integridade
                </h2>
                <p className="text-zinc-300">
                  Agimos de forma honesta e transparente em todas as nossas
                  ações.
                </p>
              </div>

              <div className="w-full hover:scale-[.97] transition-all flex flex-col items-start justify-center px-5 py-5  rounded-xl  bg-zinc-800 border-4 border-zinc-700 backdrop-blur-lg">
                <div className="hidden md:block bg-zinc-700 p-3 rounded-full absolute -left-5 -top-5">
                  <DollarSign className="size-4" />
                </div>
                <h2 className="text-xl font-semibold text-white md:mt-3">
                  Compromisso
                </h2>
                <p className="text-zinc-300">
                  Nos dedicamos completamente à nossa missão e às pessoas que
                  servimos.
                </p>
              </div>

              <div className="w-full hover:scale-[.97] transition-all flex flex-col items-start justify-center px-5 py-5 rounded-xl bg-zinc-800 border-4 border-zinc-700 backdrop-blur-lg">
                <div className="hidden md:block bg-zinc-700 p-3 rounded-full absolute -left-5 -top-5">
                  <Users className="size-4" />
                </div>
                <h2 className="text-xl font-semibold text-zinc-300 md:mt-3">
                  Responsabilidade
                </h2>
                <p className="text-zinc-300">
                  Prestamos contas de cada ação e cada recurso utilizado,
                  garantindo que nosso trabalho gere o máximo de impacto
                  positivo.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full pt-10">
            <div className="flex items-center justify-center rounded-t-md py-2 md:py-0 md:rounded-b-none md:rounded-l-md md:rounded-r-none px-4 bg-gradient-to-r from-violet-500 to-blue-400">
              <img
                src="/rocket-logo.png"
                alt="foguete logo amigu"
                className="w-8"
              />
            </div>
            <div className="flex-1 border-x-2 border-b-2 md:border-x-0 md:border-y-2 md:border-r-2 bg-zinc-800 border-zinc-700 md:pr-3 md:pl-5 md:py-2 py-5 px-3 md:px-0 rounded-b-md md:rounded-b-none md:rounded-r-md">
              <h2 className="text-3xl text-zinc-50 mt-1 tracking-tight">
                Missão
              </h2>
              <p className="text-zinc-400 text-lg text-justify md:text-left mt-1">
                Promover a inclusão digital e o desenvolvimento humano por meio
                de projetos inovadores e sustentáveis, que transformem vidas e
                comunidades. No Instituto AmiGU, nossa missão é capacitar
                pessoas e organizações com conhecimento e ferramentas para que
                possam superar barreiras sociais e econômicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA + Conheça nossa história */}
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

      {/* Seção uma jornada de dedicação de impacto */}
      <section
        ref={refHistoryFounder}
        className="py-10 md:py-20 bg-zinc-800 border-b-2 border-zinc-700 bg-center bg-cover bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-20 items-center">
          <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="text-2xl w-full md:w-auto sm:text-3xl md:text-center md:text-4xl font-semibold text-zinc-50">
              Uma jornada de dedicação e impacto
            </h2>
            <p className="text-justify md:text-center text-zinc-300 max-w-4xl">
              O Instituto AmiGU nasceu do{' '}
              <strong>sonho de Marco Riveiros</strong>, que desde cedo entendeu
              o poder da educação e da tecnologia para transformar vidas. Ele{' '}
              <strong>iniciou sua carreira profissional</strong> enfrentando
              grandes desafios, o que lhe deu uma visão única sobre as
              necessidades das pessoas e das empresas.{' '}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-12 items-center">
            <div>
              <img
                alt="Imagem"
                src="/marco-gu.jpeg"
                className="w-[440px] h-[425px] object-cover rounded-lg border-4 border-zinc-700 z-10"
              />
            </div>

            <div className="flex-1 mt-5 md:mt-0">
              <h2 className="text-5xl mb-2">Marco Riveiros</h2>
              <div className="flex items-center gap-2">
                <div className="h-[2px] bg-gradient-to-r from-blue-400 to-violet-500 w-10" />
                <span className="text-lg">Empresário</span>
              </div>
              <p className="text-lg mt-4 text-zinc-300">
                <span className="font-semibold text-white">
                  Começo Humilde:
                </span>
                {'  '}
                Em 2019, Marco fundou o Instituto AmiGU, com a missão de
                democratizar o acesso ao conhecimento e capacitar populações
                vulneráveis para que possam reescrever suas histórias.
              </p>

              <p className="text-lg mt-4 text-zinc-300">
                <span className="font-semibold text-white">
                  Inovação e Empreendedorismo:
                </span>
                {'  '}
                Sua habilidade de inovar e aplicar ciência de dados para
                resolver problemas complexos o levou a criar a Resolv e,
                posteriormente, o Instituto AmiGU, que utiliza a tecnologia para
                capacitar jovens e transformar comunidades.
              </p>

              <p className="text-lg mt-4 text-zinc-300">
                <span className="font-semibold text-white">
                  Fundação do Instituto AmiGU:
                </span>
                {'  '}
                Em 2019, Marco transformou sua experiência e visão em ação
                concreta, fundando o Instituto AmiGU. Desde então, a organização
                já impactou mais de 88.000 pessoas e ajudou 6.000 famílias
                através de projetos que unem educação, tecnologia e inovação.
              </p>
            </div>
          </div>

          <div className="w-full mx-auto flex gap-16 items-start ">
            <div className="w-full bg-gradient-to-tr border-4 border-zinc-700 p-7 rounded-lg flex flex-col items-start gap-2 hover:scale-[.98] transition-all">
              <QuoteIcon className="text-violet-500 fill-violet-500 size-8" />

              <p className="text-zinc-300 text-lg">
                A perda do Gustavo me mostrou que, mesmo na dor mais profunda,
                podemos encontrar uma forma de criar algo que inspire e
                transforme. Os hackathons do Instituto AmiGU são minha maneira
                de garantir que o legado de Gustavo continue vivo, ajudando
                outros jovens a encontrar o caminho para um futuro melhor.
              </p>

              <h2 className="text-zinc-500 text-lg">
                - Marco Riveiros, Fundador do Instituto AmiGU
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Seção história de Gustavo */}
      <section className="py-10 md:py-20 bg-zinc-800 border-b-2 border-zinc-700 bg-background10 bg-center bg-cover bg-no-repeat border-t">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:gap-16 items-start">
          <div className="flex flex-col gap-5 md:flex-row md:gap-16">
            <div className="flex-1 md:top-[350px]">
              <span className="hidden md:flex uppercase text-violet-500 font-medium">
                A história de Gustavo e o poder do Hackathon
              </span>

              <h2 className="text-xl md:text-4xl font-semibold text-zinc-50 mt-2">
                Como o luto transformou-se <br /> em legado: A inspiração por
                trás do Instituto AmiGU
              </h2>

              <p className="mt-4 text-zinc-300 font-light text-justify leading-relaxed text-md sm:text-lg">
                A criação do Instituto AmiGU foi profundamente influenciada por
                uma perda pessoal significativa na vida de Marco Riveiros. Em
                2016, Marco perdeu tragicamente seu sobrinho Gustavo, um jovem
                com um futuro promissor. Essa perda devastadora levou Marco a
                buscar uma forma de transformar sua dor em algo positivo, que
                pudesse impactar outras vidas.
              </p>
            </div>

            <div className="flex-1 w-full">
              <img
                alt="Imagem"
                src="/guzinho-2.png"
                className="w-[400px] rounded-lg border-4  z-10"
              />
            </div>
          </div>

          <div className="flex-1 mt-5 md:mt-0">
            <div className="flex flex-col gap-3">
              {historyGustavo.map((item, index) => (
                <div
                  key={index}
                  className={`${index === 2 && 'col-span-2'} hover:scale-[.98] transition-all relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5`}
                >
                  <h2 className="text-zinc-50 leading-relaxed text-xl">
                    {item.title}
                  </h2>
                  <p className="text-zinc-300 leading-relaxed">
                    {item.descripition}
                  </p>
                </div>
              ))}
            </div>
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

      {/* Seção transformando vidas, um projeto de cada vez */}
      <section
        ref={refResults}
        className="py-10 md:py-20 bg-background8 bg-center bg-cover bg-no-repeat border-t"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16 items-center">
          <div className="flex flex-col items-center justify-center gap-5 ">
            <h2 className="text-2xl w-full md:w-auto sm:text-3xl md:text-center md:text-4xl font-semibold text-zinc-50">
              Transformando vidas, <br /> um projeto de cada vez
            </h2>
            <p className="text-justify md:text-center text-zinc-300 max-w-3xl">
              Desde a sua fundação, o Instituto AmiGU tem sido uma força
              transformadora em várias comunidades. Nosso compromisso com a
              inovação, a inclusão e a transparência nos permite criar programas
              que realmente fazem a diferença. Abaixo, apresentamos alguns dos
              impactos que nos orgulham e que mostram como estamos mudando vidas
              em todo o Brasil e no mundo.
            </p>
          </div>

          <div className="flex  flex-col md:flex-row items-center gap-10 justify-between w-full">
            <div className="flex-1 w-full">
              <img
                alt="Imagem"
                src="/hero-events.png"
                className="aspect-video w-full object-contain rounded-lg z-10"
              />
            </div>

            <div className="flex-1 px-4 md:px-0 flex flex-col md:items-start gap-5 w-full ">
              <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
                <div className="hidden size-14 md:flex items-center justify-center bg-violet-500 rounded-md">
                  <AwardIcon className="size-7 text-zinc-50 " />
                </div>
                <div>
                  <h2 className="text-violet-500 md:text-zinc-50 text-2xl">
                    88 mil
                  </h2>
                  <p className="text-zinc-300">
                    Pessoas capacitadas em habilidades digitais e humanas.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
                <div className="size-14 hidden md:flex items-center justify-center bg-violet-500 rounded-md">
                  <UsersRoundIcon className="size-7 text-zinc-50 " />
                </div>
                <div>
                  <h2 className="text-violet-500 md:text-zinc-50 text-2xl">
                    6 mil
                  </h2>
                  <p className="text-zinc-300">
                    Famílias impactadas diretamente através de nossos programas.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="size-14 hidden md:flex items-center justify-center bg-violet-500 rounded-md">
                  <TicketCheckIcon className="size-7 text-zinc-50 " />
                </div>
                <div>
                  <h2 className="text-violet-500 md:text-zinc-50 text-2xl">
                    40+
                  </h2>
                  <p className="text-zinc-300">
                    Eventos realizados, incluindo maratonas, workshops e
                    treinamentos.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="size-14 shrink-0 hidden md:flex items-center justify-center bg-violet-500 rounded-md">
                  <HandshakeIcon className="size-7 text-zinc-50 " />
                </div>
                <div>
                  <h2 className="text-violet-500 md:text-zinc-50 text-2xl">
                    100+
                  </h2>
                  <p className="text-zinc-300">
                    Parcerias estratégicas com empresas, universidades e
                    instituições ao redor do mundo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="bg-violet-500 p-4 rounded-lg flex flex-col items-start gap-2 hover:scale-[100%] transition-all">
              <QuoteIcon className="text-zinc-700 fill-zinc-700" />

              <p className="text-zinc-50">
                O Instituto AmiGU me deu a oportunidade de transformar minha
                vida e minha comunidade. Hoje, sou uma empreendedora de sucesso,
                graças ao Raíces Digitales.
              </p>

              <h2 className="text-zinc-300">- Executivo da Resolv</h2>
            </div>

            <div className="bg-zinc-700 p-4 rounded-lg flex flex-col items-start gap-2 hover:scale-[100%] transition-all">
              <QuoteIcon className="text-violet-500 fill-violet-500" />

              <p className="text-zinc-300">
                Ser mentor no AmiGU Resolv foi uma das experiências mais
                gratificantes da minha vida. Ver o impacto direto que meu
                conhecimento teve na vida dos jovens é indescritível.
              </p>

              <h2 className="text-zinc-500">- Carlos, Mentor 40+</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de junte-se a nós e faça parte da mudança */}
      <section className="bg-zinc-800 py-10 md:py-20 border-zinc-700 border-y-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-between gap-5">
          <div className="flex-1 flex flex-col border-l-4 pl-4 border-violet-500 items-start gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 tracking-tight">
                Junte-se a nós <br /> e faça parte da mudança
              </h2>
            </div>
            <p className="text-zinc-400 text-lg text-justify md:text-left">
              A história do Instituto AmiGU está apenas começando, e queremos
              que você faça parte dela. Se você se identifica com nossa missão,
              nossos valores e nossa visão de futuro, convidamos você a se unir
              a nós. Seja como empresa parceira, mentor, voluntário ou apoiador,
              há um lugar para você na nossa jornada de transformação.
            </p>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className="flex text-white items-center gap-2 py-2 px-3 bg-gradient-to-r from-blue-400 to-violet-500 hover:brightness-90 rounded-md">
                  <Link2 className="size-5" />
                  Como apoiar
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => navigate('/como-apoiar/empresas')}
                >
                  Empresas
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    navigate('/como-apoiar/parceiros-institucionais')
                  }
                >
                  Parceiros Institucionais
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    navigate('/como-apoiar/voluntarios-e-mentores')
                  }
                >
                  Mentores
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </section>

      {/* Seção de contato */}
      <ContactSection />
    </main>
  )
}
