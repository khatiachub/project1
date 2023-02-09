import React from "react";
import './Apartament.css'
import CheckInSection from '../CheckInSection'
import HotelRoom from "./HotelRoom";
import { Link, Outlet} from "react-router-dom";
import Room from "../room";

export default function Apartament(){
    return(
        <div>
        <div className="formmaindiv-apartm">
        <CheckInSection className={`formmaindiv-apartm`} ourrooms={'Our Rooms'}/>
         {Room.map((element)=>{
            return(
                <Link to={`/Our Apartament/${element.id}`} key={element.id}><HotelRoom suite={element.suite} size={element.size} bed={element.bed} price={element.price} src={element.src} parag={element.parag}/></Link>
            )
         })}           
         </div>
         <Outlet/>
        </div>
    )
}