import { router } from './@config/lib/router'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme-provider'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
