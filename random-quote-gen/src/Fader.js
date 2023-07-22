import {useEffect} from 'react';
import {keyframes} from 'styled-components';

const Fader = () => {
  const fade = keyframes`
    0% { opacity: 1 }
    50% {opacity: 0}
    100% { opacity: 1}
`;

  const fadeStyle = {
   
    animation: `${fade} 2s linear infinite`,
  };

  useEffect(() => {
    
  })

  return <div style={fadeStyle} />;
};

export default Fader;
