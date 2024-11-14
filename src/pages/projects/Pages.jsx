import React from 'react';
import ProjectDB from '../../data/projects/ProjectDB';
import { useLocation } from 'react-router-dom';
import NavData from '../../components/public/navigation/NavData';
import { CiShare1, CiHeart  } from "react-icons/ci";

const Pages = () => {
    const location = useLocation(); // Get the current path

    // Find matching NavData items based on the current path
    const activeNavData = NavData.flatMap(navItem =>
        navItem.subMenu ? navItem.subMenu : []
    ).find(subItem => subItem.link === location.pathname);

    // Filter ProjectDB items that match the active NavData ID
    const matchingProject = ProjectDB.find(
        project => activeNavData && project.idkey === activeNavData.idkey
    );

    return (
        <div className='bg-maxLight dark:bg-maxDark p-6 rounded-xl'>
            {/* Display ProjectDB title if there's a matching ID */}
            {matchingProject ? (
                <div>
                    <div className='flex items-center ' >
                        <div className='text-4xl mb-2 font-h1font dark:text-textWhite '>{matchingProject.title}</div>
                        <a href={matchingProject.link} target='_blank' className='bg-green scale-100 hover:scale-110 transition-all  duration-300 cursor-pointer  px-2 py-1 rounded-lg ml-6 inline-flex items-center ' >{matchingProject.site}<span  className=' text-lg ml-2 flex items-center'>{matchingProject.siteicon}</span> </a>
                        {/* <div className=' items-center ' >
                            <span className='bg-redd scale-100 hover:scale-110 transition-all duration-300 cursor-pointer  px-2 py-1 rounded-lg ml-6 inline-flex items-center ' >{matchingProject.fav}<span  className=' text-lg ml-2 flex items-center'>{matchingProject.favicon}</span> </span>
                            <span className='bg-yelloww scale-100 hover:scale-110 transition-all duration-300 cursor-pointer  px-2 py-1 rounded-lg ml-6 inline-flex items-center ' >{matchingProject.book}<span  className=' text-lg ml-2 flex items-center'>{matchingProject.bookicon}</span> </span>
                            <span className='bg-violet scale-100 hover:scale-110 transition-all duration-300 cursor-pointer  px-2 py-1 rounded-lg ml-6 inline-flex items-center ' >{matchingProject.short}<span  className=' text-lg ml-2 flex items-center'>{matchingProject.shorticon}</span> </span>
                            <span className='bg-blue scale-100 hover:scale-110 transition-all duration-300 cursor-pointer  px-2 py-1 rounded-lg ml-6 inline-flex items-center ' >{matchingProject.share}<span  className=' text-lg ml-2 flex items-center'>{matchingProject.shareicon}</span> </span>
                        </div> */}
                    </div>
                    <div className='text-2xl mb-1 font-h1font dark:text-textWhite'>{matchingProject.overviewtitile}</div>
                    <div className='dark:text-textDark font-paragrabhfont '>{matchingProject.overview}</div>
                    <div className='md:flex items-start mt-2 justify-between'>
                        <div className='md:w-1/2 pr-4'>
                            <div className='text-2xl mb-1 font-h1font dark:text-textWhite'>{matchingProject.feauturetitile}</div>
                            <ul>
                                {(matchingProject.feautures ? matchingProject.feautures.split('\n') : []).map((feature, index) => (
                                    <li className='list-disc font-paragrabhfont  dark:text-textDark ml-6' key={index}>{feature.trim()}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='md:w-1/2 pr-4'>
                            <div className='text-2xl mb-1 font-h1font dark:text-textWhite'>{matchingProject.advantagestitile}</div>
                            <ul>
                                {(matchingProject.advantages ? matchingProject.advantages.split('\n') : []).map((advantage, index) => (
                                    <li className='list-disc font-paragrabhfont  dark:text-textDark ml-6' key={index}>{advantage.trim()}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='w-full flex justify-center mt-6' >
                        <img src={matchingProject.img} alt="" srcset="" className='md:w-3/4 rounded-xl bg-minDarkOP p-3 ' />
                    </div>
                </div>
            ) : (
                <div>No matching project found.</div>
            )}
        </div>
    );
};

export default Pages;
