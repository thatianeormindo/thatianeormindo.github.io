'use client'

import { useState, useTransition } from 'react'
import { Star, Flame, Sparkles, Wrench, Target, Heart, Send, Loader2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { submitFeedback, type FeedbackStats } from '@/app/actions/feedback'
import { REACTION_LABELS, type ReactionId } from '@/lib/reactions'

type Reaction = { id: ReactionId; icon: LucideIcon; color: string }

const reactions: Reaction[] = [
  { id: 'incrivel', icon: Flame, color: 'text-alert' },
  { id: 'inspirador', icon: Sparkles, color: 'text-neon' },
  { id: 'util', icon: Wrench, color: 'text-muted-foreground' },
  { id: 'relevante', icon: Target, color: 'text-cyan' },
  { id: 'motivador', icon: Heart, color: 'text-alert' },
]

type Status = { kind: 'idle' } | { kind: 'success' } | { kind: 'error'; message: string }

export function FeedbackSection({ stats }: { stats: FeedbackStats }) {
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [reaction, setReaction] = useState<ReactionId | null>(null)
  const [comment, setComment] = useState('')
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (rating === 0) {
      setStatus({ kind: 'error', message: 'Escolha uma avaliação de 1 a 5 estrelas.' })
      return
    }
    startTransition(async () => {
      const result = await submitFeedback({ rating, reaction, comment })
      if (result.ok) {
        setStatus({ kind: 'success' })
        setRating(0)
        setReaction(null)
        setComment('')
      } else {
        setStatus({ kind: 'error', message: result.error })
      }
    })
  }

  return (
    <section id="contato" className="rounded-xl border border-neon/30 bg-card p-6 lg:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neon">Feedback ao vivo</h2>
          <p className="mt-1 text-sm text-muted-foreground">Sua opinião me ajuda a evoluir. Obrigada!</p>
        </div>
        <FeedbackSummary stats={stats} />
      </div>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
          <fieldset>
            <legend className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Avaliação geral
            </legend>
            <div className="mt-3 flex gap-2" onMouseLeave={() => setHovered(0)}>
              {[1, 2, 3, 4, 5].map((n) => {
                const active = n <= (hovered || rating)
                return (
                  <button
                    key={n}
                    type="button"
                    aria-label={`${n} ${n === 1 ? 'estrela' : 'estrelas'}`}
                    aria-pressed={rating === n}
                    onClick={() => setRating(n)}
                    onMouseEnter={() => setHovered(n)}
                    className="flex flex-col items-center gap-1.5 text-muted-foreground transition-colors hover:text-neon"
                  >
                    <Star
                      className={`size-7 transition-colors ${active ? 'fill-neon text-neon' : ''}`}
                      aria-hidden="true"
                    />
                    <span className="text-xs">{n}</span>
                  </button>
                )
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Reação rápida
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {reactions.map(({ id, icon: Icon, color }) => {
                const active = reaction === id
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setReaction(active ? null : id)}
                    className={`flex w-20 flex-col items-center gap-2 rounded-lg border px-2 py-3 text-xs transition-colors ${
                      active
                        ? 'border-neon bg-neon-soft text-foreground'
                        : 'border-neon/25 bg-background/60 text-muted-foreground hover:border-neon/60'
                    }`}
                  >
                    <Icon className={`size-5 ${color}`} aria-hidden="true" />
                    {REACTION_LABELS[id]}
                  </button>
                )
              })}
            </div>
          </fieldset>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="comment" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Deixe um comentário
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            maxLength={1000}
            placeholder="Conte o que achou, sugestões, ideias ou o que mais te inspirou..."
            className="w-full resize-none rounded-lg border border-neon/30 bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:border-neon focus:outline-none"
          />
          <div className="flex items-center justify-end gap-3">
            {status.kind === 'success' && (
              <span role="status" className="text-xs text-cyan">
                Feedback enviado. Obrigada!
              </span>
            )}
            {status.kind === 'error' && (
              <span role="alert" className="text-xs text-alert">
                {status.message}
              </span>
            )}
            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center gap-2 rounded-md border border-neon/60 bg-neon-soft px-5 py-2.5 text-sm font-medium transition-colors hover:bg-neon/25 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPending ? 'Enviando...' : 'Enviar feedback'}
              {isPending ? (
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              ) : (
                <Send className="size-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

function FeedbackSummary({ stats }: { stats: FeedbackStats }) {
  if (stats.total === 0) {
    return (
      <p className="text-xs text-muted-foreground">Seja a primeira pessoa a deixar um feedback.</p>
    )
  }
  return (
    <div className="flex items-center gap-4 rounded-lg border border-neon/25 bg-background/60 px-4 py-2 text-xs">
      <div className="flex items-center gap-1.5">
        <Star className="size-4 fill-neon text-neon" aria-hidden="true" />
        <span className="font-semibold text-foreground">{stats.average.toFixed(1)}</span>
        <span className="text-muted-foreground">média</span>
      </div>
      <span className="h-4 w-px bg-neon/25" aria-hidden="true" />
      <span className="text-muted-foreground">
        <span className="font-semibold text-foreground">{stats.total}</span>{' '}
        {stats.total === 1 ? 'avaliação' : 'avaliações'}
      </span>
    </div>
  )
}
