function Header() {
    return (
        <header>
            <div className="my-6">
                <ul className="hidden sm:flex justify-center m-auto w-[400px] gap-5 py-8 backdrop-blur-sm bg-white/5 rounded-full">
                    <li className="text-gray-600 hover:text-gray-300 transition-all cursor-pointer font-semibold"><a href="#about">About</a></li>
                    <li className="text-gray-600 hover:text-gray-300 transition-all cursor-pointer font-semibold"><a href="#skills">Skills</a></li>
                    <li className="text-gray-600 hover:text-gray-300 transition-all cursor-pointer font-semibold"><a href="#projects">Projects</a></li>
                    <li className="text-gray-600 hover:text-gray-300 transition-all cursor-pointer font-semibold"><a href="#contact">Contact</a></li>
                </ul>
                <a href="" className="sm:hidden block">
                    <img src="./public/logoAN.png" className="w-14 m-auto cursor-pointer" alt="Logo" />
                </a>
            </div>
        </header>
    )
}

export default Header