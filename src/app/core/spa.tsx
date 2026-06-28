import { createRoot, type Root } from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { StrictMode, type JSX , type ComponentType, lazy, Suspense} from "react";

const UnknownPage = lazy(() => import("../pages/unknown"));
const MaintenanceRoute = lazy(() => import("@utils/maintenanceRoutes"));

/**
 * Single Page Application react routing handling class
 * for now it doesnt support nested route
 */
class SPA {
    routes: {path: string, element: JSX.Element}[]
    root: HTMLElement | null
    constructor() {
        this.routes = []
        this.root = document.getElementById('root');
    }

    /**
     * Registers the component path into the route
     * @param path - link path to the page
     * @param ReactComponent - Callable function like: <App/> so the "App" is the callable function to pass
     * 
     */
    add(path: string, ReactComponent: ComponentType): void {
        this.routes.push({path, element: <ReactComponent/>})
    }

    /**
     * Implemented with protectedRoute way
     * @returns React element consist of full registered react Routes
     */
    register(): JSX.Element {
        return (
            <BrowserRouter>
                <Suspense fallback={<div className="w-full h-full fixed z-2 bg-dark-coded"></div>}>
                    <Routes>
                        <Route key={1} element={<UnknownPage/>} path="*"/>
                        <Route key={2} element={<MaintenanceRoute routes={this.routes}/>}>
                            {
                                this.routes.map((route, index): JSX.Element => (
                                    <Route key={index + 1} element={route.element} path={route.path}/>
                                ))
                            }
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        )
    }

    /**
     * Renders all components and react pages
     */
    render(isStrict: boolean = true): void {
        try {
            const root: Root = createRoot(this.root!);
        
            isStrict 
            ? root.render(<StrictMode>{this.register()}</StrictMode>) 
            : root.render(this.register())

        } catch(err: any) {
            console.log(`[ SPA ] Error ${err.message}`)
        }
    }
}

export default SPA;