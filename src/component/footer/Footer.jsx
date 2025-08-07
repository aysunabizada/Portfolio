// import { Link } from "react-router"
import { FaLinkedin , FaGithubSquare} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";

function Footer() {
    return (
        <footer className="container m-auto py-10 px-8 sm:px-0 flex items-center justify-between">
            <p className="text-gray-400 tracking-wider font-semibold">
                © {new Date().getFullYear()} | Aysu Nabizade
            </p>
            <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/aysunabizada1/"><FaLinkedin className='text-[2em] text-gray-400 hover:text-gray-100 hover:shadow-gray-500 shadow-xl' /></a>
                <a href="https://github.com/aysunabizada"><FaGithubSquare className='text-[2em] text-gray-400 hover:text-gray-100 hover:shadow-gray-500 shadow-xl' /></a>
                <a href="https://x.com/AysuNebizade"><FaSquareXTwitter className='text-[2em] text-gray-400 hover:text-gray-100 hover:shadow-gray-500 shadow-xl' /></a>
                <a href="https://vercel.com/aysus-projects-a7666433"><IoLogoVercel className='text-[2em] text-gray-400 hover:text-gray-100 hover:shadow-gray-500 shadow-xl' /></a>
            </div>
        </footer>
    )
}

export default Footer