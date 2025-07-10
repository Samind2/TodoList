import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import TopBar from '../components/TopBar'

const Main = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-y-auto">
                {/* Top Bar */}
                <TopBar />
                <Outlet />
            </div>
        </div>
    )
}

export default Main