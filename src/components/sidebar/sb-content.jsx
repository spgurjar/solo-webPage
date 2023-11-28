import "./sb-content.css";

const SbContent = (props) => {
    return(
<>
    
    <div className="sb-content">
      <div className="sb-logo">{props.logo} </div>
      <span className="sb-text">{props.text}</span>
    </div>

    </>
    );
};

export default SbContent;