import { createFileRoute, Link } from "@tanstack/react-router";
import { Music, Mic2, Disc3, Sparkles, Speaker, Heart, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Zero82 Produções" },
      {
        name: "description",
        content:
          "Bandas ao vivo, DJs, cerimonialistas musicais, sonorização e produção completa para casamentos e eventos corporativos.",
      },
      { property: "og:title", content: "Serviços — Zero82 Produções" },
      { property: "og:description", content: "Soluções musicais completas para o seu evento." },
    ],
  }),
  component: Servicos,
});

const services = [
  {
    icon: Heart,
    title: "Casamentos",
    desc: "Cerimônia, coquetel e festa com transição musical impecável. Repertório personalizado com a noiva e o noivo.",
  },
  {
    icon: Music,
    title: "Bandas Ao Vivo",
    desc: "De duos acústicos a bandas completas de 8 integrantes. Rock, pop, MPB, jazz, sertanejo e mais.",
  },
  {
    icon: Disc3,
    title: "DJs Profissionais",
    desc: "Sets curados, transições limpas e leitura de pista. Open format ou house music — você escolhe a vibe.",
  },
  {
    icon: Mic2,
    title: "Eventos Corporativos",
    desc: "Lançamentos, premiações e confraternizações com música ao vivo de alto padrão e identidade da marca.",
  },
  {
    icon: Speaker,
    title: "Sonorização & Iluminação",
    desc: "Equipamentos profissionais, técnicos especializados e soluções para qualquer porte de evento.",
  },
  {
    icon: Sparkles,
    title: "Produção Musical Completa",
    desc: "Direção artística, ensaios, arranjos exclusivos e gerenciamento integral do palco.",
  },
];

function Servicos() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container mx-auto px-6 py-20 md:py-28 text-center relative">
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
          <div className="relative">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">O que fazemos</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 max-w-3xl mx-auto">
              Serviços musicais <span className="text-gradient-gold">sob medida</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada evento é único. Por isso construímos uma experiência sonora personalizada — do
              primeiro acorde ao último brinde.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="group rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-[var(--shadow-gold)]">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold mb-2">{s.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 pb-24">
          <div className="rounded-3xl border border-border p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center bg-card">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Como trabalhamos</h2>
              <p className="mt-4 text-muted-foreground">
                Um processo claro e tranquilo, do briefing à última música da festa.
              </p>
              <Link
                to="/contato"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:scale-105 transition-transform"
              >
                Começar agora <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ol className="space-y-5">
              {[
                ["Briefing", "Conversamos sobre seu evento, estilo, público e expectativas."],
                ["Proposta", "Recebe uma curadoria com bandas e formatos ideais em 24h."],
                ["Personalização", "Setlist, ensaios e detalhes técnicos alinhados com você."],
                ["Show", "Equipe completa em campo. Você só precisa aproveitar."],
              ].map(([title, desc], i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex-shrink-0 h-9 w-9 rounded-full border border-primary/40 text-primary font-display font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
