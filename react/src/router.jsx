import { createBrowserRouter } from "react-router-dom";

import Login from "./views/login.jsx";
import Singup from "./views/singup.jsx";
import Users from "./views/users.jsx";
import NotFound from "./views/notFound.jsx";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/singup",
        element: <Singup />,
    },
    {
        path: "/users",
        element: <Users />,
    },
    {
        path: "/",
        element: <h1>Home</h1>,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
