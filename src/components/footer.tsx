import { Instagram, Facebook, Linkedin, Phone } from 'lucide-react'
import { format } from 'date-fns'
import { Link, useNavigate } from 'react-router-dom'

export function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="bg-zinc-800">
      <div className="bg-zinc-700 w-full">
        <div className="max-w-7xl mx-auto px-4 py-6 lg:py-4 w-full">
          <div className="flex flex-col lg:flex-row lg:items-center gap-9">
            <img
              src="/logo-amigu-branco.png"
              alt="Logo Instituto Amigu"
              width={120}
              height={80}
            />

            <p className="text-zinc-200 text-sm lg:text-md font-medium text-justify md:text-left">
              Nossa missão é impulsionar o sucesso de nossos clientes,
              construindo parcerias sólidas e entregando projetos que realmente
              fazem a diferença. Junte-se a nós na jornada de transformação
              digital e descubra o que é possível quando a velocidade, a
              qualidade e a inovação se unem
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-4">
        <div className="text-center lg:items-left lg:text-left">
          <h1 className="text-xl text-zinc-200 font-semibold">Menu</h1>

          <div className="flex flex-col gap-2 items-center lg:items-start mt-4 text-zinc-200">
            <button
              type="button"
              title="Início"
              onClick={() => navigate('/')}
              className="hover:ml-2 transition-all"
            >
              Página inicial
            </button>
            <button
              type="button"
              title="Sobre"
              onClick={() => navigate('/sobre')}
              className="hover:ml-2 transition-all"
            >
              Sobre Nós
            </button>
            <button
              type="button"
              title="Serviços"
              onClick={() => navigate('/sobre#iniciativas-de-ia-para-o-bem')}
              className="hover:ml-2 transition-all"
            >
              I.A para o bem
            </button>
            <button
              type="button"
              title="Contato"
              onClick={() => navigate('/projetos')}
              className="hover:ml-2 transition-all"
            >
              Projetos
            </button>
          </div>
        </div>

        <div className="text-center lg:items-left lg:text-left">
          <h1 className="text-xl text-zinc-200 font-semibold">Menu</h1>

          <div className="flex flex-col gap-2 items-center lg:items-start mt-4 text-zinc-200">
            <button
              type="button"
              title="Início"
              onClick={() => navigate('/como-apoiar')}
              className="hover:ml-2 transition-all"
            >
              Como apoiar
            </button>
            <button
              type="button"
              title="Sobre"
              onClick={() => navigate('/como-apoiar#relatorios-anuais')}
              className="hover:ml-2 transition-all"
            >
              Transparência
            </button>
            <button
              type="button"
              title="Serviços"
              onClick={() => navigate('/maratonas')}
              className="hover:ml-2 transition-all"
            >
              Maratonas
            </button>
            <button
              type="button"
              title="Contato"
              onClick={() => navigate('/#contato')}
              className="hover:ml-2 transition-all"
            >
              Contato
            </button>
          </div>
        </div>

        <div className="text-center lg:items-left lg:text-left">
          <h1 className="text-xl text-zinc-200 font-semibold">Social</h1>

          <div className="flex flex-col gap-2 items-center lg:items-start mt-4 text-zinc-200">
            <Link
              to="https://www.instagram.com/institutoamigu/"
              target="_blank"
              title="Clique para ir ao nosso Instagram"
              className="flex items-center gap-2 hover:ml-2 transition-all"
            >
              <Instagram className="size-4" />
              Instagram
            </Link>

            <Link
              to="https://www.facebook.com/institutoamigu"
              target="_blank"
              title="Clique para ir ao nosso Facebook"
              className="flex items-center gap-2 hover:ml-2 transition-all"
            >
              <Facebook className="size-4" />
              Facebook
            </Link>

            <Link
              to="https://www.linkedin.com/company/institutoamigu/posts/?feedView=all"
              target="_blank"
              title="Clique para ir ao nosso Linkedin"
              className="flex items-center gap-2 hover:ml-2 transition-all"
            >
              <Linkedin className="size-4" />
              Linkedin
            </Link>

            <Link
              to="https://api.whatsapp.com/send?phone=1340420740"
              target="_blank"
              title="Clique para ir ao nosso WhatsApp"
              className="flex items-center gap-2 hover:ml-2 transition-all"
            >
              <Phone className="size-4" />
              WhatsApp
            </Link>
          </div>
        </div>

        <div className="text-center lg:items-left lg:text-left">
          <h1 className="text-xl text-zinc-200 font-semibold">Contato</h1>
          <div className="flex flex-col gap-2 items-center lg:items-start mt-4 text-zinc-200">
            <Link
              to="mailto:marco@institutoamigu.org.br"
              target="_blank"
              title="Clique para ir ao nosso E-mail"
              className="hover:ml-2 transition-all"
            >
              E-mail
            </Link>
            <Link
              to="https://api.whatsapp.com/send?phone=1340420740"
              target="_blank"
              title="Clique para ir ao nosso WhatsApp"
              className="hover:ml-2 transition-all"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-violet-500 to-blue-400 w-full py-4 flex flex-col lg:flex-row justify-center items-center text-white text-xs border-t border-t-zinc-700">
        @{format(new Date(), 'yyyy')} | Todos os direitos reservados Instituto
        AmiGu
      </div>
    </footer>
  )
}
