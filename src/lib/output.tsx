import {useProcessor} from "@/lib/processor";
import {Entry} from "@/lib/entry";
import Prefix from "@/lib/prefix";

export const Output = () => {

    const { history } = useProcessor();

    return (
        <>
            {
                history.filter(entry => entry.command !== '').map((entry: Entry, _: number) => (
                // eslint-disable-next-line react/jsx-key
                <div>
                    <Prefix/>
                    <span
                        style={{
                            color: "white",
                            paddingLeft: "10px"
                        }}
                    >
                        {entry.command}
                    <br/>
                        <div
                            dangerouslySetInnerHTML={{ __html: entry.output }}
                        />
                    </span>
                </div>))
            }
        </>
    )
}

export default Output;