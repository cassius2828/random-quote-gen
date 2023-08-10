import tachyons from "tachyons";
import { CardInfo } from "./CardInfo";
import ErrorBoundry from "../../ErrorBoundary";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { data } from "./TestAPI";
import { shorterQuotes } from "../../filteredQuotes";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faMoon,
  faSun,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { goDarkMode, goLightMode, grabCard } from "../../Redux/Action";
import { Link } from "react-router-dom";

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

export const SearchQuotes = () => {
  
  // I did not export bc of getter vs setter error when using logic for changing array colors in dark mode
  let colors = [
    "#d61a1a",
    "#21d214",
    "#FF6633",
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
  let colors2 = [
    "#d61a1a",
    "#21d214",
    "#FF6633",
    "#0ed6d3",
    "#ba9a2f",
    "#3369ff",
    "#c9a89d",
    "#4eba7f",
    "#c91ead",
    "#d82b6b",
    "#9894f7",
    "#98aab5",
    "#99de3f",
    "#9d48cf",
    "#ff94b0",
    "#FFF",
  ];

  //////////////////////////////////////////////////
  // base set up for light mode vs dark mode toggle
  const lightMode = useSelector((state) => state.light);

  lightMode
    ? (document.body.style.backgroundColor = "white")
    : (document.body.style.backgroundColor = "rgb(32, 32, 32)");

  lightMode ? (colors = colors) : (colors = colors2);

  // base set up for light mode vs dark mode toggle
  //////////////////////////////////////////////////

  const dispatch = useDispatch();

  const newColorState = useSelector((state) => state.color);
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);


 

  

  // search functionality
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

  const grabCard1 = (selector) => {
    const theCard = document.getElementById(selector);
    
    console.log(theCard);
    console.log('hi');
  }

  // ! START OF RETURN

  return (
    <div 
    className="search-container tc">
      <>
        <div className="search-icon-container mb4">
          <Link to="/">
            <FontAwesomeIcon
              icon={faHome}
              size="2x"
              style={{
                color: colors[newColorState],
                transition: "all .5s ease-in-out",
              }}
            />
          </Link>

          {lightMode ? (
            <FontAwesomeIcon
              className=""
              style={{
                color: colors[newColorState],
                transition: "all .5s ease-in-out",
                cursor: "pointer",
              }}
              icon={faMoon}
              size="2x"
              onClick={() => {
                dispatch(goDarkMode());
              }}
            />
          ) : (
            <FontAwesomeIcon
              className=""
              style={{
                color: colors[newColorState],
                cursor: "pointer",
                transition: "all .5s ease-in-out",
              }}
              icon={faSun}
              size="2x"
              onClick={() => {
                dispatch(goLightMode());
              }}
            />
          )}

          <a href="#back-to-top">
            <FontAwesomeIcon
              className="back-to-top"
              icon={faArrowAltCircleUp}
              size="2x"
              style={{
                color: colors[newColorState],
                transition: "all .5s ease-in-out",
              }}
            />
          </a>
        </div>

        <input
          style={{
            color: colors[newColorState],
            border: `solid 4px ${colors[newColorState]}`,
            backgroundColor: `transparent`,
          }}
          onChange={(e) => searchQuotes(e.target.value)}
          className="tc f6 dim ba bw2 ph3 pv2 mb2 dib"
          type="search"
          placeholder="search for quotes..."
        />

        <ErrorBoundry>
          <InfiniteScroll
            className="infinite-scroll mb4"
            dataLength={shorterQuotes.length}
            // next={shorterQuotes}
            hasMore={true} // Replace with a condition based on your data source
            height={620}
          >
            <div id="back-to-top"></div>
            <div className="card-containers">
              {search.length > 0
                ? filteredResults.map((item) => {
                    return (
                      <CardInfo
                      cardId={item._id}
                        key={item._id}
                        quote={item.content}
                        author={item.author}
                        expand={false}
                        number={item.quote}
                        // onClick={grabCard1(item._id)}
                        
                        
                      />
                    );
                  })
                : shorterQuotes.map((item) => {
                    return (
                      <CardInfo
                        cardId={item._id}
                        key={item._id}
                        quote={item.content}
                        author={item.author}
                        expand={false}
                        number={item.quote}
                        // onClick={grabCard1(item._id)}
                      />
                    );
                  })}
            </div>
          </InfiniteScroll>
        </ErrorBoundry>
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
      </>
    </div>
  );

  

  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  /* <div className="search-icon-container mb4">
        {/* icon 1 }
        <Link to="/">
          <FontAwesomeIcon
            icon={faHome}
            size="2x"
            style={{
              color: colors[newColorState],
              transition: "all .5s ease-in-out",
            }}
          />
        </Link>
        {/* icon 2 }
        {lightMode ? (
          <FontAwesomeIcon
            className=""
            style={{
              color: colors[newColorState],
              transition: "all .5s ease-in-out",
              cursor: "pointer",
            }}
            icon={faMoon}
            size="2x"
            onClick={() => {
              dispatch(goDarkMode());
            }}
          />
        ) : (
          <FontAwesomeIcon
            className=""
            style={{
              color: colors[newColorState],
              cursor: "pointer",
              transition: "all .5s ease-in-out",
            }}
            icon={faSun}
            size="2x"
            onClick={() => {
              dispatch(goLightMode());
            }}
          />
        )}
        {/* icon 3 }
        <a href="#back-to-top">
          <FontAwesomeIcon
            className="back-to-top"
            icon={faArrowAltCircleUp}
            size="2x"
            style={{
              color: colors[newColorState],
              transition: "all .5s ease-in-out",
            }}
          />
        </a>
      </div>

      {/* Search Button }
      <input
        style={{
          color: colors[newColorState],
          border: `solid 4px ${colors[newColorState]}`,
          backgroundColor: `transparent`,
        }}
        onChange={(e) => searchQuotes(e.target.value)}
        className="tc f6 dim ba bw2 ph3 pv2 mb2 dib"
        type="search"
        placeholder="search for quotes..."
      />

      <ErrorBoundry>
        {/* Scroll Display }
        <InfiniteScroll
          className="infinite-scroll mb4"
          dataLength={shorterQuotes.length}
          // next={shorterQuotes}
          hasMore={true} // Replace with a condition based on your data source
          height={620}
        >
          <div id="back-to-top"></div>
          <div className="card-containers">
            {search.length > 0
              ? filteredResults.map((item, index) => {
                  return (
                    <CardInfo
                      index={index + 1}
                      key={item._id}
                      quote={item.content}
                      author={item.author}
                      onClick={handleExpand}
                    />
                  );
                })
              : shorterQuotes.map((item, index) => {
                  return (
                    <CardInfo
                      index={index + 1}
                      key={item._id}
                      quote={item.content}
                      author={item.author}
                      onClick={handleExpand}
                    />
                  );
                })}
          </div>
          {/* //!   will style this later 
        </InfiniteScroll>
      </ErrorBoundry>
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
      {/* </footer> */
};
// </div> */}
// );
// };

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
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////
/*
  
  <div className="search-icon-container mb4">
        {/* icon 1 }
        <Link to="/">
          <FontAwesomeIcon
            icon={faHome}
            size="2x"
            style={{
              color: colors[newColorState],
              transition: "all .5s ease-in-out",
            }}
          />
        </Link>
        {/* icon 2 }
        {lightMode ? (
          <FontAwesomeIcon
            className=""
            style={{
              color: colors[newColorState],
              transition: "all .5s ease-in-out",
              cursor: "pointer",
            }}
            icon={faMoon}
            size="2x"
            onClick={() => {
              dispatch(goDarkMode());
            }}
          />
        ) : (
          <FontAwesomeIcon
            className=""
            style={{
              color: colors[newColorState],
              cursor: "pointer",
              transition: "all .5s ease-in-out",
            }}
            icon={faSun}
            size="2x"
            onClick={() => {
              dispatch(goLightMode());
            }}
          />
        )}
        {/* icon 3 }
        <a href="#back-to-top">
          <FontAwesomeIcon
            className="back-to-top"
            icon={faArrowAltCircleUp}
            size="2x"
            style={{
              color: colors[newColorState],
              transition: "all .5s ease-in-out",
            }}
          />
        </a>
      </div>

      {/* Search Button }
      <input
        style={{
          color: colors[newColorState],
          border: `solid 4px ${colors[newColorState]}`,
          backgroundColor: `transparent`,
        }}
        onChange={(e) => searchQuotes(e.target.value)}
        className="tc f6 dim ba bw2 ph3 pv2 mb2 dib"
        type="search"
        placeholder="search for quotes..."
      />

      <ErrorBoundry>
        {/* Scroll Display }
        <InfiniteScroll
          className="infinite-scroll mb4"
          dataLength={shorterQuotes.length}
          // next={shorterQuotes}
          hasMore={true} // Replace with a condition based on your data source
          height={620}
        >
          <div id="back-to-top"></div>
          <div className="card-containers">
            {search.length > 0
              ? filteredResults.map((item, index) => {
                  return (
                    <CardInfo
                      index={index + 1}
                      key={item._id}
                      quote={item.content}
                      author={item.author}
                      onClick={handleExpand}
                    />
                  );
                })
              : shorterQuotes.map((item, index) => {
                  return (
                    <CardInfo
                      index={index + 1}
                      key={item._id}
                      quote={item.content}
                      author={item.author}
                      onClick={handleExpand}
                    />
                  );
                })}
          </div>
          {/* //!   will style this later }
        </InfiniteScroll>
      </ErrorBoundry>
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
      
      
      //////////////////////////
      
      Expand card random route get

- Click on div, sets state to that cards ID
- Click outside of dic, sets that state to null

const expand, setExpand = useState(null);
const handleExpand = (e) => {
console.log(e.shorterQuotes._id);
}

- Expand will be based on the state
const IdList = shorterQuotes.map(item._id => {
  return item._id
})

shorterQuotes.filter(item._id => {
  return item._id === expandState
})
      
      */
