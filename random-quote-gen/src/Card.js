import tachyons from 'tachyons';
import Text from './Text';
import Buttons from "./Buttons";

export default function Card() {

return(
    <div className='cardBase bg-white br3 pa3' >
        <Text/>
        <Buttons/>
    </div>
)

}



//? Quote API Below
/*

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });

*/