import { CiShare1, CiHeart, CiBookmark, CiCirclePlus, CiShare2 } from "react-icons/ci";
import { BGRemover, PackageManager, SpotifyDownloader } from "./../../assets/images/screenshots/projects/index";

const ProjectDB = [
    {
        title: "Package Helper",
        preLink: "/projects",
        link:'https://thinakaranmanokaran.github.io/Package-Helper/',
        idkey: 201,
        img: `${PackageManager}`,
        overviewtitile: "Overview",
        feauturetitile: "Features",
        advantagestitile: "Advantages",
        overview: "Package Helper is a tool designed to streamline the management and tracking of software packages. It helps users organize, update, and track dependencies across various projects, making package handling more efficient and reducing the risk of version conflicts.",
        feautures: `Dependency Management
                    Version Tracking
                    Compatibility Checks
                    Update Notifications
                    Cross-Project Support
                    User-Friendly Interface
                    Efficient Package Search
                    Multi-Platform Compatibility`,
        advantages: `Simplified Package Management
                    Reduced Version Conflicts
                    Enhanced Project Organization
                    Time-Saving Updates
                    Improved Dependency Control
                    Multi-Platform Support
                    Increased Productivity`,
                    fav: "Favourite",
                    favicon: <CiHeart />, 
        book: "Bookmark",
        bookicon: <CiBookmark  />,
        short: "Shortcut",
        shorticon: <CiCirclePlus />,
        site: "View Site",
        siteicon: <CiShare1 />,
        share: "Share",
        shareicon: <CiShare2  />,
    },
    {
        title: "BG Remover",
        preLink: "/projects",
        idkey: 202,
        link:'https://thinakaranmanokaran.github.io/clean-n-cut/',
        img: `${BGRemover}`,
        overviewtitile: "Overview",
        feauturetitile: "Features",
        advantagestitile: "Advantages",
        overview: "BG Remover is a web application that allows users to remove image backgrounds with a single click. Using AI-based processing, it enables users to isolate subjects from backgrounds quickly and provides clean results suitable for various personal and professional uses.",
        feautures: `One-Click Background Removal
                    AI-Powered Processing
                    Image Upload and Download
                    Drag and Drop Support
                    Real-Time Preview
                    Smooth Animations
                    Responsive Design
                    High-Quality Output`,
        advantages: `Easy Background Removal
                    Fast and Accurate Results
                    User-Friendly Interface
                    Versatile for Different Uses
                    Saves Time on Editing
                    High-Quality Outputs
                    Responsive and Accessible`,
                    fav: "Favourite",
                    favicon: <CiHeart />,
                    book: "Bookmark",
                    bookicon: <CiBookmark  />,
                    short: "Shortcut",
                    shorticon: <CiCirclePlus />,
                    site: "View Site",
                    siteicon: <CiShare1 />,
        share: "Share",
        shareicon: <CiShare2  />,
    },
    {
        title: "Spotify Downloader",
        preLink: "/projects",
        link:'https://thinakaranmanokaran.github.io/spotmix-downloader/',
        idkey: 203,
        img: `${SpotifyDownloader}`,
        overviewtitile: "Overview",
        feauturetitile: "Features",
        advantagestitile: "Advantages",
        overview: "The Spotify Song Downloader is a streamlined web application designed to let users download songs directly from Spotify, providing an easy-to-use, efficient solution for offline music access. Through a simple, intuitive interface, users can search for their favorite tracks and download them quickly. The app aims to simplify the process of building a personalized offline music library, catering to those who want easy access to their preferred tracks without a streaming connection. Emphasizing usability, it removes complexities and ensures a hassle-free experience. It’s ideal for music lovers looking for quick, reliable song downloads in a well-designed, navigable platform.",
        feautures: `Direct Song Downloads 
                    Simple Search Functionality
                    User-Friendly Interface
                    Quality Selection Options
                    Playlist and Album Support
                    Offline Listening Mode
                    Lyrics Display
                    Cross-Platform Access`,
        advantages: `Convenient Offline Access
                    Time-Saving Downloads
                    Customizable Quality
                    Enhanced Listening Experience
                    Wide Accessibility
                    Personalized Collection
                    Increased Control Over Music`,
        fav: "Favourite",
        favicon: <CiHeart />,
        book: "Bookmark",
        bookicon: <CiBookmark  />,
        short: "Shortcut",
        shorticon: <CiCirclePlus />,
        site: "View Site",
        siteicon: <CiShare1 />,
        share: "Share",
        shareicon: <CiShare2  />,
    },
]

export default ProjectDB
