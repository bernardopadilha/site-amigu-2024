export function Section2() {
  return (
    <section>
      <div className="pb-14 max-w-7xl mx-auto flex items-center justify-center gap-4 relative -top-10">
        <div className="max-w-[350px] min-h-[130px] hover:scale-[99%] transition-all flex flex-col items-start justify-center gap-10 p-5 rounded-xl bg-white backdrop-blur-lg">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-zinc-800">Empresas</h2>
            <p className="text-zinc-500">Seja uma Mantenedora e  Construa Impacto</p>
          </div>
        </div>

        <div className="max-w-[350px] min-h-[130px] hover:scale-[99%] transition-all flex flex-col items-start justify-center gap-10 p-5 rounded-xl bg-gradient-to-r from-violet-500 via-violet-900 to-purple-500">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-zinc-800">Mentores e Voluntários</h2>
            <p className="text-zinc-500">Renove Sua Carreira – Seja um Mentor</p>
          </div>
        </div>

        <div className="max-w-[350px] min-h-[130px] hover:scale-[99%] transition-all flex flex-col items-start justify-center gap-10 p-5 rounded-xl bg-white backdrop-blur-lg">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-zinc-800">Jovens Talentos</h2>
            <p className="text-zinc-500">Participe de Nossas Maratonas – Mostre Seu Potencial</p>
          </div>
        </div>
      </div>
    </section>
  )
}