import React, { useState } from 'react';
import TemplatesDB from '../../data/templates/TemplatesDB';
import { useLocation } from 'react-router-dom';
import NavData from '../../components/public/navigation/NavData';
import { CiShare1, CiHeart } from "react-icons/ci";
import ShowMore from '../../components/global/ShowMore';
import BGBlur from '../../components/global/BGBlur';
import { BiX } from "react-icons/bi";

const Pages = () => {
    const location = useLocation(); // Get the current path
    const [likedItems, setLikedItems] = useState({});

    // Find matching NavData items based on the current path
    const activeNavData = NavData.flatMap(navItem =>
        navItem.subMenu ? navItem.subMenu : []
    ).find(subItem => subItem.link === location.pathname);

    // Filter ProjectDB items that match the active NavData ID
    const matchingProject = TemplatesDB.find(
        project => activeNavData && project.idkey === activeNavData.idkey
    );

    function toggleLike(idkey) {
        setLikedItems(prevLikedItems => ({
            ...prevLikedItems,
            [idkey]: !prevLikedItems[idkey]
        }));
    }

    const [showPopUP, setShowPopUP] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    function togglePopUP(item) {
        setSelectedItem(item)
        setShowPopUP(!showPopUP)
    }

    const TemplatePopUP = ({ item }) => {

        return (
            <div className='fixed inset-0 z-40 flex justify-center items-center'>
                <div className='bg-maxLight dark:bg-minDark shadow-lrg flex-col md:flex-row flex justify-center p-6 rounded-xl relative w-3/4 max-w-4/6'>
                    <div className='md:w-2/5'>
                        <img src={item.img} alt="" className='w-full h-40 md:h-72 object-cover object-top brightness-100 hover:brightness-50 transition-all duration-300 rounded-xl' />
                        <div className='flex items-center justify-end dark:text-minLight mt-2  space-x-1 text-2xl'>
                            <span
                                onClick={() => toggleLike(item.idkey)}
                                className={`cursor-pointer ${likedItems[item.idkey] ? "text-redd dark:text-redd" : "hover:text-redd"}`}
                            >
                                {likedItems[item.idkey] ? item.likedicon : item.favicon}
                            </span>
                            <span>{item.bookicon}</span>
                            <span>{item.shareicon}</span>
                        </div>
                    </div>
                    <div className='md:w-3/5 md:ml-4 mt-2'>
                        <div className="font-h1font text-3xl mb-2 dark:text-textWhite ">{item.title}</div>
                        <div className="font-paragrabhfont text-sm md:text-base mb-4 dark:text-textMild ">{item.paragrabh}</div>
                        { item.site && <a href={item.sitelink} target="_blank" rel="noopener noreferrer" className='bg-green scale-100 hover:scale-110 transition-all  duration-300 cursor-pointer  px-2 py-1 rounded-lg ml-6 inline-flex items-center  gap-x-2'>{item.site}<span>{item.siteicon}</span></a>}
                    </div>
                    <button onClick={togglePopUP} className='absolute -top-7 -right-7 rounded-full text-textDark dark:text-textLight hover:text-maxDark hover:bg-maxLight dark:hover:text-maxDark '>
                        <BiX className='size-8' />
                    </button>
                </div>
                <BGBlur />
            </div>

        )
    }

    return (
        <div className='bg-maxLight dark:bg-maxDark p-6 rounded-xl'>
            {/* Display ProjectDB title if there's a matching ID */}
            {matchingProject ? (
                <div>
                    <div className='text-4xl mb-2 font-h1font dark:text-textWhite ' >{matchingProject.title}</div>
                    <div className=' flex flex-col items-center md:grid md:grid-cols-2 xl:grid-cols-3'>
                        {
                            matchingProject.lists.map((list, index) => (
                                <div
                                    className='p-3 cursor-pointer bg-minGray dark:bg-minDark scale-100 hover:scale-105 transition-all duration-300 hover:shadow-mid w-fit m-2 rounded-2xl'
                                    key={list.idkey}
                                    onClick={() => togglePopUP(list)}
                                >
                                    {list.img ? (
                                        <div>
                                            <img
                                                src={list.img}
                                                alt=""
                                                className='w-80 h-40 md:h-52 md:w-full rounded-xl object-cover object-top'
                                            />
                                            <div className='p-2 flex items-center justify-between'>
                                                <div className='w-fit dark:text-minLight font-h1font text-xl'>{list.title}</div>
                                                <div className='flex items-center text-xl dark:text-textDark '>
                                                    <span
                                                        onClick={() => toggleLike(list.idkey)}
                                                        className={`cursor-pointer  ${likedItems[list.idkey] ? "text-redd dark:text-redd" : "hover:text-redd"}`}
                                                    >
                                                        {likedItems[list.idkey] ? list.likedicon : list.favicon}
                                                    </span>
                                                    <span>{list.bookicon}</span>
                                                    <span>{list.shareicon}</span>
                                                </div>
                                            </div>
                                            <ShowMore
                                                className={`ml-2 dark:text-textMild text-sm font-paragrabhfont`}
                                                text={list.paragrabh}
                                                minWords={10}
                                                maxWords={11}
                                                key={index}
                                            />
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                    {showPopUP && <TemplatePopUP item={selectedItem} />}
                </div>
            ) : (
                <div>No matching project found.</div>
            )}
        </div>
    );
};

export default Pages;
