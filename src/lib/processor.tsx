import React, {useEffect} from "react";
import {Entry} from "@/lib/entry";
import {bin} from "@/lib/index";

interface ProcessorContextType {
    history: Entry[];
    command: string;
    setHistory: (output: string) => void;
    setCommand: (cmd: string) => void;
}

const ProcessorContext = React.createContext<ProcessorContextType>(null as any);
export const useProcessor = () => React.useContext(ProcessorContext);

export const Processor = ({ children }) => {
    const [command, _setCommand] = React.useState('');
    const [history, _setHistory] = React.useState([]);

    const setHistory = (output: string) => {
        _setHistory([...history, {
            id: history.length,
            command,
            output,
        }])
    };
    const setCommand = (command: string) => {
        _setCommand(command);
    }

    const execute = async () => {
        const [cmd, ...args] = command.split(' ').slice(0);

        switch (cmd) {
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

    useEffect(() => {
        execute();
    }, [command]);

    return (
        <ProcessorContext.Provider
            value={{
                history,
                command,
                setHistory,
                setCommand,
            }}
        >
            {children}
        </ProcessorContext.Provider>
    );
}
