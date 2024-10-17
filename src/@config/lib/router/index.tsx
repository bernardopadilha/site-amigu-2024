import { DefaultLayout } from '@/_layout/default-layout'
import { About } from '@/pages/about'
import { Home } from '@/pages/home'
import { HowToSupport } from '@/pages/how-to-support'
import { Company } from '@/pages/how-to-support/company'
import { Institutonal } from '@/pages/how-to-support/institutional'
import { Mentor } from '@/pages/how-to-support/mentor'
import { IAForGood } from '@/pages/ia-for-good'
import { Marathons } from '@/pages/marathons'
import { Projects } from '@/pages/projects'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <About /> },
      { path: '/projetos', element: <Projects /> },
      { path: '/como-apoiar', element: <HowToSupport /> },
      { path: '/como-apoiar/empresas', element: <Company /> },
      { path: '/como-apoiar/voluntarios-e-mentores', element: <Mentor /> },
      {
        path: '/como-apoiar/parceiros-institucionais',
        element: <Institutonal />,
      },
      { path: '/maratonas', element: <Marathons /> },
      { path: '/ia-for-good', element: <IAForGood /> },
    ],
  },
])
