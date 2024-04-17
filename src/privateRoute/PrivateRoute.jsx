import { useContext } from "react";
import { AppContext } from "../provider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AppContext)
    const location = useLocation()
    if(loading) {
        return <div>loading...</div>
    }
    if(user && user?.email){
        return children
    }
    return <Navigate state={{ from: location }} to="/login" replace />
};

export default PrivateRoute;