// style imports
import tachyons from "tachyons";
import "./index.css";
// component imports
import Text from "./Text";
import Buttons from "./Buttons";
// font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareTumblr } from "@fortawesome/free-brands-svg-icons";
// API import
import axios from "axios";
import { useEffect, useState } from "react";

// export function Buttons({ value, onButtonClick }) {
//   return (
//     <div>
//       <a
//         className="f6 link dim ba bw2 ph3 pv2 mb2 dib"
//         href="#0"
//         onClick={onButtonClick}
//       >
//         Next Quote
//       </a>
//       <div className="container">
//         <a href="">
//           <FontAwesomeIcon size="3x" className="icons" icon={faSquareTwitter} />
//           <FontAwesomeIcon size="3x" className="icons" icon={faSquareTumblr} />
//         </a>
//       </div>
//     </div>
//   );
// }

// export function Text() {
//   const [quote, setQuote] = useState("");
//   const [author, setAuthor] = useState("");
//   const [quoteArr, setquoteArr] = useState([]);

//   const fetchQuotes = async () => {
//     let quoteArr = [];
//     try {
//       const data = await axios.get("https://type.fit/api/quotes");
//       console.log(data);
//       setquoteArr(data.data);
//     } catch (error) {
//       console.log(error);
//     }

//     try {
//       setQuote(quoteArr.text);
//       setAuthor(quoteArr.author);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchQuotes();
//   }, []);

//   const getRandomQuote = () => {
//     // do rnandom quote logic
//   };

//   // console.log(quoteArr[10].text);
//   const randomNum = Math.floor(Math.random() * 100);
//   return (
//     <>
//       {" "}
//       <>
//         <h2>
//           <FontAwesomeIcon icon={faQuoteLeft} />
//           {quoteArr[randomNum].text}
//         </h2>
//         <p>- {quoteArr[randomNum].author}</p>
//       </>
//     </>
//   );
// }

export default function Card() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("");

  const colors = [
    "red",
    "orange",
    "blue",
    "skyblue",
    "lime",
    "coral",
    "tan",
    "yellow",
    "grey",
    "black",
    "pink",
  ];

  const handleClick = () => {
    setColor("red");
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


//? Maybe go thru the redux section again and
//? learn and understand how redux can help with react 
//? then implement it into here so you can keep the organization
//? of your components and pass state easier 
