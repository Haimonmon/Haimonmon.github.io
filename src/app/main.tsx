import { lazy } from "react";
import SPA from "./core/spa";

const HomePage = lazy(() => import("./pages/home"));
const ReachMePage = lazy(() => import("./pages/reach"));
const AboutMePage = lazy(() => import("./pages/aboutme"));
const ProjectsPage = lazy(() => import("./pages/projects"));

const app: SPA = new SPA();
const isStrict: boolean = false; // * For Debugging purposes only

app.add('/', HomePage);
app.add("connect", ReachMePage);
app.add("about-me", AboutMePage);
app.add("projects", ProjectsPage);

app.render(isStrict);

// TODO:
/**
 * 1. Make the typewriter effect a component so i can reuse it
 */