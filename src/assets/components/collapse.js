import "./collapse.css"
import { useState } from "react"
import PropTypes, {any} from 'prop-types';
Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: any,
  };


 function Collapse(props) {

    
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isImageOpened, setIsImageOpened] = useState(true);

    const showContent = () => {
        setIsContentVisible(!isContentVisible);
        setIsImageOpened(!isImageOpened);
    }

  return (
            <div className="apartment_description">
                <p className="collapse_header">
                    <span>{props.title}</span>
                    <img className="drop" src={isImageOpened ? "drop_closed.png" : "drop_opened.png"} onClick={showContent} alt={"bouton en forme de chevron"}/>
                </p>
                {isContentVisible && <p className="collapse_content">{props.content}</p>}
            </div>
  )
}

export default Collapse