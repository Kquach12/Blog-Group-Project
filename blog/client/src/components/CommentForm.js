import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';


const CommentForm = (props) => {
    const { initialComment, comments, setComments, blogId } = props;
    const [ comment, setComment ] = useState(initialComment);
    const [ errors, setErrors ] = useState([]);

    const addComment = (e) => {
        e.preventDefault();
        const commentData = {
            commentText: comment,
            blogId: blogId
        }
        console.log(comment)
        axios.post('http://localhost:8000/api/comments', commentData,
        {
            withCredentials: true,
        })
            .then((res) => {
                setComments([...comments, res.data])
                console.log(res.data);
                setComment("");
            })
            .catch((err) => {
                console.log(err);
                // setErrors(err.response.data.errors);
            })
    }

    return(
        <div className='form-group text-start'>
            <form onSubmit={addComment}>
                {/* {
                    errors.comment ?
                    <label className='mt-3 mb-2 eventDetailLabels red' htmlFor='comment'>A {errors.comment.message} if you want to push that button</label> :
                    <label className='mt-3 mb-2 eventDetailLabels' htmlFor='comment'>Add a Comment</label>
                } */}
                <label className='mt-3 mb-2 eventDetailLabels' htmlFor='comment'>Add a Comment</label>

                <input type="text" className="form-control" value={comment} onChange={(e) => setComment(e.target.value)} />
            
                <button type='submit' className='button rounded p-2 mt-2'>Add</button>
            </form>
        </div>
        
    )
}
export default CommentForm;