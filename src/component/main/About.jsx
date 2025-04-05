function About() {
    return (
        <section id='about' className="container m-auto min-h-[60vh] pt-5 text-gray-800">
            <h2 className="font-semibold text-xl tracking-wider border-b py-4 italic px-3 border-gray-400">ABOUT ME</h2>
            <div className="flex w-[100%] gap-[40px] flex-col md:flex-row py-8 px-5">
                <div className="md:w-[60%] w-full" data-aos="zoom-in-right">
                    <p>Hi there, <br />I am currently pursuing higher education in <b>Information Technologies at AUAC</b>, where I am deepening my knowledge of front-end development and expanding my technical skills. I have a solid foundation in <b>HTML, CSS, and JavaScript</b>, which I honed during my studies at <b>Div Academy</b>. This training has enabled me to create responsive and visually appealing web projects, focusing on user experience and clean design.</p>
                    <p className="my-4">In addition to my formal education, I am passionate about continuous learning and staying updated with the latest industry trends. I am eager to grow and excel in a dynamic and challenging environment where I can apply my skills and contribute to meaningful projects. My commitment to delivering high-quality work drives me to take on new challenges and constantly improve my craft.</p>
                </div>
                <div data-aos="zoom-in-left">
                    <h3 className="py-4 text-2xl font-semibold">Education</h3>
                    <div>
                        <p>Bachelor:</p>
                        <p className="font-bold py-1"> Azerbaijan Architecture and Construction University</p>
                        <p className="text-lg">- Information Technologies</p>
                        <p className="italic py-1 text-sm">2022 - present</p>
                    </div>
                    <div className="my-5">
                        <p>Div Academy</p>
                        <p className="font-bold py-1">Front-End Developer</p>
                        <p className="italic py-1 text-sm">2024</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About