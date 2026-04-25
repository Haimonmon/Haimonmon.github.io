import { type JSX, lazy } from 'react';

// source code splitting: https://youtu.be/JU6sl_yyZqs?si=_eytUmg11QDG7KeD
const MaintenancePage = lazy(() => import("../app/pages/maintenance"));

const Navigation = lazy(() => import("../app/components/navigation"));

/**
 * source route protection: https://youtu.be/pyfwQUc5Ssk?si=aYTnewgdMxNYStfz
 */
export default function MaintenanceRoute(): JSX.Element {
    const isMaintenanced: boolean = import.meta.env.VITE_APP_MAINTENANCE_MODE === "true" || false;
    
    return !isMaintenanced ? <Navigation/> : <MaintenancePage/>
}