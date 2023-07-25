// style imports
import tachyons from "tachyons";
import "../../index.css";

// component imports
import Text from "./Text";
import Buttons from "./Buttons";

export default function Card() {
  return (
    <div className={`cardBase bg-white br3 pa3 ${"color"}`}>
      <Text />
      <Buttons />
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

//? Maybe go thru the redux section again and
//? learn and understand how redux can help with react
//? then implement it into here so you can keep the organization
//? of your components and pass state easier
