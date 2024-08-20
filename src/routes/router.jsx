import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/layout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "*",
    element: <Error />,
  },
]);
