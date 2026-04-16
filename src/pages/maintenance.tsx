import { type JSX, type MouseEvent, useEffect, useState } from "react";

/**
 * Provides the maintenance contents
 * @returns JSX element
 */
export default function MaintenancePage(): JSX.Element {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 900);

    // * Checks if the device of the guest is desktop or mobile
    useEffect(() => {
        document.body.className = 'maintenance-page';

        const handleWindowSizeChange = (): void => {
            setIsMobile(window.innerWidth <= 900)
        }

        console.log(window.innerWidth);

        window.addEventListener('resize', handleWindowSizeChange)

        return () => { window.removeEventListener('resize', handleWindowSizeChange)}
    }, [])

    // * Allows for 
    useEffect(() => {
        const handleAllKeyDown = (): void => {
            goToResumeDesktop();
        }

        window.addEventListener('keydown', handleAllKeyDown);

        return () => { window.removeEventListener('keydown', handleAllKeyDown)}
    }, [])

    // * Redirect guest to my pdf resume for mobile
    const goToResumeMobile = (): void => {
        // console.log("IS MOBILE?: ", isMobile)
        if (!isMobile) return

        window.open("public/resume/DeCastroVinceCarlo.pdf", "_blank");
    }

    // * Redirect guest to my pdf resume for desktop
    const goToResumeDesktop = (): void => {
        if (isMobile) return

        window.open("public/resume/DeCastroVinceCarlo.pdf", "_blank");
    }

    // * Redirect guest to my github profile page
    const goToGithub = (e: MouseEvent): void => {
        e.stopPropagation()
        window.open("https://github.com/Haimonmon", "_blank")
    }

    return (
        <div className="clickable-area" onClick={goToResumeMobile}>
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
                <p id="resume-message"><span id="resume-message-text" onClick={goToResumeDesktop}>Press any key to download resume<span id="underline-cursor">_</span></span></p>
            </div>
        </div>
    )
}
