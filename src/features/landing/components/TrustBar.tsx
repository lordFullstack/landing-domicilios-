import { Reveal } from './Reveal'

const ITEMS = ['Pedidos fáciles', 'Restaurantes locales', 'Seguimiento de pedidos', 'Experiencia rápida']

export const TrustBar = () => (
  <section className="bg-white border-y border-gray-100">
    <div className="max-w-6xl mx-auto px-5 py-6 flex flex-wrap justify-center gap-x-10 gap-y-3">
      {ITEMS.map((item, i) => (
        <Reveal key={item} delay={i * 80} className="text-sm font-medium text-gray-500">
          {item}
        </Reveal>
      ))}
    </div>
  </section>
)
