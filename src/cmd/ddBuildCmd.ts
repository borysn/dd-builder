import { ddCmd } from './ddCmd'
import { ddCmdHelp } from './ddCmdHelp'

/**
 * command to build desktop dialogues
 */
export class ddBuildCmd extends ddCmd {

  /**
   * constructor
   *
   * @param help    command help object
   */
  constructor(protected help: ddCmdHelp) {
    super(help)
  }

  /**
   * run command
   *
   * @param cmd     optional sub-command
   * @param rest    remainig sub-commands and args
   * @returns       void
   */
  public exec(cmd: string, ...rest: string[]): void {
    // TODO impl
  }

}
