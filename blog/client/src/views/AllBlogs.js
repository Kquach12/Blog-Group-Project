
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BlogList from '../components/BlogList';
import ProfileInfo from '../components/ProfileInfo';
import CommentForm from '../components/CommentForm';



const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState();
  const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/blogs')
            .then(res=>{
                setBlogs(res.data);
                setLoaded(true);
            }).then(axios.get('http://localhost:8000/api/user/getLoggedInUser')
                .then(res => setUser(res.data)));;
    },[])
  return (

    <div className='container'>
      <div className='row'>
        <div className='col'>
          <ProfileInfo /> 
        </div>
        <div className='col'>
          <h2>Blogs start here</h2>
          { loaded && <BlogList filter={user._id} showUserBlogs={false}/> }
        </div>
      </div>
    </div>
  )
}

export default AllBlogs