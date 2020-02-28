import React from 'react';

const Properties = ({ property, user }) => {
  return (
    <div className="property">
      <p>House name: {property.houseName}</p>
      <p>Location: {property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Nightly cost: {`£${property.nightlyCost}`}</p>
      <a href={`http://localhost:3000/property/${property._id}/${user}`}>View property</a>
    </div>
  );
};

export default Properties;
