import "./signIn.css";
import { useState } from "react";
import gIcon from "./gIcon.png";
import sign1 from "./sign1.png";
import sign2 from "./sign2.png";
import sign3 from "./sign3.png";
import sign4 from "./sign4.png";
import sign5 from "./sign5.png";


export const SignIn = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSignIn = (e) => {
        //connect with your backend here
        console.log('loggin in with:', email, password);
    }

    const handleSignInWithGoogle = () => {
        //implement Google sign-in logic here
        console.log('Signing in with Google');
      };

    return(
        <div className="signIncover">
            
            <div className="signInForm">
                <div className="signInHead">Solo</div>
                <div className="textHead">Email</div>
                <input className="textArea" type="email" value={email} placeholder="     Enter your email" onChange={handleEmailChange} />

                <div className="textHead">Password</div>
                <input className="textArea" type="password" value={password} placeholder="             ********" onChange={handlePasswordChange} />

                <div className="btnBody">
                <div className="btn"><button className="signInbtn" onClick={handleSignIn}>Sign in</button></div>
                <div className="Gbtn"><img className="gIcon" src={gIcon} /><button className="gbtn" onClick={handleSignInWithGoogle}>Sign in with Google</button>
                </div>
                </div>
            </div>

            <div className="sidepart">
                <div className="sidepartUpr">
                    <div className="uprText">Start your connection with creators here</div>
                    <div className="uprDesign">
                        <div className="design1"><img src={sign1} /></div>
                        <div className="design2"><img src={sign2} /></div>
                        <div className="design3"><img src={sign3} /></div>
                    </div>
                </div>
                <div className="lowerDesign">
                        <div className="design4"><img className="sign4" src={sign4} /></div>
                        <div className="design5"><img className="sign5" src={sign5} /></div>
                    </div>
            </div>
        </div>
    )
}