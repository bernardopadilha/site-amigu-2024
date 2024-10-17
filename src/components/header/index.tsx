import { ChevronDown, Phone } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '../ui/button'
import { HeaderMobile } from './header-mobile'
import { NavigationMenu } from '../ui/navigation-menu'
import { generateRoutes } from '@/@config/utils/generate-routes'

export function Header() {
  const navigate = useNavigate()

  return (
    <header className="w-full z-20 fixed border-b-2 bg-zinc-800/80 backdrop-blur-sm border-y border-zinc-700">
      <div className="flex h-24 items-center justify-between max-w-7xl px-4 mx-auto">
        <Link to="/" title="Clique para ir a tela inicial">
          <img
            src="/logo-amigu-branco.png"
            width={140}
            height={60}
            alt="logo"
          />
        </Link>

        <div className="lg:block text-zinc-300 hidden">
          <NavigationMenu className="flex items-center gap-4 relative">
            {generateRoutes.map((route, i) => {
              if (route.subRoutes) {
                return (
                  <div key={route.title} className="relative group">
                    <Button
                      type="button"
                      className={`p-0 bg-transparent hover:bg-transparent text-zinc-300 hover:text-zinc-400 transition-all`}
                    >
                      {route.title}

                      {route.subRoutes && (
                        <ChevronDown className="size-4 ml-2" />
                      )}
                    </Button>

                    <div className="absolute group-hover:opacity-100 group-hover:visible invisible opacity-0 left-0 transition-all top-[2.6rem] bg-zinc-950 rounded-md p-5 whitespace-nowrap">
                      {route.subRoutes.map((subRoute, i) => {
                        return (
                          <a
                            key={i}
                            href={subRoute.url}
                            className="text-zinc-400 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {subRoute.title}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                )
              } else {
                return (
                  <Link
                    key={i}
                    to={route.url}
                    className="flex items-center gap-2 hover:text-violet-600 transition-colors"
                  >
                    {route.title}
                  </Link>
                )
              }
            })}
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button
            size="default"
            onClick={() => navigate('/#contato')}
            className="text-white w-36 hidden md:flex text-base bg-gradient-to-r from-blue-400 to-violet-500 border-b-2 border-white hover:bg-violet-600 hover:brightness-75 transition-all p-4"
          >
            <Phone className="size-4 mr-3" />
            Contato
          </Button>

          <HeaderMobile />
        </div>
      </div>
    </header>
  )
}
