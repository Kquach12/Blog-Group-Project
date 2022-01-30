
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BlogList from '../components/BlogList';
import ProfileInfo from '../components/ProfileInfo';
import { Link } from '@reach/router';
import styles from '../styles/BlogList.module.css'
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
      <div className='row'>

        <div className='col-6 d-flex align-items-center flex-column'>
          <ProfileInfo /> 

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
          <BlogList filterId={user}  showUserBlogs={showBlogsTest}/>  {/* Will add "user_.id" to filterId when the backend is setup"}

          {/* START - This is a test blog post. Will delete later and move to BlogList */}
          <div className={`${styles.blogContainer} rounded mb-2`}>
            <div className={`d-flex justify-content-between align-items-center p-2 ${styles.blogContainerName}`}>
                <p className={`${styles.bgColorLightBlue} fw-bold`}>Kenny Quach</p>
                <p className={`${styles.bgColorLightBlue} fw-bold`}>12/25/2021</p>
            </div>
            <div className='bg-white p-2'>
              <h3 className='bg-white'>Stocks Keep Going Down</h3>
              <p className='bg-white'>This is a very sad week because stocks keep going down, and I keep losing money because of it.</p>
              <span>
                  <Link to={"/details"}><button className={`${styles.button} btn btn-primary`}>Open</button></Link>
              </span>
            </div>
          </div>
          <div className={`${styles.blogContainer} rounded mb-2`}>
            <div className={`d-flex justify-content-between align-items-center p-2 ${styles.blogContainerName}`}>
                <p className={`${styles.bgColorLightBlue} fw-bold`}>Kenny Quach</p>
                <p className={`${styles.bgColorLightBlue} fw-bold`}>12/25/2021</p>
            </div>
            <div className='bg-white p-2'>
              <h3 className='bg-white'>Stocks Keep Going Down</h3>
              <p className='bg-white'>This is a very sad week because stocks keep going down, and I keep losing money because of it.</p>
              <span>
                  <Link to={"/details"}><button className={`${styles.button} btn btn-primary`}>Open</button></Link>
              </span>
            </div>
          </div>
          <div className={`${styles.blogContainer} rounded mb-2`}>
            <div className={`d-flex justify-content-between align-items-center p-2 ${styles.blogContainerName}`}>
                <p className={`${styles.bgColorLightBlue} fw-bold`}>Kenny Quach</p>
                <p className={`${styles.bgColorLightBlue} fw-bold`}>12/25/2021</p>
            </div>
            <div className='bg-white p-2'>
              <h3 className='bg-white'>Stocks Keep Going Down</h3>
              <p className='bg-white'>This is a very sad week because stocks keep going down, and I keep losing money because of it.</p>
              <span>
                  <Link to={"/details"}><button className={`${styles.button} btn btn-primary`}>Open</button></Link>
              </span>
            </div>
          </div>
          {/* end - This is a test blog post. Will delete later */}

        </div>

      </div>
    </div>
  )
}

export default Home
