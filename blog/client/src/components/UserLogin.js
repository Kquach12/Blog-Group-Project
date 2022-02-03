import React, { useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import styles from '../styles/BlogList.module.css'


const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    const loggedInUser = {
        email,
        password
    }

    axios.post('http://localhost:8000/api/user/login', 
    loggedInUser, 
    { 
    withCredentials : true
    })
    .then((res) =>{
        console.log("successfully logged in");
        console.log(res.data)

        // sessionStorage.setItem("userId", res.data.user._id)
        // const userId = sessionStorage.getItem("userId") || "not logged in"
        navigate('/home');  
    })
    .catch((err) => {
        console.log(err.response);
        setErrors(err.response.data)
    })
}
  return (

    <div className="container">

      <h3 > Login </h3>
      <form className={`${styles.blogContainer} rounded mb-2 p-2`} onSubmit={ onSubmitHandler }>
        {/* once the upload function is up make sure to add encType="multipart/form-data" to the form*/}
        <div className="mb-3 col-10">
            <label className="form-label">Email:</label>
            <input className="form-control" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
              {/* {
                errors ?
                  <p className="text-danger" > {errors.message} </p>
                  : null
              } */}
        </div>
        <div className="mb-3 col-10">
            <label className="form-label">Password:</label>
            <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              {
                errors ?
                  <p className="text-danger" > {errors.message} </p>
                  : null
              }
        </div>
          <button  className={`button rounded p-2`}>Login</button>
      </form>
    </div>
  )
}

export default UserLogin
