import * as script from 'commander';
import * as chalk from 'chalk';

import { ddCmd } from './cmd/ddCmd';
import { ddBuildCmd } from './cmd/ddBuildCmd';
import { ddHelpCmd } from './cmd/ddHelpCmd';
import { ddCmdHelp } from './cmd/ddCmdHelp';

/**
 * script version
 */
script.version('1.0.0');

/**
 * help
 */
script
  .command('help <cmd>')
  .alias('h')
  .alias('-h')
  .alias('--h')
  .action((cmd) => {
    let help: ddCmd = new ddHelpCmd(new ddCmdHelp("", "", []));
    help.exec(cmd);
  });

/**
 * build
 */
script
  .command('build <dir>')
  .alias('b')
  .alias('-b')
  .alias('--build')
  .action((dir) => {
    let build: ddCmd = new ddBuildCmd(new ddCmdHelp("", "", []));
    build.exec(dir);
  });

/**
 * run script
 */
script.parse(process.argv);
