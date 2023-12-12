import "./sbCreator.css";

export const SbCreator = (props) => {
    return(
        <div className="sbCreatorBody">
            <div className="creatorProfile">
                <img className="profilePic" src={props.profilePic} />
                <div className="creatorNameSeen">
                    <div className="crName">{props.crName}</div>
                    <div className="crSeen">{props.Seen}</div>
                </div>
            </div>
            <div className="crDate">{props.crDate}</div>
        </div>
    )
}