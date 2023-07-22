import tachyons from "tachyons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareTumblr } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { newColor, newQuote } from "./Redux/Action";
import { useSelector } from "react-redux";
import { useState } from "react";

export const colors = [
  "#FF6633",
  "#21d214",
  "#d61a1a",
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
        Next Quote
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
