
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BlogList from '../components/BlogList';
import ProfileInfo from '../components/ProfileInfo';
import { Link } from '@reach/router';
import styles from '../styles/BlogList.module.css'
import CommentForm from '../components/CommentForm';
import Header from '../components/Header';



const OtherUser = (props) => {
    const {id} = props
    const [blogs, setBlogs] = useState([]);
    const [user, setUser] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [showUserBlogs, setShowUserBlogs] = useState(false);


        useEffect(()=>{
            axios.get('http://localhost:8000/api/blogs')
                .then(res=>{
                    setBlogs(res.data);
                    setLoaded(true);
                })
        },[])

        useEffect(()=>{
        axios.get(`http://localhost:8000/api/user/${id}`, {withCredentials:true})
            .then(res=>{ setUser(res.data);
            })
        },[])


    return (

        <div className='container'>
            <Header/>
            <div className='row'>
                <div className='col-6 d-flex align-items-center mt-5 flex-column'>
                    <ProfileInfo loggedInUserProp = {user} /> 
                </div>

                <div className='col'>
                    { loaded && <BlogList filterId={user} showUserBlogs={true}/>}

                </div>

            </div>
        </div>
    )
}

export default OtherUser
