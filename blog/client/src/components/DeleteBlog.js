import React from 'react'
import axios from 'axios';
import { navigate } from "@reach/router";
import styles from '../styles/BlogList.module.css'

const DeleteBlog = (props) => {
    const { id } = props

    const onClickDelete = (e) => {
        axios.delete(`http://localhost:8000/api/blogs/${id}`, {
            withCredentials: true,
        })
            .then((res) => {
                console.log(res.data);
                navigate('/my-blogs');
            })
            .catch((err) =>  {
                if(err.response.status === 401) {
                    navigate('/')
                } 
                console.log(err.response);
            });
    }
  return (
    <span className='bg-white'>
      <button className={`${styles.button} btn btn-primary`}  onClick={ onClickDelete }>Delete</button>
    </span>
  )
}

export default DeleteBlog
