import Navbar from "./components/Navbar"
import {Outlet} from "react-router-dom"
function App() {

  return (
    <div className="bg-cyan-400 min-h-[100vh]">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
