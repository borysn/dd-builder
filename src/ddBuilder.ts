import * as script from 'commander';
import * as chalk from 'chalk';

import { ddCmd } from './cmd/ddCmd';
import { ddBuildCmd } from './cmd/ddBuildCmd';
import { ddHelpCmd } from './cmd/ddHelpCmd';
import { ddCmdHelp } from './cmd/ddCmdHelp';

/**
 * script version
 */
script.version('0.0.1');

/**
 * help
 */
script
  .command('help <cmd> [rest...]')
  .alias('h')
  .alias('-h')
  .alias('--h')
  .action((cmd, rest) => {
    let help: ddCmd = new ddHelpCmd(new ddCmdHelp("", "", []));
    help.exec(cmd, rest);
  });

/**
 * build
 */
script
  .command('build <cmd> [rest...]')
  .alias('b')
  .alias('-b')
  .alias('--build')
  .action((cmd, rest) => {
    let build: ddCmd = new ddBuildCmd(new ddCmdHelp("", "", []));
    build.exec(cmd, rest);
  });

/**
 * run script
 */
script.parse(process.argv);
