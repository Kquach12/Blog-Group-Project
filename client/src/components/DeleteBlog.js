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
                navigate('/home');
            })
            .catch((err) =>  {
                if(err.response.status === 401) {
                    navigate('/')
                } 
                console.log(err.response);
            });
    }
  return (
      <button className={`button rounded p-2`}  onClick={ onClickDelete }>Delete</button>
  )
}

export default DeleteBlog
