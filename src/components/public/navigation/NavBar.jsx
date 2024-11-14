import React from "react";
import {
    CiUser,
    CiHome,
    CiShoppingTag,
    CiSettings,
    CiStar,
} from "react-icons/ci";
import { Link } from "react-router-dom";
import NavData from "./NavData";

const NavBar = () => {
    return (
        <div className="w-fit h-fit">
            <div className="bg-maxLight dark:bg-maxDark h-full mr-3 rounded-xl p-3 py-6 hidden xl:block ">
                {NavData.map((navigation, index) => (
                    <div key={index}>
                        <div className="text-textGray dark:text-maxGray text-sm my-2 rounded-md transition-all w-full scale-100 pl-2 py-1">
                            {navigation.title}
                        </div>
                        {navigation.subMenu.map((navLinks, index) => (
                            <Link
                                key={index}
                                to={navLinks.link}
                                className="flex justify-between space-y-1 cursor-pointer items-end scale-100 rounded-md transition-all px-2 hover:scale-110 focus:bg-minLight focus:outline-none hover:bg-minGray"
                            >
                                <span className="text-xl text-textDark font-bold mb-1.5">
                                    {navLinks.icon}
                                </span>
                                <div className="text-textDark font-bold text-[15px] w-32 pl-2 py-1">
                                    {navLinks.subtitle}
                                </div>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NavBar;
