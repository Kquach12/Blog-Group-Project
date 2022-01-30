import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

const Details = (props) => {
  const {id} = props;
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [comments, setComments] = useState('')

  useEffect(() =>
  {
    axios.get(`http:localhost:800-/api/blogs/${id}`, {withCredentials: true})
      .then(res => {
        setTitle(res.data.blogPostTitle)
        setDescription(res.data.blogPostDescription)
        setContent(res.data.blogPostContent)
        setComments(res.data.comments)
      })
  }, [id])

// NOTE: delete button at the bottom still needs the delete functionality. 

  return (
    <div>
      <div className="edit-blog-title">
        <h2>{title}</h2>
      </div>
      <div className="edit-blog-body">
        <p>{description}</p>
        <br />
        <p>{content}</p>
      </div>
      <div className="edit-blog-comments">
        {comments}
      </div>
      <div>
        <div><button onClick={() => navigate(`/edit/${id}`)} type="button" class="btn btn-primary">Edit</button></div>
        <div><button type="button" class="btn btn-primary">Delete</button></div>
      </div>
    </div>
  )
}

export default Details
