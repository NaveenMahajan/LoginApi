import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Dashboard = () => {
    return (
        <div className="flex h-screen">

            <Sidebar />


            <div className="flex-1 flex flex-col">

                <Header />


                <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <h1 className="text-xl font-bold col-span-full">Dashboard</h1>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
