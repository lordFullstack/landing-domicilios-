import { Card } from '@/shared/components/Card'
import { Reveal } from './Reveal'

const GROUPS = [
  { title: 'Cliente', text: 'Encuentra lo que quieres sin complicaciones.', emoji: '🛍️' },
  { title: 'Restaurante', text: 'Administra tus pedidos desde un solo lugar.', emoji: '🍽️' },
  { title: 'Domiciliario', text: 'Organiza tus entregas de manera sencilla.', emoji: '🛵' },
]

export const ProblemSection = () => (
  <section className="max-w-6xl mx-auto px-5 py-20">
    <Reveal>
      <h2 className="font-display font-bold text-3xl sm:text-4xl text-secondary text-center max-w-2xl mx-auto">
        Pedir debería ser fácil. Vender también.
      </h2>
    </Reveal>
    <div className="mt-12 grid sm:grid-cols-3 gap-5">
      {GROUPS.map((g, i) => (
        <Reveal key={g.title} delay={i * 100}>
          <Card className="h-full text-center py-8">
            <span className="text-3xl">{g.emoji}</span>
            <h3 className="font-display font-bold text-secondary mt-3 mb-2">{g.title}</h3>
            <p className="text-sm text-gray-500">{g.text}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  </section>
)
