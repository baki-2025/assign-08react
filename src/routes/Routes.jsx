import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";
import MyInstallation from "../pages/MyInstallation/MyInstallation";
import ErrorApp from "../pages/ErrorApp/ErrorApp";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorApp />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch("/appsData.json"),
            },
            {
                path: "apps",
                element: <Apps />,
                loader: () => fetch("/appsData.json"),
            },

            {
                path: "myInstallation",
                element: <MyInstallation />,
                
            },
            {
                path: "apps/:id",
                element: <AppDetails />,
                loader: () => fetch("/appsData.json"),


            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ],
    },
]);
