import { useContext } from "react";
import { AppContext } from "../provider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AppContext)
    const location = useLocation()

    if (loading) {
        return <div className="h-screen w-full bg-white flex justify-center items-center">loading...</div>
    }
    if (!user) {
        return <Navigate state={{ from: location }} to="/login" replace />
    }
    else {
        return children
    }
};

export default PrivateRoute;