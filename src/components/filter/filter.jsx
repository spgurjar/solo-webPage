import "./filter.css";
import React, { useState } from "react";
import filtIcon from "./FilterIcon.png";
import insta from "./insta.png";
import fb from "./fb.png";
import x from "./x.png";
import ytb from "./ytb.png";

const SmallWindow = () => {
    const [isActive, setIsActive] = useState(false);
    const [followers, setFollowers] = useState(40000);
    const [budget, setBudget] = useState(40000);

    const toggleVisibility = () => {
      setIsActive(!isActive);
    };

    const handlefollowerChange = (event) => {
      setFollowers(event.target.value);
    };
    const handlebudgetChange = (event) => {
      setBudget(event.target.value);
    };

  return (
    <div className={`SmallWindowContainer ${isActive ? "active" : ""}`}>
       <button onClick={toggleVisibility} className="filterButton"><img className="filterIcon" src={filtIcon} />Filter</button>
       <div className="SmallWindow">

           <div className="pfHead">Plateform</div>
           <div className="smHandles">
               <div className="smApp">
                 <div className="appIcon"><img src={insta}/></div>
                 <div className="appName">Instagram</div>
               </div>
               <div className="smApp">
                 <div className="appIcon"><img src={fb}/></div>
                 <div className="appName">Facebook</div>
               </div>
               <div className="smApp">
                 <div className="appIcon"><img src={ytb}/></div>
                 <div className="appName">Youtube</div>
               </div>
               <div className="smApp">
                 <div className="appIcon"><img src={x}/></div>
                 <div className="appName">Twitter</div>
               </div>
           </div>

           <div className="sliderBox">
              <div className="sliderHead">Audience</div>
              <div className="silderQuantity">
                <div className="quant">{followers / 1000}K followers</div>
                <button className="sliderReset" onClick={() => setFollowers(40000)}>Reset</button>
              </div>              
              <input className="silder" type="range" min="10000" max="100000" value={followers} onChange={handlefollowerChange} step="1000"/>      
           </div>

           <div className="sliderBox">
              <div className="sliderHead">Budget</div>
              <div className="silderQuantity">
                <div className="quant">{budget / 1000}K-{(budget / 1000) + 5}K</div>
                <button className="sliderReset" onClick={() => setBudget(40000)}>Reset</button>
              </div>              
              <input className="silder" type="range" min="10000" max="100000" value={budget} onChange={handlebudgetChange} step="1000"/>      
           </div>

           <div className="contentTypeBox">
            <div className="sliderHead">Content Type</div>
            <div className="typeBox">
                <div className="typeName">Post</div>
                <div className="typeName">Feeds</div>
                <div className="typeName">Reels</div>
            </div>
           </div>
      </div>
    </div>
  );
};

export default SmallWindow;