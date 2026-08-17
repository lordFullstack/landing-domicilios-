import { Bike } from 'lucide-react'
import { ROUTES } from '@/config/constants'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Restaurantes', href: '#restaurantes' },
  { label: 'Domiciliarios', href: '#domiciliarios' },
]

// Solo se listan enlaces a rutas/páginas que realmente existen en el proyecto.
export const Footer = () => (
  <footer className="bg-secondary text-gray-400 py-14">
    <div className="max-w-6xl mx-auto px-5">
      <div className="flex flex-col sm:flex-row justify-between gap-10">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Bike className="w-4 h-4 text-white" />
            </span>
            <span className="font-display font-bold text-white">Domicilios Riohacha</span>
          </div>
          <p className="text-sm">
            Tu comida favorita, en minutos. Conectamos clientes, restaurantes y domiciliarios en
            Riohacha.
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <p className="text-white text-sm font-semibold mb-3">Navegación</p>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white text-sm font-semibold mb-3">Cuenta</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={ROUTES.LOGIN} className="hover:text-white transition-colors">
                  Iniciar sesión
                </a>
              </li>
              <li>
                <a href={ROUTES.REGISTER} className="hover:text-white transition-colors">
                  Crear cuenta
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-white/10 text-xs">
        © {new Date().getFullYear()} Domicilios Riohacha. Todos los derechos reservados.
      </div>
    </div>
  </footer>
)
