import { Box } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';
import Navbar from '../Components/Shared/Navbar';

const Secondary = () => {
    return (
        <div>
            <Navbar />
            <Box sx={{
                height: "100vh"
            }}>
                <Outlet />
            </Box>
            <Footer />
        </div>
    );
};

export default Secondary;