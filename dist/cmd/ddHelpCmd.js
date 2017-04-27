"use strict";
/**
 * ddHelpCmd.ts
 * author: borysn
 * license: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ddCmd_1 = require("./ddCmd");
class ddHelpCmd extends ddCmd_1.ddCmd {
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
exports.ddHelpCmd = ddHelpCmd;
//# sourceMappingURL=ddHelpCmd.js.map