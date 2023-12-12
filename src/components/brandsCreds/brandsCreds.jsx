import "./brandsCreds.css";
import { useState } from "react";

export const BrandCreds = () => {
    const [brandName, setBrandName] = useState("");
    const [designation, setDesignation] = useState("");
    const [website,setWebsite] = useState("")

    const handleSubmit = () => {
        console.log("Brands Credentials: ", brandName, designation, website)
    }

    return(
        <div className="brandCredFormBody">
            <div className="CredForm">
                <div className="colmTitle">Brand Name</div>
                <input className="credInput" type="text" value={brandName} placeholder="Enter Brand Name" onChange={(e)=>{setBrandName(e.target.value)}} />

                <div className="colmTitle">Your Brand Designation</div>
                <input className="credInput" type="text" value={designation} placeholder="Enter Brand Designation" onChange={(e)=>{setDesignation(e.target.value)}} />

                <div className="colmTitle">Brand Website</div>
                <input className="credInput" type="url" value={website} placeholder="https://example.com"  onChange={(e)=>{setWebsite(e.target.value)}} />

                <button className="submitBtn"  onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}