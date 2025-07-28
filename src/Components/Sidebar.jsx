import React from 'react';
import { FaHome, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-blue-800 text-white p-6 hidden md:block">
            <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
            <nav className="space-y-4">
                <a href="#" className="flex items-center gap-2 hover:text-blue-200">
                    <FaHome /> Home
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-blue-200">
                    <FaUser /> Profile
                </a>
                <a href="/login" className="flex items-center gap-2 hover:text-red-300">
                    <FaSignOutAlt /> Logout
                </a>
            </nav>
        </aside>
    );
};

export default Sidebar;
