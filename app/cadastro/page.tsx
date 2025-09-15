"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, User } from "lucide-react"
import Link from "next/link"

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Salvar dados no localStorage (simulando um banco de dados)
    const userData = {
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    }

    localStorage.setItem("userData", JSON.stringify(userData))

    // Enviar email de confirmação
    const subject = "Cadastro Realizado - Sabores & Cia"
    const body = `
Olá ${formData.name}!

Seu cadastro foi realizado com sucesso na Sabores & Cia!

Dados cadastrados:
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Endereço: ${formData.address}
Cidade: ${formData.city}
CEP: ${formData.zipCode}

Agora você pode fazer seus pedidos de forma mais rápida!

Atenciosamente,
Equipe Sabores & Cia
    `

    const mailtoLink = `mailto:${formData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink

    alert("Cadastro realizado com sucesso! Verifique seu email.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Início
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center space-x-2">
              <User className="h-6 w-6 text-primary" />
              <span>Cadastro de Cliente</span>
            </CardTitle>
            <CardDescription>
              Cadastre-se para fazer pedidos de forma mais rápida e receber ofertas especiais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
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
                      value={formData.email}
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
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Endereço</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Rua, número, complemento"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="Sua cidade"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">CEP</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      placeholder="00000-000"
                      value={formData.zipCode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <Button type="submit" size="lg" className="w-full">
                  Realizar Cadastro
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Ao se cadastrar, você concorda com nossos termos de uso e política de privacidade.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
