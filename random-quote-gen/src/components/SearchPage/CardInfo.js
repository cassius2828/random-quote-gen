import tachyons from "tachyons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "../../index.css";
import { useSelector } from "react-redux";

const colors = [
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


export const CardInfo = ({
  quote = "lorem sample text that is what this is you already know it boi",
  author = "lorem fait",
  index = 'unknown'
}) => {
  const newColorState = useSelector((state) => state.color);


  return (
    <div
      style={{
        color: colors[newColorState],
        border: `solid 2px ${colors[newColorState]}`,
      }}
      className="quote-info-box tc mt4"
      id="quote-info-box"
    >
      <h5
        id="text"
        style={{
          color: colors[newColorState],
          transition: "all .5s ease-in-out",
        }}
        className="pa3 pt2"
      >
        <FontAwesomeIcon
          style={{
            color: colors[newColorState],
            transition: "all .5s ease-in-out",
          }}
          icon={faQuoteLeft}
        />
        {quote}
      </h5>
      <p
        style={{
          color: colors[newColorState],
          transition: "all .5s ease-in-out",
        }}
      >
        - {author}
      </p>
      <p
        style={{
          color: colors[newColorState],
          transition: "all .5s ease-in-out",
        }}
      >
        Quote #{index}
      </p>
    </div>
  );
};

// lorem sample text that is what this is you already know it boi
// lorem fait


/*




const [clickState, setClickState] = useState(0);

<Link 
path='/',
onClick={() => setClickState(props.index)}

*/