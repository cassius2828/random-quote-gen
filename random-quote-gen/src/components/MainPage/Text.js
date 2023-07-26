import tachyons from "tachyons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import data from '../../quotes.json';
import { shorterQuotes } from "../../filteredQuotes";

// exports

const Text = () => {
  //! no longer using API bc the site is no longer active, instead I am using my
  //! own data I compiled from outside sources
  // const [quoteArr, setquoteArr] = useState([]);

  // const fetchQuotes = async () => {
  //   try {
  //     const response = await axios.get("https://api.api-ninjas.com/v1/quotes", {
  //       headers: {
  //         "X-Api-Key": 'AypqPfFMnmLnw8iuCXM3Lw==qaDeh3llghS570Fh',
  //       },
  //     });

  //     setquoteArr(response.data);
  //     console.log(response)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchQuotes();
  // }, []);

  const quoteArr = shorterQuotes;

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

  return (
    <>
      {" "}
      <div id="quote-box">
        <h2
          id="text"
          style={{
            color: colors[newColorState],
            transition: "all .5s ease-in-out",
          }}
        >
          <FontAwesomeIcon icon={faQuoteLeft} />
          {quoteArr[312]
            ? " " + quoteArr[newQuoteState].content
            : " *our api is having difficulties*"}
        </h2>
        <p
          id="author"
          style={{
            color: colors[newColorState],
            transition: "all .5s ease-in-out",
          }}
        >
          -{" "}
          {quoteArr[312]
            ? quoteArr[newQuoteState].author
              ? quoteArr[newQuoteState].author
              : "anonymous"
            : " :("}
        </p>
      </div>
    </>
  );
};

export default Text;