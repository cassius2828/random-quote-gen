import tachyons from "tachyons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Text() {
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

  const getRandomQuote = () => {
    // do rnandom quote logic 
  }

  // console.log(quoteArr[10].text);
const randomNum = Math.floor(Math.random() * 100);
  return (
    <>
      {" "}
      <>
        <h2>
          <FontAwesomeIcon icon={faQuoteLeft} />
          {quoteArr[randomNum].text}
        </h2>
        <p>- {quoteArr[randomNum].author}</p>
      </>
    </>
  );
}

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
