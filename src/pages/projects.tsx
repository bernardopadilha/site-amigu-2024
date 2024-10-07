/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRightLeftIcon,
  AwardIcon,
  CheckCheck,
  Facebook,
  Heart,
  Info,
  Instagram,
  LibraryBigIcon,
  Linkedin,
  LockKeyholeIcon,
  MinusIcon,
  Phone,
  PlusIcon,
  QuoteIcon,
  Send,
  TicketCheckIcon,
  UsersRoundIcon,
} from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type Language = "BR" | "ES";

interface Content {
  title: string;
  description: string;
  testimonial: string;
  testimonialAuthor: string;
  sectionTitles: {
    section1: string;
    section2: string;
    section3: string;
  };
  sectionDescriptions: {
    section1: string;
    section2: string;
    section3: string;
  };
  transformationTitle: string;
  transformationDescription: string;
  cta: {
    ctaTitle: string;
    ctaDescription: string;
    ctaButtonText: string;
  };
}

interface SkillsCarouselProps {
  title: string;
  description: string;
}

interface InviteProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface AcordionProps {
  title: string;
  descripition: string;
}

const acordionArray: AcordionProps[] = [
  {
    title: "Arquitetura da Competição",
    descripition:
      "A maratona será organizada em várias etapas, começando com um período de imersão nas comunidades portuárias, onde os competidores terão a oportunidade de entender as necessidades locais. Em seguida, os participantes formarão equipes multidisciplinares e começarão a desenvolver suas soluções com o apoio de mentores experientes.",
  },
  {
    title: "Cidades e Comunidades Participantes",
    descripition:
      "A maratona será realizada em várias cidades portuárias ao longo do Brasil, incluindo Santos, Rio de Janeiro e Salvador. Cada uma dessas cidades foi escolhida por sua importância econômica e pelos desafios únicos que suas comunidades enfrentam.",
  },
  {
    title: "Impactos Esperados",
    descripition:
      "Ao final da maratona, esperamos que as soluções desenvolvidas contribuam para a melhoria das condições de vida nas comunidades portuárias, promovendo a inclusão digital, a educação e o desenvolvimento sustentável. As melhores soluções poderão ser implementadas com o apoio das empresas parceiras, gerando impacto real e duradouro.",
  },
];

const skillsBasicsCarousel: SkillsCarouselProps[] = [
  {
    title: "Oratória",
    description:
      "Comunicação clara e eficaz para apresentar ideias e persuadir.",
  },
  {
    title: "Escrita",
    description:
      "Documentação e comunicação escrita eficaz para o ambiente profissional.",
  },
  {
    title: "Persuasão",
    description:
      "Habilidade crucial para negociação e influência em contextos empresariais.",
  },
  {
    title: "Matemática e Lógica",
    description: "Base para a resolução de problemas e análise de dados.",
  },
  {
    title: "Raciocínio Lógico",
    description:
      "Fundamental para o pensamento estruturado e solução de problemas complexos.",
  },
  {
    title: "Educação Financeira",
    description:
      "Essencial para a gestão eficaz de recursos financeiros pessoais e empresariais.",
  },
  {
    title: "Empreendedorismo",
    description:
      "Importante para identificar oportunidades e criar negócios sustentáveis.",
  },
];

const skillsTecnicalCarousel: SkillsCarouselProps[] = [
  {
    title: "Alfabetização Digital",
    description:
      "Fundamental para operar e entender tecnologias digitais modernas.",
  },
  {
    title: "Análise de Dados",
    description:
      "Essencial para interpretar dados e tomar decisões informadas.",
  },
  {
    title: "IA Generativa",
    description:
      "Habilidade central para criar soluções inovadoras e eficientes usando IA.",
  },
  {
    title: "Ética na IA",
    description:
      "Garantir o uso responsável e seguro da tecnologia em diferentes contextos.",
  },
];

