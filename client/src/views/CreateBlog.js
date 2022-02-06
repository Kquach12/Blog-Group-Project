import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import BlogForm from '../components/BlogForm';
import { Link } from '@reach/router';
import Header from '../components/Header';


const CreateBlog = (props) => {
    const [errors, setErrors] = useState([]);

    const addBlog = blog => {
        axios.post('http://localhost:8000/api/blogs', blog, {
            withCredentials: true,
        })
            .then(res =>{
                navigate("/home")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                console.log(errorResponse)
                setErrors(errorResponse);
            })            
    }
    return (
        <div>
            <Header/>
            <BlogForm
                onSubmitProp={addBlog}
                initialBlogPostTitle={""}
                initialBlogPostDescription={""}
                initialBlogPostContent={""}
                errors = {errors}
            />
        </div>
    )
}
export default CreateBlog;
