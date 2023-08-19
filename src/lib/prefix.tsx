import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {useTheme} from "@/lib/theme";
import theme from "tailwindcss/defaultTheme";

export const Prefix = () => {
    const [host, setHost] = useState('');
    const { themeSettings } = useTheme();

    const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)"});

    useEffect(() => {
        setHost(isSmallScreen?'...':window.location.hostname);
    }, [isSmallScreen]);


    return (
        <div style=
            {{
                display: 'inline',
            }}
        >
            <span
                style={{color: themeSettings.guestColor}}>
                guest
            </span>
            <span
                style={{color: themeSettings.atSeparator}}>
                @
            </span>
            <span
                style={{color: themeSettings.hostColor}}>
                {host}
            </span>
            <span
                style={{color: themeSettings.locationColor}}>
                :$ ~
            </span>
        </div>
    );
}

export default Prefix;