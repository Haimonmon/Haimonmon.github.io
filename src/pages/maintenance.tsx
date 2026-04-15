import { type JSX, useLayoutEffect } from "react";


const MaintenancePage = (): JSX.Element => {
    useLayoutEffect(() => {
        document.body.className = 'maintenance-page';
    }, [])

    return <h1>Maintenance Mode</h1>
}

export default MaintenancePage