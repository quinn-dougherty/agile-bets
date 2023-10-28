import github from '@actions/github'
import * as io from './io'
import { type ManifoldActionInputs } from './types'
import { createMarket } from './manifold'

/** Assuming just manifold, no fatebook, for MVP */
export async function main (): Promise<void> {
  const inputs: ManifoldActionInputs | undefined = io.getManifoldInputs()
  if (inputs !== undefined) {
    const returnData = createMarket(inputs).then(data => { console.log(data); return data }).catch(err => { console.error(err); return null })
    const octokit = github.getOctokit(inputs.token)
    const octoIssuesInput = { user: process.env.REPOSITORY_OWNER, repo: process.env.GITHUB_REPOSITORY }
    const assignees = octokit.rest.issues.listAssignees(octoIssuesInput)
  } else {
    process.exitCode = 1
    const returnData = null
  }
}
