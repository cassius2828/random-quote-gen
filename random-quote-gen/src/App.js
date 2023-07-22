import React from "react";
import Card from "./Card";
import tachyons from "tachyons";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { colors } from "./Buttons";

function App() {
  const newColorState = useSelector((state) => state.color);
  return (
    <div
      style={{
        border: `2px solid ${colors[newColorState]}`,
        transition: "all .5s ease-in-out",
      }}
      className="App tc"
    >
      <Card />
    </div>
  );
}

export default App;
