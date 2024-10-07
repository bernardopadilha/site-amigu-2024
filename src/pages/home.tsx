/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Building,
  CheckCheck,
  DollarSign,
  Facebook,
  Heart,
  Info,
  Instagram,
  Link2,
  Linkedin,
  Phone,
  QuoteIcon,
  Send,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef } from "react";

interface ProjectsCarouselProps {
  title: string;
  description: string;
  buttonText: string;
}

export function Home() {
  const { hash } = useLocation();
  const navigate = useNavigate();

  const projectsCarousel: ProjectsCarouselProps[] = [
    {
      title: "AmiGU Resolv",
      description:
        "Capacitando a próxima geração de líderes digitais. Participe como mentor ou jovem talento e veja seu impacto florescer.",
      buttonText: "Saiba mais",
    },
    {
      title: "Maratona um PPF",
      description:
        "Transformando a logística portuária com inovação e inclusão digital. Junte-se à maratona e crie soluções que impactam.",
      buttonText: "Participe agora",
    },
    {
      title: "Raíces Digitales",
      description:
        "Empoderando mulheres empreendedoras e herdeiros de negócios tradicionais para o futuro digital. Descubra como participar.",
      buttonText: "Explore o projeto",
    },
  ];

  const refBanner: any = useRef();
  const refContact: any = useRef();

  useEffect(() => {
    if (hash === "") {
      window.scroll({
        top: refBanner.current.offsetTop - 100,
        behavior: "smooth",
      });
    }

    if (hash === "#contato") {
      window.scroll({
        top: refContact.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }, [hash]);



  return (
    <main>
      {/* Seção de banner */}
      <section
        ref={refBanner}
        className="py-10 px-4 h-[40rem] md:h-[45rem] bg-hero-banner bg-no-repeat bg-center bg-cover pt-24"
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
            <span className="bg-violet-600 border-4 border-violet-700 text-white px-4 rounded-full animate-bounce py-1 text-sm md:text-md flex items-center">
              <Heart className="size-4 mr-2 fill-white" />
              Faça parte da transformação
            </span>

            <h1 className="text-3xl text-center md:text-5xl font-semibold text-white mt-3">
              Transforme <br /> o futuro Conosco{" "}
            </h1>

            <p className="text-md md:text-lg text-zinc-300 mt-2 max-w-xl text-center">
              No Instituto AmiGU, cada ação sua é uma alavanca de mudança.
              Junte-se a nós para capacitar comunidades, impulsionar inovações e
              criar oportunidades que impactam vidas.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de CTA + Apoio de transformação */}
      <section className="bg-zinc-900 border-zinc-800 border-b-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">
          <div className="relative -top-10 w-full flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-full hover:scale-[.97] transition-all flex flex-col items-start justify-center px-5 py-8 rounded-xl bg-zinc-900 border-4 border-zinc-800 backdrop-blur-lg">
              <div className="bg-zinc-800 p-3 rounded-full">
                <Building className="size-4" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-300 mt-3">
                Empresas
              </h2>
              <p className="text-zinc-500">
                Seja uma Mantenedora e Construa Impacto
              </p>
            </div>

            <div className="w-full hover:scale-[.97] transition-all flex flex-col items-start justify-center px-5 py-8  rounded-xl  bg-violet-600 border-4 border-zinc-800 backdrop-blur-lg">
              <div className="bg-violet-700 text-white p-3 rounded-full">
                <DollarSign className="size-4" />
              </div>
              <h2 className="text-xl font-semibold text-white mt-3">
                Mentores e Voluntários
              </h2>
              <p className="text-zinc-300">
                Renove Sua Carreira – Seja um Mentor
              </p>
            </div>

            <div className="w-full hover:scale-[.97] transition-all flex flex-col items-start justify-center px-5 py-8 rounded-xl bg-zinc-900 border-4 border-zinc-800 backdrop-blur-lg">
              <div className="bg-zinc-800 p-3 rounded-full">
                <Users className="size-4" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-300 mt-3">
                Jovens Talentos
              </h2>
              <p className="text-zinc-500">Participe de Nossas Maratonas</p>
            </div>
          </div>

          <div className="relative -top-10 flex flex-col md:flex-row items-center justify-between gap-14">
            <div className="flex-1 flex flex-col items-start gap-4">
              <div>
                <span className="text-violet-500 text-sm font-semibold uppercase ">
                  Transformando Vidas
                </span>
                <h2 className="text-3xl text-zinc-50 mt-1 tracking-tight">
                  Seu apoio transforma tudo <br /> e vidas nas comunidades do
                  Brasil
                </h2>
              </div>
              <p className="text-zinc-400 text-lg text-justify">
                No Instituto AmiGU, acreditamos que o verdadeiro impacto começa
                com uma pequena faísca – e essa faísca pode vir de você. Desde
                2019, capacitamos mais de 88 mil pessoas, conectamos 6 mil
                famílias a novas oportunidades e realizamos mais de 40 eventos
                que transformaram vidas e comunidades inteiras. E com sua ajuda,
                podemos ir ainda mais longe.
              </p>
            </div>

            <div className="flex-1 flex flex-col items-start gap-4">
              <div className="bg-zinc-800 p-4 md:scale-[.95] rounded-lg flex flex-col items-start gap-2 hover:scale-[100%] transition-all">
                <QuoteIcon className="text-violet-500 fill-violet-500" />

                <p className="text-zinc-300">
                  Ser uma mantenedora do Instituto AmiGU nos permitiu ver de
                  perto como nossos recursos estão transformando realidades.
                </p>

                <h2 className="text-zinc-500">- Executivo da Resolv</h2>
              </div>

              <div className="bg-zinc-800 p-4 rounded-lg flex flex-col items-start gap-2 hover:scale-[.98] transition-all">
                <QuoteIcon className="text-violet-500 fill-violet-500" />

                <p className="text-zinc-300">
                  Participar do Porto Hack Santos mudou minha vida. Agora, tenho
                  um portfólio real e oportunidades de emprego que nunca
                  imaginei.
                </p>

                <h2 className="text-zinc-500">
                  - Lucas, Competidor da Maratona
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de CTA para saber como fazer parte da comunidade */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Veja como você pode <br /> fazer parte dessa transformação
            </h1>
            <p className="text-zinc-300">
              Garanta sua vaga e transforme seu futuro hoje mesmo!
            </p>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=1340420740"
            target="_blank"
            title="Clique aqui!"
            className="mt-3 md:mt-0 w-full md:w-auto flex items-center px-3 py-2 transition-all border-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md border-emerald-800"
          >
            <CheckCheck className="size-4 mr-2" />
            Como fazer parte
          </Link>
        </div>
      </section>

      {/* Seção de projetos que criam oportunidades reais */}
      <section className="py-10 md:py-20 bg-zinc-900 bg-background bg-center bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="flex flex-col items-center justify-center gap-4 md:text-center">
            <h2 className="text-left w-full md:text-center text-2xl md:text-3xl font-semibold text-zinc-50">
              Projetos que <br /> criam oportunidades reais
            </h2>
            <p className="max-w-3xl text-zinc-300 text-justify md:text-center">
              Nossos projetos são mais do que iniciativas – são portas para um
              futuro melhor. Desde capacitar jovens em situação de
              vulnerabilidade até transformar negócios tradicionais em
              empreendimentos digitais, cada projeto do Instituto AmiGU é
              desenhado para gerar impacto sustentável e duradouro.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full mt-10"
          >
            <CarouselContent className="border-none">
              {projectsCarousel.map((carousel, i) => (
                <CarouselItem
                  key={carousel.title}
                  className="md:basis-1/2 lg:basis-1/3 border-none rounded-md overflow-hidden"
                >
                  <Card className="border-0 rounded-lg overflow-hidden">
                    <CardContent className="bg-zinc-800 flex items-center px-6 py-10 border-4 border-zinc-700">
                      <div className="flex flex-col gap-6">
                        <span className="bg-violet-600 border-4 border-violet-800 font-bold text-white size-10 flex items-center justify-center rounded-full">
                          {i + 1}
                        </span>

                        <h2 className="text-3xl text-zinc-50 font-semibold">
                          {carousel.title}
                        </h2>

                        <p className="text-zinc-300">{carousel.description}</p>

                        <Button className="w-full text-white bg-violet-600 hover:bg-violet-500 transition-all">
                          {" "}
                          <Link2 className="size-4 mr-2" />{" "}
                          {carousel.buttonText}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Seção CTA de junte-se à comunidade Sou AmiGU */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Junte-se à comunidade sou AmiGU
            </h1>
            <p className="text-zinc-300">
              Junte-se à comunidade Sou AmiGU e faça parte dessa transformação!
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

      {/* Seção de desafie-se, conecte-se e impacte */}
      <section className="py-10 md:py-20 bg-zinc-900 bg-background bg-center bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          <div className="flex-1 md:sticky md:top-[350px]">
            <span className="uppercase text-violet-500 font-medium text-md md:text-xl">
              Participe conosco
            </span>

            <h2 className="text-xl md:text-4xl font-semibold text-zinc-50">
              Desafie-se, Conecte-se, Impacte
            </h2>

            <p className="text-justify md:text-left mt-4 text-zinc-300 font-light leading-relaxed text-md sm:text-lg">
              Ser parte da Comunidade Sou AmiGU é estar conectado a uma rede de
              pessoas e organizações que compartilham o desejo de transformar
              vidas e comunidades. Se você é um jovem talento, um mentor
              experiente ou uma instituição buscando fazer a diferença, aqui
              você encontra um espaço para crescer, inovar e causar impacto.
            </p>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-5 md:gap-10 md:mt-10">
              <div className="md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                <div className="bg-violet-600 border-4 border-violet-800 font-bold text-white size-10 flex items-center justify-center rounded-full">
                  1
                </div>

                <h2 className="text-zinc-300 leading-relaxed text-md sm:text-lg mt-3">
                  Participe de nossas maratonas e crie um portfólio que fará
                  você ser visto pelo mercado de outra forma.
                </h2>
              </div>

              <div className="md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                <div className="bg-violet-600 border-4 border-violet-800 font-bold text-white size-10 flex items-center justify-center rounded-full">
                  2
                </div>

                <h2 className="text-zinc-300 leading-relaxed text-md sm:text-lg mt-3">
                  Renove sua carreira, compartilhe seu conhecimento e receba de
                  volta reconhecimento, oportunidades e renda.
                </h2>
              </div>

              <div className="md:ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                <div className="bg-violet-600 border-4 border-violet-800 font-bold text-white size-10 flex items-center justify-center rounded-full">
                  3
                </div>

                <h2 className="text-zinc-300 leading-relaxed text-md sm:text-lg mt-3">
                  Inscreva sua associação em nossos projetos e maratonas e leve
                  a transformação para sua comunidade.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de CTA veja nossos relatórios */}
      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6">
          <div>
            <h1 className="text-xl md:text-2xl text-zinc-50">
              Faça parte da comunidade
            </h1>
            <p className="text-zinc-300">
              Conecte-se com quem transforma o futuro!.
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

      {/* Seção nossa missão, nossa transparência */}
      <section className="bg-zinc-900 py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-zinc-900 gap-10 md:gap-20 border-2 border-zinc-800 p-5 sm:p-10 rounded-md flex flex-col md:flex-row items-center">
            <div className="flex-1 w-full">
              <img
                alt="Imagem"
                src="/portoHack-03.JPG"
                className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-semibold text-zinc-50">
                Nossa missão, <br /> Nossa transparência
              </h2>

              <p className="mt-4 md:text-left text-justify text-zinc-300 font-light leading-relaxed text-sm sm:text-md md:text-lg">
                Transparência e responsabilidade são pilares do Instituto AmiGU.
                Como uma OSCIP, temos o compromisso de mostrar como cada real
                investido é utilizado para criar impacto social e transformar
                vidas. Confira nossos relatórios anuais e auditorias para ver
                como fazemos isso acontecer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de contato */}
      <section
        ref={refContact}
        className="py-10 border-t-2 border-t-zinc-800 bg-zinc-900 bg-background bg-center bg-cover bg-no-repeat"
      >
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
                type="button"
          
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
