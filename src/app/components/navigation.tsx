import { useState, type JSX } from "react";
import { NavLink } from "react-router-dom";

import navigationData from "@data-components/navigation.json";

type NavigationData = {
  path: string;
  textColor: string;
  sectionTitle: string;
  backgroundColor: string;
};

/**
 * Navigation component
 *  @returns Component jsx element
 */
export default function Navigation(): JSX.Element {
  const [isMenuClosed, setMenuClose] = useState<boolean>(true);
  const typedNavigationData = navigationData satisfies NavigationData[];

  return (
    <>
      <div
        className="w-full h-16.5 sticky top-0 z-20
                            max-w-109.5
                            pablet:max-w-md
                            large-pablet:max-w-2xl
                            tablet:max-w-[46.4rem] tablet:w-full tablet:flex tablet:content-between
                            small-desktop:max-w-[56.87rem]
                            "
      >
        <div
          className="max-w-109.5 tablet:static large-pablet:w-full large-pablet:max-w-2xl large-pablet:p-0
                pablet:p-0 pablet:max-w-md h-16.5 w-full top-0 flex items-center justify-between bg-dark-coded z-1"
        >
          <NavLink to="/">
            <h3 className="font-[Fira_Code] text-white-coded text-[1rem]">
              <span className="text-blue-coded">*</span>vince
            </h3>
          </NavLink>
          <img
            loading="lazy"
            className="w-6 h-4 tablet:hidden small-desktop:hidden"
            src="public/images/icons/burger-menu.png"
            alt="closed burger icon"
            onClick={() => setMenuClose(!isMenuClosed)}
          />
        </div>

        <div
          className={`overflow-hidden large-pablet:p-0 text-[2.5rem] font-[Fira_Code] text-right pr-7 pl=2 flex flex-col w-full bg-dark-coded z-1 sticky top-16.5
                    ${isMenuClosed ? "[clip-path:inset(0_0_100%_0)]" : "[clip-path:inset(0_0_0_0)]"}

                    ${isMenuClosed ? "h-0" : "h-screen"}
                    motion-safe:transition-[height,_clip-path] duration-800 ease-in-out

                    tablet:transition-none tablet:[clip-path:inset(0_0_0_0)] tablet:gap-12.5 tablet:justify-end tablet:p-0 tablet:static tablet:z-2 tablet:top-0 tablet:flex-row tablet:h-16.5`}
        >
          {typedNavigationData.map((data, i): JSX.Element => {
            return (
              <NavLink key={i + 1} to={data.path} onClick={() => setMenuClose(true)}>
                <div
                  className={`${data.sectionTitle == "Home" ? "tablet:hidden" : ""} tablet:m-0 tablet:h-full tablet:border-0 tablet:text-center tablet:w-fit border-0 flex items-center w-full justify-end h-19.5 border-t border-b border-[#191926] pablet:max-w-md
                            large-pablet:max-w-2xl`}
                >
                  <p
                    className={`tablet:hidden font-[Pixel_Code] text-sm w-15.5 h-[1.438rem] ${data.backgroundColor} text-left pl-[0.813rem]`}
                  >
                    0{i + 1}
                  </p>
                  <h1
                    className={`tablet:text-white-coded/80 ${data.textColor} ml-5 tablet:text-[1rem] tablet:w-fit tablet:h-fit tablet:ml-0`}
                  >
                    {data.sectionTitle}
                  </h1>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
