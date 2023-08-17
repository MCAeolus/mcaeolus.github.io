import { useEffect, useState } from "react";

export const Prefix = () => {
    const [host, setHost] = useState('');

    useEffect(() => {
        if (typeof window !== undefined) setHost(window.location.hostname);
    }, []);
    
    return (
        <div style=
            {{
                display: 'inline',
            }}
        >
            <span
                style={{color: "gold"}}>
                guest
            </span>
            <span
                style={{color: "white"}}>
                @
            </span>
            <span
                style={{color: "gold"}}>
                {host}
            </span>
            <span
                style={{color: "light gray"}}>
                :$ ~
            </span>
        </div>
    );
}

export default Prefix;