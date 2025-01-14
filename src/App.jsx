import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className="min-h-[100vh]">
      <Navbar />
      <div className=" bg-gradient-to-b from-cyan-600 to-cyan-400 min-h-[calc(100vh-116px)]">
        <Outlet />
      </div>
        <Footer/>
        <ToastContainer />
    </div>
  )
}

export default App
