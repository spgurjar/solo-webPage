import "./userType.css";
import { Link } from "react-router-dom";
import userPic from "./upic.png";
import adminIcon from "./adminIcon.png";
import brandIcon from "./brandIcon.png";

export const UserType = () => {
    return(
        <div className="typeboxBody">
            <div className="typebox">
                <div><img className="userPic" src={userPic} /></div>
                <div className="que">who is using the account?</div>
                <Link to="/adminCreds" className="link" ><img src={adminIcon} className="adminIcon" /><div className="adminBtn">Admin</div></Link>
                <Link to="/brandCreds" className="link" ><img src={brandIcon} className="brandIcon" /><div className="brandBtn">Brand</div></Link>
                <div className="userNote">Admin accounts are exclusive to company employees. Others can use brand profiles to connect with creators or launch campaigns.</div>
            </div>
        </div>
    )
}