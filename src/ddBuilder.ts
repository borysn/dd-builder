/**
 * ddBuilder.ts
 * author: borysn
 * license: MIT
 */

import * as script from 'commander'
import * as chalk from 'chalk'

import { ddCmd } from './cmd/ddCmd'
import { ddCmdFactory } from './cmd/ddCmdFactory'

/**
 * script version
 */
script.version('0.0.1')

/**
 * help
 */
script
  .command('help <cmd> [rest...]')
  .alias('h')
  .alias('-h')
  .alias('--h')
  .action((cmd, rest) => {
    ddCmdFactory.getHelpCmd().exec(cmd, rest)
  })

/**
 * build
 */
script
  .command('build <cmd> [rest...]')
  .alias('b')
  .alias('-b')
  .alias('--build')
  .action((cmd, rest) => {
    ddCmdFactory.getBuildCmd().exec(cmd, rest)
  })

/**
 * run script
 */
script.parse(process.argv)
