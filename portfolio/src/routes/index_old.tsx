import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldAlert,
  ScanSearch,
  FileText,
  FlaskConical,
  GitCompareArrows,
  Workflow,
  BrainCircuit,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

// Ícone minimalista de terminal Debian
function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <rect x="8" y="8" width="48" height="48" rx="2" />
      <path d="M20 28l8 8-8 8" />
      <line x1="32" y1="44" x2="44" y2="44" />
    </svg>
  );
}

export const Route = createFileRoute("/index_old")({
  head: () => ({
    meta: [
      { title: "Thatiane Malheiros | AppSec & Segurança de Aplicações" },
      {
        name: "description",
        content:
          "Perfil de Thatiane Malheiros: segurança web e APIs, vulnerability assessment, autenticação, autorização e automação com IA. Aberta a oportunidades iniciais em AppSec.",
      },
      { property: "og:title", content: "Thatiane Malheiros | AppSec & Segurança de Aplicações" },
      {
        property: "og:description",
        content:
          "Segurança web e APIs, vulnerability assessment, autenticação e automação com IA. Aberta a oportunidades iniciais em AppSec.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Thatiane Malheiros | AppSec & Segurança de Aplicações",
      },
      {
        name: "twitter:description",
        content:
          "Segurança web e APIs, vulnerability assessment, autenticação e automação com IA. Aberta a oportunidades iniciais em AppSec.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const expertise = [
    {
      number: "01",
      title: "Segurança Web e APIs",
      description:
        "Investigo como aplicações, APIs e fluxos de negócio podem falhar, identificando pontos fracos e vetores de ataque.",
    },
    {
      number: "02",
      title: "Vulnerability Assessment",
      description:
        "Avalio vulnerabilidades de forma estruturada, priorizando findings por impacto e contexto do negócio.",
    },
    {
      number: "03",
      title: "Autenticação, autorização e lógica de negócio",
      description:
        "Analiso controles de acesso, sessões e regras de negócio que, se mal implementados, expõem aplicações.",
    },
    {
      number: "04",
      title: "Integrações e superfícies de ataque",
      description:
        "Mapeio integrações de terceiros e pontos de entrada que aumentam a superfície de ataque de um sistema.",
    },
  ];

  const tools = [
    { label: "OS", value: "Debian / Linux" },
    { label: "Linguagem", value: "Python" },
    { label: "Workflow", value: "Automação" },
    { label: "Aceleração", value: "IA" },
  ];

  const projects = [
    {
      icon: ShieldAlert,
      repo: "appsec-api-lab",
      title: "API insegura e correções de segurança",
      description:
        "API de usuários, pedidos e produtos em duas versões — vulnerable-version e secure-version — com autenticação, perfis, painel administrativo e consulta por ID.",
      focus: ["Autenticação", "IDOR / BOLA", "Exposição de dados", "Rate limiting"],
      priority: "Projeto principal",
    },
    {
      icon: ScanSearch,
      repo: "security-headers-analyzer",
      title: "Scanner de headers de segurança",
      description:
        "Ferramenta em Python para analisar CSP, HSTS, X-Content-Type-Options, Referrer-Policy, flags de cookies e métodos HTTP, com saída em terminal, JSON e Markdown.",
      focus: ["Python", "CLI", "Cookies", "Export JSON/MD"],
      priority: "Prioridade 2",
    },
    {
      icon: FileText,
      repo: "vulnerability-assessment-reporter",
      title: "Gerador de relatório de Vulnerability Assessment",
      description:
        "Transforma achados estruturados em relatório Markdown com resumo executivo, tabela de findings, severidade, impacto, evidência e recomendações.",
      focus: ["Severidade", "Impacto", "Documentação", "Markdown"],
      priority: "Prioridade 3",
    },
    {
      icon: Workflow,
      repo: "business-logic-security-lab",
      title: "Laboratório de lógica de negócio",
      description:
        "Cenários como reuso de cupom, alteração de preço, aprovação fora de ordem e escalonamento de permissões, cada um com regra esperada, impacto, correção e teste de regressão.",
      focus: ["Regras de negócio", "Reprodução", "Correção", "Regressão"],
      priority: "Em planejamento",
    },
    {
      icon: FlaskConical,
      repo: "vulnerable-api-security-lab",
      title: "API Security Lab",
      description:
        "Laboratório local com endpoints propositalmente vulneráveis e seguros, organizado por autenticação, autorização, rate limiting, validação e lógica de negócio.",
      focus: ["OWASP API Top 10", "Cenários", "Validação", "Relatórios"],
      priority: "Em planejamento",
    },
    {
      icon: GitCompareArrows,
      repo: "endpoint-surface-analyzer",
      title: "Ferramenta de análise de endpoints",
      description:
        "Compara endpoints documentados em Swagger/OpenAPI com os presentes em um ambiente local: métodos, parâmetros, respostas e rotas sem autenticação aparente.",
      focus: ["OpenAPI", "Diff de rotas", "Métodos HTTP", "Escopo local"],
      priority: "Em planejamento",
    },
    {
      icon: BrainCircuit,
      repo: "local-ai-security-notes",
      title: "Assistente local com Llama 3 para documentação",
      description:
        "Uso de Llama 3 local para organizar notas, resumir evidências e gerar modelos de relatório. A validação técnica e as conclusões permanecem manuais.",
      focus: ["Llama 3 local", "Notas", "Resumo", "Sem dados sensíveis"],
      priority: "Em planejamento",
    },
  ];

  const references = [
    { source: "OWASP", detail: "Guias, Top 10 e boas práticas de segurança web." },
    { source: "PortSwigger Web Security Academy", detail: "Labs práticos de vulnerabilidades web e de API." },
    { source: "Laboratórios controlados", detail: "Prática em ambientes autorizados e CTFs." },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        {/* Header / Hero */}
        <header className="space-y-6 border-b border-border pb-12">
          <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-primary">
            <span className="inline-block size-2 rounded-full bg-primary" aria-hidden="true" />
            <span>perfil ativo</span>
          </div>

          <div className="flex justify-center py-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-primary/40 blur-lg" aria-hidden="true" />
              <img
                src={cyberpunkProfile}
                alt="Ilustração cyberpunk de Thatiane Malheiros, analista de segurança de aplicações"
                width={224}
                height={224}
                className="relative z-10 size-56 rounded-full object-cover ring-2 ring-primary/80"
              />
            </div>
          </div>

          <h1 className="font-mono text-4xl font-semibold tracking-tight sm:text-5xl">
            Thatiane Malheiros
          </h1>

          <p className="text-balance text-lg leading-relaxed text-muted-foreground">
            AppSec | Segurança Web e APIs | Vulnerability Assessment | Automação com IA
          </p>

          <p className="text-pretty leading-relaxed text-muted-foreground">
            Investigo como aplicações, APIs e fluxos de negócio podem falhar — especialmente em
            autenticação, permissões e lógica de negócio. Utilizo Debian/Linux, Python, automação e IA
            como ferramentas para analisar cenários, reduzir tarefas repetitivas e transformar
            problemas complexos em processos mais eficientes. Meu aprendizado é baseado em estudos,
            projetos práticos, OWASP, PortSwigger Web Security Academy e laboratórios controlados e
            autorizados.
          </p>
        </header>

        {/* Expertise */}
        <section className="space-y-6 border-b border-border py-12">
          <div className="flex items-baseline justify-between">
            <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
              Áreas de atuação
            </h2>
            <span className="font-mono text-xs text-muted-foreground">04 pilares</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {expertise.map((item) => (
              <article
                key={item.number}
                className="rounded-xl bg-card p-5 ring-1 ring-border transition-colors hover:ring-primary/40"
              >
                <span className="font-mono text-xs text-primary">{item.number}</span>
                <h3 className="mt-3 font-mono text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="space-y-6 border-b border-border py-12">
          <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Ferramentas e metodologia
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {tools.map((tool) => (
              <div
                key={tool.label}
                className="rounded-lg bg-secondary px-4 py-3 text-center ring-1 ring-border"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {tool.label}
                </p>
                <p className="mt-1 font-mono text-sm font-medium text-secondary-foreground">
                  {tool.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Terminal */}
        <section className="space-y-6 border-b border-border py-12">
          <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            $ terminal
          </h2>

          <div className="overflow-hidden rounded-xl bg-[#050505] ring-1 ring-border">
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-[#0a0a0a] px-4 py-3">
              <DebianSwirl className="size-4 text-primary" />
              <span className="size-3 rounded-full bg-white" aria-hidden="true" />
              <span className="size-3 rounded-full bg-muted-foreground" aria-hidden="true" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">thatiane@debian:~/appsec</span>
            </div>

            {/* Terminal body */}
            <div className="space-y-1 p-5 font-mono text-sm leading-relaxed">
              <p>
                <span className="text-primary">thatiane@debian</span>
                <span className="text-white">:</span>
                <span className="text-white/70">~/appsec</span>
                <span className="text-primary">$</span>{" "}
                <span className="text-foreground">whoami</span>
              </p>
              <p className="pl-[11ch] text-muted-foreground">thatiane-malheiros</p>

              <p className="pt-2">
                <span className="text-primary">thatiane@debian</span>
                <span className="text-white">:</span>
                <span className="text-white/70">~/appsec</span>
                <span className="text-primary">$</span>{" "}
                <span className="text-foreground">cat stack.txt</span>
              </p>
              <p className="pl-[11ch] text-muted-foreground">Debian / Linux</p>
              <p className="pl-[11ch] text-muted-foreground">Python</p>
              <p className="pl-[11ch] text-muted-foreground">Automação</p>
              <p className="pl-[11ch] text-muted-foreground">IA como ferramenta</p>

              <p className="pt-2">
                <span className="text-primary">thatiane@debian</span>
                <span className="text-white">:</span>
                <span className="text-white/70">~/appsec</span>
                <span className="text-primary">$</span>{" "}
                <span className="text-foreground">
                  python3 security_headers.py --url http://localhost:8000
                </span>
              </p>
              <p className="pl-[11ch] text-muted-foreground">
                [INFO] scanning http://localhost:8000 ...
              </p>
              <p className="pl-[11ch] text-muted-foreground">
                [OK] report saved to ./reports/headers_2026-08-31.json
              </p>

              <p className="pt-2">
                <span className="text-primary">thatiane@debian</span>
                <span className="text-white">:</span>
                <span className="text-white/70">~/appsec</span>
                <span className="text-primary">$</span>{" "}
                <span className="text-foreground">echo $STATUS</span>
              </p>
              <p className="pl-[11ch] text-muted-foreground">
                AppSec em construção · aberta a oportunidades iniciais
              </p>

              <p className="pt-2">
                <span className="text-primary">thatiane@debian</span>
                <span className="text-white">:</span>
                <span className="text-white/70">~/appsec</span>
                <span className="text-primary">$</span>{" "}
                <span className="inline-block h-4 w-2 animate-pulse bg-primary" aria-hidden="true" />
              </p>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="space-y-6 border-b border-border py-12">
          <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Base de aprendizado
          </h2>

          <ul className="divide-y divide-border rounded-xl bg-card ring-1 ring-border">
            {references.map((ref, index) => (
              <li
                key={ref.source}
                className="flex items-start gap-4 px-5 py-4 first:rounded-t-xl last:rounded-b-xl"
              >
                <span className="mt-0.5 font-mono text-xs text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-mono text-sm font-medium">{ref.source}</p>
                  <p className="text-sm text-muted-foreground">{ref.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Projetos */}
        <section className="space-y-6 border-b border-border py-12">
          <div className="flex items-baseline justify-between">
            <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
              Projetos em construção
            </h2>
            <span className="font-mono text-xs text-muted-foreground">
              {String(projects.length).padStart(2, "0")} repositórios
            </span>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            Roadmap dos laboratórios e ferramentas que estou desenvolvendo. Os repositórios serão
            publicados aqui conforme cada projeto ficar pronto — todos executados em ambientes
            próprios, controlados e autorizados.
          </p>

          <div className="grid gap-4">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.repo}
                  className="group rounded-xl bg-card p-5 ring-1 ring-border transition-colors hover:ring-primary/40"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary ring-1 ring-border">
                      <Icon className="size-5 text-primary" aria-hidden="true" />
                    </span>

                    <div className="min-w-0 flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-mono text-base font-semibold">{project.title}</h3>
                        <span className="rounded-full bg-secondary px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground ring-1 ring-border">
                          {project.priority}
                        </span>
                      </div>

                      <p className="font-mono text-xs text-primary">{project.repo}</p>

                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>

                      <ul className="flex flex-wrap gap-2 pt-1">
                        {project.focus.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-md bg-secondary px-2 py-1 font-mono text-[10px] text-secondary-foreground"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>

                      <p className="flex items-center gap-2 pt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        <span
                          className="inline-block size-1.5 rounded-full bg-primary/60"
                          aria-hidden="true"
                        />
                        repositório em breve
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="space-y-6 pt-12 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            Disponível para oportunidades
          </p>

          <h2 className="text-balance font-mono text-2xl font-semibold leading-tight sm:text-3xl">
            Estou construindo minha trajetória em AppSec e aberta a oportunidades iniciais na área.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:contato@thatianemalheiros.com"
              className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Entrar em contato
            </a>
            <a
              href="https://www.linkedin.com/in/thatianemalheiros/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-secondary px-6 py-2.5 font-mono text-sm font-medium text-secondary-foreground ring-1 ring-border transition-colors hover:bg-secondary/80"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-secondary px-6 py-2.5 font-mono text-sm font-medium text-secondary-foreground ring-1 ring-border transition-colors hover:bg-secondary/80"
            >
              GitHub
            </a>
          </div>
        </section>

        <footer className="pt-16 text-center font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Thatiane Malheiros · AppSec
        </footer>
      </div>
    </main>
  );
}
