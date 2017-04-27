import { ddCmd } from './ddCmd';
import { ddCmdHelp } from './ddCmdHelp';
/**
 * command to build desktop dialogues
 */
export declare class ddBuildCmd extends ddCmd {
    protected help: ddCmdHelp;
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
