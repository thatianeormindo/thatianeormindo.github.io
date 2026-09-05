import Image from 'next/image'
import { Code2, Cpu, Shield, ScanSearch, TrendingUp } from 'lucide-react'

const highlights = [
  { icon: Cpu, label: 'Developer com IA' },
  { icon: Shield, label: 'Nível 0 em Segurança' },
  { icon: ScanSearch, label: 'AppSec em aprendizado' },
  { icon: TrendingUp, label: 'Foco em evolução contínua' },
]

export function Hero() {
  return (
    <section id="explorar" className="grid items-center gap-8 md:grid-cols-[minmax(0,320px)_1fr]">
      <div className="relative mx-auto w-full max-w-xs">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="/images/portrait.png"
            alt="Retrato de Thatiane Malheiros com iluminação neon"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 320px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="absolute -bottom-6 left-1/2 flex size-16 -translate-x-1/2 rotate-45 items-center justify-center rounded-lg border border-neon/60 bg-card glow-neon">
          <Code2 className="size-7 -rotate-45 text-neon" aria-hidden="true" />
        </div>
      </div>

      <div className="pt-6 md:pt-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-neon">Desenvolvedora com IA</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-balance lg:text-4xl">
          Transformando curiosidade em soluções inteligentes.
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground text-pretty">
          Estudando e aplicando IA para resolver problemas reais com foco em segurança de aplicações e APIs.
        </p>
        <ul className="mt-6 flex flex-col gap-3">
          {highlights.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-sm">
              <span className="flex size-7 items-center justify-center rounded-full border border-neon/40 text-neon">
                <Icon className="size-3.5" aria-hidden="true" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
