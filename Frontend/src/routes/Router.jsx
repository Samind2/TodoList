import React from 'react';
import { createBrowserRouter } from "react-router-dom"; // 
import MainLayout from '../Layout/Main.jsx'; // Import the Main layout component";
import Home from '../Page/Home/index.jsx'; // Import the Home page component

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }]
    }])


export default router;