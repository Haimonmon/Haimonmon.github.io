import { lazy } from "react";
import SPA from "./core/spa";

const HomePage = lazy(() => import("./pages/home"));
const ReachMePage = lazy(() => import("./pages/reach"));
const AboutMePage = lazy(() => import("./pages/aboutme"));
const ProjectsPage = lazy(() => import("./pages/projects"));

const app: SPA = new SPA();
const isStrict: boolean = false; // * For Debugging purposes only

app.add("/", HomePage);
app.add("careers", ReachMePage);
app.add("stacks", AboutMePage);
app.add("projects", ProjectsPage);

app.render(isStrict);