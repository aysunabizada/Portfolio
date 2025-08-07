import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';
import { RiReactjsFill, RiTailwindCssFill, RiBootstrapFill, RiNextjsLine } from "react-icons/ri";
import { FaJs, FaHtml5, FaCss3Alt, FaSass, FaGit, FaFigma } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";
import { BsFiletypeSql } from "react-icons/bs";


function Skills() {
    return (
        <section id='skills' className="container m-auto pb-9 sm:px-0 px-8 pt-10">
            <div id="soft-skills" className="py-10 text-gray-200">
                <h2 className="text-xl font-semibold tracking-wider italic mb-4">Soft Skills:</h2>
                <ul className="grid gap-6 xl:grid-cols-2 text-gray-300">
                    <li><strong>Communication:</strong> Clearly explain ideas to both technical and non-technical teammates.</li>
                    <li><strong>Creativity:</strong> Bring visual and structural harmony to UI design with a keen eye for aesthetics.</li>
                    <li><strong>Empathy:</strong> Understand user needs and prioritize accessibility and usability.</li>
                    <li><strong>Attention to Detail:</strong> Polish user interfaces with careful layout and bug handling.</li>
                    <li><strong>Problem Solving:</strong> Break down complex tasks into clean, efficient solutions.</li>
                    <li><strong>Adaptability:</strong> Quickly learn new technologies and adjust to different project requirements.</li>
                    <li><strong>Teamwork:</strong> Collaborate in team-based environments and contribute to shared goals.</li>
                    <li><strong>Resilience:</strong> Persist through challenges with a growth mindset and determination.</li>
                </ul>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                mousewheel={true}
                centeredSlides={true}
                loop={true}
                speed={3000}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                        centeredSlides: true,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                        centeredSlides: true,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                        centeredSlides: true,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper text-gray-200 py-12 w-full m-auto text-center pl-7 sm:pl-0"
            >
                <SwiperSlide><FaHtml5 className='text-gray-600 hover:text-red-700 text-[4em] cursor-pointer hover:scale-110 duration-300 transition-all' /></SwiperSlide>
                <SwiperSlide><FaCss3Alt className='text-gray-600 hover:text-blue-800 text-[4em] cursor-pointer hover:scale-110 duration-300 transition-all' /></SwiperSlide>
                <SwiperSlide><FaJs className='text-gray-600 hover:text-yellow-600 text-[4em] cursor-pointer hover:scale-110 duration-300 transition-all' /></SwiperSlide>
                <SwiperSlide><RiReactjsFill className='text-gray-600 hover:text-blue-400 text-[4em] cursor-pointer hover:scale-110 duration-300 transition-all' /></SwiperSlide>
                <SwiperSlide><RiTailwindCssFill className='text-gray-600 hover:text-cyan-700 text-[4em] cursor-pointer hover:scale-110 duration-300 transition-all' /></SwiperSlide>
                <SwiperSlide><DiJqueryLogo className='text-gray-600 hover:text-cyan-800 text-[4em] cursor-pointer hover:scale-110 duration-300 transition-all' /></SwiperSlide>
                <SwiperSlide><FaGit className='text-gray-600 hover:text-red-800 text-[4em] cursor-pointer hover:scale-110 duration-300 transition-all' /></SwiperSlide>
                <SwiperSlide><RiNextjsLine className='text-gray-600 hover:text-black text-[4em] cursor-pointer hover:scale-110 duration-300 transition-all' /></SwiperSlide>
                <SwiperSlide><RiBootstrapFill className='text-gray-600 hover:text-purple-800 text-[4em] cursor-pointer hover:scale-110 duration-300 transition-all' /></SwiperSlide>
                <SwiperSlide><FaSass className='text-gray-600 hover:text-pink-500 text-[4em] cursor-pointer hover:scale-110 duration-300 transition-all' /></SwiperSlide>
                <SwiperSlide><TbBrandRedux className='text-gray-600 hover:text-purple-800 text-[4em] cursor-pointer hover:scale-110 duration-300 transition-all' /></SwiperSlide>
                <SwiperSlide><FaFigma className='text-gray-600 hover:text-gray-900 text-[4em] cursor-pointer hover:scale-110 duration-300 transition-all' /></SwiperSlide>
                <SwiperSlide><BsFiletypeSql className='text-gray-600 hover:text-orange-500 text-[4em] cursor-pointer hover:scale-110 duration-300 transition-all' /></SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Skills;
