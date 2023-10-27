export interface ActionInputs {
  token: string
  ticketNumber: string
  ticketName: string
  assignee: string
  close: string
}

export interface ManifoldActionInputs extends ActionInputs {
  manifoldApiKey: string
}

export interface FatebookActionInputs extends ActionInputs {
  fatebookApiKey: string
  fatebookPrivate: boolean
  fatebookEstimate: number
}

export type Platform = 'manifold' | 'fatebook'
