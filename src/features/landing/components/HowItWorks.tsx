import { Reveal } from './Reveal'

const STEPS = [
  { n: '01', title: 'Elige', text: 'Explora restaurantes y productos.' },
  { n: '02', title: 'Pide', text: 'Agrega tus productos y confirma.' },
  { n: '03', title: 'Recibe', text: 'Tu pedido llega hasta donde estés.' },
]

export const HowItWorks = () => (
  <section id="como-funciona" className="bg-surface py-20 scroll-mt-16">
    <div className="max-w-6xl mx-auto px-5">
      <Reveal>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-secondary text-center">
          Así funciona
        </h2>
      </Reveal>
      <div className="mt-14 relative grid sm:grid-cols-3 gap-10">
        <div className="hidden sm:block absolute top-6 left-[16%] right-[16%] h-px bg-gray-200" />
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 120} className="relative text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary text-white font-display font-bold flex items-center justify-center relative z-10">
              {s.n}
            </div>
            <h3 className="font-display font-bold text-secondary mt-4 mb-1">{s.title}</h3>
            <p className="text-sm text-gray-500">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)
