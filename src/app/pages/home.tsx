import { type JSX, useEffect, useState } from "react";
import Intro from "../components/intro";
import Navigation from "../components/navigation";

/**
 * Provides the full portfolio contents
 * @returns JSX Element
 */
export default function HomePage(): JSX.Element {
    const [isIntroShown, setIntroShown] = useState<boolean>(() => !sessionStorage.getItem('seenIntro'));

    useEffect(() => {
        if (!isIntroShown) return

        const timeout = setTimeout(() => {
            sessionStorage.setItem('seenIntro', "true")
            setIntroShown(false);
            console.log("Intro is now off.")
        }, 4900);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {/* {isIntroShown ? <Intro message="Hello World;" disable={false} /> : ''} */}
            <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
            <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
            <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
            <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
            <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
            <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
            <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
            <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
            <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
        </>
    )
};