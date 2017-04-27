/**
 * ddHelpCmd.ts
 * author: borysn
 * license: MIT
 */
import { ddCmd } from './ddCmd';
import { ddCmdHelp } from './ddCmdHelp';
export declare class ddHelpCmd extends ddCmd {
    protected readonly help: ddCmdHelp;
    /**
     * constructor
     *
     * @param help    command help object
     */
    constructor(help: ddCmdHelp);
    /**
     * run command
     *
     * @param cmd     optional sub-command
     * @param rest    remainig sub-commands and args
     * @returns       void
     */
    exec(cmd: string, ...rest: Array<string>): void;
}
