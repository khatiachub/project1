import React from "react";
import { useNavigate, useParams} from "react-router-dom";
import './components/Apartament.css'
import room from "./room";
import './RoomDescription.css'
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
//  
 function RoomDescription(){
    const {id}=useParams();
    const rooms=room.find((element)=>{
        return element.id===id
    });
    const navigate = useNavigate();
    const goback=()=>{
        navigate(-1);
    }
    return(
        <div className="formmaindiv-apartm">
        <div className="slider-wraper">
            <div className="arrow-wraper">
               <i onClick={goback} class="fa-solid fa-arrow-left"></i>
               <div className="slider-line"></div>
               <h2 className="rooms-suite">{rooms.suite}</h2>
            </div>
            <div className="sliderimg" >
                <Carousel>
                    {rooms.img.map((element,i)=>{
                        return(
                            <>
                            {<img key={i} src={element} alt="room"/>}
                            </>
                        )
                    })
                    }
                </Carousel>
            </div>
            <div className="properties-wraper prop-overlay">
                <h4 className="properties-heading">Properties:</h4>
                <div className="props-wraper">
                <h4 className="props-heading">Accommodates: {rooms.accommodates}</h4>
                <h4 className="props-heading">Beds: {rooms.bed}</h4>
                </div>
            <h4 className="props-heading">Size: {rooms.size}</h4>
            </div>
            <div className="props-line"></div>
            <div className="properties-wraper">
                <h4 className="properties-heading">More Info:</h4>
                <p className="info-paragraph">{rooms.paragraph}</p>
            </div>
            <div className="props-line"></div>
            <div className="properties-wraper">
                <h4 className="properties-heading">Amenities:</h4>
                <div className="amenities">
                    <ul className="amenities-ul">
                        <li className="amenities-list">
                        <i class="fa-sharp fa-solid fa-wifi"></i>
                        </li>
                        <li className="amenities-list">
                           <i class="fa-solid fa-snowflake"></i>
                        </li>
                        <li className="amenities-list">
                           <i class="fa-solid fa-tv"></i>
                        </li>
                        <li className="amenities-list">
                           <i class="fa-solid fa-toilet-paper"></i>
                        </li>
                    </ul>
                    <ul className="amenities-ul">
                       <li className="amenities-list">WiFi</li>
                       <li className="amenities-list">A/C</li>
                       <li className="amenities-list">TV</li>
                       <li className="amenities-list">Towels</li>
                    </ul>
                </div>
                <div className="amenities">
                    <ul className="amenities-ul">
                        <li className="amenities-list">
                           <i class="fa-solid fa-phone-volume"></i>
                        </li>
                        <li className="amenities-list">
                           <i class="fa-solid fa-kitchen-set"></i>
                        </li>
                        <li className="amenities-list">
                           {rooms.glass}
                        </li>
                        <li className="amenities-list">
                           {rooms.icon}
                        </li>
                    </ul>
                    <ul className="amenities-ul">
                       <li className="amenities-list">Telephone</li>
                       <li className="amenities-list">Kitchen</li>
                       <li className="amenities-list">{rooms.glasstitle}</li>
                       <li className="amenities-list">{rooms.icontitle}</li>
                    </ul>
                </div>
            </div>
            <div className="props-line"></div>
            <div className="properties-wraper">
                <h4 className="properties-heading">Terms:</h4>
                <Link to={''}><p className="info-paragraph">Read Our Policies</p></Link>
            </div>
            <div className="props-line"></div>
        </div>
        </div>
    )
}
export default RoomDescription