import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import BlogForm from '../components/BlogForm';


const Edit = (props) => {
    const { id } = props;
    const [blog, setBlog] = useState();
    const [loaded, setLoaded] = useState();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/blogs/' + id)
            .then(res => {
                setBlog(res.data)
                setLoaded(true)
            })
            .catch(err=>{
                navigate("/error")
            })
    }, [])
    const updateBlog = blog => {
        axios.put('http://localhost:8000/api/blogs/' + id, blog, {withCredentials: true})
            .then(res => navigate('/home'))
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                console.log(errorResponse)
                setErrors(errorResponse);
            })  
    }
    return (
        <div>
            {loaded && (
                <div>
                    {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
                    <BlogForm
                        onSubmitProp={updateBlog}
                        initialBlogPostTitle={blog.blogPostTitle}
                        initialBlogPostDescription={blog.blogPostDescription}
                        initialBlogPostContent={blog.blogPostContent}
                        errors = {errors}
                    />
                </div>
            )}

        </div>
    )
}
export default Edit;