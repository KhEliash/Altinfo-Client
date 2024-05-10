import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import LogIn from "../pages/authentication/LogIn";
import Registration from "../pages/authentication/Registration";
import Queries from "../pages/Queries";
import RecomendetionMe from "../pages/RecomendetionMe";
import MyQueries from "../pages/MyQueries";
import MyRecommendation from "../pages/MyRecommendation";

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
            },
            {
                path: "/queries",
                element: <Queries></Queries>
            },
            {
                path: "/recommendation",
                element: <RecomendetionMe></RecomendetionMe>
            },
            {
                path: "/myqueries",
                element: <MyQueries></MyQueries>
            },
            {
                path: "/myrecommendation",
                element: <MyRecommendation></MyRecommendation>
            }
        ]
    }
])
export default router;