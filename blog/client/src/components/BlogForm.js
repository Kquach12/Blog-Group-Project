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
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className='row'>
                    <div className='form-group col-md-6 offset-md-3'>
                    
                        <label className='mt-4'>TITLE</label><br/>
                        <input type="text" value={blogPostTitle} className='form-control' onChange = {(e)=>setBlogPostTitle(e.target.value)}/>
                    
                    
                        <label className='mt-4'>DESCRIPTION</label><br/>
                        <textarea value={blogPostDescription} className='form-control' onChange = {(e)=>setBlogPostDescription(e.target.value)} rows={3}></textarea>
                    
                        <label>CONTENT</label><br/>
                        <textarea value={blogPostContent} className='form-control' onChange = {(e)=>setBlogPostContent(e.target.value)} rows={10}></textarea>
                        <input type="submit" className='btn btn-outline-primary mt-3' style={{'display':'block', 'width':'100%'}}/>
                    </div>

                </div>
            </form>
        </div>
    )
}
export default BlogForm;