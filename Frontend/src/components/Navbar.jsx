import React from 'react';
import Index from '../Page/Home';

const Navbar = () => {
    

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-[#FF6867] text-white p-4 flex flex-col shadow-lg rounded-r-lg">
                {/* Profile */}
                <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img
                            src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="mt-4 font-bold text-lg">Sundar Gurung</h2>
                    <p className="text-sm text-white/80">sundargurung360@gmail.com</p>
                </div>

                {/* Menu */}
                <nav className="flex flex-col gap-3">
                    <a className="bg-white text-[#FF6867] py-2 px-4 rounded-md font-semibold flex items-center gap-2">
                        <span>🏠</span> Dashboard
                    </a>
                    <a className="hover:text-white/90 flex items-center gap-2">
                        <span>💡</span> Vital Task
                    </a>
                    <a className="hover:text-white/90 flex items-center gap-2">
                        <span>✅</span> My Task
                    </a>
                    <a className="hover:text-white/90 flex items-center gap-2">
                        <span>📋</span> Task Categories
                    </a>
                    <a className="hover:text-white/90 flex items-center gap-2">
                        <span>⚙️</span> Settings
                    </a>
                    <a className="hover:text-white/90 flex items-center gap-2">
                        <span>❓</span> Help
                    </a>
                </nav>

                {/* Logout Button */}
                <div className="mt-auto pt-10">
                    <button className="flex items-center gap-2 text-white hover:text-white/90">
                        <span>↩️</span> Logout
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
