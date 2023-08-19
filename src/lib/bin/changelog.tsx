import {useHookOutsideContext} from "@/lib/processor";

export const changelog = (args: string[]) => {
    //document.addEventListener('keydown', (event) => console.log(event));
    return `<div>
        ~WEBSITE UNDER DEVELOPMENT~<br/>
        Thank you for coming to check out my website!
        I am still working on it, but in the meantime am
        starting to have it published live. You will probably
        experience issues while checking it out.<br/>

        The current supported commands are:<div style="color: #14e014"> resume, changelog, test, clear, help</div><br/>

        Thank you again for visiting my site! If you have
        any comments, feel free to email me at nsmith320@gatech.edu<br/>
    </div>`;
}