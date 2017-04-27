/**
 * text type for cmd help display
 */
export declare class ddCmdHelp {
    private readonly alias;
    private readonly description;
    private readonly usage;
    /**
     * constructor
     *
     * @param alias          command alias(')
     * @param description    command description
     * @param usage          command usage
     */
    constructor(alias: string, description: string, usage: Array<string>);
    /**
     * get alias for command
     *
     * @return    string containing command alias
     */
    getAlias(): string;
    /**
     * get description for command
     *
     * @return    string containing command description
     */
    getDescription(): string;
    /**
     * get usage for command
     *
     * @return    string containing command usage
     */
    getUsage(): string;
}
