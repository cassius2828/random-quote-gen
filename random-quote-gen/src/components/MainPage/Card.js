// style imports
import tachyons from "tachyons";
import "../../index.css";
import "../../App.css";

// component imports
import Text from "./Text";
import Buttons from "./Buttons";
import ErrorBoundry from "../../ErrorBoundary";

export default function Card() {
  return (
    <div className={`cardBase br3 flex-column center pa3 ${"color"}`}>
      <ErrorBoundry>
        <Text />
        <Buttons />
      </ErrorBoundry>
    </div>
  );
}