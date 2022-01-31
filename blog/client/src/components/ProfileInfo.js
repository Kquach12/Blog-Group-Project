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
        <div className="container ">
            <div className={`${styles.blogContainer} rounded mb-2 bg-white p-2`}>
            <div className="d-flex align-items-center flex-column bg-white">
                <div className="mt-4 bg-white">
                    <img className="bg-white" src='../../images/profile.png'/>
                </div>
                <div className="mt-4">
                    <h2 className="bg-white">{loggedInUser.firstName} {loggedInUser.lastName}</h2>
                    
                </div>
            </div>
            </div>
        </div>
    )
}
export default ProfileInfo;