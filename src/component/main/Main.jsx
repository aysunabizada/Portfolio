import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import Skills from "./Skills"

function Main() {
    return (
        <main>
            <div className="min-w-[20vw] m-auto text-center min-h-[80vh] pt-[15vh]">
                <div data-aos="fade-right"><p className="text-2xl text-blue-300 italic">Hi, I'm</p></div>
                <div data-aos="zoom-in"><h1 className="text-[5em] font-bold text-gray-400">Aysu Nabizada</h1></div>
                <div data-aos="fade-left"><p className="text-2xl text-blue-300 italic tracking-widest">Front-End Developer</p></div>
                <div className="flex justify-center my-8">
                    <a
                        href="src/assets/file/AysuNabizadaCV.pdf"
                        download="AysuNabizadaCV.pdf"
                        className="cursor-pointer flex justify-between bg-gray-800 px-4 py-2.5 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[165px]">
                        Download CV
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 animate-bounce">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0L4.5 13.5M12 21V3"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    )
}

export default Main