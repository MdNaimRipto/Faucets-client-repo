import { Typography } from '@mui/material';
import React from 'react';

const AdminDashboard = () => {
    return (
        <div>
            <Typography variant='h2' sx={{
                color: "#fff",
                fontSize: "16px",
                backgroundColor: "#9b1fe9",
                padding: "25px 0px",
                fontFamily: "sans-serif",
                fontWeight: "500"
            }}>
                Admin Dashboard
            </Typography>

        </div>
    );
};

export default AdminDashboard;