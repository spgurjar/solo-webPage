import "./mh.css";
import logo from '../media/logo.png';

export const Header = () => {
    return (
        <div className="header-body">
          <img className="logoImg" src = {logo} alt ="" />
          <div className="navbar-body">
             <span className="nav-item">Search</span>
             <span className="nav-item">About Us</span>
             <span className="nav-item">Sign up</span>
             <span className="nav-item">Log in</span>
          </div>  
        </div>
    )
}