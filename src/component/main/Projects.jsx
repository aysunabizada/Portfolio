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
        <section id="projects" className="container m-auto text-gray-200 sm:px-0 px-8 py-10">
            <h2 className="font-semibold text-xl tracking-wider py-4 italic">PROJECTS</h2>
            <p className="pt-6 text-lg">You can go to the site by clicking on the pictures!</p>
            <p className="py-2 text-lg">Check out <a href="https://github.com/aysunabizada" className="underline hover:text-indigo-800 transition-all">GitHub</a> for more!</p>
            <div className="flex flex-wrap gap-[1.2vw] justify-center py-5" data-aos="zoom-out">
                {
                    data?.map((item, i) =>
                        <a key={i} href={item.link} target="_blank">
                            <div className="max-w-sm p-4 hover:scale-105 card transition-all bg-[#000000] rounded-md text-gray-600">
                                <div className="space-y-4">
                                    <img src={item.image} alt={item.name} className="md:w-full w-[315px] m-auto filter brightness-[50%] transition-all rounded-md" />
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold dark:text-default-600 tracking-wider">{item.name}</h3>
                                        <p className="leading-snug italic dark:text-gray-500">Technologies:</p>
                                        <div className="flex items-center max-w-[250px] text-ellipsis overflow-hidden whitespace-nowrap space-x-2">
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