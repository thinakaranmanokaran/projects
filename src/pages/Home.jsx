import React from 'react';
import ProjectDB from './../data/projects/ProjectDB'; // Adjust path as necessary
import TemplateDB from './../data/templates/TemplatesDB'; // Adjust path as necessary
import { ShowMore } from '../components/global';

const Home = () => {
    // Get the last child from the ProjectDB array
    const latestProject = ProjectDB[ProjectDB.length - 1];
    const latestItem = latestProject.lists ? latestProject.lists[0] : latestProject;
    
    const latestTemplate = TemplateDB[TemplateDB.length - 1];
    const latestDesign = latestTemplate.lists ? latestTemplate.lists[0] : latestTemplate;

    return (
        <div className="bg-maxLight dark:bg-maxDark w-full h-full p-6 rounded-lg">
            <div className="text-lg dark:text-textLight ">Welcome to</div>
            <div className="font-h1font text-4xl mb-4 dark:text-maxLight ">Thinakaran's Project Hub</div>
            <div className="mb-6 dark:text-textLight ">
                Discover cutting-edge tools, resources, and templates designed to streamline your projects. Explore my curated library of software tools, professional templates, and innovative dashboards that cater to various needs.
            </div>
            <div className="font-h1font text-3xl mb-4 dark:text-maxLight text-center  ">Latest Projects </div>
            <div className='md:flex justify-around space-y-4 md:space-y-0 ' >
                <div>
                    <div className="flex flex-col space-y-4 ">
                        <div className="p-4 bg-maxGray dark:bg-minDark  rounded-2xl max-w-80 xl:w-96 w-full  ">
                            <h3 className="text-xl mb-3 dark:text-minGray font-semibold">{latestItem.title}</h3>
                            <img className='w-full h-40 md:w-80 md:h-52 object-cover object-top rounded-xl ' src={latestItem.img} alt="" srcset="" />
                            <ShowMore className={`text-sm dark:text-textGray w-full m-1 `} maxWords={20} text={`${latestItem.overview}`} />
                            <div className='flex justify-end' ><a href={latestItem.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block w-full md:w-fit text-center bg-green rounded-lg px-2 py-2 text-sm scale-100 transition-all duration-300  self-end hover:scale-110" > View Project </a></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col space-y-4 ">
                        <div className="p-4 bg-maxGray dark:bg-minDark  rounded-2xl max-w-80 xl:w-96 w-full  ">
                            <h3 className="text-xl mb-3 dark:text-minGray font-semibold">{latestDesign.title}</h3>
                            <img className=' w-full h-40 md:w-80 md:h-52 object-cover object-top rounded-xl ' src={latestDesign.img} alt="" srcset="" />
                            <ShowMore className={`text-sm dark:text-textGray w-full  m-1 `} maxWords={20} text={`${latestDesign.paragrabh}`} />
                            <div className='flex justify-end' ><a href={latestDesign.sitelink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block w-full md:w-fit text-center bg-green rounded-lg px-2 py-2 text-sm scale-100  transition-all duration-300  self-end hover:scale-110" > View Project </a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
