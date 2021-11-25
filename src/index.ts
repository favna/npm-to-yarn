import { yarnToNPM } from './yarnToNpm'
import { npmToYarn } from './npmToYarn'

/**
 * Converts between npm and yarn command
 */
export default function convert(str: string, to: 'npm' | 'yarn'): string {
  const returnStr = str
  if (to === 'npm') {
    return returnStr.replace(/yarn(?: +([^&\n\r]*))?/gm, yarnToNPM)
  } else {
    return returnStr.replace(/npm(?: +([^&\n\r]*))?/gm, npmToYarn)
  }
}
