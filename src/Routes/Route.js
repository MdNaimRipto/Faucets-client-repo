import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
// import Login from "../Components/LoginRegister/Login";
import Main from "../Layout/Main";
// import Secondary from "../Layout/Secondary";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ]
    },
    // {
    //     path: "/",
    //     element: <Secondary />,
    //     children: [
    //         {
    //             path: "/login",
    //             element: <Login />
    //         }
    //     ]
    // }
])