const welcomingInvitation: InviteProps[] = [
  {
    title: "Troca de Conhecimentos",
    description:
      "Seu conhecimento e experiência são inestimáveis para as jovens que estão começando suas carreiras. Seja compartilhando suas habilidades técnicas ou orientando em questões de desenvolvimento pessoal, sua contribuição terá um impacto duradouro.",
    icon: <ArrowRightLeftIcon className="size-5 text-violet-600 rotate-45" />,
  },
  {
    title: "Um Espaço Seguro e Inspirador",
    description:
      "No AmiGU Delas, criamos um ambiente onde as mulheres são incentivadas a expressar suas ideias, compartilhar suas histórias e apoiar umas às outras. Aqui, cada mentora e especialista é vista como uma peça fundamental na construção de uma rede poderosa de mulheres que fazem a diferença.",
    icon: <LockKeyholeIcon className="size-5 text-violet-600" />,
  },
  {
    title: "Crescimento Mútuo",
    description:
      "Ao se tornar uma mentora no AmiGU Delas, você também terá a oportunidade de crescer, aprendendo com outras mentoras e especialistas e expandindo sua própria rede profissional.",
    icon: <LibraryBigIcon className="size-5 text-violet-600" />,
  },
];

const contentRaicesDigitaless: Record<Language, Content> = {
  BR: {
    title:
      "Raíces Digitales Brasil: Empoderando Mulheres e Herdeiros de Negócios Tradicionais",
    description:
      "O Raíces Digitales Brasil é voltado para a capacitação de mulheres empreendedoras e jovens herdeiros de negócios tradicionais em áreas urbanas e rurais. Com foco na inclusão digital e na transformação de negócios familiares, o projeto oferece treinamento em marketing digital, vendas online, e gestão de microempresas, ajudando a preservar as raízes culturais e econômicas das comunidades locais.",
    testimonial:
      "O Raíces Digitales Brasil me deu as ferramentas para transformar o negócio da minha família. Hoje, estamos crescendo e preservando nossas tradições ao mesmo tempo.",
    testimonialAuthor: "- Ana, empreendedora e participante do projeto",
    sectionTitles: {
      section1: "Capacitação em Negócios Digitais",
      section2: "Empoderamento Feminino",
      section3: "Preservação Cultural",
    },
    sectionDescriptions: {
      section1:
        "As participantes recebem treinamento em ferramentas digitais que permitem a modernização e o crescimento de seus negócios.",
      section2:
        "O projeto oferece um espaço seguro e de apoio para que as mulheres possam desenvolver suas habilidades e se tornarem líderes em suas comunidades.",
      section3:
        "As participantes recebem treinamento em ferramentas digitais que permitem a modernização e o crescimento de seus negócios.",
    },
    transformationTitle: "Como eles se conectam",
    transformationDescription:
      "O Raíces Digitales Brasil atua diretamente na modernização de negócios familiares, capacitando mulheres e jovens empreendedores que podem se beneficiar das mentorias do AmiGU Resolv e das soluções desenvolvidas na Maratona Um Porto para o Futuro. Juntos, esses projetos fortalecem o tecido social e econômico das comunidades participantes.",
    cta: {
      ctaTitle: "Participe da Próxima Maratona – Inscreva-se Agora",
      ctaDescription:
        "Participe da próxima maratona – Garanta sua vaga agora!",
      ctaButtonText: "Inscreva-se",
    },
  },
  ES: {
    title:
      "Raíces Digitales Espanha: Inovação para Negócios Familiares e Comunidades Tradicionais",
    description:
      "O Raíces Digitales Espanha foca na capacitação de jovens herdeiros de negócios familiares em regiões como Galícia e Catalunha. Este projeto é essencial para a preservação das tradições culturais e econômicas dessas áreas, enquanto prepara os participantes para enfrentar os desafios da era digital. Através de treinamentos especializados, os jovens são equipados para modernizar e expandir os negócios de suas famílias, mantendo suas raízes enquanto exploram novas oportunidades de crescimento.",
    testimonial:
      "O Raíces Digitales Espanha me ajudou a modernizar o negócio da minha família, mantendo nossas tradições vivas enquanto exploramos novas oportunidades no mercado europeu.",
    testimonialAuthor: "- Carlos, jovem empreendedor e participante do projeto",
    sectionTitles: {
      section1: "Treinamento em Tecnologia e Inovação",
      section2: "Fortalecimento das Comunidades Locais",
      section3: "Conexão com o Mercado Europeu",
    },
    sectionDescriptions: {
      section1:
        "Os jovens herdeiros recebem treinamento em ferramentas digitais avançadas, que permitem a transformação e o crescimento dos negócios familiares.",
      section2:
        "O projeto promove a inclusão digital e a modernização dos negócios tradicionais, contribuindo para o desenvolvimento sustentável das comunidades.",
      section3:
        "Parcerias com universidades e empresas locais abrem portas para que os participantes expandam suas operações e alcancem novos mercados.",
    },
    transformationTitle: "Como eles se conectam",
    transformationDescription:
      "O Raíces Digitales Espanha não só moderniza negócios familiares, mas também conecta esses jovens empreendedores com oportunidades de mentoria e soluções inovadoras, como as desenvolvidas na Maratona Um Porto para o Futuro e no AmiGU Resolv. Assim, o impacto do projeto se expande, promovendo um desenvolvimento sustentável em várias frentes.",
    cta: {
      ctaTitle: "Participe do Raíces Digitales Espanha",
      ctaDescription:
        "Participe da próxima maratona – Garanta sua vaga agora!",
      ctaButtonText: "Inscreva-se Agora",
    },
  },
};

