import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import BlogForm from '../components/BlogForm';
import { Link } from '@reach/router';



const CreateBlog = (props) => {
    const [errors, setErrors] = useState([]);

    const addBlog = blog => {
        axios.post('http://localhost:8000/api/blogs', blog)
            .then(res =>{
                navigate("/")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
    }
    return (
        <div className='container'>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <BlogForm
                onSubmitProp={addBlog}
                initialBlogPostTitle={""}
                initialBlogPostDescription={""}
                initialBlogPostContent={""}
            />
        </div>
    )
}
export default CreateBlog;
