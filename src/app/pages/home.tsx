import { type JSX, useEffect } from "react";

/**
 * Provides the full portfolio contents
 * @returns JSX Element
 */
export default function HomePage(): JSX.Element {
    useEffect(() => {
        document.body.className = "bg-dark-coded";
    }, []);

    return <h1 id="testing-official" className="text-dark-coded">Official Page</h1>
};