import { useLocation } from "react-router-dom";
import { FacebookIcon, InstagramIcon, MenuIcon,MoveRightIcon } from "lucide-react";

import { Button } from "./ui/button";

import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"


export function Header() {
  const { pathname } = useLocation()

  return (
    <header className="w-full fixed border-b h-24 bg-zinc-900/50 border-zinc-600 backdrop-blur-sm">
      <div className="flex h-full items-center justify-between max-w-6xl px-8  mx-auto">
        <a href="/"><img src="/logo-amigu-branco.png" width={140} height={60} /></a>
       
        <div className="lg:flex text-zinc-50 items-center justify-center hidden">
          <a href="/" className={`${pathname === '/' && 'text-violet-500'} text-base font-medium p-2 rounded-lg hover:text-purple-500 hover:bg-zinc-400/40`}>Home</a>
          <a href="/sobre-nos" className={`${pathname === 'Home' && 'text-violet-500'} text-base font-medium p-2 rounded-lg hover:text-purple-500 hover:bg-zinc-400/40`}>Sobre Nós</a>
          <a href="/como-apoiar" className={`${pathname === 'Home' && 'text-violet-500'} text-base font-medium p-2 rounded-lg hover:text-purple-500 hover:bg-zinc-400/40`}>Como Apoiar</a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-medium bg-transparent p-2 hover:bg-transparent hover:text-purple-500 focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-zinc-400/40">
                  Institucional
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-zinc-900">
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[300px]">
                    <ListItem href="/docs" title="I.A para o bem">
                      I.A para o bem
                    </ListItem>
                    <ListItem href="/docs/installation" title="Maratonas">
                      Maratonas
                    </ListItem>
                    <ListItem href="/docs/installation" title="Projetos">
                      Projetos
                    </ListItem>
                    <ListItem href="/docs/installation" title="Transparência">
                      Transparência
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-medium bg-transparent p-2 hover:bg-transparent hover:text-purple-500 focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-zinc-400/40">
                  Comunidade e História
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-zinc-900">
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[300px]">
                    <ListItem href="/docs" title="Comunidade">
                      Comunidade Sou AmiGU
                    </ListItem>
                    <ListItem href="/docs/installation" title="História">
                      História do Instituto
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button className="sm:flex text-white items-center gap-2 text-base bg-violet-500 hover:bg-violet-500/80 hidden p-4">
            Contato
            <MoveRightIcon />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" className="bg-violet-500 hover:bg-violet-500/80 lg:hidden">
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start justify-between bg-zinc-950 border-zinc-600">
              <div className="w-full">
                <SheetHeader>
                  <a href="/"><img src="/logo-amigu-branco.png" width={140} height={60} /></a>
                </SheetHeader>

                <div className="w-full flex flex-col items-start gap-2 mt-10">
                  <a href="/" className={`${pathname === '/' && 'text-violet-500'} w-full text-lg font-medium p-2 rounded-lg hover:bg-zinc-900`}>Home</a>
                  <a href="/sobre-nos" className={`${pathname === 'Home' && 'text-violet-500'} w-full text-lg font-medium p-2 rounded-lg hover:bg-zinc-900`}>Sobre Nós</a>
                  <a href="/como-apoiar" className={`${pathname === 'Home' && 'text-violet-500'} w-full text-lg font-medium p-2 rounded-lg hover:bg-zinc-900`}>Como Apoiar</a>
                </div>
              </div>

              <SheetFooter className="w-full flex sm:flex-col items-start">
                <h2 className="text-xl font-semibold">Redes Sociais</h2>

                <div className="flex items-center gap-2 mt-5">
                  <a href="" className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-all rounded-full flex items-center justify-center"><FacebookIcon className="size-5" /></a>
                  <a href="" className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-all rounded-full flex items-center justify-center"><InstagramIcon className="size-5" /></a>
                </div>

                <p className="mt-5">Copyright © 2024 AmiGu. Todos os direitos reservados.</p>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}