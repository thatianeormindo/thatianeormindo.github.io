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
  ExternalLink,
} from "lucide-react";

// Ícone minimalista de terminal Debian
function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="8" y="8" width="48" height="48" rx="2" />
      <path d="M20 28l8 8-8 8" />
      <line x1="32" y1="44" x2="44" y2="44" />
    </svg>
  );
}

export const Route = createFileRoute("/index_old2")({
  head: () => ({
    meta: [
      { title: "Thatiane Malheiros | Application Security & Vulnerability Assessment" },
      {
        name: "description",
        content:
          "Application Security specialist. Web & API Security, Vulnerability Assessment, Authentication & Authorization. Practical projects in AppSec.",
      },
      { property: "og:title", content: "Thatiane Malheiros | Application Security" },
      {
        property: "og:description",
        content:
          "Web & API Security, Vulnerability Assessment, Authentication & Automation with AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Thatiane Malheiros | Application Security",
      },
      {
        name: "twitter:description",
        content:
          "Web & API Security, Vulnerability Assessment, Authentication & Automation with AI.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const projects = [
    {
      icon: ShieldAlert,
      repo: "appsec-api-lab",
      title: "API insegura e correções de segurança",
      objective: "Demonstrar vulnerabilidades comuns em APIs e suas soluções",
      vulnerability: "IDOR, Autenticação inadequada, Exposição de dados, Rate limiting",
      tools: ["Python", "FastAPI", "JWT", "PostgreSQL"],
      status: "Publicado",
      url: "#",
      isPrimary: true,
    },
    {
      icon: ScanSearch,
      repo: "security-headers-analyzer",
      title: "Security Headers Analyzer",
      objective: "Analisar e reportar headers de segurança de aplicações web",
      vulnerability: "CSP, HSTS, X-Content-Type-Options, Cookies inseguros",
      tools: ["Python", "CLI", "JSON/Markdown export"],
      status: "Publicado",
      url: "#",
      isPrimary: true,
    },
    {
      icon: FileText,
      repo: "vulnerability-assessment-reporter",
      title: "Gerador de Relatório de VA",
      objective: "Transformar findings estruturados em relatório profissional",
      vulnerability: "Documentação, Severidade, Impacto, Recomendações",
      tools: ["Python", "Markdown", "Template estruturado"],
      status: "Publicado",
      url: "#",
      isPrimary: true,
    },
    {
      icon: Workflow,
      repo: "business-logic-security-lab",
      title: "Laboratório de Lógica de Negócio",
      objective: "Explorar e corrigir vulnerabilidades de lógica de negócio",
      vulnerability: "Reuso de cupom, Alteração de preço, Escalonamento de permissões",
      tools: ["Node.js", "PostgreSQL", "Testes de regressão"],
      status: "Em planejamento",
      url: "#",
      isPrimary: false,
    },
    {
      icon: FlaskConical,
      repo: "vulnerable-api-security-lab",
      title: "Vulnerable API Security Lab",
      objective: "Laboratório prático com endpoints vulneráveis por categoria",
      vulnerability: "OWASP API Top 10, Validação, Autorização",
      tools: ["Python", "Docker", "Postman"],
      status: "Em planejamento",
      url: "#",
      isPrimary: false,
    },
    {
      icon: GitCompareArrows,
      repo: "endpoint-surface-analyzer",
      title: "Endpoint Surface Analyzer",
      objective: "Mapear superfície de ataque comparando documentação vs realidade",
      vulnerability: "Rotas não documentadas, Métodos HTTP, Escopo",
      tools: ["Python", "OpenAPI", "Diff"],
      status: "Em planejamento",
      url: "#",
      isPrimary: false,
    },
  ];

  const writeups = [
    {
      title: "Análise de Vulnerabilidades em JWT",
      topic: "Autenticação",
      date: "2026-08",
      difficulty: "Intermediário",
    },
    {
      title: "IDOR: Quando controle de acesso falha",
      topic: "Autorização",
      date: "2026-07",
      difficulty: "Intermediário",
    },
    {
      title: "Injeção SQL em APIs REST",
      topic: "Validação",
      date: "2026-06",
      difficulty: "Avançado",
    },
  ];

  const skills = [
    { category: "Linguagem", items: ["Python", "JavaScript/TypeScript", "Bash"] },
    { category: "Ferramentas", items: ["Burp Suite", "OWASP ZAP", "Postman", "Git"] },
    { category: "Conceitos", items: ["OWASP Top 10", "Threat modeling", "Secure coding"] },
    { category: "Plataforma", items: ["Debian/Linux", "Docker", "APIs REST"] },
  ];

  return (
    <main className="min-h-screen bg-black text-gray-100 antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black/95 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <TerminalIcon className="size-5 text-red-500" />
              <span className="font-mono text-sm font-semibold text-gray-100">Thatiane Malheiros</span>
            </div>
            <div className="hidden sm:flex items-center gap-6 font-mono text-sm text-gray-400">
              <a href="#projetos" className="hover:text-red-500 transition-colors duration-200">
                Projetos
              </a>
              <a href="#write-ups" className="hover:text-red-500 transition-colors duration-200">
                Write-ups
              </a>
              <a href="#skills" className="hover:text-red-500 transition-colors duration-200">
                Skills
              </a>
              <a href="#contato" className="hover:text-red-500 transition-colors duration-200">
                Contato
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="border-b border-gray-800 px-6 py-20 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900/50 px-3 py-1">
                <span className="flex size-2 rounded-full bg-red-500" aria-hidden="true" />
                <span className="font-mono text-xs text-gray-400">Disponível para oportunidades</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-50 leading-tight">
                Thatiane Malheiros
              </h1>

              <p className="text-xl sm:text-2xl font-light text-gray-300">
                Application Security · Web & API Security · Vulnerability Assessment
              </p>

              <p className="text-base leading-relaxed text-gray-400 max-w-2xl">
                Especialista em segurança de aplicações com foco em análise de vulnerabilidades, testes de segurança em APIs e revisão de autenticação. Construo laboratórios práticos, escrevo relatórios técnicos e automatizo processos de análise usando Python e IA.
              </p>

              <p className="text-sm text-gray-500">
                Stack: Python · Linux · Automação · OWASP · PortSwigger Academy · Laboratórios autorizados
              </p>
            </div>

            {/* CTA Principal */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-mono text-sm font-semibold text-white transition-all duration-200 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
              >
                Ver Projetos
                <ExternalLink className="size-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 font-mono text-sm font-semibold text-gray-300 transition-all duration-200 hover:border-red-600 hover:text-red-500 hover:bg-red-600/5"
              >
                GitHub
                <Github className="size-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 font-mono text-sm font-semibold text-gray-300 transition-all duration-200 hover:border-red-600 hover:text-red-500 hover:bg-red-600/5"
              >
                LinkedIn
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="border-b border-gray-800 px-6 py-20 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-50">Projetos Práticos</h2>
              <p className="text-gray-400">
                Laboratórios, ferramentas e análises que desenvolvo para aprofundar conhecimento em AppSec.
              </p>
            </div>

            {/* Projetos em destaque */}
            <div className="space-y-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-red-500">
                Principais
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {projects
                  .filter((p) => p.isPrimary)
                  .map((project) => {
                    const Icon = project.icon;
                    return (
                      <article
                        key={project.repo}
                        className="group rounded-lg border border-gray-800 bg-gray-900/30 p-6 transition-all duration-300 hover:border-red-600/50 hover:bg-gray-900/50"
                      >
                        <div className="flex items-start gap-4">
                          <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-2.5">
                            <Icon className="size-5 text-red-500" aria-hidden="true" />
                          </div>
                          <div className="min-w-0 flex-1 space-y-3">
                            <div>
                              <h4 className="font-semibold text-gray-50 group-hover:text-red-500 transition-colors">
                                {project.title}
                              </h4>
                              <p className="font-mono text-xs text-gray-500 mt-1">{project.repo}</p>
                            </div>

                            <div className="space-y-2 text-sm text-gray-400">
                              <p>
                                <span className="text-gray-600">Objetivo:</span> {project.objective}
                              </p>
                              <p>
                                <span className="text-gray-600">Foco:</span> {project.vulnerability}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {project.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="rounded-md bg-gray-800/50 px-2 py-1 font-mono text-xs text-gray-400"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>

                            <a
                              href={project.url}
                              className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-red-500 hover:text-red-400 transition-colors pt-2"
                            >
                              Ver no GitHub
                              <ExternalLink className="size-3" />
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
              </div>
            </div>

            {/* Projetos em planejamento */}
            <div className="space-y-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-gray-600">
                Em planejamento
              </h3>
              <div className="grid gap-4">
                {projects
                  .filter((p) => !p.isPrimary)
                  .map((project) => {
                    const Icon = project.icon;
                    return (
                      <article
                        key={project.repo}
                        className="group rounded-lg border border-gray-800/50 bg-gray-900/10 p-4 transition-all hover:border-gray-700"
                      >
                        <div className="flex items-start gap-3">
                          <div className="rounded-lg bg-gray-800/30 p-2">
                            <Icon className="size-4 text-gray-600" aria-hidden="true" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-gray-300 text-sm">{project.title}</h4>
                            <p className="font-mono text-xs text-gray-600 mt-0.5">{project.repo}</p>
                          </div>
                          <span className="rounded-full bg-gray-800/50 px-2 py-1 font-mono text-xs text-gray-500">
                            {project.status}
                          </span>
                        </div>
                      </article>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>

        {/* Write-ups e Artigos */}
        <section id="write-ups" className="border-b border-gray-800 px-6 py-20 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-50">Write-ups & Análises</h2>
              <p className="text-gray-400">
                Relatórios técnicos e análises de vulnerabilidades em laboratórios controlados.
              </p>
            </div>

            <div className="grid gap-4">
              {writeups.map((writeup) => (
                <article
                  key={writeup.title}
                  className="group rounded-lg border border-gray-800 bg-gray-900/30 p-5 transition-all hover:border-red-600/50 hover:bg-gray-900/50"
                >
                  <div className="flex items-start justify-between">
                    <div className="min-w-0 flex-1 space-y-2">
                      <h3 className="font-semibold text-gray-50 group-hover:text-red-500 transition-colors">
                        {writeup.title}
                      </h3>
                      <div className="flex items-center gap-3 font-mono text-xs text-gray-500">
                        <span className="px-2 py-1 rounded bg-gray-800/50 text-gray-400">{writeup.topic}</span>
                        <span>{writeup.date}</span>
                        <span className="text-gray-600">Dificuldade: {writeup.difficulty}</span>
                      </div>
                    </div>
                    <ExternalLink className="size-4 text-gray-600 group-hover:text-red-500 transition-colors" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-b border-gray-800 px-6 py-20 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-50">Competências</h2>
              <p className="text-gray-400">
                Ferramentas, linguagens e conhecimentos técnicos aplicados em AppSec.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="space-y-4">
                  <h3 className="font-semibold text-gray-50">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-gray-700 bg-gray-900/50 px-3 py-2 font-mono text-sm text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="px-6 py-20 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-4xl space-y-12 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-50">
                Vamos conversar sobre segurança?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Estou aberta a oportunidades em Application Security, colaborações em projetos e discussões técnicas.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:thatiane@example.com"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-mono text-sm font-semibold text-white transition-all duration-200 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
              >
                <Mail className="size-4" />
                Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 font-mono text-sm font-semibold text-gray-300 transition-all duration-200 hover:border-red-600 hover:text-red-500 hover:bg-red-600/5"
              >
                <Linkedin className="size-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 font-mono text-sm font-semibold text-gray-300 transition-all duration-200 hover:border-red-600 hover:text-red-500 hover:bg-red-600/5"
              >
                <Github className="size-4" />
                GitHub
              </a>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="font-mono text-xs text-gray-600">
                © {new Date().getFullYear()} Thatiane Malheiros · Application Security
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
