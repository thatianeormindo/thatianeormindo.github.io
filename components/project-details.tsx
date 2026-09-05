import { ArrowRight, Star, Info, CircleDot } from 'lucide-react'

const features = [
  'Módulos organizados por tópicos de segurança',
  'Desafios práticos para consolidar conhecimento',
  'Laboratórios para testar na prática',
  'Acompanhamento de progresso real',
  'Interface limpa, dark e responsiva',
]

const tags = ['Segurança', 'AppSec', 'Dashboard', 'Web', 'Learning']

const stats = [
  { value: '0/25', label: 'Módulos' },
  { value: '0%', label: 'Progresso' },
  { value: '0', label: 'Concluídos' },
  { value: '0', label: 'Horas de estudo' },
]

const categories = ['Autenticação', 'Autorização', 'APIs e Integrações', 'Validações', 'Lógica de Negócio']

const menu = ['Visão Geral', 'Módulos', 'Desafios', 'Laboratório', 'Anotações', 'Progresso']

function DashboardMock() {
  return (
    <div
      role="img"
      aria-label="Prévia do AppSec Learning Dashboard"
      className="overflow-hidden rounded-lg border border-neon/30 bg-background text-[10px]"
    >
      <div className="flex items-center justify-between border-b border-neon/20 px-3 py-2">
        <span className="flex items-center gap-2 text-xs text-foreground">
          <CircleDot className="size-3 text-neon" aria-hidden="true" />
          AppSec Learning Dashboard
        </span>
        <span className="size-2 rounded-full bg-neon/60" />
      </div>
      <div className="grid grid-cols-[88px_1fr]">
        <nav aria-hidden="true" className="flex flex-col gap-1 border-r border-neon/20 p-2">
          {menu.map((item, i) => (
            <span
              key={item}
              className={`flex items-center gap-1.5 rounded px-2 py-1 ${
                i === 0 ? 'bg-neon-soft text-neon' : 'text-muted-foreground'
              }`}
            >
              <span className="size-1.5 rounded-full border border-current" />
              {item}
            </span>
          ))}
        </nav>
        <div className="p-3">
          <p className="text-xs font-semibold">Visão Geral</p>
          <div className="mt-2 grid grid-cols-4 gap-1.5">
            {stats.map((s) => (
              <div key={s.label} className="rounded border border-neon/20 bg-card p-2 text-center">
                <p className="text-sm font-semibold text-foreground">{s.value}</p>
                <p className="text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div>
              <p className="font-semibold">Progresso por Categoria</p>
              <ul className="mt-2 flex flex-col gap-1.5">
                {categories.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-16 truncate">{c}</span>
                    <span className="h-1 flex-1 rounded-full bg-secondary" />
                    <span>0%</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold">Atividade Recente</p>
              <p className="mt-2 flex items-start gap-1.5 text-muted-foreground">
                <Info className="mt-0.5 size-3 shrink-0" aria-hidden="true" />
                Nenhuma atividade registrada ainda. Comece seus estudos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectDetails() {
  return (
    <section id="detalhes" className="rounded-xl border border-neon/30 bg-card p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-neon">Detalhes do projeto</h2>
        <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-alert">
          Em destaque
          <Star className="size-3.5 fill-current" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
        <DashboardMock />

        <div>
          <h3 className="text-2xl font-semibold">AppSec Learning Dashboard</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
            Plataforma interativa criada para acompanhar minha jornada de aprendizado em AppSec.
          </p>
          <ul className="mt-5 flex flex-col gap-2.5">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="flex size-4 shrink-0 items-center justify-center rounded-full border border-alert/60">
                  <span className="size-1.5 rounded-full bg-alert" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-cyan/40 bg-cyan/10 px-2.5 py-1 text-xs text-cyan"
              >
                {tag}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-alert/70 bg-alert-soft px-5 py-2.5 text-sm font-medium transition-colors hover:bg-alert/25"
          >
            Explorar projeto
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
