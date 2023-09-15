import {useRouter} from "next/router";
import {useEffect} from "react";

export default function App404() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/');
    }, []);

    return;
}