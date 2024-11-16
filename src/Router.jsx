import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicLayout from './layouts/public/PublicLayout';
import NavData from './components/public/navigation/NavData';
import Loader from './components/global/Loader';

const Home = lazy(() => import('./pages/Home'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

const DelayedSuspense = ({ children, delay }) => {
    const [isDelayComplete, setIsDelayComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsDelayComplete(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    if (!isDelayComplete) {
        return <Loader />;
    }

    return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

const Routers = () => {
    return (
        <DelayedSuspense delay={5000}>
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    <Route path="/" element={<Home />} />
                    {
                        NavData.map((head) =>
                            head.subMenu.map((link) => (
                                <Route key={link.idkey} path={link.link} element={link.element} />
                            ))
                        )
                    }
                </Route>
                <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
            </Routes>
        </DelayedSuspense>
    );
};

export default Routers;
