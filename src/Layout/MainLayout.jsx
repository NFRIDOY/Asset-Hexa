import React from 'react';
import Nav from '../Shared/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;