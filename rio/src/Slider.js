import '../src/RoomDescription.css'
// import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';
// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

    function SlideShow(props){
    return(
        <div>
          <div className="sliderimg" >
            <Carousel showArrows={true} showIndicators={true} verticalSwipe='standart'>
               <img src={props.data[0]} alt="room"/>
               <img src={props.data[1]} alt="room"/>
               <img src={props.data[2]} alt="room"/>
               <img src={props.data[3]} alt="room"/>
               </Carousel>
           </div>
        </div>
        ) 
}
export default SlideShow



