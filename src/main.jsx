import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/router.jsx";
import "./root.css";

createRoot(document.getElementById("root")).render(<RouterProvider router={routes}/>);
