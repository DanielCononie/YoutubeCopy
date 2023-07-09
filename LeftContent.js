
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from  '@fortawesome/free-solid-svg-icons';
import { faClapperboard } from  '@fortawesome/free-solid-svg-icons';
import { faBookmark } from  '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from  '@fortawesome/free-solid-svg-icons';
import { faBookOpenReader } from  '@fortawesome/free-solid-svg-icons';
import { faLayerGroup, faPodcast, faHeadset, faNewspaper, faTrophy } from  '@fortawesome/free-solid-svg-icons';
import { faClock, faCircleArrowRight, faFire, faBagShopping, faMusic, faTv } from  '@fortawesome/free-solid-svg-icons';
import mrbeast from './mrbeast.png';
import apex from './apex.png';
import marty from './marty.png';
import fortnite from './fortnite.png';
import "./App.css"

function LeftContent() {
    return(
        <div className="left" id="sidebar">
            <span className="left-item">
                <FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}}></FontAwesomeIcon>
                <label>Home</label>
                
            </span>
            
            <span className="left-item">
                <FontAwesomeIcon icon={faClapperboard} />
                <label>Shorts</label>
            </span>
            
            <span className="left-item">
                <FontAwesomeIcon icon={faBookmark} />
                <label>Subscriptions</label>
            </span>
            <hr  className="left-hr"/>

            <span className="left-item">
                <FontAwesomeIcon icon={faBookOpenReader} />
                <label>Library</label>
            </span>

            <span className="left-item">
                <FontAwesomeIcon icon={faClockRotateLeft} />
                <label>History</label>
            </span>

            <span className="left-item">
                <FontAwesomeIcon icon={faLayerGroup} />
                <label>Your videos</label>
            </span>

            <span className="left-item">
                <FontAwesomeIcon icon={faClock} />
                <label>Watch later</label>
            </span>

            <span className="left-item">
                <FontAwesomeIcon icon={faCircleArrowRight} />
                <label>Show more</label>
            </span>
            <hr  className="left-hr"/>

            <span className="left-item">
                <h3 className="left-heading"> Subscriptions</h3>
            </span>

            <span className="left-item">
                <img src={mrbeast} alt="" className="sub-img"></img>
                <label>Mr. Beast</label>
            </span>

            <span className="left-item">
                <img src={apex} alt="" className="sub-img"></img>
                <label>Apex Legends</label>
            </span>

            <span className="left-item">
                <img src={marty} alt="" className="sub-img"></img>
                <label>Marty Music</label>
            </span>

            <span className="left-item">
                <img src={fortnite} alt="" className="sub-img"></img>
                <label id="fn-item">Fortnite Clips</label>
                
            </span>
            <hr className="left-hr"/>
            
            <span className="left-item">
                <h3 className="left-heading">Explore</h3>
            </span>
            <span className="left-item">
                <FontAwesomeIcon icon={faFire} />
                <label>Trending</label>
            </span>
            <span className="left-item">
                <FontAwesomeIcon icon={faBagShopping} />
                <label>Shopping</label>
            </span>
            <span className="left-item">
                <FontAwesomeIcon icon={faMusic} />
                <label>Music</label>
            </span>
            <span className="left-item">
                <FontAwesomeIcon icon={faTv} />
                <label>Movies & TV</label>
            </span>
            <span className="left-item">
                <FontAwesomeIcon icon={faPodcast} />
                <label>Live</label>
            </span>
            <span className="left-item">
                <FontAwesomeIcon icon={faHeadset} />
                <label>Gaming</label>
            </span>
            <span className="left-item">
                <FontAwesomeIcon icon={faNewspaper} />
                <label>News</label>
            </span>
            <span className="left-item">
                <FontAwesomeIcon icon={faTrophy} />
                <label>Sports</label>
            </span>
            

            
        </div>
    )
}

export default LeftContent;