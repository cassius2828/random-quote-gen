import tachyons from "tachyons";
import { CardInfo } from "./CardInfo";
import "../../index.css";
import { colors } from "../MainPage/Buttons";
import { useSelector } from "react-redux";
import { useState } from "react";
// import { data } from "./TestAPI";
import { shorterQuotes } from "../../filteredQuotes";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

export const SearchQuotes = () => {
  const newColorState = useSelector((state) => state.color);
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const searchQuotes = (searchValue) => {
    setSearch(searchValue);
    if (search !== "") {
      const filteredData = shorterQuotes.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(shorterQuotes);
    }
  };

  return (
    <div className="search-container tc">
      <input
        style={{
          color: colors[newColorState],
          border: `solid 4px ${colors[newColorState]}`,
        }}
        onChange={(e) => searchQuotes(e.target.value)}
        className="tc f6 dim ba bw2 ph3 pv2 mb2 dib"
        type="search"
        placeholder="search for quotes..."
      />
      {/* break */}
      <InfiniteScroll
        className="infinite-scroll mb4"
        dataLength={shorterQuotes.length}
        next={shorterQuotes}
        hasMore={true} // Replace with a condition based on your data source
        height={620}
      >
        <div id="back-to-top"></div>
        <div className="card-containers">
          {search.length > 0
            ? filteredResults.map((item, index) => {
                return <CardInfo index={index + 1} key={item._id} quote={item.content} author={item.author} />;
              })
            : shorterQuotes.map((item, index) => {
                return <CardInfo index={index + 1} key={item._id} quote={item.content} author={item.author} />;
              })}
        </div>
       {/* //!   will style this later */}
        <a href="#back-to-top">
          <FontAwesomeIcon className="back-to-top" icon={faArrowAltCircleUp} />
        </a>
      </InfiniteScroll>
      <footer
        style={{
          color: `${colors[newColorState]}`,
          transition: "all .5s ease-in-out",
        }}
        className="tc ma5"
      >
        Developed By{" "}
        <a
          style={{
            color: `${colors[newColorState]}`,
            transition: "all .5s ease-in-out",
          }}
          href="https://github.com/cassius2828"
          target="_blank"
          rel="noreferrer"
        >
          Cassius Reynolds
        </a>
      </footer>
    </div>
  );
};

//* Will add <Link> to navigate card info, will bring us back to main screen with that quote selected
//* in order to do this, that change will have to change the state as well. Action creators are the only way to
//*change state in such a way right? So I will need to look into that
//? OR, I could make it to where when a card is clicked all other cards disappear and this one grows??
//?which ever concept is more feasable I will pursue


/*
Things to do
1: Add dropdown filter by category
2: make cards clickable and take you to the main screen with the state updated to that card number
3: style buttons in search section
4: style the error report when you try to hit next or previous quote on first load
5: make site fully resposnive 
5b: take away duplicates and clean number code to match the new length of the data
6: put it up on github
7: make a copy and pass the necessary tests for FCC



*/