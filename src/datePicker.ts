import { add } from 'date-fns'

/**
 * Time in the future given in days or weeks.
 * Defaults to 2w.
 * */
export function inTheFuture (code: string): Date {
  const amount = parseInt(code.slice(0, -1), 10)
  const unit = code.slice(-1)

  const now = new Date()

  switch (unit) {
    case 'd':
      return add(now, { days: amount })
    case 'w':
      return add(now, { weeks: amount })
      // ... add more cases as needed
    default:
      return add(now, { weeks: 2 })
  }
}
