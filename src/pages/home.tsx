import { type JSX, useEffect } from "react";

/**
 * Provides the full portfolio contents
 * @returns JSX Element
 */
export default function HomePage(): JSX.Element {
    useEffect(() => {
        document.body.className = "official-page";
    }, []);

    return <h1 id="testing-official">Official Page</h1>
};