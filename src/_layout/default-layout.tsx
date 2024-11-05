import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export function DefaultLayout() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}
