import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout() {
    const { user, token } = useStateContext();

    if (!user && !token) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            DefaultLayout
            <Outlet />
        </div>
    );
}
