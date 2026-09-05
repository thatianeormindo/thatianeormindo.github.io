export const REACTION_IDS = ['incrivel', 'inspirador', 'util', 'relevante', 'motivador'] as const
export type ReactionId = (typeof REACTION_IDS)[number]

export const REACTION_LABELS: Record<ReactionId, string> = {
  incrivel: 'Incrível',
  inspirador: 'Inspirador',
  util: 'Útil',
  relevante: 'Relevante',
  motivador: 'Motivador',
}

export function isReactionId(value: string | null | undefined): value is ReactionId {
  return typeof value === 'string' && (REACTION_IDS as readonly string[]).includes(value)
}
