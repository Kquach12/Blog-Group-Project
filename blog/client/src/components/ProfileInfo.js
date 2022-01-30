import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';


const ProfileInfo = (props) => {

    const [loggedInUser, setLoggedInUser] = useState('');

    // axios.get('http://localhost:8000/api/user/getLoggedInUser', {
    //     withCredentials: true
    // })
    // .then((res) =>{
    //     console.log(res.data)
    //     setLoggedInUser(res.data)
    // })
    // .catch((err) =>{
    //     console.log(err)
    // })

    

    return (
        <div className='container'>
            <div className="d-flex align-items-center flex-column">
                <div className="mt-4">
                    <i  className="bi bi-person-circle"/>  
                </div>
                <div className="mt-4">
                    {/* <h2>{loggedInUser.firstName} {loggedInUser.lastName}</h2> */}
                    <h4>Neal Ichinohe</h4>
                </div>
                <div className="mt-4">
                    <button className="btn btn-lg btn-outline-primary"  onClick={() => navigate('/my-blogs')}> My Blogs </button>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;