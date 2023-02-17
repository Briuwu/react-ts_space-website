import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
const Home = React.lazy(() => import("./pages/Home"));
const Destination = React.lazy(() => import("./pages/Destination"));
const Crew = React.lazy(() => import("./pages/Crew"));
const Technology = React.lazy(() => import("./pages/Technology"));
import ErrorPage from "./components/ErrorPage";
import LoadingPage from "./components/LoadingPage";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import "./sass/style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />,
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
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
