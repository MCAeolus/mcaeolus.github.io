import {useHookOutsideContext} from "@/lib/processor";

export const clear = async (args: string[]) => {
    console.log("calling hook");
    useHookOutsideContext("clearHistory", []);
}