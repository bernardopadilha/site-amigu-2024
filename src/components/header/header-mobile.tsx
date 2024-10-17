import { MenuIcon } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet'
import { useLocation, useNavigate } from 'react-router-dom'
import { generateRoutes } from '@/@config/utils/generate-routes'
import { useState } from 'react'

export function HeaderMobile() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [hasToggleSheet, setHasToggleSheet] = useState(false)

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
      <SheetContent className="flex flex-col items-start justify-between bg-zinc-950 border-zinc-600">
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
            {generateRoutes
              .filter((route) => route.title !== 'I.A para o bem')
              .filter((route) => route.title !== 'Transparência')
              .map((route, i) => {
                return (
                  <Button
                    key={i}
                    onClick={() => {
                      navigate(route.url)
                      setHasToggleSheet(false)
                    }}
                    className={`${pathname === route.url ? 'text-violet-500' : 'text-zinc-400'} w-full text-lg font-medium bg-transparent justify-start p-2 rounded-lg hover:bg-zinc-900`}
                  >
                    {route.title}
                  </Button>
                )
              })}
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
