import React from 'react';
import { navigate } from "@reach/router";
import axios from "axios"
import styles from '../styles/BlogList.module.css'


const Header = () => {
  const logout = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/user/logout", {
      // left blank because we have no body but we need an empty body
      // so that post can get to the third parameter.
    }, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data)
      navigate("/")
    })
    .catch(err => {
      console.log(err)
    });
  };

  return (
    <div className="container">
      <div className="d-flex col-6 offset-md-7 justify-content-between">
      </div>

      <nav className={`${styles.blogContainer}  ${styles.bgColorLightBlue} rounded mb-2`}>
      <form className={` ${styles.bgColorLightBlue} rounded mb-2 form-inline`}>

          <button className={`btn btn-sm ${styles.button}`} onClick={() => navigate("/home")} type="button" >Home</button>
          <button className={`btn btn-sm ${styles.button}`} onClick={() => navigate("/create")} type="button" >Create a New Blog</button>
    
          <button className={`btn btn-sm ${styles.button}`} onClick={(e) => logout(e)} type="button" >Logout</button>

      </form>
      </nav>
    </div>


  )
}

export default Header
