import "./prDetailBox.css";
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import { FaRegMessage } from "react-icons/fa6";
import moneyIcon from "../prAssets/moneyIcon.png";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const DetailBox = (props) => {
    return(
        <div className="detailBoxBody">
            <div className="details1">
                <div><img className="profilePic" src={props.profilePic} /></div>
                <div className="creatorName">{props.creatorName}</div>
                <div className="followerPost">
                    <div className="followerCount">{props.fCount}</div>
                    <div className="postCount">{props.pCount}</div>
                </div>
                <div className="creatorIntro">{props.crIntro}</div>
                <div className="buttonBox">
                    <div className="msgButton"><FaRegMessage className="msgIcon" /><button className="msgBtn">Message</button> </div>
                    <div className="budgetButton">
                        <img src={moneyIcon} className="moneyIcon"/>
                        <span className="budget">{props.budget}</span>
                        <span className="btext">Starting At</span>
                    </div>
                </div>
            </div>
            <div className="details2">
                <div className="prLinks">
                    
                    <span className="prLinkText">Profile Links</span>
                    <FaInstagramSquare className="smIcon"/>
                    <IoLogoFacebook className="smIcon"/>
                    <FaYoutube className="smIcon"/>
                    <FaSquareXTwitter className="smIcon"/>
                  
                </div>
                <div className="vdoBox">
                    <div>
                    <Player className="vdoPlayer">
                        <source src={props.vdoSource} />
                    </Player>
                    </div>
                    {/* <img className="vdoImg" src={props.vdoImg}/> */}
                </div>
            </div>
        </div>
    )
}
