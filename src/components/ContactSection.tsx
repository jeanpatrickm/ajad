import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder
  };

  return (
    <section id="contato" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-secondary mb-2">Contato</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-foreground/80">Nome</Label>
              <Input id="name" placeholder="Seu nome completo" className="mt-1.5 bg-card border-border/60 focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground/80">E-mail</Label>
              <Input id="email" type="email" placeholder="seu@email.com" className="mt-1.5 bg-card border-border/60 focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-foreground/80">Telefone</Label>
              <Input id="phone" placeholder="(11) 99999-9999" className="mt-1.5 bg-card border-border/60 focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="message" className="text-foreground/80">Mensagem</Label>
              <Textarea id="message" placeholder="Descreva brevemente sua necessidade..." className="mt-1.5 bg-card border-border/60 focus:border-primary min-h-[120px]" />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-sm tracking-wide uppercase text-sm">
              Enviar Mensagem
            </Button>
          </form>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-6">Informações de Contato</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">Telefone</p>
                    <p className="text-muted-foreground text-sm">(11) 3456-7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">E-mail</p>
                    <p className="text-muted-foreground text-sm">contato@dramariasilva.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">Endereço</p>
                    <p className="text-muted-foreground text-sm">Av. Paulista, 1000 - Sala 501<br />São Paulo - SP</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">WhatsApp</p>
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                      (11) 99999-9999
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
