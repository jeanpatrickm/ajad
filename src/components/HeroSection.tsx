import {
  Scale,
  Instagram,
  Linkedin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" });
  };
  const socials = [
    {
      icon: <Instagram size={16} />,
      label: "Instagram",
      href: "https://instagram.com/",
    },
    {
      icon: <Linkedin size={16} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ana-j%C3%BAlia-barbosa-982752322/",
    },
    {
      icon: <MessageCircle size={16} />,
      label: "WhatsApp",
      href: "https://wa.me/5512988940801",
    },
  ];

  // Animate on mount
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((node, i) => {
      node.style.opacity = "0";
      node.style.transform = "translateY(22px)";
      node.style.transition = `opacity 0.7s ease ${i * 0.1 + 0.05}s, transform 0.7s ease ${i * 0.1 + 0.05}s`;
      requestAnimationFrame(() => {
        node.style.opacity = "1";
        node.style.transform = "translateY(0)";
      });
    });
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen bg-background overflow-hidden flex items-center"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "160px",
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          right: "-5%",
          width: "65vw",
          height: "65vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, hsl(358 33% 18% / 0.09) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-15%",
          left: "-8%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, hsl(31 7% 63% / 0.18) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute left-8 top-0 bottom-0 w-px hidden lg:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent 5%, hsl(var(--border)) 30%, hsl(var(--border)) 70%, transparent 95%)",
        }}
      />

      <svg
        className="absolute top-8 right-8 opacity-20 hidden md:block"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
      >
        <path
          d="M0 0 L80 0 L80 80"
          stroke="hsl(358, 33%, 18%)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M20 0 L80 0 L80 60"
          stroke="hsl(358, 33%, 18%)"
          strokeWidth="0.5"
          fill="none"
        />
        <circle cx="68" cy="12" r="3" fill="hsl(358, 33%, 18%)" />
      </svg>

      <svg
        className="absolute bottom-8 left-8 opacity-20 hidden md:block"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
      >
        <path
          d="M80 80 L0 80 L0 0"
          stroke="hsl(358, 33%, 18%)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M60 80 L0 80 L0 20"
          stroke="hsl(358, 33%, 18%)"
          strokeWidth="0.5"
          fill="none"
        />
        <circle cx="12" cy="68" r="3" fill="hsl(358, 33%, 18%)" />
      </svg>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, hsl(var(--border)) 30%, hsl(var(--border)) 70%, transparent)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 lg:px-16 py-28 flex flex-col items-center text-center gap-8">
        <div
          data-reveal
          className="inline-flex items-center gap-2.5 border border-border rounded-full px-5 py-2 text-muted-foreground text-[11px] tracking-[0.2em] uppercase font-medium bg-card/60 backdrop-blur-sm shadow-sm"
        >
          <Scale size={12} className="text-primary" />
          Advocacia &amp; Consultoria Jurídica
          <Scale size={12} className="text-primary" />
        </div>

        <h1
          data-reveal
          className="text-foreground leading-[1.05] tracking-tight"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Ana Julia Advogada
          <br />
        </h1>

        <div data-reveal className="flex items-center gap-3">
          <div className="h-px w-10 bg-primary/30" />
          <Scale size={14} className="text-primary/50" />
          <div className="h-px w-10 bg-primary/30" />
        </div>

        <p
          data-reveal
          className="text-muted-foreground leading-relaxed text-base md:text-lg font-light max-w-lg"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Comprometida com a defesa dos seus direitos — atendimento
          personalizado e soluções jurídicas eficientes para cada caso.
        </p>

        <div data-reveal className="flex flex-col sm:flex-row gap-3 mt-2">
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2.5 bg-primary hover:opacity-90 active:scale-[0.98] text-primary-foreground font-semibold px-8 py-4 rounded-sm transition-all duration-200 text-sm tracking-wider uppercase shadow-md"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Fale Conosco
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1.5"
            />
          </button>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 border border-primary/40 hover:border-primary hover:bg-primary/8 text-foreground hover:text-primary px-8 py-4 rounded-sm transition-all duration-200 text-sm tracking-wider uppercase"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Saiba Mais
          </button>
        </div>

        <div data-reveal className="flex items-center gap-4 mt-4">
          <div className="h-px w-12 bg-border" />
          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="group relative text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-200" />
                {s.icon}
              </a>
            ))}
          </div>
          <div className="h-px w-12 bg-border" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
