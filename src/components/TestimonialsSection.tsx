import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    text: "A Dra. Maria foi excepcional no meu caso de divórcio. Muito atenciosa e profissional, sempre me manteve informada sobre cada etapa do processo.",
    name: "Ana Souza",
    context: "Direito de Família",
  },
  {
    text: "Graças ao trabalho da Dra. Maria, consegui todos os meus direitos trabalhistas. Recomendo de olhos fechados para qualquer pessoa que precise de uma advogada competente.",
    name: "Carlos Oliveira",
    context: "Direito Trabalhista",
  },
  {
    text: "Profissional dedicada e extremamente competente. Resolveu minha questão de forma rápida e eficiente. Sou muito grata pelo atendimento humanizado.",
    name: "Juliana Mendes",
    context: "Direito do Consumidor",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="depoimentos" className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-secondary mb-2">Depoimentos</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
        </div>

        <div className="relative">
          <div className="text-center px-8 md:px-16">
            <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed italic mb-8 min-h-[120px]">
              "{testimonials[current].text}"
            </p>
            <p className="font-serif font-semibold text-primary text-lg">{testimonials[current].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[current].context}</p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-primary/25"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
