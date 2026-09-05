import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function FeaturedProject() {
  return (
    <section
      id="projetos"
      className="grid overflow-hidden rounded-xl border border-alert/50 bg-card glow-alert md:grid-cols-[1fr_1.1fr]"
    >
      <div className="flex flex-col justify-center p-6 lg:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-alert">Projeto em destaque</p>
        <h2 className="mt-3 text-2xl font-semibold leading-tight">AppSec Learning Dashboard</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
          Dashboard interativo para acompanhar aprendizados em segurança de aplicações, testar conhecimentos e
          visualizar progresso real.
        </p>
        <a
          href="#detalhes"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-alert/70 bg-alert-soft px-5 py-2.5 text-sm font-medium transition-colors hover:bg-alert/25"
        >
          Explorar projeto
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
      <div className="relative min-h-56">
        <Image
          src="/images/appsec-cube.png"
          alt="Arte do projeto AppSec Learning Dashboard: cubo com circuitos vermelhos e cadeado"
          fill
          sizes="(max-width: 768px) 100vw, 480px"
          className="object-cover"
        />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-card to-transparent" />
      </div>
    </section>
  )
}
