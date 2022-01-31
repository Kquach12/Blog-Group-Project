import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/BlogList.module.css'

const UserRegister = () => {

  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userImage, setUserImage] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmReg, setConfirmReg] = useState("");
  const [errors, setErrors] = useState({});

  const onChangeImage = (e) =>{
    userImage(e.target.files[0])
  }

  const onSubmitHandler = (e) => {
      e.preventDefault();
      
      // if we decide to add upload photo function we need to submit the newUser with formData
      // const newUser = new FormData();

      //   formData.append("firstName", firstName);
      //   formData.append("lastName", lastName);
      //   formData.append("email", email);
      //   formData.append("userImage", userImage);
      //   formData.append("password", password);
      //   formData.append("confirmPassword", confirmPassword);


      const newUser = {
          firstName,   
          lastName,
          email,
          userImage,
          password,
          confirmPassword
      }
      axios.post('http://localhost:8000/api/user/register', 
      newUser,
      {
        withCredentials: true
      })
    
        .then((res) =>{
            console.log(newUser)
            console.log(res); 
            console.log(res.data);
            
            setFirstName("");
            setLastName("");
            setEmail("");
            setUserImage("");
            setPassword("");
            setConfirmPassword("");
            setErrors({});
            setConfirmReg("You have successfully registered.")
            // localStorage.setItem("userId", res.data.user._id )
            // const userId = localStorage.getItem("userId") || "not logged in"
          
        })
        .catch((err) => {
            console.log(err);
            console.log(err.response.data.errors);
            if (err.response.data.errors) {
                setErrors(err.response.data.errors);
            } 
           
        });     
  }

  return (
      
  <div className="row">
    <h3> Register </h3>
    {
      confirmReg ?
      <h6 style= {{color: "green"}}> {confirmReg} </h6>
      : null
    }
      <form className={`${styles.blogContainer} rounded mb-2 p-2`} onSubmit={ onSubmitHandler }>
        {/* once the upload function is up make sure to add encType="multipart/form-data" to the form*/}
        <div className="mb-3 col-8">
            <label className="form-label">First Name:</label>
            <input className="form-control" type="text" value={firstName}  onChange={(e) => setFirstName(e.target.value)}/>
              {
                errors.firstName ?
                  <p className="text-danger" > {errors.firstName.message} </p>
                  : null
              }
        </div>
        <div className="mb-3 col-8">
            <label className="form-label">Last Name:</label>
            <input className="form-control" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              {
                errors.lastName ?
                  <p className="text-danger" > {errors.LastName.message} </p>
                  : null
              }
        </div>  
        <div>
          <div className="mb-3 col-8">
            <label className="form-label">Email Name:</label>
            <input className="form-control" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
              {
                errors.email ?
                  <p className="text-danger" > {errors.email.message} </p>
                  : null
              }
        </div>
        <div className="mb-3 col-8">
            <label className="form-label">Password:</label>
            <input className="form-control" type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
              {
                errors.password?
                  <p className="text-danger" > {errors.password.message} </p>
                  : null
              }
        </div>
        <div className="mb-3 col-8">
            <label className="form-label">Confirm Password:</label>
            <input className="form-control" type="password"  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
              {
                errors.confirmPassword?
                  <p className="text-danger" > {errors.comfirmPassword.message} </p>
                  : null
              }
        </div>  
        <div className="mb-3 col-8">
                  <label className="form-label">Upload Photos</label>
                  <input className="form-control form-control-sm" type="file" name="image" onChange = { onChangeImage }/>
                  {
                      errors.image ?
                      <p className="text-danger" > {errors.image.message} </p>
                      : null
                  }
        </div>
        <span>
          <button  className={`${styles.button} btn btn-primary`}>Register</button>
        </span>
        </div>
    </form>
  </div>
      
  )
}
export default UserRegister;
