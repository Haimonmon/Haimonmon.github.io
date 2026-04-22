import { useState, type JSX } from "react";

type NavigationData = {
    sectionTitle: string,
    textColor: string,
    backgroundColor: string,
    id: string
}

/**
 * Navigation component
 *  @returns Component jsx element
 */
export default function Navigation(): JSX.Element {
    const navigationData: NavigationData[] = [
        {
            sectionTitle: "About Me",
            textColor: "text-brown-coded",
            backgroundColor: "bg-brown-coded",
            id: "about-me"
        },
        {
            sectionTitle: "Skills",
            textColor: "text-blue-coded",
            backgroundColor: "bg-blue-coded",
            id: "skills"
        },
        {
            sectionTitle: "Projects",
            textColor: "text-yellow-coded",
            backgroundColor: "bg-yellow-coded",
            id: "projects"
        },
        {
            sectionTitle: "Careers",
            textColor: "text-light-blue-coded",
            backgroundColor: "bg-light-blue-coded",
            id: "experience"
        },
        {
            sectionTitle: "Certs",
            textColor: "text-orange-coded",
            backgroundColor: "bg-orange-coded",
            id: "certifications"
        }
    ]

    const [isMenuClosed, setMenuClose] = useState<boolean>(true);

    return (
        <div className="h-16.5 w-full fixed top-0">
            <div className="h-16.5 w-full top-0 flex items-center justify-between pl-2 pr-2 fixed bg-dark-coded z-1">
                <h3 className="font-[Fira_Code] text-white-coded text-[1rem]"><span className="text-yellow-coded">*</span>v;nce</h3>
                <img className="w-6 h-4 small-desktop:hidden" src="public/images/icons/burger-menu.png" alt="closed burger icon" onClick={() => setMenuClose((previous) => !previous)}/>
            </div>
            <div className={`text-[2.5rem] font-[Fira_Code] text-right pr-7 pl=2 flex flex-col h-full w-full bg-dark-coded z-1 fixed top-16.5 ${isMenuClosed ? '[clip-path:inset(0_0_100%_0)]' : '[clip-path:inset(0_0_0_0)]'} transition-[clip-path] duration-1000 ease-in-out tablet:hidden small-desktop:hidden large-desktop:hidden`}>
                {navigationData.map((data, i): JSX.Element => {
                    return (
                        <a href={`#${data.id}`} className="ml-2 border-0 flex items-center w-full justify-end h-19.5 border-t border-b border-[#191926]">
                            <p className={`font-[Pixel_Code] text-sm w-15.5 h-[1.438rem] ${data.backgroundColor} text-left pl-[0.813rem]`}>0{i + 1}</p>
                            <h1 className={`${data.textColor} ml-5`}>{data.sectionTitle}</h1>
                        </a>
                    )
                })}
            </div>
        </div>
    )
};