import { useNavigate } from 'react-router-dom'
import { TrendingUp, ClipboardCheck, Store } from 'lucide-react'
import { Button } from '@/shared/components/Button'
import { Reveal } from './Reveal'

const CARDS = [
  { icon: TrendingUp, title: 'Más pedidos', text: 'Llega a nuevos clientes.' },
  { icon: ClipboardCheck, title: 'Más control', text: 'Administra tus órdenes desde un solo lugar.' },
  { icon: Store, title: 'Más presencia', text: 'Haz que tu negocio forme parte del ecosistema.' },
]

// Mockup basado en el panel real del restaurante (mismos tokens de color y layout
// que RestaurantDashboard), no una interfaz inventada.
export const RestaurantSection = () => {
  const navigate = useNavigate()

  return (
    <section id="restaurantes" className="max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center scroll-mt-16">
      <Reveal className="order-2 md:order-1">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-card-hover p-5 max-w-sm mx-auto md:mx-0">
          <p className="font-display font-bold text-sm text-secondary mb-3">🍕 La Guajira Pizza</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-2xl text-center py-4">
              <p className="text-2xl font-display font-bold text-warning">4</p>
              <p className="text-gray-400 text-xs mt-1">Pendientes</p>
            </div>
            <div className="bg-gray-50 rounded-2xl text-center py-4">
              <p className="text-2xl font-display font-bold text-primary">7</p>
              <p className="text-gray-400 text-xs mt-1">Activas</p>
            </div>
            <div className="bg-gray-50 rounded-2xl text-center py-4">
              <p className="text-2xl font-display font-bold text-success">18</p>
              <p className="text-gray-400 text-xs mt-1">Entregadas hoy</p>
            </div>
            <div className="bg-gray-50 rounded-2xl text-center py-4 flex flex-col justify-center">
              <p className="text-sm font-display font-bold text-primary">Menú activo</p>
              <p className="text-gray-400 text-xs mt-1">Gestión en vivo</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100} className="order-1 md:order-2">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-secondary">
          Tu restaurante merece algo más que WhatsApp.
        </h2>
        <p className="mt-4 text-gray-500">
          Recibe pedidos, administra tus productos y controla tu operación desde una plataforma
          diseñada para restaurantes.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          {CARDS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-primary" />
              </span>
              <div>
                <p className="font-display font-semibold text-sm text-secondary">{title}</p>
                <p className="text-xs text-gray-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <Button size="lg" className="mt-7" onClick={() => navigate('/register?role=restaurant')}>
          Quiero vender en Domicilios
        </Button>
      </Reveal>
    </section>
  )
}
