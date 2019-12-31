import React from 'react'

const Stays = (props) => {
    return (
        <div className="Stays">
            <p>House name: {props.stay.houseName}</p>
            <p>Location: {props.stay.location}</p>
            <p>Start date: {props.stay.start_date}</p>
            <p>Nights: {props.stay.nights}</p>
            <p>Bedrooms: {props.stay.bedrooms}</p>
            <p>Nightly cost: {"£" + props.stay.price}</p>
            <a href={'http://localhost:3000/property/'+ props.stay.property + "/" + props.user}>View property</a>
            {(props.user === props.stay.owner) ? <a href={'http://localhost:3000/user/'+ props.stay.user_id}>View vister</a> : <a href={'http://localhost:3000/user/'+ props.stay.owner}>View owner</a> }
        </div>          
    )
}

export default Stays