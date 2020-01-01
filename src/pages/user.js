import React, { useEffect, useState} from 'react'
import Axios from 'axios';
import NewProperty from './components/newProperty'
import Properties from './components/properties';
import Stays from './components/stays';

const User = (props) => {
    const [response, setResponse] = useState([]);
    useEffect(() => {
        Axios.get('/user')
        .then(res => {console.log(res.data); setResponse(res.data)})
        .catch(err => console.log(err));
    }, [props.match.params.id])
    return (
        <div>
            <div>
                <ul>
                    <li><a href={"http://localhost:3000/user/"}>Profile</a></li>
                    <li><a href={"http://localhost:3000/newUser/"}>Create Account</a></li>
                    <li><a href={"http://localhost:3000/"}>Home</a></li>
                </ul>
            </div>
            {(response === "Error") ? (
                <div>
                    <h2>Please login to see your Account</h2>
                    <a href="http://localhost:3000/login">Login</a>
                </div>
            ) : (
                <div>
                    <h1>Welcome {response[0] ? response[0].name : null}</h1>
                    {
                        response[2] ? ( response[2].map(property => 
                            <Properties key={property._id} property={property} user={property.owner} />
                        )) : null 
                    }
                        
                    <NewProperty />
                    <h2>Your stays</h2>

                    {   
                        response[1] ? (
                            response[1].map(stay => <Stays user={response[0]._id} stay={stay} /> 
                        )) : null
                    } 
                </div>
            )}
        </div>
    )
}

export default User
