/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import {
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Handshake,
  Heart,
  Info,
  Instagram,
  Link2Icon,
  Linkedin,
  LocateFixed,
  Mail,
  MinusIcon,
  Phone,
  PlusIcon,
  QuoteIcon,
  Rotate3D,
  Send,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  news2018StartupCidada,
  news2019,
  news2019CodeOfLaw,
  news2020BrasilExport,
  news2021OpenThon,
  news2022,
  news2023,
} from "@/@config/utils/news";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface AcordionProps {
  title: string;
  descripition: string;
}

const acordionArray: AcordionProps[] = [
  {
    title: "Impacto Real",
    descripition:
      "Nossas iniciativas, como o Porto Hack Santos, os programas de mentoria e o Hackerspace Zero Treze Innovation Space, já mudaram a vida de milhares de pessoas, proporcionando oportunidades e abrindo portas para um futuro melhor.",
  },
  {
    title: "Inclusão e Diversidade",
    descripition:
      "Com um forte compromisso com a inclusão, garantimos que a inovação seja acessível a todos. Nos nossos eventos, metade das funções são ocupadas por mulheres, e estamos constantemente buscando maneiras de integrar e apoiar comunidades carentes",
  },
  {
    title: "Educação e Capacitação",
    descripition:
      "Através de palestras, workshops e cursos gratuitos, como o Fundamentos de Node.JS, capacitamos jovens e profissionais para que possam prosperar no mundo da tecnologia.",
  },
];

