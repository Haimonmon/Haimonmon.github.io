import { type JSX, useEffect } from "react";
import Intro from "../components/intro";
import Navigation from "../components/navigation";

/**
 * Provides the full portfolio contents
 * @returns JSX Element
 */
export default function HomePage(): JSX.Element {
    useEffect(() => {
        document.body.className = "bg-dark-coded";
    }, []);

    return (
        <>
            <Intro message="Hello World;" disable={false} />
            <Navigation/>
            <div className="flex-col overflow-hidden">
                <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
                <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
                <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
                <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
                <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
                <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
                <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
                <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
                <h1 className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
                <h1 id="certifications" className="font-bold text-white-coded text-[78px]" onClick={():void => console.log("owo")}>Official Page</h1>
            </div>
        </>
    )
};