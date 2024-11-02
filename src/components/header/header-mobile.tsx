/* eslint-disable react-hooks/exhaustive-deps */
import { ChevronDown, MenuIcon } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function HeaderMobile() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [hasToggleSheet, setHasToggleSheet] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const [howToSuportOpen, setHowToSuportOpen] = useState(false)

  useEffect(() => {
    if (pathname.startsWith('/projetos')) {
      setProjectsOpen(true)
    } else {
      setProjectsOpen(false)
    }

    if (pathname.startsWith('/como-apoiar')) {
      setHowToSuportOpen(true)
    } else {
      setHowToSuportOpen(false)
    }
  }, [pathname])

  return (
    <Sheet
      open={hasToggleSheet}
      onOpenChange={() => setHasToggleSheet(!hasToggleSheet)}
    >
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="bg-violet-500 hover:bg-violet-500/80 md:hidden text-white"
        >
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col items-start justify-between bg-zinc-950 border-zinc-600 ">
        <div className="w-full">
          <SheetHeader>
            <a href="/">
              <img
                src="/logo-amigu-branco.png"
                width={140}
                height={60}
                alt="logo"
              />
            </a>
          </SheetHeader>

          <div className="w-full flex flex-col items-start gap-2 mt-10">
            <Button
              onClick={() => {
                setHasToggleSheet(false)
                navigate('/')
              }}
              className={`${pathname === '/' ? 'text-violet-500 bg-zinc-900' : 'text-zinc-400 bg-transparent'} w-full text-lg font-medium justify-start p-2 rounded-lg hover:bg-zinc-900`}
            >
              Página inicial
            </Button>

            <Button
              onClick={() => {
                setHasToggleSheet(false)
                navigate('/sobre')
              }}
              className={`${pathname === '/sobre' ? 'text-violet-500 bg-zinc-900' : 'text-zinc-400 bg-transparent'} w-full text-lg font-medium justify-start p-2 rounded-lg hover:bg-zinc-900`}
            >
              Sobre nós
            </Button>

            <Button
              onClick={() => {
                setHasToggleSheet(false)
                navigate('/ia-for-good')
              }}
              className={`${pathname === '/ia-for-good' ? 'text-violet-500 bg-zinc-900' : 'text-zinc-400 bg-transparent'} w-full text-lg font-medium justify-start p-2 rounded-lg hover:bg-zinc-900`}
            >
              I.A para o bem
            </Button>

            <Button
              onClick={() => {
                setProjectsOpen(!projectsOpen)
              }}
              className="w-full text-lg text-zinc-400 font-medium justify-start p-2 bg-transparent rounded-lg hover:bg-zinc-900"
            >
              <span className="w-full flex items-center justify-between">
                Projetos
                <ChevronDown />
              </span>
            </Button>

            {projectsOpen && (
              <div className="w-full flex flex-col gap-2 items-end">
                <Button
                  onClick={() => {
                    setHasToggleSheet(false)
                    navigate('/projetos/amigu-resolv')
                  }}
                  className={`${pathname === '/projetos/amigu-resolv' ? 'text-violet-500 bg-zinc-900' : 'text-zinc-400 bg-transparent'} w-[90%] text-lg font-medium justify-start p-2 rounded-lg hover:bg-zinc-900`}
                >
                  AmiGU Resolv
                </Button>

                <Button
                  onClick={() => {
                    setHasToggleSheet(false)
                    navigate('/projetos/maratona-um-porto-para-o-futuro')
                  }}
                  className={`${pathname === '/projetos/maratona-um-porto-para-o-futuro' ? 'text-violet-500 bg-zinc-900' : 'text-zinc-400 bg-transparent'} w-[90%] text-lg font-medium justify-start p-2 rounded-lg hover:bg-zinc-900`}
                >
                  Maratona um porto para o futuro
                </Button>

                <Button
                  onClick={() => {
                    setHasToggleSheet(false)
                    navigate('/projetos/raices-digitales')
                  }}
                  className={`${pathname === '/projetos/raices-digitales' ? 'text-violet-500 bg-zinc-900' : 'text-zinc-400 bg-transparent'} w-[90%] text-lg font-medium justify-start p-2 rounded-lg hover:bg-zinc-900`}
                >
                  Raíces Digitales
                </Button>
              </div>
            )}

            <Button
              onClick={() => {
                setHowToSuportOpen(!howToSuportOpen)
              }}
              className="w-full text-lg text-zinc-400 font-medium justify-start p-2 bg-transparent rounded-lg hover:bg-zinc-900"
            >
              <span className="w-full flex items-center justify-between">
                Como apoiar
                <ChevronDown />
              </span>
            </Button>

            {howToSuportOpen && (
              <div className="w-full flex flex-col gap-2 items-end">
                <Button
                  onClick={() => {
                    setHasToggleSheet(false)
                    navigate('/como-apoiar/empresas')
                  }}
                  className={`${pathname === '/como-apoiar/empresas' ? 'text-violet-500 bg-zinc-900' : 'text-zinc-400 bg-transparent'} w-[90%] text-lg font-medium justify-start p-2 rounded-lg hover:bg-zinc-900`}
                >
                  Empresas
                </Button>

                <Button
                  onClick={() => {
                    setHasToggleSheet(false)
                    navigate('/como-apoiar/parceiros-institucionais')
                  }}
                  className={`${pathname === '/como-apoiar/parceiros-institucionais' ? 'text-violet-500 bg-zinc-900' : 'text-zinc-400 bg-transparent'} w-[90%] text-lg font-medium justify-start p-2 rounded-lg hover:bg-zinc-900`}
                >
                  Parceiros institucionais
                </Button>

                <Button
                  onClick={() => {
                    setHasToggleSheet(false)
                    navigate('/como-apoiar/voluntarios-e-mentores')
                  }}
                  className={`${pathname === '/como-apoiar/voluntarios-e-mentores' ? 'text-violet-500 bg-zinc-900' : 'text-zinc-400 bg-transparent'} w-[90%] text-lg font-medium justify-start p-2 rounded-lg hover:bg-zinc-900`}
                >
                  Voluntários e mentores
                </Button>
              </div>
            )}

            <Button
              onClick={() => {
                setHasToggleSheet(false)
                navigate('/maratonas')
              }}
              className={`${pathname === '/maratonas' ? 'text-violet-500 bg-zinc-900' : 'text-zinc-400 bg-transparent'} w-full text-lg font-medium justify-start p-2 rounded-lg hover:bg-zinc-900`}
            >
              Maratonas
            </Button>
          </div>
        </div>

        <SheetFooter>
          Copyright © {new Date().getFullYear()} AmiGU. Todos os direitos
          reservados.
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