export function Projects() {
  const { hash } = useLocation();
  const navigate = useNavigate();

  const [language, setLanguage] = useState<Language>("BR");
  const [isActive, setIsActive] = useState({
    status: true,
    key: 0,
  });



  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  // Variantes para animação
  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

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
  const refAmiguResolv: any = useRef();
  const refPPF: any = useRef();
  const refRaicesDigitales: any = useRef();

  useEffect(() => {
    if (hash === "") {
      window.scroll({
        top: refBanner.current.offsetTop - 100,
        behavior: "smooth",
      });
    }

    if (hash === "#amigu-resolv") {
      window.scroll({
        top: refAmiguResolv.current.offsetTop - 100,
        behavior: "smooth",
      });
    }

    if (hash === "#maratona-um-porto-para-o-futuro") {
      window.scroll({
        top: refPPF.current.offsetTop - 100,
        behavior: "smooth",
      });
    }

    if (hash === "#raices-digitales") {
      window.scroll({
        top: refRaicesDigitales.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }, [hash]);

  return (
    <main>
      {/* Seção de banner */}
      <section
        ref={refBanner}
        className="py-10 h-[45rem] bg-[url(/portoHack-309.jpg)] bg-no-repeat bg-center bg-cover pt-24"
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto px-4">
            <span className="bg-violet-600 border-4 border-violet-700 text-white px-4 rounded-full animate-bounce py-1 text-sm md:text-md flex items-center">
              <Heart className="size-4 mr-2 fill-white" />
              Vidas e comunidades
            </span>

            <h1 className="text-xl text-center md:text-4xl font-semibold text-white mt-3">
              Projetos que transformam <br /> vidas e comunidades tecnológicas
            </h1>

            <p className="text-md md:text-lg text-zinc-300 mt-2 max-w-xl text-center">
              Conheça as iniciativas do Instituto AmiGU que estão criando
              oportunidades, promovendo a inclusão digital e gerando impacto
              social sustentável.
            </p>
          </div>
        </div>
      </section>

      {/* Seção CTA + Junte-se à comunidade AmiGU */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Conheça nossos projetos
            </h1>
            <p className="text-zinc-300">
              Explore as inovações que estamos construindo
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

      {/* Seção AmiGU Resolv: Capacitando jovens e mentores para o futuro */}
      <section
        ref={refAmiguResolv}
        className="bg-zinc-900 border-zinc-800 py-10 md:py-20 border-b-2 bg-background bg-center bg-cover bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-14">
            <div className="flex-1 w-full">
              <img
                alt="Imagem"
                src="/imagens-de-evento/todas-as-pessoas-do-porto.jpg"
                className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
              />
            </div>

            <div className="flex-1 flex flex-col items-start gap-4">
              <div>
                <span className="text-violet-500 text-sm font-semibold uppercase ">
                  O futuro para o AMIGU
                </span>
                <h2 className="text-3xl text-zinc-50 mt-1 tracking-tight">
                  AmiGU Resolv: <br /> Capacitando jovens e mentores para o
                  futuro
                </h2>
              </div>
              <p className="text-zinc-400 text-lg text-justify">
                O AmiGU Resolv é um programa de mentorias que conecta jovens em
                situação de vulnerabilidade com mentores experientes,
                capacitando-os em um conjunto abrangente de habilidades
                técnicas, socioemocionais e de liderança. Este projeto é ideal
                para profissionais que desejam compartilhar seu conhecimento e
                fazer a diferença na vida de jovens talentos, ao mesmo tempo em
                que se conectam com uma rede de impacto social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seções de habilidades ensinadas */}
      <section className="bg-background bg-cover bg-center bg-no-repeat py-10 md:py-20">
        <div className="w-full flex flex-col items-center max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-2xl w-full md:w-auto sm:text-3xl md:text-center md:text-4xl font-semibold text-zinc-50">
              Habilidades ensinadas
            </h2>
            <p className="text-justify md:text-center text-zinc-300 max-w-3xl">
              Desenvolva competências para o futuro: habilidades essenciais que
              transformam sua capacidade de inovar, solucionar problemas e se
              destacar no mundo em constante evolução!
            </p>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-20 mt-10">
            <div className="flex items-start flex-col">
              <h2 className="text-2xl text-white font-semibold">
                Habilidades básicas:
              </h2>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-4 w-full gap-4">
                {skillsBasicsCarousel.map((carousel, i) => (
                  <div
                    key={carousel.title}
                    className="md:basis-1/2  lg:basis-1/3  border-none rounded-md overflow-hidden"
                  >
                    <Card className="border-0 rounded-lg overflow-hidden max">
                      <CardContent className="bg-zinc-800 h-72 flex  px-6 py-10 border-4 border-zinc-700">
                        <div className="flex flex-col gap-6">
                          <span className="bg-violet-600 border-4 border-violet-800 font-bold text-white size-10 flex items-center justify-center rounded-full">
                            {i + 1}
                          </span>

                          <h2 className="text-2xl text-zinc-50 font-semibold">
                            {carousel.title}
                          </h2>

                          <p className="text-zinc-300">
                            {carousel.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-start flex-col">
              <h2 className="text-2xl text-white font-semibold">
                Habilidades técnicas:
              </h2>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-4 w-full gap-4">
                {skillsTecnicalCarousel.map((carousel, i) => (
                  <div
                    key={carousel.title}
                    className="md:basis-1/2  lg:basis-1/3  border-none rounded-md overflow-hidden"
                  >
                    <Card className="border-0 rounded-lg overflow-hidden max">
                      <CardContent className="bg-zinc-800 h-72 flex  px-6 py-10 border-4 border-zinc-700">
                        <div className="flex flex-col gap-6">
                          <span className="bg-violet-600 border-4 border-violet-800 font-bold text-white size-10 flex items-center justify-center rounded-full">
                            {i + 1}
                          </span>

                          <h2 className="text-2xl text-zinc-50 font-semibold">
                            {carousel.title}
                          </h2>

                          <p className="text-zinc-300">
                            {carousel.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de mentoras e especialistas */}
      <section className="bg-zinc-900 py-10 md:py-20 border-zinc-800 border-y-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-2xl w-full md:w-auto sm:text-3xl md:text-center md:text-4xl font-semibold text-zinc-50">
              Mentoras e especialistas: <br /> Junte-se a nós para inspirar a{" "}
              próxima geração de líderes
            </h2>
            <p className="text-justify md:text-center text-zinc-300 max-w-3xl">
              Como mentora ou especialista no AmiGU Delas, você terá a
              oportunidade única de impactar diretamente a vida de jovens
              mulheres em situação de vulnerabilidade. Seu conhecimento,
              experiência e paixão podem ser a chave para ajudar essas jovens a
              desbloquear seu potencial e se tornarem líderes em suas
              comunidades e setores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5">
            {welcomingInvitation.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start gap-4 bg-zinc-800 p-7 rounded-md border border-zinc-700"
              >
                <div className="p-3 rounded-full bg-zinc-800 w-fit border-4 border-violet-950">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-xl text-white font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-zinc-300 text-justify mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative max-w-7xl mx-auto px-4 flex flex-col justify-center text-justify md:text-left bg-gradient-to-r p-10 md:p-20 rounded-3xl from-violet-500 to-[#4F358D] transition-all">
            <h2 className="text-xl md:text-3xl text-white font-semibold">
              Liderança Feminina
            </h2>

            <p className="text-white text-lg font-medium mt-3">
              O AmiGU Delas coloca as mulheres no centro da transformação,
              oferecendo ferramentas e suporte para que elas possam liderar com
              confiança e inspirar outras ao longo do caminho.
            </p>

            <QuoteIcon className="absolute md:top-10 md:left-10 left-3 top-3 rotate-180 text-white fill-white" />
            <QuoteIcon className="hidden md:block absolute bottom-10 right-10 text-white fill-white" />
            <img
              src="/elipses.svg"
              alt="elipses"
              className="absolute top-0 right-0"
            />
          </div>

          <div className="bg-zinc-800 p-4 rounded-lg flex flex-col items-start gap-2 hover:scale-[100%] transition-all">
            <QuoteIcon className="text-violet-500 fill-violet-500" />

            <p className="text-zinc-300">
              Ser mentora no AmiGU Delas tem sido uma das experiências mais
              gratificantes da minha vida. Ver a evolução das jovens e saber que
              estou contribuindo para o crescimento delas é algo que me enche de
              orgulho e motivação.
            </p>

            <h2 className="text-zinc-500">
              {" "}
              - Cláudia, mentora no AmiGU Delas
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-5">
            <div className="flex-1 flex flex-col items-start gap-3">
              <div>
                <span className="text-violet-500 text-sm font-semibold uppercase">
                  Conexão com Outros Projetos
                </span>
                <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 tracking-tight">
                  Impacto Expandido: <br /> Como nossos projetos se conectam
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
                  Engrenagem de Transformação
                </span>
                <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 tracking-tight">
                  Como eles se conectam: Formando <br /> uma rede de impacto
                  sustentável
                </h2>
              </div>
              <p className="text-zinc-300 text-justify md:text-left">
                O AmiGU Resolv é o motor que capacita jovens e mentores,
                preparando-os para atuar em outros projetos do Instituto AmiGU,
                como a Maratona Um Porto para o Futuro e o Raíces Digitales.
                Juntos, esses projetos formam uma engrenagem de transformação,
                onde cada iniciativa alimenta a outra, criando um impacto
                sustentável e duradouro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA + Seja um Mentor ou Patrocinador – Junte-se ao AmiGU Resolv */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Seja um Mentor ou Patrocinador – Junte-se ao AmiGU Resolv
            </h1>
            <p className="text-zinc-300">
              Seja um Mentor ou Patrocinador – Junte-se ao AmiGU Resolv e faça a
              diferença!
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

      {/* Seção maratona um porto para o futuro */}
      <section
        ref={refPPF}
        className="bg-zinc-900 py-10 md:py-20 border-zinc-800 border-y-2"
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
                  src="/porto-para-futuro.jpeg"
                  className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-center">
            <div className="flex-1 flex flex-col items-start gap-2">
              <h2 className="text-2xl text-white font-semibold">
                Destaques do Projeto
              </h2>

              <div className="flex flex-col md:flex-row mt-4 items-start gap-7">
                <div className="flex items-start gap-4 bg-zinc-800 border border-zinc-700 p-7 rounded-md">
                  <div className="p-2 bg-violet-500 rounded-md">
                    <AwardIcon className="size-6 text-zinc-50 " />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-zinc-50 text-xl">
                      Soluções para <br /> comunidades portuárias
                    </h2>
                    <p className="text-zinc-300 text-justify">
                      Os participantes da maratona são desafiados a criar
                      soluções que abordem as necessidades reais das comunidades
                      portuárias, como educação, saúde, segurança e inclusão
                      digital.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-zinc-800 border border-zinc-700 p-7 rounded-md">
                  <div className="p-2 bg-violet-500 rounded-md">
                    <UsersRoundIcon className="size-6 text-zinc-50" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-zinc-50 text-xl">
                      Empoderamento e <br /> transformação
                    </h2>
                    <p className="text-zinc-300 text-justify">
                      A maratona promove a transformação social ao capacitar os
                      moradores dessas comunidades, tornando-os resolvedores que
                      contribuem para o desenvolvimento local.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-zinc-800 border border-zinc-700 p-7 rounded-md">
                  <div className="p-2 bg-violet-500 rounded-md">
                    <TicketCheckIcon className="size-6 text-zinc-50" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-zinc-50 text-xl">
                      Parcerias com <br /> empresas
                    </h2>
                    <p className="text-zinc-300 text-justify">
                      Empresas do setor portuário e logístico participam como
                      incentivadoras, mantenedoras e impulsionadoras dos
                      projetos, apoiando as melhores ideias e integrando
                      resolvedores qualificados em seus quadros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA + Seja um Mentor ou Patrocinador – Junte-se ao AmiGU Resolv */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Tire suas dúvidas conosco!
            </h1>
            <p className="text-zinc-300">
              Esclareça suas dúvidas com nossa equipe!
            </p>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Entrar em contato
          </Link>
        </div>
      </section>

      {/* Seção de como funcionará a maratona */}
      <section className="py-10 md:py-20 border-zinc-800 border-y-2 bg-background2 bg-cover bg-center bg-fixed bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-between gap-5">
          <h2 className="text-2xl w-full md:w-auto sm:text-3xl md:text-center md:text-4xl font-semibold text-zinc-50">
            Como funcionará a maratona
          </h2>

          <p className="max-w-2xl text-justify md:text-center">
          Saiba todos os detalhes da maratona: descubra como será o formato, etapas, desafios e como você pode participar para alcançar o melhor desempenho nessa jornada incrível!
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

      {/* Seção de mentora no AmiGU */}
      <section className="w-full space-y-5 bg-zinc-900 md:py-20 py-10 bg-background bg-center bg-cover bg-no-repeat">
        <div className="w-full max-w-7xl mx-auto px-4 flex gap-16 items-start">
          <div className="w-full bg-zinc-900 border-4 border-zinc-800 p-7 rounded-lg flex flex-col items-start gap-2 hover:scale-[.98] transition-all">
            <QuoteIcon className="text-violet-500 fill-violet-500 size-8" />

            <p className="text-zinc-300 text-lg text-justify md:text-left">
            Participar da Maratona Um Porto para o Futuro foi uma experiência incrível. Desenvolvi uma solução que foi adotada pela minha própria comunidade, e isso abriu as portas para minha carreira.
            </p>

            <h2 className="text-zinc-500 text-lg">
              - Lucas, vencedor da maratona
            </h2>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 flex gap-16 items-start">
          <div className="w-full bg-zinc-900 border-4 border-zinc-800 p-7 rounded-lg flex flex-col items-start gap-2 hover:scale-[.98] transition-all">
            <span className="uppercase text-violet-600">
              Engrenagem de transformação
            </span>

            <h2 className="text-2xl md:text-3xl text-zinc-50 mt-1 tracking-tight">
              Como eles se conectam
            </h2>

            <p className="text-zinc-300 text-lg text-justify md:text-left">
              A Maratona Um Porto para o Futuro é o ponto de partida para a
              identificação de problemas e necessidades das comunidades
              portuárias. As soluções desenvolvidas são aplicadas diretamente
              nas vidas dessas pessoas, que, por sua vez, podem ser impactadas
              pelo AmiGU Resolv e pelo Raíces Digitales, fechando o ciclo de
              transformação promovido pelo Instituto AmiGU.
            </p>


          </div>
        </div>
      </section>

      {/* Seção CTA + Participe da próxima maratona */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Participe da próxima maratona – Inscreva-se Agora
            </h1>
            <p className="text-zinc-300">
            Participe da próxima maratona – Garanta sua vaga agora!
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

      <section
        ref={refRaicesDigitales}
        className="bg-zinc-900 py-10 md:pt-20 border-zinc-800 border-y-2 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6 overflow-hidden">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => handleLanguageChange("BR")}
              disabled={language === "BR"}
              className={`${language === "BR" ? "bg-violet-500 hover:bg-violet-900 disabled:opacity-100" : "bg-violet-900 hover:bg-violet-500 opacity-60"} text-white flex items-center gap-2`}
            >
              <img
                src="/flags/brazil-flag.svg"
                alt="Brasil"
                className="w-6 h-6"
              />
              Brasil
            </Button>
            <Button
              onClick={() => handleLanguageChange("ES")}
              disabled={language === "ES"}
              className={`${language === "ES" ? "bg-violet-500 hover:bg-violet-900 disabled:opacity-100" : "bg-violet-900 hover:bg-violet-500 opacity-90"} text-white flex items-center gap-2`}
            >
              <img
                src="/flags/spain-flag.svg"
                alt="Espanha"
                className="w-6 h-6"
              />
              Espanha
            </Button>
          </div>

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
              <span className="text-violet-500 text-xl">Raíces Digitales</span>
              <h2 className="text-lg md:text-3xl text-white font-semibold mt-2 text-center md:max-w-3xl">
                {contentRaicesDigitaless[language].title}
              </h2>

              <p className="mt-5 text-justify text-zinc-300 md:text-center max-w-4xl">
                {contentRaicesDigitaless[language].description}
              </p>

              <div className="flex flex-col lg:flex-row items-start justify-between mt-20 w-full gap-10">
                <div className="flex-1 flex flex-col items-start justify-start gap-5">
                  <div className="border-b-2 border-zinc-700 pb-5 w-full">
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

                  <div className="border-b-2 border-zinc-700 pb-5 w-full">
                    <h2 className="text-xl font-semibold text-white">
                      {contentRaicesDigitaless[language].sectionTitles.section2}
                    </h2>
                    <p className="text-zinc-300 text-justify md:text-left">
                      {
                        contentRaicesDigitaless[language].sectionDescriptions
                          .section2
                      }
                    </p>
                  </div>

                  <div className="border-b-2 border-zinc-700 pb-5 w-full">
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

                <div className="flex-1 w-full md:mt-10 lg:mt-0 overflow-hidden rounded-lg">
                  <img
                    alt="Imagem"
                    src="/porto-para-futuro.jpeg"
                    className="aspect-auto object-cover rounded-lg border-4 border-zinc-800 z-10 w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testemunho com Animação */}
          <AnimatePresence mode="wait">
            <motion.div
              key={language + "-testimonial"}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full flex gap-16 items-start">
                <div className="w-full bg-zinc-900 border-4 border-zinc-800 p-7 rounded-lg flex flex-col items-start gap-2 hover:scale-[.98] transition-all">
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
              key={language + "-transformation"}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full flex gap-16 items-start">
                <div className="w-full bg-violet-600 border-4 border-zinc-800 p-7 rounded-lg flex flex-col items-start gap-2 hover:scale-[.98] transition-all">
                  <span className="uppercase text-violet-200">
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
            key={language + "-cta"}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="bg-violet-600 mt-10 md:mt-20"
          >
            {/* Seção CTA + Participe da próxima maratona */}
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
              <div>
                <h1 className="text-xl md:text-2xl text-zinc-50">
                  {contentRaicesDigitaless[language].cta.ctaTitle}
                </h1>
                <p className="text-zinc-300">
                  {contentRaicesDigitaless[language].cta.ctaDescription}
                </p>
              </div>

              <Button
                title="Clique para saber como se inscrever"
                className="mt-3 md:mt-0 w-full md:w-auto bg-transparent border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
              >
                <CheckCheck className="size-4 mr-2" />
                {contentRaicesDigitaless[language].cta.ctaButtonText}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
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
