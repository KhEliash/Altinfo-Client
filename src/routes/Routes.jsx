import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import LogIn from "../pages/authentication/LogIn";
import Registration from "../pages/authentication/Registration";

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
                path: "/registration",
                element: <Registration></Registration>
            }
        ]
    }
])
export default router;