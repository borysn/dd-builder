"use strict";
/**
 * ddCmd.ts
 * author: borysn
 * license: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ddBuilder command interface
 */
class ddCmd {
    /**
     * constructor
     *
     * @param help    command help object
     */
    constructor(help) {
        this.help = help;
    }
    /**
     * get command help object for help display
     *
     * @returns    ddCmdHelp object detailing alias, description, and usage of the command
     */
    getHelp() { return this.help; }
}
exports.ddCmd = ddCmd;
//# sourceMappingURL=ddCmd.js.map