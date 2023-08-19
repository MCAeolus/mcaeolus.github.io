import { Prefix } from './prefix';
import React, {MutableRefObject, useEffect, useState} from 'react';
import {useProcessor} from "@/lib/processor";
import {useTheme} from "@/lib/theme";
import theme from "tailwindcss/defaultTheme";

type InputProps = {
    inputRef: MutableRefObject<HTMLInputElement>;
    container: MutableRefObject<HTMLDivElement>;
    routeCommand: string;
}

export const Input: React.FunctionComponent<InputProps> = (props) => {
    const { inputRef, container, routeCommand } = props;

    const { themeSettings } = useTheme();

    const tabSuggestRef = React.createRef();

    const [inputValue, setInputValue] = useState('');
    const [usedRouteCommand, setUsedRouteCommand] = useState(false);
    const [predictedCommands, setPredictedCommands] = useState([]);
    const [predictedCommandIndex, setPredictedCommandIndex] = useState(0);
    const { command, setCommand, history, validCommands } = useProcessor();

    const handleInput = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.code === '13') {
            event.preventDefault();
            setCommand(inputValue);
            setInputValue('');
        } else if (event.key === 'Tab') {
            event.preventDefault();
            if (predictedCommands !== [] && inputValue !== '') {
                setInputValue(predictedCommands[predictedCommandIndex]);
                setPredictedCommandIndex(predictedCommandIndex + 1);
                if (predictedCommandIndex == predictedCommands.length) {
                    setPredictedCommandIndex(0);
                }
            }
        }
    };

    useEffect(() => {
        if (routeCommand !== undefined && !usedRouteCommand) {
            setCommand(routeCommand);
            setUsedRouteCommand(true);
        }
    }, []);

    useEffect(() => {
        container.current.scrollTo(0, container.current.scrollHeight);
    }, [history, container]);

    useEffect(() => {
        setPredictedCommandIndex(0);
        if (inputRef.current.value === '') {
            tabSuggestRef.current.innerHTML = '';
            return;
        }
        const possibleCommands = validCommands.filter(entry => entry.startsWith(inputRef.current.value));
        if (possibleCommands.length > 0) {
            setPredictedCommands(possibleCommands);
            tabSuggestRef.current.innerHTML = possibleCommands[0];
        }

    }, [inputRef.current?.value]);

    return (
    <>
        <div
            className="flex flex-row space-x-2"
        >
            <label htmlFor="prompt" className="flex-shrink">
                <Prefix />
            </label>
            <input
                ref={inputRef}
                id="prompt"
                type="text"
                className="focus:outline-none flex-grow form-inline"
                autoFocus
                onKeyDown={handleInput}
                value={inputValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="off"
                style={{
                    color: themeSettings.commandColor,
                    backgroundColor: themeSettings.backgroundColor,
                    marginLeft: '10px',
                    zIndex: "1",

                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",

                }}
            />
            <span ref={tabSuggestRef}></span>
        </div>

    </>);
}

export default Input;