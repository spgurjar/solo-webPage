import "./footer.css";
import logo from '../media/logo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export const Footer = () => {
    return(
        <div className="footer-body">
            <div className="upr-content">
                <div className="colm">
                    <div><span className="gtext">welcome</span></div>
                    <div className="ftext"><span className="ftext">about us</span></div>
                    <div className="ftext"><span className="ftext">blog</span></div> 
                </div>
                <div className="colm">
                    <div><span className="gtext">brands</span></div>
                    <div className="ftext"><span className="ftext">search</span></div>
                    <div className="ftext"><span className="ftext">market with us</span></div> 
                </div>
                <div className="colm">
                    <div><span className="gtext">creators</span></div>
                    <div className="ftext"><span className="ftext">install solo</span></div>
                    <div className="icons">
                        <img className="logoImg" src = {logo} alt ="" />
                        <FaLinkedin className="icons" />
                        <FaInstagramSquare className="icons"/>
                        <GrMail className="icons"/>
                    </div> 
                </div>
            </div>

            <div className="cp-rt"><span className="copyright">© Copyright 2023 Sol0. Powered with<span className="heart">♥</span> by <span className="netz">Netz00</span></span> </div>
        </div>
    )
}