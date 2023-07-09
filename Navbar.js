import React from "react";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

function Navbar() {


    let isShown = false;
    function show() {
        if(isShown === false) {
            document.getElementById('sidebar').style.left = '0';
            document.getElementById('main-content').style = 'margin-left: 170px;';
            isShown = true;
        }

        else {
            document.getElementById('sidebar').style.left = '-300px';
            document.getElementById('main-content').style = 'margin-left: 0px;';
            document.getElementById('main-content').style.position = 'absolute';
            document.getElementById('main-content').style.left = '0';
            document.getElementById('main-content').style.right = '0';
            isShown = false;
        }
        
    }

    return(
        <div className="Navbar">
            <span className="Navbar-1">
            <button className="slider-btn" onClick={show}><FontAwesomeIcon icon={faBars} style={{color: "white"}} className="nav-category"></FontAwesomeIcon></button>
                <span className="Navbar-1-2">
                    <FontAwesomeIcon icon={faYoutube} style={{color: "#f10404"}} className="nav-category"></FontAwesomeIcon>
                    <label className="YouTube">YouTube</label>
                </span>     
            </span>
            <span className="Navbar-2">
                <span className="search-icon">
                    <input type="search" placeholder="Search" className="nav-search"></input>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "white"}}></FontAwesomeIcon>
                </span>
                <FontAwesomeIcon icon={faMicrophone} style={{color: "white"}}></FontAwesomeIcon>
            </span>
            <span className="Navbar-3"> 
                <FontAwesomeIcon icon={faVideo} style={{color: "white"}} className="nav-3-items"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faBell} style={{color: "white"}} className="nav-3-items"></FontAwesomeIcon>
                <button id="nav-button" className="nav-3-items">D</button>
            </span>
        </div>
    );
}

export default Navbar;