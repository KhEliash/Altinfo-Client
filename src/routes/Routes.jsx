import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import LogIn from "../pages/authentication/LogIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
         children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "*",
                element: <h1>404</h1>
            }
        ]
    }
])
export default router;