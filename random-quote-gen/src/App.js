import React from "react";
import Card from './components/MainPage/Card';
import tachyons from "tachyons";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { colors } from "./components/MainPage/Buttons";
import { Link } from "react-router-dom";

function App() {
  const newColorState = useSelector((state) => state.color);
  return (
    <div className="tc">
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
      <p
        style={{
          color: `${colors[newColorState]}`,
          transition: "all .5s ease-in-out",
        }}
        className="tc"
      >
        Developed By Cassius Reynolds
      </p>
    </div>
  );
}

export default App;
