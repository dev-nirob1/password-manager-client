import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="h-16 bg-cyan-600 flex items-center">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                   <Link to='/'> <h1 className="text-3xl font-medium text-white">&lt;Pass <span className="text-teal-300">Man /&gt;</span></h1></Link>
                </div>
                <div className="nav-item">
                    <Link to='/login' className="border-2 px-4 py-2 font-medium text-white">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;