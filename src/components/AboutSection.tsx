import { Award, BookOpen, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Users className="w-16 h-16 mx-auto mb-4 opacity-40" />
                  <p className="text-sm opacity-60">Foto Profissional</p>
                </div>
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-sm -z-10" />
          </div>

          {/* Text content */}
          <div>
            <p className="text-sm tracking-widest uppercase text-secondary mb-2">Sobre</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Dra. Maria Silva
            </h2>
            <div className="w-16 h-0.5 bg-primary/40 mb-6" />
            <p className="text-foreground/80 leading-relaxed mb-4">
              Com mais de 15 anos de experiência na advocacia, a Dra. Maria Silva é reconhecida pela excelência no atendimento e pela dedicação incansável aos seus clientes.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              Formada pela Universidade de São Paulo (USP), com especializações em Direito de Família e Direito Civil, atua com ética, transparência e compromisso com resultados.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-foreground">OAB/SP 123.456</p>
                  <p className="text-xs text-muted-foreground">Registro Ativo</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-foreground">+15 anos</p>
                  <p className="text-xs text-muted-foreground">De Experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
