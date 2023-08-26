import tachyons from "tachyons";
import { CardInfo } from "./CardInfo";
import ErrorBoundry from "../../ErrorBoundary";
import "../../search.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { shorterQuotes, categories } from "../../filteredQuotes";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faMoon,
  faSun,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { goDarkMode, goLightMode } from "../../Redux/Action";
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

  // ///////////////////////////////
  // * filters quotes in drop down
  // ///////////////////////////////
  const customIncludes = (obj, property, value) => {
    if (!obj.hasOwnProperty(property)) {
      return false;
    }
    if (Array.isArray(obj[property])) {
      if (obj[property].includes(value)) {
        return true;
      } else if (obj[property] === value) {
        return true;
      } else {
        return false;
      }
    }
  };

  const filterWrapper = (arrayOfObjects, key, value) => {
    return arrayOfObjects.filter((obj) => {
      return customIncludes(obj, key, value);
    });
  };
  const updatedList = filterWrapper(shorterQuotes, "tags", category);

  // ///////////////////////////////
  // search functionality
  // ///////////////////////////////
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

  // ///////////////////////////////
  // searches through already categorized quotes
  // ///////////////////////////////
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

  // ///////////////////////////////
  // updates category state
  // ///////////////////////////////
  const handleCategoryChange = () => {
    const select = document.getElementById("dropdown-filter").value;
    setCategory(select);
  };

  // ///////////////////////////////
  // alternates search bars to search through the correct lists
  // ///////////////////////////////
  useEffect(() => {
    handleCategoryChange();
    if (category !== "") {
      setSearchToggle(false);
    } else {
      setSearchToggle(true);
    }
    console.log(category);
  }, [category]);

  // ///////////////////////////////
  // get width of window for placeholder text
  // ///////////////////////////////
  const windowWidth = window.innerWidth;
  const resetZoom = () => {
    window.document.body.style.zoom = 1;
    console.log("hi");
  };

  // //////////////////
  // ! START OF RETURN
  // //////////////////
  return (
    <div
      // onClick={() => window.document.body.style.zoom = 1}
      className="search-container tc"
    >
      <>
        <div className="search-icon-container mb4">
          <Link to="/">
            <FontAwesomeIcon
              className="search-icon"
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
              className="search-icon"
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
              className="search-icon"
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
              className="back-to-top search-icon"
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
              className="search-page-input"
              type="search"
              placeholder={
                windowWidth > 425 ? `search for quotes...` : `search`
              }
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
              className="search-page-input"
              type="search"
              placeholder={
                windowWidth > 425 ? `search for quotes...` : `search`
              }
            />
          )}
          <select
            className="search-page-input"
            style={{
              border: `solid 4px ${colors[newColorState]}`,
              color: lightMode ? colors[newColorState] : "whitesmoke",
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
            className="infinite-scroll mb4 mt4"
            dataLength={shorterQuotes.length}
            hasMore={true}
            height={620}
          >
            <div id="back-to-top"></div>
            <div className="card-containers">
              {
                // ///////////////////////////////
                // * if a category is selected and the search bar is active then
                // * search filter thru the categorized list
                // ///////////////////////////////
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
                  : // ///////////////////////////////
                  // * if a category is selected, filter by category
                  // ///////////////////////////////
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
                  : // ///////////////////////////////
                  // * if no category is selected, filter by search
                  // ///////////////////////////////
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
                  : // ///////////////////////////////
                    // * if none are true then return whole list
                    // ///////////////////////////////
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
