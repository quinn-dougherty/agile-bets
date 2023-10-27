import { inTheFuture } from './datePicker'
import { FatebookActionInputs } from './types'
import { format } from 'date-fns'

export function resolveBy (close: string): string {
  const closeDate = inTheFuture(close)
  return `RESOLUTION_DATE_${format(closeDate, 'YYYY-MM-DD')}`
}
