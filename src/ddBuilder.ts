#!/usr/bin/env node

/**
 * ddBuilder.ts
 * author: borysn
 * license: MIT
 */

import * as ddBuilder from 'commander'
import * as chalk from 'chalk'

import { ddCmdFactory } from './cmd/ddCmdFactory'
import { ddLogger } from './log/ddLogger'

// logger
const log: ddLogger = ddLogger.getInstance()

/**
 * ddBuilder version
 */
ddBuilder.version('0.0.1')

/**
 * help
 */
ddBuilder
  .command('help [cmd] [rest...]')
  .alias('h')
  .alias('-h')
  .alias('--help')
  .action((cmd, rest) => {
    // log
    log.info('help cmd invoked')
    // run help command
    ddCmdFactory.getHelpCmd().exec(cmd, rest)
    // successful exit
    process.exit(0);
  })

/**
 * build
 */
ddBuilder
  .command('build [cmd] [rest...]')
  .alias('b')
  .alias('-b')
  .alias('--build')
  .action((cmd, rest) => {
    // log
    log.info('build cmd invoked')
    // run build command
    ddCmdFactory.getBuildCmd().exec(cmd, rest)
    // successful exct
    process.exit(0);
  })

/**
 * run ddBuilder
 */
ddBuilder.parse(process.argv)
