import { Box } from '@mui/material';
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
                <Box sx={{
                    height: "100vh"
                }}>
                    <Outlet />
                </Box>
                <Footer />
            </div>
        </OptionContext.Provider>
    );
};

export default Main;