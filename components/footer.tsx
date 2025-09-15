import { ShoppingBag, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8" />
              <h3 className="text-2xl font-bold">Sabores & Cia</h3>
            </div>
            <p className="text-primary-foreground/80">
              Salgados e doces feitos com amor e tradição familiar há mais de 20 anos.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="#home" className="hover:text-secondary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#produtos" className="hover:text-secondary transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-secondary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-secondary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Salgados</li>
              <li>Doces</li>
              <li>Tortas</li>
              <li>Encomendas Especiais</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>(11) 99999-9999</li>
              <li>contato@saboresecia.com</li>
              <li>Rua das Delícias, 123</li>
              <li>Centro - São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2024 Sabores & Cia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
