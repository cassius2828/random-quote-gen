import React from "react";
import Card from "./components/MainPage/Card";
import tachyons from "tachyons";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { goLightMode, goDarkMode } from "./Redux/Action";

function App() {
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
  const dispatch = useDispatch();
  // useSelectors
  const newColorState = useSelector((state) => state.color);
  const lightMode = useSelector((state) => state.light);

  // base set up for light mode vs dark mode toggle
  lightMode
    ? (document.body.style.backgroundColor = "white")
    : (document.body.style.backgroundColor = "rgb(32, 32, 32)");

  lightMode ? (colors = colors) : (colors = colors2);

  return (
    <div className="tc">
      <div className="dark-light tc mb4">
        {lightMode ? (
          <FontAwesomeIcon
            className=""
            style={{
              color: colors[newColorState],
              cursor: "pointer",
              transition: "all .5s ease-in-out",
            }}
            icon={faMoon}
            size="2x"
            onClick={() => {
              dispatch(goDarkMode());
            }}
          />
        ) : (
          <FontAwesomeIcon
            className=""
            style={{
              color: colors[newColorState],
              cursor: "pointer",
              transition: "all .5s ease-in-out",
            }}
            icon={faSun}
            size="2x"
            onClick={() => {
              dispatch(goLightMode());
            }}
          />
        )}
      </div>
      <Link to="/search">
        <a
          target="_blank"
          id="new-quote"
          style={{
            color: colors[newColorState],
            transition: "all .5s ease-in-out",
          }}
          className="f6 link dim ba bw2 ph3 pv2 mb3 dib"
          href="#0"
        >
          Search For Quotes
        </a>
      </Link>
      <div
        style={{
          border: `2px solid ${colors[newColorState]}`,
          transition: "all .5s ease-in-out",
        }}
        className="App tc"
      >
        <Card />
      </div>

      <footer
        style={{
          color: `${colors[newColorState]}`,
          transition: "all .5s ease-in-out",
        }}
        className=" tc ma5"
      >
        Developed By{" "}
        <a
          style={{
            color: `${colors[newColorState]}`,
            transition: "all .5s ease-in-out",
          }}
          href="https://github.com/cassius2828"
        >
          Cassius Reynolds{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
