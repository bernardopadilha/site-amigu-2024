import { Badge } from "@/components/ui/badge";
import { MoveRightIcon } from "lucide-react";

export function SectionBanner() {
  return (
    <section className="h-[45rem]  bg-hero-banner bg-no-repeat bg-center bg-cover">
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mt-24">
          <span className="bg-violet-500 text-white px-4 rounded-md py-1">Conheça nossa transformação</span>

          <h1 className="text-6xl font-semibold text-white mt-10">Transforme o Futuro Conosco </h1>
          <p className="text-lg font-semibold text-white mt-2 max-w-2xl text-center">No Instituto AmiGU, cada ação sua é uma alavanca de mudança. Junte-se a nós para capacitar comunidades, impulsionar inovações e criar oportunidades que impactam vidas.</p>
        </div>
      </div>
    </section>
  )
}