import { createBrowserRouter } from 'react-router-dom'

import { Home } from '@/pages/home'
import { About } from '@/pages/about'
import { Marathons } from '@/pages/marathons'
import { IAForGood } from '@/pages/ia-for-good'
import { Mentor } from '@/pages/how-to-support/mentor'
import { Company } from '@/pages/how-to-support/company'
import { DefaultLayout } from '@/_layout/default-layout'
import { Institutonal } from '@/pages/how-to-support/institutional'
import { AmiGUResolv } from '@/pages/projects/amigu-resolv'
import { PortoParaFuturo } from '@/pages/projects/porto-para-futuro'
import { RaicesDigitales } from '@/pages/projects/raices-digitales'
import { Transparency } from '@/pages/transparency'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <About /> },
      { path: '/projetos/amigu-resolv', element: <AmiGUResolv /> },
      {
        path: '/projetos/maratona-um-porto-para-o-futuro',
        element: <PortoParaFuturo />,
      },
      { path: '/projetos/raices-digitales', element: <RaicesDigitales /> },
      { path: '/como-apoiar/empresas', element: <Company /> },
      { path: '/como-apoiar/voluntarios-e-mentores', element: <Mentor /> },
      {
        path: '/como-apoiar/parceiros-institucionais',
        element: <Institutonal />,
      },
      { path: '/maratonas', element: <Marathons /> },
      { path: '/ia-for-good', element: <IAForGood /> },
      { path: '/transparencia', element: <Transparency /> },
    ],
  },
])
