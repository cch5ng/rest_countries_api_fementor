import React , {useState, useEffect} from 'react';
import classNames from 'classnames/bind';
import styles from './FilterControl.module.scss';

let cx = classNames.bind(styles);

const FilterControl = (props) => {
  const {filterSelectHandler, optionsList, curRegion} = props;
  const [isListExpanded, setIsListExpanded] = useState(false);

  let listClassName = cx({
    hidden: !isListExpanded,
    show: isListExpanded
  });


  const toggleListExpanded = (ev) => {
    setIsListExpanded(!isListExpanded);
  }

  const handleListSelection = (ev) => {
    toggleListExpanded(ev);
    filterSelectHandler(ev);
  }

  return (
    <div className={styles.filter_control_container}>
      <div id="list_default" onClick={toggleListExpanded}>{curRegion.length ? `Region: ${curRegion}`: 'Filter by Region'}</div>
      <div className={listClassName}>
        <div id="" onClick={handleListSelection}>None</div>
        <div id="Africa" onClick={handleListSelection}>Africa</div>
        <div id="Americas" onClick={handleListSelection}>Americas</div>
        <div id="Asia" onClick={handleListSelection}>Asia</div>
        <div id="Europe" onClick={handleListSelection}>Europe</div>
        <div id="Oceania" onClick={handleListSelection}>Oceania</div>
      </div>
    </div>
  )
}

export default FilterControl;
