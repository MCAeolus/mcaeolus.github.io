import {useHookOutsideContext} from "@/lib/processor";

export const clear = async (args: string[]) => {
    useHookOutsideContext("clearHistory", []);
}