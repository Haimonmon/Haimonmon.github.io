import { type JSX } from 'react';
import { useLocation } from 'react-router-dom'

export default function UnknownPage(): JSX.Element {
    const unknownPageName: string = useLocation().pathname
    const isMaintenanced: boolean = import.meta.env.VITE_APP_MAINTENANCE_MODE === "true" || false;

    return (
        <div className="h-full flex justify-center items-center">
            <h1 className='text-white-coded font-bold text-2xl'>Well i dont know {unknownPageName} page?</h1>
        </div>  
    )
}