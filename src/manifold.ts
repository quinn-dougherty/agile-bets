import { inTheFuture } from './datePicker'
import type { ManifoldActionInputs } from './types'
import axios from 'axios'
import { format } from 'date-fns'

function generateQuestion (assignee: string, ticketNumber: string, dueDate: string): string {
  return `Will ${assignee} complete ticket #${ticketNumber} by ${dueDate}?`
}

function generateDescription (assignee: string, ticketNumber: string, dueDate: string, ticketName: string): string {
  return `Resolves yes if ${assignee} completes ticket #${ticketNumber} by ${dueDate}.\n\n#${ticketNumber}: ${ticketName}`
}

export async function createMarket (inputs: ManifoldActionInputs): Promise<any> {
  const closeDate = inTheFuture(inputs.close)
  const dueDate = format(closeDate, 'YYYY-MM-DD')
  const question = generateQuestion(inputs.assignee, inputs.ticketNumber, dueDate)
  const description = generateDescription(inputs.assignee, inputs.ticketNumber, dueDate, inputs.ticketName)

  const url = 'https://manifold.markets/api/v0/market'
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Key ${inputs.manifoldApiKey}`
  }
  const data = {
    outcomeType: 'BINARY',
    question,
    description,
    closeTime: closeDate.getTime()
  }

  try {
    const response = await axios.post(url, data, { headers })
    return response.data
  } catch (error) {
    console.error('Error creating market:', error)
    throw error
  }
}

// Usage example:
// const inputs: ActionInputs = { ... };
// createMarket(inputs).then(data => console.log(data)).catch(err => console.error(err));
