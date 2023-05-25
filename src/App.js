import { Footer } from "./components/Footer";
import Header from "./components/Header";
// import color from "./assets/images/colocode.jpg"
import Banner from "./components/Banner";
import Partners from "./components/Partners";
import Home from "./page/Home";
import Speakers from "./page/Speakers";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Stakeholders"
import Media from "./components/Media"
import Faq from "./components/Faq";



function App() {
  return (
    <div className="font-graphik bg-[rgba(80,56,121,0.03)] overflow-x-hidden ">
      <Header/>       
      <Banner/>
      <Partners/> 
      <Home/>
      <Testimonials/> 
      <WhyUs/>
      <Speakers/> 
      <Faq/> 
      <Footer/>
    </div>
  );
}

export default App;
