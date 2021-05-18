// components
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../components/NotFound";

export const ROUTES = [
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
    path: "",
    component: NotFound,
  },
];
