import { useNavigate } from 'react-router-dom'
import { MapPin, Package, Route } from 'lucide-react'
import { Reveal } from './Reveal'

const FEATURES = [
  { icon: Package, text: 'Pedidos disponibles' },
  { icon: Route, text: 'Estado de entrega' },
  { icon: MapPin, text: 'Gestión de pedidos' },
]

export const DeliverySection = () => {
  const navigate = useNavigate()

  return (
    <section id="domiciliarios" className="bg-secondary text-white py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <h2 className="font-display font-bold text-3xl sm:text-4xl">
            Tu próxima entrega empieza aquí.
          </h2>
          <p className="mt-4 text-gray-300 max-w-md">
            Un flujo sencillo para ver pedidos disponibles, aceptar entregas y llevar el control
            de cada una, desde tu celular.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {FEATURES.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </span>
                <span className="text-sm text-gray-200">{text}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate('/register?role=delivery')}
            className="mt-7 font-display font-semibold rounded-full transition-all duration-200 px-6 py-3 text-lg bg-primary text-white hover:bg-primary-dark active:scale-[0.98]"
          >
            Quiero ser domiciliario
          </button>
        </Reveal>

        <Reveal delay={120} className="mx-auto w-[220px] bg-white rounded-[2.5rem] p-3 shadow-card-hover">
          <div className="rounded-[2rem] overflow-hidden bg-gray-50">
            <div className="bg-secondary px-4 pt-5 pb-4">
              <p className="text-[10px] text-gray-300">Panel de domiciliario</p>
              <p className="font-display font-bold text-white text-sm">2 entregas activas</p>
            </div>
            <div className="p-3 flex flex-col gap-2">
              <div className="bg-white rounded-xl px-3 py-2 shadow-card">
                <p className="text-[11px] font-semibold text-secondary">Pedido #A82F</p>
                <p className="text-[10px] text-gray-400">En camino</p>
              </div>
              <div className="bg-white rounded-xl px-3 py-2 shadow-card">
                <p className="text-[11px] font-semibold text-secondary">Pedido #C11B</p>
                <p className="text-[10px] text-gray-400">Listo para recoger</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
