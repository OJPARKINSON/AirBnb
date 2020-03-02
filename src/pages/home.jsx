import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Properties from './components/properties';

const Home = () => {
  const [properties, setProperties] = useState();
  useEffect(() => {
    Axios({
      method: 'get',
      url: '/properties',
    })
      .then(res => setProperties(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <ul>
          <li>
            <a href="http://localhost:3000/profile/">Profile</a>
          </li>
          <li>
            <a href="http://localhost:3000/newUser/">Create Account</a> ||{' '}
            <a href="http://localhost:3000/login/">Login</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Home</a>
          </li>
        </ul>
      </div>
      <h1>Welcome to AirBnB</h1>
      <h2>Available properties</h2>
      {properties ? properties.map(property => <Properties key={property._id} property={property} />) : null}
    </div>
  );
};

export default Home;
