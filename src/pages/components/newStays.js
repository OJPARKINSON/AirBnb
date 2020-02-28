import React from 'react';

const newStays = props => {
  return (
    <div>
      <h2>Book a stay</h2>
      <form action="http://localhost:8888/stay" method="POST">
        <input type="date" placeholder="start date" name="start_date" />
        <input type="date" placeholder="end date" name="end_date" />
        <input type="number" placeholder="Beds" max={props.bedrooms} name="beds" />
        <input type="number" placeholder="Number of nights" min="0" max="32" name="nights" />
        <input readOnly name="owner" value={props.owner} hidden />
        <input readOnly name="price" value={props.price} hidden />
        <input readOnly name="user_id" value={props.user} hidden />
        <input readOnly name="property" value={props.property} hidden />
        <input readOnly name="houseName" value={props.houseName} hidden />
        <input type="submit" />
      </form>
    </div>
  );
};

export default newStays;
