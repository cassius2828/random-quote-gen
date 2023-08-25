import tachyons from "tachyons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { allTags, filteredTags, flatArr, categories} from "../../filteredQuotes";
import {all} from "axios";
import { shorterQuotes } from "../../filteredQuotes";
import {grabCard} from "../../Redux/Action";

export const CardInfo = ({
  quote = "lorem sample text that is what this is you already know it boi",
  author = "lorem fait",
  number = "unknown",
  onClick,
  cardId
}) => {
  // I did not export bc of getter vs setter error when using logic for changing array colors in dark mode
  let colors = [
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
  let colors2 = [
    "#d61a1a",
    "#21d214",
    "#FF6633",
    "#0ed6d3",
    "#ba9a2f",
    "#3369ff",
    "#c9a89d",
    "#4eba7f",
    "#c91ead",
    "#d82b6b",
    "#9894f7",
    "#98aab5",
    "#99de3f",
    "#9d48cf",
    "#ff94b0",
    "#FFF",
  ];
  //////////////////////////////////////////////////


  // const tagtest = () => {
  //   console.log(categories);
    
  // }

  
  // useSelector
  const lightMode = useSelector((state) => state.light);

  // base set up for light mode vs dark mode toggle
  lightMode ? (colors = colors) : (colors = colors2);
  const newColorState = useSelector((state) => state.color);
const dispatch = useDispatch();
  const test = () => {
    dispatch(grabCard());
    console.log(cardId);
  }

  //////////////////////////////////////////////////

  return (
    <>
      <div
      id={cardId}
      onClick={() => test()}
        style={{
          color: colors[newColorState],
          border: `solid 2px ${colors[newColorState]}`,
        }}
        className="quote-info-box tc mt3 pa3"
        // id="quote-info-box"
      >
        <h5
          style={{
            color: colors[newColorState],
            transition: "all .5s ease-in-out",
          }}
          className="mb3"
        >
          <FontAwesomeIcon
            style={{
              color: colors[newColorState],
              transition: "all .5s ease-in-out",
            }}
            icon={faQuoteLeft}
          />
          {quote}
        </h5>
        <p
          style={{
            color: colors[newColorState],
            transition: "all .5s ease-in-out",
          }}
        >
          - {author}
        </p>
        <p
          style={{
            color: colors[newColorState],
            transition: "all .5s ease-in-out",
          }}
        >
          Quote #{number + 1}
        </p>
      </div>
    </>
  );
};
