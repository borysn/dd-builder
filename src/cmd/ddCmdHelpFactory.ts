/**
 * ddCmdHelpFactory.ts
 * author: borysn
 * license: MIT
 */

import * as R from 'ramda'

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
    // pulling from cmds.yaml
    let propSet: string = 'cmds'

    // get alias string
    let alias: string = R.join(', ',
      ddCmdHelpFactory.props.getPropValue(propSet, `ddBuilder.cmd.${cmd}.alias`))

    // get usage string
    let usage: string = R.join('\n',
      ddCmdHelpFactory.props.getPropValue(propSet, `ddBuilder.cmd.${cmd}.usage`))

    // get description
    let description: string = R.join(`\n`,
      ddCmdHelpFactory.props.getPropValue(propSet, `ddBuilder.cmd.${cmd}.description`))

    // return ddCmdHelp object
    return new ddCmdHelp(alias, description, usage)
  }

}
