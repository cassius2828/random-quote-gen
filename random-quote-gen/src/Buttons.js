import tachyons from 'tachyons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "./@fortawesome/fontawesome-free-regular";


export default function Buttons() {
    return (
      <div>
        {/* <FontAwesomeIcon icon={["far", "coffee"]} /> */}
        <FontAwesomeIcon icon={faAddressCard} />
        
        <a className="f6 link dim ba bw2 ph3 pv2 mb2 dib" href="#0">
          Next Quote
        </a>
      </div>
    );
}

/*

node_modules/@fortawesome/fontawesome-free
*/