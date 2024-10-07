/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import {
  AwardIcon,
  Building,
  CheckCheck,
  DollarSign,
  Facebook,
  HandshakeIcon,
  Heart,
  Info,
  Instagram,
  Linkedin,
  MinusIcon,
  Phone,
  PlusIcon,
  QuoteIcon,
  Send,
  TicketCheckIcon,
  Users,
  UsersRoundIcon,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface TimelineProps {
  title: string;
  descripition: string;
}

const historyFounder: TimelineProps[] = [
  {
    title: "Começo humilde",
    descripition:
      "Marco começou sua trajetória profissional trabalhando em diversos setores, onde aprendeu na prática sobre as dificuldades enfrentadas por muitas pessoas em contextos de vulnerabilidade.",
  },
  {
    title: "Inovação e empreendedorismo",
    descripition:
      "Sua habilidade de inovar e aplicar ciência de dados para resolver problemas complexos o levou a criar a Resolv e, posteriormente, o Instituto AmiGU, que utiliza a tecnologia para capacitar jovens e transformar comunidades.",
  },
  {
    title: "Fundação do Instituto AmiGU",
    descripition:
      "Em 2019, Marco transformou sua experiência e visão em ação concreta, fundando o Instituto AmiGU. Desde então, a organização já impactou mais de 88.000 pessoas e ajudou 6.000 famílias através de projetos que unem educação, tecnologia e inovação.",
  },
];

const historyGustavo: TimelineProps[] = [
  {
    title: "Uma Perda Inesperada",
    descripition:
      "Gustavo foi um jovem que, apesar de seu potencial, teve sua vida interrompida prematuramente. A dor dessa perda foi imensa para Marco, que decidiu honrar a memória de seu sobrinho de uma maneira que refletisse os valores e os sonhos que Gustavo representava",
  },
  {
    title: "A Metodologia Hackathon como Cura",
    descripition:
      "Após a morte de Gustavo, Marco encontrou nos hackathons – maratonas de inovação que combinam tecnologia e colaboração – uma forma de canalizar sua dor e criar algo transformador. Esses eventos não só permitiram a Marco lidar com sua perda, mas também se tornaram uma ferramenta para ajudar jovens a superar seus próprios desafios e a encontrar novas oportunidades.",
  },
  {
    title: "Impacto no Instituto",
    descripition:
      "A metodologia do hackathon se tornou um pilar central dos projetos do Instituto AmiGU. Desde a primeira maratona, esses eventos foram projetados para empoderar jovens, promovendo a inovação e oferecendo um ambiente onde eles podem desenvolver soluções para problemas reais, transformando suas vidas e as de suas comunidades.",
  },
];

const acordionArray: TimelineProps[] = [
  {
    title: "Instituto AmiGU: Inovação que Impacta",
    descripition:
      "No Instituto AmiGU, acreditamos que a tecnologia, em especial a inteligência artificial, pode ser uma força poderosa para o bem. Por meio de nossas iniciativas, estamos utilizando a IA para enfrentar desafios sociais, educacionais e econômicos, proporcionando soluções que transformam vidas e comunidades.",
  },
  {
    title: "Transformação Através da Inteligência Artificial",
    descripition:
      "Desde a educação até o setor portuário, nossos projetos de IA são projetados para criar impactos tangíveis e duradouros. Capacitando jovens de comunidades carentes, desenvolvendo soluções inovadoras para o setor jurídico e promovendo a inclusão digital, estamos moldando um futuro onde a tecnologia serve a todos, de maneira justa e equitativa.",
  },
  {
    title: "Hackathons: O Poder da IA em Ação",
    descripition:
      "Os hackathons do Instituto AmiGU são exemplos claros de como a IA pode ser utilizada para resolver problemas reais. Em eventos como o Porto Hack Santos e o Hackathon Startup Cidadã, a inteligência artificial foi o motor por trás de soluções que melhoraram desde a gestão educacional até a eficiência dos portos brasileiros.",
  },
  {
    title: "Impacto Social e Inclusão",
    descripition:
      "Nosso compromisso vai além da inovação tecnológica; estamos comprometidos com a inclusão e equidade. Em todas as nossas ações, garantimos que a IA seja usada de forma a empoderar indivíduos e comunidades, especialmente aqueles que mais precisam. Através de projetos como o Porto Hack Santos 2023, onde 50% das funções foram ocupadas por mulheres, promovemos um futuro onde a tecnologia é acessível e benéfica para todos.",
  },
  {
    title: "Junte-se a Nós: IA para o Bem",
    descripition:
      "No Instituto AmiGU, estamos sempre em busca de novas formas de usar a inteligência artificial para o bem comum. Se você acredita no poder transformador da tecnologia e deseja fazer parte dessa jornada, junte-se a nós. Vamos juntos construir um futuro onde a IA é uma força positiva, capaz de transformar vidas e comunidades ao redor do mundo.",
  },
];

export function About() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState({
    status: true,
    key: 0,
  });

  const handleClick = (key: number) => {
    if (isActive.key === key) {
      setIsActive({
        key: key === isActive.key ? 0 : key,
        status: !isActive.status,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  const refBanner: any = useRef();
  const refMissionAndVision: any = useRef();
  const refHistoryFounder: any = useRef();
  const refResults: any = useRef();
  const refValues: any = useRef();
  const refAIInitiatives: any = useRef();
  const refAIResults: any = useRef();

  useEffect(() => {
    if (hash === "") {
      window.scroll({
        top: refBanner.current.offsetTop - 100,
        behavior: "smooth",
      });
    }

    if (hash === "#missao-e-visao") {
      window.scroll({
        top: refMissionAndVision.current.offsetTop - 100,
        behavior: "smooth",
      });
    }

    if (hash === "#historia-e-fundador") {
      window.scroll({
        top: refHistoryFounder.current.offsetTop - 100,
        behavior: "smooth",
      });
    }

    if (hash === "#resultados-e-impactos") {
      window.scroll({
        top: refResults.current.offsetTop - 100,
        behavior: "smooth",
      });
    }

    if (hash === "#valores-do-instituto") {
      window.scroll({
        top: refValues.current.offsetTop - 100,
        behavior: "smooth",
      });
    }

    if (hash === "#iniciativas-de-ia-para-o-bem") {
      window.scroll({
        top: refAIInitiatives.current.offsetTop - 100,
        behavior: "smooth",
      });
    }

    if (hash === "#historico-de-eventos-e-iniciativas") {
      window.scroll({
        top: refAIResults.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }, [hash]);

  return (
    <main>
      {/* Seção de banner */}
      <section
        ref={refBanner}
        className="py-10 px-4 h-[40rem] md:h-[45rem] bg-[url(/portoHack-497.jpg)] bg-no-repeat bg-center bg-cover pt-24"
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
            <span className="bg-violet-600 border-4 border-violet-700 text-white px-4 rounded-full animate-bounce py-1 text-sm md:text-md flex items-center">
              <Heart className="size-4 mr-2 fill-white" />
              Transformando vidas
            </span>

            <h1 className="text-xl text-center md:text-5xl font-semibold text-white mt-3">
              Nossa missão é transformar <br /> vidas e construir o futuro
              melhor{" "}
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
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Conheça nossa história
            </h1>
            <p className="text-zinc-300">
              Descubra a trajetória que nos trouxe até aqui!
            </p>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Saiba mais
          </Link>
        </div>
      </section>

      {/* Seção o que nos move */}
      <section
        ref={refMissionAndVision}
        className="bg-zinc-900 border-zinc-800 py-10 md:py-20 border-b-2 bg-background bg-center bg-cover bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
            <div className="flex-1 w-full">
              <img
                alt="Imagem"
                src="/portoHack-01.jpg"
                className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
              />
            </div>

            <div className="flex-1 flex flex-col items-start gap-4">
              <div>
                <span className="text-violet-500 text-sm font-semibold uppercase ">
                  Nossa Missão e Visão
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
          </div>

          <div className="flex flex-col items-center justify-between gap-5">
            <div className="flex-1 flex flex-col border-l-4 pl-4 border-violet-500 items-start gap-4 w-full">
              <div>
                <h2 className="text-3xl text-zinc-50 mt-1 tracking-tight">
                  Visão
                </h2>
              </div>
              <p className="text-zinc-400 text-lg text-justify md:text-left max-w-4xl">
                Ser inspiração global na promoção da inclusão digital e no
                desenvolvimento humano, inspirando pessoas e organizações a se
                unirem por um mundo mais justo e igualitário.
              </p>
            </div>

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
          </div>
        </div>
      </section>

      {/* Seção uma jornada de dedicação de impacto */}
      <section
        ref={refHistoryFounder}
        className="py-10 md:py-20 bg-zinc-900 bg-background bg-center bg-cover bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16 items-center">
          <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="text-2xl w-full md:w-auto sm:text-3xl md:text-center md:text-4xl font-semibold text-zinc-50">
              Uma jornada de <br /> dedicação e impacto
            </h2>
            <p className="text-justify md:text-center text-zinc-300 max-w-3xl">
              O Instituto AmiGU nasceu do{" "}
              <strong>sonho de Marco Riveiros</strong>, que desde cedo entendeu
              o poder da educação e da tecnologia para transformar vidas. Ele{" "}
              <strong>iniciou sua carreira profissional</strong> enfrentando
              grandes desafios, o que lhe deu uma visão única sobre as
              necessidades das pessoas e das empresas.{" "}
              <strong>Em 2019, Marco fundou o Instituto AmiGU</strong>, com a
              missão de democratizar o acesso ao conhecimento e capacitar
              populações vulneráveis para que possam reescrever suas histórias.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-12 items-start">
            <div className="flex-1 w-full md:sticky md:top-[350px]">
              <img
                alt="Imagem"
                src="/portoHack-68.jpg"
                className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
              />

              <span className="block mt-2 text-lg">
                Marco Riveiros - Empresário
              </span>
            </div>

            <div className="flex-1 ">
              <div className="flex flex-col mt-10">
                {historyFounder.map((item, index) => (
                  <div className="flex items-start" key={index}>
                    <div className="flex flex-col items-center">
                      <div
                        className={`${index > 0 && "mt-12"} w-10 h-10 mt-5 shrink-0 bg-violet-500 text-white rounded-full text-2xl flex items-center justify-center`}
                      >
                        {index + 1}
                      </div>

                      <div className="w-1 h-20 bg-violet-500"></div>

                      <div className="hover:scale-[.98] transition-all md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                        <h2 className="text-zinc-50 leading-relaxed text-xl">
                          {item.title}
                        </h2>
                        <p className="text-zinc-300 leading-relaxed">
                          {item.descripition}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção história de Gustavo */}
      <section className="py-10 md:py-20 bg-zinc-900 bg-background bg-center bg-cover bg-no-repeat border-t">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row-reverse md:gap-16 items-start">
          <div className="flex-1 md:sticky md:top-[350px]">
            <span className="hidden md:flex uppercase text-violet-500 font-medium">
              A história de Gustavo e o poder do Hackathon
            </span>

            <h2 className="text-xl md:text-4xl font-semibold text-zinc-50 mt-2">
              Como o luto transformou-se <br /> em legado: A inspiração por trás
              do Instituto AmiGU
            </h2>

            <p className="mt-4 text-zinc-300 font-light text-justify leading-relaxed text-md sm:text-lg">
              A criação do Instituto AmiGU foi profundamente influenciada por
              uma perda pessoal significativa na vida de Marco Riveiros. Em
              2016, Marco perdeu tragicamente seu sobrinho Gustavo, um jovem com
              um futuro promissor. Essa perda devastadora levou Marco a buscar
              uma forma de transformar sua dor em algo positivo, que pudesse
              impactar outras vidas.
            </p>
          </div>

          <div className="flex-1 ">
            <div className="flex flex-col mt-10">
              {historyGustavo.map((item, index) => (
                <div className="flex items-start" key={index}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`${index > 0 && "mt-12"} w-10 h-10 mt-5 shrink-0 bg-violet-500 text-white rounded-full text-2xl flex items-center justify-center`}
                    >
                      {index + 1}
                    </div>

                    <div className="w-1 h-20 bg-violet-500"></div>

                    <div className="hover:scale-[.98] transition-all md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                      <h2 className="text-zinc-50 leading-relaxed text-xl">
                        {item.title}
                      </h2>
                      <p className="text-zinc-300 leading-relaxed">
                        {item.descripition}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 flex gap-16 items-start mt-10 md:mt-20">
          <div className="w-full bg-zinc-900 border-4 border-zinc-800 p-7 rounded-lg flex flex-col items-start gap-2 hover:scale-[.98] transition-all">
            <QuoteIcon className="text-violet-500 fill-violet-500 size-8" />

            <p className="text-zinc-300 text-lg">
              A perda do Gustavo me mostrou que, mesmo na dor mais profunda,
              podemos encontrar uma forma de criar algo que inspire e
              transforme. Os hackathons do Instituto AmiGU são minha maneira de
              garantir que o legado de Gustavo continue vivo, ajudando outros
              jovens a encontrar o caminho para um futuro melhor.
            </p>

            <h2 className="text-zinc-500 text-lg">
              - Marco Riveiros, Fundador do Instituto AmiGU
            </h2>
          </div>
        </div>
      </section>

      {/* Seção transformando vidas, um projeto de cada vez */}
      <section
        ref={refResults}
        className="py-10 md:py-20 bg-zinc-900 bg-background bg-center bg-cover bg-no-repeat border-t"
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
                src="/portoHack-02.jpg"
                className="aspect-video w-full object-cover rounded-lg border-4 border-zinc-800 z-10"
              />
            </div>

            <div className="flex-1 px-4 md:px-0 flex flex-col md:items-start gap-5 w-full ">
              <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
                <div className="hidden size-14 md:flex items-center justify-center bg-violet-500 rounded-md">
                  <AwardIcon className="size-7 text-zinc-50 " />
                </div>
                <div>
                  <h2 className="text-zinc-50 text-2xl">88 mil</h2>
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
                  <h2 className="text-zinc-50 text-2xl">6 mil</h2>
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
                  <h2 className="text-zinc-50 text-2xl">40+</h2>
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
                  <h2 className="text-zinc-50 text-2xl">100+</h2>
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
              <QuoteIcon className="text-zinc-900 fill-zinc-900" />

              <p className="text-zinc-50">
                O Instituto AmiGU me deu a oportunidade de transformar minha
                vida e minha comunidade. Hoje, sou uma empreendedora de sucesso,
                graças ao Raíces Digitales.
              </p>

              <h2 className="text-zinc-300">- Executivo da Resolv</h2>
            </div>

            <div className="bg-zinc-800 p-4 rounded-lg flex flex-col items-start gap-2 hover:scale-[100%] transition-all">
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

      {/* Seção de CTA + Veja como você pode fazer arte dessa transformação */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Veja como você pode <br /> fazer parte dessa transformação
            </h1>
            <p className="text-zinc-300 mt-1">
              Garanta sua vaga e transforme seu futuro hoje mesmo
            </p>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Saiba mais
          </Link>
        </div>
      </section>

      {/* Seção de o que nos guia */}
      <section
        ref={refValues}
        className="bg-zinc-900 py-10 md:py-20 bg-background bg-center bg-cover bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-start gap-4">
            <div>
              <span className="text-violet-500 text-sm font-semibold uppercase ">
                Valores e Ética
              </span>
              <h2 className="text-3xl text-zinc-50 mt-1 tracking-tight">
                O que nos guia
              </h2>
            </div>
            <p className="text-zinc-400 text-lg text-justify">
              Nosso trabalho é guiado por um conjunto de valores que acreditamos
              serem essenciais para criar um impacto real e duradouro. No
              Instituto AmiGU, agimos com integridade, responsabilidade e
              compromisso com o futuro. Nossa ética e nossos valores são o
              alicerce de tudo o que fazemos, desde a concepção de um projeto
              até a sua execução.
            </p>
          </div>

          <div className="flex-1 w-full flex flex-col items-center justify-center gap-5 md:gap-10">
            <div className="w-full hover:scale-[.97] transition-all flex flex-col items-start justify-center px-5 py-5 rounded-xl bg-zinc-900 border-4 border-zinc-800 backdrop-blur-lg">
              <div className="hidden md:block bg-zinc-800 p-3 rounded-full absolute -left-5 -top-5">
                <Building className="size-4" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-300 md:mt-3">
                Integridade
              </h2>
              <p className="text-zinc-300">
                Agimos de forma honesta e transparente em todas as nossas ações.
              </p>
            </div>

            <div className="w-full hover:scale-[.97] transition-all flex flex-col items-start justify-center px-5 py-5  rounded-xl  bg-zinc-900 border-4 border-zinc-800 backdrop-blur-lg">
              <div className="hidden md:block bg-zinc-800 p-3 rounded-full absolute -left-5 -top-5">
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

            <div className="w-full hover:scale-[.97] transition-all flex flex-col items-start justify-center px-5 py-5 rounded-xl bg-zinc-900 border-4 border-zinc-800 backdrop-blur-lg">
              <div className="hidden md:block bg-zinc-800 p-3 rounded-full absolute -left-5 -top-5">
                <Users className="size-4" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-300 md:mt-3">
                Responsabilidade
              </h2>
              <p className="text-zinc-300">
                Prestamos contas de cada ação e cada recurso utilizado,
                garantindo que nosso trabalho gere o máximo de impacto positivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de conheça nossos relatórios e certificações */}
      <section className="bg-zinc-950">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Conheça nossos <br /> relatórios e certificações
            </h1>
            <p className="text-zinc-300 mt-1">
            Conheça nossos relatórios e certificações e saiba como garantimos qualidade e conformidade!

            </p>
          </div>

  

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Saiba mais
          </Link>
        </div>
      </section>

      {/* Seção de junte-se a nós e faça parte da mudança */}
      <section className="bg-zinc-900 py-10 md:py-20 border-zinc-800 border-y-2">
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
          </div>
        </div>
      </section>

      {/* Seção de CTA veja como pode apoiar */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-2xl text-zinc-50">
              Veja como você pode se juntar a nós!
            </h1>
            <p className="text-zinc-300 mt-1">
              Saiba como fazer parte da nossa jornada de sucesso
            </p>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Saiba mais
          </Link>
        </div>
      </section>

      {/* Seção de transformando vidas com inteligência artificial */}
      <section
        ref={refAIInitiatives}
        className="py-10 md:py-20 border-zinc-800 border-y-2 bg-background2 bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-between gap-5">
          <h2 className="text-2xl w-full md:w-auto sm:text-3xl md:text-center md:text-4xl font-semibold text-zinc-50">
            Transformando vidas <br /> com inteligência artificial
          </h2>

          <p className="max-w-2xl text-justify md:text-center">
          Revolucionando o presente e moldando o futuro: como a Inteligência Artificial está impulsionando mudanças e melhorando a vida de milhões de pessoas ao redor do mundo!
          </p>

          <div className="w-full flex flex-col items-center gap-5 mt-5">
            {acordionArray.map((item, index) => (
              <Card key={index} className="w-full">
                <CardContent
                  onClick={() => handleClick(index)}
                  className="cursor-pointer flex flex-col items-center justify-center rounded-md bg-zinc-800 p-4"
                >
                  <div
                    className={`${isActive.key === index && isActive.status && "border-b border-zinc-700 pb-4 mb-2"} w-full flex items-center justify-between`}
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
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
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
                        animate={{ opacity: 1, height: "auto" }}
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
      </section>

      {/* Seção de resultados das iniciativas de IA para o bem do Instituto AmiGU */}
      <section
        ref={refAIResults}
        className="bg-zinc-900 md:pt-20 md:pb-10 py-10"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center justify-center text-left md:text-center gap-5">
            <h2 className="text-2xl w-full md:w-auto sm:text-3xl md:text-center md:text-4xl font-semibold text-zinc-50">
              Resultados das iniciativas <br /> de IA para o bem do Instituto
              AmiGU
            </h2>

            <p className="text-zinc-300 max-w-4xl text-justify md:text-center">
              O Instituto AmiGU tem se destacado ao longo dos anos como uma
              força motriz na utilização da inteligência artificial para
              transformar vidas e promover a inclusão social. A seguir,
              apresentamos um compilado dos principais resultados de nossas
              iniciativas de "AI for Good", que mostram o impacto real e
              duradouro de nossos projetos.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            {/* Code in Pizza in 013 (2017) */}
            <div className="flex flex-col md:flex-row items-center p-4 md:p-8 gap-5 md:gap-10 bg-violet-600 border-2 border-zinc-700  transition-all rounded-md">
              <div className="flex-1 w-full">
                <img
                  alt="Imagem"
                  src="/imagens-de-evento/code-in-pizza.PNG"
                  className="aspect-video object-cover rounded-lg border-4 border-violet-800 z-10"
                />
              </div>

              <div className="flex-1 flex flex-col items-start gap-4 ">
                <div>
                  <h2 className="text-2xl text-zinc-50 mt-1 tracking-tight">
                    Code in Pizza in 013 (2017)
                  </h2>
                </div>
                <p className="text-zinc-300 text-lg text-justify md:text-left">
                  Em dezembro de 2017, o Instituto AmiGU organizou o evento
                  "Code in Pizza in 013" na antiga UNIMONTE, atual Universidade
                  São Judas. Esse evento reuniu mais de 200 pessoas e ofereceu
                  15 trilhas de palestras que abordaram temas como Inteligência
                  Artificial, Blockchain, Carreiras em Desenvolvimento,
                  Robótica, Cultura Ágil, DevOps, Empreendedorismo Digital e
                  Inovação Aberta. O evento foi um marco para inspirar novos
                  talentos a seguir carreiras tecnológicas (RESULTADOS INSTITUTO
                  AM…).
                </p>
              </div>
            </div>

            {/* Palestra sobre Machine Learning no Museu Pelé (2018) */}
            <div className="flex flex-col-reverse md:flex-row items-center md:scale-[.98] mt-3 md:mt-5 gap-5 md:gap-10 p-4 md:p-8 bg-zinc-800 border-2 border-zinc-700 transition-all rounded-md">
              <div className="flex-1 flex flex-col items-start gap-4 ">
                <div>
                  <h2 className="text-2xl text-zinc-50 mt-1 tracking-tight">
                    Palestra sobre Machine <br /> Learning no Museu Pelé (2018)
                  </h2>
                </div>
                <p className="text-zinc-400 text-lg text-justify md:text-left">
                  Em fevereiro de 2018, o Instituto AmiGU levou mais de 100
                  pessoas ao Museu Pelé para uma palestra sobre Machine
                  Learning. O evento contou com cinco especialistas que
                  discutiram os impactos dessa tecnologia na criação de
                  Inteligências Artificiais, apresentando casos de sucesso que
                  ilustraram o potencial transformador do Machine Learning
                </p>
              </div>

              <div className="flex-1 w-full">
                <img
                  alt="Imagem"
                  src="/imagens-de-evento/todas-as-pessoas-do-porto.jpg"
                  className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
                />
              </div>
            </div>

            {/* Camps 4.0 - O Aprendiz do Futuro (2019) */}
            <div className="flex flex-col md:flex-row items-center md:scale-[.96] bg-violet-600 mt-3 md:mt-2 gap-5 md:gap-10 p-4 md:p-8  border-2 border-zinc-700 transition-all rounded-md">
              <div className="flex-1 w-full">
                <img
                  alt="Imagem"
                  src="/imagens-de-evento/todas-as-pessoas-do-porto.jpg"
                  className="aspect-video object-cover rounded-lg border-4 border-violet-800 z-10"
                />
              </div>

              <div className="flex-1 flex flex-col items-start gap-4 ">
                <div>
                  <h2 className="text-2xl text-zinc-50 mt-1 tracking-tight">
                    Camps 4.0 - O Aprendiz do Futuro (2019)
                  </h2>
                </div>
                <p className="text-zinc-300 text-lg text-justify md:text-left">
                  Em abril de 2019, o Instituto AmiGU organizou o evento "Camps
                  4.0 - O Aprendiz do Futuro", que reuniu 1000 jovens aprendizes
                  em parceria com o CAMPS-SANTOS. Durante o evento, foram
                  apresentados workshops, palestras e demonstrações imersivas
                  sobre como a Inteligência Artificial está transformando as
                  profissões e preparando os jovens para o futuro do trabalho
                </p>
              </div>
            </div>

            {/* Laboratório de Inteligência Artificial na UNISANTOS (2019) */}
            <div className="flex flex-col-reverse md:flex-row items-center md:scale-[.93] mt-3 md:mt-0 gap-5 md:gap-10 p-4 md:p-8 bg-zinc-800 border-2 border-zinc-700 transition-all rounded-md">
              <div className="flex-1 flex flex-col items-start gap-4 ">
                <div>
                  <h2 className="text-2xl text-zinc-50 mt-1 tracking-tight">
                    Laboratório de Inteligência <br /> Artificial na UNISANTOS
                    (2019)
                  </h2>
                </div>
                <p className="text-zinc-400 text-lg text-justify md:text-left">
                  Em setembro de 2019, o Instituto AmiGU, através de seu
                  Hackerspace, criou o primeiro Laboratório de IA em uma
                  universidade privada no estado de São Paulo, localizado na
                  UNISANTOS. Esse laboratório, desenvolvido em parceria com IBM
                  e Data H, ofereceu trilhas de conhecimento e workshops de IA
                  para alunos de graduação em Tecnologia, fortalecendo a
                  comunidade acadêmica e oferecendo suporte contínuo para o
                  desenvolvimento de habilidades em IA (RESULTADOS INSTITUTO
                  AM…).
                </p>
              </div>

              <div className="flex-1 w-full">
                <img
                  alt="Imagem"
                  src="/imagens-de-evento/unisantos.JPG"
                  className="aspect-video object-cover rounded-lg border-4 w-full border-zinc-800 z-10"
                />
              </div>
            </div>

            {/* Watson on the Beach (2019) */}
            <div className="flex flex-col md:flex-row mt-3 items-center md:scale-[.90] bg-violet-600 md:-mt-2 gap-5 md:gap-10 p-4 md:p-8 border-2 border-zinc-700 transition-all rounded-md">
              <div className="flex-1 w-full">
                <img
                  alt="Imagem"
                  src="/imagens-de-evento/todas-as-pessoas-do-porto.jpg"
                  className="aspect-video object-cover rounded-lg border-4 border-violet-800 z-10"
                />
              </div>

              <div className="flex-1 flex flex-col items-start gap-4 ">
                <div>
                  <h2 className="text-2xl text-zinc-50 mt-1 tracking-tight">
                    Watson on the Beach (2019)
                  </h2>
                </div>
                <p className="text-zinc-300 text-lg text-justify md:text-left">
                  Em dezembro de 2019, o Instituto AmiGU, em parceria com a IBM
                  e a SOMAY, organizou o evento "Watson on the Beach" na concha
                  acústica da praia de Santos. Mais de 200 pessoas participaram
                  desse evento que apresentou o robô NOW, capaz de simular
                  sentimentos e emoções. Além disso, o evento incluiu palestras
                  sobre carreiras tecnológicas, focadas em jovens e adultos, com
                  o objetivo de inspirar e capacitar novos talentos (RESULTADOS
                  INSTITUTO AM…).
                </p>
              </div>
            </div>

            {/* Hackerspace Zero Treze Innovation Space */}
            <div className="flex flex-col-reverse md:flex-row items-center md:scale-[.87] mt-3 md:-mt-5 gap-5 md:gap-10 p-4 md:p-8 bg-zinc-800 border-2 border-zinc-700 transition-all rounded-md">
              <div className="flex-1 flex flex-col items-start gap-4 ">
                <div>
                  <h2 className="text-2xl text-zinc-50 mt-1 tracking-tight">
                    Hackerspace Zero Treze Innovation Space
                  </h2>
                </div>
                <p className="text-zinc-400 text-lg text-justify md:text-left">
                  O Instituto AmiGU fundou o Hackerspace Zero Treze Innovation
                  Space, o primeiro Hub de Inovação Tecnológica na Baixada
                  Santista. Este espaço serve como um ambiente de integração e
                  desenvolvimento para desenvolvedores, oferecendo palestras,
                  eventos, hackathons, e laboratórios. O Hackerspace é um ponto
                  de encontro para a comunidade tecnológica local, fomentando a
                  inovação e a colaboração contínua
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

            {/* Programa Business4Devs */}
            <div className="flex flex-col md:flex-row items-center md:scale-[.84] bg-violet-600 mt-3 md:-mt-8 gap-5 md:gap-10 p-4 md:p-8  border-2 border-zinc-700 transition-all rounded-md">
              <div className="flex-1 w-full">
                <img
                  alt="Imagem"
                  src="/imagens-de-evento/todas-as-pessoas-do-porto.jpg"
                  className="aspect-video object-cover rounded-lg border-4 border-violet-800 z-10"
                />
              </div>

              <div className="flex-1 flex flex-col items-start gap-4 ">
                <div>
                  <h2 className="text-2xl text-zinc-50 mt-1 tracking-tight">
                    Programa Business4Devs
                  </h2>
                </div>
                <p className="text-zinc-300 text-lg text-justify md:text-left">
                  Com o objetivo de impulsionar carreiras em tecnologia, o
                  Instituto AmiGU criou o programa Business4Devs. Este programa
                  foi fundamental para o desenvolvimento de muitos
                  profissionais, incluindo Erick Wendel, que se tornou um dos
                  maiores empreendedores de conteúdo tecnológico da América
                  Latina. Em parceria com a EW.IT, o Instituto lançou o curso
                  gratuito "Fundamentos de Node.JS", que capacitou mais de
                  88.000 alunos em 3.000 municípios desde 2019 (RESULTADOS
                  INSTITUTO AM…).
                </p>
              </div>
            </div>

            {/* Apoio às Comunidades de Tecnologia */}
            <div className="flex flex-col-reverse md:flex-row items-center md:scale-[.82] mt-3 md:-mt-10 gap-5 md:gap-10 p-4 md:p-8 bg-zinc-800 border-2 border-zinc-700 transition-all rounded-md">
              <div className="flex-1 flex flex-col items-start gap-4 ">
                <div>
                  <h2 className="text-2xl text-zinc-50 mt-1 tracking-tight">
                    Apoio às Comunidades de Tecnologia
                  </h2>
                </div>
                <p className="text-zinc-400 text-lg text-justify md:text-left">
                  O Instituto AmiGU tem um compromisso contínuo com o apoio às
                  comunidades tecnológicas, como Nerdzão, Nerdgirls e AI Brasil.
                  Essas iniciativas impactam mensalmente mais de 80.000 jovens,
                  oferecendo suporte educacional, recursos e oportunidades para
                  desenvolvimento profissional. O Instituto promove eventos,
                  workshops e sessões de mentoria, conectando jovens talentos
                  com as demandas do mercado
                </p>
              </div>

              <div className="flex-1 w-full">
                <img
                  alt="Imagem"
                  src="/imagens-de-evento/todas-as-pessoas-do-porto.jpg"
                  className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de iniciativas demonstram o compromisso */}
      <div className="border-t bg-background bg-center bg-cover bg-no-repeat py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative flex items-center justify-center text-justify md:text-left bg-gradient-to-r p-10 md:p-20 rounded-3xl from-violet-500 to-[#4F358D] transition-all">
            <p className="text-white text-lg font-medium">
              Essas iniciativas demonstram o compromisso do Instituto AmiGU em
              promover a educação, a inovação e a integração na comunidade
              tecnológica. Com uma abordagem que combina palestras, cursos, e
              espaços de integração, o Instituto tem ajudado a preparar uma nova
              geração de profissionais capacitados para enfrentar os desafios do
              futuro.
            </p>

            <QuoteIcon className="absolute md:top-10 md:left-10 left-3 top-3 rotate-180 text-white fill-white" />
            <QuoteIcon className="hidden md:block absolute bottom-10 right-10 text-white fill-white" />
            <img
              src="/elipses.svg"
              alt="elipses"
              className="absolute top-0 right-0"
            />
          </div>
        </div>
      </div>

      {/* Seção de contato */}
      <section className="py-10 border-t-2 border-t-zinc-800 bg-zinc-900 bg-background bg-center bg-cover bg-no-repeat">
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
                type="submit"
                className="w-full mt-5 py-3 bg-violet-600 text-white rounded-md hover:bg-violet-500 transition-all"
              >
                <Send className="size-4 mr-2" />
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Rodapé da página */}
      <footer className="bg-zinc-900">
        <div className="bg-zinc-800 w-full">
          <div className="max-w-7xl mx-auto px-4 py-6 lg:py-4 w-full">
            <div className="flex flex-col lg:flex-row lg:items-center gap-9">
              <img
                src="/logo-amigu-branco.png"
                alt="Logo Instituto Amigu"
                width={120}
                height={80}
              />

              <p className="text-zinc-200 text-sm lg:text-md font-medium text-justify md:text-left">
                Nossa missão é impulsionar o sucesso de nossos clientes,
                construindo parcerias sólidas e entregando projetos que
                realmente fazem a diferença. Junte-se a nós na jornada de
                transformação digital e descubra o que é possível quando a
                velocidade, a qualidade e a inovação se unem
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-4">
          <div className="text-center lg:items-left lg:text-left">
            <h1 className="text-xl text-zinc-200 font-semibold">Menu</h1>

            <div className="flex flex-col gap-2 items-center lg:items-start mt-4 text-zinc-200">
              <button
                type="button"
                title="Início"
                onClick={() => navigate("/")}
                className="hover:ml-2 transition-all"
              >
                Página inicial
              </button>
              <button
                type="button"
                title="Sobre"
                onClick={() => navigate("/sobre")}
                className="hover:ml-2 transition-all"
              >
                Sobre Nós
              </button>
              <button
                type="button"
                title="Serviços"
                onClick={() => navigate("/sobre#iniciativas-de-ia-para-o-bem")}
                className="hover:ml-2 transition-all"
              >
                I.A para o bem
              </button>
              <button
                type="button"
                title="Contato"
                onClick={() => navigate("/projetos")}
                className="hover:ml-2 transition-all"
              >
                Projetos
              </button>
            </div>
          </div>

          <div className="text-center lg:items-left lg:text-left">
            <h1 className="text-xl text-zinc-200 font-semibold">Menu</h1>

            <div className="flex flex-col gap-2 items-center lg:items-start mt-4 text-zinc-200">
              <button
                type="button"
                title="Início"
                onClick={() => navigate("/como-apoiar")}
                className="hover:ml-2 transition-all"
              >
                Como apoiar
              </button>
              <button
                type="button"
                title="Sobre"
                onClick={() => navigate("/como-apoiar#relatorios-anuais")}
                className="hover:ml-2 transition-all"
              >
                Transparência
              </button>
              <button
                type="button"
                title="Serviços"
                onClick={() => navigate("/maratonas")}
                className="hover:ml-2 transition-all"
              >
                Maratonas
              </button>
              <button
                type="button"
                title="Contato"
                onClick={() => navigate("/#contato")}
                className="hover:ml-2 transition-all"
              >
                Contato
              </button>
            </div>
          </div>

          <div className="text-center lg:items-left lg:text-left">
            <h1 className="text-xl text-zinc-200 font-semibold">Social</h1>

            <div className="flex flex-col gap-2 items-center lg:items-start mt-4 text-zinc-200">
              <Link
                to="https://www.instagram.com/institutoamigu/"
                target="_blank"
                title="Clique para ir ao nosso Instagram"
                className="flex items-center gap-2 hover:ml-2 transition-all"
              >
                <Instagram className="size-4" />
                Instagram
              </Link>

              <Link
                to="https://www.facebook.com/institutoamigu"
                target="_blank"
                title="Clique para ir ao nosso Facebook"
                className="flex items-center gap-2 hover:ml-2 transition-all"
              >
                <Facebook className="size-4" />
                Facebook
              </Link>

              <Link
                to="https://www.linkedin.com/company/institutoamigu/posts/?feedView=all"
                target="_blank"
                title="Clique para ir ao nosso Linkedin"
                className="flex items-center gap-2 hover:ml-2 transition-all"
              >
                <Linkedin className="size-4" />
                Linkedin
              </Link>

              <Link
                to="https://api.whatsapp.com/send?phone=1340420740"
                target="_blank"
                title="Clique para ir ao nosso WhatsApp"
                className="flex items-center gap-2 hover:ml-2 transition-all"
              >
                <Phone className="size-4" />
                WhatsApp
              </Link>
            </div>
          </div>

          <div className="text-center lg:items-left lg:text-left">
            <h1 className="text-xl text-zinc-200 font-semibold">Contato</h1>
            <div className="flex flex-col gap-2 items-center lg:items-start mt-4 text-zinc-200">
              <Link
                to="mailto:marco@institutoamigu.org.br"
                target="_blank"
                title="Clique para ir ao nosso E-mail"
                className="hover:ml-2 transition-all"
              >
                E-mail
              </Link>
              <Link
                to="https://api.whatsapp.com/send?phone=1340420740"
                target="_blank"
                title="Clique para ir ao nosso WhatsApp"
                className="hover:ml-2 transition-all"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-violet-600 w-full py-4 flex flex-col lg:flex-row justify-center items-center text-white text-xs border-t border-t-zinc-700">
          @{format(new Date(), "yyyy")} | Todos os direitos reservados Instituto
          AmiGu
        </div>
      </footer>
    </main>
  );
}
