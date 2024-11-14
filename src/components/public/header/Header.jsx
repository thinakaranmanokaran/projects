import React, { useState, useEffect } from 'react';
import Logo from './../../../assets/images/Profile.jpg';
import { CiSearch, CiBellOn, CiMenuKebab } from "react-icons/ci";
import Theme from '../../global/Theme';
import HoverBox from '../../global/HoverBox';
import NavData from './../navigation/NavData';
import { Link, useLocation } from 'react-router-dom';
import { Notification } from "./../../global/index";

const Header = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [username, setUsername] = useState('');
    const location = useLocation(); // Get the current path

    const [showNotification, setShowNotification ] = useState(false);

    useEffect(() => {
        const storedUsername = localStorage.getItem('name');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    function toggleSearch() {
        setOpenSearch(!openSearch);
    }

    function toggleNotification() {
        setShowNotification(!showNotification);
    }

    // Filter NavData to match the current path
    const activeNavData = NavData.map(navItem => ({
        ...navItem,
        subMenu: navItem.subMenu.filter(subItem => subItem.link === location.pathname)
    })).filter(navItem => navItem.subMenu.length > 0);

    const [ openNavigation, setOpenNavigation ] = useState(false);

    function toggleNavigation() {
        setOpenNavigation(!openNavigation);
    }

    const MobileNavigation = () => {
        return(
            <div className='absolute xl:hidden z-20 top-28 right-6 bg-maxLight dark:bg-maxDark  backdrop-blur-2xl p-1 py-2 rounded-xl space-y-1 flex flex-col ' >
                {
                    NavData.map((list, index) => (
                        <div key={index} className='space-y-1' >
                            {
                                list.subMenu.map((data, subIndex) => (
                                    <div className='text-sm flex gap-x-1 items-center transition-all duration-300  hover:bg-minLight rounded-lg px-2 py-1 scale-100 hover:scale-110 dark:hover:text-maxDark dark:text-textMild ' >
                                        <span className='text-lg' >{data.icon}</span>
                                        <Link key={subIndex} to={data.link} className='' >{data.subtitle}</Link>
                                    </div>
                                ))
                            }
                            <div className='opacity-25' >{list.breakline}</div>
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <div className='w-full h-fit'>
            <HoverBox />
            <div className='bg-maxLight items-center flex justify-between rounded-lg py-4 px-4'>
                <div className='flex items-center'>
                    <img src={Logo} className="w-12" alt="Profile" />
                    <div className='ml-2' data-hoverpopup="username">
                        {username ? (
                            <h1 className='font-titlefont'>Welcome back, {username}!</h1>
                        ) : (
                            <h1 className='font-titlefont'>Hello, Guest!</h1>
                        )}
                    </div>
                </div>
                <div className='w-1/2 flex justify-end'>
                    <div className='w-full flex justify-end space-x-0 md:space-x-3'>
                        <div className='hidden justify-end'>
                            <div className={`transition-all  duration-300 flex items-center relative ${openSearch ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'} overflow-hidden`}>
                                <input
                                    type="text"
                                    className='bg-minGray w-full h-8 rounded-full peer focus:outline-0 pl-4 mr-2'
                                    style={{ transition: 'max-width 0.3s ease-in-out, opacity 0.3s ease-in-out' }}
                                />
                                <label className='absolute left-2 text-sm italic peer-focus:-top-2 peer-focus:bg-maxLight px-2 rounded-full transition-all duration-300 peer-focus:not-italic'>
                                    Search
                                </label>
                            </div>
                            <CiSearch
                                className='size-8 rounded-lg hover:fill-maxLight font-bold hover:bg-textDark p-1 cursor-pointer'
                                onClick={toggleSearch}
                            />
                        </div>
                        <Theme />
                        <div>
                            <CiBellOn onClick={toggleNotification} className='size-8 hidden rounded-lg hover:fill-maxLight font-bold hover:bg-textDark p-1 cursor-pointer' />
                        </div>
                        <div>
                            <CiMenuKebab onClick={toggleNavigation} className='size-8 xl:hidden rounded-lg hover:fill-maxLight font-bold hover:bg-textDark p-1 cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
            {activeNavData.map((NavDetails, index) => (
                <div key={index} className='mt-3 flex items-center space-x-1'>
                    <div className='bg-minGray py-1 px-2 rounded-xl text-[14px]'>{NavDetails.title}</div>
                    <div className='text-minGray text-xl'>/</div>
                    {NavDetails.subMenu.map((NavMenus, subIndex) => (
                        <Link key={subIndex} to={NavMenus.link}>
                            <div className='bg-minGray dark:bg-blue py-1 px-2 rounded-xl text-[14px] cursor-pointer'>{NavMenus.subtitle}</div>
                        </Link>
                    ))}
                </div>
            ))} 
            { showNotification && <Notification />}
            { openNavigation && <MobileNavigation /> }
        </div>
    );
};

export default Header;
