import * as bin from './index';

type HelpObject = {
    description: string;
    syntax: string;
    manpage: string;
}

export const help = async (args: string[]): Promise<string> => {
    let command: string;
    let flags: string;
    const binObject = Object.keys(bin);

    if (args.length === 0) {
        return `${helpInfo.description}<br/>${helpInfo.syntax}`;
    }

    if (args.length === 1) {
        command = args[0];
        if (binObject.indexOf(command) === -1) {
            return `Error: invalid builtin command '${command}' specified. Valid entries are "${Object.keys(bin).join(', ')}"`;
        } else {
            return binObject[command].helpInfo ? binObject[command].helpInfo : "Command '${command}' has no help page.";
        }
    }

    flags = args[0];
}

const helpInfo: HelpObject = {
    description: "help - display information about builtin commands.",
    syntax: "help [-dms] [pattern ...]",
    manpage: `
NAME
    ##description
SYNOPSIS
    ##syntax
DESCRIPTION
    Display information about builtin commands.

    Displays brief summaries of builtin commands. If PATTERN IS
    specified, gives detailed help on all commands matching PATTERN,
    otherwise the list of help topics is printed.

    Options:
      -d        output short description for each topic
      -m        display usage in pseudo-manpage format
      -s        output only a short usage synopsis for each topic matching
        PATTERN

    Arguments:
      PATTERN   Pattern specifying a help topic
    `,
};