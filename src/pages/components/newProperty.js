import React from 'react'

const newProperty = (props) => {
    return (
        <div>
            <h2>Add a new property</h2>
            <form action="http://localhost:8888/property" method="POST">
                <input type='text' placeholder='House number or name' name="houseName" />
                <input type='text' placeholder='Location' name="location" />
                <input type="number" placeholder="Bedrooms" max="25" name="bedrooms"  />
                <input type="number" placeholder="Nightly Cost" name="nightlyCost"  />
                <input type="submit" />
            </form>
        </div>
    )
}

export default newProperty