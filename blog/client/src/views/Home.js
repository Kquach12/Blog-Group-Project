
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BlogList from '../components/BlogList';
import ProfileInfo from '../components/ProfileInfo';
import { Link } from '@reach/router';
import styles from '../styles/BlogList.module.css'
import CommentForm from '../components/CommentForm';
import Header from '../components/Header';


const Home = () => {
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
      axios.get('http://localhost:8000/api/user/getLoggedInUser', {withCredentials:true})
          .then(res=>{ setUser(res.data);
          })
    },[])

    const changeBlogs = () =>{
      setShowUserBlogs(!showUserBlogs)
    }

  return (

    <div>
      <Header/>
      <div className='row'>

        <div className='col-6 d-flex align-items-center mt-5 flex-column'>

          {/* Pass user info to Profile component as a prop, so we can reuse that component */}
          <ProfileInfo loggedInUserProp = {user} /> 

          {/* Use this button to toggle between All Blogs and My Blogs */}
          {
            showUserBlogs ?
              <button onClick={changeBlogs} className={`button rounded p-2 mt-2 fw-bold`}>All Blogs</button>
            :
              <button onClick={changeBlogs} className={`button rounded p-2 mt-2 fw-bold`}>My Blogs</button>
          }
        </div>

        <div className='col'>
          { loaded && <BlogList filterId={user} showUserBlogs={showUserBlogs}/>}

        </div>

      </div>
    </div>
  )
}

export default Home
