import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../provider/ContextProvider";

const Dropdown = ({ user }) => {
    const { logOut, isOpen, setIsOpen } = useContext(AppContext)
    const navigate = useNavigate()

    const handleCollapsDropdown = () => {
        setIsOpen(false)
    }
    const handleLogout = () => {
        logOut().then(() => {
            navigate('/login')
            setIsOpen(false)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="relative">
            <img onClick={() => setIsOpen(!isOpen)} height="45" width="45" className="rounded-full border-2 cursor-pointer" src={user?.photoURL} alt="profile" title={user?.displayName} />
            <ul className={`absolute top-[103%] right-0 transition-all duration-1000 bg-cyan-600 py-6 text-white font-medium ${isOpen ? 'block' : 'hidden'}`} style={{ minWidth: "10rem" }}>
                <li className="py-1 block w-full">
                    <Link onClick={handleCollapsDropdown} className="py-1 px-5 hover:bg-cyan-400 block w-full" to="/add-password">Add Password</Link>
                </li>
                <li className="py-1 block w-full">
                    <Link onClick={handleCollapsDropdown} className="py-1 px-5 hover:bg-cyan-400 block w-full" to="/my-password">My Password</Link>
                </li>
                <li onClick={handleLogout} className="py-1 px-5 hover:bg-cyan-400 block w-full cursor-pointer">Logout</li>
            </ul>
        </div>

    );
};

export default Dropdown;