import React from "react";
import "./sidebar.css";
import SbContent from "./sb-content";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

export const SideBar = () => {
 return(
    
    <div className="sb-body">
      <div className="upperSB"> 
         <SbContent logo = {<FaGlobeAmericas/>} text = "Discover"/>
         <SbContent logo = {<MdOutlineMessage/>} text = "Messages"/>
         <SbContent logo = {<IoMdContact/>} text = "Top 100 Creatores"/>
      </div>

      <div className="lowerSB"> 
         <SbContent logo = {<IoIosHelpCircleOutline/>} text = "Help"/>
         <SbContent logo = {<CgProfile/>} text = "Profile"/>
      </div>
    </div>
    
 );
};