import { lazy } from "react";
import SPA from "./core/spa";

const HomePage = lazy(() => import("./pages/home"));
const AboutMePage = lazy(() => import("./pages/aboutme"));
const ProjectsPage = lazy(() => import("./pages/projects"));
const ReachMePage = lazy(() => import("./pages/reach"));

const app: SPA = new SPA();

app.add('/', HomePage);
app.add("connect", ReachMePage);
app.add("about-me", AboutMePage);
app.add("projects", ProjectsPage);

app.render();

