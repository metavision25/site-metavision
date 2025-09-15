"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ShoppingCart, Plus, Minus } from "lucide-react"
import Link from "next/link"

const produtos = [
  { id: 1, name: "Coxinha de Frango", price: 3.5, category: "salgado" },
  { id: 2, name: "Pastel de Queijo", price: 4.0, category: "salgado" },
  { id: 3, name: "Risole de Camarão", price: 5.0, category: "salgado" },
  { id: 4, name: "Enroladinho de Salsicha", price: 3.0, category: "salgado" },
  { id: 5, name: "Brigadeiro Gourmet", price: 2.5, category: "doce" },
  { id: 6, name: "Beijinho de Coco", price: 2.5, category: "doce" },
  { id: 7, name: "Torta de Limão", price: 8.0, category: "doce" },
  { id: 8, name: "Pudim de Leite", price: 6.0, category: "doce" },
]

export default function PedidosPage() {
  const [carrinho, setCarrinho] = useState<{ [key: number]: number }>({})
  const [clienteData, setClienteData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    deliveryDate: "",
    observations: "",
  })

  const adicionarAoCarrinho = (produtoId: number) => {
    setCarrinho((prev) => ({
      ...prev,
      [produtoId]: (prev[produtoId] || 0) + 1,
    }))
  }

  const removerDoCarrinho = (produtoId: number) => {
    setCarrinho((prev) => {
      const newCarrinho = { ...prev }
      if (newCarrinho[produtoId] > 1) {
        newCarrinho[produtoId]--
      } else {
        delete newCarrinho[produtoId]
      }
      return newCarrinho
    })
  }

  const calcularTotal = () => {
    return Object.entries(carrinho).reduce((total, [produtoId, quantidade]) => {
      const produto = produtos.find((p) => p.id === Number.parseInt(produtoId))
      return total + (produto?.price || 0) * quantidade
    }, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (Object.keys(carrinho).length === 0) {
      alert("Adicione pelo menos um item ao carrinho!")
      return
    }

    // Criar detalhes do pedido
    const itensPedido = Object.entries(carrinho)
      .map(([produtoId, quantidade]) => {
        const produto = produtos.find((p) => p.id === Number.parseInt(produtoId))
        return `${quantidade}x ${produto?.name} - R$ ${((produto?.price || 0) * quantidade).toFixed(2)}`
      })
      .join("\n")

    const total = calcularTotal()

    // Criar email do pedido
    const subject = `Novo Pedido - ${clienteData.name}`
    const body = `
NOVO PEDIDO - SABORES & CIA

DADOS DO CLIENTE:
Nome: ${clienteData.name}
Email: ${clienteData.email}
Telefone: ${clienteData.phone}
Endereço: ${clienteData.address}
Data de Entrega: ${clienteData.deliveryDate}

ITENS DO PEDIDO:
${itensPedido}

TOTAL: R$ ${total.toFixed(2)}

OBSERVAÇÕES:
${clienteData.observations}

---
Pedido realizado em: ${new Date().toLocaleString("pt-BR")}
    `

    const mailtoLink = `mailto:pedidos@saboresecia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink

    alert("Pedido enviado com sucesso! Entraremos em contato em breve.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setClienteData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Início
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Seleção de Produtos */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  <span>Selecione os Produtos</span>
                </CardTitle>
                <CardDescription>Escolha os salgados e doces para seu pedido</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Salgados */}
                  <div>
                    <h3 className="font-semibold text-primary mb-4">Salgados</h3>
                    <div className="space-y-3">
                      {produtos
                        .filter((p) => p.category === "salgado")
                        .map((produto) => (
                          <div key={produto.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <span className="font-medium">{produto.name}</span>
                              <Badge variant="secondary" className="ml-2">
                                R$ {produto.price.toFixed(2)}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => removerDoCarrinho(produto.id)}
                                disabled={!carrinho[produto.id]}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center">{carrinho[produto.id] || 0}</span>
                              <Button variant="outline" size="sm" onClick={() => adicionarAoCarrinho(produto.id)}>
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Doces */}
                  <div>
                    <h3 className="font-semibold text-secondary mb-4">Doces</h3>
                    <div className="space-y-3">
                      {produtos
                        .filter((p) => p.category === "doce")
                        .map((produto) => (
                          <div key={produto.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <span className="font-medium">{produto.name}</span>
                              <Badge variant="secondary" className="ml-2">
                                R$ {produto.price.toFixed(2)}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => removerDoCarrinho(produto.id)}
                                disabled={!carrinho[produto.id]}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center">{carrinho[produto.id] || 0}</span>
                              <Button variant="outline" size="sm" onClick={() => adicionarAoCarrinho(produto.id)}>
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dados do Cliente e Resumo */}
          <div className="space-y-6">
            {/* Resumo do Pedido */}
            <Card>
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                {Object.keys(carrinho).length === 0 ? (
                  <p className="text-muted-foreground">Nenhum item selecionado</p>
                ) : (
                  <div className="space-y-2">
                    {Object.entries(carrinho).map(([produtoId, quantidade]) => {
                      const produto = produtos.find((p) => p.id === Number.parseInt(produtoId))
                      return (
                        <div key={produtoId} className="flex justify-between">
                          <span>
                            {quantidade}x {produto?.name}
                          </span>
                          <span>R$ {((produto?.price || 0) * quantidade).toFixed(2)}</span>
                        </div>
                      )
                    })}
                    <div className="border-t pt-2 font-semibold">
                      <div className="flex justify-between">
                        <span>Total:</span>
                        <span className="text-primary">R$ {calcularTotal().toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Dados do Cliente */}
            <Card>
              <CardHeader>
                <CardTitle>Dados para Entrega</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      value={clienteData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={clienteData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="(11) 99999-9999"
                        value={clienteData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Endereço de Entrega *</Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="Rua, número, complemento"
                      value={clienteData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="deliveryDate">Data de Entrega *</Label>
                    <Input
                      id="deliveryDate"
                      name="deliveryDate"
                      type="date"
                      value={clienteData.deliveryDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="observations">Observações</Label>
                    <Textarea
                      id="observations"
                      name="observations"
                      placeholder="Alguma observação especial sobre o pedido?"
                      rows={3}
                      value={clienteData.observations}
                      onChange={handleChange}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Finalizar Pedido
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
