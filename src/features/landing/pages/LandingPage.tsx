import { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { TrustBar } from '../components/TrustBar'
import { ProblemSection } from '../components/ProblemSection'
import { HowItWorks } from '../components/HowItWorks'
import { RestaurantSection } from '../components/RestaurantSection'
import { DeliverySection } from '../components/DeliverySection'
import { Ecosystem } from '../components/Ecosystem'
import { Technology } from '../components/Technology'
import { FinalCTA } from '../components/FinalCTA'
import { Footer } from '../components/Footer'

const TITLE = 'Domicilios Riohacha | Pide, vende y entrega'
const DESCRIPTION =
  'Domicilios Riohacha conecta clientes, restaurantes y domiciliarios. Pide comida, registra tu restaurante o empieza a repartir hoy.'

const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
  let tag = document.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export const LandingPage = () => {
  useEffect(() => {
    const prevTitle = document.title
    document.title = TITLE

    setMeta('description', DESCRIPTION)
    setMeta('og:title', TITLE, 'property')
    setMeta('og:description', DESCRIPTION, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', TITLE)
    setMeta('twitter:description', DESCRIPTION)

    return () => {
      document.title = prevTitle
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <HowItWorks />
        <RestaurantSection />
        <DeliverySection />
        <Ecosystem />
        <Technology />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
