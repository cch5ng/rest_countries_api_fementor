import React, {useState, useEffect} from 'react';

const CountryDetail = () => {
  let { name } = useParams();
  const [countryData, setCountryData] = useState({});

  return (
    <div>TODO DETAIL ({name})</div>
  )
}

export default CountryDetail;
