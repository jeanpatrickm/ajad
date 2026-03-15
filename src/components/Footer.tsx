import { Scale } from "lucide-react";

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-5 h-5" />
              <span className="font-serif text-lg font-bold">Ana Júlia</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Advocacia com excelência, dedicação e compromisso com os seus
              direitos.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre", href: "#sobre" },
                { label: "Áreas de Atuação", href: "#areas" },
                //{ label: "Depoimentos", href: "#depoimentos" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Informações</h4>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              OAB/SP 123.456
              <br />
              Rua do Corrêa, nº 255, sala 15, Centro, Edifício Taubaté Office -
              Taubaté/SP
              <br />
              São Paulo - SP
              <br />
              12010-080
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Ana Júlia — Todos os direitos
            reservados | Desenvolvido por{" "}
            <a
              href="https://morzen.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              Morzen
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
