import { ClipboardCheck, FileText, Bot, Download, Zap, Cpu } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Tone = 'neon' | 'alert' | 'cyan'

type Tool = {
  title: string
  description: string
  icon: LucideIcon
  badge?: LucideIcon
  tone: Tone
}

const tools: Tool[] = [
  {
    title: 'API Security Checklist',
    description: 'Checklist prático para revisão de segurança em APIs.',
    icon: ClipboardCheck,
    tone: 'neon',
  },
  {
    title: 'Template de Relatório',
    description: 'Modelo de relatório de testes de segurança em aplicações.',
    icon: FileText,
    badge: Zap,
    tone: 'alert',
  },
  {
    title: 'AI Developer Toolkit',
    description: 'Coleção de prompts e scripts úteis para devs com IA.',
    icon: Bot,
    badge: Cpu,
    tone: 'cyan',
  },
]

const toneStyles: Record<Tone, { border: string; text: string; button: string }> = {
  neon: {
    border: 'border-neon/40 hover:border-neon/70',
    text: 'text-neon',
    button: 'border-neon/50 bg-neon-soft hover:bg-neon/25',
  },
  alert: {
    border: 'border-alert/40 hover:border-alert/70',
    text: 'text-alert',
    button: 'border-alert/50 bg-alert-soft hover:bg-alert/25',
  },
  cyan: {
    border: 'border-cyan/40 hover:border-cyan/70',
    text: 'text-cyan',
    button: 'border-cyan/50 bg-cyan/10 hover:bg-cyan/20',
  },
}

export function ToolsSection() {
  return (
    <section id="ferramentas">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-neon">Ferramentas &amp; Recursos</h2>
        <a href="#ferramentas" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
          Ver todos
        </a>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => {
          const styles = toneStyles[tool.tone]
          const Icon = tool.icon
          const Badge = tool.badge
          return (
            <article
              key={tool.title}
              className={`flex flex-col gap-4 rounded-xl border bg-card p-5 transition-colors ${styles.border}`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold">{tool.title}</h3>
                {Badge && <Badge className={`size-4 shrink-0 ${styles.text}`} aria-hidden="true" />}
              </div>
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm leading-relaxed text-muted-foreground">{tool.description}</p>
                <Icon className={`size-9 shrink-0 ${styles.text}`} aria-hidden="true" />
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <a
                  href="#"
                  className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${styles.button}`}
                >
                  Ver detalhes
                </a>
                <a
                  href="#"
                  className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${styles.button}`}
                >
                  Baixar
                  <Download className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
