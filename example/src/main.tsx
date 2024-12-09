import React from "react";
import { createRoot } from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "./index.css";
import { AppNav } from "./components/appnav";
import { Home } from "./routes/Home";
import { Maps } from "./routes/Maps";
import { Flags } from "./routes/Flags";
import { TooltipProvider } from "./components/tooltip";

const rootRoute = createRootRoute({
  component: () => (
    <TooltipProvider>
      <AppNav />
      <hr />
      <main className="font-sans dark:text-slate-200 flex flex-col items-center gap-y-16 min-w-screen py-8 min-h-screen">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </TooltipProvider>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const mapsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/maps",
  component: Maps,
});

const flagsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/flags",
  component: Flags,
});

const routeTree = rootRoute.addChildren([indexRoute, mapsRoute, flagsRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
