"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Criar email com os dados do formulário
    const subject = `Contato - ${formData.name}`
    const body = `
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}

Mensagem:
${formData.message}
    `

    const mailtoLink = `mailto:contato@saboresecia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contato" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem alguma dúvida ou sugestão? Estamos aqui para ajudar! Entre em contato conosco.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Endereço</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rua das Delícias, 123
                  <br />
                  Centro - São Paulo, SP
                  <br />
                  CEP: 01234-567
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Telefone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  (11) 99999-9999
                  <br />
                  (11) 3333-3333
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  contato@saboresecia.com
                  <br />
                  pedidos@saboresecia.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Horário de Funcionamento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 8h às 18h
                  <br />
                  Sábado: 8h às 16h
                  <br />
                  Domingo: Fechado
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Contato */}
          <Card>
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Seu email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input name="phone" placeholder="Seu telefone" value={formData.phone} onChange={handleChange} />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Sua mensagem"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
