import "./mh.css";
import logo from '../media/logo.png';
import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <div className="header-body">
          <img className="logoImg" src = {logo} alt ="" />
          <div className="navbar-body">
             <span className="nav-item">Search</span>
             <span className="nav-item">About Us</span>            
             <Link to="/signUp" className="signBtn"><span className="nav-item">Sign up</span></Link>
             <Link to="/signIn" className="signBtn"><span className="nav-item">Sign in</span></Link>
             
          </div>  
        </div>
    )
}