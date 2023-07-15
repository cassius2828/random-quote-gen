import tachyons from "tachyons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareTumblr } from "@fortawesome/free-brands-svg-icons";

export default function Buttons() {
  return (
    <div>
      <a className="f6 link dim ba bw2 ph3 pv2 mb2 dib" href="#0">
        Next Quote
      </a>
      <div className="container">
        <a href="">
          <FontAwesomeIcon size="3x" className="icons" icon={faSquareTwitter} />
          <FontAwesomeIcon size="3x" className="icons" icon={faSquareTumblr} />
        </a>
      </div>
    </div>
  );
}
