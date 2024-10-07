
import { DefaultLayout } from '@/_layout/default-layout'
import { About } from '@/pages/about'
import { Home } from '@/pages/home'
import { HowToSupport } from '@/pages/how-to-support'
import { Marathons } from '@/pages/marathons'
import { Projects } from '@/pages/projects'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {path: "/", element: <Home />},
      {path: "/sobre", element: <About />},
      {path: "/projetos", element: <Projects />},
      {path: "/como-apoiar", element: <HowToSupport />},
      {path: "/maratonas", element: <Marathons />},
    ]
  },
])