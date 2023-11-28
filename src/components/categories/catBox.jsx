import "./catBox.css";

export const Catbox = (props) => {
    return(
        <div>
        <div className="catbox-body">
            <div><img className="cat-img" src={props.catImg} alt=""/></div>
            <div><span className="cat-name">{props.catName}</span></div>
        </div>
        </div>
    )
}