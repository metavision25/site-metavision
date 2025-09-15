import { Card, CardContent } from "@/components/ui/card"
import { Clock, Award, Heart, Users } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Clock,
      title: "Sempre Frescos",
      description: "Todos os nossos produtos são feitos diariamente com ingredientes frescos",
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Utilizamos apenas ingredientes selecionados e receitas tradicionais",
    },
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada produto é preparado com carinho e dedicação pela nossa equipe",
    },
    {
      icon: Users,
      title: "Tradição Familiar",
      description: "Receitas passadas de geração em geração há mais de 20 anos",
    },
  ]

  return (
    <section id="sobre" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Sobre a <span className="text-primary">Sabores & Cia</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Há mais de duas décadas, nossa família se dedica a criar os melhores salgados e doces da região. Começamos
              pequenos, mas nosso compromisso com a qualidade e o sabor nos trouxe até aqui.
            </p>
            <p className="text-lg text-muted-foreground">
              Cada receita é um tesouro familiar, aperfeiçoada ao longo dos anos e preparada com os melhores
              ingredientes. Nosso objetivo é levar alegria e sabor para seus momentos especiais.
            </p>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Produtos Diferentes</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
