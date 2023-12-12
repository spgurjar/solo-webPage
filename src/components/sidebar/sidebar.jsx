import React from "react";
import { useState } from "react";
import "./sidebar.css";
import SbContent from "./sb-content";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { SbChild } from "./sbChild";

export const SideBar = () => {
  const [showChild, setShowChild] = useState(false);

  const toggleVisibility = () => {
   setShowChild(!showChild);
 };

 return(
    
    <div className={`sb-body ${showChild ? "active" : ""}`}>
      <div>
         <div className="soloHead">Solo</div>
         <div className="upperSB"> 
            <SbContent logo = {<FaGlobeAmericas/>} text = "Discover"/>
            <div onClick={toggleVisibility}><SbContent logo = {<MdOutlineMessage/>} text = "Messages"  /></div>
            <SbContent logo = {<IoMdContact/>} text = "Top 100 Creatores"/>
         </div>

         <div className="lowerSB"> 
            <SbContent logo = {<IoIosHelpCircleOutline/>} text = "Help"/>
            <SbContent logo = {<CgProfile/>} text = "Profile"/>
         </div>
      </div>

      <div className="SbChildContainer" >
      <SbChild/>
      </div>
    </div>
    
 );
};