import { Outlet, Link, createRootRoute, HeadContent } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zero82 Produções — Música ao vivo para seu evento" },
      {
        name: "description",
        content:
          "Bandas, DJs e produção musical sob medida para casamentos, eventos corporativos e festas exclusivas.",
      },
      { name: "author", content: "Zero82 Produções" },
      { property: "og:title", content: "Zero82 Produções — Música ao vivo para seu evento" },
      {
        property: "og:description",
        content:
          "Bandas, DJs e produção musical sob medida para casamentos, eventos corporativos e festas exclusivas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Zero82 Produções — Música ao vivo para seu evento" },
      {
        name: "twitter:description",
        content:
          "Bandas, DJs e produção musical sob medida para casamentos, eventos corporativos e festas exclusivas.",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <Outlet />
    </>
  );
}
