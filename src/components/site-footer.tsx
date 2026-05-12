import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo-zero82.jpg";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={logo} alt="Zero82 Produções" width={40} height={40} className="h-10 w-10 object-contain rounded" />
            <span className="font-display text-lg font-bold">Zero<span className="text-gradient-gold">82</span> Produções</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Música ao vivo de excelência para os momentos mais importantes da sua vida.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground">Contato</h4>
          <p className="text-sm text-muted-foreground">contato@zero82producoes.com.br</p>
          <p className="text-sm text-muted-foreground">+55 (82) 99000-0000</p>
          <p className="text-sm text-muted-foreground">Maceió, AL</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground">Siga-nos</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Youtube" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Zero82 Produções. Todos os direitos reservados.
      </div>
    </footer>
  );
}
