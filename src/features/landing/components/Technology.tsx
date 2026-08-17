import { Reveal } from './Reveal'

const STACK = ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Supabase']

export const Technology = () => (
  <section className="bg-surface py-16">
    <div className="max-w-6xl mx-auto px-5 text-center">
      <Reveal>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-secondary">
          Tecnología detrás de cada pedido.
        </h2>
        <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">
          Rápida, escalable y segura — pensada para crecer con Riohacha.
        </p>
      </Reveal>
      <Reveal delay={100} className="mt-8 flex flex-wrap justify-center gap-3">
        {STACK.map((t) => (
          <span
            key={t}
            className="px-4 py-2 rounded-full bg-white border border-gray-100 text-sm font-medium text-gray-600 shadow-card"
          >
            {t}
          </span>
        ))}
      </Reveal>
    </div>
  </section>
)
