
import { DefaultLayout } from '@/_layout/default-layout'
import { Home } from '@/pages/home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {path: "/", element: <Home />},
    ]
  },
])