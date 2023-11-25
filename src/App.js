import "./App.css";
import "./components/Login";
import TableComponent from "./components/TableComponent";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex w-screen h-screen">
      <SideBar />
      <Outlet />
      {/* <TableComponent /> */}
    </div>
  );
}

export default App;
