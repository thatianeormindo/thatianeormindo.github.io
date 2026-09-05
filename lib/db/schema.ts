import { pgTable, serial, smallint, text, timestamp } from 'drizzle-orm/pg-core'

export const feedback = pgTable('feedback', {
  id: serial('id').primaryKey(),
  rating: smallint('rating').notNull(),
  reaction: text('reaction'),
  comment: text('comment'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})

export type Feedback = typeof feedback.$inferSelect
