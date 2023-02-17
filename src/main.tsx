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
  redirect,
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
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/destination",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Destination />
          </Suspense>
        ),
      },
      {
        path: "/crew",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Crew />
          </Suspense>
        ),
      },
      {
        path: "/technology",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Technology />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
