
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BlogList from '../components/BlogList';
import ProfileInfo from '../components/ProfileInfo';


const Home = () => {
  const [blogs, setBlogs] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/blogs')
            .then(res=>{
                setBlogs(res.data);
                setLoaded(true);
            });
    },[])
  return (

    <div className='container'>
      <div className='row'>
        <div className='col'>
          <ProfileInfo /> 
        </div>
        <div className='col'>
          <h2>Blogs start here</h2>
          { loaded && <BlogList filter="USER-ID" showUserBlogs={false}/> }
        </div>
      </div>
    </div>
  )
}

export default Home
