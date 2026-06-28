import { type JSX, lazy,  useEffect, useState } from 'react';
import { Outlet, useLocation, matchPath, type Location } from 'react-router-dom';

const Intro = lazy(() => import("@components/intro"));
const Navigation = lazy(() => import("@components/navigation"));

const MaintenancePage = lazy(() => import("../app/pages/maintenance"));

/**
 * source route protection: https://youtu.be/pyfwQUc5Ssk?si=aYTnewgdMxNYStfz
 */
export default function MaintenanceRoute(props: {routes: {path: string, element: JSX.Element}[]}): JSX.Element {
    const location: Location = useLocation()
    const isMaintenanced: boolean = import.meta.env.VITE_APP_MAINTENANCE_MODE === "true" || false;
    const isNotFound: boolean = !props.routes.filter((route) => route.path !== "*").some((route) => matchPath(route.path, location.pathname))

    const [isIntroShown, setIntroShown] = useState<boolean>(() => !sessionStorage.getItem('seenIntro'));
    
    useEffect(() => {
        console.log(isNotFound, " isFound?")
        console.log("Checking on by Protection Route.")
        if (!isIntroShown) return

        const timeout = setTimeout(() => {
            sessionStorage.setItem('seenIntro', "true")
            setIntroShown(false);
            console.log("Intro is now off.")
        }, 4900);

        return () => clearTimeout(timeout);
    }, []);

    // // * Planning to have different 404 Pages between maintenance and not maintenance
    // if (isNotFound) return (
    //     <Outlet/>
    // )

    return !isMaintenanced 
    ? (
        <div className='
            wrap-anywhere
            w-full
            ml-2 mr-2
            max-w-109.5
            pablet:max-w-md
            large-pablet:ml-[1.5%] large-pablet:mr-[1.5%] 
            large-pablet:max-w-2xl
            tablet:max-w-[46.4rem] 
            small-desktop:max-w-[56.87rem]'>
            {isIntroShown ? <Intro message="Hello World;" disable={false} /> : ''}
            <Navigation/>
            <Outlet/>
        </div> 
    )
    : <MaintenancePage isNotFound={isNotFound}/>
}