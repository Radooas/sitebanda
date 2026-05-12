import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Calendar, Award } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { bands } from "@/data/bands";
import heroImg from "@/assets/hero-stage.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zero82 Produções — Música ao vivo para seu evento" },
      { name: "description", content: "Bandas e serviços musicais sob medida para casamentos, eventos corporativos e festas. Repertório premium com qualidade profissional." },
      { property: "og:title", content: "Zero82 Produções — Música ao vivo para seu evento" },
      { property: "og:description", content: "Bandas e serviços musicais sob medida para os momentos mais importantes." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <img
            src={heroImg}
            alt="Palco iluminado em um show"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
          <div className="relative container mx-auto px-6 py-32 md:py-48 text-center">
            <span className="inline-block animate-fade-up text-xs uppercase tracking-[0.3em] text-primary mb-6">Música ao vivo • Desde 2014</span>
            <h1 className="animate-fade-up font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-4xl mx-auto">
              A trilha sonora dos seus <span className="text-gradient-gold">momentos inesquecíveis</span>
            </h1>
            <p className="animate-fade-up mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Bandas, DJs e produção musical completa para casamentos, eventos corporativos e festas exclusivas.
            </p>
            <div className="animate-fade-up mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/bandas" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:scale-105 transition-transform">
                Ver Bandas <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/servicos" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold hover:bg-card transition-colors">
                Nossos Serviços
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Calendar, value: "850+", label: "Eventos realizados" },
              { icon: Star, value: "4.9", label: "Avaliação média" },
              { icon: Award, value: "12+", label: "Bandas exclusivas" },
              { icon: Star, value: "10 anos", label: "De experiência" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="h-7 w-7 mx-auto text-primary mb-3" />
                <div className="font-display text-4xl font-bold text-gradient-gold">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured bands */}
        <section className="container mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary">Em destaque</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Bandas que marcam presença</h2>
            </div>
            <Link to="/bandas" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
              Ver todas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bands.map((band) => (
              <article key={band.slug} className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={band.image} alt={band.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-wider text-primary mb-1">{band.genre}</p>
                  <h3 className="font-display text-xl font-bold">{band.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-20">
          <div className="rounded-3xl bg-card border border-border p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl font-bold max-w-2xl mx-auto">
                Pronto para criar uma experiência <span className="text-gradient-gold">inesquecível</span>?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Conte-nos sobre seu evento e montaremos uma proposta personalizada em até 24 horas.
              </p>
              <Link to="/contato" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:scale-105 transition-transform">
                Solicitar orçamento <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
