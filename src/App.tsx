import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  let { pathname } = useLocation();

  return (
    <div className="app">
      <Navbar />
      <main className={`main theme--${pathname.replace("/", "")}`}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
