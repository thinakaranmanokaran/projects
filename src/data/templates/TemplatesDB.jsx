import { CiShare1, CiHeart, CiBookmark, CiCirclePlus, CiShare2 } from "react-icons/ci";
import { BiHeart, BiSolidHeart } from "react-icons/bi";

import { Admin1, Admin2, Admin3, Admin4 } from "./../../assets/images/screenshots/templates/dashboard/index";
import { LandingPage1 } from "../../assets/images/screenshots/templates/landing-pages";
import { PortfolioTemplate1, PortfolioTemplate2, PortfolioTemplate3, PortfolioTemplate4, PortfolioTemplate5, PortfolioTemplate6, PortfolioTemplate7, PortfolioTemplate8, PortfolioTemplate9 } from "../../assets/images/screenshots/templates/portfolios";

const ProjectDB = [
    {
        title: "Portfolio",
        preLink: "/templates",
        idkey: 301,
        lists: [
            {
                title: "Creative Portfolio",
                paragrabh: "A vibrant and modern portfolio template for creatives, featuring sections for project galleries, personal bio, and a contact form. Ideal for designers and artists to showcase their unique work.",
                idkey: 3101,
                img: `${PortfolioTemplate1}`,
                favicon: <BiHeart />,
                likedicon: <BiSolidHeart />,
                bookicon: <CiBookmark />,
                shareicon: <CiShare2 />,
                siteicon: <CiShare1 />,
                site: "View Site",
                sitelink: "https://thinakaranmanokaran.github.io/Templates/Portfolio-Templates/Personal-Portfolios-master/Personal-Portfolio-1/index.html"
            },
            {
                title: "Minimalist Portfolio",
                paragrabh: "Designed with simplicity in mind, this minimalist template is perfect for professionals who prefer a clean, distraction-free layout. Includes sections for projects, skills, and a concise personal statement.",
                idkey: 3102,
                img: `${PortfolioTemplate2}`,
                favicon: <BiHeart />,
                likedicon: <BiSolidHeart />,
                bookicon: <CiBookmark />,
                shareicon: <CiShare2 />,
                siteicon: <CiShare1 />,
                site: "View Site",
                sitelink: "https://thinakaranmanokaran.github.io/Templates/Portfolio-Templates/Personal-Portfolios-master/Personal-Portfolio-2/index.html"
            },
            {
                title: "Photographer Portfolio",
                paragrabh: "Showcase photography with a portfolio template optimized for high-resolution imagery. It includes galleries, a biography section, and testimonials to highlight a photographer’s work and style.",
                idkey: 3103,
                img: `${PortfolioTemplate3}`,
                favicon: <BiHeart />,
                likedicon: <BiSolidHeart />,
                bookicon: <CiBookmark />,
                shareicon: <CiShare2 />,
                siteicon: <CiShare1 />,
                site: "View Site",
                sitelink: "https://thinakaranmanokaran.github.io/Templates/Portfolio-Templates/Personal-Portfolios-master/Personal-Portfolio-3/index.html"
            },
            {
                title: "Personal Brand Portfolio",
                paragrabh: "Built for personal branding, this portfolio template features a hero section, bio, and project showcase to help professionals make a memorable first impression online.",
                idkey: 3104,
                img: `${PortfolioTemplate4}`,
                favicon: <BiHeart />,
                likedicon: <BiSolidHeart />,
                bookicon: <CiBookmark />,
                shareicon: <CiShare2 />,
                siteicon: <CiShare1 />,
                site: "View Site",
                sitelink: "https://thinakaranmanokaran.github.io/Templates/Portfolio-Templates/Personal-Portfolios-master/Personal-Portfolio-4/index.html"
            },
            {
                title: "Freelancer Portfolio",
                paragrabh: "Tailored for freelancers, this template features sections for work samples, client testimonials, and a contact form. It’s perfect for anyone looking to attract and engage potential clients.",
                idkey: 3105,
                img: `${PortfolioTemplate5}`,
                favicon: <BiHeart />,
                likedicon: <BiSolidHeart />,
                bookicon: <CiBookmark />,
                shareicon: <CiShare2 />,
                siteicon: <CiShare1 />,
                site: "View Site",
                sitelink: "https://thinakaranmanokaran.github.io/Templates/Portfolio-Templates/Personal-Portfolios-master/Personal-Portfolio-5/index.html"
            },
            {
                title: "Developer Portfolio",
                paragrabh: "A robust portfolio template for developers, featuring code samples, project showcases, and GitHub integration. Ideal for presenting skills and technical expertise in an organized way.",
                idkey: 3106,
                img: `${PortfolioTemplate6}`,
                favicon: <BiHeart />,
                likedicon: <BiSolidHeart />,
                bookicon: <CiBookmark />,
                shareicon: <CiShare2 />,
                siteicon: <CiShare1 />,
                site: "View Site",
                sitelink: "https://thinakaranmanokaran.github.io/Templates/Portfolio-Templates/Personal-Portfolios-master/Personal-Portfolio-6/index.html"
            },
            {
                title: "Artist Portfolio",
                paragrabh: "An artistic template designed for creatives to highlight their work with a unique gallery layout, project descriptions, and a personal bio. Ideal for painters, illustrators, and visual artists.",
                idkey: 3107,
                img: `${PortfolioTemplate7}`,
                favicon: <BiHeart />,
                likedicon: <BiSolidHeart />,
                bookicon: <CiBookmark />,
                shareicon: <CiShare2 />,
                siteicon: <CiShare1 />,
                site: "View Site",
                sitelink: "https://example.com/artist-portfolio"
            },
            {
                title: "Content Creator Portfolio",
                paragrabh: "This template suits content creators with sections for blogs, videos, and social media links, allowing a seamless showcase of digital content and audience engagement.",
                idkey: 3108,
                img: `${PortfolioTemplate8}`,
                favicon: <BiHeart />,
                likedicon: <BiSolidHeart />,
                bookicon: <CiBookmark />,
                shareicon: <CiShare2 />,
                siteicon: <CiShare1 />,
                site: "View Site",
                sitelink: "https://thinakaranmanokaran.github.io/Templates/Portfolio-Templates/Personal-Portfolios-master/Personal-Portfolio-7/index.html"
            },
            {
                title: "Agency Portfolio",
                paragrabh: "An agency-focused portfolio with features like team bios, project case studies, and client testimonials. Perfect for design agencies, marketing firms, and other service-oriented businesses.",
                idkey: 3109,
                img: `${PortfolioTemplate9}`,
                favicon: <BiHeart />,
                likedicon: <BiSolidHeart />,
                bookicon: <CiBookmark />,
                shareicon: <CiShare2 />,
                siteicon: <CiShare1 />,
                site: "View Site",
                sitelink: "https://thinakaranmanokaran.github.io/Templates/Portfolio-Templates/Personal-Portfolios-master/Personal-Portfolio-9/index.html"
            }
        ]
    },
    {
        title: "Dashboards",
        preLink: "/templates",
        idkey: 302,
        lists: [
            {
                title: "E-commerce Dashboard",
                idkey: 3201,
                img: `${Admin1}`,
                paragrabh: "An admin dashboard template designed for e-commerce platforms, including features like sales analytics, product management, and order tracking for efficient store management.",
                favicon: <BiHeart />,
                likedicon: <BiSolidHeart />,
                bookicon: <CiBookmark />,
                shareicon: <CiShare2 />,
                siteicon: <CiShare1 />,
                site: "View Site",
                sitelink: "https://thinakaranmanokaran.github.io/Templates/Dashboard-Designs/Admin-Dashboard-01/index.html"
            },
            {
                title: "Project Management Dashboard",
                idkey: 3202,
                img: `${Admin2}`,
                paragrabh: "A template for managing projects, tracking progress, and visualizing data with features such as task boards, timeline views, and team collaboration tools.",
                favicon: <BiHeart />,
                likedicon: <BiSolidHeart />,
                bookicon: <CiBookmark />,
                shareicon: <CiShare2 />,
                siteicon: <CiShare1 />,
                site: "View Site",
                sitelink: "https://thinakaranmanokaran.github.io/Templates/Dashboard-Designs/Admin-Dashboard-02/index.html"
            },
            {
                title: "Healthcare Dashboard",
                idkey: 3203,
                img: `${Admin3}`,
                paragrabh: "A specialized dashboard for healthcare professionals, including features for patient records, appointment scheduling, and health data tracking.",
                favicon: <BiHeart />,
                likedicon: <BiSolidHeart />,
                bookicon: <CiBookmark />,
                shareicon: <CiShare2 />,
                siteicon: <CiShare1 />,
                site: "View Site",
                sitelink: "https://thinakaranmanokaran.github.io/Templates/Dashboard-Designs/Dashboard-Design-01/index.html"
            },
            {
                title: "Finance Dashboard",
                idkey: 3204,
                img: `${Admin4}`,
                paragrabh: "A financial dashboard template offering tools for tracking expenses, revenue, investments, and creating reports to monitor financial health.",
                favicon: <BiHeart />,
                likedicon: <BiSolidHeart />,
                bookicon: <CiBookmark />,
                shareicon: <CiShare2 />,
                siteicon: <CiShare1 />,
                site: "View Site",
                sitelink: "https://thinakaranmanokaran.github.io/Templates/Dashboard-Designs/Dashboard-Design-02/index.html"
            }
        ]
    },
    {
        title: "Landing Pages",
        preLink: "/templates",
        idkey: 303,
        lists: [
            {
                title: "AI Hub Landing Page",
                idkey: 3301,
                img: `${LandingPage1}`,
                paragrabh: "A modern landing page designed for AI startups, featuring sections for product features, team, testimonials, and a call-to-action for sign-ups or product demos.",
                favicon: <BiHeart />,
                likedicon: <BiSolidHeart />,
                bookicon: <CiBookmark />,
                shareicon: <CiShare2 />,
                siteicon: <CiShare1 />,
                site: "View Site",
                sitelink: "https://thinakaranmanokaran.github.io/Templates/Landing-Pages/AI-Landing-Page/index.html"
            }
        ]
    },
]

export default ProjectDB;
