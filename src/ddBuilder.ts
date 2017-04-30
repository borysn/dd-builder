#!/usr/bin/env node

/**
 * ddBuilder.ts
 * author: borysn
 * license: MIT
 */

import * as ddBuilder from 'commander'
import * as chalk from 'chalk'

import { ddCmdFactory } from './cmd/ddCmdFactory'
import { ddLogger } from './logging/ddLogger'

// logger
const log: ddLogger = ddLogger.getInstance();

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
    log.info('help cmd invoked')
    ddCmdFactory.getHelpCmd().exec(cmd, rest)
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
    log.info('build cmd invoked')
    ddCmdFactory.getBuildCmd().exec(cmd, rest)
  })

/**
 * run ddBuilder
 */
ddBuilder.parse(process.argv)
