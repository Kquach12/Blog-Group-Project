import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import styles from '../styles/BlogList.module.css'


const ProfileInfo = (props) => {
    const { loggedInUserProp } = props
    // const [loggedInUser, setLoggedInUser] = useState(loggedInUserProp);
    const [avatar, setAvatar] = useState('');

    // useEffect(() =>{
    //     axios.get("https://joeschmoe.io/api/v1/random")
    //         .then((res) =>{
                
    //             console.log(res)
    //             console.log(res.results)
    //             setAvatar(res.data.results)
    //         })
    // }, [])

    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/user/getLoggedInUser', {
    //         withCredentials: true
    //     })
    //     .then((res) =>{
    //         console.log(res.data)
    //         setLoggedInUser(res.data)
    //     })
    //     .catch((err) =>{
    //         console.log(err)
    //     })
    
    // },[])
    
    

    return (
        <div >

        
        <div className="" style={{width: "20rem"}} >
            <img className={`mb-1 card-img-top bg-white rounded-circle ${styles.blogContainer}`} src='https://i.pravatar.cc/300' alt="Card image cap"/>
            <div className={`card-body bg-white text-center ${styles.blogContainer}`}>
                <h3 className="card-title bg-white ">{loggedInUserProp.firstName} {loggedInUserProp.lastName}</h3>
                <p className="card-text bg-white ">Some quick example text to build on the card title.</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
        </div>
    )
}
export default ProfileInfo;