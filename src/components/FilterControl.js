import React , {useState, useEffect} from 'react';
import InputSearch from './InputSearch';

const FilterControl = (props) => {
  const {filterSelectHandler, optionsList} = props;
  const [isListExpanded, setIsListExpanded] = useState(false);

  const toggleListExpanded = (ev) => {
    console.log('old isListExpanded', isListExpanded)
    console.log('new isListExpanded', !isListExpanded)
    setIsListExpanded(!isListExpanded);
  }

  const handleListSelection = (ev) => {
    toggleListExpanded(ev);
    filterSelectHandler(ev);
  }

  return (
    <div>
      <div id="list_default" onClick={toggleListExpanded}>Filter by Region</div>
      <div id="" onClick={handleListSelection}>None</div>
      <div id="africa" onClick={handleListSelection}>Africa</div>
      <div id="americas" onClick={handleListSelection}>Americas</div>
      <div id="asia" onClick={handleListSelection}>Asia</div>
      <div id="europe" onClick={handleListSelection}>Europe</div>
      <div id="oceania" onClick={handleListSelection}>Oceania</div>
    </div>
  )
}

export default FilterControl;
