import React from "react";
import { useState } from "react";

export default function SearchBar(){
    const countries = [

        { name: "Belgium", continent: "Europe" },
        { name: "India", continent: "Asia" },
        { name: "Bolivia", continent: "South America" },
        { name: "Ghana", continent: "Africa" },
        { name: "Japan", continent: "Asia" },
        { name: "Canada", continent: "North America" },
        { name: "New Zealand", continent: "Australasia" },
        { name: "Italy", continent: "Europe" },
        { name: "South Africa", continent: "Africa" },
      ];

    const[searchInput, setSearchInput]=useState('')
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      const handleClick=()=>{
        if (searchInput.length > 0) {
            countries.filter((country) => {
            return country.name.match(searchInput);
        });
        }
      }
    return(
        <div>
        <div>
            <div className="search-wraper">
            <input
                className="search-input"
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} 
                />
                <i onClick={handleClick} class="fa-solid fa-magnifying-glass search-icon"></i>
            </div>
        </div>
        <p></p>
        </div>
        )
}    