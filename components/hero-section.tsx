import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-amber-600/10" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Acompanhe e fiscalize a natureza em{' '}
            <span className="text-green-600">tempo real</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Visualize queimadas, desmatamento e mudanças no uso do solo com dados abertos e mapas interativos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              <Link href="/mapa" className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Ver Mapa</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
              <Link href="#sobre">
                Saiba Mais
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20">🌳</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-20">🔥</div>
      <div className="absolute top-40 right-20 text-5xl opacity-20">🌱</div>
    </section>
  )
}
