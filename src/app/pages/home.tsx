import { type JSX, useEffect } from "react";
import Intro from "../components/intro";

/**
 * Provides the full portfolio contents
 * @returns JSX Element
 */
export default function HomePage(): JSX.Element {
    useEffect(() => {
        document.body.className = "bg-dark-coded";
    }, []);

    return (
        <div className="flex items-center justify-center">
            <Intro/>
            <h1 id="testing-official" className="text-white-coded font-bold text-[45px]">Official Page</h1> 
        </div>
    )
};