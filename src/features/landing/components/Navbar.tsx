import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, X, Bike } from 'lucide-react'
import { Button } from '@/shared/components/Button'
import { ROUTES } from '@/config/constants'

const LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Restaurantes', href: '#restaurantes' },
  { label: 'Domiciliarios', href: '#domiciliarios' },
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const scrollTo = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('#inicio')} className="flex items-center gap-2 flex-shrink-0">
          <span className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <Bike className="w-5 h-5 text-white" />
          </span>
          <span className="font-display font-bold text-secondary hidden sm:block">
            Domicilios Riohacha
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-gray-600 hover:text-secondary transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigate('/register?role=restaurant')}>
            Registra tu negocio
          </Button>
          <Button variant="primary" size="sm" onClick={() => navigate(ROUTES.CLIENT_HOME)}>
            Pedir ahora
          </Button>
        </div>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="w-6 h-6 text-secondary" /> : <Menu className="w-6 h-6 text-secondary" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left text-sm font-medium text-gray-700"
            >
              {l.label}
            </button>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
            <Button variant="outline" onClick={() => navigate('/register?role=restaurant')}>
              Registra tu negocio
            </Button>
            <Button variant="primary" onClick={() => navigate(ROUTES.CLIENT_HOME)}>
              Pedir ahora
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
