import type { JSX } from "react";
import HomePage from "./pages/home";
import MaintenancePage from "./pages/maintenance";

/**
 * Carries my whole portfolio
 * @returns JSX.Element 
 */
const App = (): JSX.Element => {
  const maintenance: boolean = true;

  return !maintenance ? <HomePage/> : <MaintenancePage/>
};

export default App;