import { Prefix } from './prefix';
import React, {MutableRefObject, useEffect, useState} from 'react';
import {useProcessor} from "@/lib/processor";

type InputProps = {
    inputRef: MutableRefObject<HTMLInputElement>;
    container: MutableRefObject<HTMLDivElement>;
    routeCommand: string;
}

export const Input: React.FunctionComponent<InputProps> = (props) => {
    const { inputRef, container, routeCommand } = props;

    const [inputValue, setInputValue] = useState('');
    const [usedRouteCommand, setUsedRouteCommand] = useState(false);
    const { setCommand, history } = useProcessor();

    const handleInput = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.code === '13') {
            event.preventDefault();
            setCommand(inputValue);
            setInputValue('');
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
                    color: 'white',
                    marginLeft: '10px',
                }}
            />
        </div>

    </>);
}

export default Input;