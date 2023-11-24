import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="h-screen w-screen bg-white">
      <div className="h-48 w-40 gradient blur-[100px] rounded-full absolute left-16 -z-1" />
      <Dashboard />
    </div>
  );
}

export default App;