export function Marathons() {
  const navigate = useNavigate();
  const { hash } = useLocation();



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
  const refEvents: any = useRef();

  useEffect(() => {
    if (hash === "") {
      window.scroll({
        top: refBanner.current.offsetTop - 100,
        behavior: "smooth",
      });
    }

    if (hash === "#linha-do-tempo-de-maratonas") {
      window.scroll({
        top: refEvents.current.offsetTop - 100,
        behavior: "smooth",
      });
    }

    if (hash === "#resultados-e-edicoes-anteriores") {
      window.scroll({
        top: refEvents.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }, [hash]);

  return (
    <main>
      {/* Seção de banner */}
      <section
        ref={refBanner}
        className="py-10 h-[45rem] bg-hero-banner-marathons bg-no-repeat bg-center bg-cover pt-24"
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto ">
            <span className="bg-violet-600 border-4 border-violet-700 text-white px-4 rounded-full animate-bounce py-1 flex items-center">
              <Heart className="size-4 mr-2 fill-white" />
              Maratonas e eventos
            </span>

            <h1 className="text-xl text-center md:text-5xl font-semibold text-white mt-3">
              Inovação, Inclusão e Impacto
            </h1>

            <p className="text-md md:text-lg text-zinc-300 mt-2 max-w-xl text-center px-4">
              Participe das nossas maratonas e eventos e ajude a transformar
              vidas através da inovação e da tecnologia.
            </p>
          </div>
        </div>
      </section>

      {/* Seção CTA + Junte-se à comunidade AmiGU */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Saiba mais participar das maratonas
            </h1>
            <p className="text-zinc-300">
              Descubra como se inscrever e participar das nossas maratonas!
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

      <section className="py-10 md:py-20 bg-zinc-900 bg-background bg-center bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10 md:gap-16 items-center">
          <div className="space-y-3 text-center">
            <h2 className="text-left w-full md:text-center text-xl md:text-3xl font-semibold text-zinc-50">
              Maratona Um Porto para o Futuro: <br /> Transformando comunidades
              portuárias
            </h2>
            <p className="max-w-3xl text-zinc-300 text-justify md:text-center">
              A Maratona Um Porto para o Futuro é um evento anual que reúne
              jovens talentos para criar soluções inovadoras que melhoram a
              qualidade de vida das pessoas que vivem em comunidades portuárias.
              Com o apoio de empresas do setor portuário e logístico, esta
              maratona promove a inclusão social e digital, capacitando os
              moradores locais com ferramentas que transformam suas vidas e
              oferecem novas oportunidades de desenvolvimento.
            </p>
          </div>

          <div className="w-full flex flex-col items-start p-5 md:p-10 bg-zinc-800 border-4 border-zinc-700 rounded-2xl">
            <div className="size-16 rounded-full border-4 border-white flex items-center justify-center">
              <span className="text-2xl font-semibold text-white">A</span>
            </div>
            <h2 className="mt-5 text-white text-2xl md:text-3xl">
              Como funcionará a maratona?
            </h2>

            <div className="flex flex-col mt-4">
              <h2 className="text-xl text-violet-500">
                Arquitetura da Competição
              </h2>
              <p className="text-zinc-300 text-justify md:text-left">
                A maratona será organizada em várias etapas, começando com um
                período de imersão nas comunidades portuárias, onde os
                competidores terão a oportunidade de entender as necessidades
                locais. Em seguida, os participantes formarão equipes
                multidisciplinares e começarão a desenvolver suas soluções com o
                apoio de mentores experientes.
              </p>
            </div>

            <div className="flex flex-col mt-4">
              <h2 className="text-xl text-violet-500">
                Cidades e <br /> comunidades participantes
              </h2>
              <p className="text-zinc-300 text-justify md:text-left">
                A maratona será realizada em várias cidades portuárias ao longo
                do Brasil, incluindo Santos, Rio de Janeiro e Salvador. Cada uma
                dessas cidades foi escolhida por sua importância econômica e
                pelos desafios únicos que suas comunidades enfrentam.
              </p>
            </div>

            <div className="flex flex-col mt-4 pb-4 border-b border-zinc-300">
              <h2 className="text-xl text-violet-500"> Impactos Esperados</h2>
              <p className="text-zinc-300 text-justify md:text-left">
                Ao final da maratona, esperamos que as soluções desenvolvidas
                contribuam para a melhoria das condições de vida nas comunidades
                portuárias, promovendo a inclusão digital, a educação e o
                desenvolvimento sustentável. As melhores soluções poderão ser
                implementadas com o apoio das empresas parceiras, gerando
                impacto real e duradouro.
              </p>
            </div>

            <div className="w-full flex justify-center mt-5">
              <div className="border-4 border-zinc-500 rounded-md w-full">
                <img
                  src="/porto-para-futuro.jpeg"
                  alt="banner porto-para-futuro"
                  className="rounded-md  w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex gap-16 items-start">
            <div className="w-full bg-zinc-900 border-4 border-zinc-800 p-7 rounded-lg flex flex-col items-start gap-2 hover:scale-[.98] transition-all">
              <QuoteIcon className="text-violet-500 fill-violet-500 size-8" />

              <p className="text-zinc-300 text-lg">
                Participar da Maratona Um Porto para o Futuro foi uma
                experiência incrível. Desenvolvi uma solução que foi adotada
                pela minha própria comunidade, e isso abriu as portas para minha
                carreira.
              </p>

              <h2 className="text-zinc-500 text-lg">
                - Lucas, vencedor da maratona
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Participe da próxima <br /> maratona – Inscreva-se agora
            </h1>
            <p className="text-zinc-300 mt-2">
              Garanta sua vaga na próxima maratona e inscreva-se já!
            </p>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Inscrever-se
          </Link>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto p-2 px-4 py-10 md:py-20 flex flex-col items-start gap-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-5">
            <div className="flex-1 flex flex-col items-start gap-3">
              <div>
                <span className="text-violet-500 text-sm font-semibold uppercase">
                  Hackathons
                </span>
                <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 tracking-tight">
                  Inovação em Ação
                </h2>
              </div>
              <p className="text-zinc-300 text-justify md:text-left">
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
                  Hackathons do Instituto AmiGU
                </span>
                <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 tracking-tight">
                  Uma Jornada de <br /> Inovação e Transformação
                </h2>
              </div>
              <p className="text-zinc-300 text-justify md:text-left">
                O Instituto AmiGU, comprometido com a inovação e a capacitação
                tecnológica, tem realizado uma série de hackathons ao longo dos
                anos, cada um deixando um legado significativo. Abaixo, você
                encontrará uma cronologia desses eventos transformadores, que
                têm impactado diversas áreas, desde a educação até o setor
                portuário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PortoHack2023 */}
      <section
        ref={refEvents}
        className="bg-background border-t bg-cover bg-center bg-no-repeat py-10 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-2 md:px-8 space-y-5">
          <div className="flex items-start gap-7">
            <div className="hidden md:flex sticky top-44 w-60 bg-zinc-900 border-4 border-zinc-800 rounded-lg p-5  flex-col gap-10">
              <div className="flex items-center gap-2 text-white transition-all ">
                <div className="w-6 h-6 relative bg-zinc-700 rounded-full after:content-[''] after:w-[1px] after:h-[40px] after:absolute after:bg-zinc-700 after:left-1/2 after:-translate-x-1/2 after:top-6" />
                Sobre o evento
              </div>

              <div className="flex items-center gap-2 text-white transition-all">
                <div className="w-6 h-6 relative bg-zinc-700 rounded-full after:content-[''] after:w-[1px] after:h-[40px] after:absolute after:bg-zinc-700 after:left-1/2 after:-translate-x-1/2 after:top-6" />
                Notícias
              </div>

              <div className="flex items-center gap-2 text-white transition-all">
                <div className="w-6 h-6 bg-zinc-700 rounded-full" />
                Imagens
              </div>
            </div>

            <div className="flex-1 bg-zinc-900 border-4 border-zinc-800 rounded-lg p-4 md:p-5">
              <h1 className="text-xl md:text-3xl text-white font-semibold md:mt-5">
                <span className="text-violet-600">Porto Hack Santos 2023:</span>{" "}
                <br />A Revolução Tecnológica e Social Continua
              </h1>

              <p className="leading-relaxed text-zinc-300 mt-2 text-md text-justify md:text-left md:text-lg">
                Em dezembro de 2023, o Porto Hack Santos retornou,
                consolidando-se como um evento essencial para o setor portuário
                e a comunidade local. Organizado pelo Instituto AmiGU em
                parceria com a ABTRA, este hackathon reuniu 50 jovens de
                comunidades carentes, que, após meses de preparação em um curso
                de Inteligência Artificial, enfrentaram desafios relacionados à
                comunicação e às vendas nos terminais portuários. O evento
                destacou-se pelo compromisso com a inclusão, com 50% das funções
                ocupadas por mulheres, e pela iniciativa 'Carbono Neutro',
                sublinhando a importância da sustentabilidade.
              </p>

              <h1 className="text-xl md:text-2xl text-white font-semibold mt-10 border-t border-zinc-700 pt-5">
                Experiências inovadoras
              </h1>

              <div className="mt-5 rounded-xl border-4 border-zinc-500 overflow-hidden">
                <iframe
                  allowFullScreen
                  className="w-full aspect-video"
                  title="Apresentação Porto Hack Santos 2023"
                  src="https://www.youtube.com/embed/5xxgy1RsxRE?si=ZZbSBf313W9WFuJ5"
                />
              </div>
            </div>
          </div>

          <div className=" bg-zinc-800 rounded-md py-8 px-4 md:px-8">
            <h1 className="text-xl md:text-3xl text-white font-semibold">
              Repercussão na imprensa
            </h1>

            <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
              Foram publicadas {news2023.length} matérias na imprensa regional e
              setorial do setor logístico-portuário, comércio exterior e
              tecnologia da informação
            </p>

            <Carousel
              opts={{
                align: "start",
              }}
              className="mt-10"
            >
              <CarouselContent>
                {news2023.map((item: any, index: any) => (
                  <CarouselItem
                    key={index}
                    className="pb-[60px] md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="bg-zinc-700 w-full h-[200px] flex flex-col justify-center text-white p-3 rounded-md">
                      <h1 className="text-xl font-semibold">{item.name}</h1>
                      <p className="text-sm mt-2">
                        {item.description.substring(0, 50)}...
                      </p>

                      <span className="block mt-3 text-sm">
                        Data da matéria: {item.date}
                      </span>

                      <a
                        href={item.url}
                        target="_blank"
                        title="Clique para acessar a notícia"
                        className="mt-3 bg-violet-600 text-white w-full py-2 flex justify-center gap-2 text-sm rounded-md hover:brightness-75 transition-all"
                        rel="noreferrer"
                      >
                        <Link2Icon size={20} />
                        Acessar notícia
                      </a>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex items-center gap-2">
                <CarouselPrevious
                  type="button"
                  title="Clique para voltar um slide"
                  className="w-10 h-10 relative left-0 top-1 bg-zinc-800 hover:bg-zinc-800/70 rounded-md border-2 border-zinc-700 text-zinc-400 hover:text-zinc-400 hover:brightness-90 flex items-center justify-center"
                >
                  <ChevronLeft size={20} />
                </CarouselPrevious>
                <CarouselNext
                  type="button"
                  title="Clique para avançar um slide"
                  className="w-10 h-10 relative left-0 top-1 bg-zinc-800 hover:bg-zinc-800/70 rounded-md border-2 border-zinc-700 text-zinc-400 hover:text-zinc-400 hover:brightness-90 flex items-center justify-center"
                >
                  <ChevronRight size={20} />
                </CarouselNext>
              </div>
            </Carousel>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-8">
          <div className=" bg-zinc-800 rounded-md py-8 px-4 md:px-8 my-5">
            <h1 className="text-xl md:text-3xl text-white font-semibold">
              Imagens do evento
            </h1>

            <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
              Confira algumas imagens desse evento incrível
            </p>

            <div className="mt-10">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="mt-10"
              >
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2023/image_01.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2023/image_02.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2023/image_03.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2023/image_04.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2023/image_05.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2023/image_06.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2023/image_07.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2023/image_08.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2023/image_09.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2023/image_10.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA + Junte-se à comunidade AmiGU */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Conheça mais nossos eventos
            </h1>
            <p className="text-zinc-300">
              Explore todos os detalhes sobre nossos eventos!
            </p>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Inscreva-se agora
          </Link>
        </div>
      </section>

      {/* PortoHack2022 */}
      <section className="bg-background border-t bg-cover bg-center bg-no-repeat py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-2 md:px-8 space-y-5">
          <div className="flex items-start gap-7">
            <div className="hidden md:flex sticky top-44 w-60 bg-zinc-900 border-4 border-zinc-800 rounded-lg p-5  flex-col gap-10">
              <div className="flex items-center gap-2 text-white transition-all ">
                <div className="w-6 h-6 relative bg-zinc-700 rounded-full after:content-[''] after:w-[1px] after:h-[40px] after:absolute after:bg-zinc-700 after:left-1/2 after:-translate-x-1/2 after:top-6" />
                Sobre o evento
              </div>

              <div className="flex items-center gap-2 text-white transition-all">
                <div className="w-6 h-6 relative bg-zinc-700 rounded-full after:content-[''] after:w-[1px] after:h-[40px] after:absolute after:bg-zinc-700 after:left-1/2 after:-translate-x-1/2 after:top-6" />
                Notícias
              </div>

              <div className="flex items-center gap-2 text-white transition-all">
                <div className="w-6 h-6 bg-zinc-700 rounded-full" />
                Imagens
              </div>
            </div>

            <div className="flex-1 bg-zinc-900 border-4 border-zinc-800 rounded-lg p-4 md:p-5">
              <h1 className="text-xl md:text-3xl text-white font-semibold md:mt-5">
                <span className="text-violet-600">Porto Hack Santos 2022:</span>{" "}
                <br />
                Conectividade Exponencial e Inclusão Sociodigital
              </h1>

              <p className="leading-relaxed text-justify md:text-left text-zinc-300 mt-2 text-md md:text-lg">
                Nos dias 30 e 31 de julho de 2022, a cidade de Santos foi
                novamente palco do Porto Hack Santos 2022 e da Expo "Um Porto
                Para o Futuro". Este evento trouxe à tona soluções
                revolucionárias para o setor portuário, como um Port Community
                System (PCS) para melhorar a atracação de navios. Em paralelo, a
                Expo promoveu discussões sobre inovação, transformação digital e
                equidade de gênero, fortalecendo a inclusão e a diversidade no
                setor. A equipe Porto Tech destacou-se com uma solução
                inovadora, recebendo um prêmio de R$ 25 mil.
              </p>

              <h1 className="text-xl md:text-2xl text-white font-semibold mt-10 border-t border-zinc-700 pt-5">
                Experiências inovadoras
              </h1>

              <div className="mt-5 rounded-xl border-4 border-zinc-500 overflow-hidden">
                <iframe
                  allowFullScreen
                  className="w-full aspect-video"
                  title="Apresentação Porto Hack Santos 2022"
                  src="https://www.youtube.com/embed/T44kEthQXNo?si=0qDRJOxiIKBsc0Ze"
                />
              </div>
            </div>
          </div>

          <div className=" bg-zinc-800 rounded-md py-8 px-4 md:px-8">
            <h1 className="text-xl md:text-3xl text-white font-semibold">
              Repercussão na imprensa
            </h1>

            <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
              Foram publicadas {news2022.length} matérias na imprensa regional e
              setorial do setor logístico-portuário, comércio exterior e
              tecnologia da informação
            </p>

            <Carousel
              opts={{
                align: "start",
              }}
              className="mt-10"
            >
              <CarouselContent>
                {news2022.map((item: any, index: any) => (
                  <CarouselItem
                    key={index}
                    className="pb-[60px] md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="bg-zinc-700 w-full h-[200px] flex flex-col justify-center text-white p-3 rounded-md">
                      <h1 className="text-xl font-semibold">{item.name}</h1>
                      <p className="text-sm mt-2">
                        {item.description.substring(0, 50)}...
                      </p>

                      <span className="block mt-3 text-sm">
                        Data da matéria: {item.date}
                      </span>

                      <a
                        href={item.url}
                        target="_blank"
                        title="Clique para acessar a notícia"
                        className="mt-3 bg-violet-600 text-white w-full py-2 flex justify-center gap-2 text-sm rounded-md hover:brightness-75 transition-all"
                        rel="noreferrer"
                      >
                        <Link2Icon size={20} />
                        Acessar notícia
                      </a>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex items-center gap-2">
                <CarouselPrevious
                  type="button"
                  title="Clique para voltar um slide"
                  className="w-10 h-10 relative left-0 top-1 bg-zinc-800 hover:bg-zinc-800/70 rounded-md border-2 border-zinc-700 text-zinc-400 hover:text-zinc-400 hover:brightness-90 flex items-center justify-center"
                >
                  <ChevronLeft size={20} />
                </CarouselPrevious>
                <CarouselNext
                  type="button"
                  title="Clique para avançar um slide"
                  className="w-10 h-10 relative left-0 top-1 bg-zinc-800 hover:bg-zinc-800/70 rounded-md border-2 border-zinc-700 text-zinc-400 hover:text-zinc-400 hover:brightness-90 flex items-center justify-center"
                >
                  <ChevronRight size={20} />
                </CarouselNext>
              </div>
            </Carousel>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-8">
          <div className=" bg-zinc-800 rounded-md py-8 px-4 md:px-8 my-5">
            <h1 className="text-xl md:text-3xl text-white font-semibold">
              Imagens do evento
            </h1>

            <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
              Confira algumas imagens desse evento incrível
            </p>

            <div className="mt-10">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="mt-10"
              >
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2022/image_01.png"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2022/image_02.png"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2022/image_03.png"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2022/image_04.png"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2022/image_05.png"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2022/image_06.png"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2022/image_07.png"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2022/image_08.png"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2022/image_09.png"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2022/image_10.png"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA + Junte-se à comunidade AmiGU */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Evolua seu conhecimento!
            </h1>
            <p className="text-zinc-300">
              Amplie suas habilidades e descubra novas oportunidades de
              aprendizado!
            </p>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Inscreva-se agora
          </Link>
        </div>
      </section>

      {/* Openthon2021 */}
      <section className="bg-background border-t bg-cover bg-center bg-no-repeat py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-2 md:px-8 space-y-5 mb-5">
          <div className="flex items-start gap-7">
            <div className="hidden md:flex sticky top-44 w-60 bg-zinc-900 border-4 border-zinc-800 rounded-lg p-5  flex-col gap-10">
              <div className="flex items-center gap-2 text-white transition-all ">
                <div className="w-6 h-6 relative bg-zinc-700 rounded-full after:content-[''] after:w-[1px] after:h-[40px] after:absolute after:bg-zinc-700 after:left-1/2 after:-translate-x-1/2 after:top-6" />
                Sobre o evento
              </div>

              <div className="flex items-center gap-2 text-white transition-all">
                <div className="w-6 h-6 relative bg-zinc-700 rounded-full after:content-[''] after:w-[1px] after:h-[40px] after:absolute after:bg-zinc-700 after:left-1/2 after:-translate-x-1/2 after:top-6" />
                Notícias
              </div>

              <div className="flex items-center gap-2 text-white transition-all">
                <div className="w-6 h-6 bg-zinc-700 rounded-full" />
                Imagens
              </div>
            </div>

            <div className="flex-1 bg-zinc-900 border-4 border-zinc-800 rounded-lg p-4 md:p-5">
              <h1 className="text-xl md:text-3xl text-white font-semibold md:mt-5">
                <span className="text-violet-600">Openthon 2021:</span> <br />
                Transformando o Setor Financeiro
              </h1>

              <p className="leading-relaxed text-justify md:text-left text-zinc-300 mt-2 text-md md:text-lg">
                <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
                  Durante o maior evento de inovação financeira e ciclo de
                  crédito da América Latina, o CMS Business Revolution, o
                  Instituto AmiGU participou do Openthon – Hackathon CMS
                  Business Revolution em 2021. Este hackathon desafiou os
                  participantes a desenvolverem soluções inovadoras para o setor
                  financeiro, focando em Open Banking, Open Finance e Open Data.
                  O evento destacou-se pela sua abordagem híbrida, começando no
                  metaverso e culminando em uma final presencial, simbolizando
                  um novo patamar para a colaboração e a descoberta de talentos
                  no setor financeiro.
                </p>
              </p>

              <h1 className="text-xl md:text-2xl text-white font-semibold mt-10 border-t border-zinc-700 pt-5">
                Experiências inovadoras
              </h1>

              <div className="mt-5 rounded-xl border-4 border-zinc-500 overflow-hidden">
                <iframe
                  allowFullScreen
                  className="w-full aspect-video"
                  title="Apresentação OpenThon 2021"
                  src="https://www.youtube.com/embed/xx0YiKOG5mE?si=osl4i4qHbiBhV5hZ"
                />
              </div>
            </div>
          </div>

          <div className=" bg-zinc-800 rounded-md py-8 px-4 md:px-8">
            <h1 className="text-xl md:text-3xl text-white font-semibold">
              Repercussão na imprensa
            </h1>

            <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
              Foram publicadas {news2021OpenThon.length} matérias na imprensa
              regional e setorial do setor logístico-portuário, comércio
              exterior e tecnologia da informação
            </p>

            <Carousel
              opts={{
                align: "start",
              }}
              className="mt-10"
            >
              <CarouselContent>
                {news2021OpenThon.map((item: any, index: any) => (
                  <CarouselItem key={index} className="pb-[60px]">
                    <div className="bg-zinc-700 w-full h-[200px] flex flex-col justify-center text-white p-3 rounded-md">
                      <h1 className="text-xl font-semibold">{item.name}</h1>
                      <p className="text-sm mt-2">
                        {item.description.substring(0, 50)}...
                      </p>

                      <span className="block mt-3 text-sm">
                        Data da matéria: {item.date}
                      </span>

                      <a
                        href={item.url}
                        target="_blank"
                        title="Clique para acessar a notícia"
                        className="mt-3 bg-violet-600 text-white w-full py-2 flex justify-center gap-2 text-sm rounded-md hover:brightness-75 transition-all"
                        rel="noreferrer"
                      >
                        <Link2Icon size={20} />
                        Acessar notícia
                      </a>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-8">
          <div className=" bg-zinc-800 rounded-md py-8 px-4 md:px-8 my-5">
            <h1 className="text-xl md:text-3xl text-white font-semibold">
              Imagens do evento
            </h1>

            <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
              Confira algumas imagens desse evento incrível
            </p>

            <div className="mt-10">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="mt-10"
              >
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/openthon.jpg"
                      alt="Imagem do Openthon 2021"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/openthon-2.jpg"
                      alt="Imagem do Openthon 2021"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA + Junte-se à comunidade AmiGU */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Conheça nossas iniciativas AmiGU
            </h1>
            <p className="text-zinc-300">
              Descubra as ações transformadoras da comunidade AmiGu!
            </p>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Inscreva-se agora
          </Link>
        </div>
      </section>

      {/* BrasilHackExport2020 */}
      <section className="bg-background border-t bg-cover bg-center bg-no-repeat py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-2 md:px-8 space-y-5">
          <div className="flex items-start gap-7">
            <div className="hidden md:flex sticky top-44 w-60 bg-zinc-900 border-4 border-zinc-800 rounded-lg p-5  flex-col gap-10">
              <div className="flex items-center gap-2 text-white transition-all ">
                <div className="w-6 h-6 relative bg-zinc-700 rounded-full after:content-[''] after:w-[1px] after:h-[40px] after:absolute after:bg-zinc-700 after:left-1/2 after:-translate-x-1/2 after:top-6" />
                Sobre o evento
              </div>

              <div className="flex items-center gap-2 text-white transition-all">
                <div className="w-6 h-6 relative bg-zinc-700 rounded-full after:content-[''] after:w-[1px] after:h-[40px] after:absolute after:bg-zinc-700 after:left-1/2 after:-translate-x-1/2 after:top-6" />
                Notícias
              </div>

              <div className="flex items-center gap-2 text-white transition-all">
                <div className="w-6 h-6 bg-zinc-700 rounded-full" />
                Imagens
              </div>
            </div>

            <div className="flex-1 bg-zinc-900 border-4 border-zinc-800 rounded-lg p-4 md:p-5">
              <h1 className="text-xl md:text-3xl text-white font-semibold md:mt-5">
                <span className="text-violet-600">
                  Brasil Hack Export 2020:
                </span>{" "}
                <br />
                Inovação em Tempos de Pandemia
              </h1>

              <p className="leading-relaxed text-justify md:text-left text-zinc-300 mt-2 text-md md:text-lg">
                <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
                  Em um momento de incerteza global, o Instituto AmiGU, em
                  parceria com a UNA Eventos, lançou o Brasil Hack Export, uma
                  maratona de inovação online que ocorreu ao longo de várias
                  etapas regionais em 2020. Este hackathon reuniu mais de 300
                  competidores que desenvolveram soluções para desafios
                  específicos do setor portuário, como a integração de ferrovias
                  com terminais portuários e a otimização do escoamento da
                  safra. O evento culminou em uma grande final em novembro de
                  2020, mostrando que a inovação e a colaboração podem prosperar
                  mesmo em tempos desafiadores.
                </p>
              </p>

              <h1 className="text-xl md:text-2xl text-white font-semibold mt-10 border-t border-zinc-700 pt-5">
                Experiências inovadoras
              </h1>

              <div className="mt-5 rounded-xl border-4 border-zinc-500 overflow-hidden">
                <iframe
                  allowFullScreen
                  className="w-full aspect-video"
                  title="Apresentação OpenThon 2021"
                  src="https://www.youtube.com/embed/8HHM8nbleTk?si=naeLyJAE4xV9SHQO"
                />
              </div>
            </div>
          </div>

          <div className=" bg-zinc-800 rounded-md py-8 px-4 md:px-8">
            <h1 className="text-xl md:text-3xl text-white font-semibold">
              Repercussão na imprensa
            </h1>

            <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
              Foram publicadas {news2020BrasilExport.length} matérias na
              imprensa regional e setorial do setor logístico-portuário,
              comércio exterior e tecnologia da informação
            </p>

            <Carousel
              opts={{
                align: "start",
              }}
              className="mt-10"
            >
              <CarouselContent>
                {news2020BrasilExport.map((item: any, index: any) => (
                  <CarouselItem key={index} className="pb-[60px]">
                    <div className="bg-zinc-700 w-full h-[200px] flex flex-col justify-center text-white p-3 rounded-md">
                      <h1 className="text-xl font-semibold">{item.name}</h1>
                      <p className="text-sm mt-2">
                        {item.description.substring(0, 50)}...
                      </p>

                      <span className="block mt-3 text-sm">
                        Data da matéria: {item.date}
                      </span>

                      <a
                        href={item.url}
                        target="_blank"
                        title="Clique para acessar a notícia"
                        className="mt-3 bg-violet-600 text-white w-full py-2 flex justify-center gap-2 text-sm rounded-md hover:brightness-75 transition-all"
                        rel="noreferrer"
                      >
                        <Link2Icon size={20} />
                        Acessar notícia
                      </a>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-8">
          <div className=" bg-zinc-800 rounded-md py-8 px-4 md:px-8 my-5">
            <h1 className="text-xl md:text-3xl text-white font-semibold">
              Imagens do evento
            </h1>

            <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
              Confira algumas imagens desse evento incrível
            </p>

            <div className="mt-10">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="mt-10"
              >
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/hack-export-3.png"
                      alt="Imagem do Code Of Law 2019"
                      className="w-full aspect-video object-cover object-top rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/hack-export-5.png"
                      alt="Imagem do Code Of Law 2019"
                      className="w-full aspect-video object-cover  rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/hack-export-1.png"
                      alt="Imagem do Code Of Law 2019"
                      className="w-full aspect-video object-cover  rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/hack-export-2.png"
                      alt="Imagem do Code Of Law 2019"
                      className="w-full aspect-video object-cover  rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/hack-export-4.png"
                      alt="Imagem do Code Of Law 2019"
                      className="w-full aspect-video object-cover  rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA + Junte-se à comunidade AmiGU */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Insira a IA no seu dia a dia no formato hackathon!
            </h1>
            <p className="text-zinc-300">
              Participe do nosso hackathon e aprenda a integrar a IA em sua
              rotina de forma inovadora!
            </p>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Inscreva-se agora
          </Link>
        </div>
      </section>

      {/* PortoHack2019 */}
      <section className="bg-background border-t bg-cover bg-center bg-no-repeat py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-2 md:px-8 space-y-5">
          <div className="flex items-start gap-7">
            <div className="hidden md:flex sticky top-44 w-60 bg-zinc-900 border-4 border-zinc-800 rounded-lg p-5  flex-col gap-10">
              <div className="flex items-center gap-2 text-white transition-all ">
                <div className="w-6 h-6 relative bg-zinc-700 rounded-full after:content-[''] after:w-[1px] after:h-[40px] after:absolute after:bg-zinc-700 after:left-1/2 after:-translate-x-1/2 after:top-6" />
                Sobre o evento
              </div>

              <div className="flex items-center gap-2 text-white transition-all">
                <div className="w-6 h-6 relative bg-zinc-700 rounded-full after:content-[''] after:w-[1px] after:h-[40px] after:absolute after:bg-zinc-700 after:left-1/2 after:-translate-x-1/2 after:top-6" />
                Notícias
              </div>

              <div className="flex items-center gap-2 text-white transition-all">
                <div className="w-6 h-6 bg-zinc-700 rounded-full" />
                Imagens
              </div>
            </div>

            <div className="flex-1 bg-zinc-900 border-4 border-zinc-800 rounded-lg p-4 md:p-5">
              <h1 className="text-xl md:text-3xl text-white font-semibold md:mt-5">
                <span className="text-violet-600">Porto Hack Santos 2019:</span>{" "}
                <br />A Revolução Tecnológica Começa
              </h1>

              <p className="leading-relaxed text-justify md:text-left text-zinc-300 mt-2 text-md md:text-lg">
                <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
                  Nos dias 6, 7 e 8 de dezembro de 2019, o Instituto AmiGU, em
                  parceria com a ABTRA, realizou o primeiro Porto Hack Santos.
                  Este evento marcou um novo capítulo na história do porto de
                  Santos, reunindo 60 competidores para enfrentar desafios
                  relacionados à comunicação dos sistemas de emergência e à
                  gestão documental pelas autoridades portuárias. Com uma
                  premiação total de R$ 72 mil, o hackathon destacou-se pela
                  alta qualidade das soluções apresentadas e pelo compromisso
                  com a transformação digital no setor portuário.
                </p>
              </p>

              <h1 className="text-xl md:text-2xl text-white font-semibold mt-10 border-t border-zinc-700 pt-5">
                Experiências inovadoras
              </h1>

              <div className="mt-5 rounded-xl border-4 border-zinc-500 overflow-hidden">
                <iframe
                  allowFullScreen
                  className="w-full aspect-video"
                  title="Apresentação Porto Hack Santos 2019"
                  src="https://www.youtube.com/embed/sQ8X6_p_vFc?si=yzi5NAFYMVBi8sMA"
                />
              </div>
            </div>
          </div>

          <div className=" bg-zinc-800 rounded-md py-8 px-4 md:px-8">
            <h1 className="text-xl md:text-3xl text-white font-semibold">
              Repercussão na imprensa
            </h1>

            <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
              Foram publicadas {news2019.length} matérias na imprensa regional e
              setorial do setor logístico-portuário, comércio exterior e
              tecnologia da informação
            </p>

            <Carousel
              opts={{
                align: "start",
              }}
              className="mt-10"
            >
              <CarouselContent>
                {news2019.map((item: any, index: any) => (
                  <CarouselItem
                    key={index}
                    className="pb-[60px] md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="bg-zinc-700 w-full h-[200px] flex flex-col justify-center text-white p-3 rounded-md">
                      <h1 className="text-xl font-semibold">{item.name}</h1>
                      <p className="text-sm mt-2">
                        {item.description.substring(0, 50)}...
                      </p>

                      <span className="block mt-3 text-sm">
                        Data da matéria: {item.date}
                      </span>

                      <a
                        href={item.url}
                        target="_blank"
                        title="Clique para acessar a notícia"
                        className="mt-3 bg-violet-600 text-white w-full py-2 flex justify-center gap-2 text-sm rounded-md hover:brightness-75 transition-all"
                        rel="noreferrer"
                      >
                        <Link2Icon size={20} />
                        Acessar notícia
                      </a>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex items-center gap-2">
                <CarouselPrevious
                  type="button"
                  title="Clique para voltar um slide"
                  className="w-10 h-10 relative left-0 top-1 bg-zinc-800 hover:bg-zinc-800/70 rounded-md border-2 border-zinc-700 text-zinc-400 hover:text-zinc-400 hover:brightness-90 flex items-center justify-center"
                >
                  <ChevronLeft size={20} />
                </CarouselPrevious>
                <CarouselNext
                  type="button"
                  title="Clique para avançar um slide"
                  className="w-10 h-10 relative left-0 top-1 bg-zinc-800 hover:bg-zinc-800/70 rounded-md border-2 border-zinc-700 text-zinc-400 hover:text-zinc-400 hover:brightness-90 flex items-center justify-center"
                >
                  <ChevronRight size={20} />
                </CarouselNext>
              </div>
            </Carousel>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-8">
          <div className=" bg-zinc-800 rounded-md py-8 px-4 md:px-8 my-5">
            <h1 className="text-xl md:text-3xl text-white font-semibold">
              Imagens do evento
            </h1>

            <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
              Confira algumas imagens desse evento incrível
            </p>

            <div className="mt-10">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="mt-10"
              >
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2019/image_01.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2019/image_02.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2019/image_03.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2019/image_04.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2019/image_05.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2019/image_06.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/2019/image_07.jpg"
                      alt="Imagem do PORTO HACK SANTOS 2023"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA + Junte-se à comunidade AmiGU */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Vire apoiador dos nossos eventos
            </h1>
            <p className="text-zinc-300">
              Junte-se a nós como apoiador e faça a diferença em nossos eventos!
            </p>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Inscreva-se agora
          </Link>
        </div>
      </section>

      {/* CodeOfLaw2019 */}
      <section className="bg-background border-t bg-cover bg-center bg-no-repeat py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-2 md:px-8 space-y-5">
          <div className="flex items-start gap-7">
            <div className="hidden md:flex sticky top-44 w-60 bg-zinc-900 border-4 border-zinc-800 rounded-lg p-5  flex-col gap-10">
              <div className="flex items-center gap-2 text-white transition-all ">
                <div className="w-6 h-6 relative bg-zinc-700 rounded-full after:content-[''] after:w-[1px] after:h-[40px] after:absolute after:bg-zinc-700 after:left-1/2 after:-translate-x-1/2 after:top-6" />
                Sobre o evento
              </div>

              <div className="flex items-center gap-2 text-white transition-all">
                <div className="w-6 h-6 relative bg-zinc-700 rounded-full after:content-[''] after:w-[1px] after:h-[40px] after:absolute after:bg-zinc-700 after:left-1/2 after:-translate-x-1/2 after:top-6" />
                Notícias
              </div>

              <div className="flex items-center gap-2 text-white transition-all">
                <div className="w-6 h-6 bg-zinc-700 rounded-full" />
                Imagens
              </div>
            </div>

            <div className="flex-1 bg-zinc-900 border-4 border-zinc-800 rounded-lg p-4 md:p-5">
              <h1 className="text-xl md:text-3xl text-white font-semibold md:mt-5">
                <span className="text-violet-600">
                  Hackathon Code of Law 2019:
                </span>{" "}
                <br />
                Integração entre Tecnologia e Direito
              </h1>

              <p className="leading-relaxed text-justify md:text-left text-zinc-300 mt-2 text-md md:text-lg">
                <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
                  Em novembro de 2019, o Instituto AmiGU, em parceria com a
                  UNISANTOS e a OAB Santos, realizou o Hackathon Code of Law, um
                  evento que uniu 270 competidores em uma maratona de 36 horas.
                  O objetivo era criar soluções tecnológicas para melhorar os
                  serviços jurídicos na Baixada Santista. As equipes
                  desenvolveram aplicativos para otimizar o trabalho dos
                  advogados e sistemas para facilitar a triagem de casos na
                  assistência judiciária gratuita, utilizando inteligência
                  artificial para potencializar suas funcionalidades. Este
                  evento reforçou a importância da inovação no setor jurídico e
                  deixou um legado duradouro de integração entre tecnologia e
                  direito.
                </p>
              </p>

              <h1 className="text-xl md:text-2xl text-white font-semibold mt-10 border-t border-zinc-700 pt-5">
                Experiências inovadoras
              </h1>

              <div className="mt-5 rounded-xl border-4 border-zinc-500 overflow-hidden">
                <img
                  className="w-full aspect-video object-cover object-top"
                  title="Foto Code of Law 2019"
                  src="/imagens-de-evento/code-of-law-banner.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className=" bg-zinc-800 rounded-md py-8 px-4 md:px-8">
            <h1 className="text-xl md:text-3xl text-white font-semibold">
              Repercussão na imprensa
            </h1>

            <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
              Foram publicadas {news2019CodeOfLaw.length} matérias na imprensa
              regional e setorial do setor logístico-portuário, comércio
              exterior e tecnologia da informação
            </p>

            <Carousel
              opts={{
                align: "start",
              }}
              className="mt-10"
            >
              <CarouselContent>
                {news2019CodeOfLaw.map((item: any, index: any) => (
                  <CarouselItem key={index} className="pb-[60px] md:basis-1/2">
                    <div className="bg-zinc-700 w-full h-[200px] flex flex-col justify-center text-white p-3 rounded-md">
                      <h1 className="text-xl font-semibold">{item.name}</h1>
                      <p className="text-sm mt-2">
                        {item.description.substring(0, 50)}...
                      </p>

                      <span className="block mt-3 text-sm">
                        Data da matéria: {item.date}
                      </span>

                      <a
                        href={item.url}
                        target="_blank"
                        title="Clique para acessar a notícia"
                        className="mt-3 bg-violet-600 text-white w-full py-2 flex justify-center gap-2 text-sm rounded-md hover:brightness-75 transition-all"
                        rel="noreferrer"
                      >
                        <Link2Icon size={20} />
                        Acessar notícia
                      </a>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-8">
          <div className=" bg-zinc-800 rounded-md py-8 px-4 md:px-8 my-5">
            <h1 className="text-xl md:text-3xl text-white font-semibold">
              Imagens do evento
            </h1>

            <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
              Confira algumas imagens desse evento incrível
            </p>

            <div className="mt-10">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="mt-10"
              >
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/code-of-law-1.png"
                      alt="Imagem do Code Of Law 2019"
                      className="w-full aspect-video object-cover object-top rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/code-of-law-2.png"
                      alt="Imagem do Code Of Law 2019"
                      className="w-full aspect-video object-cover object-top rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/code-of-law-3.jpg"
                      alt="Imagem do Code Of Law 2019"
                      className="w-full aspect-video object-cover object-top rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/code-of-law-4.jpg"
                      alt="Imagem do Code Of Law 2019"
                      className="w-full aspect-video object-cover object-top rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/code-of-law-5.jpg"
                      alt="Imagem do Code Of Law 2019"
                      className="w-full aspect-video object-cover object-top rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/code-of-law-6.jpg"
                      alt="Imagem do Code Of Law 2019"
                      className="w-full aspect-video object-cover object-top rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/code-of-law-7.jpg"
                      alt="Imagem do Code Of Law 2019"
                      className="w-full aspect-video object-cover object-top rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/code-of-law-8.jpg"
                      alt="Imagem do Code Of Law 2019"
                      className="w-full aspect-video object-cover object-top rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/code-of-law-9.jpg"
                      alt="Imagem do Code Of Law 2019"
                      className="w-full aspect-video object-cover object-top rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/code-of-law-10.jpg"
                      alt="Imagem do Code Of Law 2019"
                      className="w-full aspect-video object-cover object-top rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA + Junte-se à comunidade AmiGU */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Solucione dores com nossos hackathons
            </h1>
            <p className="text-zinc-300">
              Transforme suas ideias em soluções: participe dos nossos
              hackathons e traga suas propostas para a mesa!
            </p>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Inscreva-se agora
          </Link>
        </div>
      </section>

      {/* StartuoCidada2018 */}
      <section className="bg-background border-t bg-cover bg-center bg-no-repeat py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-2 md:px-8 space-y-5">
          <div className="flex items-start gap-7">
            <div className="hidden md:flex sticky top-44 w-60 bg-zinc-900 border-4 border-zinc-800 rounded-lg p-5  flex-col gap-10">
              <div className="flex items-center gap-2 text-white transition-all ">
                <div className="w-6 h-6 relative bg-zinc-700 rounded-full after:content-[''] after:w-[1px] after:h-[40px] after:absolute after:bg-zinc-700 after:left-1/2 after:-translate-x-1/2 after:top-6" />
                Sobre o evento
              </div>

              <div className="flex items-center gap-2 text-white transition-all">
                <div className="w-6 h-6 relative bg-zinc-700 rounded-full after:content-[''] after:w-[1px] after:h-[40px] after:absolute after:bg-zinc-700 after:left-1/2 after:-translate-x-1/2 after:top-6" />
                Notícias
              </div>

              <div className="flex items-center gap-2 text-white transition-all">
                <div className="w-6 h-6 bg-zinc-700 rounded-full" />
                Imagens
              </div>
            </div>

            <div className="flex-1 bg-zinc-900 border-4 border-zinc-800 rounded-lg p-4 md:p-5">
              <h1 className="text-xl md:text-3xl text-white font-semibold md:mt-5">
                <span className="text-violet-600">
                  Hackathon Startup Cidadã 2018:
                </span>{" "}
                <br />
                Um Marco na Educação
              </h1>

              <p className="leading-relaxed text-justify md:text-left text-zinc-300 mt-2 text-md md:text-lg">
                <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
                  Em outubro de 2018, o Instituto AmiGU lançou o Hackathon
                  Startup Cidadã, que se tornou um marco na história da educação
                  na Baixada Santista. Este evento reuniu 65 competidores que,
                  em uma maratona de 35 horas, desenvolveram soluções
                  tecnológicas inovadoras para transformar o ambiente
                  educacional. Entre os projetos criados, destacou-se um sistema
                  para medir o estado emocional dos alunos e uma ferramenta para
                  combater o absenteísmo escolar. Este hackathon não apenas
                  incentivou a economia criativa no setor de TI, mas também
                  impactou diretamente a comunidade local.
                </p>
              </p>

              <h1 className="text-xl md:text-2xl text-white font-semibold mt-10 border-t border-zinc-700 pt-5">
                Experiências inovadoras
              </h1>

              <div className="mt-5 rounded-xl border-4 border-zinc-500 overflow-hidden">
                <iframe
                  allowFullScreen
                  className="w-full aspect-video"
                  title="Apresentação Porto Hack Santos 2019"
                  src="https://www.youtube.com/embed/pO6n_bFD4vg?si=u0gzMq2EZ4_nRaeM"
                />
              </div>
            </div>
          </div>

          <div className=" bg-zinc-800 rounded-md py-8 px-4 md:px-8">
            <h1 className="text-xl md:text-3xl text-white font-semibold">
              Repercussão na imprensa
            </h1>

            <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
              Foram publicadas {news2018StartupCidada.length} matérias na
              imprensa regional e setorial do setor logístico-portuário,
              comércio exterior e tecnologia da informação
            </p>

            <Carousel
              opts={{
                align: "start",
              }}
              className="mt-10"
            >
              <CarouselContent>
                {news2018StartupCidada.map((item: any, index: any) => (
                  <CarouselItem key={index} className="pb-[60px] md:basis-1/2">
                    <div className="bg-zinc-700 w-full h-[200px] flex flex-col justify-center text-white p-3 rounded-md">
                      <h1 className="text-xl font-semibold">{item.name}</h1>
                      <p className="text-sm mt-2">
                        {item.description.substring(0, 50)}...
                      </p>

                      <span className="block mt-3 text-sm">
                        Data da matéria: {item.date}
                      </span>

                      <a
                        href={item.url}
                        target="_blank"
                        title="Clique para acessar a notícia"
                        className="mt-3 bg-violet-600 text-white w-full py-2 flex justify-center gap-2 text-sm rounded-md hover:brightness-75 transition-all"
                        rel="noreferrer"
                      >
                        <Link2Icon size={20} />
                        Acessar notícia
                      </a>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-8">
          <div className=" bg-zinc-800 rounded-md py-8 px-4 md:px-8 my-5">
            <h1 className="text-xl md:text-3xl text-white font-semibold">
              Imagens do evento
            </h1>

            <p className="leading-relaxed text-zinc-300 mt-2 text-md md:text-lg">
              Confira algumas imagens desse evento incrível
            </p>

            <div className="mt-10">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="mt-10"
              >
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/cidada-1.jpg"
                      alt="Imagem do Hackathon Startup Cidadã 2018"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/cidada-2.jpg"
                      alt="Imagem do Hackathon Startup Cidadã 2018"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/cidada-3.jpg"
                      alt="Imagem do Hackathon Startup Cidadã 2018"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/cidada-4.jpg"
                      alt="Imagem do Hackathon Startup Cidadã 2018"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/cidada-5.jpg"
                      alt="Imagem do Hackathon Startup Cidadã 2018"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/cidada-6.jpg"
                      alt="Imagem do Hackathon Startup Cidadã 2018"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/cidada-7.jpg"
                      alt="Imagem do Hackathon Startup Cidadã 2018"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/cidada-8.jpg"
                      alt="Imagem do Hackathon Startup Cidadã 2018"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/cidada-9.jpg"
                      alt="Imagem do Hackathon Startup Cidadã 2018"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img
                      src="/imagens-de-evento/cidada-10.jpg"
                      alt="Imagem do Hackathon Startup Cidadã 2018"
                      className="w-full aspect-video object-cover rounded-md border-4 border-zinc-700 "
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 py-10 md:py-20 border-zinc-800 border-y-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-between gap-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 flex flex-col items-start">
              <span className="text-md uppercase text-violet-500">
                Entre em contato conosco
              </span>
              <h2 className="text-2xl text-zinc-50 mt-2">
                Junte-se à revolução <br /> da inovação e inclusão
              </h2>
              <p className="text-zinc-300 max-w-4xl mt-3 text-justify md:text-left">
                Você acabou de explorar um mundo onde a tecnologia e a
                inteligência artificial se encontram com a paixão por
                transformar vidas e comunidades. No Instituto AmiGU, cada
                iniciativa, cada hackathon, cada curso e cada palestra tem um
                único objetivo: usar o poder da inovação para criar um futuro
                mais inclusivo e sustentável.
              </p>
            </div>
            <div className="flex-1 max-w-3xl flex flex-col items-start mt-5 gap-5">
              <h2 className="text-xl md:text-2xl text-violet-500">
                Por que o Instituto AmiGU?
              </h2>
              {acordionArray.map((item, index) => (
                <Card key={index} className="w-full">
                  <CardContent
                    onClick={() => handleClick(index)}
                    className="cursor-pointer flex flex-col bg-zinc-800 items-center justify-center p-4"
                  >
                    <div
                      className={`${isActive.key === index && isActive.status && "border-b border-zinc-200 pb-4 mb-2"} w-full flex items-center justify-between`}
                    >
                      <h2
                        onClick={() => handleClick(index)}
                        className="text-zinc-300 hover:text-zinc-700 text-lg font-medium cursor-pointer"
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
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-zinc-400"
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
      </section>

      <section className="bg-background bg-center bg-cover bg-no-repeat py-10 md:py-20">
        <div className="flex flex-col items-start gap-2 max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row mt-4 items-start gap-20 md:gap-5">
            <div className="flex-1 flex flex-col justify-end gap-5">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Contatos
              </h2>

              <div className="flex flex-col items-start gap-5">
                <div className="flex items-center gap-4 mt-5">
                  <Phone className="text-violet-800 size-5" />

                  <p className="text-white text-lg">+55 (13) 4042-0740</p>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-violet-800 size-5" />
                  <p className="text-white text-lg">
                    marco@institutoamigu.org.br
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <LocateFixed className="text-violet-800 size-5" />
                  <p className="text-white text-lg">
                    Rua Euclides da Cunha, 11 sala 301, Santos, SP, Brasil
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-10">
              <div className="flex flex-col items-start gap-4">
                <div className="p-2 bg-violet-500 rounded-md">
                  <Rotate3D className="size-6 text-zinc-50" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-zinc-50 text-2xl">
                    Empoderamento e Transformação
                  </h2>
                  <p className="text-zinc-300 text-justify md:text-left">
                    A maratona promove a transformação social ao capacitar os
                    moradores dessas comunidades, tornando-os resolvedores que
                    contribuem para o desenvolvimento local.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4">
                <div className="p-2 bg-violet-500 rounded-md">
                  <Handshake className="size-6 text-zinc-50" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-zinc-50 text-2xl">
                    Parcerias com Empresas
                  </h2>
                  <p className="text-zinc-300 text-justify md:text-left">
                    Empresas do setor portuário e logístico participam como
                    incentivadoras, mantenedoras e impulsionadoras dos projetos,
                    apoiando as melhores ideias e integrando resolvedores
                    qualificados em seus quadros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
