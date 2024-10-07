import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Phone } from "lucide-react";

import { Button } from "../ui/button";
import { HeaderMobile } from "./header-mobile";
import { generateRoutes } from "@/@config/utils/generate-routes";
import {
  NavigationMenu,
} from "../ui/navigation-menu";

export function Header() {
  const navigate = useNavigate()

  return (
    <header className="w-full z-20 fixed border-b-2 bg-zinc-900/95 backdrop-blur-sm border-zinc-800">
      <div className="bg-violet-600 h-7 md:h-10">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="md:flex items-center gap-3 hidden">
            <span className="text-sm text-white">
            marco@institutoamigu.org.br


            </span>
            <span className="text-sm text-white border-l border-zinc-600 pl-3">
              +55 (13) 4042-0740
            </span>
          </div>
          <div className="hidden md:flex items-center justify-center gap-3">
            <button
              disabled
              type="button"
              title="Clique para alterar o idioma"
              className="border-2 border-zinc-300 rounded-full"
            >
              <img
                src="/flags/brazil-flag.svg"
                alt="Bandeira do Brasil"
                className="size-5"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-24 items-center justify-between max-w-7xl px-4 mx-auto">
        <Link to="/" title="Clique para ir a tela inicial">
          <img src="/logo-amigu-branco.png" width={140} height={60} />
        </Link>

        <div className="lg:block text-zinc-300 hidden">
          <NavigationMenu className="flex items-center gap-4 relative">
            {generateRoutes.map((route, i) => {
              if (route.subRoutes) {
                return (
                  <div className="relative group">
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
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                return (
                  <Link
                    key={i}
                    to={route.url}
                    className="flex items-center gap-2 hover:text-violet-600 transition-colors"
                  >
                    {route.title}
                  </Link>
                );
              }
            })}
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button onClick={() => navigate('/#contato')} className="text-white hidden md:flex text-base bg-violet-600 hover:bg-violet-600 hover:brightness-75 transition-all p-4">
            <Phone className="size-4 mr-3" />
            Contato
          </Button>

          <HeaderMobile />
        </div>
      </div>
    </header>
  );
}
