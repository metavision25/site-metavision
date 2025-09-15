"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Plus } from "lucide-react"
import { useState } from "react"

const salgados = [
  {
    id: 1,
    name: "Coxinha de Frango",
    description: "Coxinha tradicional com frango desfiado e temperos especiais",
    price: "R$ 3,50",
    image: "/placeholder-vzlqn.png",
  },
  {
    id: 2,
    name: "Pastel de Queijo",
    description: "Pastel crocante recheado com queijo derretido",
    price: "R$ 4,00",
    image: "/placeholder-r8m0z.png",
  },
  {
    id: 3,
    name: "Risole de Camarão",
    description: "Risole cremoso com camarão e catupiry",
    price: "R$ 5,00",
    image: "/placeholder-rhqvw.png",
  },
  {
    id: 4,
    name: "Enroladinho de Salsicha",
    description: "Massa folhada com salsicha e queijo",
    price: "R$ 3,00",
    image: "/placeholder-bghp8.png",
  },
]

const doces = [
  {
    id: 5,
    name: "Brigadeiro Gourmet",
    description: "Brigadeiro tradicional com chocolate belga",
    price: "R$ 2,50",
    image: "/brigadeiro-gourmet-chocolate.jpg",
  },
  {
    id: 6,
    name: "Beijinho de Coco",
    description: "Doce de leite condensado com coco ralado",
    price: "R$ 2,50",
    image: "/beijinho-coco-doce-brasileiro.jpg",
  },
  {
    id: 7,
    name: "Torta de Limão",
    description: "Torta cremosa com limão e merengue",
    price: "R$ 8,00",
    image: "/placeholder-6h240.png",
  },
  {
    id: 8,
    name: "Pudim de Leite",
    description: "Pudim caseiro com calda de caramelo",
    price: "R$ 6,00",
    image: "/placeholder-it15x.png",
  },
]

export function ProductsSection() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const ProductCard = ({ product }: { product: any }) => (
    <Card className="group hover-scale overflow-hidden">
      <div className="relative">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
          onClick={() => toggleFavorite(product.id)}
        >
          <Heart
            className={`h-4 w-4 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"}`}
          />
        </Button>
        <Badge className="absolute bottom-2 left-2 bg-primary text-primary-foreground">{product.price}</Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full group">
          <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform" />
          Adicionar ao Pedido
        </Button>
      </CardContent>
    </Card>
  )

  return (
    <section id="produtos" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nosso <span className="text-primary">Cardápio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra nossos salgados crocantes e doces irresistíveis, feitos com ingredientes frescos e muito carinho.
          </p>
        </div>

        {/* Salgados */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-primary">Salgados</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {salgados.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Doces */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-secondary">Doces</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doces.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
