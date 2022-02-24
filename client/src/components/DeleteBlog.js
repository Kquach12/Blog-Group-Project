import React from 'react'
import axios from 'axios';
import { navigate } from "@reach/router";
import styles from '../styles/BlogList.module.css'

const DeleteBlog = (props) => {
    const { id, onSubmitProp } = props

    const onClickDelete = (e) => {
        onSubmitProp(id)
    }
    return (
        <button className={`button rounded p-2`}  onClick={ onClickDelete }>Delete</button>
    )
}

export default DeleteBlog
