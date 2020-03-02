import React from 'react';

const Stays = ({ stay, user }) => {
  return (
    <div className="Stays">
      <p>House name: {stay.houseName}</p>
      <p>Location: {stay.location}</p>
      <p>Start date: {stay.start_date}</p>
      <p>Nights: {stay.nights}</p>
      <p>Bedrooms: {stay.bedrooms}</p>
      <p>Nightly cost: {`£${stay.price}`}</p>
      <a href={`http://localhost:3000/property/${stay.property}`}>View property</a>
      {user === stay.owner ? (
        <a href={`http://localhost:3000/user/${stay.user_id}`}>View vister</a>
      ) : (
        <a href={`http://localhost:3000/user/${stay.owner}`}>View owner</a>
      )}
    </div>
  );
};

export default Stays;
