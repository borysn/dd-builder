/**
 * ddHelpCmd.ts
 * author: borysn
 * license: MIT
 */

import { ddCmd } from './ddCmd'
import { ddCmdHelp } from './ddCmdHelp'

export class ddHelpCmd extends ddCmd {

  /**
   * constructor
   *
   * @param help    command help object
   */
  constructor(protected readonly help: ddCmdHelp) {
    super(help)
  }

  /**
   * run command
   *
   * @param cmd     optional sub-command
   * @param rest    remainig sub-commands and args
   * @returns       void
   */
  public exec(cmd: string, ...rest: Array<string>): void {
    // TODO impl
  }

}
