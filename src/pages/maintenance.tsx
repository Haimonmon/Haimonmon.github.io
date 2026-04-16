import { type JSX, type MouseEvent, useEffect } from "react";

/**
 * Provides the maintenance contents
 * @returns JSX element
 */
export default function MaintenancePage(): JSX.Element {
    useEffect(() => {
        document.body.className = 'maintenance-page';
    }, [])

    // * Redirect guest to my pdf resume
    const goToResume = (): void => {
        window.open("resume/DeCastroVinceCarlo.pdf", "_blank");
    }

    // * Redirect guest to my github profile page
    const goToGithub = (e: MouseEvent): void => {
        e.stopPropagation()
        window.open("https://github.com/Haimonmon", "_blank")
    }

    return (
        <div className="clickable-area" onClick={goToResume}>
            <div className="maintenance-container">
                <div className="error-title-container">
                    <h5>NOT ERROR</h5>
                </div>
                <p>Vince Portfolio is currently undergoing scheduled maintenance and is temporarily unavailable.</p>
                <p id="stop-code">STOP_CODE: MAINTENANCE_MODE</p>
                <ul>
                    <li>* A Temporary resume has been provided as an alternative.</li>
                    <li onClick={goToGithub} id="maintenance-github-link">* Access to the <span id="fake-anchor-github-link">Github</span> profile is available.</li>
                </ul>
                <p id="resume-message">Press any key to download resume<span id="underline-cursor">_</span></p>
            </div>
        </div>
    )
}
