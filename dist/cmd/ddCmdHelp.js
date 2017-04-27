"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ddCmdHelp.ts
 * author: borysn
 * license: MIT
 */
const R = require("ramda");
/**
 * text type for cmd help display
 */
class ddCmdHelp {
    /**
     * constructor
     *
     * @param alias          command alias(')
     * @param description    command description
     * @param usage          command usage
     */
    constructor(alias, description, usage) {
        this.alias = alias;
        this.description = description;
        this.usage = usage.slice(0);
    }
    /**
     * get alias for command
     *
     * @return    string containing command alias
     */
    getAlias() { return this.alias; }
    /**
     * get description for command
     *
     * @return    string containing command description
     */
    getDescription() { return this.description; }
    /**
     * get usage for command
     *
     * @return    string containing command usage
     */
    getUsage() {
        return R.reduce((use, conc) => {
            return use += conc;
        }, "\n", this.usage);
    }
}
exports.ddCmdHelp = ddCmdHelp;
//# sourceMappingURL=ddCmdHelp.js.map