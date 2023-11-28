import "./mainbar.css";
import { Header } from "../main-header/mh";
import { Search } from "../searchBar/search";
import { Category } from "../categories/category";
import { Profile } from "../profiles/profile";

export const MainBar = () => {
    return(
        <div className="main-body">
         <div><Header/></div>
         <div><Search/></div>
         <div><Category/></div>
         <div><Profile/> </div>
        </div>
    )
}