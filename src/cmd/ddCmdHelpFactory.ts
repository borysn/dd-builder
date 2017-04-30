/**
 * ddCmdHelpFactory.ts
 * author: borysn
 * license: MIT
 */

import { ddCmdHelp } from './ddCmdHelp'
import { ddProps } from '../props/ddProps'

/**
 * factory to create help objects for commands
 */
export class ddCmdHelpFactory {

  // properties
  private static readonly props: ddProps = ddProps.getInstance()

  /**
   * create help object for given command
   */
  public static createHelpObj(cmd: string): ddCmdHelp {
    // get name
    let name: string = ddCmdHelpFactory.props.getPropValue(`ddBuilder.cmds.${cmd}.name`)[0]
    // get alias string
    let alias: string[] = ddCmdHelpFactory.props.getPropValue(`ddBuilder.cmds.${cmd}.alias`)
    // get usage string
    let usage: string[] = ddCmdHelpFactory.props.getPropValue(`ddBuilder.cmds.${cmd}.usage`)
    // get description
    let description: string[] = ddCmdHelpFactory.props.getPropValue(`ddBuilder.cmds.${cmd}.description`)

    // return ddCmdHelp object
    return new ddCmdHelp(name, alias, description, usage)
  }

}
