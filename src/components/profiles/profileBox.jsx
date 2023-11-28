import "./profileBox.css";

export const Prbox = (props) => {
    return(
        <div className="pr-body">

            <div className="pr-upper">
                <div className="img-box">
                    <img className="main-pic" src={props.mainpic} alt="" />
                </div>
            </div>
            
            <div className="pr-lower">
                <div className="pr-about-upper">
                    <div className="pau-left">
                        <div><img className="pr-pic" src={props.prpic} alt="" /> </div>
                        <div className="username">
                            <span className="userid">{props.userid}</span>
                            <span className="usrname">{props.username} </span>
                        </div>
                    </div>

                    <div className="pau-right">
                      <spna className="location" >{props.location} </spna>
                      <div className="location-icon">{props.lIcon} </div>
                    </div>
                </div>

                <div className="pr-about-lower">
                    <div className="follower">
                        <span className="qntt">{props.fqntt} </span>
                        <span className="text">Followers</span>
                    </div>

                    <div className="follower">
                        <span className="qntt">{props.eqntt} </span>
                        <span className="text">Engagement</span>
                    </div>
                </div>
            </div>
        </div>
    )
}