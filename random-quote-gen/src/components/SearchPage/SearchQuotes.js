import tachyons from 'tachyons';
import { CardInfo } from './CardInfo';
import '../../index.css'
import { colors } from '../MainPage/Buttons';
import { useSelector } from 'react-redux';

export const SearchQuotes = ({searchChange}) => {
  const newColorState = useSelector((state) => state.color);

  return (
    <div className="search-container tc">
      <input
        style={{
          color: colors[newColorState],
          border: `solid 2px ${colors[newColorState]}`,
        }}
        onChange={searchChange}
        className="tc f6 dim ba bw2 ph3 pv2 mb2 dib"
        type="search"
        placeholder="search for quotes..."
      />
      <div className="card-containers">
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
      </div>
    </div>
  );
}
