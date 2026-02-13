import { Heart, Briefcase, Scale, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  {
    icon: Heart,
    title: "Direito de Família",
    description: "Divórcio, guarda de filhos, pensão alimentícia, inventário e partilha de bens.",
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description: "Reclamações trabalhistas, acordos, rescisões e direitos do trabalhador.",
  },
  {
    icon: Scale,
    title: "Direito Civil",
    description: "Contratos, responsabilidade civil, cobranças e ações indenizatórias.",
  },
  {
    icon: ShieldCheck,
    title: "Direito do Consumidor",
    description: "Defesa do consumidor, ações contra empresas e reparação de danos.",
  },
];

const AreasSection = () => {
  return (
    <section id="areas" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-secondary mb-2">Especialidades</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Áreas de Atuação
          </h2>
          <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <Card
              key={area.title}
              className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card"
            >
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-primary mb-3">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
