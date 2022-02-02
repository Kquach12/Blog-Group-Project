import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import DeleteBlog from '../components/DeleteBlog';
import styles from '../styles/BlogList.module.css'
import CommentForm from '../components/CommentForm';


const Details = (props) => {
  const {id} = props;
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [comments, setComments] = useState([]);
  const [blogCreator, setBlogCreator] = useState('')
  const [user, setUser] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [blog, setBlog] = useState();

  useEffect(() =>
  {
    axios.get(`http://localhost:8000/api/blogs/${id}`, {withCredentials: true})
      .then(res => {
        setTitle(res.data.blogPostTitle)
        setDescription(res.data.blogPostDescription)
        setContent(res.data.blogPostContent)
        // setComments(res.data.comments)
        setBlogCreator(res.data.userCreatingId)
        setBlog(res.data);
        setLoaded(true);
      })
  }, [id])

  useEffect(()=>{
    axios.get('http://localhost:8000/api/user/getLoggedInUser', {withCredentials:true})
        .then(res=>{ setUser(res.data);
        })
  },[])

// NOTE: delete button at the bottom still needs the delete functionality. 

  return (
    
      
        <div className={`row ${styles.blogContainer} rounded mb-2`}>
          <div className={`${styles.blogContainerName}`}>
            <h2 className={`${styles.bgColorLightBlue} fw-bold`}>{title}</h2>
          </div>
          <div className="bg-white">
            <h4 className={`bg-white fw-bold mt-2  ${styles.label}`}>{description}</h4>
            <br />
            <p className={`bg-white mt-2 ${styles.label}`}>{content}</p>

          </div>
          <div className="edit-blog-comments">
            {comments}
          </div>

          {
            blogCreator == user._id ?
              <div className="bg-white p-2 d-flex justify-content-start">
                <button onClick={() => navigate(`/edit/${id}`)} type="button" className={`${styles.button} rounded p-2 me-2 `} >Edit</button>
                
                <DeleteBlog  id={id}/>
              </div>
            :
              null
          }
          {
            loaded &&
            blog.comments.slice(0).reverse().map((comment) => {
              return(
                <div key={comment._id}>
                  <p>
                    {comment.createdBy.firstName} {comment.createdBy.lastName} {comment.commentText} </p>
                </div>
              )
            })
          }

          {
            loaded &&
            <CommentForm blogId={blog._id} initialComment="" comments={comments} setComments={setComments} />
          } 
        </div>
      
    
  )
}

export default Details
