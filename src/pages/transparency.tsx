/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button'
import { ArrowRight, Heart } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function Transparency() {
  const { hash } = useLocation()
  const refBanner: any = useRef()

  useEffect(() => {
    if (hash === '') {
      window.scroll({
        top: refBanner.current.offsetTop - 100,
        behavior: 'smooth',
      })
    }
  }, [])

  return (
    <main>
      {/* Seção de banner */}
      <section
        ref={refBanner}
        className="py-10 px-4 h-[40rem] md:h-[45rem] bg-hero-banner-transparency bg-no-repeat bg-cover pt-24"
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
            <span className="border-4 border-violet-700 text-white px-4 rounded-full py-1 text-sm md:text-md flex items-center">
              <Heart className="size-4 mr-2 fill-white" />
              Transparência
            </span>

            <h1 className="text-xl text-center md:text-5xl font-semibold text-white mt-3">
              Nossa missão, <br /> Nossa transparência
            </h1>

            <p className="text-md md:text-lg text-zinc-300 mt-2 max-w-3xl text-center">
              Transparência e responsabilidade são pilares do Instituto AmiGU.
              Como uma OSCIP, temos o compromisso de mostrar como cada real
              investido é utilizado para criar impacto social e transformar
              vidas. Confira nossos relatórios anuais e auditorias para ver como
              fazemos isso acontecer.
            </p>
          </div>
        </div>
      </section>

      {/* Seção CTA + Nossa transparencia */}
      <section className="bg-gradient-to-r from-violet-500 to-blue-400">
        <div className="max-w-7xl mx-auto px-4 flex gap-2 flex-row items-center justify-center py-6">
          <img
            src="/rocket-logo.png"
            alt="foguete logo amigu"
            className="w-8"
          />
          <h1 className="text-lg md:text-xl text-zinc-50">
            Nossa transparência
          </h1>
          <ArrowRight className="size-5" />
        </div>
      </section>

      <section className="bg-zinc-800 border-zinc-700 py-10 md:py-20 border-b-2 bg-background7 bg-center bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-10">
          <div className="space-y-2">
            <h2 className="text-2xl w-full md:w-auto sm:text-3xl md:text-center md:text-4xl font-semibold text-zinc-50">
              Relatórios
            </h2>
            <p className="text-justify md:text-center text-zinc-300 max-w-4xl">
              Nossos relatórios apresentão de forma clara e objetiva os projetos
              e iniciativas realizadas ao longo dos anos, mostrando como
              avançamos em nossa missão de capacitar jovens a se tornarem{' '}
              <span className="uppercase text-violet-500">Resolvedores</span>.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button className="w-52 text-base bg-gradient-to-r from-violet-500 to-blue-400 text-white hover:brightness-90">
              Relatórios 2023
            </Button>
            <Button className="w-52 text-base bg-gradient-to-r from-violet-500 to-blue-400 text-white hover:brightness-90">
              Relatório 2021
            </Button>
            <Button className="w-52 text-base bg-gradient-to-r from-violet-500 to-blue-400 text-white hover:brightness-90">
              Relatório 2022
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
