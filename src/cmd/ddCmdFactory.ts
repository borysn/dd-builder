/**
 * ddCmdFactory.ts
 * author: borysn
 * license: MIT
 */

import { ddBuildCmd } from './ddBuildCmd'
import { ddHelpCmd } from './ddHelpCmd'
import { ddCmdHelpFactory } from './ddCmdHelpFactory'

/**
 * factory to create dd-builder commands
 */
export class ddCmdFactory {

  // properties
  private static helpCmd: ddHelpCmd
  private static buildCmd: ddBuildCmd

  /**
   * get help command
   *
   * @returns    help command object
   */
  public static getHelpCmd(): ddHelpCmd {
    if (!ddCmdFactory.helpCmd) {
      ddCmdFactory.helpCmd = new ddHelpCmd(ddCmdHelpFactory.createHelpObj('help'))
    }
    return ddCmdFactory.helpCmd
  }

  /**
   * get help command
   *
   * @returns    help command object
   */
  public static getBuildCmd(): ddBuildCmd {
    if (!ddCmdFactory.buildCmd) {
      ddCmdFactory.buildCmd = new ddBuildCmd(ddCmdHelpFactory.createHelpObj('build'))
    }
    return ddCmdFactory.buildCmd
  }

}
