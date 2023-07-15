import tachyons from "tachyons";
import Text from "./Text";
import Buttons from "./Buttons";
import { useState } from "react";

import "./index.css";

export default function Card() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("");

  const colors = ["Red", "Orange", "Blue"];

  const handleClick = () => {
    setColor("Red");
  };

  return (
    <div className={`cardBase bg-white br3 pa3 ${color}`}>
      <Text />
      <Buttons handleClick={handleClick} />
    </div>
  );
}

/*
*NOTES TO REMEMBER*
1: Combine Buttons and Text Components
- it'll make it easier to pass props and makes more sense to do so
2: find and fix handleClick object issue
3: Use Math.random logic to get a random array
4: Think more like a computer when organizing your programming style


*/