import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';
import { RiReactjsFill, RiTailwindCssFill, RiBootstrapFill } from "react-icons/ri";
import { FaJs, FaHtml5, FaCss3Alt, FaSass, FaGit, FaFigma } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";

function Skills() {
    return (
        <section id='skills' className="container m-auto pb-9 pt-10">
            <h2 className="font-semibold text-gray-400 text-lg px-3 border-gray-800">Skills:</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                mousewheel={true}
                centeredSlides={true}
                loop={true}
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
                className="mySwiper text-gray-300 py-12 w-full m-auto text-center pl-7 sm:pl-0"
            >
                <SwiperSlide><FaHtml5 className='text-[4em] cursor-pointer hover:scale-125 transition-all' /></SwiperSlide>
                <SwiperSlide><FaCss3Alt className='text-[4em] cursor-pointer hover:scale-125 transition-all' /></SwiperSlide>
                <SwiperSlide><FaJs className='text-[4em] cursor-pointer hover:scale-125 transition-all' /></SwiperSlide>
                <SwiperSlide><RiReactjsFill className='text-[4em] cursor-pointer hover:scale-125 transition-all' /></SwiperSlide>
                <SwiperSlide><RiTailwindCssFill className='text-[4em] cursor-pointer hover:scale-125 transition-all' /></SwiperSlide>
                <SwiperSlide><DiJqueryLogo className='text-[4em] cursor-pointer hover:scale-125 transition-all' /></SwiperSlide>
                <SwiperSlide><FaGit className='text-[4em] cursor-pointer hover:scale-125 transition-all' /></SwiperSlide>
                <SwiperSlide><RiBootstrapFill className='text-[4em] cursor-pointer hover:scale-125 transition-all' /></SwiperSlide>
                <SwiperSlide><FaSass className='text-[4em] cursor-pointer hover:scale-125 transition-all' /></SwiperSlide>
                <SwiperSlide><FaFigma className='text-[4em] cursor-pointer hover:scale-125 transition-all' /></SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Skills;
