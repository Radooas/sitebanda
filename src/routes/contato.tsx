import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Zero82 Produções" },
      {
        name: "description",
        content: "Solicite um orçamento personalizado para seu evento. Resposta em até 24h.",
      },
      { property: "og:title", content: "Contato — Zero82 Produções" },
      { property: "og:description", content: "Vamos conversar sobre seu próximo evento." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container mx-auto px-6 py-20 md:py-28 relative">
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
          <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary">Fale conosco</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold mt-4">
                Vamos criar algo <span className="text-gradient-gold">memorável</span>
              </h1>
              <p className="mt-6 text-muted-foreground">
                Conte-nos sobre seu evento. Nossa equipe responde em até 24 horas com uma proposta
                personalizada.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  { icon: Mail, label: "contato@zero82producoes.com.br" },
                  { icon: Phone, label: "+55 (82) 99000-0000" },
                  { icon: MapPin, label: "Maceió • Atendemos todo o Brasil" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-full border border-primary/40 flex items-center justify-center text-primary">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="bg-card border border-border rounded-2xl p-8 space-y-4 shadow-[var(--shadow-elegant)]"
            >
              {sent ? (
                <div className="text-center py-12">
                  <div className="h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                    <Send className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">Mensagem enviada!</h2>
                  <p className="text-muted-foreground mt-2">Em breve entraremos em contato.</p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="text-sm font-medium block mb-1.5">Nome</label>
                    <input
                      required
                      className="w-full rounded-lg bg-background border border-input px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium block mb-1.5">E-mail</label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-lg bg-background border border-input px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-1.5">Telefone</label>
                      <input className="w-full rounded-lg bg-background border border-input px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1.5">Tipo de evento</label>
                    <select className="w-full rounded-lg bg-background border border-input px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Casamento</option>
                      <option>Evento corporativo</option>
                      <option>Aniversário / Festa</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1.5">
                      Conte sobre seu evento
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-lg bg-background border border-input px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:scale-[1.02] transition-transform"
                  >
                    Enviar mensagem <Send className="h-4 w-4" />
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
