import { useEffect, useState } from "react";
import Footer from "./component/footer/Footer"
import Main from "./component/main/Main"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiChevronDoubleUp } from "react-icons/hi2";
import Contact from "./component/main/Contact";
import Projects from "./component/main/Projects";
import Skills from "./component/main/Skills";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.addEventListener('scroll', function () {
    const button = document.querySelector('.scroll-to-top');
    const scrollPos = window.scrollY;
    const vwHeight = window.innerHeight;
    button.style.display = (scrollPos > (vwHeight * 0.5)) ? 'block' : 'none';
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-[100vh] bg-black flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }


  return (
    <>
      <div onClick={scrollToTop} className="scroll-to-top bg-[#f3f5f5] p-4 hover:text-white rounded-full cursor-pointer shadow-md hidden hover:bg-black transition-all duration-300 fixed right-8 bottom-8 z-20">
        <HiChevronDoubleUp className="text-xl" />
      </div>
      <Main />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App