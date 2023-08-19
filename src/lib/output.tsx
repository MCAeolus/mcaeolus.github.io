import {useProcessor} from "@/lib/processor";
import {Entry} from "@/lib/entry";
import Prefix from "@/lib/prefix";
import {useTheme} from "@/lib/theme";
import {useEffect} from "react";

export const Output = () => {

    const { history } = useProcessor();
    const { themeSettings } = useTheme();

    useEffect(() => {}, [history]);

    return (
        <>
            {
                history.filter(entry => entry.command !== '').map((entry: Entry, index: number) => (
                <div key={entry.command + index}>
                    <Prefix/>
                    <span
                        style={{
                            color: themeSettings.commandColor,
                            paddingLeft: "10px"
                        }}
                    >
                        {entry.command}
                    <br/>
                        <div
                            dangerouslySetInnerHTML={{ __html: entry.output }} //spooky
                        />
                    </span>
                </div>))
            }
        </>
    )
}

export default Output;