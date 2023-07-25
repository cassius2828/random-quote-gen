import tachyons from "tachyons";
import { CardInfo } from "./CardInfo";
import "../../index.css";
import { colors } from "../MainPage/Buttons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { robots } from "./TestAPI";

export const SearchQuotes = () => {
  const newColorState = useSelector((state) => state.color);
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const searchQuotes = (searchValue) => {
    setSearch(searchValue);
    if (search !== "") {
      const filteredData = robots.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(robots);
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
      <div className="card-containers">
        {search.length > 0 ? (filteredResults.map((item) => {
         return <CardInfo quote={item.quote} author={item.author}/>
        })) : (robots.map((item) => {
         return <CardInfo quote={item.quote} author={item.author}/>
        }))
        
        
        }
      </div>
    </div>
  );
};

//* Will add <Link> to navigate card info, will bring us back to main screen with that quote selected
//* in order to do this, that change will have to change the state as well. Action creators are the only way to
//*change state in such a way right? So I will need to look into that
//? OR, I could make it to where when a card is clicked all other cards disappear and this one grows??
//?which ever concept is more feasable I will pursue
