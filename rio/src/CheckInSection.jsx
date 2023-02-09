import React from "react"
import './CheckInSection.css'

export default function CheckInSection(props){
    return(
        <>
        <div className="formwraper">
        <div className="form">
        <h3 className="ourrooms">{props.ourrooms}</h3>
        <div className="checkin-line"></div>
        <form action="" className="formdiv">
        <div className="checkin-inputs">
            <div className="form-input-date">
                <label className="label-date" htmlFor="">Check In</label>
                <input className="check-input " type="date"value='2023-07-22' />
            </div>
            <div className="form-input-date">
                <label className="label-date" htmlFor="">Check Out</label>
                <input className="check-input date-input" type="date" value='2023-07-30'/>
            </div>
        </div>
            <div className="form-input">
                <label className="adults" htmlFor="">Adults</label>
                <input className="check-inputnumb"  min='0' type="number" onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57"/>
            </div>
            <div className="form-input">
                <label className="kids" htmlFor="">Kids</label>
                <input className="check-inputnumb"  min='0' type="number" onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57"/>
            </div>
            <button className="search-button" type="submit">search</button>
        </form>
        <div className="checkin-line"></div>
        </div>
        </div>
        </>
    )
}