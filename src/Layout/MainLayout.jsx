import React from 'react';
import Nav from '../Shared/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='min-h-[calc(100vh-56px-256px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;