import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";

const Home = lazy(() => import("./pages/Home"));
const Destination = lazy(() => import("./pages/Destination"));
const Crew = lazy(() => import("./pages/Crew"));
const Technology = lazy(() => import("./pages/Technology"));

function App() {
  let { pathname } = useLocation();

  return (
    <div className="app">
      <Navbar />
      <main className={`main theme--${pathname.replace("/", "")}`}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
