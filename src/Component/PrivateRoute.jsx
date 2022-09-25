import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../auth";
import Login from "../Pages/Login";

export default function PrivateRoute() {   
    return isLoggedIn() ? <Outlet/> : <Navigate to={"/login"} />
}
