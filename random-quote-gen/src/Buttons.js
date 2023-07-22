import tachyons from "tachyons";
// import Text from "./Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareTumblr } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import {NO_FADE, newColor, newFade, newQuote, removeFade} from "./Redux/Action";
import { useSelector } from "react-redux";
import {useState} from "react";



const colors = [

     '#FF6633',
     '#21d214',
     '#d61a1a',
     '#0ed6d3',
     '#ba9a2f',
     '#3369ff',
     '#60514c',
     '#32724f',
     '#c91ead',
     '#d82b6b',
     '#3029fb',
     '#657077',
     '#99de3f',
     '#b433ff',
     '#590e0e',
     '#131142',
];

const Buttons = () => {
  const [fade, setFade] = useState("quote-box");
const dispatch = useDispatch();
  const newColorState = useSelector((state) => state.color);

  return (
    <div>
      <a
        style={{
          color: colors[newColorState],
          transition: "all .5s ease-in-out",
        }}
        className="f6 link dim ba bw2 ph3 pv2 mb2 dib"
        href="#0"
        onClick={() => {
          dispatch(newQuote());
          dispatch(newColor());
          dispatch(newFade(
            setTimeout(() => {
             dispatch(removeFade())
            }, 500)
          ));
        }}
      >
        Next Quote
      </a>
      <div className="container">
        <a href="">
          <FontAwesomeIcon
            style={{
              color: colors[newColorState],
              transition: "all .5s ease-in-out",
            }}
            size="3x"
            className="icons"
            icon={faSquareTwitter}
          />
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
      </div>
    </div>
  );
};

export default Buttons;
