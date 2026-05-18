import { createRouter } from "@tanstack/react-router";

import { DefaultErrorComponent } from "./components/default-error-component";
import { routeTree } from "./routeTree.gen";

export const router = createRouter({
  routeTree,
  context: {},
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
  defaultErrorComponent: DefaultErrorComponent,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
