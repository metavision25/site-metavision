"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingBag, User } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Sabores & Cia</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <Link href="#produtos" className="text-foreground hover:text-primary transition-colors">
              Produtos
            </Link>
            <Link href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/cadastro">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Cadastro
              </Button>
            </Link>
            <Link href="/pedidos">
              <Button size="sm" className="pulse-glow">
                Fazer Pedido
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 slide-in">
            <div className="flex flex-col space-y-4">
              <Link href="#home" className="text-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <Link href="#produtos" className="text-foreground hover:text-primary transition-colors">
                Produtos
              </Link>
              <Link href="#sobre" className="text-foreground hover:text-primary transition-colors">
                Sobre
              </Link>
              <Link href="#contato" className="text-foreground hover:text-primary transition-colors">
                Contato
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/cadastro">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <User className="h-4 w-4 mr-2" />
                    Cadastro
                  </Button>
                </Link>
                <Link href="/pedidos">
                  <Button size="sm" className="w-full">
                    Fazer Pedido
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
