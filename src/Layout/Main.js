import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';
import Navbar from '../Components/Shared/Navbar';

export const OptionContext = createContext()

const Main = () => {
    const [options, setOptions] = useState("Ethereum Kovan")
    const value = {
        options,
        setOptions
    }

    return (
        <OptionContext.Provider value={value}>
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </OptionContext.Provider>
    );
};

export default Main;