function About() {
    return (
        <section className="relative isolate overflow-hidden bg-[#000] text-gray-200">
            <svg
                viewBox="0 0 1108 632"
                aria-hidden="true"
                className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-16 xl:left-[calc(50%-24rem)]"
            >
                <path
                    fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
                    fillOpacity=".2"
                    d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
                />
                <defs>
                    <linearGradient
                        id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
                        x1="1220.59"
                        x2="-85.053"
                        y1="432.766"
                        y2="638.714"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#4F46E5" />
                        <stop offset={1} stopColor="#80CAFF" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="container m-auto">
                <h2 className="font-semibold text-xl tracking-wider border-b py-4 italic px-3 border-gray-700">ABOUT ME</h2>
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
            </div>
        </section>
    )
}

export default About