import { useContext } from "react";
import { AppContext } from "../provider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AppContext)
    const location = useLocation()

    if (loading) {
        return <div className="h-screen w-full bg-white flex justify-center items-center">
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-600"></div>
            </div>
        </div>
    }
    if (!user) {
        return <Navigate state={{ from: location }} to="/login" replace />
    }
    else {
        return children
    }
};

export default PrivateRoute;