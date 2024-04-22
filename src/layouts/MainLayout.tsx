import { Outlet } from "react-router-dom"

import SiteHeader from "../components/SiteHeader"
import { TailwindIndicator } from "../components/TailwindIndicator"
import { ThemeProvider } from "../context/ThemeProvider"

function MainLayout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <TailwindIndicator />
    </ThemeProvider>
  )
}

export default MainLayout
