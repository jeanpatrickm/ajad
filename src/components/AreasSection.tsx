import { Heart, Shield, Gavel } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  {
    icon: Heart,
    title: "Direito de Família",
    items: [
      "Divórcio e separação",
      "Planejamento sucessório",
      "Guarda",
      "Pensão alimentícia",
      "Adoção",
      "Proteção de direitos de crianças e adolescentes",
      "Ação de investigação de paternidade",
      "Dissolução de união estável",
    ],
  },
  {
    icon: Shield,
    title: "Direito Previdenciário",
    items: [
      "Planejamento de aposentadorias",
      "Pensão por morte",
      "Auxílio doença e auxílio acidente",
      "Benefício assistencial (BPC/LOAS)",
      "Salário-maternidade",
      "Revisão de benefícios previdenciários",
      "Atuação nas vias administrativa e judicial",
    ],
  },
  {
    icon: Gavel,
    title: "Direito Criminal",
    items: [
      "Investigação e fase policial",
      "Acompanhamento de flagrantes",
      "Pedidos de liberdade provisória",
      "Elaboração de defesas e recursos criminais",
      "Atuação em audiências",
      "Habeas Corpus e medidas urgentes",
      "Revisão Criminal",
    ],
  },
];

const AreasSection = () => {
  return (
    <section id="areas" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-secondary mb-2">
            Especialidades
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Áreas de Atuação
          </h2>
          <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <Card
              key={area.title}
              className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-card"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-primary">
                    {area.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {area.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
