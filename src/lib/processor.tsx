import React, {useEffect} from "react";
import {Entry} from "@/lib/entry";
import {bin} from "@/lib/index";
import {ThemeObject, useTheme} from "@/lib/theme";

interface ProcessorContextType {
    history: Entry[];
    command: string;
    setHistory: (output: string) => void;
    setCommand: (cmd: string) => void;
    clearHistory: () => void;
    validCommands: string[];
}

const busState = {}

export function useHookOutsideContext(hook: string, args: string[]) {
    busState[hook] = args;
}

const ProcessorContext = React.createContext<ProcessorContextType>(null);
export const useProcessor = () => React.useContext(ProcessorContext);

const initialCommand = 'changelog';

export const Processor = ({ children }) => {
    const [command, _setCommand] = React.useState('');
    const [history, _setHistory] = React.useState([]);
    const [init, setInit] = React.useState(false);

    const validCommands = Object.keys(bin);

    const setHistory = (output: string) => {
        _setHistory([...history, {
            id: history.length,
            command: command?.split(' ').slice(1),
            output,
        }])
    };

    const {setThemeSettings} = useTheme();

    const clearHistory = () => {
        history.length = 0;
    }

    const setTheme = (backgroundColor: string, guestColor: string, atSeparator: string,
                      hostColor: string, locationColor: string, footerColor: string,
                      borderColor: string, commandColor: string) => {
        setThemeSettings({
            backgroundColor: backgroundColor,
            guestColor: guestColor,
            atSeparator: atSeparator,
            hostColor: hostColor,
            locationColor: locationColor,
            footerColor: footerColor,
            borderColor: borderColor,
            commandColor: commandColor,
        });
    }

    const setCommand = (command: string) => {
        _setCommand([Date.now(), command].join(' '));
    }

    const execute = async () => {
        const [cmd, ...args] = command.split(' ').slice(1);
        switch (cmd) {
            case undefined:
            case '':
                setHistory('');
                break;
            default:
                if (validCommands.indexOf(cmd) === -1) {
                    setHistory(`Unknown command '${cmd}'! Use 'commands' for available commands.`)
                } else {
                    const output = await bin[cmd](args);
                    setHistory(output);
                }
                break;
        }
    }

    const processorHooks = {clearHistory, setCommand, setTheme};

    useEffect(() => {
        if (!init && initialCommand) setCommand(initialCommand);
        if (init)
            execute();
        setInit(true);
    }, [command]);

    useEffect(() => {
        Object.keys(busState).forEach((key) => {
            if (Object.keys(processorHooks).indexOf(key) !== -1) {
                processorHooks[key](...busState[key]);
            }
            delete busState[key];
        });

    }, [Object.keys(busState)]);

    return (
        <ProcessorContext.Provider
            value={{
                history,
                command,
                setHistory,
                setCommand,
                clearHistory,
                validCommands,
            }}
        >
            {children}
        </ProcessorContext.Provider>
    );
}
