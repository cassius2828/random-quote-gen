import tachyons from "tachyons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareTwitter,
  faSquareTumblr,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  decrement,
  decrementColor,
  increment,
  incrementColor,
  newColor,
  newQuote,
} from "../../Redux/Action";
import { useSelector } from "react-redux";
import "../../index.css";

export const colors = [
  "#d61a1a",
  "#21d214",
  "#FF6633",
  "#0ed6d3",
  "#ba9a2f",
  "#3369ff",
  "#60514c",
  "#32724f",
  "#c91ead",
  "#d82b6b",
  "#3029fb",
  "#657077",
  "#99de3f",
  "#b433ff",
  "#590e0e",
  "#131142",
];

const Buttons = () => {
  const dispatch = useDispatch();
  const newColorState = useSelector((state) => state.color);
  const quoteState = useSelector((state) => state.quote);

  return (
    <div>
      <a
        id="new-quote"
        style={{
          color: colors[newColorState],
          transition: "all .5s ease-in-out",
        }}
        className="f6 link dim ba bw2 ph3 pv2 mb2 dib"
        href="#0"
        onClick={() => {
          dispatch(newQuote());
          dispatch(newColor());
        }}
      >
        Random Quote
      </a>
      <div className="container">
        <a target="_blank" id="tweet-quote" href="twitter.com/intent/tweet">
          <FontAwesomeIcon
            style={{
              color: colors[newColorState],
              transition: "all .5s ease-in-out",
            }}
            size="3x"
            className="icons"
            icon={faSquareTwitter}
          />
        </a>
        <a 
        target="_blank" href="https://www.tumblr.com/?redirect_to=%2F&source=login_wall" rel="noreferrer">
          <FontAwesomeIcon
            style={{
              color: colors[newColorState],
              transition: "all .5s ease-in-out",
            }}
            size="3x"
            className="icons"
            icon={faSquareTumblr}
          />
        </a>
        <div className="arrow-container">
          <FontAwesomeIcon
            style={{
              color: colors[newColorState],
              transition: "all .5s ease-in-out",
            }}
            onClick={() => {
              dispatch(decrement());
              dispatch(decrementColor());
            }}
            size="3x"
            className=" arrow left ml2"
            icon={faArrowAltCircleLeft}
          />
          <p
            style={{
              color: colors[newColorState],
              transition: "all .5s ease-in-out",
            }}
          >
            Quote #{quoteState}
          </p>
          <FontAwesomeIcon
            style={{
              color: colors[newColorState],
              transition: "all .5s ease-in-out",
            }}
            onClick={() => {
              dispatch(increment());
              dispatch(incrementColor());
            }}
            size="3x"
            className=" arrow right mr2"
            icon={faArrowAltCircleRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
