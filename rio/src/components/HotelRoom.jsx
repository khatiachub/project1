import React from "react"
import './HotelRoom.css'
export default function HotelRoom(props){
    return(
        <>
        <div className="hotelroom-maindiv">
            <div className="hotelroom-wraper">
            <img className="hotelroomimg" src={props.src} alt="hotel-room" />
            <div className="hotelroom-descr">
                <h3 className="hotelroom-heading">{props.suite}</h3>
                <p className="hotelroom-parag">{props.parag}</p>
                <ul className="hotelroom-list">
                    <li className="hotelroom-li">Size:{props.size} sq ft</li>
                    <li className="hotelroom-li">Beds:{props.bed} Doubles</li>
                </ul>
                <div className="hotelroom-line"></div>
                <div className="iconsdiv">
                    <i class="fa-regular fa-snowflake"></i>
                    <i class="fa-solid fa-wifi"></i>   
                    <i class="fa-solid fa-tv"></i>
                    <i class="fa-solid fa-toilet-paper"></i>
                    <i class="fa-solid fa-utensils"></i>
                </div>
            </div>
            </div>
            <div className="hotelroom-pricediv">
                <h5 className="hotelroom-price">from</h5>
                <h5 className="hotelroom-price">${props.price}</h5>
                <button onClick={props.handleClick} className="hotelroom-button">More Info</button>
            </div>
        </div>
        <div className="checkin-line"></div>
</>
    )
}