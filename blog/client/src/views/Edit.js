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
            .then(res => navigate('/'))
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })  
    }
    return (
        <div>
            {loaded && (
                <div>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <BlogForm
                        onSubmitProp={updateBlog}
                        initialBlogPostTitle={blog.blogPostTitle}
                        initialBlogPostDescription={blog.blogPostDescription}
                        initialBlogPostContent={blog.blogPostContent}
                    />
                </div>
            )}

        </div>
    )
}
export default Edit;