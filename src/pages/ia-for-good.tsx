/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button'
import { ArrowRight, Link2Icon, MousePointerClick } from 'lucide-react'

export function IAForGood() {
  return (
    <main>
      <section className="flex flex-col items-center gap-32 justify-center bg-background4 bg-fixed pb-20 pt-28 md:pt-48">
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

            <Button className="bg-gradient-to-r from-violet-500 to-blue-400 hover:bg-violet-500 hover:brightness-90 text-white mt-5 flex items-center gap-2">
              <MousePointerClick className="size-4" />
              Conhecer IA para o bem
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

        <div className="max-w-7xl px-8 mx-auto gap-10 flex flex-col items-center justify-center w-full h-full">
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
                className="border border-zinc-700 rounded-md"
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
                src="/portoHack-113.jpg"
                alt=""
                className="border border-zinc-700 rounded-md"
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
                src="/portoHack-49.jpg"
                alt=""
                className="border border-zinc-700 rounded-md"
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

      <section className="flex flex-col items-center gap-32 justify-center bg-background5 bg-fixed py-20">
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
          <div className="mt-10 flex flex-col gap-10 ">
            {/* Code in Pizza in 013 */}
            <div className="flex items-center gap-8">
              <div className="items-start gap-3 whitespace-nowrap hidden md:flex">
                <div className="shrink-0 w-8 h-8 bg-violet-500 relative rounded-full block after:content-[''] after:w-[2px] after:h-[330px] after:bg-violet-500 after:block after:absolute after:left-1/2 after:top-8 after:-translate-x-1/2" />
                <div className="flex flex-col text-white w-32">
                  <span className="font-semibold">2017</span>
                  <span>Santos - SP</span>
                </div>
              </div>

              <div className="w-full flex items-center justify-between gap-4 text-white bg-zinc-700 p-4 rounded-md border-4 border-zinc-600">
                <div className="flex flex-col flex-1">
                  <span className="text-violet-500 block md:hidden">
                    2017, Santos - SP
                  </span>
                  <h1 className="text-xl md:text-xl font-semibold mt-2 md:mt-0">
                    Code in Pizza in 013
                  </h1>
                  <p>
                    Inovação e Tecnologia Unem Mais de 200 Pessoas em Palestras
                    sobre IA, Blockchain e Robótica
                  </p>

                  <Button className="w-fit bg-violet-500 hover:bg-violet-500 hover:brightness-90 text-white mt-4 flex items-center gap-2">
                    <MousePointerClick className="size-4" />
                    Veja como foi o evento
                  </Button>
                </div>
                <div className="flex-1 w-full">
                  <img
                    alt="Imagem"
                    src="/imagens-de-evento/code-in-pizza.jpg"
                    className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
                  />
                </div>
              </div>
            </div>
            {/* Palestra sobre Machine Learning no Museu Pelé */}
            <div className="flex items-center gap-8">
              <div className="items-start gap-3 whitespace-nowrap hidden md:flex">
                <div className="shrink-0 w-8 h-8 bg-violet-500 relative rounded-full block after:content-[''] after:w-[2px] after:h-[330px] after:bg-violet-500 after:block after:absolute after:left-1/2 after:top-8 after:-translate-x-1/2" />
                <div className="flex flex-col text-white w-32">
                  <span className="font-semibold">2018</span>
                  <span>Santos - SP</span>
                </div>
              </div>
              <div className="w-full flex items-center justify-between gap-4 text-white bg-zinc-700 p-4 rounded-md border-4 border-zinc-600">
                <div className="flex-1 flex flex-col">
                  <span className="text-violet-500 text-sm block md:hidden">
                    2018, Santos - SP
                  </span>
                  <h1 className="text-xl md:text-xl font-semibold mt-2 md:mt-0">
                    Palestra sobre Machine Learning no Museu Pelé
                  </h1>

                  <p>
                    Machine Learning em Foco: Mais de 100 Pessoas Participam de
                    Palestra com Especialistas no Museu Pelé
                  </p>

                  <Button className="w-fit bg-violet-500 hover:bg-violet-500 hover:brightness-90 text-white mt-4 flex items-center gap-2">
                    <MousePointerClick className="size-4" />
                    Veja como foi o evento
                  </Button>
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
            {/* Camps 4.0 - O Aprendiz do Futuro */}
            <div className="flex items-center gap-8">
              <div className="items-start gap-3 whitespace-nowrap hidden md:flex">
                <div className="shrink-0 w-8 h-8 bg-violet-500 relative rounded-full block after:content-[''] after:w-[2px] after:h-[330px] after:bg-violet-500 after:block after:absolute after:left-1/2 after:top-8 after:-translate-x-1/2" />
                <div className="flex flex-col text-white w-32">
                  <span className="font-semibold">2019</span>
                  <span>Santos - SP</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white bg-zinc-700 py-4 px-5 rounded-md border-4 border-zinc-600 w-full">
                <div className="flex-1 flex flex-col">
                  <span className="text-violet-500 text-sm block md:hidden">
                    2019, Santos - SP
                  </span>
                  <h1 className="text-xl md:text-xl font-semibold mt-2 md:mt-0">
                    Camps 4.0 - O Aprendiz do Futuro
                  </h1>

                  <p>
                    Futuro do Trabalho: Evento "Camps 4.0" Reúne 1000 Jovens
                    para Explorar o Impacto da IA nas Profissões
                  </p>

                  <Button className="w-fit bg-violet-500 hover:bg-violet-500 hover:brightness-90 text-white mt-4 flex items-center gap-2">
                    <MousePointerClick className="size-4" />
                    Veja como foi o evento
                  </Button>
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
            {/* Laboratório de Inteligência Artificial na UNISANTOSi */}
            <div className="flex items-center gap-8">
              <div className="items-start gap-3 whitespace-nowrap hidden md:flex">
                <div className="shrink-0 w-8 h-8 bg-violet-500 relative rounded-full block after:content-[''] after:w-[2px] after:h-[330px] after:bg-violet-500 after:block after:absolute after:left-1/2 after:top-8 after:-translate-x-1/2" />
                <div className="flex flex-col text-white w-32">
                  <span className="font-semibold">2019</span>
                  <span>Santos - SP</span>
                </div>
              </div>
              <div className="w-full flex items-center justify-between gap-4 text-white bg-zinc-700 p-4 rounded-md border-4 border-zinc-600">
                <div className="flex-1 flex flex-col">
                  <span className="text-violet-500 text-sm md:hidden">
                    2019, Santos - SP
                  </span>
                  <h1 className="text-xl md:text-xl font-semibold mt-2 md:mt-0">
                    Laboratório de Inteligência Artificial na UNISANTOS
                  </h1>
                  <p>
                    Instituto AmiGU Inaugura Primeiro Laboratório de IA em
                    Universidade Privada de SP, em Parceria com IBM e Data H
                  </p>

                  <Button className="w-fit bg-violet-500 hover:bg-violet-500 hover:brightness-90 text-white mt-4 flex items-center gap-2">
                    <MousePointerClick className="size-4" />
                    Veja como foi o evento
                  </Button>
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
            {/* Watson on the Beach */}
            <div className="flex items-center gap-8">
              <div className="items-start gap-3 whitespace-nowrap hidden md:flex">
                <div className="shrink-0 w-8 h-8 bg-violet-500 relative rounded-full block after:content-[''] after:w-[2px] after:h-[330px] after:bg-violet-500 after:block after:absolute after:left-1/2 after:top-8 after:-translate-x-1/2" />
                <div className="flex flex-col text-white w-32">
                  <span className="font-semibold">2019</span>
                  <span>Santos - SP</span>
                </div>
              </div>
              <div className="w-full flex items-center justify-between gap-4 text-white bg-zinc-700 p-4 rounded-md border-4 border-zinc-600">
                <div className="flex-1 flex flex-col">
                  <span className="text-violet-500 text-sm block md:hidden">
                    2019, Santos - SP
                  </span>
                  <h1 className="text-xl md:text-xl font-semibold mt-2 md:mt-0">
                    Watson on the Beach
                  </h1>
                  <p>
                    Evento Reúne Mais de 200 Pessoas em Santos para Apresentação
                    de Robô Emocional e Palestras sobre Carreiras Tecnológicas
                  </p>

                  <Button className="w-fit bg-violet-500 hover:bg-violet-500 hover:brightness-90 text-white mt-4 flex items-center gap-2">
                    <MousePointerClick className="size-4" />
                    Veja como foi o evento
                  </Button>
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
            {/* Hackerspace Zero Treze Innovation Space */}
            <div className="flex items-center gap-8">
              <div className="items-start gap-3 whitespace-nowrap hidden md:flex">
                <div className="shrink-0 w-8 h-8 bg-violet-500 relative rounded-full block after:content-[''] after:w-[2px] after:h-[330px] after:bg-violet-500 after:block after:absolute after:left-1/2 after:top-8 after:-translate-x-1/2" />
                <div className="flex flex-col text-white w-32">
                  <span className="font-semibold">2019</span>
                  <span>Santos - SP</span>
                </div>
              </div>
              <div className="w-full flex items-center justify-between gap-4 text-white bg-zinc-700 p-4 rounded-md border-4 border-zinc-600">
                <div className="flex-1 flex flex-col">
                  <span className="text-violet-500 text-sm block md:hidden">
                    2019, Santos - SP
                  </span>
                  <h1 className="text-xl md:text-xl font-semibold mt-2 md:mt-0">
                    Hackerspace Zero Treze Innovation Space
                  </h1>
                  <p>
                    Primeiro Hub de Inovação da Baixada Santista Impulsiona
                    Colaboração e Desenvolvimento Tecnológico
                  </p>

                  <Button className="w-fit bg-violet-500 hover:bg-violet-500 hover:brightness-90 text-white mt-4 flex items-center gap-2">
                    <MousePointerClick className="size-4" />
                    Veja como foi o evento
                  </Button>
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
            {/* Programa Business4Devs */}
            <div className="flex items-center gap-8">
              <div className="items-start gap-3 whitespace-nowrap hidden md:flex">
                <div className="shrink-0 w-8 h-8 bg-violet-500 relative rounded-full block after:content-[''] after:w-[2px] after:h-[330px] after:bg-violet-500 after:block after:absolute after:left-1/2 after:top-8 after:-translate-x-1/2" />
                <div className="flex flex-col text-white w-32">
                  <span className="font-semibold">2019</span>
                  <span>Santos - SP</span>
                </div>
              </div>
              <div className="w-full flex items-center justify-between gap-4 text-white bg-zinc-700 p-4 rounded-md border-4 border-zinc-600">
                <div className="flex-1 flex- flex-col">
                  <span className="text-violet-500 text-sm block md:hidden">
                    2019, Santos - SP
                  </span>
                  <h1 className="text-xl md:text-xl font-semibold mt-2 md:mt-0">
                    Programa Business4Devs
                  </h1>
                  <p>
                    Programa do Instituto AmiGU Impulsiona Carreiras e Capacita
                    Mais de 88.000 Alunos com Curso de Node.js
                  </p>

                  <Button className="bg-violet-500 hover:bg-violet-500 hover:brightness-90 text-white mt-4 flex items-center gap-2">
                    <MousePointerClick className="size-4" />
                    Veja como foi o evento
                  </Button>
                </div>

                <div className="flex-1 w-full">
                  <img
                    alt="Imagem"
                    src="/imagens-de-evento/code-in-pizza.jpg"
                    className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
                  />
                </div>
              </div>
            </div>
            {/* Apoio às Comunidades de Tecnologia */}
            <div className="flex items-center gap-8">
              <div className="items-start gap-3 whitespace-nowrap hidden md:flex">
                <div className="shrink-0 w-8 h-8 bg-violet-500 relative rounded-full" />
                <div className="flex flex-col text-white w-32">
                  <span className="font-semibold">2019</span>
                  <span>Santos - SP</span>
                </div>
              </div>
              <div className="w-full flex items-center justify-between gap-4 text-white bg-zinc-700 p-4 rounded-md border-4 border-zinc-600">
                <div className="flex-1 flex flex-col">
                  <span className="text-violet-500 text-sm block md:hidden">
                    2019, Santos - SP
                  </span>
                  <h1 className="text-xl md:text-xl font-semibold mt-2 md:mt-0">
                    Apoio às Comunidades de Tecnologia
                  </h1>
                  <p>
                    Apoio Contínuo a Comunidades Tecnológicas Impacta Mais de
                    80.000 Jovens com Educação e Oportunidades Profissionais{' '}
                  </p>

                  <Button className="w-fit bg-violet-500 hover:bg-violet-500 hover:brightness-90 text-white mt-4 flex items-center gap-2">
                    <MousePointerClick className="size-4" />
                    Veja como foi o evento
                  </Button>
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
          </div>
        </div>
      </section>
    </main>
  )
}
