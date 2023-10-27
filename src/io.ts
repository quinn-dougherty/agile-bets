import * as core from '@actions/core'
import { type ActionInputs, type ManifoldActionInputs, type FatebookActionInputs, type Platform } from './types'

export function getActionInputs (): ActionInputs | undefined {
  const token: string = core.getInput('repo-token')
  const assignee: string = core.getInput('assignee')
  const ticketNumber: string = core.getInput('ticket-number')
  const ticketName: string = core.getInput('ticket-name')
  const close: string = core.getInput('close')

  const actionInput: ActionInputs = {
    token,
    assignee,
    close,
    ticketNumber,
    ticketName
  }
  return actionInput
}

export function getManifoldInputs (): ManifoldActionInputs | undefined {
  const baseActionInputs = getActionInputs()
  if (baseActionInputs !== undefined) {
    const manifoldApiKey: string = core.getInput('manifold-key')
    const manifoldInputs: ManifoldActionInputs = {
      ...baseActionInputs,
      manifoldApiKey
    }
    return manifoldInputs
  } else {
    return undefined
  }
}

export function getFatebookInputs (): FatebookActionInputs | undefined {
  // TODO
  return undefined
}

export function getPlatform (): Platform | undefined {
  const platform: string = core.getInput('platform')
  if (platform === 'manifold') {
    return 'manifold' as unknown as Platform
  } else if (platform === 'fatebook') {
    return 'fatebook' as unknown as Platform
  } else {
    return undefined
  }
}
