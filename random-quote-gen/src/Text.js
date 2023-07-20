import tachyons from "tachyons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

// exports
export const randomQuoteNum = Math.floor(Math.random() * 1643);

const Text = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [quoteArr, setquoteArr] = useState([]);

  const fetchQuotes = async () => {
    let quoteArr = [];
    try {
      const data = await axios.get("https://type.fit/api/quotes");
      console.log(data);
      setquoteArr(data.data);
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(quoteArr.text);
      setAuthor(quoteArr.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  // const getRandomQuote = () => {
  //   // do rnandom quote logic
  // };

  // console.log(quoteArr[10].text);
  // const randomQuoteNum = Math.floor(Math.random() * 1643);

  const newQuoteState = useSelector((state) => state.quote);

  return (
    <>
      {" "}
      <>
        <h2>
          <FontAwesomeIcon icon={faQuoteLeft} />
          {quoteArr[newQuoteState].text}
        </h2>
        <p>- {quoteArr[newQuoteState].author}</p>
      </>
    </>
  );
};

export default Text;

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