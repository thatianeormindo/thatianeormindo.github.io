import { Crown, Quote, Shield, Box, Activity } from 'lucide-react'

const statusFields = [
  { label: 'Especialidade', value: 'Developer com IA' },
  { label: 'Interesses', value: 'Segurança de Aplicações, APIs, Automação, IA Generativa' },
  { label: 'Mentalidade', value: 'Explorando. Aprendendo. Construindo com propósito.' },
]

export function ProfileSidebar() {
  return (
    <aside id="sobre" className="flex flex-col gap-4">
      <section className="rounded-xl border border-neon/30 bg-card p-6 text-center glow-neon">
        <div className="flex items-center justify-center gap-3 text-neon">
          <span className="h-px w-10 bg-neon/60" aria-hidden="true" />
          <Crown className="size-6" aria-hidden="true" />
          <span className="h-px w-10 bg-neon/60" aria-hidden="true" />
        </div>
        <h1 className="mt-4 font-serif text-3xl leading-tight tracking-wide text-balance">
          Thatiane
          <br />
          Malheiros
        </h1>
        <p className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-neon">
          <span className="h-px w-4 bg-neon/60" aria-hidden="true" />
          Developer com IA
          <span className="h-px w-4 bg-neon/60" aria-hidden="true" />
        </p>
        <blockquote className="relative mt-6 rounded-lg border border-neon/20 bg-background/60 p-4 text-left text-sm leading-relaxed text-muted-foreground">
          <Quote className="absolute -top-2 -left-2 size-5 rotate-180 text-neon" aria-hidden="true" />
          Explorando o potencial da IA para construir soluções úteis, seguras e inteligentes. Foco atual: AppSec.
          <Quote className="absolute -right-2 -bottom-2 size-5 text-neon" aria-hidden="true" />
        </blockquote>
      </section>

      <section className="rounded-xl border border-neon/20 bg-card p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neon">Status atual</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight">
              Nível 0 em
              <br />
              Segurança
            </h2>
          </div>
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-neon/40 bg-neon-soft text-neon glow-neon">
            <Shield className="size-6" aria-hidden="true" />
          </span>
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>XP</span>
            <span>0/100</span>
          </div>
          <div
            role="progressbar"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progresso de XP"
            className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary"
          >
            <div className="h-full w-0 bg-neon" />
          </div>
        </div>

        <div className="mt-6 flex items-start justify-between gap-4 border-t border-neon/15 pt-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neon">Foco atual</p>
            <p className="mt-1 text-sm">AppSec em aprendizado</p>
          </div>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-cyan/40 text-cyan">
            <Box className="size-5" aria-hidden="true" />
          </span>
        </div>

        <dl className="mt-6 flex flex-col gap-5 border-t border-neon/15 pt-6">
          {statusFields.map((field) => (
            <div key={field.label}>
              <dt className="text-xs font-semibold uppercase tracking-widest text-neon">{field.label}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-foreground/90">{field.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="flex items-center gap-4 rounded-xl border border-neon/20 bg-card p-5">
        <Activity className="size-6 shrink-0 text-neon" aria-hidden="true" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-neon">Jornada ativa</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Explorando o caminho da segurança com consistência.
          </p>
        </div>
      </section>
    </aside>
  )
}
