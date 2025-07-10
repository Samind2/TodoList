import React from 'react'

const TopBar = () => {
    const today = new Date();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = dayNames[today.getDay()];
    const date = today.toLocaleDateString('en-GB'); // dd/mm/yyyy
    return (
     <div className="bg-white rounded-lg p-4 shadow flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">
                <span className="text-[#FF6867]">Dash</span>board
            </h1>

            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-1/2">
                <input
                    type="text"
                    placeholder="Search your task here..."
                    className="bg-transparent outline-none flex-1"
                />
                <button className="ml-2 bg-[#FF6867] p-2 rounded-full text-white">🔍</button>
            </div>

            <div className="flex items-center gap-4">
                <button className="bg-[#FF6867] p-2 rounded-full text-white">📅</button>
                <button className="bg-[#FF6867] p-2 rounded-full text-white">🔔</button>
                <div className="text-right">
                    <p className="text-sm font-medium">{day}</p>
                    <p className="text-xs text-blue-400">{date}</p>
                </div>
            </div>
        </div>
    );
};


export default TopBar