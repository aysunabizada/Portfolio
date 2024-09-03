import { useEffect } from "react";
import Footer from "./component/Footer"
import Header from "./component/Header"
import Main from "./component/main/Main"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);
  
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
