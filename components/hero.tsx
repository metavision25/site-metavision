"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                <span className="text-primary">Salgados</span> e <span className="text-secondary">Doces</span>{" "}
                Irresistíveis
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Feitos com amor e ingredientes selecionados para tornar seus momentos especiais ainda mais saborosos.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Mais de 500 clientes satisfeitos</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pedidos">
                <Button size="lg" className="group pulse-glow">
                  Fazer Pedido Agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#produtos">
                <Button variant="outline" size="lg">
                  Ver Cardápio
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card rounded-lg p-4 hover-scale float-animation">
                  <img
                    src="/placeholder-rq7id.png"
                    alt="Salgados"
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <h3 className="font-semibold text-card-foreground">Salgados</h3>
                  <p className="text-sm text-muted-foreground">Coxinhas, pastéis e muito mais</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-card rounded-lg p-4 hover-scale float-animation" style={{ animationDelay: "1s" }}>
                  <img
                    src="/placeholder-vwhjy.png"
                    alt="Doces"
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <h3 className="font-semibold text-card-foreground">Doces</h3>
                  <p className="text-sm text-muted-foreground">Brigadeiros, beijinhos e tortas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
