import "./App.css";
import "./components/Login";
import Graph from "./components/Graph";

import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="flex w-screen h-screen">
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default App;
