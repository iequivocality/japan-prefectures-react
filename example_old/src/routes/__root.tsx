import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { AppNav } from "../components/appnav";
import { TooltipProvider } from "@/components/ui/tooltip";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <TooltipProvider>
      <AppNav />
      <hr />
      <main className="font-sans dark:text-slate-200 flex flex-col items-center gap-y-16 min-w-screen py-8 min-h-screen">
        <Outlet />
      </main>
    </TooltipProvider>
  );
}
