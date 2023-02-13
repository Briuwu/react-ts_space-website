import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main home">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
