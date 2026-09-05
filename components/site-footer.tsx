import { Activity, Clock } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-8 lg:px-6">
      <div className="flex flex-col gap-3 rounded-xl border border-neon/30 bg-card px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-3 text-sm">
          <Activity className="size-5 text-neon" aria-hidden="true" />
          Não é sobre saber tudo. É sobre não parar de aprender.
        </p>
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="size-3.5" aria-hidden="true" />
          Última atualização: agora mesmo
        </p>
      </div>
    </footer>
  )
}
