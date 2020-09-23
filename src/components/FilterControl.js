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
      <div id="test_id" onClick={handleListSelection}>TEST TEST TEST</div>
    </div>
  )
}

export default FilterControl;
