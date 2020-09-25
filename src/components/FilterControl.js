import React , {useState, useEffect} from 'react';
import classNames from 'classnames/bind';
import styles from './FilterControl.module.scss';
import { IoIosArrowDown } from "react-icons/io";

let cx = classNames.bind(styles);

const FilterControl = (props) => {
  const {filterSelectHandler, optionsList, curRegion} = props;
  const [isListExpanded, setIsListExpanded] = useState(false);

  let listClassName = cx({
    hidden: !isListExpanded,
    show: isListExpanded,
    filter_list_container: true
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
      <div id="list_default" className={styles.list_default_container} onClick={toggleListExpanded}>
        <div>{curRegion.length ? `Region: ${curRegion}`: 'Filter by Region'}</div>
        <IoIosArrowDown />
      </div>
      <div className={listClassName}>
        <div id="" onClick={handleListSelection} className={styles.filter_list_item}>None</div>
        <div id="Africa" onClick={handleListSelection} className={styles.filter_list_item}>Africa</div>
        <div id="Americas" onClick={handleListSelection} className={styles.filter_list_item}>Americas</div>
        <div id="Asia" onClick={handleListSelection} className={styles.filter_list_item}>Asia</div>
        <div id="Europe" onClick={handleListSelection} className={styles.filter_list_item}>Europe</div>
        <div id="Oceania" onClick={handleListSelection} className={styles.filter_list_item}>Oceania</div>
      </div>
    </div>
  )
}

export default FilterControl;
