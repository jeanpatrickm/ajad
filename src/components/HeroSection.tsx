import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-secondary/20 blur-2xl" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="flex justify-center mb-6">
          <Scale className="w-12 h-12 text-primary/60" />
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-4 leading-tight">
          Dra. Maria Silva
        </h1>
        <div className="w-24 h-0.5 bg-primary/40 mx-auto mb-6" />
        <p className="text-lg md:text-xl text-foreground/70 font-light mb-2 tracking-widest uppercase">
          Advocacia & Consultoria Jurídica
        </p>
        <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10">
          Comprometida com a defesa dos seus direitos, oferecendo atendimento personalizado e soluções jurídicas eficientes.
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="px-10 py-6 text-base tracking-wide uppercase font-medium rounded-sm hover:scale-105 transition-transform"
        >
          Fale Conosco
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
