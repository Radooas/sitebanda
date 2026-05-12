import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Music, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { bands } from "@/data/bands";

export const Route = createFileRoute("/bandas")({
  head: () => ({
    meta: [
      { title: "Bandas disponíveis para contratação — Zero82 Produções" },
      { name: "description", content: "Conheça nosso elenco de bandas, duos e DJs. Rock, jazz, acústico e eletrônica — escolha o som perfeito para seu evento." },
      { property: "og:title", content: "Bandas disponíveis — Zero82 Produções" },
      { property: "og:description", content: "Repertório premium para todo tipo de evento." },
    ],
  }),
  component: Bandas,
});

function Bandas() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container mx-auto px-6 py-20 md:py-28 text-center relative">
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
          <div className="relative">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Nosso elenco</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 max-w-3xl mx-auto">
              Bandas disponíveis para <span className="text-gradient-gold">contratação</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Selecionamos artistas com alta performance ao vivo, repertório versátil e postura profissional impecável.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-20 space-y-10">
          {bands.map((band, i) => (
            <article key={band.slug} className={`grid md:grid-cols-2 gap-8 items-center bg-card border border-border rounded-3xl overflow-hidden ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                <img src={band.image} alt={band.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
              </div>
              <div className="p-8 md:p-12">
                <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">{band.genre}</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold">{band.name}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{band.description}</p>

                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" /> {band.members} {band.members > 1 ? "integrantes" : "integrante"}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Music className="h-4 w-4 text-primary" /> Repertório versátil
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {band.repertoire.map((r) => (
                    <span key={r} className="px-3 py-1 rounded-full text-xs border border-border bg-background/50">{r}</span>
                  ))}
                </div>

                <Link to="/contato" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:scale-105 transition-transform">
                  Contratar {band.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
