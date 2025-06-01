import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import Skills from "./Skills"
import pdf from "../../assets/file/AysuNabizade-CV.pdf"
import homephoto from "../../assets/img/bgphoto.png"
import { HiChevronDoubleUp } from "react-icons/hi2";

function Main() {
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.addEventListener('scroll', function () {
        const button = document.querySelector('.scroll-to-top');
        const scrollPos = window.scrollY;
        const vwHeight = window.innerHeight;
        button.style.display = (scrollPos > (vwHeight * 0.5)) ? 'block' : 'none';
    });

    return (
        <main>
            <div onClick={scrollToTop} className="scroll-to-top bg-[#f3f5f5] p-4 hover:text-white rounded-full cursor-pointer shadow-md hidden hover:bg-black transition-all duration-300 fixed right-8 bottom-8 z-20">
                <HiChevronDoubleUp className="text-xl" />
            </div>
            <div className="lg:text-right text-center min-h-[80vh] pt-[15vh] container relative" id="home">
                <img src={homephoto} alt="photo" className="hidden lg:block h-[80vh] bottom-16 absolute left-[100px] rounded-full" />
                <div class="hidden lg:block group absolute bottom-16 left-[20%] origin-bottom-right duration-500 -rotate-12 hover:-rotate-0 hover:-skew-x-12 skew-x-0 hover:-translate-x-6  hover:translate-y-12">
                    <div class="duration-500 group-hover:duration-400 relative rounded-2xl w-64 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-64 before:h-32 before:-z-10 group-hover:before:-right-3 group-hover:before:skew-x-12 before:duration-500 group-hover:duration-500">
                        <span class="text-5xl font-bold">Jr</span>
                        <p class="text-amber-300 font-thin">- Frontend Developer -</p>
                    </div>
                </div>
                <div data-aos="fade-right"><p className="text-2xl text-yellow-700 italic">Hi, I'm</p></div>
                <div data-aos="zoom-in"><h1 className="text-[5em] font-bold text-gray-800 tracking-wide">Aysu Nabizade</h1></div>
                <div data-aos="fade-left"><p className="text-2xl text-yellow-700 italic tracking-widest">Front-End Developer</p></div>
                <div className="flex lg:justify-end justify-center my-8">
                    <a
                        href={pdf}
                        download
                        className="cursor-pointer flex justify-between bg-gray-800 px-4 py-2.5 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[170px]">
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