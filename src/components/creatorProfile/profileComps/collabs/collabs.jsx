import "./collabs.css";

export const Collab = (props) => {
    return(
        <div className="collabBox">
            <div><img className="collabImg" src={props.collabImg} /></div>
            <div className="DateViews">
                <div className="contentDate">{props.contentDate}</div>
                <div className="contentViews">{props.contentViews}</div>
            </div>
            <div className="collabCap">{props.collabCap} </div>
        </div>
    )
}