import tachyons from "tachyons";
import { CardInfo } from "./CardInfo";
import ErrorBoundry from "../../ErrorBoundary";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { data } from "./TestAPI";
import { shorterQuotes, categories } from "../../filteredQuotes";
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
  const [category, setCategory] = useState("");
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
  // global and local state
  const newColorState = useSelector((state) => state.color);
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [dblFiltered, setDblFiltered] = useState([]);
  const [searchToggle, setSearchToggle] = useState(false);

  // * filters quotes in drop down
  let updatedList = shorterQuotes.filter((item) => {
    return item.tags[2]
      ? item.tags[0] === category ||
          item.tags[1] === category ||
          item.tags[2] === category
      : item.tags[0] === category || item.tags[1] === category;
  });

  useEffect(() => {
    console.log(updatedList);
  }, [category]);

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

  // searches through already categorized quotes
  const searchCategoryQuotes = (searchValue) => {
    setSearch(searchValue);
    if (search !== "") {
      const filteredData = updatedList.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      });
      setDblFiltered(filteredData);
    } else {
      setDblFiltered(updatedList);
    }
  };

  // updates category state
  const handleCategoryChange = () => {
    const select = document.getElementById("dropdown-filter").value;
    setCategory(select);
  };

  // alternates search bars to search through the correct lists
  useEffect(() => {
    handleCategoryChange();
    if (category !== "") {
      setSearchToggle(false);
    } else {
      setSearchToggle(true);
    }
    console.log(category);
  }, [category]);

  // //////////////////
  // ! START OF RETURN
  // //////////////////
  return (
    <div className="search-container tc">
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

        <div className="filter-container">
          {/* switching the search toggle value worked! lets go */}
          {!searchToggle ? (
            // dbl search
            <input
              style={{
                color: lightMode ? colors[newColorState] : "whitesmoke",
                border: `solid 4px ${colors[newColorState]}`,
                backgroundColor: `transparent`,
              }}
              onChange={(e) => searchCategoryQuotes(e.target.value)}
              className="tc f6 ba bw2 ph3 pv2 mb2 dib"
              type="search"
              placeholder="search for quotes..."
            />
          ) : (
            // single search
            <input
              style={{
                color: lightMode ? colors[newColorState] : "whitesmoke",
                border: `solid 4px ${colors[newColorState]}`,
                backgroundColor: `transparent`,
              }}
              onChange={(e) => searchQuotes(e.target.value)}
              className="tc f6 ba bw2 ph3 pv2 mb2 dib"
              type="search"
              placeholder="search for quotes..."
            />
          )}
          <select
            className="tc f6 ba bw2 ph3  mb2 dib"
            style={{
              border: `solid 4px ${colors[newColorState]}`,
            }}
            onChange={handleCategoryChange}
            id="dropdown-filter"
          >
            <option key="blank"></option>
            {categories.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
        </div>

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
              {
                // * if a category is selected and the search bar is active then
                // * search filter thru the categorized list
                category !== "" && search.length > 0
                  ? dblFiltered.map((item) => {
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
                  : // * if a category is selected, filter by category
                  category !== ""
                  ? updatedList.map((item) => {
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
                  : // * if no category is selected, filter by search
                  search.length > 0
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
                  : // * if none are true then return whole list
                    shorterQuotes.map((item) => {
                      return (
                        <CardInfo
                          cardId={item._id}
                          key={item._id}
                          quote={item.content}
                          author={item.author}
                          expand={false}
                          number={item.quote}
                        />
                      );
                    })
              }
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
};
