import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./sass/style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
