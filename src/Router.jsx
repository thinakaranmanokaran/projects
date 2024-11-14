import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicLayout from './layouts/public/PublicLayout';
import NavData from './components/public/navigation/NavData';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<PublicLayout />} >
                {
                    NavData.map((head, index) => (
                        head.subMenu.map((link, index) => (
                            <Route key={link.idkey} path={link.link} element={link.element} />
                        ))
                    ))
                }
            </Route>
        </Routes>
    );
};

export default Routers;
