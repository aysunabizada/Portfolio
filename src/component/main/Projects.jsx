import data from "../../data/data"
import { RiReactjsFill, RiTailwindCssFill, RiBootstrapFill } from "react-icons/ri";
import { FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

const techIcons = {
    "React": <RiReactjsFill />,
    "JavaScript": <FaJs />,
    "TailwindCSS": <RiTailwindCssFill />,
    "HTML5": <FaHtml5 />,
    "CSS3": <FaCss3Alt />,
    "Bootstrap": <RiBootstrapFill />
};

function Projects() {
    return (
        <section id="projects" className="container m-auto py-10">
            <h2 className="font-semibold text-gray-400 text-xl border-b py-4 border-gray-800 italic px-3">PROJECTS</h2>
            <p className="text-gray-300 pt-6 px-3 text-lg">You can go to the site by clicking on the pictures!</p>
            <p className="text-gray-300 py-2 px-3 text-lg">Check out <a href="https://github.com/aysunabizada" className="underline hover:text-indigo-800 transition-all">GitHub</a> for more!</p>
            <div className="flex flex-wrap gap-[2vw] justify-center p-5" data-aos="zoom-out">
                {
                    data?.map((item, i) =>
                        <a key={i} href={item.link} target="_blank">
                            <div className="max-w-sm p-4 hover:scale-105 transition-all rounded-md shadoww text-gray-300">
                                <div className="space-y-4">
                                    <img src={item.image} alt={item.name} className="md:w-full w-[315px] m-auto filter hover:brightness-100 brightness-[40%] transition-all rounded-md" />
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold dark:text-default-600">{item.name}</h3>
                                        <p className="leading-snug italic dark:text-gray-600">Technologies:</p>
                                        <div className="flex items-center space-x-2">
                                            {
                                                item.technologies.map((tech, i) => (
                                                    <span key={i} className="flex items-center space-x-1 text-sm">
                                                        {techIcons[tech]}
                                                        <span>{tech}</span>
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>)
                }
            </div>
        </section>
    )
}

export default Projects