import React from 'react';
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Welcome to My Portfolio</h1>
            <Outlet />
        </>
    );
};

export default Home;