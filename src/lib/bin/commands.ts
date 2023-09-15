import {bin} from "@/lib";

export const commands = (args: string[]) => {
    return `${Object.keys(bin).join(', ')}`;
}