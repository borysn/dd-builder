"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const script = require("commander");
const ddBuildCmd_1 = require("./cmd/ddBuildCmd");
const ddHelpCmd_1 = require("./cmd/ddHelpCmd");
const ddCmdHelp_1 = require("./cmd/ddCmdHelp");
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
    let help = new ddHelpCmd_1.ddHelpCmd(new ddCmdHelp_1.ddCmdHelp("", "", []));
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
    let build = new ddBuildCmd_1.ddBuildCmd(new ddCmdHelp_1.ddCmdHelp("", "", []));
    build.exec(dir);
});
/**
 * run script
 */
script.parse(process.argv);
//# sourceMappingURL=ddBuilder.js.map