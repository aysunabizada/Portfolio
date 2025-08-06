import pdf from "../../assets/file/AysuNabizade-CV.pdf"
import Grid from "./Grid"

function Main() {
    return (
        <main>
            <div className="md:pl-0 pl-10 min-h-[80vh] pt-[15vh] m-auto container">
                <div data-aos="fade-right"><p className="text-2xl text-[#fff] italic">Hi, I'm</p></div>
                <div data-aos="zoom-in"><h1 className="text-[5em] font-bold text-white tracking-wide">Aysu Nabizade</h1></div>
                <div data-aos="fade-left"><p className="text-2xl text-[#fff] italic tracking-widest">Front-End Developer</p></div>
                <div className="flex my-8">
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
            {/* <div className="container mx-auto">
                <Grid />
            </div> */}
        </main>
    )
}

export default Main