import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import NewStays from './components/newStays';

const Property = props => {
  const [property, setProperty] = useState({});
  useEffect(() => {
    Axios.get(`/Property?propertyID=${props?.match.params.property}`)
      .then(res => setProperty(res.data[0]))
      .catch(err => console.log(err));
  }, [props, props.match.params.id, props.match.params.property]);
  return (
    <div>
      <h1>This is property {props?.match.params.id}</h1>

      {property ? (
        <div>
          <div>
            <p>House name: {property.houseName}</p>
            <p>Location: {property.location}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Nightly cost: {`£${property.nightlyCost}`}</p>
          </div>
          <br />
          <NewStays
            owner={property.user_id}
            property={props?.match.params.property}
            user={props?.match.params.user}
            bedrooms={property.bedrooms}
            price={property.nightlyCost}
            houseName={property.houseName}
          />
        </div>
      ) : (
        'loading'
      )}
    </div>
  );
};

export default Property;
