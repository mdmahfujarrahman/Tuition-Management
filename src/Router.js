import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import TopBar from "./Components/TopBar/TopBar";
import Dashboard from "./Page/Dashboard/Dashboard";
import Login from "./Page/Login/Login";

const Router = () => {
    const darkMode = "";

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const Layout = () => {
        return (
            <div className={`theme-${darkMode ? "dark" : "light"}`}>
                <div className="layout">
                    <TopBar />
                    <div className="outlet">
                        <Outlet />
                    </div>
                    <SideBar />
                </div>
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: "/dashboard",
            element: <Layout />,
            children: [
                {
                    path: "/dashboard",
                    element: <Dashboard />,
                },
            ],
        },
        {
            path: "/",
            element: <Login />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
