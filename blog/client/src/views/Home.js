
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BlogList from '../components/BlogList';
import ProfileInfo from '../components/ProfileInfo';
import CommentForm from '../components/CommentForm';



const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState();
  const [loaded, setLoaded] = useState(false);
  const [showBlogsTest, setShowBlogsTest] = useState(false);


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
      setShowBlogsTest(!showBlogsTest)
      console.log(showBlogsTest)
    }

  return (

    <div className='container'>
          {/* <ProfileInfo />  */}
      <div className='row'>

        <div className='col'>

          {/* Use this button to toggle between All Blogs and My Blogs */}
          {
            showBlogsTest ?
              <button onClick={changeBlogs} className='btn btn-primary'>My Blogs</button>
            :
              <button onClick={changeBlogs} className='btn btn-primary'>All Blogs</button>
          }
        </div>

        <div className='col'>
          <h2>Blogs start here</h2>
          <BlogList  showUserBlogs={showBlogsTest}/> 
        </div>

      </div>
    </div>
  )
}

export default Home
