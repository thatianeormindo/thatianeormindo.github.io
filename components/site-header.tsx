import { Link2 } from 'lucide-react'

const navItems = [
  { label: 'Explorar', href: '#explorar', active: true },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Ferramentas', href: '#ferramentas' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neon/20 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <a href="#" className="flex items-center gap-3">
          <span className="font-serif text-2xl leading-none tracking-tight text-neon text-glow">TM</span>
          <span className="hidden font-serif text-xs uppercase leading-tight tracking-[0.2em] text-muted-foreground sm:block">
            Thatiane
            <br />
            Malheiros
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors hover:text-foreground ${
                item.active ? 'bg-neon-soft text-foreground' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="flex items-center gap-2 rounded-md border border-neon/50 bg-neon-soft px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-neon/25"
        >
          Conectar
          <Link2 className="size-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
