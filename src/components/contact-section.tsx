import { Link } from 'react-router-dom'
import { Button } from './ui/button'

export function ContactSection() {
  return (
    <section className="py-10 bg-zinc-900 bg-background bg-center bg-cover bg-no-repeat">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 md:gap-16">
        <div className="flex-1">
          <h1 className="md:mt-6 text-zinc-200 font-semibold text-3xl">
            Localização
          </h1>

          <p className="text-sm md:text-md mt-1 font-light text-zinc-300">
            Estamos localizado no endereço: <br /> Panorama Trade Center - R.
            Euclydes da Cunha, 11 - Sala 301 - Gonzaga, Santos - SP, 11065-100
          </p>

          <div className="relative">
            <img
              src="/guzinho-2.png"
              alt="escritório AmiGU"
              className="h-[450px] object-contain rounded-md mt-5 p-2"
            />

            <Button
              asChild
              className="mt-5 w-full bg-violet-500 hover:bg-violet-500/80 text-white"
            >
              <Link to="https://www.google.com/maps/place/Panorama+Trade+Center/@-23.9661018,-46.3371174,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce03100e33dbab:0x41d14fc3c8a34a8c!8m2!3d-23.9661018!4d-46.3345425!16s%2Fg%2F11c2ng2xg6?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D">
                Ir para o mapa
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="md:mt-6 text-zinc-200 font-semibold text-3xl">
            Contato
          </h1>
          <p className="text-sm sm:text-md mt-1 font-light text-zinc-300 mb-3">
            Agende agora uma reunião com nosso fundador Marco Riveiros
          </p>

          <div className="relative w-full pt-[85%] h-[800px] md:h-[560px]">
            <iframe
              src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2qiQaW2zSd14Tk7bDlvBB9L3t6aLHQUtUqa6cs0R5yZGjHJrpoCBMADbDHH3glHkyB2sWLQy9q"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: '2px solid #895bf3',
                borderRadius: '8px',
                backgroundColor: '#FFF',
              }}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
