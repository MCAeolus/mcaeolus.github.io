import {useHookOutsideContext} from "@/lib/processor";

export const tess = (args: string[]) => {
    useHookOutsideContext('setTheme',
        ['#67377b','#DCDCCD','#272525','#DCDCCD','#DCDCCD','#C1A2FA','#C1A2FA','#DCDCCD']);
}


//backgroundColor: '#67377b',
//guestColor: '#DCDCCD',
//atSeparator: '#272525',
//hostColor: '#DCDCCD',
//locationColor: '#DCDCCD',
//footerColor: '#C1A2FA',
//borderColor: '#C1A2FA',
//commandColor: '#DCDCCD'