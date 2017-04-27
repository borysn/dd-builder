/**
 * ddCmd.ts
 * author: borysn
 * license: MIT
 */
import { ddCmdHelp } from './ddCmdHelp';
/**
 * ddBuilder command interface
 */
export declare abstract class ddCmd {
    protected help: ddCmdHelp;
    /**
     * constructor
     *
     * @param help    command help object
     */
    constructor(help: ddCmdHelp);
    /**
     * execute ddBuilder command
     *
     * @param cmd     optional sub-command
     * @param rest    remainig sub-commands and args
     * @returns       void
     */
    abstract exec(cmd?: string, ...rest: Array<string>): void;
    /**
     * get command help object for help display
     *
     * @returns    ddCmdHelp object detailing alias, description, and usage of the command
     */
    getHelp(): ddCmdHelp;
}
