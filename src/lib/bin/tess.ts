import {useHookOutsideContext} from "@/lib/processor";

export const tess = (args: string[]) => {
    useHookOutsideContext('setTheme',
        ['#502d5e',
            '#af8bd3',
            '#DCDCCD',
            '#af8bd3',
            '#bbbbb5',
            '#C1A2FA',
            '#C1A2FA',
            '#cabad7']);
}


//backgroundColor: '#67377b',
//guestColor: '#DCDCCD',
//atSeparator: '#272525',
//hostColor: '#DCDCCD',
//locationColor: '#DCDCCD',
//footerColor: '#C1A2FA',
//borderColor: '#C1A2FA',
//commandColor: '#DCDCCD'