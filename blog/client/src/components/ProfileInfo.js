import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import styles from '../styles/BlogList.module.css'


const ProfileInfo = (props) => {
    const { user } = props
    const [loggedInUser, setLoggedInUser] = useState('');
    const [avatar, setAvatar] = useState('');

    // useEffect(() =>{
    //     axios.get(`https://ui-avatars.com/api/?name=${loggedInUser.firstName}+${loggedInUser.lastName}`)
    //         .then((res) =>{
    //             console.log(loggedInUser)
    //             console.log(res.json)
    //             console.log(res.results)
    //             setAvatar(res.results)
    //         })
    // })

    useEffect(()=>{
        axios.get('http://localhost:8000/api/user/getLoggedInUser', {
            withCredentials: true
        })
        .then((res) =>{
            console.log(res.data)
            setLoggedInUser(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    
    },[])
    
    

    return (
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src='../../images/profile.png' alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{loggedInUser.firstName} {loggedInUser.lastName}</h5>
                <p className="card-text">Some quick example text to build on the card title.</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}
export default ProfileInfo;