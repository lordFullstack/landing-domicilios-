import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/components/Button'
import { ROUTES } from '@/config/constants'
import { Reveal } from './Reveal'

export const FinalCTA = () => {
  const navigate = useNavigate()

  return (
    <section className="bg-primary">
      <div className="max-w-6xl mx-auto px-5 py-20 text-center">
        <Reveal>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white">
            Riohacha pide diferente.
          </h2>
          <p className="mt-3 text-white/85 max-w-lg mx-auto">
            Y nosotros estamos construyendo una nueva forma de entregar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" variant="secondary" onClick={() => navigate(ROUTES.CLIENT_HOME)}>
              Pedir ahora
            </Button>
            <button
              onClick={() => navigate('/register?role=restaurant')}
              className="font-display font-semibold rounded-full transition-all duration-200 px-6 py-3 text-lg border-2 border-white text-white hover:bg-white/10 active:scale-[0.98]"
            >
              Registra tu restaurante
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
