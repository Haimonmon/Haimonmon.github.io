import { lazy } from "react";
import SPA from "./core/spa";

const HomePage = lazy(() => import("./pages/home"));
const ReachMePage = lazy(() => import("./pages/reach"));
const AboutMePage = lazy(() => import("./pages/aboutme"));
const UnknownPage = lazy(() => import("./pages/unknown"));
const ProjectsPage = lazy(() => import("./pages/projects"));

const app: SPA = new SPA();
const isStrict: boolean = false; // * For Debugging purposes only

app.add('/', HomePage);
app.add("connect", ReachMePage);
app.add("about-me", AboutMePage);
app.add("projects", ProjectsPage);

// * For 404 Not Found
app.add("*", UnknownPage);

app.render(isStrict);