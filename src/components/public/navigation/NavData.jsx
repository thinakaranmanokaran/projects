import React from "react";
import { CiUser, CiHome, CiShoppingTag, CiSettings, CiStar,} from "react-icons/ci";

import { Pages as TemplatePages } from "./../../../pages/templates/index";
import { Pages as ProjectPages  } from "./../../../pages/projects/index";
import { Home, Profile, Settings } from "./../../../pages/index";

const NavData = [
    // {
    //     title: "Pages",
    //     linkPrefix: "/pages",
    //     subMenu: [
    //         {
    //             subtitle: "Home",
    //             icon: <CiHome />,
    //             link: '/',
    //             element: <Home />,
    //             idkey: 101,
    //         },
    //         // {
    //             //     subtitle: "Account",
    //             //     icon: <CiStar />,
    //             //     link: '/account', // internal link
    //             // },
    //             // {
    //                 //     subtitle: "Pricing",
    //                 //     icon: <CiShoppingTag />,
    //                 //     link: '/pricing', // internal link
    //                 // },
    //                 {
    //                     subtitle: "Settings",
    //                     icon: <CiSettings />,
    //                     link: '/settings', 
    //                     element: <Settings />,
    //                     idkey: 102,
    //                 },
    //                 {
    //                     subtitle: "Profile",
    //                     icon: <CiUser />,
    //                     link: '/profile', 
    //                     element: <Profile />,
    //                     idkey: 103,
    //                 },
    //             ],
    // },
    {
        title: "Projects",
        // linkPrefix: "/projects", 
        subMenu: [
            {
                subtitle: "Package Helper",
                icon: <CiHome />,
                link: '/package-helper',
                element: <ProjectPages />,
                idkey: 201,
            },
            {
                subtitle: "BG Remover",
                icon: <CiStar />,
                link: '/bg-remover',
                element: <ProjectPages />,
                idkey: 202,
            },
            {
                subtitle: "Spotify Download",
                icon: <CiShoppingTag />,
                link: '/spotify-downloader',
                element: <ProjectPages />,
                idkey: 203,
            },
        ],
        breakline: <hr className="bg-maxDark dark:text-textMild" />,
    },
    {
        title: "Templates",
        subMenu: [
            {
                subtitle: "Portfolio",
                icon: <CiHome />,
                link: "/portfolios",
                element: <TemplatePages />,
                idkey: 301,
            },
            {
                subtitle: "Dashboards",
                icon: <CiStar />,
                link: "/dashboards",
                element: <TemplatePages />,
                idkey: 302,
            },
            {
                subtitle: "Landing Pages",
                icon: <CiShoppingTag />,
                link: "/landing-pages",
                element: <TemplatePages />,
                idkey: 303,
            },
        ],
    },
];

export default NavData;