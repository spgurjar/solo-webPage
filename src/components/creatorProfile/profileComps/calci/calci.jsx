import "./calci.css";
import { useState } from "react";

export const Calci = (props) => {
    const [postCount, setPostCount] = useState(1)
    const [storyCount, setStoryCount] = useState(2)
    const [reelCount, setReelCount] = useState(1)

    const calculateTotal = () => {
        const total = props.baseCount + postCount * 2 + storyCount * 1 + reelCount * 2;
        return total;
      };

    const handlePostCount = (e) => {
        setPostCount(e.target.value)
    }
    const handleStoryCount = (e) => {
        setStoryCount(e.target.value)
    }
    const handleReelCount = (e) => {
        setReelCount(e.target.value)
    }
    return(
        <div className="calciBody">
            <div className="calciResult">
                <div className="calciHead">Calculator</div>
                <div className="calciSub">Get a Estimate of your expenditure</div>
                <div className="calciBox">
                    <div className="calciCount">₹ {calculateTotal()}K</div>
                    <div className="calciCap">Customize and check the approximate payout for better clarity on the average price per payout.</div>
                </div>
            </div>
            
            <div className="calciSliders">
                <div className="sliderContainer">
                    <div className="calciSliderHead">Feed Post</div>
                    <div className="slideBox"><input className="calciSlider" type="range" min="0" max="10" step="1" value={postCount} onChange={handlePostCount} />{postCount}</div> 
                    
                    <div className="calciSliderHead">Story</div>
                    <div className="slideBox"><input className="calciSlider" type="range" min="0" max="10" step="1" value={storyCount} onChange={handleStoryCount}/>{storyCount} </div> 

                    <div className="calciSliderHead">Reels</div>
                    <div className="slideBox"><input className="calciSlider" type="range" min="0" max="10" step="1" value={reelCount} onChange={handleReelCount}/>{reelCount} </div> 
                </div>                
            </div>
        </div>
    )
}