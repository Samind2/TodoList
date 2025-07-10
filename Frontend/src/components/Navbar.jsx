import React from 'react';

const Navbar = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-base-200 p-4 shadow-lg justify-center flex flex-col">
                <h1 className="text-2xl font-bold mb-6 text-center">Todo List</h1>
                <div className="flex justify-center mb-6">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                        </div>
                    </div>
                </div>
                <ul className="menu">
                    <li><a>Item 1</a></li>
                    <li>
                        <details open>
                            <summary>Parent</summary>
                            <ul>
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>

                <div className="mt-auto flex flex-col gap-2 pt-10">
                    <a className="btn btn-outline">Login</a>
                    <a className="btn btn-primary">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
