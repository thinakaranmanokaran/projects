import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './../../components/public/header/Header'
import Footer from '../../components/public/footer/Footer'
import NavBar from '../../components/public/navigation/NavBar'
import PopUP from '../../components/global/PopUP';

const PublicLayout = () => {
    return (
        <div className=' p-6 min-h-screen max-h-full bg-minLight dark:bg-minDark min-w-screen  ' >
            <div className='flex' >
                <NavBar />
                <div className='w-full' >
                    <Header />
                    <div className='w-full mt-3 rounded-xl h-auto ' ><Outlet /></div>
                </div>
            </div>
            <div className='w-' >
                <Footer />
            </div>
            {/* <PopUP /> */}
        </div>
    )
}

export default PublicLayout