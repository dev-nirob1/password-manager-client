import Navbar from "./components/Navbar"
import {Outlet} from "react-router-dom"
function App() {

  return (
    <div className="bg-gradient-to-b from-cyan-600 to-cyan-300 min-h-[100vh]">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
