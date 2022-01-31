
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BlogList from '../components/BlogList';
import ProfileInfo from '../components/ProfileInfo';
import { Link } from '@reach/router';
import styles from '../styles/BlogList.module.css'
import CommentForm from '../components/CommentForm';



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
      <div className='row'>

        <div className='col-6 d-flex align-items-center flex-column'>
          <ProfileInfo /> 

          {/* Use this button to toggle between All Blogs and My Blogs */}
          {
            showUserBlogs ?
              <button onClick={changeBlogs} className='btn btn-primary'>All Blogs</button>
            :
              <button onClick={changeBlogs} className='btn btn-primary'>My Blogs</button>
          }
        </div>

        <div className='col'>
          { loaded && <BlogList filterId={user._id} showUserBlogs={showUserBlogs}/>}

        </div>

      </div>
    </div>
  )
}

export default Home
