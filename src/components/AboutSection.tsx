import { Award, BookOpen, Users } from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden relative">
              <img
                src={`${BASE_URL}aj.jpeg`}
                alt="aj"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-sm -z-10" />
          </div>

          <div>
            <p className="text-sm tracking-widest uppercase text-secondary mb-2">
              Sobre
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Ana Júlia
            </h2>
            <div className="w-16 h-0.5 bg-primary/40 mb-6" />
            <p className="text-foreground/80 leading-relaxed mb-4">
              Formada em Direito pela Universidade de Taubaté (UNITAU), a Dra.
              Ana Júlia destacou-se ainda durante a graduação pelo seu
              desempenho acadêmico e dedicação à carreira jurídica, conquistando
              a aprovação no Exame da Ordem dos Advogados do Brasil (OAB) antes
              mesmo de concluir o curso.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              Com uma formação sólida e olhar estratégico para cada caso,
              construiu sua trajetória profissional pautada na ética,
              responsabilidade e atendimento próximo aos clientes, sempre
              buscando soluções jurídicas seguras, eficientes e personalizadas.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    OAB/SP 123.456
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Registro Ativo
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-primary mt-1 shrink-0" />
                {/*} <div>
                  <p className="font-semibold text-sm text-foreground">
                    +1 anos
                  </p>
                  <p className="text-xs text-muted-foreground">
                    De Experiência
                  </p>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
