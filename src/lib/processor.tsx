import React, {useEffect} from "react";
import {Entry} from "@/lib/entry";
import {bin} from "@/lib/index";
import * as Process from "process";

interface ProcessorContextType {
    history: Entry[];
    command: string;
    setHistory: (output: string) => void;
    setCommand: (cmd: string) => void;
    clearHistory: () => void;
}

const busState = {}

export function useHookOutsideContext(hook: string, args: string[]) {
    console.log(`here, ${hook}`)
    busState[hook] = args;
}

const ProcessorContext = React.createContext<ProcessorContextType>(null);
export const useProcessor = () => React.useContext(ProcessorContext);

const initialCommand = 'changelog';

export const Processor = ({ children }) => {
    const [command, _setCommand] = React.useState('');
    const [history, _setHistory] = React.useState([]);
    const [init, setInit] = React.useState(false);

    const setHistory = (output: string) => {
        _setHistory([...history, {
            id: history.length,
            command: command?.split(' ').slice(1),
            output,
        }])
    };

    const clearHistory = () => {
        history.length = 0;
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
                if (Object.keys(bin).indexOf(cmd) === -1) {
                    setHistory(`Unknown command '${cmd}'! Use 'help' for available commands.`)
                } else {
                    const output = await bin[cmd](args);
                    setHistory(output);
                }
                break;
        }
    }

    const processorHooks = {clearHistory, setCommand};

    useEffect(() => {
        if (!init && initialCommand) setCommand(initialCommand);
        if (init)
            execute();
        setInit(true);
    }, [command]);

    useEffect(() => {
        Object.keys(busState).forEach((key) => {
            if (Object.keys(processorHooks).indexOf(key) !== -1) {
                processorHooks[key](busState[key]);
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
            }}
        >
            {children}
        </ProcessorContext.Provider>
    );
}
