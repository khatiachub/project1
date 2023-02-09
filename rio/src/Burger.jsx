import React from "react"
import { Link,NavLink } from "react-router-dom"
import Footer from "./Footer"
import './Footer.css'
import './Header.css'

export default function Burger(props){
    return(
        <>
        <div className={`burgerdiv ${props.state?'burgerdiv':'active'}`}>
        <div className="burgerlogo-div">
        <Link className="burger-logo" to={'/'}>wix</Link>
        <i onClick={()=>props.handlexClick()} class="fa-brands fa-mixer mixer"></i>            
        </div>
        <div className="burger-navigation">
             <NavLink className={({ isActive }) => (isActive ? 'current-page' : 'burgernav-link')}  to={'/'}>Home</NavLink>
             <NavLink className={({ isActive }) => (isActive ? 'current-page' : 'burgernav-link')}  to={'/Our Apartament'}>Our Apartament</NavLink>
             <NavLink className={({ isActive }) => (isActive ? 'current-page' : 'burgernav-link')}  to={'/Rio'}>Rio</NavLink>
             <NavLink className={({ isActive }) => (isActive ? 'current-page' : 'burgernav-link')}  to={'/Contact'}>Contact</NavLink>
        </div>
        <div className="burger-line"></div>
        <Footer overlay={'footer-overlay-burger'}/>
        </div>
        </>
     )
}