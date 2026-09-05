'use server'

import { db } from '@/lib/db'
import { feedback } from '@/lib/db/schema'
import { isReactionId } from '@/lib/reactions'
import { avg, count, desc } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

const MAX_COMMENT_LENGTH = 1000

export type SubmitFeedbackResult = { ok: true } | { ok: false; error: string }

export async function submitFeedback(input: {
  rating: number
  reaction: string | null
  comment: string
}): Promise<SubmitFeedbackResult> {
  const rating = Number(input.rating)
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return { ok: false, error: 'Escolha uma avaliação de 1 a 5 estrelas.' }
  }

  const reaction = isReactionId(input.reaction) ? input.reaction : null

  const comment = input.comment.trim().slice(0, MAX_COMMENT_LENGTH)

  try {
    await db.insert(feedback).values({
      rating,
      reaction,
      comment: comment.length > 0 ? comment : null,
    })
  } catch (error) {
    console.error('Failed to save feedback', error)
    return { ok: false, error: 'Não foi possível salvar. Tente novamente.' }
  }

  revalidatePath('/')
  return { ok: true }
}

export type FeedbackStats = {
  total: number
  average: number
  latest: { id: number; rating: number; reaction: string | null; comment: string | null; createdAt: Date }[]
}

export async function getFeedbackStats(): Promise<FeedbackStats> {
  if (!process.env.DATABASE_URL) {
    return { total: 0, average: 0, latest: [] }
  }

  try {
    const [summary] = await db
      .select({ total: count(), average: avg(feedback.rating) })
      .from(feedback)

    const latest = await db
      .select({
        id: feedback.id,
        rating: feedback.rating,
        reaction: feedback.reaction,
        comment: feedback.comment,
        createdAt: feedback.createdAt,
      })
      .from(feedback)
      .orderBy(desc(feedback.createdAt))
      .limit(3)

    return {
      total: summary?.total ?? 0,
      average: summary?.average ? Number(summary.average) : 0,
      latest,
    }
  } catch (error) {
    console.error('Failed to load feedback stats', error)
    return { total: 0, average: 0, latest: [] }
  }
}
