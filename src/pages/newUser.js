import React from 'react'

const newUser = (props) => {
    return (
        <div>
            <h1>Welcome to AirBnb</h1>
            <form action="http://localhost:8888/newUser" method="POST">
                <input type='text' placeholder='Name' name="name" />
                <input type='email' placeholder='Email' name="email" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default newUser