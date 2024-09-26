import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { ChevronsUpIcon } from "lucide-react";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <main>
        <Header />

        <Outlet />

        <Button 
          size="icon" 
          className="fixed bottom-5 right-5" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronsUpIcon />
        </Button>
      </main>
  )
}