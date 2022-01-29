import React, { useState } from 'react'

const BlogForm = (props) => {

    const {initialBlogPostTitle, initialBlogPostDescription, initialBlogPostContent, onSubmitProp} = props

    const [blogPostTitle, setBlogPostTitle] = useState(initialBlogPostTitle); 
    const [blogPostDescription, setBlogPostDescription] = useState(initialBlogPostDescription);
    const [blogPostContent, setBlogPostContent] = useState(initialBlogPostContent);

    const onSubmitHandler = e => {

        e.preventDefault();

        onSubmitProp({blogPostTitle, blogPostDescription, blogPostContent})
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className='row'>
                <div className='form-group col'>
                
                    <label className='mt-4'>Title</label><br/>
                    <input type="text" value={blogPostTitle} className='form-control' onChange = {(e)=>setBlogPostTitle(e.target.value)}/>
                
                
                    <label className='mt-4'>Description</label><br/>
                    <textarea value={blogPostDescription} className='form-control' onChange = {(e)=>setBlogPostDescription(e.target.value)} rows={4}></textarea>
                
                </div>
                <div className='form-group col'>
                
                    <label>Content</label><br/>
                    <textarea value={blogPostContent} className='form-control' onChange = {(e)=>setBlogPostContent(e.target.value)} rows={10}></textarea>
                </div>
            </div>
            <input type="submit" className='btn btn-outline-primary mt-3' style={{'display':'block', 'width':'100%'}}/>
        </form>
    )
}
export default BlogForm;