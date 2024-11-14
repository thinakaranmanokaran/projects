import React from "react";
import {
    CiUser,
    CiHome,
    CiShoppingTag,
    CiSettings,
    CiStar,
} from "react-icons/ci";
import { Link } from "react-router-dom";

const ProjectIndex = [
    {
        subtitle: "Package Helper",
        icon: <CiHome />,
        // link: 'https://thinakaranmanokaran.github.io/Package-Helper/', // external link
        link: '/package-helper'
    },
    {
        subtitle: "BG Remover",
        icon: <CiStar />,
        // link: 'https://thinakaranmanokaran.github.io/clean-n-cut/', // external link
        link: '/bg-remover'
    },
    {
        subtitle: "Spotify Download",
        icon: <CiShoppingTag />,
        // link: 'https://thinakaranmanokaran.github.io/spotmix-downloader/', // external link
        link: '/spotify-downloader'
    },
]

export default ProjectIndex