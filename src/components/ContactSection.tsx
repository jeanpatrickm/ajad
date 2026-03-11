import {
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  ArrowUpRight,
  Mail,
} from "lucide-react";

const ContactSection = () => {
  const contacts = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+55 12 98894-0801",
      href: "https://wa.me/5512988940801",
      external: true,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@anajuvilelaa",
      href: "https://www.instagram.com/anajuvilelaa/",
      external: true,
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Rua do Corrêa, nº 255, sala 15, Centro, Edifício Taubaté Office - Taubaté/SP",
      href: "https://share.google/rn1bv3KiD4hE3QTD7",
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: "anavilelaadv@gmail.com",
      href: "mail:anavilelaadv@gmail.com",
      external: false,
    },
  ];

  return (
    <section id="contato" className="py-32 bg-background overflow-hidden">
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandLine {
          from { width: 0; }
          to { width: 4rem; }
        }

        .contact-header {
          animation: fadeSlideUp 0.7s ease forwards;
        }

        .contact-item {
          opacity: 0;
          animation: fadeSlideUp 0.6s ease forwards;
        }

        .contact-item:nth-child(1) { animation-delay: 0.15s; }
        .contact-item:nth-child(2) { animation-delay: 0.25s; }
        .contact-item:nth-child(3) { animation-delay: 0.35s; }
        .contact-item:nth-child(4) { animation-delay: 0.45s; }

        .line-animate {
          animation: expandLine 0.8s ease 0.1s forwards;
          width: 0;
        }

        .contact-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background-color: hsl(var(--primary) / 0.4);
          transition: width 0.4s ease;
        }

        .contact-link:hover::after {
          width: 100%;
        }

        .icon-wrap {
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .contact-link:hover .icon-wrap {
          transform: rotate(-8deg) scale(1.1);
          background-color: hsl(var(--primary) / 0.15);
        }

        .arrow-icon {
          transition: transform 0.3s ease, opacity 0.3s ease;
          opacity: 0.3;
        }

        .contact-link:hover .arrow-icon {
          transform: translate(3px, -3px);
          opacity: 1;
        }
      `}</style>

      <div className="max-w-3xl mx-auto px-6">
        <div className="contact-header text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-primary/50 mb-3">
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-5">
            Entre em Contato
          </h2>
          <div className="line-animate h-px bg-primary/30 mx-auto" />
        </div>

        <div className="flex flex-col gap-1">
          {contacts.map((item, index) => (
            <div key={index} className="contact-item">
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="contact-link group relative flex items-center justify-between gap-6 py-8 border-b border-primary/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="icon-wrap w-12 h-12 rounded-full bg-primary/8 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-6">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-primary/40 sm:w-28 shrink-0 font-semibold">
                      {item.label}
                    </span>
                    <span className="text-sm text-primary/80 group-hover:text-primary transition-colors duration-300 font-semibold">
                      {item.value}
                    </span>
                  </div>
                </div>

                <ArrowUpRight className="arrow-icon w-4 h-4 text-primary shrink-0" />
              </a>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-16 contact-item"
          style={{ animationDelay: "0.55s" }}
        ></div>
      </div>
    </section>
  );
};

export default ContactSection;
