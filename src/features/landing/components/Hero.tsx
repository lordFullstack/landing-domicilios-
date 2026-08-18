import { useNavigate } from 'react-router-dom'
import { CheckCircle2, ChefHat, Bike as BikeIcon, PackageCheck } from 'lucide-react'
import { Button } from '@/shared/components/Button'
import { ROUTES } from '@/config/constants'
import { Reveal } from './Reveal'

const STEPS = [
  { icon: CheckCircle2, label: 'Pedido confirmado', color: 'text-success' },
  { icon: ChefHat, label: 'Restaurante preparando', color: 'text-warning' },
  { icon: BikeIcon, label: 'Domiciliario en camino', color: 'text-primary' },
  { icon: PackageCheck, label: 'Pedido entregado', color: 'text-success' },
]

export const Hero = () => {
  const navigate = useNavigate()

  return (
    <section id="inicio" className="relative overflow-hidden bg-surface scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 pt-14 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-secondary leading-[1.05] tracking-tight">
            Todo lo que quieres.
            <br />
            <span className="text-primary">A domicilio.</span>
          </h1>
          <p className="mt-5 text-lg text-gray-500 max-w-md">
            Descubre restaurantes, haz tu pedido y recíbelo donde estés. Una plataforma creada
            para conectar clientes, negocios y domiciliarios en Riohacha.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button size="lg" onClick={() => navigate(ROUTES.CLIENT_HOME)}>
              Pedir ahora
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/register?role=restaurant')}>
              Quiero registrar mi negocio
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative h-[420px] sm:h-[480px]">
          {/* Teléfono principal */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[240px] sm:w-[260px] bg-white rounded-[2.5rem] border border-gray-100 shadow-card-hover p-3">
            <div className="rounded-[2rem] bg-white overflow-hidden">
              <div className="bg-primary/5 px-4 pt-5 pb-4">
                <p className="text-[10px] text-gray-400 mb-1">Riohacha, La Guajira</p>
                <p className="font-display font-bold text-secondary text-sm">Hola 👋</p>
              </div>
              <div className="p-4 flex flex-col gap-2">
                {STEPS.map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
                    <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
                    <span className="text-[11px] font-medium text-gray-600">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card flotante: pedido */}
          <div className="hidden sm:flex absolute -left-2 top-10 bg-white rounded-2xl shadow-card-hover px-4 py-3 items-center gap-2 animate-[float_6s_ease-in-out_infinite] motion-reduce:animate-none">
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-lg">
              🍔
            </span>
            <div>
              <p className="text-xs font-semibold text-secondary">Pedido en camino</p>
              <p className="text-[10px] text-gray-400">25-35 min</p>
            </div>
          </div>

          {/* Card flotante: restaurante */}
          <div className="hidden sm:flex absolute -right-2 bottom-16 bg-white rounded-2xl shadow-card-hover px-4 py-3 items-center gap-2 animate-[float_7s_ease-in-out_infinite_1s] motion-reduce:animate-none">
            <ChefHat className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs font-semibold text-secondary">3 pedidos nuevos</p>
              <p className="text-[10px] text-gray-400">Panel del restaurante</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
