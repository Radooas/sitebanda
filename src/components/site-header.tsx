import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-zero82.jpg";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Zero82 Produções"
            width={48}
            height={48}
            className="h-12 w-12 object-contain rounded-md transition-transform group-hover:scale-105"
          />
          <span className="font-display text-xl font-bold tracking-tight hidden sm:inline">
            Zero<span className="text-gradient-gold">82</span> Produções
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-primary" }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Início
          </Link>
          <Link
            to="/servicos"
            activeProps={{ className: "text-primary" }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Serviços
          </Link>
          <Link
            to="/bandas"
            activeProps={{ className: "text-primary" }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Bandas
          </Link>
          <Link
            to="/contato"
            activeProps={{ className: "text-primary" }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contato
          </Link>
        </nav>
        <Link
          to="/contato"
          className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:scale-105 transition-transform"
        >
          Contratar
        </Link>
      </div>
    </header>
  );
}
