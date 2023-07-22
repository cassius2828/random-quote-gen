import tachyons from "tachyons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import './transition.css';


// exports


const Text = () => {
  const [quoteArr, setquoteArr] = useState([]);

  const fetchQuotes = async () => {
    try {
      const data = await axios.get("https://type.fit/api/quotes");
      setquoteArr(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

const colors = [
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

  const newQuoteState = useSelector((state) => state.quote);
  const newColorState = useSelector((state) => state.color);
  const newFadeState = useSelector((state) => state.fade);
  const noFadeState = useSelector((state) => state.noFade);
  console.log(newFadeState);
  console.log(noFadeState);


  return (
    <>
      {" "}
      <div className={noFadeState}>
        

        <h2
          style={{
            color: colors[newColorState],
            transition: "all .5s ease-in-out",
          }}
        >
          <FontAwesomeIcon icon={faQuoteLeft} />
          {quoteArr[3]
            ? " " + quoteArr[newQuoteState].text
            : console.log("array is empty")}
        </h2>
        <p
          style={{
            color: colors[newColorState],
            transition: "all .5s ease-in-out",
          }}
        >
          -{" "}
          {quoteArr[3]
            ? quoteArr[newQuoteState].author
              ? quoteArr[newQuoteState].author
              : "anonymous"
            : console.log("array is empty")}
        </p>

      </div>
    </>
  );
};

export default Text;


//! keyframes info below
/*
const textFade = keyframes`
0% {
  opactiy: 1;
}

50% {
  opacity: 0
}

100% {
  opacity: 1
}`;

const Title = styled.h1`
animation-name: ${textFade};
animation-duration: .5s;
`;
*/







//? Quote API Below
/*

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });

*/

// {/* {quoteArr.forEach((quote) => (

// ))} */
// }
/*

everytime I click the submit button 2 things happen
1: Generate new quotes
2: Generate new colors

if(prevIndex < index) {
  *display next colors from arr*
  counter++
} else if (index > 9) {
  *display initial color*
  counter - 10
}

*/

//? I think the error is bc the part of the data arr I am trying to access either
//? wont load, the number is not a number given in the array index, or something was
//? done to affect the array / ability to access the array

//* It claims the issue is on the Text component, but I am having a hard time figureing out
//* what made it stop working when it worked fine earlier

// test
