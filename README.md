# Thatiane Malheiros — Portfolio 2.0

Portfólio em Next.js: Developer com IA, foco em AppSec.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

Abre em [http://localhost:3000](http://localhost:3000).

## Feedback (opcional)

A seção de feedback usa Postgres. Defina no ambiente:

```bash
DATABASE_URL=postgresql://...
```

Sem essa variável, o site abre normalmente; só o salvamento de feedback fica desativado.

## Deploy

Projeto Next.js — o caminho mais simples é [Vercel](https://vercel.com) conectado a este repositório. Configure `DATABASE_URL` nas variáveis de ambiente se quiser o formulário de feedback.
