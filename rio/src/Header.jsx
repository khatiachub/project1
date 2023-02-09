import React from "react"
import { useState } from "react"
import { Link, useLocation, NavLink } from "react-router-dom"
import Burger from "./Burger"
import './Header.css'
import rio from './images/line.png'
import './components/fonts/Fonts.css'
import SearchBar from "./components/SearchBar"
export default function Header(props){
    const[state,setState]=useState(true)
    const handleClick=()=>{
        setState(false)
    }
    const handlexClick=()=>{
        setState(true)
    }
    const location=useLocation();
    return(
        <>
        <Burger state={state} handlexClick={()=>handlexClick()}/>
            <div>
                <div className="header-overlay">
                    <div className="header-buttons">
                        <SearchBar/>
                        <button className="header-button">Register</button>
                        <button className="header-button">Log In</button>
                    </div>

                </div>
            <div className="headerbox">
            <div className="navdiv">
            <Link className="logo" to={'/'}>wix</Link>
            <div className="navigation">
                <NavLink className={({ isActive }) => (isActive ? 'currentpage' : 'nav-link')} to={'/'}>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'currentpage-apartm' : 'nav-link-apartm')}  to={'/Our Apartament'}>Our Apartament</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'currentpage' : 'nav-link')}  to={'/Rio'}>Rio</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'currentpage' : 'nav-link')}  to={'/Contact'}>Contact</NavLink>
                <div className="line-div"></div>
            </div>
            <div onClick={()=>handleClick()} className="burgerbardiv">
               <div className="burgerbar-line"></div>
               <div className="burgerbar-line"></div>
               <div className="burgerbar-line"></div>
           </div>
           <div className="book-div">
                <Link className="nav-link-book" to={'/Book'}>Book</Link>
           </div>

            </div>
            <div className="background-wraper">
            <div className="wavelinediv">
                <img className="wavelineimg" src={rio} alt="line" />
                <h4 className="header-heading">BE MY GUEST</h4>
                <img className="wavelineimg" src={rio} alt="line" />
            </div>
            <h1 className="headermainheading">{props.heading}</h1>
            </div>
            </div>
            </div>
            </>
    )
}
