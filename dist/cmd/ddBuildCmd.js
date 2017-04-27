"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ddCmd_1 = require("./ddCmd");
/**
 * command to build desktop dialogues
 */
class ddBuildCmd extends ddCmd_1.ddCmd {
    /**
     * constructor
     *
     * @param help    command help object
     */
    constructor(help) {
        super(help);
        this.help = help;
    }
    /**
     * run command
     *
     * @param cmd     optional sub-command
     * @param rest    remainig sub-commands and args
     * @returns       void
     */
    exec(cmd, ...rest) {
    }
}
exports.ddBuildCmd = ddBuildCmd;
//# sourceMappingURL=ddBuildCmd.js.map