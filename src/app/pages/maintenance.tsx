import { type JSX, type MouseEvent, useEffect, useState } from "react";

/**
 * Provides the maintenance contents
 * @returns JSX element
 */
export default function MaintenancePage(): JSX.Element {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 900);

    // * Checks if the device of the guest is desktop or mobile
    useEffect(() => {
        document.body.className = 'bg-blue-bsod overflow-hidden';

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

    useEffect(() => {
        document.body.classList.add(isMobile ? 'mobile': 'desktop')
    }, [isMobile])

    // * Redirect guest to my pdf resume for mobile
    const goToResumeMobile = (): void => {
        // console.log("IS MOBILE?: ", isMobile)
        if (!isMobile) return

        window.open("/resume/DeCastroVinceCarlo.pdf", "_blank");
    }

    // * Redirect guest to my pdf resume for desktop
    const goToResumeDesktop = (): void => {
        if (isMobile) return

        window.open("/resume/DeCastroVinceCarlo.pdf", "_blank");
    }

    // * Redirect guest to my github profile page
    const goToGithub = (e: MouseEvent): void => {
        e.stopPropagation()
        window.open("https://github.com/Haimonmon", "_blank")
    }

    return (
        <div className="h-full flex justify-center tablet:w-full" onClick={goToResumeMobile}>
            <div className="w-[81.25vw] mt-[40vw] mb-[20vw] tablet:mb-[2vw] tablet:w-[64.844vw] tablet:h-[36.719vw] tablet:mt-[20vw] small-desktop:w-[67.578vw] small-desktop:h-[21.68vw] small-desktop:mt-[10vw] large-desktop:w-[48.058vw] large-desktop:h-[15.417vw] large-desktop:mt-[10vw]">
                <div className="small-desktop:mb-[2.93vw] flex items-center justify-center mb-[9.375vw] tablet:mb-[3.906vw] large-desktop:mb-[2.083vw]">
                    <h5 className="large-desktop:text-[1.389vw] large-desktop:w-[8.958vw] large-desktop:h-[2.083vw] small-desktop:text-[1.953vw] small-desktop:w-[12.598vw] small-desktop:h-[2.93vw] flex justify-center items-center font-[BSOD_Font] text-[5vw] h-[6.875vw] w-[32.813vw] text-blue-bsod bg-white-bsod tablet:text-[2.604vw] tablet:w-[16.797vw] tablet:h-[3.906vw] font-bold">NOT ERROR</h5>
                </div>
                <p className="large-desktop:text-[1.25vw] small-desktop:text-[1.758vw] font-[BSOD_Font] text-justify text-white-bsod text-[4.375vw] tablet:text-[2.344vw]">Vince Portfolio is currently undergoing scheduled maintenance and is temporarily unavailable.</p>
                <p id="stop-code" className="large-desktop:text-[1.25vw] small-desktop:mb-[1.465vw] small-desktop:mt-[1.465vw] small-desktop:text-[1.758vw] font-[BSOD_Font] text-white-bsod text-[4.375vw] mt-[3.125vw] mb-[4.688vw] tablet:text-[2.344vw] tablet:mt-[1.953vw] tablet:mb-[1.953vw] large-desktop:mt-[1.042vw] large-desktop:mb-[1.042vw]">STOP_CODE: MAINTENANCE_MODE</p>
                <ul className="large-desktop:mb-[3.125vw] small-desktop:mb-[2.441vw] mb-[7.813vw] tablet:mb-[3.255vw]">
                    <li className="large-desktop:mb-[2vw] large-desktop:text-[1.25vw] small-desktop:mb-[2vw] small-desktop:text-[1.758vw] font-[BSOD_Font] text-white-bsod text-[4.375vw] mb-[6.25vw] list-none tablet:text-[2.344vw] tablet:mb-[2vw]">* A Temporary resume has been provided as an alternative.</li>
                    <li onClick={goToGithub} id="maintenance-github-link" className="large-desktop:mb-[2vw] large-desktop:text-[1.25vw] small-desktop:mb-[2vw] small-desktop:text-[1.758vw] tablet:mb-[2vw] tablet:text-[2.344vw] cursor-pointer font-[BSOD_Font] text-white-bsod text-[4.375vw] mb-[6.25vw] list-none">* Access to the <span id="fake-anchor-github-link" className="underline">Github</span> profile is available.</li>
                </ul>
                <p className="large-desktop:text-[1.25vw] small-desktop:text-[1.758vw] font-[BSOD_Font] text-white-bsod text-[4.375vw] tablet:text-center tablet:text-[2.344vw]"><span onClick={goToResumeDesktop} className="cursor-pointer">Press any key to download resume<span className="animate-blinker">_</span></span></p>
            </div>
        </div>
    )
}
