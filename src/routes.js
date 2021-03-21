import { lazy } from "react";
const Home = lazy(() => import("./containers/Home"));
const Members = lazy(() => import("./containers/Members"));
const CharterLanding = lazy(() => import("./containers/Members/charterlanding"));
const CharterMain = lazy(() => import("./containers/Members/chartermain"));
const Register = lazy(() => import("./components/Auth/Register"));
const Forgetpassword = lazy(() => import("./components/Auth/Forgetpassword"));
const Resetpassword = lazy(() => import("./components/Auth/Resetpassword"));
const Contact = lazy(() => import("./containers/Contact"));
const Blog = lazy(() => import("./containers/Blog"));

const routes = [
  { path: "/", exact: true, component: Home },
  {
    path: "/members",
    exact: true,
    component: Members,
  },
  {
    path: "/clanding",
    exact: true,
    component: CharterLanding,
  },
  {
    path: "/cmain",
    exact: true,
    component: CharterMain,
  },
  {
    path: "/register",
    exact: true,
    component: Register,
  },
  {
    path: "/contactus",
    exact: true,
    component: Contact,
  },
  {
    path: "/blog",
    exact: true,
    component: Blog,
  },
  {
    path: "/forgetpassword",
    exact: true,
    component: Forgetpassword,
  },
  {
    path: "/reset_password/:token",
    exact: true,
    component: Resetpassword,
  }
];

export default routes;
