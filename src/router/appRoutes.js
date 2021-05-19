// components
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../components/NotFound";

export const appRoutes = [
  {
    id: 1,
    path: "/",
    component: Home,
  },
  {
    id: 2,
    path: "/about",
    component: About,
  },
  {
    id: 3,
    component: NotFound,
  },
];
