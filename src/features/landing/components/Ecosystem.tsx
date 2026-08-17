import { Bike, ChefHat, User } from 'lucide-react'
import { Reveal } from './Reveal'

const NODES = [
  { icon: User, label: 'Cliente' },
  { icon: ChefHat, label: 'Restaurante' },
  { icon: Bike, label: 'Domiciliario' },
]

export const Ecosystem = () => (
  <section className="max-w-6xl mx-auto px-5 py-20">
    <Reveal>
      <h2 className="font-display font-bold text-3xl sm:text-4xl text-secondary text-center">
        Una plataforma que conecta todo el proceso.
      </h2>
    </Reveal>

    <Reveal delay={120} className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0">
      {NODES.map((node, i) => (
        <div key={node.label} className="flex items-center gap-6 sm:gap-0">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-card flex items-center justify-center">
              <node.icon className="w-7 h-7 text-primary" />
            </div>
            <span className="text-xs font-medium text-gray-500">{node.label}</span>
          </div>
          {i < NODES.length - 1 && <div className="hidden sm:block w-16 h-px bg-gray-200 mx-4" />}
        </div>
      ))}
    </Reveal>

    <Reveal delay={220} className="mt-8 flex justify-center">
      <div className="px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-display font-bold">
        Domicilios Riohacha
      </div>
    </Reveal>
  </section>
)
