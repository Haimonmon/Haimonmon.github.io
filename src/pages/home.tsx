import { type JSX, useLayoutEffect } from "react";

/**
 * Provides the full portfolio contents
 * @returns JSX.Element
 */
const HomePage = (): JSX.Element => {
    useLayoutEffect(() => {
        document.body.className = "official-page";
    }, []);

    return <h1>Official Page</h1>
};

export default HomePage;