import React from 'react'

const Properties = (props) => {

    return (
        <div className="property">
            <p>House name: {props.property.houseName}</p>
            <p>Location: {props.property.location}</p>
            <p>Bedrooms: {props.property.bedrooms}</p>
            <p>Nightly cost: {"£" + props.property.nightlyCost}</p>
            <a href={'http://localhost:3000/property/'+ props.property._id + "/" + props.user}>View property</a>
        </div>          
    )
}

export default Properties