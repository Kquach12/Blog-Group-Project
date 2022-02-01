import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import styles from '../styles/BlogList.module.css'



const BlogList = (props) => {
    const {filterId, showUserBlogs} = props
    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/blogs', {withCredentials: true})
            .then(res => setBlogs(res.data))
    }, [showUserBlogs])


    

//Display list of blogs depending on whether we want to see active user's blogs or all other blogs
    return (
        <div>
            {
                // Show a user's blogs
                showUserBlogs ?
                    blogs.filter(blog => blog.userCreatingId._id == filterId._id).map(filteredBlog =>{
                        return(
                            <div key={filteredBlog._id} className={`${styles.blogContainer} rounded mb-2`}>
                                <div className={`d-flex justify-content-between align-items-center p-2 ${styles.blogContainerName}`}>
                                    <p className={`${styles.bgColorLightBlue} fw-bold`}>{filteredBlog.userCreatingId.firstName} {filteredBlog.userCreatingId.lastName}</p>
                                    <p className={`${styles.bgColorLightBlue} fw-bold`}>{filteredBlog.createdAt.split("T")[0]}</p>
                                </div>
                                <div className='bg-white p-2'>
                                    <h3 className='bg-white'>{filteredBlog.blogPostTitle}</h3>
                                    <p className='bg-white'>{filteredBlog.blogPostDescription}</p>
                                    <span>
                                        <Link to={"/details/" + filteredBlog._id} ><button className={`${styles.button} rounded p-2`}>Open</button></Link>
                                    </span>
                                </div>
                            </div>
                        )
                    }
                    )
                :
                //Show all other blogs
                    blogs.filter(blog => blog.userCreatingId._id != filterId._id).map(filteredBlog =>{
                        return(
                            <div key={filteredBlog._id} className={`${styles.blogContainer} rounded mb-2`}>
                                <div className={`d-flex justify-content-between align-items-center p-2 ${styles.blogContainerName}`}>
                                    <p className={`${styles.bgColorLightBlue} fw-bold`}>{filteredBlog.userCreatingId.firstName} {filteredBlog.userCreatingId.lastName}</p>
                                    <p className={`${styles.bgColorLightBlue} fw-bold`}>{filteredBlog.createdAt.split("T")[0]}</p>
                                </div>
                                <div className='bg-white p-2'>
                                <h3 className='bg-white'>{filteredBlog.blogPostTitle}</h3>
                                <p className='bg-white'>{filteredBlog.blogPostDescription}</p>
                                <span>
                                    <Link to={"/details/" + filteredBlog._id}><button className={`${styles.button} btn btn-primary`}>Open</button></Link>
                                </span>
                                </div>
                            </div>
                        )
                    }
                    )
            }
        </div>
    )
}
export default BlogList;