/**
 * ddCmdHelp.ts
 * author: borysn
 * license: MIT
 */
import * as R from 'ramda'

/**
 * text type for cmd help display
 */
export class ddCmdHelp {

  // properties
  private readonly alias: string
  private readonly description: string
  private readonly usage: string

  /**
   * constructor
   *
   * @param alias          command alias(')
   * @param description    command description
   * @param usage          command usage
   */
  constructor(alias: string, description: string, usage: string) {
    this.alias = alias
    this.description = description
    this.usage = usage
  }

  /**
   * get alias for command
   *
   * @return    string containing command alias
   */
  public getAlias(): string { return this.alias }

  /**
   * get description for command
   *
   * @return    string containing command description
   */
  public getDescription(): string { return this.description }

  /**
   * get usage for command
   *
   * @return    string containing command usage
   */
  public getUsage(): string { return this.usage }

  /**
   * get full help string
   *
   * @return    string containing alias('), description, and usage info for the command
   */
  public getFullHelp(): string {
    return this.alias.concat(`\n`, this.description, `\n`, this.usage)
  }

}
