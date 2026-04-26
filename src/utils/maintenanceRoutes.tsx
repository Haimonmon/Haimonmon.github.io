import { type JSX, lazy,  useEffect, useState } from 'react';
import { Outlet, useLocation, matchPath, type Location } from 'react-router-dom';

// source code splitting: https://youtu.be/JU6sl_yyZqs?si=_eytUmg11QDG7KeD
import Intro from "@components/intro";
const Navigation = lazy(() => import("@components/navigation"));

const MaintenancePage = lazy(() => import("../app/pages/maintenance"));

/**
 * source route protection: https://youtu.be/pyfwQUc5Ssk?si=aYTnewgdMxNYStfz
 */
export default function MaintenanceRoute(props: {routes: {path: string, element: JSX.Element}[]}): JSX.Element {
    const location: Location = useLocation()
    const isMaintenanced: boolean = import.meta.env.VITE_APP_MAINTENANCE_MODE === "true" || false;
    const isNotFound = !props.routes.filter((route) => route.path !== "*").some((route) => matchPath(route.path, location.pathname))

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

    // * Planning to have different 404 Pages between maintenance and not maintenance
    if (isNotFound) return (
        <Outlet/>
    )

    return !isMaintenanced 
    ? (
        <>
            {isIntroShown ? <Intro message="Hello World;" disable={false} /> : ''}
            <Navigation/>
            <Outlet/>
        </> 
    )
    : <MaintenancePage/>
}