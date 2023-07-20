import tachyons from "tachyons";
// import Text from "./Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareTumblr } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import {newColor, newQuote} from "./Redux/Action";

const Buttons = () => {
const dispatch = useDispatch();
  return (
    <div>
      <a
        className="f6 link dim ba bw2 ph3 pv2 mb2 dib"
        href="#0"
        onClick={() => {
          dispatch(newQuote());
          dispatch(newColor());
        }}
      >
        Next Quote
      </a>
      <div className="container">
        <a href="">
          <FontAwesomeIcon size="3x" className="icons" icon={faSquareTwitter} />
          <FontAwesomeIcon size="3x" className="icons" icon={faSquareTumblr} />
        </a>
      </div>
    </div>
  );
};

export default Buttons;
