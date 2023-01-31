import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../Components/Dashboard/AdminDashboard";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Register from "../Components/LoginRegister/Register";
import Login from "../Components/LoginRegister/Login";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/adminDashboard",
                element: <AdminDashboard />
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])