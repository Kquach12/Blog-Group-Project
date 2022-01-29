import React, { useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
        setErrorMessage(err.response.data.message)
    })
}
  return (

    <div className="container">

      <h3 style={{color: "#7393B3"}}> Login </h3>
      <form className='border p-4' onSubmit={ onSubmitHandler }>
        {/* once the upload function is up make sure to add encType="multipart/form-data" to the form*/}
        <div className="mb-3">
            <label className="form-label">Email:</label>
            <input className="form-control" type="text" value={email} onChange={(e) => setFirstName(e.target.value)}/>
              {
                errors.firstName ?
                  <p className="text-danger" > {errors.email.message} </p>
                  : null
              }
        </div>
        <div className="mb-3">
            <label className="form-label">Password:</label>
            <input className="form-control" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
              {
                errors.firstName ?
                  <p className="text-danger" > {errors.password.message} </p>
                  : null
              }
        </div>
        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>
    </div>
  )
}

export default UserLogin
