import { AppNav } from '@/components/app-nav'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Outlet, createRootRoute } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <TooltipProvider>
        <AppNav />
        <hr />
        <main className="font-sans dark:text-slate-200 flex flex-col items-center gap-y-16 min-w-screen py-8 min-h-screen">
          <Outlet />
        </main>
      </TooltipProvider>
    </>
  ),
})
