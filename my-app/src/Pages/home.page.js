import Navbar from "../Components/Nav/navbar"
import Home from "../Components/home"
import Slider from "../Components/slider"
import GallerySec from "../Components/gallerysec" 
import Services from "../Components/services"
import Testimonial from "../Components/testimonial"


export default function Homepage() {
    return(
        <div className="App">
            <Navbar /> 
            <Home/>
            <Slider />
            <GallerySec /> 
            <Services/>
            <Testimonial />
         
        </div> 
     );   
};





