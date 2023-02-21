import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import LoadingPage from "./components/LoadingPage";

import { BrowserRouter as Router } from "react-router-dom";

import "./sass/style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>
);
