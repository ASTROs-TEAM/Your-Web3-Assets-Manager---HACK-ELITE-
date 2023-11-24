import "./App.css";
import "./components/Login";
import Graph from "./components/Graph";

import SideBar from "./components/SideBar";


function App() {
  return (
    <div className="h-screen w-screen">
      <SideBar />
      <Graph/>
    </div>
  );
}

export default App;
