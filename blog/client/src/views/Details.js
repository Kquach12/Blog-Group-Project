import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import DeleteBlog from '../components/DeleteBlog';
import styles from '../styles/BlogList.module.css'
import CommentForm from '../components/CommentForm';
import { format } from 'date-fns';
import Header from '../components/Header';

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
  }, [comments])

  useEffect(()=>{
    axios.get('http://localhost:8000/api/user/getLoggedInUser', {withCredentials:true})
        .then(res=>{ setUser(res.data);
        })
  },[])

// NOTE: delete button at the bottom still needs the delete functionality. 

  return (
    
      <div>

          <Header/>

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
            {/* {comments} */}
          </div>

          {
            loaded &&
            (blogCreator === user._id && loaded) ?
              <div className="bg-white p-2 d-flex justify-content-start">
                <button onClick={() => navigate(`/edit/${id}`)} type="button" className={`button rounded p-2 me-2 `} >Edit</button>
                
                <DeleteBlog  id={id}/>
              </div>
            :
              null
          }
        </div>
        <div >
          <h4>Comments</h4>
          <table className='table table-striped'>
            <tbody>
              {
                loaded &&
                blog.comments.slice(0).reverse().map((comment) => {
                  return(
                      <tr key={comment._id}>
                        <td style={{"width": "16.66%"}}>
                          {comment.createdBy.firstName} {comment.createdBy.lastName} <br/> 
                          {format(new Date(comment.createdAt), ' MMMM-dd hh:mm')}
                        </td>
                        {/* <td style={{'borderBottom':'none'}}> {comment.createdBy.firstName} {comment.createdBy.lastName} </td> */}
                        <td>{comment.commentText}</td>
                      </tr>
                  )
                })
              }

            </tbody>
          </table>

            {
              loaded &&
              <CommentForm blogId={blog._id} initialComment="" comments={comments} setComments={setComments} />
            } 
        </div>

        </div>

      </div>

      
    
  )
}

export default Details
